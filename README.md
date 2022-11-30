# final-project

## Demo

  Example: (https://user-images.githubusercontent.com/124599/198038921-2b16b18b-cb4d-44b1-bd1d-6419d4a8d92c.png)

## About this project

## Disclaimer
  
> This app is using the canary releases for Next.js 13 and React 18. The new router and app dir is still in beta and not production-ready.
> NextAuth.js, which is used for authentication, is also not fully supported in Next.js 13 and RSC.

## Techstack


## Features

- New `/app` dir,
- Routing, Layouts
- Data Fetching, Caching and Mutation
- Loading UI
- Server and Client Components
- Middleware
- Authentication using **NextAuth.js**
- PostgreSQL database hosted on Azure
- UI Components from **Material UI**
- Frontend written in **JavaScript**
- Backend written in **Java**

## Roadmap

## Known Issues

A list of things not working right now:

1. Magic internet money


## Running Locally

You'll need:
Docker
Maven
Java version XX or later


1. Clone this repository and CD into /server
2. Run this command in the server directory
```sh
docker compose up
```
3. Run
```sh
mvn clean install
```
4. CD into /target
5. Run
```sh
java -jar *.jar
```

6. Backend should now be up and running! Go back to the project root folder and CD into /client

7. Copy `.env.example` to `.env.local` and update the variables.
```sh
npm install
```
8. Start the development server:

```sh
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/reflexjs/reflex/blob/master/LICENSE).
