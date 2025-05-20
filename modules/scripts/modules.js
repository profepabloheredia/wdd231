
import byuiCourse from './course.mjs';
import {setSectionSelection } from './sections.mjs';
import {setTitle, renderSections} from './output.mjs';

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
  alert("1");
  
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
  alert("2");
});
alert("3");
setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);