import axios from 'axios';
import Constants from '../constants/';
import { addNotification } from '../actions/notificationActions';
import { browserHistory, Link } from 'react-router';
import { artistReducer } from '../reducers/artistReducer';

const base = 'https://itunes.apple.com/search/';

class ArtistActions {
    static updateSearch(property, value) {
        return {
            type: Constants.UPDATE_SEARCH,
            property,
            value
        };
    }

    static loadArtistResults(results) {
        return {
            type: Constants.LOAD_RESULTS,
            results
        }
    }

    static loading(boolean) {
        return {
            type: Constants.LOADING,
            boolean
        }
    }

    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //

    static searchArtistAsync(searchText) {
        return (dispatch) => {
            axios.get(`${base}?term=` + searchText + "&media=music")
                .then((response) => {
                    dispatch(ArtistActions.loading(true));
                    dispatch(ArtistActions.loadArtistResults(response.data.results))
                    dispatch(ArtistActions.updateSearch('search',''))
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(addNotification({ title: 'Error', message: 'Error loading data from API: ' + error, level: 'error' }));
                    dispatch(ArtistActions.loading(true));
                })
        }
    }
}

export default ArtistActions;