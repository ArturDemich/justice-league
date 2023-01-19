import Actors from "./components/Actors";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Geners from "./components/Geners";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import RegisterNow from "./components/RegistrNow";
import TrendsBlock from "./components/TrendsBlock";

import { Container } from "@mui/material";
import style from "./app.styles"


function App() {
  return (
    <Container maxWidth="xxl" sx={style.container}>
      <Header />
      <MainBanner />
      <TrendsBlock />
      <Geners />
      <Actors />
      <ComingSoon />
      <RegisterNow />
      <Footer />
    </Container>
  );
}

export default App;
