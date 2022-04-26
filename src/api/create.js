import { baseEndpoint, baseUrl, password, username } from "../constants";
import { Buffer } from "buffer";

const create = (data, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
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
