import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import RenderInputBasedOnProps from "./RenderInputBasedOnProps";
import CustomButton from "../CustomInputFields/CustomButton";
import { getdataFromNestedObject } from "../../Utils/CustomFormUtils";

function CustomForm({ data, handleSubmit, submitButtonName, hideCancel }) {
  //Variables
  let { isRequired, formDataObj, errorsObj, hintObj } =
    getdataFromNestedObject(data);
  //States
  const [formData, setFormData] = useState(formDataObj);
  const [errors, setErrors] = useState(errorsObj);
  const [hint, setHint] = useState(hintObj);
  const handleOnChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = () => {
    let hasError = false;
    let errorOnSubmit = errors;
    let hintOnSubmit = hint;
    for (const key in errors) {
      if (formData[key] === "" && isRequired[key]) {
        errorOnSubmit[key] = true;
        hintOnSubmit[key] = "This field is mandatory";
        hasError = true;
        break;
      } else {
        errorOnSubmit[key] = false;
        hintOnSubmit[key] = "";
      }
    }
    setErrors(errorOnSubmit);
    setHint(hintOnSubmit);

    if (!hasError) {
      handleSubmit(formData);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {data.map((section, index) => {
        return (
          <Box
            key={index}
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Box>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                {section.title}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {section.formData &&
                section.formData.map((field, index) => {
                  return (
                    <Box key={index}>
                      <RenderInputBasedOnProps
                        field={field}
                        handleOnChange={handleOnChange}
                        error={errors}
                        hint={hint}
                      />
                    </Box>
                  );
                })}
            </Box>
          </Box>
        );
      })}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {!hideCancel && <CustomButton label={"Cancel"} />}
        <CustomButton label={submitButtonName} onClick={handleFormSubmit} />
      </Box>
    </Box>
  );
}

export default CustomForm;
