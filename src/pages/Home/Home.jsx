import Header from "../../components/Header";
import Company from "./Company/Company";
import Experience from "./Experience/Experience";
import Fresher from "./Fresher/Fresher";

const Home = () => {
  
  return (
    <div>
      <Header></Header>
      {/*fresher Job post */}
      <Fresher></Fresher>
      {/*Experience Job post */}
      <Experience></Experience>
      {/* Company */}
      <Company></Company>
    </div>
  );
};

export default Home;
