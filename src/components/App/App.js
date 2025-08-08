import './App.css';

export class App {
    constructor() {
        this.element = this.createElement();
    }

    createElement() {
        const appDiv = document.createElement('div');
        appDiv.id = 'app';
        
        const title = document.createElement('h1');
        title.textContent = 'Welcome to Campus Starter App';
        
        const description = document.createElement('p');
        description.textContent = 'This is a webpack-powered application!';
        
        const button = document.createElement('button');
        button.textContent = 'Click me!';
        button.addEventListener('click', this.handleClick);
        
        appDiv.appendChild(title);
        appDiv.appendChild(description);
        appDiv.appendChild(button);
        
        return appDiv;
    }

    handleClick() {
        alert('Hello from your webpack app!');
    }

    render(container) {
        container.appendChild(this.element);
    }
}
