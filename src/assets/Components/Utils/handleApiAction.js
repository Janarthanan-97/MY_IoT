import useAxios from "./useAxios";

const handleApiAction = async (props) => {
  const api = useAxios();

  let response = { error: false, msg: "", data: {} };
  let res;
  try {
    switch (props.method) {
      case "get":
        res = await api.get(props.apiPath, { params: props.params || {} });
        break;
      case "post":
        res = await api.post(props.apiPath, props.params);
        break;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default handleApiAction;
