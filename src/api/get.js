import { baseUrl, baseEndpoint } from "../constants";

const get = (type, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}${type}`)
    .then((res) => res.json())
    .then(
      (result) => callbackSuccess(result),
      (error) => callbackError(error)
    );

export default get;
