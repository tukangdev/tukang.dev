import React from "react"
import styled from "@emotion/styled"
import dimensions from "../styles/dimensions"
import { RichText } from "prismic-reactjs"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { useMediaQuery } from "react-responsive"

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TechnologiesContainer = styled("div")`
  padding-top: 1em;
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // grid-gap: 3em;

  // @media (max-width: ${dimensions.maxwidthTablet}px) {
  //   grid-template-columns: repeat(4, 1fr);
  // }

  // @media (max-width: ${dimensions.maxwidthMobile}px) {
  //   grid-template-columns: repeat(2, 1fr);
  //   // grid-template-rows: 3em 1fr;
  //   grid-gap: 2em;
  // }
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

const Technologies = ({ technologies }: { technologies: any }) => {
  const isMobile = useMediaQuery({
    query: `(max-device-width: ${dimensions.maxwidthMobile}px)`,
  })
  return (
    <TechnologiesContainer>
      <Carousel
        //@ts-ignore
        addArrowClickHandler
        autoPlay={"2000"}
        infinite
        slidesPerPage={isMobile ? 2 : 5}
        stopAutoPlayOnHover
        arrowLeft={<FontAwesomeIcon icon={faChevronLeft} size={"2x"} />}
        arrowRight={<FontAwesomeIcon icon={faChevronRight} size={"2x"} />}
        centered
      >
        {technologies.map((technology: any, i: number) => {
          return (
            <TechnologyContainer key={i}>
              {technology.node.icon_class && (
                <TechnologyIcon className={technology.node.icon_class} />
              )}
              {technology.node.icon_image && (
                <TechnologyImage src={technology.node.icon_image.url} />
              )}
              {RichText.render(technology.node.name)}
              <TechnologyCategory>
                {technology.node.category}
              </TechnologyCategory>
            </TechnologyContainer>
          )
        })}
      </Carousel>
    </TechnologiesContainer>
  )
}

export default Technologies
