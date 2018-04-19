import axios from 'axios';
import Constants from '../constants/';
import { addNotification } from '../actions/notificationActions';
import { browserHistory, Link } from 'react-router';

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


    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //

    static searchArtistAsync(searchText) {
        return (dispatch) => {
            axios.get(`${base}?term=` + searchText)
                .then((response) => {
                    dispatch(ArtistActions.loadArtistResults(response.data.results))
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(addNotification({ title: 'Error', message: 'Error loading data from API: ' + error, level: 'error' }));
                })
        }
    }


}

export default ArtistActions;