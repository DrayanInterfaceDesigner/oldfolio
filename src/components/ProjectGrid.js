import React from "react"
import GridItem from "../components/GridItem"
import Nav from "./Nav"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import "../styles/project_grid.scss"

const ProjectGrid = ({ grid }) => {
  const {title, posts} = grid
  console.log(title, posts)
  return (
    <div className="ProjectGrid">
      <p className="title">{grid.title}</p>
      <div className="grid">
        {posts.map((post, index) => (
          <GridItem key={index} data={post} />
        ))}
      </div>
    </div>
  )
}


export default ProjectGrid