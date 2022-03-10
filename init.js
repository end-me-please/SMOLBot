const Discord = require("discord.js");
const login = require("./token.json");
const Filesys = require("fs");
const Path = require("path");
const DiscordModule = require("discord-module");
const Embeds = require("./help.js");
const Sus = require("./sus/nsfw.js");
const Buttons = require("./buttons.js");
const Fetch = require("node-fetch");
const Git = require("github-url-to-object");
const BetterSus = require("nhentai-js");
const Bot = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	],
	disableMentions: "everyone"
});

let prefix = "sm!";

Bot.on("ready", () => {
		Bot.user.setActivity("everything", {
			type: "WATCHING"
		});
		
		Bot.channels.cache.get("948818452678852628").send("Bot has initialized!");
		
		setTimeout(() => {
			Bot.channels.cache.get("948818452678852628").send("Bot is restarting...");
		}, 7100 * 1000);
		
		setTimeout(() => {
			Bot.destroy();
		}, 6900 * 1000);
		
		setInterval(() => {
			Bot.user.setAvatar("./pfps/pfp" + Number(1 + Math.floor(Math.random() * 3)) + ".png");
		}, 3600 * 1000);
});

Bot.on("messageCreate", msg => {
	{try{
	if(msg.author.bot) return;
	let botMention = "<@!"+Bot.user.id+">";
	if(!msg.content.startsWith(prefix)&&!msg.content.startsWith(botMention)) return;

    let cBody = msg.content.replace(/^(prefix)/,'');
    cBody = cBody.replace(/^(botMention)/,'');
    
    const args = cBody.split(" ");
    const c = args.shift().toLowerCase();

    switch(c){
    	case "ping":
    	msg.reply("Pong!");
    	break;

    	case "help":
    	msg.reply({
    		embeds: [
    			Embeds.HelpEmbed
    		],
    		components: [
    			Buttons.NsfwButton,
    			Buttons.EndButton
    		]
    	});
    	break;

    	case "delayping":
    	const rnd = Math.floor(Math.random() * 25);
    	setTimeout(() => {
    		msg.channel.send("<@!" + msg.author.id+ "> " + rnd + " seconds!");
    	}, rnd * 1000);
    	break;

    	case "eval":
    	if(msg.author.id != "691650272166019164") return;
    	
    	const eArgs = msg.content.slice(4);
    	try {
    		msg.channel.send("Output: ```\n" + eval(eArgs.replace("val", "")) + "\n```");
    	} catch(e) {
    		msg.channel.send(e.toString());
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
    	if(nArgs >= 70){
    		console.log("No more than 69.");
    		return;
    	};

    	let nArr = [];
    	for(i = 0; i < Number(parseFloat(nArgs.toString() || "1")); i++){
    		if(msg.channel.nsfw == true){
    			nArr.push(Sus.nHentai(370000).toString());
    		} else {
    			nArr.push("[redacted]/" + Math.floor(Math.random() * 370000));
    		};
    	};
    	if(nArr.toString().length > 1990){
    		msg.reply("Generated links surpass 2000 letters!");
    		nArr = [];
    	} else {
    		msg.channel.send("o: " + nArr.toString().replace(/,/g, "\n"));
    		nArr = [];
    	};
    	break;

    	case "shutdown":
       	if(msg.author.id != "691650272166019164") return;

   	    Bot.destroy();
       	break;

       	case "uc":

       	let ucArgs = msg.content.slice(6);
       	
       	switch(ucArgs){

       		case "server":
       		let uArr = [];
       		msg.guild.members.cache.forEach(usr => uArr.push(usr.user.username + " - " + usr.user.id));
       		msg.channel.send("Cached users in this guild: ```\n" + uArr.join("\n") + "\n```\nNOTE: This list will reset everytime the bot restarts.");
			break;
       		
			case "global":
       		let ugArr = [];
       		Bot.users.cache.forEach(us => ugArr.push(us.username + " - " + us.id));
       		msg.channel.send("Cached users in all guilds SMOLBot is in: ```\n" + ugArr.join("\n") + "\n```\nNOTE: This list will reset everytime the bot restarts.");
       		break;

       		default:
       		msg.reply("Please supply an argument. (server/global)");
       		break;
       	};
       	break;

       	case "archive":

       	let archArgs = msg.content.slice(11);

       	switch(archArgs){

       		case "sfw":
       		let reply = msg.reference;
       		if(reply == null) return;
       		let arch = msg.channel.messages.fetch(reply.messageId);
       		let archArr = [];
	
    	   	arch.then(mesg => {
    	   		Bot.channels.cache.get("948818170628698182").send(mesg.author.username + " in " + mesg.guild.name.toString().replace(/everyone/g, "everyonе").replace(/here/g, "herе") + " at <#" + mesg.channel.id + ">: " + mesg.content.toString().replace(/everyone/g, "everyonе").replace(/here/g, "herе") + " (uploaded by " + msg.author.username + ")");
       			msg.reply("Uploaded content to SMOLBot CentCom."); //where rico at
       			Array.from(mesg.attachments.values()).forEach(att => archArr.push(att.url));
       			Bot.channels.cache.get("948818170628698182").send("Attachments: " + archArr.join("\n"));
       		});
       		break;

       		case "nsfw":
       		let replyMaxime = msg.reference;
       		if(replyMaxime == null) return;
       		let archMaxime = msg.channel.messages.fetch(replyMaxime.messageId);
       		let archArrMaxime = [];

       		archMaxime.then(amax => {
       			Bot.channels.cache.get("948892839390113842").send(amax.author.username + " in " + amax.guild.name.toString().replace(/everyone/g, "everyonе").replace(/here/g, "herе") + " at <#" + amax.channel.id + ">: " + amax.content.toString().replace(/everyone/g, "everyonе").replace(/here/g, "herе") + " (uploaded by " + msg.author.username + ")");
       			msg.reply("Uploaded content to Falco Maxime."); //o no
       			Array.from(amax.attachments.values()).forEach(attMaxime => archArrMaxime.push(attMaxime.url));
				Bot.channels.cache.get("948892839390113842").send("Attachments: " + archArrMaxime.join("\n"));
       		});
       		break;

       		default:
       		msg.reply("Please supply an argument. (sfw/nsfw)");
       		break;

       	};
       	break;

       	case "centcom":
       	msg.reply("https://discord.gg/8syZQdqhwy").then(s => setTimeout(() => {
       		s.delete();
       	}, 5 * 1000));
       	break;
    };
}catch(e){msg.channel.send("an impostor sabotaged something")}};

Bot.on("interactionCreate", async interaction => {
	if(!interaction.isButton()) return;

	if(interaction.customId == "nsfw"){
		await interaction.update({
			embeds: [
				Embeds.NsfwHelpEmbed
			],
			components: [
				Buttons.HelpButton,
				Buttons.EndButton
			]
		});
	};

	if(interaction.customId == "help"){
		await interaction.update({
			embeds: [
				Embeds.HelpEmbed
			],
			components: [
				Buttons.NsfwButton,
				Buttons.EndButton
			]
		});
	};

	if(interaction.customId == "end"){
		await interaction.update({
			content: "Closed.",
			embeds:[],
			components: []
		});
	};
});

Bot.login(login.TOKEN);
