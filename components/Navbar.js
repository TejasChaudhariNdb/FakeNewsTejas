import styled from "styled-components";
import Link from "next/link";
import NewsBusterLogo from "../assets/newsbuster_logo.svg";
import { ContainerWrapper } from "../globalStyle";

function Navbar() {
  return (
    <ContainerWrapper>
      <Nav>
        <Logo>
          <img src={NewsBusterLogo.src} />
          Faker
        </Logo>
        <Buttons>
          <Link href="/">
            <Button>Home </Button>
          </Link>
          <Link href="/about">
            <Button>About </Button>
          </Link>
        </Buttons>
      </Nav>
    </ContainerWrapper>
  );
}

export default Navbar;

const Nav = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  position: sticky;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  background: linear-gradient(270deg, #ca141f 11.49%, #ffa553 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (max-width: 500px) {
    font-weight: 600;
    font-size: 25px;
  }
`;
const Buttons = styled.div`
  text-align: center;
  display: flex;
`;

const Button = styled.button`
  margin-left: 20px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  background-color: white;
  border-radius: 35px;
  color: black;
  width: 100px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-weight: 500;
    font-size: 18px;
    width: 90px;
    margin-left: 0px;
    width: 70px;
  }
`;
