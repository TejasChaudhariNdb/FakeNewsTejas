import styled from "styled-components";
import { useState } from "react";
function News() {
  const [text, setText] = useState("");
  const [toggleButton, setToggleButton] = useState(true); // toggle submit button

  const [displayOutput, setDisplayOutput] = useState(""); //show msg news is legitimate or not
  const [output, setOutput] = useState(false); // tells weather news is fake or not also used to decide background color of msg

  const handleText = (e) => {
    setText(e.target.value);
    setToggleButton(true);
    setDisplayOutput("");
  };
  const handleClick = () => {
    if (text) {
      setToggleButton(false); //hide button
      //fetch and update output status
      setOutput(!output);
      console.log(output);
      if (output) setDisplayOutput("The entered news is legitimate");
      else setDisplayOutput("The entered news seems fake");
    }
  };

  console.log("displayMsg", displayOutput);

  return (
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
        <Button onClick={handleClick} show={toggleButton}>
          Find Out
        </Button>
        <ResultContainer show={displayOutput}>
          <ResultHeading color={output}>{displayOutput}</ResultHeading>
          <ResultIcons>
            <h3>Share about this with your friends</h3>
            <p>Spread awareness about spreading fake news</p>
          </ResultIcons>
        </ResultContainer>
      </Col2>
    </NewsContainer>
  );
}

export default News;

const NewsContainer = styled.div`
  margin-top: 70px;
  
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 912px) {
    /* flex-direction:column; */
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 20px 20px;
  }
  /* border: 1px solid red; */
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  line-height: 79px;
  margin: 0px;
  @media screen and (max-width: 912px) {
    text-align: center;
    padding: 0px 15px;
  }
  @media screen and (max-width: 850px) {
    font-size: 50px;
    line-height: 60px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    padding: 0px 15px;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 20px;
  }
`;
const Paragraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #414141;
  margin-top: 0px;
  @media screen and (max-width: 912px) {
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
  border: 1.5px solid black;
  border-radius: 4%;
  padding: 15px;
  @media screen and (max-width: 952px) {
    /* width: 80%; */
    /* margin: auto; */
  }
  @media screen and (max-width: 500px) {
    /* width: 80%; */
    /* margin: auto; */
    height: 137px;
  }
`;
const Button = styled.button`
  background: #072d74;
  border-radius: 35px;
  width: 108px;
  margin-top: 20px;
  padding: 5px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  display: ${(props) => (props.show ? "block" : "none")};
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ResultContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
`;
const ResultIcons = styled.div`
  margin: 20px 0;
  background-color: #f2f2f2;
  text-align: center;
  padding: 10px 0 70px 0; ;
`;
const ResultHeading = styled.p`
  margin-top: 20px;
  background-color: ;
  /* font-size: 19px;
  padding: 5px 0; */
  margin-top: 20px;
  padding: 5px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border: 1px solid white;
  border-radius: 20px;
  text-align: center;
  /* display: ${({ show }) => (show ? "block" : "none")}; */
  background-color: ${({ color }) => (color ? "#EB5757" : "#08C859")};
`;
