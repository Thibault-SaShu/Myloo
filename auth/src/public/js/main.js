
import "babel-polyfill";
import axios from "axios";

const loginForm = document.querySelector('.login-form');
const loginContent = document.querySelector('.login-content')
const waitContent = document.querySelector('.wait-content')
const popupAlert = document.querySelector('.popup-window');
const popupText = document.querySelector('.popup-text');

const transitionTime = .5
const alertTime = 5

const login = async (email, password) => {
  switchToWaitMode();
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/users/signin',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    showAlert("Connected !!")
  } catch (err) {
    switch (err.response.status){
      case 520 :
        showAlert("Can't connect to the server")
            break
      case 400 :
        showAlert("Bad email or password")
            break
      default:
        showAlert("Connection error")
    }
  } finally {
    switchToLoginMode()
  }
};

const switchToWaitMode = () =>{
  waitContent.style.display = "flex"
  waitContent.style.opacity = 1
  loginContent.style.opacity = 0
}

const switchToLoginMode = ()=>{
  waitContent.style.opacity = 0
  loginContent.style.opacity = 1
  setTimeout(()=>{
    waitContent.style.display = "none"
  }, transitionTime*1000)
}

const showAlert = (message) =>{
  popupAlert.style.display = "flex"
  popupText.textContent=message
  setTimeout(()=>{


    const popupHideAnim = {
      opacity: [1, 0],
      transform: ["scale(1)", "scale(0)"],
    }

    const popupHideTiming = {
      duration: transitionTime*1000,
      iterations: 1,
      animationFillMode: "forward"
    };

    popupAlert.animate(popupHideAnim,popupHideTiming )
  }, alertTime*1000)

  setTimeout(()=>{
    popupAlert.style.display = "none"
  },alertTime*1000+transitionTime*1000)

}

if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password)
  });

