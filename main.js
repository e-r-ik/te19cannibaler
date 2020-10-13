class lesson {
  constructor(name, teacher, href) {
    this.name = name;
    this.teacher = teacher;
    this.href = href;
  }
}

var currentLesson;

const physics = new lesson("Fysik", "Nicholas", "");
const swedish = new lesson("Svenska", "Pontus", "https://meet.google.com/xnz-cqck-aet");
const daodac = new lesson("Daodac", "Jonas", "");
const eget_val = new lesson("Eget val", "", "");
const math = new lesson("Matte", "Joel", "");
const webdevelopment = new lesson("Webbutveckling", "Sebastian", "");
const programming = new lesson("Programmering", "Babis", "");
const mentoring_time = new lesson("Mentorstid", "Anna", "");
const english = new lesson("Engelska", "Linda", "");
const no_lesson = new lesson("Ingen lektion", "Ingen lektion", "");

var monday = [physics, swedish, daodac];
var tuesday = [eget_val, swedish, math, physics, eget_val];
var wednesday = [eget_val, webdevelopment, programming, eget_val];
var thursday = [math, mentoring_time, english];
var friday = [daodac, webdevelopment, physics, english];

switch (new Date().getDay()) {
  case 1:
    switch (new Date().getHours) {
      case 8:
        currentLesson = 0;
        break;
      case 9:
        currentLesson = 1;
        break;
      case 12:
        currentLesson = 2;
        break;
      default:
        currentLesson = 9;
        break;
    }
    for (var i = 0; i < monday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var lessonName = monday[i].name;
      section.appendChild(p);
      p.appendChild(lessonName);
    }
    break;
  case 2:
    switch (new Date().getHours) {
      case 8:
        currentLesson = 3;
        break;
      case 9:
        currentLesson = 1;
        break;
      case 12:
        currentLesson = 4;
        break;
      case 13:
        currentLesson = 0;
        break;
      case 15:
        currentLesson = 3;
      default:
        currentLesson = 9;
        break;
    }
    for (var i = 0; i < tuesday.length; i++) {
      var section = document.createElement("section");
      var p = document.createElement("p");
      var a = document.createElement("a");
      var main = document.getElementById("main");
      var lessonName = document.createTextNode(tuesday[i].name);
      var alink = document.createTextNode("link");
      var aonclick = document.createAttribute("onclick");
      var ahref = document.createAttribute("href");
      a.appendChild(alink);
      p.appendChild(lessonName);
      section.appendChild(a);
      section.appendChild(p);
      aonclick.value = "location.href=tuesday[i].href; return false;";
      ahref.value = "";
      a.setAttributeNode(aonclick);
      a.setAttributeNode(ahref);
      main.appendChild(section);
    }
  break;
  case 3:
    switch (new Date().getHours) {
      case 8:
        currentLesson = 3;
        break;
      case 9:
        currentLesson = 5;
        break;
      case 12:
        currentLesson = 6;
        break;
      case 15:
        currentLesson = 3;
        break;
      default:
        currentLesson = 9;
        break;
      }
    break;
  case 4:
    switch (new Date().getHours) {
      case 9:
        currentLesson = 4;
        break;
      case 12:
        currentLesson = 7;
        break;
      case 13:
        currentLesson = 8;
        break;
      default:
        currentLesson = 9;
        break;
  }
    break;
  case 5:
    switch (new Date().getHours) {
      case 8:
        currentLesson = 2;
        break;
      case 12:
        currentLesson = 5;
        break;
      case 13:
        currentLesson = 0;
        break;
      case 15:
        currentLesson = 8;
        break;
      default:
        currentLesson = 9;
        break;
      }
    break;
}

switch (currentLesson) {
  case 0:
    currentLesson = "https://meet.google.com/hcv-qebw-stv";
    break;
  case 9:
    currentLesson = "https://reddit.com/r/bottomgear"
  default:

}
