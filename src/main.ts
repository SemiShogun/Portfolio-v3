/**
 * Types imports
 */
import { ClientApiConstructor } from "./types";

/**
 * Prismjs CSS theme
 * Used for adding syntax highlighting to all Markdown code blocks.
 */
import 'prismjs/themes/prism.css';

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
