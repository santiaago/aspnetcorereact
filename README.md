# aspnetcorereact
minimal asp.net core react app

* dotnet new webapi
* gitignore
* create-react-app app

## pieces:

* api web server: `http://localhost:5000`
* web app: `http://localhost:8080/`
    * proxy to `http://localhost:5000`

# web API server installation and development:

* go to `./aspnetcorereact`
* run `dotnet restore`
* run `dotnet build`
* run `dotnet run`

This should build the web api server and serve it at `http://localhost:5000`

# web app installation and development:

* go to `./aspnetcorereact/app/` and run `npm install`
* run `npm start` to start the web app development server.

# web app build for production:

* in `./aspnetcorereact/app/` run `npm run build` to bundle the app into static files for production.
