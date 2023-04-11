import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import About from "../components/About"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-image';
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import "../styles/navbar.scss"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;

  
@media screen and (min-width: 50rem) {
  padding: 5rem 2rem;
  .Post {
    padding: 5rem 2rem;
  }
  max-width: 90%;
}
`

const data = {
  title: "Sobre mim",
  paragraphs: [{}]
}


const IndexPage = ({data}) => (
  <>
    <Helmet>
      <title>Drayan's Portifolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </Helmet>
    <Nav></Nav>
    <ContentWrapper>
      <Content>
        <Hero
          iam = "Desenvolvedor & Designer UI"
          name="Drayan Silva Magalhães"
          city="CURITIBA - PR"
          alt="drayan"
        >
        </Hero>
        <About></About>

      </Content>
    </ContentWrapper>
  </>
)

export const dt = graphql`
  query {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default IndexPage
