import React from "react"
import colors from "../styles/colors"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"

const TechnologiesContainer = styled("div")`
  padding-top: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: 3em 1fr;
    grid-gap: 2em;
  }
`

const TechnologyIcon = styled("i")`
  font-size: 100px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 50px;
  }
`

const TechnologyImage = styled("img")`
  width: 100px;
  height: 100px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 50px;
    height: 50px;
  }
`

const TechnologyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TechnologyCategory = styled("span")`
  font-size: 11px;
  color: grey;
`

const Technologies = ({ technologies }) => (
  <TechnologiesContainer>
    {technologies.map((technology, i) => {
      return (
        <TechnologyContainer key={i}>
          {technology.node.icon_class && (
            <TechnologyIcon className={technology.node.icon_class} />
          )}
          {technology.node.icon_image && (
            <TechnologyImage src={technology.node.icon_image.url} />
          )}
          {RichText.render(technology.node.name)}
          <TechnologyCategory>{technology.node.category}</TechnologyCategory>
        </TechnologyContainer>
      )
    })}
  </TechnologiesContainer>
)

export default Technologies
