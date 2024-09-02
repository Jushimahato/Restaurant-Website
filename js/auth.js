document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.querySelector('.avatar');

    if (avatar) {
        avatar.addEventListener('click', async function () {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('User is not logged in.');
                return;
            }

            try {
                const response = await fetch('/api/user/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const user = await response.json();
                    console.log('User Details:', user);
                } else {
                    console.error('Failed to fetch user profile');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        });
    }
});
