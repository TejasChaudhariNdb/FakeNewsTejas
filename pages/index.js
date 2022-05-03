import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import News from "../components/News";
import GlobalStyle from "../globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <News />
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;
