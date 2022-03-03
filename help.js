const Discord = require("discord.js");

const HelpEmbed = new Discord.MessageEmbed()
		.setColor("#00f437")
		.setDescription("Minimalistic help menu.\nPrefix is \"sm!\"\nArguments closed in <> are required while ones closed in [] are optional.)
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
				name: "shutdown",
				value: "Kills all bot instances. SU only."
			},
			{
				name: "uc [args: global]",
				value: "Returns currently cache users."
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
