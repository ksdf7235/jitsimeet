import React from 'react';
import { useHistory } from 'react-router-dom';
import {WelcomeRayout, WelcomeLogoimg, WelcomeCover, WelcomeLogo, WelcomeContent, WelcomeP, WelcomeSub, WelcomeBtnWrapper, WelcomeBtn} from '../../dvision/component/welcome/WelcomeCompo';






function WelcomePageMain(){

    const history = useHistory();

    const signUp = () => {
        alert("it`s not support")
    }
    const meeting = () => {
        history.push({
            pathname: `/meetingRoom`,
        });
    }
    const plan = () => {
        history.push({
            pathname: `/plan`,
        });
    }

    return (
        <WelcomeRayout>
            <WelcomeCover>
                <WelcomeLogo>
                    <WelcomeLogoimg src="../images/watermark.png" />
                </WelcomeLogo>
                <WelcomeContent>
                    <WelcomeP>최상의 화상 솔루션 DVision으로</WelcomeP>
                    <WelcomeP>최적의 비즈니스 환경을 경험해보세요.</WelcomeP>
                    <WelcomeSub>DVision is the best of Video Business Solution in the Next Normal age.</WelcomeSub>
                </WelcomeContent>
                <WelcomeBtnWrapper>
                        <WelcomeBtn onClick={signUp}>회원가입</WelcomeBtn>
                        <WelcomeBtn onClick={meeting}>방 만들기</WelcomeBtn>
                    <a download={'DVision_사용매뉴얼_다이브(주)'}
                           href={`/static/DVision_Manual.pdf`}>
                        <WelcomeBtn >메뉴얼 다운로드</WelcomeBtn>
                    </a>
                        <WelcomeBtn onClick={plan}>요금제 및 가격정책</WelcomeBtn>
                </WelcomeBtnWrapper>
            </WelcomeCover>
        </WelcomeRayout>
    );
};

export default WelcomePageMain;




