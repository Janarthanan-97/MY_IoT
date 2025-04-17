import { Box, Typography } from "@mui/material";
import React from "react";
import CustomForm from "../../CustomComponents/CustomFormComponents/CustomForm";
import { appConstants } from "../../AppMeta/AppConstants/appConstants";
import { cssStyles } from "../../AppMeta/AppStyle/cssStyle";
import { useNavigate } from "react-router-dom";
import { appColors } from "../../AppMeta/AppStyle/appColor";
import { authInstances } from "../../Utils/useAxios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import actionTypes from "../../AppMeta/AppConstants/actionTypes";

function Login() {
  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //states

  const handleOnClickRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await authInstances.post("/login", formData);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: actionTypes.USER_LOGIN, payload: response.data });
      toast.success(response.data.msg);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Box sx={cssStyles.authStyle.mainBox}>
      <Box>
        <CustomForm
          data={[
            {
              title: "Login",
              formData: [
                {
                  inputType: appConstants.customForm.inputType.input,
                  textFieldType: appConstants.customForm.textFieldType.email,
                  name: "email",
                  isRequired: true,
                  placeHolder: "Email",
                },
                {
                  inputType: appConstants.customForm.inputType.input,
                  name: "password",
                  isRequired: true,
                  placeHolder: "Password",
                },
              ],
            },
          ]}
          submitButtonName={"Login"}
          handleSubmit={handleSubmit}
          hideCancel={true}
        />
      </Box>
      <Typography>Don't have an account?</Typography>
      <Typography
        onClick={handleOnClickRegister}
        sx={{ color: appColors.link, cursor: "pointer" }}
      >
        Register
      </Typography>
    </Box>
  );
}

export default Login;
