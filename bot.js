const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
let bot = {
    client,
    prefix: "!",
    owners: ["250195035792998400"]
}
client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot
/*client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})*/

// music csv logger
/*const fs = require("fs");
client.on("messageCreate", message => {
    var linebreak = "\n";
    var readmessagefile = fs.readFileSync("musicList.csv", "utf-8");
    var writemessagefile = fs.writeFileSync("musicList.csv", linebreak + message.createdAt + ", " + message.member.user.username + ", " + message.content + readmessagefile)
});*/

// music embed logger : figure out how to set it so that everytime the !play command is used it will check if there is an embed with "Now Playing"; else save the youtube/spotify links or keyword search. Ideally then it will be set taht if it is a keyword search it will use whatever the music bot searched and autochose, usually the first youtube search result. 
const fs = require("fs");
client.on("messageCreate", message => {
let embed = message.embeds[0];
if (message.author.id == "159985870458322944" && embed && embed.title?.includes("Now Playing")) {
    var linebreak = "\n";
    var readmessagefile = fs.readFileSync("musicList.csv", "utf-8");
    var Writemessagefile = fs.writeFileSync("musicList.csv", linebreak + embed.description + ", " + message.createdAt);    
    }
})
client.login(process.env.TOKEN)