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
