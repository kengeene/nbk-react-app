import TopLinks from "@/components/topLinks";
import ForexBar from "@/components/forex-bar";
import SearchBar from "@/components/search-bar";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-screen">
      <TopLinks />
      <div className="text-center">
        <Outlet />
      </div>
      <div className="flex flex-row justify-evenly py-3 px-24 bg-[#F9EBE8]">
        <ForexBar />
      </div>
      <div className="flex justify-center my-10">
        <SearchBar />
      </div>
      <div className="flex flex-col justify-center py-10 my-10">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
