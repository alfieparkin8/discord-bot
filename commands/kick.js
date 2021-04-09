module.exports = {
    name: 'kick',
    description: 'this is a kick command',
    execute(message, args){
        let kickPerm = message.member.permissions.has("KICK_MEMBERS");

        if (kickPerm) {
            message.channel.send('You can kick people');
        } else {
            message.channel.send('You can\'t kick people');
        }
    }
}