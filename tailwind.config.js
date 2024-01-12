/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {
            fontSize: {
                "extrabig": "10em"
            },
            transitionProperty: {
                width: "width",
            },
            colors: {
                "startingblue": "#1BBFFF",
                "endingpurple": "#B21BFF",
            },
        },
    },
    plugins: [],
}
