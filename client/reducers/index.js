import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notificationReducer } from './notificationReducer';
import { artistReducer } from './artistReducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    notificationSystem: notificationReducer,
    artist: artistReducer
});

export default rootReducer;