class lesson {
  constructor(name, teacher, href) {
    this.name = name;
    this.teacher = teacher;
    this.href = href;
  }
}

var currentLesson;

const physics = new lesson("Fysik", "Nicholas", "https://meet.google.com/hcv-qebw-stv");
const swedish = new lesson("Svenska", "Pontus", "https://meet.google.com/xnz-cqck-aet");
const daodac = new lesson("Daodac", "Jonas", "https://meet.google.com/ndp-kvtm-cip");
const eget_val = new lesson("Eget val", "", "");
const math = new lesson("Matte", "Joel", "https://meet.google.com/ucf-njxf-gmo");
const webdevelopment = new lesson("Webbutveckling", "Sebastian", "https://meet.google.com/ubw-evhu-nah");
const programming = new lesson("Programmering", "Babis", "https://meet.google.com/bdp-brmh-tgf");
const mentoring_time = new lesson("Mentorstid", "Anna", "https://meet.google.com/kfu-ofkh-usg");
const english = new lesson("Engelska", "Linda", "https://meet.google.com/gzc-dnmy-yce");

var monday = [physics, swedish, daodac];
var tuesday = [eget_val, swedish, math, physics, eget_val];
var wednesday = [eget_val, webdevelopment, programming, eget_val];
var thursday = [math, mentoring_time, english];
var friday = [daodac, webdevelopment, physics, english];

