import { colors, FormControl, FormHelperText, TextField } from "@mui/material";
import React, { useState } from "react";
import { appConstants } from "../../AppMeta/AppConstants/appConstants";

function CustomTextField({ field, handleChange, error, label, hint }) {
  //regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //state
  const [hintText, setHintText] = useState(hint);
  //function
  const handleOnChange = (event) => {
    if (field.textFieldType === appConstants.customForm.textFieldType.email) {
      if (emailRegex.test(event.target.value)) {
        setHintText("");
        handleChange(event.target.name, event.target.value);
      } else {
        setHintText("Please enter a valid email");
      }
    }
    handleChange(event.target.name, event.target.value);
  };

  return (
    <>
      <FormControl>
        <TextField
          variant="standard"
          error={error}
          name={field.name}
          onChange={handleOnChange}
          label={label}
        />
        <FormHelperText sx={{ color: "red" }}>{hintText}</FormHelperText>
      </FormControl>
    </>
  );
}

export default CustomTextField;
