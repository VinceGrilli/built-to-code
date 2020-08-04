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
                "color-default": "#FBF8EE",
                "color-1": "#777369",
                "color-2": "#938895",
                border: "#938895",
                primary: "#75755A",
                medium: "#222",
            },
        },
        colors: {
            bg: "#FBF8EE",
            bgalt: "#FBF8EE",
            "color-default": "#333",
            "color-1": "#374B6B",
            "color-2": "#374B6B",
            "color-3": "#6F7D99",
            primary: "#7E739A",
            secondary: "#222547",
            link: "#0a71c5",
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
