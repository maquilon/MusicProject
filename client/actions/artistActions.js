import axios from 'axios';
import Constants from '../constants/';
import { addNotification } from '../actions/notificationActions';
import { browserHistory, Link } from 'react-router';

const base = 'https://itunes.apple.com/';

class ArtistActions {

    static updateSearch(property, value) {
        return {
            type: Constants.UPDATE_SEARCH,
            property,
            value
        };
    }


    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //

   

}

export default ArtistActions;