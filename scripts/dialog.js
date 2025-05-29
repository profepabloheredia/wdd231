const courseDetails = document.querySelector("#course")
// const modal = document.querySelector("#dialog-content");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

// openModal.addEventListener("click", () => {
//   modal.showModal();
// });



function displayCourseDetail(course){
    courseDetails.innerhtmml ='';
    courseDetails.innerHTML=`
        <button class="close-button">❌</button>
        <h2>${course.subjet} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong> Credits</strong>${course.credits}</p>
        <p><strong> Certificates</strong>${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Tecnologies</strong>${course.tecnology.join}</p>
    
    `;
    courseDetails.showModal();
    closeModal.addEventListener("click", () => {modal.close();});

}
