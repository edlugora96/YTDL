import { createSlice } from "redux-starter-kit";

export const usersSlice = createSlice({
  initialState: false,
  name: "users",
  reducers: {
    setUsers: (state, action) => !state
  }
});

export const youtubeSlice = createSlice({
  initialState: null,
  name: "youtube",
  reducers: {
    setVideoInfo: (state, action) => action.payload
  }
});
