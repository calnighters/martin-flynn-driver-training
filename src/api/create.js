import { baseEndpoint, baseUrl } from "../constants";

const create = (data, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(
    (result) => {
      callbackSuccess(result);
    },
    (error) => {
      console.log(error);
      callbackError(error);
    }
  );

export default create;
