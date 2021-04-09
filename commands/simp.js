module.exports = {
    name: 'simp',
    description: 'makes you a simp',
    execute(message, args, Discord){
        if (message.member.roles.cache.has('829389654503456777')) {
            const newEmbed = new Discord.MessageEmbed()
        .setColor('#b39eb5')
        .setTitle('Simp')
        .setURL('https://www.google.co.uk')
        .setImage('https://i.pinimg.com/originals/b6/e5/c1/b6e5c185f1d0461d22d7684768be70fb.jpg')
        .setFooter('they are a simp for Sky');
        
        message.channel.send(newEmbed);
        } 
        else {
            message.channel.send('You are definitely a simp');
            message.member.roles.add('829389654503456777')
        }
    }
}