import { baseEndpoint, baseUrl } from "../constants";

const deleteReview = (id, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}/${id}`, { method: "DELETE" }).then(
    (result) => {
      callbackSuccess(result);
    },
    (error) => callbackError(error)
  );

export default deleteReview;
