# Docker

## Docker images

- Docker images are read-only templates (blueprint) that define how to build a Docker container.
- You can change the container after it's built, but the image remains the same.
- So in the start of the container of that image, it will be the same as always.

### Image common data

- Often a linux distribution is used as the base image.
- Runtime environment needed to run the application(Node.js Python, etc.)
- Library dependencies needed to run the application (e.g., Python requirements.txt, package.json)
- Application source code or compiled binaries
- Configuration files (e.g., .env, config.json)

### Images sources location

1. [Docker Hub](https://hub.docker.com/)
2. Private registries (e.g., GitLab, GitHub, etc.)
3. Building your own images: Dockerfile

## Containers registries

- It's a place to store and share Docker images.
- Registries offers a way to share images with others:
  - Collaboration
  - Version control: tracking different versions of an image
  - Security: registries provide a secure way to store and share sensitive images
  - Automation: registries can be integrated with CI/CD pipelines to automate the build and deployment of Docker images

## Dockerfiles

- Dockerfiles are text files that contain instructions for building Docker images.
- They define the steps to create a Docker image from a base image.
- They have a bundle of instructions with arguments that define how to build the image.
- Example:

```dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

- Dockerfiles give you a way to define the exact custom environment in which your application will run. Avoiding the "it works on my machine" problem.
- Dockerfiles automate the build process of the application.

## Images vs Containers

- Images are read-only templates that define how to build a Docker container.
- Containers are instances of images that can be run, started, stopped, and removed.
- Images are static, while containers are dynamic.
- Images are stored in registries, while containers are stored in the Docker daemon.
