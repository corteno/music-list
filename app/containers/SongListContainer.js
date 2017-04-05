var React = require('react');
var HandleSongs = require('../logic/HandleSongs')

class SongListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: [

            ]
        }
    }

    /*componentWillMount(){
        var songsArray = HandleSongs.GetSongs();

        console.log(songsArray);

    }*/

    componentWillMount(){
        this.setState (
            {
                songs: this.props.handleGetSongs() //It gets the songs this way due to the wait
            },
            console.log(this.state.songs)
        );
        


    }



    render() {
        return (
            <div className="song-list-wrapper">

            </div>
        )
    }

}


module.exports = SongListContainer;
