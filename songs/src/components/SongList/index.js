import { connect } from 'react-redux';
import { selectSong } from './../../actions';

function SongList({ songs, selectSong }) {
    return (
        <div className="ui divided list">
            { songs.map(song => (
                <div className="item">
                    <div className="button floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => { selectSong(song) } }
                        >
                            Select
                        </button>
                    </div>
                    <h4>{ song.title }</h4>
                    <p>{ song.duration }</p>
                </div>
            )) }
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {
    selectSong
})(SongList);