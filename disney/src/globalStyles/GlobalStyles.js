import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-size:62.5%;
        overflow:hidden;

        --color-header-background:#0e0b14;

        --title-size :1.6rem;
    }
    body{
        font-family: Avenir-World-for-Disney-Regular,sans-serif

    }

`