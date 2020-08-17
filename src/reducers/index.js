import counterReducer from './counter';
import loggedReducer from './isLogged';
import themeReducer from './theme';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
	theme: themeReducer,
});

export default allReducers;
