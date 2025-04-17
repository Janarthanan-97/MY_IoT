const { default: axios } = require("axios");

let routes = (fastify, options, done) => {
  fastify.post(
    "/protected",
    {
      preHandler: [fastify.authenticate],
    },
    async (request, reply) => {
      try {
        const { timer } = request.body;
        console.log("---timer---", timer);
        const res = await axios.post("http://192.168.0.117/alarm", {
          timer: timer * 1000,
        });
        console.log("---res---", res);
        reply.send(res.data);
      } catch (error) {
        console.log("---error---", error);
      }
    }
  );
  fastify.get("/", async (request, reply) => {
    try {
      let people = await fastify.knex("public.people").select("*");
      console.log("---people---", people);
      reply.send(people);
    } catch (error) {
      console.log(error);
    }
  });
  done();
};

module.exports = routes;
