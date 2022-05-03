import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <FBottom>
        <Top>
          <p>Copyright ©2022 NewsBuster . All Rights Reserved.</p>
        </Top>
      </FBottom>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: auto;
  width: 100%;
  font-family: Condensed, Georgia, serif;
  background-color:black;
  padding: 30px 0;
  color: white;
  bottom: 1px;
`;
const FBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;
`;
const Top = styled.p`
  margin: 40px 0 20px 0;
  text-align: center;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  font-size: 30px;
`;
