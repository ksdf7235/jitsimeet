import styled from "styled-components";
import React from "react";




const CardRayoutS = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items:center; 
`
const CommonCardS = styled.div`
    background-color: white;
    width: 1000px;
    height: 600px;
    text-align: center;
    margin: 0 auto;
 
`


function CardRayout({ children }){

    return (
    <CardRayoutS>
        <CommonCardS>
            { children }
        </CommonCardS>
    </CardRayoutS>   
    ) 
}


export default CardRayout;