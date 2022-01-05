import { combineReducers } from "redux";
import user from "./user";
import app from "./app";
import files from "./files";
import posts from "./posts";
import settings from "./settings";
import monitor from "./monitor";
import tagsViews from "./tagsViews";


export default combineReducers({
  user,
  app,
  files,
  monitor,
  posts,
  settings,
  tagsViews
});
