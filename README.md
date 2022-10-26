# Producktivity

The ducks that wants to be productive, Thinc 10 days project.

[Presentation Slide](https://slide-producktivity.pages.dev)

## Development Setup

### Prerequisites

- OS: Linux Recommended (Windows highly not recommended)
- node 16
- pnpm 7
- Docker (to run docker-compose) or PostgreSQL 13

To start database using docker-compose, run `docker-compose up -d`, you can
manage container at Docker Desktop

### Steps

- pnpm install
- Setup .env, copy `.env.template` to `.env` (it is the same for local development)

  - Root Level
  - apps/client

- pnpm prisma migrate dev
- pnpm dev -> this should start both client and server
