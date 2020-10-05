//fysik = 0
//svenska = 1
//Daodac = 2
//Eget val = 3
//matte = 4
//webbutveckling = 5
//programmering = 6
//mentorstid = 7
//engelska = 8
//ingen lektion = 9
class lesson {
  constructor(name, teacher, href) {
    this.name = name;
    this.teacher = teacher;
    this.href = href;
  }
}

var currentLesson;

const 0 = new lesson("Fysik", "Nicholas", "");
const 1 = new lesson("Svenska", "Pontus", "");
const 2 = new lesson("Daodac", "Jonas", "");
const 3 = new lesson("Eget val", "", "");
const 4 = new lesson("Matte", "Joel", "");
const 5 = new lesson("Webbutveckling", "Sebastian", "");
const 6 = new lesson("Programmering", "Babis", "");
const 7 = new lesson("Mentorstid", "Anna", "");
const 8 = new lesson("Engelska", "Linda", "");
const 9 = new lesson("Ingen lektion", "", "");

var monday = [new 0, new 1, new 2];
var tuesday = [new 3, new 1, new 4, new 0, new 3];
var wednesday = [new 3, new 5, new 6, new 3];
var thursday = [new 4, new 7, new 8];
var friday = [new 2, new 5, new 0, new 8];

switch (new Date().getDay()) {
  case 0:
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
      var lessonTeacher = monday[i].teacher;

    }
    break;
  case 1:
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
    break;
  case 2:
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
  case 3:
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
  case 4:
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
