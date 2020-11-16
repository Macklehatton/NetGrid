import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;


async function handleLoginResponse(response) {
  if (response.ok) {
    let text = await response.text()
    let [name, token] = text.split(" ");
    return { name, token };
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export default {
  login: function(username, password) {
    let data = {name: "Mario", password: "123456"}
    return fetch(baseUrl + "/api/services/controller/user/login"
    , { method: 'post'
    , body: JSON.stringify(data) } )
      .then(handleLoginResponse)
      .catch(handleError);
  }
}
