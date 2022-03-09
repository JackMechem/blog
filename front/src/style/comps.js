import styled from 'styled-components'
import colors from './colors'

export const Cards = styled.div`

    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;

`

export const ArticleBody = styled.div`

    background-color: ${colors.foreground};
    padding: 50px;
    margin: 0px 25px 25px 25px;
    border-radius: 50px;
    min-height: 1000px;

`