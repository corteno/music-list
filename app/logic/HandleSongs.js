var axios = require('axios');
var binID = "cogib";
var songList = [];

const GetSongs = () => {
    axios.get("https://api.myjson.com/bins/" + binID)
        .then((response) => {
            // console.log(response.data);
            response.data.map((e) => {
                songList.push(e);
            });
            return songList;

        })
        .catch(function (error) {
            console.log(error);
            return null;
        });

}

const AddSong = (song) => {
    console.log("Song to add", song.title, `\nDuration - ` + song.duration, "\nID " + song.id);

}


module.exports = {
    AddSong,
    GetSongs
}