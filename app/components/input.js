var React = require('react');
var axios = require('axios');
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
        this.setState({value: event.target.value});
    },
    handleSubmit: function (event) {
        var videoID = this.YouTubeGetID(this.state.value);

        axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoID + '&key=' + APIkey + '&part=snippet,contentDetails')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })


        event.preventDefault();
    },
    render: function () {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Youtube video:
                    <input type="text" className="input" value={this.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Send"/>
            </form>
        );
    }
});


module.exports = VideoInput;
