function nHentai(){
	return "https://nhentai.net/g/" + Math.floor(Math.random() * 350000);
};

module.exports = {
	nHentai: nHentai
}
