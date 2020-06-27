import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useMediaQuery } from "react-responsive"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 1em;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 30;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
    padding-top: 1.75em;
    padding-bottom: 1em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
    padding-top: 1.75em;
    padding-bottom: 1em;
  }
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 5em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const MenuIconContainer = styled.div`
  padding: 0.1rem 0.5rem;
  border: 1px solid #81a1c1;
  border-radius: 0.25rem;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 4.5rem;
  right: 0;
  background-color: #fff;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
`

const MobileView = styled.div`
  display: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
  }
`

const DesktopView = styled.div`
  display: block;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

const Header = () => {
  const [isMenuOpen, setOpenMenu] = React.useState(false)
  const isTabletOrMobile = useMediaQuery({
    query: `(max-device-width: ${dimensions.maxwidthTablet}px)`,
  })

  const openMenu = () => {
    setOpenMenu(!isMenuOpen)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <MobileView>
          <MenuIconContainer onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} color={"#81A1C1"} />
          </MenuIconContainer>
          {isMenuOpen ? (
            <MenuContainer>
              <HeaderLinks>
                <Link activeClassName="Link--is-active" to="/work">
                  Home
                </Link>
                <Link activeClassName="Link--is-active" to="/work">
                  About
                </Link>
                <Link activeClassName="Link--is-active" to="/work">
                  Work
                </Link>
                <Link activeClassName="Link--is-active" to="/blog">
                  Blog
                </Link>
                <Link activeClassName="Link--is-active" to="/work">
                  Contact
                </Link>
              </HeaderLinks>
            </MenuContainer>
          ) : null}
        </MobileView>
        <DesktopView>
          <HeaderLinks>
            <Link activeClassName="Link--is-active" to="/work">
              Home
            </Link>
            <Link activeClassName="Link--is-active" to="/work">
              About
            </Link>
            <Link activeClassName="Link--is-active" to="/work">
              Work
            </Link>
            <Link activeClassName="Link--is-active" to="/blog">
              Blog
            </Link>
            <Link activeClassName="Link--is-active" to="/work">
              Contact
            </Link>
          </HeaderLinks>
        </DesktopView>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
