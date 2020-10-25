import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageGrid = props => {
  let data = props.data
  console.log("data in ImageGrid", data)
  return (
    <Grid>
      {/*  TODO PHil: Query GRAPHQL Data from Sanity to Gatsby and use in ImageGrid comp*/}
      {data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className={`Pic-${index}`}>
            <Img className="image" fluid={item[1].childImageSharp.fluid} />
          </div>
        ))}
    </Grid>
  )
}

const Grid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 600px));
  grid-template-rows: repeat(2, 1fr);
  gap: 10px 10px;
  grid-template-areas:
    "Pic-1 Pic-2"
    "Pic-3 Pic-4";
  justify-content: center;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default ImageGrid
