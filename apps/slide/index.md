---
marp: true
title: Producktivity
description: Presentation slide for Producktivity, thinc 10 days project
backgroundColor: #191a23
color: white
style: |
  @import url("https://fonts.googleapis.com/css?family=Inter:r,b&display=swap");
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:r,b&display=swap");

  section.title h1 {
    font-size: 4em;
  }

  * {
    font-family: Inter, "IBM Plex Sans Thai";
  }

  a {
    color: #78c5e9;
  }

  section.thicc h1 {
    font-size: 3em;
  }

  section.thicc p {
    font-size: 1.66em;
  }

  img {
    background-color: transparent;
  }
---

<!-- _class: title -->

# Producktivity

by the team named "brikl.com/jobs"

---

<!-- _class: thicc -->

# View Slide

[slide-producktivity.pages.dev](https://slide-producktivity.pages.dev)

---

# Team Members

- Nutthapat Pongtanyavichai ([Leomotors](https://github.com/Leomotors))

  - Platform, Dev Lead
  - Year 1 Computer Engineering, Software Engineer at Brikl

- Idhibhat Pankam ([bookpanda](https://github.com/bookpanda))

  - Frontend
  - Year 1 Computer Engineering

- Warissara Booranamaitree ([warboo](https://github.com/warboo))

  - Backend
  - Year 1 Computer Engineering

---

# Team Members

- Krittapasa Boontaveekul ([MATT138](https://github.com/MATT138))

  - Backend
  - Year 3 Information and Communication Engineering

- Peneik Sittimongkol ([mynamefaro](https://github.com/mynamefaro))

  - Project Manager, Frontend
  - Year 1 Computer Engineering

- Matina Vormbrock (Talent)
  - Design
  - Year 1 Automotive Design and Manufacturing Engineering

---

# What is Producktivity?

_For ducks who want to be productive._

Pomodoro, tasks, events, habits, schedule, all-in-one app.

## Why we made it?

Because someone want it, so we make it

---

<!-- _class: thicc -->

# Deployed to internet

Frontend at [producktivity.pages.dev](https://producktivity.pages.dev)

Backend at [producktivity.azurewebsites.net](https://producktivity.azurewebsites.net)

Source Code at [Leomotors/producktivity](https://github.com/Leomotors/producktivity)

---

# Disclaimer

- Frontend is not finished yet. We only have 10 days 😭😭😭😭😭💢💢. There will be **LOTS** of bug.

- Backend is located at `/graphql`. If you enter `/` you will find "something"

---

# Process of Development

By Design and Project Manager

- [Figma](https://www.figma.com/file/zYcDWpr8iNz8id1E1QQBlB/Scheduler-Website?node-id=6%3A6)

- [Requirements Document](https://drive.google.com/file/d/1tLtUcrl5dQj4iyINH5uNfmWuxEwHD91l/view?usp=sharing)

---

<h1 align="center">Process of Development - ER Table</h1>

<img src="./images/ertable.webp" height="540px" style="margin: 0 auto;" />

---

<h1 align="center">Process of Development - Sitemap</h1>

<img src="./images/sitemap.webp" height="540px" style="margin: 0 auto;" />

---

<!-- backgroundColor: #343649 -->

# Tech Stack

- This stack is inspired by MonkeyEveryday <img src="https://static.monkeyeveryday.com/client-file/images/everyday-logo-black.svg" width="192px" style="transform: translateY(20px); margin-top: -999px;" />

- But we use Turborepo instead of NX

- We also use Double Quotes because we ~~love~~ C++

# Why this Stack?

- For team members to have an image of what business production stack look like.

---

# Stack - Frontend

<div style="display: flex; flex-direction: row; justify-items: center; align-items: center; gap: 1.5em; margin: 4rem auto">

![h:256](https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png)

![h:256](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png)

</div>

---

# Stack - Backend

<div style="display: flex; flex-direction: row; justify-items: center; align-items: center; gap: 1.5em; margin: 4rem auto">

![h:256](https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png)

![h:256](https://grafana.com/static/img/logos/apollo-server_logo.svg)

![h:256](https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png)

![h:256](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png)

</div>

---

# Stack - API

<div style="display: flex; flex-direction: row; justify-items: center; align-items: center; gap: 1.5em; margin: 4rem auto">

![h:256](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png)

![h:256](https://repository-images.githubusercontent.com/75657790/08db0980-c050-11e9-9924-d343fd5a3ddd)

</div>

---

# Stack - Platform

<div style="display: flex; flex-direction: row; justify-items: center; align-items: center; gap: 1.5em; margin: 4rem auto">

![h:256](https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg)

![h:256](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zse0wu5hl9aev4r2eydy)

![h:256](https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png)

</div>

---

# Stack - CI and Deployment

<div style="display: flex; flex-direction: row; justify-items: center; align-items: center; gap: 1.5em; margin: 4rem auto">

![h:256](https://avatars.githubusercontent.com/u/44036562?s=280&v=4)

![h:256](https://pages.cloudflare.com/resources/logo/logo.svg)

![h:256](https://azurecomcdn.azureedge.net/cvt-fe57289d93574764bb92c960bccedc24350feca44bb59a4812ed905039930935/svg/container-registry.svg)

![h:256](https://azurecomcdn.azureedge.net/cvt-fe57289d93574764bb92c960bccedc24350feca44bb59a4812ed905039930935/svg/app-service.svg)

</div>

---

<h1 align="center" style="font-size: 2.5em;">Demo Time</h1>

<img src="https://github.com/creatorsgarten/hacktoberfest-museum/blob/main/public/images/deploydeemai.png?raw=true" style="margin: 0 auto;" />
