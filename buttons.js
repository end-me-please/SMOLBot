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

module.exports = {
	NsfwButton: NsfwButton,
	HelpButton: HelpButton
}
