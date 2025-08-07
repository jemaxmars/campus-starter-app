# Campus Starter App

A modern web application built with Webpack, Babel, and ES6+.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jemaxmars/campus-starter-app.git
   cd campus-starter-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   This will open the app in your browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Starts the development server and opens the app in your browser
- `npm run dev` - Starts the development server without opening the browser
- `npm run build` - Builds the app for production to the `dist` folder

## Project Structure

```
campus-starter-app/
├── src/
│   ├── index.html      # HTML template
│   ├── index.js        # Main JavaScript entry point
│   └── styles.css      # Main stylesheet
├── dist/               # Build output (generated)
├── webpack.config.js   # Webpack configuration
├── .babelrc           # Babel configuration
└── package.json       # Project dependencies and scripts
```

## Development

The app uses:
- **Webpack** for bundling and development server
- **Babel** for ES6+ transpilation
- **CSS Loader** for importing stylesheets
- **HTML Webpack Plugin** for HTML template processing

Hot reloading is enabled in development mode, so changes will be reflected immediately in the browser.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test your changes locally
4. Push your branch and create a pull request
