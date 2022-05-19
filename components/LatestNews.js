import { useState, useEffect } from "react";
import styled from "styled-components";
import format from "date-fns/format";

import { ClipLoader } from "react-spinners";
import { fetchNews } from "../API/api";
import { ContainerWrapper } from "../globalStyle";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    const result = await fetchNews("global news");
    setNews(result?.data?.value);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);
  const newsList = news.slice(6, 15).map((item) => <NewsItem data={item} />);

  return (
    <ContainerWrapper>
      <Heading>Latest News</Heading>
      {loading ? (
        <Spinner>
          <ClipLoader color="red" loading={loading} size={30} />
        </Spinner>
      ) : (
        <NewsContainer>{newsList}</NewsContainer>
      )}
    </ContainerWrapper>
  );
};

const NewsItem = ({ data }) => {
  return (
    <NewsLink href={data.url} target="_blank">
      <NewslistingContainer>
        <NewslistingFigure>
          <Img src={data.image.url} alt={"description"} />
        </NewslistingFigure>
        <Newsdate>
          {format(new Date(data.datePublished.slice(0, 10)), "doMMMyyyy")}
        </Newsdate>
        <Heading1>{data.title}</Heading1>
        <Content>{data.description}</Content>
        <Hline></Hline>
      </NewslistingContainer>
    </NewsLink>
  );
};

export default LatestNews;

const Heading = styled.h2`
  margin: 20px 0;
`;

const NewslistingContainer = styled.div`
  border-radius: 10px;
  position: relative;
  padding: 10px;
  height: 425px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.1);
  }
  @media screen and (max-width: 500px) {
    height: 250px;
    margin: 7px 0;
  }
`;

const NewslistingFigure = styled.figure`
  width: 100%;
  height: 40%;
  @media screen and (max-width: 500px) {
    height: 60%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Heading1 = styled.h2`
  font-size: 1.1rem;
  line-height: 22px;
  font-weight: 700;
  padding: 5px 0 5px 0;
  height: 24%;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    height: 35%;
    font-size: 0.8rem;
  }
`;
const Content = styled.p`
  font-size: 0.9rem;
  margin: 0px;
  font-weight: 400;
  line-height: 20px;
  height: 25%;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Hline = styled.hr`
  border-top: 1px solid black;
  margin: 8px 0;
`;
export const Newsdate = styled.p`
  margin: 4px 0;
`;
const NewsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 33.3% 33.3% 33.4%;
  grid-gap: 18px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 300px) {
    grid-template-columns: 100%;
  }
`;
const NewsLink = styled.a`
  color: black;
  &:hover {
    text-decoration: none;
  }
`;
const Spinner = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
