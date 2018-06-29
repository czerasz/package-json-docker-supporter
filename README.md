# package.json Docker Supporter

This project creates a binary that improves Docker builds caching.

> **WARNING**
> The `pjds` command overwrites the `package.json` and `package-lock.json` files.

## Why

A usual `Dockerfile` for Node.js projects looks like this:

```Dockerfile
FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY ./package.json ./package-lock.json /usr/src/app/
RUN npm install && npm cache clean --force

...
```

If the `package.json` or `package-lock.json` change, then cache is invalidated.

## How

Before running `docker build ...` execute `pjds`.
The command will overwrite `package.json` and `package-lock.json` and will keep only dependencies related content.

## Development

### Requirements

- Node.js

### Setup

Install required packages:

```bash
npm install
```
