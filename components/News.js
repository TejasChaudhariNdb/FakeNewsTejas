import styled from "styled-components";
import { useState } from "react";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import { ContainerWrapper } from "../globalStyle";
import { predictNews } from "../API/api";
const News = () => {
  const [text, setText] = useState("");
  const [button, setButton] = useState("Find Out"); // toggle submit button
  const [output, setOutput] = useState(null); // tells weather news is fake or not also used to decide background color of msg

  const handleClick = async () => {
    if (button === "Find Out" && text) {
      const result = await predictNews(text);
      setOutput(result);
      setButton("Reset");
    } else {
      setText("");
      setButton("Find Out");
      setOutput(null);
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
    setButton("Find Out");
  };

  let displayOutput =
    output !== null && output
      ? "The entered news is legitimate"
      : "The entered news seems fake";

  return (
    <ContainerWrapper>
      <NewsContainer>
        <Col1>
          <Heading>Find out if your news is fake</Heading>
          <Paragraph>Enter your news here and let us find out</Paragraph>
        </Col1>
        <Col2>
          <Textarea
            placeholder=" Enter your news here....."
            value={text}
            onChange={handleText}
          ></Textarea>
          <Buttons>
            <Button onClick={handleClick}>{button}</Button>
          </Buttons>

          {output !== null && (
            <>
              <ResultHeading color={output}>{displayOutput}</ResultHeading>
              <ResultIcons>
                <h3>Share about this with your friends</h3>
                <p>Spread awareness about spreading fake news</p>
                <Icon src={whatsapp.src} />
                <Icon src={instagram.src} />
                <Icon src={twitter.src} />
                <Icon src={facebook.src} />
              </ResultIcons>
            </>
          )}
        </Col2>
      </NewsContainer>
    </ContainerWrapper>
  );
};

export default News;
const Icon = styled.img`
  margin: 10px 10px 0 10px;
`;

const NewsContainer = styled.div`
  margin-top: 70px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  line-height: 79px;
  margin: 0px;
  @media screen and (max-width: 992px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 20px;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #414141;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Textarea = styled.textarea`
  height: 224.91px;
  border: 1px solid rgba(0, 0, 0, 0.46);
  border-radius: 10px;
  padding: 15px;
  @media screen and (max-width: 500px) {
    height: 137px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  text-align: center;
  color: #ffffff;
  background: #072d74;
  align-items: center;
  border-radius: 35px;
  border: none;
  margin-top: 20px;
  padding: 5px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  width: 140px;
  height: 44px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
// const ResultContainer = styled.div`
//   display: ${({ show }) => (show ? "block" : "none")};
// `;
const ResultIcons = styled.div`
  background-color: #f2f2f2;
  text-align: center;
  padding: 10px;
  margin-top: 15px;
`;
const ResultHeading = styled.p`
  margin-top: 20px;
  padding: 5px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border: 1px solid white;
  border-radius: 20px;
  text-align: center;
  color: white;
  background-color: ${({ color }) => (color ? '#08C859' : '#EB5757')};
`;
