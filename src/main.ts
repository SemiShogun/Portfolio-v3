/**
 * Types imports
 */
import { ClientApiConstructor } from "./types";

/**
 * Layout imports
 */
import DefaultLayout from "~/layouts/Default.vue";

/**
 * Client API contructor
 */
const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.component("Layout", DefaultLayout);
  head.title = "My Awesome Gridsome Project";
};

export default client;
