export const getdataFromNestedObject = (data) => {
  let formDataObj = {};
  let errorsObj = {};
  let isRequired = {};
  let hintObj = {};
  try {
    data.map((section) => {
      section.formData.map((field) => {
        formDataObj[field.name] = field.defaultValue ? field.defaultValue : "";
        errorsObj[field.name] = false;
        isRequired[field.name] = field.isRequired ? field.isRequired : false;
        hintObj[field.name] = "";
      });
    });
    return { isRequired, formDataObj, errorsObj, hintObj };
  } catch (error) {
    console.log(error);
  }
};
