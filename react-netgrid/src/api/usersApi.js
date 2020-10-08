import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/users/";


export default {
  fetchAllUsers: function() {
    return fetch(baseUrl)
      .then(handleResponse)
      .catch(handleError);
  }
}
