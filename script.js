const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");
const switchButton = document.querySelector(".switch");

const login = () => {
	loginForm.style.left = "30px";
	registerForm.style.left = "430px";
	switchButton.style.left = "0px";
}

const register = () => {
	loginForm.style.left = "-370px";
	registerForm.style.left = "30px";
	switchButton.style.left = "110px";
}
