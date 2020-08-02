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
                bg: "#111",
                bgalt: "#000",
                "color-default": "#eee",
                "color-1": "#87c232",
                "color-2": "#8a9986",
                border: "#718096",
                primary: "#687864",
                medium: "#222",
            },
        },
        colors: {
            bg: "#E5E5E5",
            bgalt: "#E5E5E5",
            "color-default": "#333",
            "color-1": "#777369",
            "color-2": "#0A2647",
            "color-3": "#687864",
            primary: "#0A2647",
            secondary: "#BFCDE0",
            link: "#0a71c5",
            medium: "#cfd8dc",
            white: "#E5E5E5",
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
