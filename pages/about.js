import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { TiSocialLinkedin, TiSocialGithub, TiMail } from "react-icons/ti";
import { BsGlobe } from "react-icons/bs";
import GlobalStyle from "../globalStyle";
import Navbar from "../components/Navbar";
import { ContainerWrapper } from "../globalStyle";
import { profileData } from "../data/profileData";
import { Button } from "../components/News";


const About = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ContainerWrapper>
        <Header>
          <Heading>
            Your tool to fight <br />
            Fake News
          </Heading>
          <Paragraph>
            Find out the legitimacy of a news in this
            <br /> rapidly progressing digital world
          </Paragraph>
          <Link href="/">
            <Button>Find Out</Button>
          </Link>
        </Header>
        <h1>Team</h1>
        <Profiles>
          {profileData.map((person) => (
            <Profile>
              <ProfilesName>{person.name}</ProfilesName>
              <ProfilesRole>{person.role}</ProfilesRole>
              <ProfilesIcons>
                <Icons>
                  <a href={person.linkedin} target="_blank">
                    <TiSocialLinkedin size={30} />
                  </a>
                </Icons>
                <Icons>
                  <a href={person.github} target="_blank">
                    <TiSocialGithub size={30} />
                  </a>
                </Icons>
                <Icons>
                  <a href={"mailto:" + person.mail}>
                    <TiMail size={30} />
                  </a>
                </Icons>
                {(person.name == "Aniket Chaudhari" ||
                  person.name == "Ravindra Lakhara") && (
                  <Icons>
                    <a
                      href={person.portfolio}
                      style={{ marginLeft: "4px" }}
                      target="_blank"
                    >
                      <BsGlobe size={20} />
                    </a>
                  </Icons>
                )}
              </ProfilesIcons>
            </Profile>
          ))}
        </Profiles>
      </ContainerWrapper>
    </>
  );
};
export default About;

//--------------Header-------------------
const Header = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    margin-bottom: 50px;
  }
`;
const Heading = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 85px;
  line-height: 85px;
  text-align: center;
  color: black;
  @media screen and (max-width: 992px) {
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
const Paragraph = styled.p`
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: rgba(0, 0, 0, 0.92);
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

//--------------profiles-------------------

const Profiles = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 992px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
const Profile = styled.div`
  @media screen and (max-width: 992px) {
    margin-bottom: 30px;
  }
`;
const ProfilesName = styled.h2`
  margin-bottom: 5px;
`;
const ProfilesRole = styled.p`
  margin-bottom: 5px;
`;
const ProfilesIcons = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
