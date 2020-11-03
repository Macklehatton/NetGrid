import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;

export default {
  fetchAllUsers: function() {
    return fetch(baseUrl + "/users/")
      .then(handleResponse)
      .catch(handleError);
  },
  deleteUser: function(userId) {
    return fetch(baseUrl + "/users/" + userId, { method: 'delete' })
      .then(handleResponse)
      .catch(handleError);
  }
}
