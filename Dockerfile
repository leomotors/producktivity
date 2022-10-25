FROM node:16-alpine as builder

RUN apk add --no-cache libc6-compat
RUN apk update

RUN npm i --location=global pnpm

WORKDIR /cunny

COPY package.json turbo.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

COPY apps/server ./apps/server

# Copy DevDependencies
COPY packages/config ./packages/config
COPY packages/constants ./packages/constants
COPY prisma ./prisma

COPY .env ./.env

RUN pnpm install
RUN pnpm build:server

FROM node:16-alpine

WORKDIR /app

RUN npm i --location=global pnpm

COPY --from=builder /cunny/node_modules ./node_modules
COPY --from=builder /cunny/apps/server ./apps/server
COPY --from=builder /cunny/pnpm-workspace.yaml ./
COPY --from=builder /cunny/package.json ./
COPY --from=builder /cunny/turbo.json ./
COPY --from=builder /cunny/.env ./

EXPOSE 5651

CMD ["pnpm", "start:server"]
