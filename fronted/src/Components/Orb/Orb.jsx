import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

const moveOrb = (x, y) => keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${x}px, ${y}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `
const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${({ x, y }) => moveOrb(x, y)} 15s alternate linear infinite;
    `;

function Orb() {

    const { width, height } = useWindowSize();
  const x = width || 0;
  const y = height ? height / 2 : 0;

    console.log(width, height)

    return (
        <OrbStyled x={x} y={y} />
    )
}

export default Orb