import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { plain_to_sections } from "../common/parser"
import Nav from "../components/Nav"
import PostTitle from "../components//PostTitle"
import PostImage from "../components//PostImage"
import PostBody from "../components/PostBody"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import Layout from "../components/layout"

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
  width: 90%;

@media screen and (min-width: 50rem) {
  padding: 5rem 2rem;
  .Post {
    padding: 5rem 2rem;
  }
  max-width: 90%;
}
`

const Project = ({data}) => {
    const {html} = data.markdownRemark
    const {title, subtitle, featuredImg} = data.markdownRemark.frontmatter
    const body = html
    return (
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
            <div className="Post">
                <PostTitle
                    title={title}
                    subtitle={subtitle}
                ></PostTitle>
                <PostImage></PostImage>
                <PostBody
                sections={body}
                >
                </PostBody>

            </div>
        </Content>
      </ContentWrapper>
    </>
    )
}

export const query = graphql`
query Project($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}, featured_img: {}}) {
      html
      frontmatter {
        subtitle
        title
        featured_img
      }
    }
  }`

export default Project