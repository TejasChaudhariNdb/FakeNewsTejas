import styled from "styled-components";
import { news } from "../data/data.js";

function LatestNews() {
  console.log(news[0].image);
  return (
    <>
      <Heading>Latest News</Heading>
      <Container>
        <Row1>
          <Img1 data={news[2].image}>
            <Imglayer>
              <Imageheading size={"20px"}> {news[2].title}</Imageheading>
            </Imglayer>
          </Img1>

          <Col2>
            <Img2 data={news[3].image}>
              <Imglayer>
                <Imageheading size={"15px"}> {news[3].title}</Imageheading>
              </Imglayer>
            </Img2>
            <Img2 data={news[4].image}>
              <Imglayer>
                <Imageheading size={"15px"}> {news[4].title}</Imageheading>
              </Imglayer>
            </Img2>
          </Col2>
        </Row1>
        <Row2></Row2>
        <Row3></Row3>
      </Container>
    </>
  );
}

export default LatestNews;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  margin-top: 20px;
`;

const Row1 = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

const Img1 = styled.div`
  height: 300px;
  width: 48%;
  background: url(${(props) => props.data}) no-repeat center center/cover;
  position: relative;
  @media screen and (max-width: 576px) {
    height: 145px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const Img2 = styled.div`
  height: 145px;
  margin-bottom: 10px;
  background: url(${(props) => props.data}) no-repeat center center/cover;
  position: relative;
  @media screen and (max-width: 576px) {
    height: 145px;
    width: 100%;
  }
`;
const Imglayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;
const Imageheading = styled.h1`
  bottom: 5%;
  margin: 0 3px;
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: ${(props) => props.size};
  @media screen and (max-width: 576px) {
    font-size: 12px;
    margin: 0 5px;
  }
`;
const Col2 = styled.div`
  height: 300px;
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const Crow1 = styled.div`
  height: 145px;
  background-color: gray;
  margin-bottom: 10px;
`;
const Crow2 = styled.div`
  height: 145px;
  background-color: gray;
`;

const Row2 = styled.div`
  margin-top: 20px;
  height: 150px;
  background-color: gray;
`;
const Row3 = styled.div`
  margin-top: 20px;
  height: 150px;
  background-color: gray;
`;
