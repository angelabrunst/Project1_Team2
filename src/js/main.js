import { loadHeaderFooter } from "./utils.js";
import Admin from "./Admin.js";

loadHeaderFooter();

const myAdmin = new Admin("main");
myAdmin.showLogin();
