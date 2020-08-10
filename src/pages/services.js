import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import { RichText } from "prismic-reactjs"
import colors from "styles/colors"
import Image from "gatsby-image"
import Contact from "components/Contact"

const ServicePageTitle = styled("h1")`
  margin-bottom: 2em;
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
`

const Subtitle = styled.span`
  text-align: center;
  color: #5e81ac;
  font-weight: 300;
  margin-bottom: 5rem;
  font-size: 1.25rem;
`

const ServiceTitle = styled("h2")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const SmolBorder = styled("div")`
  content: "";
  bottom: 0;
  width: 50px;
  height: 5px;
  margin-bottom: 2em;
  background: ${colors.blue500};
  margin-right: -9px;
`

const ServiceCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const ServiceCardContainer = styled("div")`
  display: grid;
  grid-template-columns: 4fr 7fr;
  margin-bottom: 10em;
  text-decoration: none;
  color: currentColor;

  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
  }

  &:hover {
    .ProjectCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .ProjectCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .ProjectCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const ServiceCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  // padding-left: 2em;
  // padding-right: 2em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    // padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    margin-bottom: 3rem;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    // max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      // max-width: 300px;
    }
  }
`

const Services = ({ services, meta, home }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | Services | Building software solutions`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Services | ${meta.title}`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <ServicePageTitle>Service</ServicePageTitle>
      {services.map((service, i) => (
        <ServiceCardContainer>
          <ServiceCardImageContainer>
            <Image
              fixed={service.node.service_imageSharp.childImageSharp.fixed}
            />
          </ServiceCardImageContainer>
          <div>
            <ServiceTitle>{service.node.service_name[0].text}</ServiceTitle>
            <SmolBorder />
            <ServiceCardBlurb>
              {RichText.render(service.node.service_description)}
            </ServiceCardBlurb>
          </div>
        </ServiceCardContainer>
      ))}
      <Title>{RichText.asText(home.contact)}</Title>
      <Subtitle>{RichText.asText(home.contact_sub)}</Subtitle>
      <Contact />
    </Layout>
  </>
)

export default ({ data }) => {
  const services = data.prismic.allServices.edges
  const home = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const meta = data.site.siteMetadata
  if (!services) return null

  return <Services services={services} meta={meta} home={home.node} />
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            contact
            contact_sub
          }
        }
      }
      allServices {
        edges {
          node {
            service_description
            service_name
            service_image
            service_imageSharp {
              childImageSharp {
                fixed(height: 150, width: 150) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
