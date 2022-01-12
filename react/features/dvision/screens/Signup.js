import CardRayout from '../component/common/CardRayout';
import React from "react";
import styled from 'styled-components';


const Signhead = styled.div`
    width: 100%;
    height: 10%;

    h2{
        font-weight: 700;
        margin-top: 30px;
    }
`


const SignContent = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    height: 60%;

`

const SignForm = styled.form`
    display: inline-block;
    justify-content: center;
    align-items: center;
    width : 40%;
    height: 100%;
`

const SignImgWrpper = styled.div`
    justify-content: left;
    display: inline-block;
    height: 100%;
    width: 40%;
`

const SignImg = styled.img`
    
`

const SignInput = styled.input`
    width : 100%;
    height: 15%;
    margin-bottom: 10px;
    display: flex;
`

const SignBtn = styled.button`
    display: inline-block;
    width: 45%;
    height: 50%;

    :first-child{
        margin-right: 10px;
    }
`


const SignBtnWrapper = styled.div`
    justify-content: space-around;
    display: inline-block;
    width: 100%;
    height: 20%;

    


`


function Signup() {

    return (
       <CardRayout>
           <Signhead>
                <h2>Nxdf-Meet 회원가입</h2>
           </Signhead>
           <SignContent>
           <SignImgWrpper>
                <SignImg src="../images/dvision_signup_illust.png" />
            </SignImgWrpper>
            <SignForm>
                <SignInput></SignInput>
                <SignInput></SignInput>
                <SignInput></SignInput>
                <SignInput></SignInput>  
            </SignForm>
           </SignContent>
           <SignBtnWrapper>
                <SignBtn>취소</SignBtn>    
                <SignBtn>등록</SignBtn>  
            </SignBtnWrapper>
       </CardRayout>
    );
};

export default Signup;
