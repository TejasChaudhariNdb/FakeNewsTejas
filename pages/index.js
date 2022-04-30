import styled from "styled-components";
import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import News from "../components/News";
import GlobalStyle from "../globalStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <News />
      <LatestNews />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 20px 70px;
  @media screen and (max-width: 500px) {
    margin: 20px 20px;
  }
`;
