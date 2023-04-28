import Head from "next/head";
import HomeLayout from "../layouts/nav";
import Header from "../components/Header";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Clerkie Challenge</title>
      </Head>
      <HomeLayout>
        <HomeContainer>
          <Header text="Home" />
          <div className="home-content">
            <p className="home-content-text">
              Welcome to the Clerkie Challenge!
            </p>
          </div>
        </HomeContainer>
      </HomeLayout>
    </>
  );
}
