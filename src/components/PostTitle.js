import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Tag from "./Tag"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"


import "../styles/post_title.scss"

const PostTitle = ({ title, subtitle }) => {
    return (
      <div className="PostTitle">
        <p>{title}</p>
        {subtitle.length > 0 && <p className="subtitle">{subtitle}</p>}
      </div>
    );
};

PostTitle.defaultProps = {
    title: 'Title',
    subtitle: ''
}

export default PostTitle