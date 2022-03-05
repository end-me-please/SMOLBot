const Discord = require("discord.js");

const HelpEmbed = new Discord.MessageEmbed()
		.setColor("#00f437")
		.setDescription("Minimalistic help menu.\nPrefix is \"sm!\"\nArguments closed in <> are required while ones closed in [] are optional.")
		.addFields(
			{
				name: "ping",
				value: "The typical bot command. Returns \"Pong!\" when used."
			},
			{
				name: "help",
				value: "Shows *this* help menu you are currently reading."
			},
			{
				name: "delayping",
				value: "\"ping\", but has a delay between 0 (instant) and 25."
			},
			{
				name: "eval <script>",
				value: "Runs arbitary javascript code. Can also be used to test bot scripts. SU only."
			},
			{
				name: "av <mention>",
				value: "Obtains the avatar of the mentioned user."
			},
			{
				name: "sid",
				value: "Returns the current session id."
			},
			{
				name: "shutdown <sessionId/all>",
				value: "Kills bot instances. SU only."
			},
			{
				name: "uc <global/server>",
				value: "Returns currently cached users."
			},
			{
				name: "archive <sfw/nsfw>",
				value: "Archives the message the caller replied to. Use the \"nsfw\" argument on downright nsfw messages."
			},
			{
				name: "centcom",
				value: "Sends an invite to the SMOLBot CentCom server."
			}
		);

const NsfwHelpEmbed = new Discord.MessageEmbed()
		.setColor("#ff0f32")
		.setDescription("NSFW help menu.")
		.addFields(
			{
				name: "nh <count>",
				value: "Generates NH links."
			}
		);

module.exports = {
	HelpEmbed: HelpEmbed,
	NsfwHelpEmbed: NsfwHelpEmbed
};
