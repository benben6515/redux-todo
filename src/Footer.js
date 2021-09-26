import styled from 'styled-components'

const FooterTxt = styled.footer`
  width: 100%;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
`

const Footer = () => {
  return (
    <FooterTxt>
      2021 &copy; Benben all right reserved.
    </FooterTxt>
  )
}

export default Footer