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
var currentLesson;

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
      default:
        currentLesson = 9;
        break;
  }

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

    break;
}
