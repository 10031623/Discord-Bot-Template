# DB-Testing
This is a template for people who want to create Discord Bots with custom commands quickly, and easily.
(This is still a work in progress. If you have any suggestions or questions, then add them in the issues tab. I don't know much about javascript or Discord.js but, I have found that the discord bots that I want are either no longer working, don't have all the features that I would like, and/or there is no tutorial on the topic.)

To use this repository on https://www.repl.it/ make sure to set "index.js" as starting command, then click "done".
Once it is finished, delete the file ".replit" and then run the code again.
Now add your token in the "config.json" file
If ou want to keep the bot online:
1. remove the "//" in front of "//const config = require('./alive.js');" in the file "index.js". 
2. That line should now look like this "const config = require('./alive.js');"
And you are done!

[![Run on Repl.it](https://repl.it/badge/github/10031623/Discord-Bot-Template)](https://repl.it/github/10031623/Discord-Bot-Template)

I eventually would like to make a discord matchmaking bot that creates temp text and/or voice channels and sends an invite in chat so people can join up and play together. I would also like for the bot to auto lock the channel when the party fills up, have custom channel max user sizes, and much more.
If you know how to make this bot or know of a github repository with all of the files and features, (In discord.js code, and works on discord.js version 10.00 or higher), then DM me on discord @Valcore7#0949 . Thanks!!
