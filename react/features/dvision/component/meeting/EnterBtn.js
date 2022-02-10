import React from 'react';
import styled from 'styled-components';




const EnterBtnDiv = styled.div`
    margin-left: 5px;
    width: 24px;
    height: 24px;
`

const EnterBtnImg = styled.img`
    width: 100%;
    height: 100%;
`



function BtnImg(){
                return(
                <EnterBtnDiv>
                    <EnterBtnImg src={'images/new-room-icon.png'} />
                </EnterBtnDiv>
                )
            }


export default BtnImg;