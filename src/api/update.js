import { baseEndpoint, baseUrl, password, username } from "../constants";
import { Buffer } from "buffer";

const update = (type, data, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}${type}`, {
    method: "PUT",
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

export default update;
