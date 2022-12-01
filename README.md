# final-project

## Demo
<img width="292" alt="Skärmavbild 2022-12-01 kl  18 09 14" src="https://user-images.githubusercontent.com/108729175/205116246-93b68a2d-3780-4604-80ad-a433a5d13e5d.png">
<img width="292" alt="Skärmavbild 2022-12-01 kl  18 09 11" src="https://user-images.githubusercontent.com/108729175/205116318-1ffa90d8-91f3-411f-b4e8-e0315023e5c6.png">
<img width="292" alt="Skärmavbild 2022-12-01 kl  18 09 00" src="https://user-images.githubusercontent.com/108729175/205116358-c8c3afc5-778a-4895-b364-9eacd0916367.png">
<img width="292" alt="Skärmavbild 2022-12-01 kl  18 08 35" src="https://user-images.githubusercontent.com/108729175/205116390-401c97b8-fce0-4b0c-a1ef-074d75104ee1.png">
<img width="292" alt="Skärmavbild 2022-12-01 kl  18 05 47" src="https://user-images.githubusercontent.com/108729175/205116415-79b41a3e-86f8-499a-9c04-9047f026f930.png">

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
