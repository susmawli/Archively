const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTc2MzcxNzYyNTM3MzEyMjc2.GNlSGe.3NSaUqpFY9uKqJsqvWd9lqCX2md1NORN6YMqXw"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.on("ready", () => {
    console.log(`yoly`)
})
client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})
client.login(process.env.TOKEN)