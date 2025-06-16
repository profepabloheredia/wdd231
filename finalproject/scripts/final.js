const preventionLink = document.getElementById('prevention-link-page');
const joinLink = document.getElementById('join-link-page');
const userName = document.getElementById('userName');
const hasJoined = localStorage.getItem('joinedCyberThreatsPrevention');



if (!hasJoined){
    preventionLink.style.display='none';
    joinLink.style.display="block";

}
else{
    joinLink.style.display='none';
    preventionLink.style.display="block"
} 