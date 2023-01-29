# Spotify-Clone
> A Spotify Web Player Clone built with React and TailwindCSS

## Technologies
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![MUI Icons](https://img.shields.io/badge/Material--UI-0081CB?style=flat&logo=material-ui&logoColor=white)

## Setup
1. Clone repo and run
```
npm install
```
2. Run development server
```
npm run dev
```

## Features
- Displays Top Charts and Artists
- Finds music based on your geolocation
- Choose a song to listen to
- Search various songs or artists

## Routes
```js
<Route path="/"/> // home
<Route path="/top-artists"/> // lists top artists
<Route path="/top-charts"/> // lists top charts
<Route path="/around-you"/> // lists music based on your geolocation
<Route path="/artists/:id"/> // search artist by id
<Route path="/songs/:songid"/> // search song by id
<Route path="/search/:searchTerm"/> // search for songs or artists
```
