const form = document.getElementById("myFormId");

function registerValidate() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  //var inputEmail = document.forms["myForm"]["inputEmail"];

  var inputEmail = document.getElementById("inputEmail");

  var inputPassword = document.forms["myForm"]["inputPassword"];
  var inputPassword2 = document.forms["myForm"]["inputPassword2"];
  var inputAddress = document.forms["myForm"]["inputAddress"];
  var inputProvince = document.forms["myForm"]["inputProvince"];
  var inputCity = document.forms["myForm"]["inputCity"];

  var inputZip = document.getElementById("inputZip");

  //var inputZip = document.forms["myForm"]["inputZip"];

  var gridCheck = document.forms["myForm"]["gridCheck"];

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_contrasenya(inputPassword.value)) {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "La contraseña no cumple las condiciones";
    acumErrores++;
  }

  if (inputPassword2.value != inputPassword.value) {
    inputPassword2.classList.add("is-invalid");
    document.getElementById("errorPassword2").textContent =
      "les contrasenyes no coincideixen";
    acumErrores++;
  }

  if (inputAddress.value == "") {
    inputAddress.classList.add("is-invalid");
    document.getElementById("errorAddress").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  }

  if (inputProvince.value == "") {
    inputProvince.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent =
      "La provincia es obligatoria";
    acumErrores++;
  }

  if (inputCity.value == "") {
    inputCity.classList.add("is-invalid");
    document.getElementById("errorCity").textContent = "Falta la ciutat";
    acumErrores++;
  }

  if (
    /*  inputZip.value == "" || */
    String(inputZip.value).length != 5 //venia mal en el ejemplo
  ) {
    inputZip.classList.add("is-invalid");
    document.getElementById("errorZip").textContent =
      "El codi postal no compleix els requisitis";
    acumErrores++;
  }

  if (!gridCheck.checked) {
    gridCheck.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent = "Acepta las bases";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

function loginValidate() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  //var inputEmail = document.forms["myForm"]["inputEmail"];

  var inputEmail = document.getElementById("inputEmail");

  var inputPassword = document.forms["myForm"]["inputPassword"];

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

function searchValidate() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  var inputSearch = document.getElementById("inputSearch");

  if (String(inputSearch.value).length < 3) {
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Mínimo 3 caráteres";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    //registerValidate(); //Para validar on blur
  },
  true
);

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

function validar_contrasenya(contrasenya) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  return regex.test(contrasenya) ? true : false;
}
