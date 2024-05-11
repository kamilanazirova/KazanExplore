import { css } from "@emotion/react";

export const globalStyles = css`
    :root {
        --text-contrast: #e60909;
        --dark-link: #5eff00;
    }

    a {
        text-decoration: none;
        color: inherit;
        line-height: 1em;
    }

    p {
        margin: 20px;
        line-height: 1.5em;
    }

    ul {
        display: block;
        margin: 0;
        list-style: none;
    }

    body {
        margin: 0 0 40px 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: #011208;
    }

    h1 {
        font-size: 38px;
        font-weight: 665;
        line-height: 1em;
        margin: 30px 10px;
        color: #FFFFFF;
    }

    h2 {
        margin: 20px;
        line-height: 1.5em;
    }

    h3 {
        margin: 10px 20px;
        line-height: 1.5em;
    }

    .main {
        margin: 0 auto;
        max-width: 1200px;
        padding: 0;
    }

`;
