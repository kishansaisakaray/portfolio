# Portfolio Site

This portfolio site showcases various projects and provides information about the portfolio owner. It is built using React and TypeScript, leveraging Vite for development and build processes.

## Features

- Responsive design that adapts to different screen sizes.
- Navigation bar for easy access to different pages.
- Dynamic project cards that display project information.
- About page detailing the portfolio owner's background and skills.

## Project Structure

```
portfolio-site
├── src
│   ├── index.html          # Main HTML document
│   ├── main.tsx           # Entry point for the React application
│   ├── components          # Contains reusable components
│   │   ├── Header.tsx     # Navigation bar component
│   │   ├── Footer.tsx     # Footer component
│   │   └── ProjectCard.tsx # Component for displaying project details
│   ├── pages              # Contains page components
│   │   ├── Home.tsx       # Landing page component
│   │   └── About.tsx      # About page component
│   ├── styles             # CSS styles
│   │   └── main.css       # Main stylesheet
│   ├── data               # Project data
│   │   └── projects.json   # JSON file containing project information
│   └── types              # TypeScript types
│       └── index.ts       # Type definitions for project data
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── vite.config.ts         # Vite configuration file
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-site
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio site.

## Usage

- Navigate through the site using the navigation bar.
- View project details on the Home page.
- Learn more about the portfolio owner on the About page.

## License

This project is licensed under the MIT License.