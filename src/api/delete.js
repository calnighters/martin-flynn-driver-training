import { auth, baseEndpoint, baseUrl } from "../constants";

const deleteReview = (id, callbackSuccess, callbackError) =>
  fetch(`${baseUrl}${baseEndpoint}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: auth,
    },
  }).then(
    (result) => {
      callbackSuccess(result);
    },
    (error) => callbackError(error)
  );

export default deleteReview;
