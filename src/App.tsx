import TopLinks from "@/components/topLinks";
import Banner from "@/assets/img/banner.png";
import PersonalSolutions from "@/components/personal-solutions";
import CorporateSolutions from "@/components/corporate-solutions";
import ForexBar from "@/components/forex-bar";
import SearchBar from "@/components/search-bar";

function App() {
  return (
    <div className="w-screen">
      <TopLinks />
      <div>
        <img src={Banner} width="100%" />
      </div>
      <div className="text-center py-10">
        <PersonalSolutions />
      </div>
      <div className="text-center py-10 bg-[#F5F0F0]">
        <CorporateSolutions />
      </div>
      <div className="flex flex-row justify-evenly py-3 bg-[#F9EBE8]">
        <ForexBar />
      </div>
      <div className="flex justify-center my-10">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
