import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--aitripio-brand": "#8759F2",
    "--my-red": "#FF3E80",
    "--my-yellow": "#FDC82B",
    "--my-green": "#0f9d58",

};


export const myTheme = buildLegacyTheme ({
/* Base theme colors */
"--black": props["--my-black"],
"--white": props["--my-white"],

"--gray": "#666", 
"--gray-base": "#666",

"--component-bg": props["--my-black"], 
"--component-text-color": props["--my-white"],

/* Brand */
"--brand-primary": props["--aitripio-brand"],

// Default button
"--default-button-color": "#666",
"--default-button-primary-color": props["--aitripio-brand"], 
"--default-button-success-color": props ["--my-green"],
"--default-button-warning-color": props["--my-yellow"],
"--default-button-danger-color": props["--my-red"],

/* State */
"--state-info-color": props["--aitripio-brand"],
"--state-success-color": props ["--my-green"],
"--state-warning-color": props ["--my-yellow"], 
"--state-danger-color": props["--my-red"],

/* Navbar */
"--main-navigation-color": props["--my-black"],
"--main-navigation-color--inverted": props ["--my-white"],


"--focus-color": props ["--aitripio-brand"],
})