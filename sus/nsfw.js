function nHentai(number){
	return "https://nhentai.net/g/" + Math.floor(Math.random() * number);
};

module.exports = {
	nHentai: nHentai
}
