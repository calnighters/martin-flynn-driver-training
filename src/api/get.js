import { baseUrl, baseEndpoint } from "../constants";

const get = (callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}`)
    .then((res) => res.json())
    .then(
      (result) => callbackSuccess(result),
      (error) => callbackError(error)
    );

export default get;
