const appConfig = require("./src/config/appConfig");
const routes = require("./src/routes/routeIndex");
const constants = require("./src/config/constant");
const moment = require("moment");

const fastify = require("fastify")({ logger: true });
fastify
  .register(require("@fastify/cors"), {
    origin: true,
  })
  .register(routes, { prefix: "/iot" })
  .register(require("fastify-knexjs"), appConfig.database)
  .register(require("@fastify/jwt"), {
    secret: "secret",
  })
  .decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (error) {
      reply.send(error);
    }
  });

fastify.post("/get-ip", async (request, reply) => {
  console.log(request.body);
});

//authenticate
fastify.post("/login", async (request, reply) => {
  console.log(request.body);
  try {
    const user = await fastify
      .knex("users")
      .select("email", "user_name", "is_verified")
      .where({
        email: request.body.email,
      });

    console.log(user);
    if (user.length === 0) {
      reply.code(constants.httpStatus.BAD_REQUEST).send({
        msg: "user not found",
      });
    } else {
      const token = fastify.jwt.sign(user[0]);
      reply
        .code(constants.httpStatus.SUCCESS)
        .send({ token: token, msg: "User loggedin successfully" });
    }
  } catch (error) {
    console.log(error.message);
    reply.code(constants.httpStatus.SERVER_ERROR).send({ msg: error.message });
  }
});
fastify.put("/register", async (request, reply) => {
  try {
    const isUserAvailable = await fastify.knex("users").select("*").where({
      email: request.body.email,
    });

    if (isUserAvailable.length === 0) {
      const user = {
        user_name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        is_verified: true,
      };
      console.log(user);
      const result = await fastify.knex("users").insert(user);
      reply.code(constants.httpStatus.SUCCESS).send({
        msg: "user created successfully",
      });
    } else {
      console.log("user already exists");
      reply.code(constants.httpStatus.BAD_REQUEST).send({
        msg: "user already exists",
      });
    }
  } catch (error) {
    console.log(error.message);
    reply.code(constants.httpStatus.SERVER_ERROR).send({ msg: error.message });
  }
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
