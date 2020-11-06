import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ThreePicRow = props => {
  let data = props.data

  return (
    <Container>
      {/*  TODO Get images to wrap when screen is smaller, now they just disappear */}
      <h3>{props.title}</h3>
      <h5>{props.description}</h5>
      <Pics>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className={`pic-wrapper`}>
              <Img className="image" fluid={item.node.childImageSharp.fluid} />
            </div>
          ))}
      </Pics>
    </Container>
  )
}
const Container = styled.div`
  margin: 30px auto;
  max-width: 1360px;
  //padding: 0 20px;
`

const Pics = styled.div`
  display: flex;
  flex-wrap: wrap;

  .pic-wrapper {
    width: 200px;
    flex-grow: 1;
    max-height: 400px;
    margin: 10px 10px;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default ThreePicRow
