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
    prefix: "process.env.",
    owners: ["250195035792998400"]
}
client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadEvents(bot, false)
module.exports = bot
/*client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})*/
client.login(process.env.TOKEN)