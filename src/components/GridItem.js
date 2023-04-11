import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import "../styles/grid_item.scss"




const GridItem = ({data}) => {
    console.log('thumb:', data)
    const {post} = data.frontmatter
    const to = `/projects/${data.frontmatter.slug}` 
    return (
        
        <div>
            <p className="project__title">{data.frontmatter.title}</p>
            <div className="GridItem">
            <Link className="link" to={to}>
                <StaticImage
                    className="image" 
                    src="../images/wip.png"
                    alt=".."
                >
                </StaticImage>

                
            </Link>
        </div>
        </div>
    )
    
}

export default GridItem