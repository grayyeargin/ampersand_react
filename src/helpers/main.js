export function generateRandomString (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i=0; i<length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export function getSpotifyInfo(){
	let hashArr = location.hash.substring(1).split("&")
	var spotifyInfo = {}
	for (let i=0; i<hashArr.length; i++) {
		let query = hashArr[i].split("=")
		spotifyInfo[query[0]] = query[1]
	}

	return spotifyInfo
}