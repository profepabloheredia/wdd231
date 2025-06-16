window.onload = function() {
            const modalOverlay = document.getElementById('welcomeModalOverlay');
            const closeModalButton = document.getElementById('closeModalButton');
            const signInButton = document.getElementById('signInButton');
            const joinButton = document.getElementById('joinButton');
            const joinLink = document.getElementById('joinLink');
            const JoinedUserName = document.getElementById('userName');

            // Check if the site has been visited before
            
            const hasVisited = localStorage.getItem('visitedCyberThreatsPrevention');
            console.log("visited: " + hasVisited);

            if (!hasVisited) {
                // If it's the first visit, show the modal
                modalOverlay.classList.add('visible');
                // Set the flag in localStorage
                localStorage.setItem('visitedCyberThreatsPrevention', 'true');
            }
            else{

                let cookies = document.cookie.split(';');
                let hasJoined=false;
                for (let i = 0; i < cookies.length; i++) {
                    let cookie = cookies[i].trim();
                    if (cookie.startsWith("joinedCyberThreatsPrevention=")) {
                    let valor = cookie.substring("joinedCyberThreatsPrevention=".length, cookie.length);
                    hasJoined=valor;
                    console.log(valor); 
                    break;
                }
                }             

                // const hasJoined = localStorage.getItem('joinedCyberThreatsPrevention');
                console.log("Joined: " + hasJoined);

                if (hasJoined) {  // If it's not signed up
                
                    modalOverlay.classList.add('visible'); //remove when ready
                
                    // Set the flag in localStorage
                    //localStorage.setItem('joinedCyberThreatsPrevention', 'true');
                    joinButton.className='hide-join';
                    joinLink.remove();
                    showUserName();
                }
                modalOverlay.classList.remove('visible');
            }

            // Function to close the modal
            function closeModal() {
                modalOverlay.classList.remove('visible');
              
            }
            // Event listener for the close button
            closeModalButton.addEventListener('click', closeModal);

            // Event listener for the Sign In button
            signInButton.addEventListener('click', function() {
                
                console.log('Sign In button clicked!');
                closeModal();
            });

            // Close modal if clicked outside (on overlay)
            modalOverlay.addEventListener('click', function(event) {
                if (event.target === modalOverlay) {
                    closeModal();

                }

            });

            function showUserName(){
                let cookies = document.cookie.split(';');
                let userName="";
                for (let i = 0; i < cookies.length; i++) {
                    let cookie = cookies[i].trim();
                    if (cookie.startsWith("joinedUserName=")) {
                    let valor = cookie.substring("joinedUserName=".length, cookie.length);
                    userName=valor;
                    console.log(valor); // 
                    break;
                }
                }   
                JoinedUserName.textContent="Welcome :" + userName;
                
            }
        };
        