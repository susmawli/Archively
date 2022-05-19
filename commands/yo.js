module.exports = {
    name: 'yo',
    //cooldown: 10,
    description: "yoly!",
    execute(client, message, cmd, args, Discord){
        message.channel.send('yoly!');
    }
}