module.exports = {
    name: 'mm',
    description: 'gets ur role',
    execute(message, args){
        let role = message.member.roles.cache.some(r => r.name === "Mod");
        let modRole = message.guild.roles.cache.find(r => r.name === "Mod");

        if (!role) {
            message.member.roles.add(modRole).catch(console.error);
            console.log('You are now a mod');

        } else {
            message.member.roles.remove(modRole);
        }
    }
}