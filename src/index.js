import './styles.css';

console.log('Campus Starter App loaded successfully!');

// Simple example functionality
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    
    // Add some interactive functionality
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.addEventListener('click', function() {
        alert('Hello from your webpack app!');
    });
    
    app.appendChild(button);
});
