import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import recipesReducer from '../reducers/recipes';
import searchReducer from '../reducers/search';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      recipes: recipesReducer,
      search: searchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
