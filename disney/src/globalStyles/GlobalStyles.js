import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-size:62.5%;
        overflow:hidden;

        --color-header-background:#0e0b14;
        --color-main:rgb(26, 29, 41);

        --title-size :2rem;
        --paragraph-size:1.4rem;
    }
    body{
        font-family: Avenir-World-for-Disney-Regular,sans-serif

    }

`