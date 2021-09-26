import styled ,{ createGlobalStyle } from "styled-components";

// reset Css ---------------------
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "微軟正黑體"
  }

  body, html {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  input {
    font-size: 1.2rem;
    padding: .4rem .4rem;
  }
  input[type="text"] {
    width: 25rem;
  }

  hr {
    height: 1px;
    border: none;
    background-color: #ccc;
    margin: .5rem 0;
  }
`

const Button = styled.button`
  padding: .4rem;
  color: black;
  font-size: 1.2em;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  border: 1px solid #888;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.5);
  }
  & + & {
    margin-left: .4rem;
  }
`

const Wrap = styled.div`
  width: clamp(20ch, 80%, 75ch);
  margin: 2rem auto;
`

export default GlobalStyle
export { Button, Wrap }

