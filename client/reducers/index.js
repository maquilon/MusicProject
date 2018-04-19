import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notificationReducer } from './notificationReducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    notificationSystem: notificationReducer,
});

export default rootReducer;