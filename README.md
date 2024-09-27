# react-demo

## Setting up React framework.
npm rm -g create-react-app
npm install -g create-react-app
npx create-react-app my-app


## Getting Started with Your React TypeScript Project


Follow the steps below to create a new React project with TypeScript:

### Steps

1. **Open Visual Studio Code (VS Code)**
   - Launch VS Code on your machine.

2. **Open the Terminal in VS Code**
   - Use the shortcut `Ctrl + ~` (Windows/Linux) or `Cmd + ~` (macOS) to open the terminal, or navigate to **Terminal > New Terminal** from the top menu.

3. **Navigate to Your Project Directory**
   - In the terminal, use the `cd` command to move to the directory where you want to create the project:
     ```bash
     cd path/to/your/project
     ```

4. **Create a New React App with TypeScript**
   - Run the following command in the terminal to generate a new React project using TypeScript:
     ```bash
     npx create-react-app my-app --template typescript
     ```

### What This Does
This command creates a new React project named `my-app` using the TypeScript template.

## pnpm
Improved Performance: pnpm is generally faster for installing and managing dependencies, especially for large projects.
Reduced Disk Space Usage: By storing packages in a global store and using hard links, pnpm minimizes duplicate installations and saves disk space.
Enhanced Dependency Management: Features like workspaces allow you to effectively manage multiple packages within your project.

### Setting Up pnpm
npm install -g pnpm

pnpm init

pnpm install react react-dom

Change directory to the app folder.
To start app : pnpm start