switch (new Date().getDay()) {
  case 1:
    switch (new Date().getHours()) {
      case 8:
        currentLesson = 0;
        break;
      case 9:
        currentLesson = 1;
        break;
      case 12:
      case 13:
        currentLesson = 2;
        break;
      default:
        currentLesson = 9;
        break;
    }
    for (var i = 0; i < monday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var button = document.createElement("button");
      var main = document.getElementById("main");
      var lessonName = document.createTextNode(monday[i].name);
      var buttonlink = document.createTextNode("link");
      var buttononclick = document.createAttribute("onclick");
      var buttontype = document.createAttribute("type")
      button.appendChild(buttonlink);
      p.appendChild(lessonName);
      section.appendChild(p);
      section.appendChild(button);
      buttontype.value = "button";
      buttononclick.value = "location.href='" + monday[i].href + "';";
      button.setAttributeNode(buttononclick);
      button.setAttributeNode(buttontype);
      main.appendChild(section);
    }
    break;
  case 2:
    switch (new Date().getHours()) {
      case 8:
        currentLesson = 3;
        break;
      case 9:
      case 10:
      case 11:
        currentLesson = 1;
        break;
      case 12:
        currentLesson = 4;
        break;
      case 13:
      case 14:
        currentLesson = 0;
        break;
      case 15:
      case 16:
        currentLesson = 3;
      default:
        currentLesson = 9;
        break;
    }
    for (var i = 0; i < tuesday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var button = document.createElement("button");
      var main = document.getElementById("main");
      var lessonName = document.createTextNode(tuesday[i].name);
      var buttonlink = document.createTextNode("link");
      var buttononclick = document.createAttribute("onclick");
      var buttontype = document.createAttribute("type")
      button.appendChild(buttonlink);
      p.appendChild(lessonName);
      section.appendChild(p);
      section.appendChild(button);
      buttontype.value = "button";
      buttononclick.value = "location.href='" + tuesday[i].href + "';";
      button.setAttributeNode(buttononclick);
      button.setAttributeNode(buttontype);
      main.appendChild(section);
    }
    break;
  case 3:
    switch (new Date().getHours()) {
      case 8:
        currentLesson = 3;
        break;
      case 9:
      case 10:
      case 11:
        currentLesson = 5;
        break;
      case 12:
      case 13:
      case 14:
        currentLesson = 6;
        break;
      case 15:
      case 16:
        currentLesson = 3;
        break;
      default:
        currentLesson = 9;
        break;
      }
    for (var i = 0; i < wednesday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var button = document.createElement("button");
      var main = document.getElementById("main");
      var lessonName = document.createTextNode(wednesday[i].name);
      var buttonlink = document.createTextNode("link");
      var buttononclick = document.createAttribute("onclick");
      var buttontype = document.createAttribute("type")
      button.appendChild(buttonlink);
      p.appendChild(lessonName);
      section.appendChild(p);
      section.appendChild(button);
      buttontype.value = "button";
      buttononclick.value = "location.href='" + wednesday[i].href + "';";
      button.setAttributeNode(buttononclick);
      button.setAttributeNode(buttontype);
      main.appendChild(section);
    }
    break;
  case 4:
    switch (new Date().getHours()) {
      case 9:
      case 10:
      case 11:
        currentLesson = 4;
        break;
      case 12:
        currentLesson = 7;
        break;
      case 13:
      case 14:
        currentLesson = 8;
        break;
      default:
        currentLesson = 9;
        break;
    }
    for (var i = 0; i < thursday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var button = document.createElement("button");
      var main = document.getElementById("main");
      var lessonName = document.createTextNode(thursday[i].name);
      var buttonlink = document.createTextNode("link");
      var buttononclick = document.createAttribute("onclick");
      var buttontype = document.createAttribute("type")
      button.appendChild(buttonlink);
      p.appendChild(lessonName);
      section.appendChild(p);
      section.appendChild(button);
      buttontype.value = "button";
      buttononclick.value = "location.href='" + thursday[i].href + "';";
      button.setAttributeNode(buttononclick);
      button.setAttributeNode(buttontype);
      main.appendChild(section);
    }
    break;
  case 5:
    switch (new Date().getHours()) {
      case 8:
      case 9:
        currentLesson = 2;
        break;
      case 12:
        currentLesson = 5;
        break;
      case 13:
      case 14:
        currentLesson = 0;
        break;
      case 15:
      case 16:
        currentLesson = 8;
        break;
      default:
        currentLesson = 9;
        break;
      }
    for (var i = 0; i < friday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var button = document.createElement("button");
      var main = document.getElementById("main");
      var lessonName = document.createTextNode(friday[i].name);
      var buttonlink = document.createTextNode("link");
      var buttononclick = document.createAttribute("onclick");
      var buttontype = document.createAttribute("type")
      button.appendChild(buttonlink);
      p.appendChild(lessonName);
      section.appendChild(p);
      section.appendChild(button);
      buttontype.value = "button";
      buttononclick.value = "location.href='" + friday[i].href + "';";
      button.setAttributeNode(buttononclick);
      button.setAttributeNode(buttontype);
      main.appendChild(section);
    }
    break;
}

switch (currentLesson) {
  case 0:
    document.getElementById("anchor").href = "https://meet.google.com/hcv-qebw-stv";
    break;
  case 1:
    document.getElementById("anchor").href = "https://meet.google.com/xnz-cqck-aet";
    break;
  case 2:
    document.getElementById("anchor").href = "https://meet.google.com/afi-aoaf-jyn";
    break;
  case 3:
    document.getElementById("anchor").href = "https://reddit.com/r/bottomgear";
    break;
  case 4:
    document.getElementById("anchor").href = "https://meet.google.com/ucf-njxf-gmo";
    break;
  case 5:
    document.getElementById("anchor").href = "https://meet.google.com/ubw-evhu-nah";
    break;
  case 6:
    document.getElementById("anchor").href = "https://meet.google.com/bdp-brmh-tgf";
    break;
  case 7:
    document.getElementById("anchor").href = "https://meet.google.com/kfu-ofkh-usg";
    break;
  case 8:
    document.getElementById("anchor").href = "https://meet.google.com/gzc-dnmy-yce";
    break;
  default:
    document.getElementById("anchor").href = "https://reddit.com/r/bottomgear";
    break;
}

//simon är snygg
/*let linkButton = document.querySelector(".linkbutton");
linkButton.addEventListener("click", () => {

});*/
