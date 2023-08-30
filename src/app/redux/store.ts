import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";
const composedEnhancers = composeWithDevTools();

export const store = createStore(rootReducer,composedEnhancers);
