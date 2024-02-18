import MasterLife from "../components/Mastering";
import Navbar from "../components/NavBar";
import EQbeatsIQ from "../components/EQbetasIQ";

import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";

import BeBestYou from "../components/BeBestYouwithEQ";
import EverWonder from "../components/EverWonder";
import Test from "../components/StartTest";
import WorkWithUs from "../components/WorkWithUsAhead";
import MeetAheadCard from "../components/MeetAheadApp";
import DoesThisSoundFamiliar from "../components/DoesThisSoundFamiliar";

import SelfImprovement from "../components/SelfImprovementUgh";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard />
      <SelfImprovement />
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}