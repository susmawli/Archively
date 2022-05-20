module.exports = {
    name: "yo",
    category: "test",
    permission: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("yoly")
    }
}