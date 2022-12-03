# Zen-Pay

## Demo
<img width="292" alt="Skärmavbild 2022-12-01 kl  18 05 47" src="https://user-images.githubusercontent.com/108729175/205116415-79b41a3e-86f8-499a-9c04-9047f026f930.png">  <img width="292" alt="Skärmavbild 2022-12-01 kl  18 09 14" src="https://user-images.githubusercontent.com/108729175/205116246-93b68a2d-3780-4604-80ad-a433a5d13e5d.png">  <img width="292" alt="Skärmavbild 2022-12-01 kl  18 09 00" src="https://user-images.githubusercontent.com/108729175/205116358-c8c3afc5-778a-4895-b364-9eacd0916367.png">  

## About this project
**Zen-Pay** is the result of an examination project by the mob String-Quartet at **School of Applied Technology, Java Fullstack Fall 2022**
This project was built in less than two weeks by three up and coming full-stack developers.

## Disclaimer
  
> This app is using the canary releases for Next.js 13 and React 18. The new router and app dir is still in beta and not production-ready.
> NextAuth.js, which is used for authentication, is also not fully supported in Next.js 13 and RSC.

## Techstack
Backend: **Java**, **Spring boot**, **PostgreSQL**; Deployed on **Azure**

Frontend: **JavaScript**, **NextJs 13**, **ReactJs**, **HTML**, **CSS**, **NextAuth**; Deployed on **Vercel**

Deployment automated via **Github actions**

Other tools/libraries: MUI, Framer Motion, CleaveJS, React Icons, Toastify

## Next 13 Features

- New `/app` dir
- Routing, Layouts
- Data Fetching, Caching and Mutation
- Loading UI
- Server and Client Components
- Middleware.js

## Running Locally

You'll need:
Docker
Maven
Java version 17


1. Clone this repository and CD into /server
2. Run this command in the server directory
```sh
docker compose up
```
3. Run
```sh
mvn clean package
```
4. CD into /target
5. Run the jar built by maven
```sh
java -jar *.jar
```

6. Backend should now be up and running! Go back to the project root folder and CD into /client

7. Copy `.env.example` to `.env.local` and configure the variables.
```sh
npm install
```
8. Start the development server:

```sh
npm run dev
```
