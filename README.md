![gen-uni-banner](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/gen-uni-banner.jpg)

## Generative Universe

First, make sure computer has [Node.js](https://nodejs.org/en) installed

![Node-js-search](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/Node-js-search.jpg)

Open folder `Gen-Uni-BiD-DD21-Vlada`

![folder-overview](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/folder%20overview.jpg)

Install `driver_ch340_341_arduino.exe` from folder `arduino`

![arduino-driver](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/arduino-driver.jpg)

Open http://localhost:5001 with your browser 

Move to folder `server-src` and open command line by typing `cmd` in adress bar of windows explorer

![cmd](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/cmd.jpg)

Use next command to install packages

```
npm i
```
![npm i](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/npm-i.jpg)

Use next command to run the programm. Go through numbers from 1 to 9 until you see message `port opened` and animation changes

```
node server.mjs номер_от_1_до_9
```

![port opened](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/port-opened.jpg)

If something stops working, check if usb wires are connected properly

If it doesn't help or the wires were disconnected restart the programm:

- press `Ctrl + C`
- run next command, go through numbers from 1 to 9 until you see message `port opened` and animation changes

```
node server.mjs номер_от_1_до_9
```
![port restart](https://github.com/marooncoucal/Gen-Uni-BiD-DD21-Vlada/blob/main/readme-img/port-restart.jpg)

## Acknowledgements
 - [Next.js](https://nextjs.org/)
 - [Институт Бизнеса и Дизайна](https://obe.ru/)
 - [Игорь Мелехов](https://obe.ru/teacher/melehov-igor-sergeevich/)
 - [Владислава Иванова](https://www.behance.net/marooncoucal)
