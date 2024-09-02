document.addEventListener('DOMContentLoaded', function () {
    const recentOrders = [
        { id: 1, image: 'https://via.placeholder.com/50', customer: 'John Doe', price: '$20', name: 'Pizza' },
        { id: 2, image: 'https://via.placeholder.com/50', customer: 'Jane Doe', price: '$15', name: 'Burger' },
    ];

    const recentlyAddedMenu = [
        { image: 'https://via.placeholder.com/50', title: 'Pasta', price: '$10', availability: 'Available' },
        { image: 'https://via.placeholder.com/50', title: 'Salad', price: '$8', availability: 'Out of Stock' },
    ];

    // Populate Recent Order Table
    const recentOrderTableBody = document.querySelector('.recent-order tbody');
    recentOrders.forEach(order => {
        const row = `<tr>
            <td>${order.id}</td>
            <td><img src="${order.image}" alt="${order.name}" width="50"></td>
            <td>${order.customer}</td>
            <td>${order.price}</td>
            <td>${order.name}</td>
        </tr>`;
        recentOrderTableBody.innerHTML += row;
    });

    // Populate Recently Added Menu Table
    const recentlyAddedMenuTableBody = document.querySelector('.recently-added-menu tbody');
    recentlyAddedMenu.forEach(menu => {
        const row = `<tr>
            <td><img src="${menu.image}" alt="${menu.title}" width="50"></td>
            <td>${menu.title}</td>
            <td>${menu.price}</td>
            <td>${menu.availability}</td>
        </tr>`;
        recentlyAddedMenuTableBody.innerHTML += row;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-btn");
    const navbarMenu = document.querySelector(".navbar-menu");
    const signupButton = document.getElementById("signup-btn");
    const loginButton = document.getElementById("login-btn");
    const registerSection = document.querySelector(".register");
    const loginSection = document.querySelector(".login");
    const closeButtons = document.querySelectorAll(".close-btn");
    const showLoginLink = document.getElementById("show-login");
    const showRegisterLink = document.getElementById("show-register");
    const userIcon = document.getElementById("user-icon");

    toggleButton.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
    });

    signupButton.addEventListener("click", () => {
        registerSection.classList.add("active");
    });

    loginButton.addEventListener("click", () => {
        loginSection.classList.add("active");
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            registerSection.classList.remove("active");
            loginSection.classList.remove("active");
        });
    });

    showLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        registerSection.classList.remove("active");
        loginSection.classList.add("active");
    });

    showRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginSection.classList.remove("active");
        registerSection.classList.add("active");
    });

    document.addEventListener("click", (e) => {
        if (!registerSection.contains(e.target) && !signupButton.contains(e.target) && 
            !loginSection.contains(e.target) && !loginButton.contains(e.target)) {
            registerSection.classList.remove("active");
            loginSection.classList.remove("active");
        }
    });

    // Registration functionality
    document.getElementById('register-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            if (response.ok) {
                alert('Registration successful');
                registerSection.classList.remove("active");
                loginSection.classList.add("active");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Login functionality
    document.getElementById('login-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('name', data.name);
                displayAvatar(data.name);
                loginSection.classList.remove("active");
                navbarMenu.classList.remove("active");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    function displayAvatar(name) {
        const firstLetter = name.charAt(0).toUpperCase();
        userIcon.innerHTML = `<div class="avatar"><a href = "userdashboard.html"> ${firstLetter}</a></div>`;
    }

    // Display avatar if logged in
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    if (token && name) {
        displayAvatar(name);
    }
});



            document.addEventListener("DOMContentLoaded", function () {
                const toggleButton = document.querySelector(".toggle-btn");
                const navbarMenu = document.querySelector(".navbar-menu");
                const signupButton = document.getElementById("signup-btn");
                const loginButton = document.getElementById("login-btn");
                const registerSection = document.querySelector(".register");
                const loginSection = document.querySelector(".login");
                const closeButtons = document.querySelectorAll(".close-btn");
                const showLoginLink = document.getElementById("show-login");
                const showRegisterLink = document.getElementById("show-register");
                const userIcon = document.getElementById("user-icon");
    
                toggleButton.addEventListener("click", () => {
                    navbarMenu.classList.toggle("active");
                });
    
                signupButton.addEventListener("click", () => {
                    registerSection.classList.add("active");
                });
    
                loginButton.addEventListener("click", () => {
                    loginSection.classList.add("active");
                });
    
                closeButtons.forEach(button => {
                    button.addEventListener("click", () => {
                        registerSection.classList.remove("active");
                        loginSection.classList.remove("active");
                    });
                });
    
                showLoginLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    registerSection.classList.remove("active");
                    loginSection.classList.add("active");
                });
    
                showRegisterLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    loginSection.classList.remove("active");
                    registerSection.classList.add("active");
                });
    
                document.addEventListener("click", (e) => {
                    if (!registerSection.contains(e.target) && !signupButton.contains(e.target) && 
                        !loginSection.contains(e.target) && !loginButton.contains(e.target)) {
                        registerSection.classList.remove("active");
                        loginSection.classList.remove("active");
                    }
                });
    
                // Registration functionality
                document.getElementById('register-form').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
    
                    try {
                        const response = await fetch('http://localhost:5000/register', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ name, email, password })
                        });
    
                        const data = await response.json();
                        if (response.ok) {
                            alert('Registration successful');
                            registerSection.classList.remove("active");
                            loginSection.classList.add("active");
                        } else {
                            alert(data.message);
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });
    
                // Login functionality
                document.getElementById('login-form').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const email = document.getElementById('login-email').value;
                    const password = document.getElementById('login-password').value;
    
                    try {
                        const response = await fetch('http://localhost:5000/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email, password })
                        });
    
                        const data = await response.json();
                        if (response.ok) {
                            localStorage.setItem('token', data.token);
                            localStorage.setItem('name', data.name);
                            displayAvatar(data.name);
                            loginSection.classList.remove("active");
                            navbarMenu.classList.remove("active");
                        } else {
                            alert(data.message);
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });
    
                function displayAvatar(name) {
                    const firstLetter = name.charAt(0).toUpperCase();
                    userIcon.innerHTML = `<div class="avatar"><a href = "userdashboard.html"> ${firstLetter}</a></div>`;
                }
    
                // Display avatar if logged in
                const token = localStorage.getItem('token');
                const name = localStorage.getItem('name');
                if (token && name) {
                    displayAvatar(name);
                }
            });
