import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Post from "../components/Post"
import ProjectGrid from "../components/ProjectGrid"
import { useStaticQuery, graphql } from 'gatsby';
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
  padding: 5rem 2rem;
  max-width: 90%;
  width: 90%;
`
const ps = {
  grids: [
    {
      title: "Terminados",
      posts: [
        {
          image: "../images/me.png",
          link: "/"
        },
        {
          image: "../images/me.png",
          link: "/"
        },
        {
          image: "../images/me.png",
          link: "/"
        },
        {
          image: "../images/me.png",
          link: "/"
        },
        {
          image: "../images/me.png",
          link: "/"
        },
      ]
    },
    {
      title: "Em andamento",
      posts: [
        {
          image: "../images/me.png",
          link: "/"
        },
        // {
        //   image: "../images/me.png",
        //   link: "/"
        // },
        // {
        //   image: "../images/me.png",
        //   link: "/"
        // },
      ]
    },
  ]
}

const data_to_grids = (data)=> {
  const nodes = data.allMarkdownRemark.nodes 
  const categories = [...new Set(nodes.map(node => node.frontmatter.category))]
  const grids = []
  
  for(let i = 0; i < categories.length; i ++) {
    grids.push({
      title: categories[i],
      posts: nodes.filter(node => node.frontmatter.category === categories[i])
    })
  }
  return grids
}



const Projects = ({data}) => (
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
        {data_to_grids(data).map((grid, index) => (
        <ProjectGrid key={index} grid={grid}></ProjectGrid>
        ))}
        </Content>
      </ContentWrapper>
    </>
)


export const query = graphql`
query Projects {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/posts/"}, frontmatter: {}}
  ) {
    nodes {
      frontmatter {
        title
        slug
        thumb
        category
      }
    }
  }
}
`
  
export default Projects