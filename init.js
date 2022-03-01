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

function createButton(id, label, style, disabled){
	return new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
	.setCustomId(id)
	.setLabel(label)
	.setStyle(style)
	.setDisabled(disabled)
	);
}

Bot.on("ready", () => {
		Bot.user.setActivity("everything", {
			type: "WATCHING"
		});
		setTimeout(() => {
			Bot.destroy();
		}, 9000 * 1000);
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
    	const nsfwB = createButton("nsfw", "NSFW", "PRIMARY", false);
    	msg.reply({
    		embeds: [
    			Embed.HelpEmbed
    		],
    		components: [
    			nsfwB
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
    		if(msg.channel.nsfw == true){
    			nArr.push(Sus.nHentai(370000).toString());
    		} else {
    			nArr.push("[redacted]/" + Math.floor(Math.random() * 370000));
    		}
    	};
    	if(nArr.toString().length > 1990){
    		msg.reply("Generated links surpass 2000 letters!");
    		nArr = [];
    	} else {
    	msg.channel.send(nArr.toString().replace(/,/g, "\n"));
    	nArr = [];
    	};
    	break;

    	case "shutdown":
       	if(msg.author.id != "691650272166019164") return;
       	Bot.destroy();
       	break;
    };
});

Bot.on("interactionCreate", interaction => {
	if(!interaction.isButton()) return;

	if(interaction.customId == "nsfw"){
		interaction.editReply("amogus");
	};
});

Bot.login(login.TOKEN);
