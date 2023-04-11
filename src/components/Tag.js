import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"

import "../styles/tag.scss"

const Tag = (props) => {
    return (
      <div className="Tag">
        <i class="material-icons">{props.icon}</i>
        <p>{props.text}</p>
      </div>
    )
}

Tag.defaultProps = {
    icon: 'bookmark_border',
    text: 'THIS IS A TAG!'
}

export default Tag