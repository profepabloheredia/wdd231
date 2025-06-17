//Grab the  URL for this page from the ? to the end
let currentUrl = window.location.search;
console.log(currentUrl);



// remove the ? from the beginning
currentUrl = currentUrl.substring(1,currentUrl.length)
console.log(currentUrl);

//Break the form name value pairs into an array
formData=currentUrl.split('&')

function show(cup) {
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)) {
            result=(element.split('=')[1].replace("%40","@"))
        } 
    }); 
    return(result)
}

const Info = document.querySelector('#results')
Info.innerHTML = `
<p>Application from <i><b>${show('first')} </i></b></p>
<p>Organization Name: <i><b>${show('organization')} </i></b></p>
<p>Your Phone: <i><b>${show('phone')} </i></b></p>
<p>Your email <i><a href="mailto:${show('email')}">${show('email')}</a> </i></p>
<p>Form was submitted on <i><b>${new Date()}</i></b></p>

`

//Save the joined state into a co0kie
document.cookie = "joinedCyberThreatsPrevention=true; path=/";
document.cookie = `joinedUserName=${show('first')}; path=/`;

//<p>Form was submitted on <i><b>${show('currentTime')}</i></b></p>

