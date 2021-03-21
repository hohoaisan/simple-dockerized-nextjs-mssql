# Simple dockerized Next.js & MSSQL with live reload enabled
## Purpose
- This is just a simple config intended for practicing writing Dockerfile and Docker Compose config
## Prerequisites
- Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
- Enough RAM for containers to run
## How to use
### Production
1. Clone this repository `git clone https://github.com/hohoaisan/simple-dockerized-nextjs-mssql.git`
2. Change your terminal working directory to cloned folder `cd simple-dockerized-nextjs-mssql`
3. Simply run `docker-compose up` and wait for it (for the first time, Docker has to pull heavy images from Docker Hub, so the time is suprisingly longer than the next time you build this)
### Developing with live reload enabled
Notice: Live reloading only works if the original files are stored in the Linux filesystem ([reason](https://docs.docker.com/docker-for-windows/wsl/#best-practices)), so basically when you make changes to the source code in Windows folder, it'll not work, I recommend clonning and running this in [WSL2](https://docs.docker.com/docker-for-windows/wsl/).
1. Clone this repository `git clone https://github.com/hohoaisan/simple-dockerized-nextjs-mssql.git`
2. Change your terminal working directory to cloned folder `cd simple-dockerized-nextjs-mssql`
3. Change the config (database name/password - make sure nextjs and mssql have the same config, ports, uncomment `command: yarn dev` in nextjs config to override production build
4. Run `docker-compose up`
5. Make changes to the source code and live reload will do the rest for you
## 
Since you want to stop the project, change your terminal working directory to cloned folder:
- `docker-compose stop` or just `Ctrl+C` in the console to stop running containers
- `docker-compose down` to stop (if running) and remove all containers

And `docker-compose start` to start containers again (if they were not removed) without rebuilding the containers from images
