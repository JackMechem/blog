import React from 'react'
import styled from 'styled-components';
import colors from '../style/colors';

const CardContainer = styled.div`

    background-color: ${colors.foreground};
    padding: 30px;
    margin: 10px;
    width: fit-content;
    height: fit-content;

    /* border: solid black 5px; */
    border-radius: 50px;

`

const Card = (props) => {
    return(<CardContainer>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. A diam maecenas sed enim. Eget nunc scelerisque viverra mauris in aliquam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Arcu felis bibendum ut tristique et egestas quis ipsum. Semper viverra nam libero justo laoreet sit amet. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. At imperdiet dui accumsan sit amet nulla. Iaculis at erat pellentesque adipiscing. Est ultricies integer quis auctor. A condimentum vitae sapien pellentesque habitant morbi. Proin fermentum leo vel orci porta non pulvinar neque. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Praesent elementum facilisis leo vel fringilla est. Suscipit tellus mauris a diam maecenas sed enim. Facilisis volutpat est velit egestas dui.
    </CardContainer>)
}

export default Card;