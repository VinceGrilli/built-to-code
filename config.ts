const siteMetadata = {
    title: `Built to Code`,
    siteUrl: `http://builttocode.dev`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/desk3.jpg`,
    ogImage: `/images/desk3.jpg`,
    twoColumnWall: true,
    cookiePolicy: false,
    introTag: `WEB DEVELOPMENT | CUSTOM CARPENTRY`,
    description: `Specializing in modern blazing-fast Websites & Apps + Custom Finish Carpentry & Home Renovation`,
    about: `Welcome to Built to Code. We are a unique Cape Cod business combining custom carpentry and web development.
    Creator and owner, Vince Grilli, has worked in the construction industry for 10 years building custom homes in one of the world’s most desirable beach side communities, Cape Cod. When he wasn’t working on the jobsite, he was perusing his lifelong passion for all things tech. Vince has spent years learning front and back end web development and modern, responsive design.
    Vince brings his attention to detail and eye for design to each individual project with the care and attention as if it were his own home, or home page.
    `,
    author: `@VinceGrilli`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/vincegrilli",
        },
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/3017026c-3c6d-48db-ad7c-32dd1bee784c",
        description: `Contact us today with a brief description of your ideas!`,
        mail: "Vince@builttocode.dev",
        phone: "774-212-2849",
        address: "Brewster \nCape Cod MA",
    },
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false,
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
