import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ThreePicRow = props => {
  let data = props.data

  return (
    <>
      {/*  TODO Get images to wrap when screen is smaller, now they just disappear */}
      <h3>{props.title}</h3>
      <h5>{props.description}</h5>
      <Grid>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className={`Pic-${index}`}>
              <Img className="image" fluid={item.node.childImageSharp.fluid} />
            </div>
          ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  max-width: 1400px;
  margin: 30px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-template-rows: repeat(auto-fill, 350px);
  gap: 10px 40px;
  grid-template-areas: "Pic-1 Pic-2 Pic-3";
  justify-content: center;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default ThreePicRow
