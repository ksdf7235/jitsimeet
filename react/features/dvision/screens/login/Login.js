import React from 'react';
import styled from 'styled-components';
import CommonRayout from '../../component/common/CommonRayout';


const Loginh1 = styled.h1`
    font-size: 100px;
    color: white;
`


function Login () {

    return (
        <CommonRayout>
            <Loginh1>로그인 페이지</Loginh1>
        </CommonRayout>
    );
};

export default Login;


