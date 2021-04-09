module.exports = {
    name: 'test',
    description: 'this is a test command',
    async execute(message, args, Discord){

        let role = message.member.roles.cache.some(r => r.name === "SKY");

        if (role){
            const hook = new Discord.WebhookClient('829417619177472011','S34MpC-xVIslEfMQPSjG1G07vQsHKA1yFfNJFQmtTnYhTL1ziq7EN79Pms6qEKQaoQ12');
        hook.send('Sky is a fucking sexy beast ;)');
        hook.send('They are a better top than I am');
        hook.send('Oh fuck they make me moan and cum so much');
        hook.send('I\'d ride their dick all day');
        hook.send('I\'m such a bottom when Sky is around');
        } else {
            const hook = new Discord.WebhookClient('829412847179399168','QVhg5Q0dQhOiaFrn3UWg8QAwekcJc4F5OxJToStSpTKtobiENdFtDe1Z9IR0HTUJxz9p');
        hook.send('Alf is a fucking sexy beast ;)');
        hook.send('They are a better top than I am');
        hook.send('Oh fuck they make me moan and cum so much');
        hook.send('I\'d ride their dick all day');
        hook.send('I\'m such a bottom when Alf is around');
        }
    }
}