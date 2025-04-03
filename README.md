# Introduction to Machine Learning Dashboard

This is a lightweight app built for an Introduction to Machine Learning course. The app reads video metadata from a JSON file (`video_keywords_new.json`), provides real-time keyword search, and plays videos in a modal.

## Features

- Real-time search filtering of videos by title or tags
- Video playback
- Responsive design

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [react-modal](https://github.com/reactjs/react-modal)
- Docker

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (Strongly recommended for running the app)

## Running the app

### Using Docker (Recommended)

1. Build the image:

   `docker build -t nlp-dashboard .`

2. Run the container:

   `docker run -d -p 80:80 nlp-dashboard`

3. Open your browser at `http://localhost`

### Without Docker (Development Mode)

1. Install dependencies:

   `npm install`

2. Start the development server:

   `npm run dev`

3. Visit the resulting url in your browser


