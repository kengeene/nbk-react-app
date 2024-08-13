import nbkLogo from "@/assets/img/nbkLogo.svg";
import { Search } from "lucide-react";

export default function TopLinks() {
  return (
    <>
      <div className="flex text-[#FFAA00] bg-[#3C251F] text-xs justify-end">
        <span className="min-w-fit p-2">Investor Relations</span>
        <span className="w-fit p-2">National Online Banking</span>
        <span className="w-fit p-2">
          NBK Bancassurance Intermediary Limited
        </span>
        <span className="w-fit p-2">Property Sales</span>
        <span className="w-fit p-2">Natbank Investments</span>
        <span className="w-fit p-2">Treasury Services</span>
        <span className="w-fit p-2">Contact Us</span>
      </div>
      <div className="grid grid-cols-3 content-center">
        <div>
          {" "}
          <img src={nbkLogo} />
        </div>
        <div className="flex col-span-2 justify-end">
          <span className="p-3">Home</span>
          <span className="p-3">About Bancassurance</span>
          <span className="p-3">Personal Solutions</span>
          <span className="p-3">Corporate Solutions</span>
          <span className="p-3">
            <Search className="text-[#FFAA00]" />
          </span>
        </div>
      </div>
    </>
  );
}
