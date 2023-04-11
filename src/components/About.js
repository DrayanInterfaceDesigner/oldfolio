import React from "react"
import Post from "../components/Post"
import { useStaticQuery, graphql } from 'gatsby';

const About = ()=> {
    const data = useStaticQuery(graphql`
      query {
        file(absolutePath: { regex: "/perm/" }) {
            id
            absolutePath
            childMarkdownRemark {
              html
              frontmatter {
                title
                subtitle
              }
            }
        }
      }
    `)
    return (
      <Post
      data = {data.file.childMarkdownRemark}
      ></Post>
    )
  }

  export default About