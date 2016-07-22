# Docker Compose Getting Started
Built from the "getting started" guide on docs.docker.com:
https://docs.docker.com/compose/gettingstarted/

# Adapted
Adapted to use a simplistic Node+Express hello world example.

## Steps

1. Create Docker image, build `Dockerfile`
2. Build the image, `docker build -t web .`
3. Define services, port bindings, in `docker-compose.yml`
4. Build and run w/ compose, `docker-compose up` (add `-d` for it to run 'detatched', in background)

\* To remove the container(s) defined by the `docker-compose.yml`, run `docker-compose rm` from cwd.
