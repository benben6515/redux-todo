import styled, {keyframes} from 'styled-components'

const shiftRight = keyframes`
  0% {
    transform: translateX(-400px);
    opacity: 0;
  }
  20% {
    transform: translateX(-350px);
    opacity: 1;
  }
  80% {
    transform: translateX(50px);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
`

const Title = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #999, #fff);
  padding: 10vh;
  margin-bottom: 1rem;
  position: relative;
  transform: perspective(500px) translateZ(-100px) rotateX(-15deg);
  transform-origin: top;
  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: #000;
    mix-blend-mode: overlay;
    text-shadow: 0px 0px 2px rgba(0,0,0,0.2), 0px 0px 6px rgba(0,0,0,0.2);
    transform: perspective(500px) translateZ(150px) rotateX(-30deg);
  }

  span {
    position: absolute;
    left: 68%;
    top: 50%;
    height: 2px;
    width: 1rem;
    background: #fff;
    animation: ${shiftRight} 1.6s linear infinite;
  }

  &:hover span {
    background: #fff;
    box-shadow: 0px 0px 3px 0px #fff, 0px 0px 5px 0px #fff;
    animation: ${shiftRight} 1s linear infinite;
  }

  span:nth-child(2) {
    left: 74%;
    top: 43%;
    animation-delay: .25s;
  }
  span:nth-child(3) {
    left: 70%;
    top: 43%;
    animation-delay: .75s;
  }
  span:nth-child(4) {
    left: 78%;
    top: 45%;
    animation-delay: .15s;
  }
  span:nth-child(5) {
    left: 76%;
    top: 46%;
    animation-delay: .45s;
  }
  span:nth-child(6) {
    left: 72%;
    top: 40%;
    animation-delay: .65s;
  }
`

const Nav = () => {
  return (
    <Title>
      <h1>
        Todo List
      </h1>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </Title>
  )
}

export default Nav