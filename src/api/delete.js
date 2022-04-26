import { baseEndpoint, baseUrl, password, username } from "../constants";
import { Buffer } from "buffer";

const deleteReview = (id, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
  }).then(
    (result) => {
      callbackSuccess(result);
    },
    (error) => callbackError(error)
  );

export default deleteReview;
