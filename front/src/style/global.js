import styled from 'styled-components'
import colors from './colors'

export const Background = styled.div`

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  overflow-y: overflow;
  overflow-x: hidden;

  background: repeating-linear-gradient(
  45deg,
  ${colors.background[0]},
  ${colors.background[0]} 5px,
  ${colors.background[1]} 5px,
  ${colors.background[1]} 10px
  );

`

export const Nav = styled.div`

    width: 100%;
    height: 45px;

    /* border-bottom: 5px solid ${colors.shaddow}; */

`
export const NavTitle = styled.text`

    position: absolute;
    left: 30px;
    top: 5px;
    color: black;
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 2px white;

`