# Task Manager

A responsive task management web application built with React.js, TypeScript, Ant Design, TailwindCSS, and JSON-SERVER. This app allows users to manage tasks efficiently with features to add, remove, and filter tasks.

## Features

- **Add Task**: Add new tasks to the list.
- **Remove Task**: Delete tasks from the list.
- **Filter Tasks**:
  - Today
  - Completed
  - Incompleted
  - All
- **Responsive Design**: Adaptive UI for all screen sizes.

## Tech Stack

- **Frontend**: React.js, TypeScript
- **UI Libraries**: Ant Design, TailwindCSS
- **Backend**: JSON-SERVER (mock backend)

## Live Demo

The application is deployed on Vercel. [View the live demo here](#).

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/binnehaha321/todo-chiemena.git
   ```

   ```bash
   cd `todo-chiemena`
   ```

2. Install dependencies:

   ```bash
   yarn
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Start the JSON-SERVER:

   ```bash
   json-server --watch db.json --port 5000
   ```

   or

   ```bash
   yarn run-db
   ```

   Ensure the JSON-SERVER is running on `http://localhost:5000`.

### Access the App

Open your browser and navigate to:

```
http://localhost:3000
```

## Deployment

The application is deployed on Vercel. To deploy:

1. Push your code to a Git repository.
2. Link the repository to your Vercel account.
3. Configure the build settings:

   - Framework: React.js
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `build`

4. Deploy the project and access your live app.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project as needed.
