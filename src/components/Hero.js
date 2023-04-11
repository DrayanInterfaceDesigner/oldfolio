import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Tag from "./Tag"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import image from "../images/me.png"

// const getData = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
//         nodes {
//           frontmatter {
//             title
//             date
//           }
//           headings {
//             depth
//             value
//           }
//           rawMarkdownBody
//         }
//       }
//     }
//   `)

//   return data.allMarkdownRemark.nodes
// }



import "../styles/hero.scss"

const Hero = (props) => {
    
    return (
        <div className="Hero">
            <div className="image__wrapper">
                <img
                    className="image"
                    src={image}
                    alt={props.alt}
                    layout="fixed"
                ></img>
            </div>
            <div className="content__wrapper">
            <div className="content">
                <p className="i-am">{props.iam}</p>
                <h1 className="name">{props.name}</h1>
                <Tag icon="location_pin" text={props.city}></Tag>
            </div>
            </div>

        </div>
    )
}

export default Hero