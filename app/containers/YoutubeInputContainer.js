var React = require('react');
var axios = require('axios');
var APIkey = 'AIzaSyDKSHOjEWO3fWq5MWLrJmavVJd7MucgtuQ';
var YoutubeInput = require('../components/YoutubeInput');


class YoutubeInputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    YouTubeGetID(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var videoID = this.YouTubeGetID(this.state.value);

        //Get the title and duration with YouTube API. (axios promise)
        axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoID + '&key=' + APIkey + '&part=snippet,contentDetails')
            .then((response) => { //Need an arrow function to preserve the 'this' scope for the 'this.props.getSong'
                if (response.data.items.length !== 0) {
                    var title = response.data.items[0].snippet.title;
                    var duration = response.data.items[0].contentDetails.duration;

                    var video = {
                        title: title,
                        duration: duration,
                        id: videoID
                    };

                    //Sending the song up to the parent
                    this.props.addSong(video);

                } else {
                    console.log('Invalid input. Please give a proper youtube link!');
                }

            })
            .catch(function (error) {
                console.log(error);
            });


        //Clearing Input field
        this.setState({
            value: ''
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="youtube-input">
                <input
                    type="text"
                    className="input"
                    value={this.state.value}
                    onChange={this.handleChange}/>

                <input className="input-button" type="submit" value="Send"/>
            </form>
        )
    }

}


module.exports = YoutubeInputContainer;
