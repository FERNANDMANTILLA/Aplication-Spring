let ul = document.getElementById("list");
var textlista = document.querySelectorAll(".ul-2 li");
var workTitle = document.getElementById("workTitle");
var messagemodal = document.getElementById("MessageModal");
var email = document.getElementById("email");
var names = document.getElementById("name");
var number = document.getElementById("number");
var message = document.getElementById("message");
var namebox = document.getElementById("namebox");
var emailbox = document.getElementById("emailbox");
var numberbox = document.getElementById("numberbox");
var messagebox = document.getElementById("messagebox");
var mailformat =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var clicked = false;
let selected = 0;
var content = document.getElementById("WorkModal");
var img = document.getElementById("workImage");
var li2 = document.querySelectorAll(".lista");

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

ul.onclick = function (event) {
  content.style.display="inline-block";
  li2[selected].classList.remove("active");
  let target = getEventTarget(event);
  let li = target.closest("li");
  let nodes = Array.from(li.closest("ul").children);
  let index = nodes.indexOf(li);
  selected = index;

  if (clicked) {
    content.classList.remove("fade");
    content.classList.remove("active");
    clicked = false;
  } else {
    clicked = true;
    changeText(index);
    li2[index].classList.add("active");
    content.classList.add("active");
    setTimeout(() => {
      content.classList.add("fade");
    }, 100000000000);
  }
};

function changeText(n) {
  var workTime = document.getElementById("workTime");
  var workDate = document.getElementById("workDate");
  var workContent = document.getElementById("workContent");
  if (n == 0) {
    img.src = "https://cdn.worldvectorlogo.com/logos/atento.svg";
    workTitle.innerHTML = "ATENTO";
    workTime.innerHTML = "3 MESES PartTime";
    workDate.innerHTML = "[2018]<br>-Enero-<br>Abril";
    workContent.innerHTML = "Soporte TI";
  }
  if (n == 1) {
    img.src =
      "https://www.web.onpe.gob.pe/modElecciones/elecciones/elecciones2015/comunicados/imgs/logoOnpe.png";
    workTitle.innerHTML = "O.N.P.E";
    workTime.innerHTML = "1 MES FullTime";
    workDate.innerHTML = "[2021]<br>-Julio-";
    workContent.innerHTML = "Coordinador Tecnico de Mesa";
  }
  if (n == 2) {
    img.src =
      "https://media-exp1.licdn.com/dms/image/C4D0BAQH0ghyhQ1RpBw/company-logo_200_200/0/1519899065583?e=2147483647&v=beta&t=Ph-JCZkpnVTIyMxwPa6KwgC0iSzawnOZf8MEKf1QlLQ";
    workTitle.innerHTML = "JIRUSA";
    workTime.innerHTML = "2 MESES FullTime";
    workDate.innerHTML = "[2021]<br>-Noviembre-<br>Diciembre";
    workContent.innerHTML = "Soporte Tecnico<br>Operador de Sistemas";
  }
}

function validationinputs() {
  //check each input
  //all inputs are filled

  if (names.value == "") {
    namebox.classList.add("error");
    setTimeout(() => {
      namebox.classList.remove("error");}, 1000);
  } else {
    namebox.classList.remove("error");
  }

  if (email.value == "") {
    emailbox.classList.add("error");
    setTimeout(() => {
      emailbox.classList.remove("error");}, 1000);
  } else {
    emailbox.classList.remove("error");
  }

  if (number.value == "") {
    numberbox.classList.add("error");
    setTimeout(() => {
      numberbox.classList.remove("error");}, 1000);
  } else {
    numberbox.classList.remove("error");
  }
  if (message.value == "") {
    messagebox.classList.add("error");
    setTimeout(() => {
      messagebox.classList.remove("error");}, 1000);
    
  } else {
    messagebox.classList.remove("error");
  }
  //email format input
  if (email.value.match(mailformat)) {
    emailbox.classList.remove("error");
    
  } else {
    emailbox.classList.add("error");
    setTimeout(() => {
      emailbox.classList.remove("error");}, 1000);
    return false;
  }

  //IF ALL ARE FILLED
  if (
    names.value != "" &&
    email.value != "" &&
    number.value != "" &&
    message.value != ""
  ) {
    openMessageModal();
  }
}

function openMessageModal() {
  messagemodal.classList.add("active");
  messagemodal.classList.remove("fade");
  setTimeout(() => {
    messagemodal.classList.add("fade");
    messagemodal.classList.remove("active");
    clearInputs();
  }, 3000);
}

function clearInputs() {
  email.value = "";
  names.value = "";
  number.value = "";
  message.value = "";
}


function closeWorkModal() {
  content.classList.remove("fade");
  content.classList.remove("active");
  clicked = false;
  li2[selected].classList.remove("active");
}
