var React = require('react');
var axios = require('axios');
var YoutubeInput = require('../components/YoutubeInput');
var APIkey = 'AIzaSyDKSHOjEWO3fWq5MWLrJmavVJd7MucgtuQ';


var VideoInput = React.createClass({

    YouTubeGetID(url){
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
    },
    handleChange(event)
    {
        console.log("this runs");
        this.setState({
            value: event.target.value
        });
    },
    handleSubmit: function (event) {
        console.log("asd");
        event.preventDefault();
        
        var videoID = this.YouTubeGetID(this.state.value);

        //Get the title and duration with YouTube API. (axios promise)
        axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoID + '&key=' + APIkey + '&part=snippet,contentDetails')
            .then(function (response) {
                var title = response.data.items[0].snippet.title;
                var duration = response.data.items[0].contentDetails.duration;

                console.log("Title " + title, `\nDuration - ` + duration);
            })
            .catch(function (error) {
                console.log(error);
            })



    },
    render: function () {
        return (
            <YoutubeInput
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                value={this.value} />
        );
    }
});


module.exports = VideoInput;
