import styled from "styled-components";


export const WelcomeRayout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background :linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../images/dvision_main_page.png');;
    background-position: center;
    background-size: cover;
    filter : brightness(1.3);
`;

export const WelcomeLogoimg = styled.img`
    width: 170px;
    height: 35px;
`;



export const WelcomeCover = styled.div`
    margin-left: 20px;
`;

export const WelcomeLogo = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 100px;
`;
export const WelcomeContent = styled.div`
    margin-top: 10%;
    width: 100%;
    height: 20%;
`;

export const WelcomeP = styled.p`
    color: white;
    font-size: 42px ;
    font-weight: 700;
    :nth-child(2){
        margin-bottom: 20px;
    }

`;
export const WelcomeSub = styled.span`
    margin-top: 100px;
    color: rgba(255,255,255,0.4);
    font-size: 25px ;
    font-weight: 400;
`;


export const WelcomeBtnWrapper = styled.div`
    height: 10%;
    width: 100%;
`;

export const WelcomeBtn = styled.button`
    display: inline-block;
    width: 200px;
    height: 50;
    font-size: 19px;
    font-weight: 700;
    background-color: white;
    border-radius: 35px;
    margin-right : 5px;
    color: black;
    opacity: 0.6;
`;