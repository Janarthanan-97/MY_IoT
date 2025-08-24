import { Box, Typography } from "@mui/material";
import React from "react";
import CustomForm from "../../CustomComponents/CustomFormComponents/CustomForm";
import { appConstants } from "../../AppMeta/AppConstants/appConstants";
import { cssStyles } from "../../AppMeta/AppStyle/cssStyle";
import { useNavigate } from "react-router-dom";
import { appColors } from "../../AppMeta/AppStyle/appColor";
import { authInstances } from "../../Utils/useAxios";
import { toast } from "react-toastify";

function Register() {
  //hooks
  const navigate = useNavigate();
  //states

  const handleOnClickLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (formData) => {
    try {
      console.log("--register--", formData);
      const response = await authInstances.put("/user/register", formData);
      toast.success(response.data.msg, {
        autoClose: 2500,
        closeOnClick: true,
      });
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.msg, {
        autoClose: 2500,
        closeOnClick: true,
      });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <CustomForm
          data={[
            {
              title: "Register",
              formData: [
                {
                  inputType: appConstants.customForm.inputType.input,
                  defaultValue: "",
                  name: "first_name",
                  isRequired: true,
                  placeHolder: "First Name",
                },
                {
                  inputType: appConstants.customForm.inputType.input,
                  defaultValue: "",
                  name: "last_name",
                  isRequired: true,
                  placeHolder: "Last Name",
                },
                {
                  inputType: appConstants.customForm.inputType.input,
                  textFieldType: appConstants.customForm.textFieldType.email,
                  defaultValue: "",
                  name: "email",
                  isRequired: true,
                  placeHolder: "Email",
                },
                {
                  inputType: appConstants.customForm.inputType.input,
                  textFieldType:
                    appConstants.customForm.textFieldType.confirmPassword,
                  defaultValue: "",
                  name: "password",
                  isRequired: true,
                  placeHolder: "Password",
                },
              ],
            },
          ]}
          submitButtonName={"Register"}
          handleSubmit={handleSubmit}
          hideCancel={true}
        />
      </Box>
      <Typography>Already have an account?</Typography>
      <Typography
        onClick={handleOnClickLogin}
        sx={{ color: appColors.link, cursor: "pointer" }}
      >
        Login
      </Typography>
    </Box>
  );
}

export default Register;
