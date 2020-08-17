import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import lakeReducer from '../components/2_units/Lake/rdx/lakeReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
};

const reducersMap = {
	lakeReducer,
};

const rootReducer = combineReducers(reducersMap);
export default persistReducer(persistConfig, rootReducer);
