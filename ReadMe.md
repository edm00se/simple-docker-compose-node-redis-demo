# Docker Compose Getting Started
Built from the "getting started" guide on docs.docker.com:
https://docs.docker.com/compose/gettingstarted/

# Required
1. [Docker](https://www.docker.com/products/docker)
2. [Docker Compose](https://docs.docker.com/compose/install/) (should come with [Docker CE](https://store.docker.com/search?offering=community&type=edition) for macOS and Windows)
3. (optional) a GUI, mostly needed if you're using docker toolbox, but can be helpful for the less Docker experienced
    - [Portainer](https://www.portainer.io/)
    - [Kitematic](https://kitematic.com/)

# Adapted
Adapted from the original docker compose getting started guide to use Node w/ the Express framework in place of python.

## Create from Scratch

1. Create Docker image, build `Dockerfile`
2. Build the image, `docker build -t web .`
3. Define services, port bindings, in `docker-compose.yml`
4. Build and run w/ compose, `docker-compose up` (add `-d` for it to run 'detatched', in background)

\* To remove the container(s) defined by the `docker-compose.yml`, run `docker-compose rm` from cwd.

## Clone and Run

1. `git clone https://github.com/edm00se/simple-docker-compose-node-redis-demo.git`
2. `cd simple-docker-compose-node-redis-demo`
3. `docker-compose up` (first time run will perform build)
    - you can force a fresh build with `--build`
    - you can background (run without holding up your CLI) by using `--detach`

# License
The MIT License (MIT).
