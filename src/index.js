import './styles.css';

console.log('Campus Starter App loaded successfully!');

// Simple example functionality
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    
    // Add some interactive functionality
    const diningButton = document.createElement('button');
    diningButton.textContent = 'Dining Halls & Cafes';
    diningButton.addEventListener('click', function() {
        alert('Hello from your webpack app!');
    });
    
    app.appendChild(diningButton);

    const keyCampusButton = document.createElement('button');
    keyCampusButton.textContent = 'Key Campus Buildings';
    keyCampusButton.addEventListener('click', function() {
        alert('Hello from your webpack app!');
    });

    app.appendChild(keyCampusButton);

    const campusButton = document.createElement('button');
    campusButton.textContent = 'Campus Life & Events';
    campusButton.addEventListener('click', function() {
        alert('Hello from your webpack app!');
    });

    app.appendChild(campusButton);
});

