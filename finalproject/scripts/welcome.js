window.onload = function() {
            const modalOverlay = document.getElementById('welcomeModalOverlay');
            const closeModalButton = document.getElementById('closeModalButton');
            const signInButton = document.getElementById('signInButton');
            const joinButton = document.getElementById('joinButton');

            // Check if the site has been visited before
            const hasVisited = localStorage.getItem('visitedCyberThreatsPrevention');

            if (!hasVisited) {
                // If it's the first visit, show the modal
                modalOverlay.classList.add('visible');
                // Set the flag in localStorage
                localStorage.setItem('visitedCyberThreatsPrevention', 'true');
                // localStorage.setItem('visitedCyberThreatsPrevention', 'true');//Change to this after testing process
                joinButton.className='hide-button';
            }

            // Function to close the modal
            function closeModal() {
                modalOverlay.classList.remove('visible');
                // Optional: You could also set a different flag here if you want
                // the modal to reappear on refresh until the user signs in.
            }

            // Event listener for the close button
            closeModalButton.addEventListener('click', closeModal);

            // Event listener for the Sign In button
            signInButton.addEventListener('click', function() {
                // In a real application, this would redirect to a sign-in page
                // or open a sign-in form. For this example, we'll just log and close.
                console.log('Sign In button clicked!');
                closeModal();
            });

            // Close modal if clicked outside (on overlay)
            modalOverlay.addEventListener('click', function(event) {
                if (event.target === modalOverlay) {
                    closeModal();
                }
            });
        };