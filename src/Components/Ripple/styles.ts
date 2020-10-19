import styled from "styled-components";
import { shade } from 'polished';

type RippleContainerProps = {
  readonly color: string;
  readonly duration: number;
}

export const RippleContainer = styled.div<RippleContainerProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;

  span {
    position: absolute;
    transform: scale(0);
    border-radius: 100%;
    opacity: .75;
    background-color: ${props => shade(0.2, props.color)};;
    animation-name: ripple;
    animation-duration: ${props => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
