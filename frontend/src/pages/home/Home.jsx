import Banner from "./Banner";
import News from "./News";
import Reccomended from "./Reccomended";
import TopSellers from "./TopSellers";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Reccomended />
      <News />
    </>
  );
};

export default Home;
