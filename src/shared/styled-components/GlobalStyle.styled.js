import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #root {
        position: relative;
        width: 100%;
        min-height: 100%;
        background: ${({path}) => {
            if (path === "/") {
                return `url('../../img/home/background-home-mobile.jpg') fixed no-repeat center center/cover;`
            }
            else {
                path = path.substring(1);
                return `url('../../img/${path}/background-${path}-mobile.jpg') no-repeat center center/cover;`
            }
        }};

        @media screen and (min-width: 501px) {
            background: ${({path}) => {
            if (path === "/") {
                return `url('../../img/home/background-home-tablet.jpg') no-repeat center center/cover;`
            }
            else {
                path = path.substring(1);
                return `url('../../img/${path}/background-${path}-tablet.jpg') no-repeat center center/cover;`
            }
        }};
        }

        @media screen and (min-width: 1024px) {
            background: ${({path}) => {
            if (path === "/") {
                return `url('../../img/home/background-home-desktop.jpg') no-repeat center center/cover;`
            }
            else {
                path = path.substring(1);
                return `url('../../img/${path}/background-${path}-desktop.jpg') no-repeat center center/cover;`
            }
        }};
        }
    }
`;
