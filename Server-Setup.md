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

    ```curl -OJ https://mediafilez.forgecdn.net/files/####/###/StaTech+#.#.#+Server+Files.zip```

3. Unzip the file into your server folder. Use the `unzip` command. Install it with your package manager of choice if you don't have it.

    ```unzip StaTech+#.#.#+Server+Files.zip -d ./statech-server```

4. Change directory to the folder you just created

    ```cd statech-server```

5. Download the Fabric server jar. Use the exact command as below to avoid getting the wrong version:

    ```curl -OJ https://meta.fabricmc.net/v2/versions/loader/1.19.2/0.14.21/0.11.2/server/jar```

6. Make the server start script an executable

    ```chmod +x ./start.sh```

If you need to change the allocated RAM, you can use a text editor of your choice and adjust the `Xmx6G` to match how much RAM you wish to allocate
