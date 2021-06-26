import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --Background:#f0f2f5;
    --Blue:#5429CC;
    --Green:#33CC95;
    --Light-Green:#d6f4e9;

    --Red:#E52E4D;
    --Light-Red:#f9d5db;
    --Shape-Principal:#FFFFFF;
    --Titulos:#363F5F;
    --Textos:#969CB2;
    --Blue-light:#6933FF;
;

}

*{
margin:0;
padding:0;
box-sizing: border-box;
}

body,input,textarea,button{
    font-family: "Poppins",sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
font-weight: 600;
}

html{
    @media(max-width:1080px){
        font-size: 93.75%;
    }

    @media(max-width:720px){
        font-size: 87.5%;
    }
}
button{
    cursor:pointer;
}

[disabled]{
    opacity:.6;
    cursor:not-allowed;
}

body{
background: var(--Background);
-webkit-font-smoothing:antialiased;
}

.react-modal-overlay{
background: rgba(0,0,0,.5);

position:fixed;
top:0;
right: 0;
left: 0;
bottom: 0;

display:flex;
align-items: center;
justify-content: center;
}
.react-modal-content{
width:100%;
max-width: 476px;
background: var(--Background);
padding: 3rem;
position: relative;
border-radius: 0.24rem;
}

.react-modal-close{
    position:absolute;
    right: 1.5rem;
    top:1.5rem;
    border:0;
    background: transparent;
    transition:filter .1s;
    &:hover{
        filter: brightness(0.8);
    }
}
`;
