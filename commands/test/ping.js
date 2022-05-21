module.exports = {
    name: "ping",
    category: "test",
    permission: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("pong")
    }
}