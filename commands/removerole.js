exports.run = (client, message, args) =>{
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
        message.channel.send("You don't have the permissions to use this command!");
    }
    
    else{

        if(!rMember) 
            return message.channel.send("Couldn't find that user!");
        
        let role = args.join(" ").slice(22);
        if(!role) 
            return message.channel.send("Specify a role!");
        
        let gRole = message.guild.roles.find('name', role);
        if(!gRole) 
            return message.channel.send("Couldn't find that role.");

        if(!rMember.roles.has(gRole.id)) 
            return message.reply("They don't have that role.");
        
        else{
            rMember.removeRole(gRole.id).catch(console.error);
            
            try{
            }
            catch(e){
                console.log(e.stack);
    
        }
    }
}
};