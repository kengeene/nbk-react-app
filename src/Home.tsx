import PersonalSolutions from "@/components/personal-solutions";
import CorporateSolutions from "@/components/corporate-solutions";
import HomeBanner from "@/assets/img/banners/home/banner.svg";
import HomeBannerText from "@/assets/img/banners/home/text.svg";
import Banner from "@/Banner";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <Banner banner={HomeBanner} bannerText={HomeBannerText} />
      </div>
      <div className="text-center px-24">
        <PersonalSolutions />
      </div>
      <div className="text-center bg-[#F5F0F0] px-24">
        <CorporateSolutions />
      </div>
    </>
  );
}
