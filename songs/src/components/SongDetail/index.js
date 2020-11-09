import { connect } from 'react-redux';

function SongDetail({ selectedSong }) {
    if (!selectedSong) {
        return (
            <div>Select a song</div>
        )
    }

    return (
        <div className="ui divided list">
            <h4>{ selectedSong.title }</h4>
            <p>{ selectedSong.duration }</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);