document.addEventListener("DOMContentLoaded", async function () {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'index.html'; // Redirect to login if not logged in
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
            console.log('User Details on Dashboard:', user); // Log user details to the console
            document.getElementById('profile-name').textContent = user.name;
            document.getElementById('profile-email').textContent = user.email;
        } else {
            console.error('Failed to fetch user profile');
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    });
console.log('User Details on Dashboard')    
});

// Logout button functionality
