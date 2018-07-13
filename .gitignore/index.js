const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Jchui le jumeaux d'un batard qui marche pas :^");
    console.log("Prêt !");
});

bot.login("NDY3NDA5MDYwMTkxMjcyOTYw.DiqRpg.Yo1-ZeWxv6NhymgQsu9AdU1b2bU");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes; \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Comment tu parle toi ?");
        console.log("Commande Salut Effectué");    
    }
});
