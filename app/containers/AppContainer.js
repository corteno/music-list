var React = require('react');
var YoutubeInputContainer = require('./YoutubeInputContainer');
var CurrentSongContainer = require('./CurrentSongContainer');
var SongListContainer = require('./SongListContainer');
var HandleSongs = require('../logic/HandleSongs')

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleGetSongs = this.handleGetSongs.bind(this);

    }

    handleAddSong(song){
        HandleSongs.AddSong(song);
    }

    handleGetSongs(){
        var songsArray = HandleSongs.GetSongs();
    }

    handleCurrentSong(){

    }

    render() {
        return (
            <div className="app-wrapper">
                <YoutubeInputContainer addSong={this.handleAddSong.bind(this)} />
                <CurrentSongContainer handleCurrentSong={this.handleCurrentSong.bind(this)} />
                <SongListContainer handleGetSongs={this.handleGetSongs.bind(this)} />
            </div>
        )
    }

}


module.exports = AppContainer;
