const localData = JSON.parse(localStorage.getItem("usersData"));
const formLogin = document.querySelector("#form-login");
formLogin.addEventListener("submit", (event) => {
	event.preventDefault();
	const inputLogin = document.querySelector("#login");
	const inputPassword = document.querySelector("#passowrd");
	const spanError = document.querySelector("#spanError");
	const textLogin = inputLogin.value;
	const textPassword = inputPassword.value;
	const inputFill = textLogin || textPassword;
	var loginCorrect = false;
	if (!inputFill) {
		spanError.textContent = "É necessário preencher todos os campos";
		spanError.classList.add("error-msg");
		return;
	}
	localData.forEach(function (dataUser) {
		if (
			textLogin == dataUser["login"] &&
      textPassword == dataUser["password"]
		) {
			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
			loginCorrect = true;
		}
	});
	if (!loginCorrect && inputFill) {
		spanError.textContent = "Login ou senha incorretos";
		spanError.classList.add("error-msg");
	}
});
const btnRegister = document.querySelector("#register");
btnRegister.addEventListener("click", function () {
	window.location.href = "register.html";
});