import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ThreePicRow = props => {
  let data = props.data

  return (
    <Container>
      <Title>
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </Title>

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
  margin: 0 auto 30px auto;
  max-width: 1360px;
`

const Title = styled.div`
  margin-left: 10px;
  h3,
  h5 {
    letter-spacing: 1px;
    font-family: "Abhaya Libre";
  }
  h3 {
    font-size: 30px;
    font-style: italic;
  }
  h5 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    h5 {
      margin-bottom: 5px;
    }
  }
`

const Pics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
    justify-content: center;
  }

  .pic-wrapper {
    width: 200px;
    flex-grow: 1;
    max-height: 400px;
    margin: 10px 10px;
     @media (max-width: 500px) {
      max-width: 300px;
      max-height: 220px;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default ThreePicRow
