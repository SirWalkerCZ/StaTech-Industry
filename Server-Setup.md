# Prerequisites
* [Java 17](https://www.oracle.com/java/technologies/downloads/#java17)
* StaTech Industry Server Files. 
    * Find the latest pack release [here](https://www.curseforge.com/minecraft/modpacks/statech-industry/files)
    * Scroll down on the file details and find the Server Files download
* [Fabric Server](https://fabricmc.net/use/server/) 
    * Click MC 1.19.2 
    * Fabric version 0.14.21 
    * Installer version 0.11.2 
    * Then click `Exectuable Server (.jar)` 

# Get a Free Server

If you're technically adept, you can take a shot at using Oracle's free VMs to host the server. You can follow the steps in [this guide](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud) to setup your server. There's some changes to setting up the server, but the Linux section assumes you have everything setup and are using an SSH client to access your VM.

# Windows
1. Create a new folder, name it whatever you want (StaTech Industry maybe)
2. Extract the contents of the StaTech Industry Server Files .zip into the folder you just created
3. Place the downloaded Fabric server software in the folder as well
4. Use start.bat to start your server!

If you need to adjust the RAM allocated, you can edit the `-Xmx6G` to however much RAM you want. Change the `6` to the number representing the Gigabyte amount.

# Linux
1. Create a new directory to store your files. 

    `mkdir statech-server`

2. Download the StaTech Industry Server Files. You can use a similar command to as below. Retrieve the server file link from CurseForge

```
    curl -OJ https://mediafilez.forgecdn.net/files/####/###/StaTech+#.#.#+Server+Files.zip
```

3. Unzip the file into your server folder. Use the `unzip` command. Install it with your package manager of choice if you don't have it.

```
    unzip StaTech+#.#.#+Server+Files.zip -d ./statech-server
```

4. Change directory to the folder you just created

```
    cd statech-server
```

5. Download the Fabric server jar. Use the exact command as below to avoid getting the wrong version:

```
    curl -OJ https://meta.fabricmc.net/v2/versions/loader/1.19.2/0.14.21/0.11.2/server/jar
```

6. Make the server start script an executable

```
    chmod +x ./start.sh
```

If you need to change the allocated RAM, you can use a text editor of your choice and adjust the `Xmx6G` to match how much RAM you wish to allocate

# Docker
This guide assumes you know the basics of docker.

1. Create Docker Compose File.

`docker-compose.yml`

```yaml
version: '3'

services:
  cf-initcontainer:
    image: tacomonkey/cf-initcontainer:latest
    container_name: cf-initcontainer
    volumes:
      - "./downloads:/downloads"
    environment:
      - CF_API_KEY=${CF_API_KEY}
      - MODPACK_ID=863689 # project id of the modpack
      - FILE_ID=4594293 #file id of the specific modpack version

  minecraft:
    image: itzg/minecraft-server:java17-graalvm-ce
    container_name: minecraft
    ports:
      - "25565:25565"
    volumes:
      - "./mc:/data"
      - "./downloads:/downloads"
    environment:
      - EULA=TRUE
      - MEMORY=8G
      - TYPE=AUTO_CURSEFORGE
      - CF_PAGE_URL=https://www.curseforge.com/minecraft/modpacks/statech-industry
      - CF_API_KEY=${CF_API_KEY}
      - CF_EXCLUDE_MODS=627566 704346 356643 475358 406343 393563 407206 398502 619718 365727 337243 547694 401978 541329 566140 417510 280294 313219 365615 629373 271492 459496 495267 455508 679177 325492 356461 308702 365521 363104 511319 385463 447673 394468 282313 521126 521594 547358
    depends_on:
      cf-initcontainer:
        condition: service_completed_successfully
    tty: true
    stdin_open: true
    restart: always
```

This `docker-compose.yml` file uses the cf-container image to download mods that disallow third-party mods. It may or may not be against the Curseforge TOS, so it is up to you if you want to use it or not.

The CF_EXCLUDE_MODS variable is preset with what should be all the clientside mods. This stops the server from downloading them, thus saving bandwidth and resulting in faster installs.

2. Aquire Curseforge API Key from their [Eternal Console](https://console.curseforge.com/#/api-keys).

3. Make a new `.env` file with the following content:
```
CF_API_KEY=your API key here
```

Don't forget to add an extra `$` after each `$` in the API key else it won't work

4. Start the containers

```shell
docker compose up -d
```

That's it! You can find more information at the [Docker Minecraft Server Repository](https://github.com/itzg/docker-minecraft-server).

# Setting up Simple Voice Chat
Included with the modpack is a mod called Simple Voice Chat. If you would like to enable it, it will require a little bit of setup. There's no point in me retyping what the developers have already documented. Go [here](https://modrepo.de/minecraft/voicechat/wiki/server_setup) and click the appropriate link if you're setting up the server yourself or using a hosting service.