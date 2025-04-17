import React, { useState } from "react";
import { appConstants } from "../../AppMeta/AppConstants/appConstants";
import CustomTextField from "../CustomInputFields/CustomTextField";

function RenderInputBasedOnProps({ field, handleOnChange, error, hint }) {
  const handleChange = (name, value) => {
    handleOnChange(name, value);
  };
  const getInputField = (inputType) => {
    switch (inputType) {
      case appConstants.customForm.inputType.input:
        return (
          <CustomTextField
            field={field}
            error={error[field.name]}
            hint={hint[field.name]}
            handleChange={handleChange}
            label={field.placeHolder}
          />
        );
    }
  };

  return <>{getInputField(field.inputType)}</>;
}

export default RenderInputBasedOnProps;
