import { combineReducers } from "redux-starter-kit";
import * as slices from "./slices";

const rootReducers = combineReducers({
  users: slices.usersSlice.reducer,
  youtube: slices.youtubeSlice.reducer
});

export default rootReducers;
