import TopLinks from "@/components/topLinks";
import Banner from "@/assets/img/banner.png";
import PersonalSolutions from "@/components/personal-solutions";

function App() {
  return (
    <div className="w-screen">
      <TopLinks />
      <div>
        <img src={Banner} width="100%" />
      </div>
      <div className="text-center m-10">
        <PersonalSolutions />
      </div>
    </div>
  );
}

export default App;
