function saveLocalStorage(userData) {
	let localData = localStorage.getItem("usersData");
	if (localData) {
		localData = JSON.parse(localData);
		let registrationData = [...localData, userData];
		localStorage.setItem("usersData", JSON.stringify(registrationData));
	} else {
		localStorage.setItem("usersData", JSON.stringify([userData]));
	}
}

function validate(name, lastName, email, login, password, confirmPassword) {
	let errors = [];
	if (name == "") {
		errors.push("Digite seu nome");
	}
	if (lastName == "") {
		errors.push("É necessário	preencher o sobrenome");
	}
	if (email == "") {
		errors.push("É necessário preencher o e-mail");
	} else if (email.search(/(@)[a-z]+(.com$)/) == -1) {
		errors.push("E-mail inválido");
	}
	if (login == "") {
		errors.push("É necessário preencher o login");
	}
	if (password == "" && confirmPassword == "") {
		errors.push("É necessário preencher o campo senha");
	} else if (password == -1) {
		errors.push("É necessário preencher o campo senha");
	} else if (password != confirmPassword) {
		errors.push("As senhas são diferentes");
	}
	return errors;
}

const formSubmit = document.querySelector("[name='fromRegister']");
const fromRegister = document.querySelector("[name='fromRegister']");
formSubmit.addEventListener("submit", function () {
	const userData = {
		name: fromRegister.name.value,
		lastName: fromRegister.lastName.value,
		email: fromRegister.email.value,
		login: fromRegister.login.value,
		password: fromRegister.password.value,
		confirmPassword: fromRegister.confirmPassword.value,
	};

	event.preventDefault();
	const errors = validate(
		userData.name,
		userData.lastName,
		userData.email,
		userData.login,
		userData.password,
		userData.confirmPassword
	);
	const spanErrors = document.querySelector("#spanError");
	spanErrors.innerHTML = "";

	if (errors.length == 0) {
		saveLocalStorage(userData);
		window.location = "login.html";
	} else {
		const ulErrors = document.createElement("ul");
		ulErrors.textContent = "";
		errors.forEach(function (error) {
			const liErrors = document.createElement("li");
			liErrors.classList.add("li-error");
			liErrors.textContent = error;
			ulErrors.appendChild(liErrors);
		});
		spanErrors.appendChild(ulErrors);
		spanErrors.classList.add("error-msg");
	}
});
