const Discord = require("discord.js");

const NsfwButton = new Discord.MessageActionRow().addComponents(
	new Discord.MessageButton()
	.setCustomId("nsfw")
	.setLabel("NSFW")
	.setStyle("PRIMARY")
);

const HelpButton = new Discord.MessageActionRow().addComponents(
	new Discord.MessageButton()
	.setCustomId("help")
	.setLabel("Back")
	.setStyle("PRIMARY")
);

const EndButton = new Discord.MessageActionRow().addComponents(
	new Discord.MessageButton()
	.setCustomId("end")
	.setLabel("End Session")
	.setStyle("PRIMARY")
);

const nhButtonRow = new Discord.MessageActionRow().addComponents(
	new Discord.MessageButton()
	.setCustomId("nhPageUp")
	.setLabel("next")
	.setStyle("SUCCESS"),
	new Discord.MessageButton()
	.setCustomId("nhPageDown")
	.setLabel("previous")
	.setStyle("DANGER"),
	new Discord.MessageButton()
	.setCustomId("end")
	.setLabel("close")
	.setStyle("PRIMARY")
	)
module.exports = {
	NsfwButton: NsfwButton,
	HelpButton: HelpButton,
	EndButton: EndButton,
	nhButtonRow: nhButtonRow	
}
