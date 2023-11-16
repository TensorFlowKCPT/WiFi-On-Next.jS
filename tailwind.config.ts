/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",
  "./components/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandprimary: "var(--brandprimary)",
        building: "var(--building)",
        "default-white": "var(--default-white)",
        landcover: "var(--landcover)",
        neutraldgrey: "var(--neutraldgrey)",
        neutralsilver: "var(--neutralsilver)",
        neutralwhite: "var(--neutralwhite)",
        roadnetwork: "var(--roadnetwork)",
        "roadnetwork-casing": "var(--roadnetwork-casing)",
        roadpath: "var(--roadpath)",
        stadium: "var(--stadium)",
        "text-gray-900": "var(--text-gray-900)",
        tunnel: "var(--tunnel)",
        "tunnel-casing": "var(--tunnel-casing)",
        tunnelpath: "var(--tunnelpath)",
        "variable-collection-blue-secondary": "var(--variable-collection-blue-secondary)",
        "variable-collection-dark-blue": "var(--variable-collection-dark-blue)",
        "variable-collection-dark-green": "var(--variable-collection-dark-green)",
        "variable-collection-light-blue": "var(--variable-collection-light-blue)",
      },
      fontFamily: {
        "body-regular-body-2": "var(--body-regular-body-2-font-family)",
        "button-link-medium": "var(--button-link-medium-font-family)",
        "heading-headline-2": "var(--heading-headline-2-font-family)",
        road: "var(--road-font-family)",
      },
    },
  },
  plugins: [],
};
