import Immutable from 'immutable';
import Constants from '../constants';

// Artist Initial State
const artistInitialState = {
    artists: Immutable.fromJS({
        search: '',
        results: []
    })
};

function artistReducer(state = artistInitialState.artists, action) {
    switch (action.type) {

        case Constants.UPDATE_SEARCH:
        state = state.set(action.property, action.value);
        return state;

        case Constants.LOAD_RESULTS:
        state = state.updateIn(['results'], (data) => data = Immutable.fromJS(action.results));
        return state;

        default:
            return state;
    }
}


export { artistReducer, artistInitialState };