
import byuiCourse from './course.mjs';
import {setSectionSelection } from './sections.mjs';
import {setTitle, renderSections} from './output.mjs';

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
  alert("1 Student enrolled");alert("1 Student enrolled to section " + sectionNum);
  
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
  alert("1 Student droped from section " + sectionNum);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);