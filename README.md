![gen-uni-banner]( )

## Generative Universe

First, make sure computer has [Node.js](https://nodejs.org/en) installed

Install `driver_ch340_341_arduino.exe` from folder `arduino`

Open http://localhost:5001 with your browser 

Move to folder `server-src` and open command line by typing `cmd` in adress bar of windows explorer

![adress bar]( )

Use next command to install packages

```
npm i
```
![npm i]( )

Use next command to run the programm. Go through numbers from 1 to 9 until you see message `port opened` and animation changes

```
node server.mjs номер_от_1_до_9
```

![port opened]( )

If something stops working, check if usb wires are connected properly

If it doesn't help or the wires were disconnected restart the programm:

- press `Ctrl + C`
- run next command, go through numbers from 1 to 9 until you see message `port opened` and animation changes

```
node server.mjs номер_от_1_до_9
```
![port restart]( )

## Acknowledgements
 - [Next.js](https://nextjs.org/)
 - [Институт Бизнеса и Дизайна](https://obe.ru/)
 - [Игорь Мелехов](https://obe.ru/teacher/melehov-igor-sergeevich/)
 - [Владислава Иванова](https://www.behance.net/marooncoucal)
