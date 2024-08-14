import PersonalSolutions from "@/components/personal-solutions";
import CorporateSolutions from "@/components/corporate-solutions";
import Banner from "@/assets/img/banner.png";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <img src={Banner} width="100%" />
      </div>
      <div className="text-center">
        <PersonalSolutions />
      </div>
      <div className="text-center bg-[#F5F0F0]">
        <CorporateSolutions />
      </div>
    </>
  );
}
