aspnetcorereact
====

minimal [asp.net core](https://docs.microsoft.com/en-us/aspnet/core/) [react](https://facebook.github.io/react/) app

<!-- TOC -->

- [Requirements](#requirements)
- [Pieces:](#pieces)
- [Web API server installation and development:](#web-api-server-installation-and-development)
- [Web app installation and development:](#web-app-installation-and-development)
- [Build web app and web api for production:](#build-web-app-and-web-api-for-production)

<!-- /TOC -->

## Requirements

* [dotnet core](https://www.microsoft.com/net/core)
* [node](https://nodejs.org/en/)

## Pieces:

* web api server: `http://localhost:5000` handles any `/api/` requests.
* web app (React app): `http://localhost:8080/`
    * has **proxy** to web api server in development mode.

## Web API server installation and development:

* go to `./aspnetcorereact`
* run `dotnet restore`
* run `dotnet build`
* run `dotnet run`

This should build the web api server and serve it at `http://localhost:5000`

## Web app installation and development:

* go to `./aspnetcorereact/app/` and run `npm install`
* run `npm start` to start the web app development server.

## Build web app and web api for production:

* in `./aspnetcorereact/app/` run `npm run build` to bundle the app into static files for production.
    * bundle is located at `./aspnetcorereact/app/build`
* in `./aspnetcorereact/` run `dotnet build --configuration Release`
* in `./aspnetcorereact` run `dotnet run --configuration Release`
* go to `http://localhost:5000/index.html`