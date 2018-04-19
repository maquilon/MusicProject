import Immutable from 'immutable';
import Constants from '../constants';

// Artist Initial State
const artistInitialState = {
    search: Immutable.fromJS({
        search: ''
    })
};


function artistReducer(state = artistInitialState.search, action) {
    switch (action.type) {

        case Constants.UPDATE_SEARCH:
        state = state.set(action.property, action.value);
        return state;

        default:
            return state;
    }
}

export { artistReducer, artistInitialState };