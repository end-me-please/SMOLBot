const Discord = require("discord.js");
const login = require("./token.json");
const Filesys = require("fs");
const Path = require("path");
const DiscordModule = require("discord-module");
const Embed = require("./help.js");
const Sus = require("./sus/nsfw.js");
const Bot = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
});

const prefix = "sm!";

Bot.on("ready", () => {
		Bot.user.setActivity("everything", {
			type: "WATCHING"
		});
});

Bot.on("messageCreate", msg => {
	if(msg.author.bot) return;
	if(!msg.content.startsWith(prefix)) return;

    const cBody = msg.content.slice(prefix.length);
    const args = cBody.split(" ");
    const c = args.shift().toLowerCase();

    switch(c){
    	case "ping":
    	msg.reply("Pong!");
    	break;

    	case "help":
    	msg.reply({
    		embeds: [
    			Embed.HelpEmbed
    		]
    	});
    	break;

    	case "delayping":
    	const rnd = Math.floor(Math.random() * 25);
    	setTimeout(() => {
    		msg.reply(rnd + " seconds!");
    	}, rnd * 1000);
    	break;

    	case "eval":
    	if(msg.author.id != "691650272166019164") return;
    	
    	const eArgs = msg.content.slice(4);
    	try{
    		msg.reply("Output: ```\n" + eval(eArgs.replace("val", "")) + "\n```");
    	} catch(e) {
    		msg.reply(e.toString());
    		console.log(e.toString());
    	}
    	break;

    	case "av":
    	let user = msg.mentions.users.first() || msg.author;
    	const AvEmbed = new Discord.MessageEmbed()
    	.setTitle("Avatar")
    	.setImage(user.displayAvatarURL() + "?size=2048");
    	msg.reply({
    		embeds: [
    			AvEmbed
    		]
    	});
    	break;

    	case "nh":
    	const nArgs = msg.content.slice(5);

    	let nArr = [];
    	
    	for(i = 0; i < Number(parseFloat(nArgs.toString())); i++){
    		nArr.push(Sus.nHentai(370000).toString());
    	};
    	if(nArr.toString().length > 1990){
    		msg.reply("Generated links surpass 2000 letters!");
    		nArr = [];
    	} else {
    	msg.channel.send(nArr.toString().replace(/,/g, "\n"));
    	nArr = [];
    	};
    	break;
    };
});

Bot.login(login.TOKEN);
