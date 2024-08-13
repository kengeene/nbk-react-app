import PersonalSolutions from "@/components/personal-solutions";
import CorporateSolutions from "@/components/corporate-solutions";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <PersonalSolutions />
      </div>
      <div className="text-center bg-[#F5F0F0]">
        <CorporateSolutions />
      </div>
    </>
  );
}
