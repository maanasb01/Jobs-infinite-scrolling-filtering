# Jobs Infinite Scrolling & Filtering

This application fetches job listings from a remote API and presents them in a user-friendly interface with infinite scrolling and advanced filtering capabilities.

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production](#production)

## Features

- **Infinite Scrolling:** Jobs are loaded dynamically as the user scrolls, providing a seamless browsing experience without the need for pagination.
- **Advanced Filtering:** Users can filter job listings based on various criteria such as location, job type, salary range, and more, enabling them to find relevant opportunities quickly.
- **Responsive Design:** The application is designed to work seamlessly across a range of devices and screen sizes, ensuring a consistent experience for all users.

## Dependencies

The project makes use of the following technologies and libraries:

- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Fast and lightweight build tool for modern web development, used for bundling and optimizing project code.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: An opinionated set of tools and guidelines for using Redux, used for managing application state more efficiently and concisely.
- **[Material-UI (MUI)](https://mui.com/)**: React components library for implementing a modern and responsive UI design.
- **[React-Select](https://react-select.com/)**: Provides advanced dropdown select functionality, used for implementing filtering options in the application.
- **[React-Loader-Spinner](https://www.npmjs.com/package/react-loader-spinner)**: Renders a loading spinner component, enhancing the user experience during data fetching and processing.

## Setup

### Prerequisites

To run this project, you need to have Node.js installed, which provides the runtime environment for JavaScript:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone this repository to your local machine.

   ```bash
    git clone https://github.com/maanasb01/Jobs-infinite-scrolling-filtering
   ```

2. Install the project dependencies using:

   ```bash
   npm install
   ```

### Development

During development, start the development using the following command:

    npm run dev

### Production

    npm run build
