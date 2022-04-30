import styled from "styled-components";
import NewsBusterLogo from "../assets/newsbuster_logo.svg";

function Navbar() {
  return (
    <Nav>
      <Logo>
        <img  src={NewsBusterLogo} />
        NewsBuster
      </Logo>
      <Button>Sign Up</Button>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  background: linear-gradient(270deg, #ca141f 11.49%, #ffa553 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (max-width: 912px) {
  }
  @media screen and (max-width: 500px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;
const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 2px;
  text-align: center;
  background: #072d74;
  border-radius: 35px;
  color: #ffffff;
  width: 109px;
  @media screen and (max-width: 500px) {   //768 px
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 90px;
  }
`;
