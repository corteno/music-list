var React = require('react');

function YoutubeInput (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Youtube video:
                <input
                    type="text"
                    className="input"
                    value={props.value}
                    onChange={props.handleChange} />
            </label>
            <input type="submit" value="Send" />
        </form>
    );
}


module.exports = YoutubeInput;