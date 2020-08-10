import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 150px;
  }
`

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};

    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const FooterSpooch = styled("span")`
  font-size: 2rem;
  max-width: 33px;
  margin-top: 0.25em;
`

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <Logo />
    </Link>
    <FooterAuthor href="https://aminroslan.com">
      © 2020 — Designed & developed by Amin Roslan
      <FooterSpooch
        role="img"
        aria-label="poo"
        aria-labelledby="poo"
        className="FooterSpooch"
      >
        🚀
      </FooterSpooch>
    </FooterAuthor>
    <FooterAuthor href="https://thenounproject.com">
      Icons are from thenounproject
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
