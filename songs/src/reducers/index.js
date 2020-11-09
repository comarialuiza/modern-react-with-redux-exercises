import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Glass Houses',
            duration: '3:59'
        },
        {
            title: 'The Worst In Me',
            duration: '3:52'
        },
        {
            title: 'Limits',
            duration: '3:29'
        },
        {
            title: 'Kingdom of Cards',
            duration: '4:19'
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({ 
    songs: songsReducer,
    selectedSong: selectedSongReducer
});