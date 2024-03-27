// import { applyMiddleware, compose, createStore } from "redux";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";

// const middleware = [thunk];
// const composeEnhancers = compose(applyMiddleware(...middleware));
// const configureStore = () => {
//   return createStore(rootReducer, composeEnhancers);
// };

// const store = configureStore();

// export default store;
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;

