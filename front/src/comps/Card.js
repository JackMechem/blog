import React from 'react'
import styled from 'styled-components';
import colors from '../style/colors';

const CardContainer = styled.div`

    background-color: ${colors.foreground};
   /* padding: 30px;
    height: 350px;
    border-radius: 10px;
    display: flex;
    flex-flow: column; */
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin: 10px 5px;
    position: static;
    width: 255px;
    align-self: flex-start;
    background: ${colors.white};
    box-shadow: 4px 4px ${colors.shaddow};
    border-radius: 10px;
    transition-duration: .25s;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px rgba(0, 0, 0, 0);
    }

`

const CardTitle = styled.div`

    font-size: 30px;
    font-weight: bold;
    
    /* text-shadow: 2px 2px ${colors.shaddow};

    transition-duration: .25s; */

/* 
    &:hover {
        text-shadow: 0px 0px ${colors.shaddow};
    } */

`

const CardDesc = styled.div`

    margin-top: 10px;
    margin-bottom: 10px;

`

const CardImgDiv = styled.div`

    display: flex;
    height: 100%;
`

const CardImg = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const Card = (props) => {
    const title = props.title;
    const photo = props.photo;
    const desc = props.desc;
    const onClick = props.onClick;
    return (<CardContainer onClick={onClick}>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardImgDiv>
            <CardImg src={photo}></CardImg>
        </CardImgDiv>
    </CardContainer>)
}

export default Card;