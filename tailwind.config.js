const plugin = require("tailwindcss/plugin")
const _ = require("lodash")

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})

module.exports = {
    purge: [
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./src/**/*.ts",
        "./src/**/*.tsx",
    ],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#17151A",
                bgalt: "#17151A",
                "color-default": "#D5DECF",
                "color-1": "#0F7ED5",
                "color-2": "#BBAC96",
                border: "#4D4447",
                primary: "#4D4447",
                medium: "#222",
            },
        },
        colors: {
            bg: "#D5DECF",
            bgalt: "#D5DECF",
            "color-default": "#333",
            "color-1": "#0b4c8a",
            "color-2": "#4D4447",
            "color-3": "#4D4447",
            primary: "#0b4c8a",
            secondary: "#0F7ED5",
            link: "#0F7ED5",
            medium: "#cfd8dc",
            white: "#eee",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            success: "#87c232",
        },
        extend: {
            fontSize: {
                "7xl": "5rem",
            },
            spacing: {
                "1px": "1px",
                "2px": "2px",
            },
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}
