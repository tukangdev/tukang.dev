import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import { RichText } from "prismic-reactjs"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import Contact from "components/Contact"

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

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const RenderBody = ({ contact, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | Contact | Building software solutions`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
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
    <Section>
      <div
        style={{
          margin: "5rem 0",
        }}
      >
        <Title>{RichText.asText(contact.title)}</Title>
        <Subtitle>{RichText.asText(contact.subtitle)}</Subtitle>
      </div>
      <Contact />
    </Section>
  </>
)

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allContacts.edges.slice(0, 1).pop()
  const meta = data.site.siteMetadata

  if (!doc) return null

  return (
    <Layout>
      <RenderBody contact={doc.node} meta={meta} />
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allContacts {
        edges {
          node {
            title
            subtitle
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
