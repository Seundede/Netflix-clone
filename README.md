# Netflix Clone

This is a movies application which displays movie data based on categories, and extensive details like trailers of each movie. It fetches data from The Movie DataBase API and is implemented using Typescript, Next JS, Tailwind, Recoil 


![readmeImage](https://user-images.githubusercontent.com/63148200/184045681-eab5f0b5-31ff-478f-9721-b721616d88cf.png)


## Technology stack

- Typescript
- Next JS
- Recoil
- Firebase
- Vercel (deployment)

## Dependency

- Reck hook form
- React player
- React icons

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

The following software is required to be installed on your system:
- Node 
- Npm 

Type the following commands in the terminal to verify your node and npm versions
```bash
npm -v
node -v
```
1. Clone the repo
```bash
git clone https://github.com/Seundede/Netflix-clone.git
cd Nextjs Netflix-clone
```
2. Install the dependencies
```bash
npm install
```
3. Create a new firebase project and fill in  the required information in firebase.js file.
```bash
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
```
4. Create a .env file in your root directory and input API key for TMDB site. 
```bash
NEXT_PUBLIC_API_KEY=
```
5. Start the development server
```bash
npm run dev
```
5. This will open the website in your browser on http://localhost:3000

