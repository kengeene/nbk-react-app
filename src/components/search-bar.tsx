// import { Search } from "lucide-react";
import SearchIcon from "@/assets/img/search-icon.svg";

export default function SearchBar() {
  return (
    <div className="w-2/3 flex flex-row md:grow-0 border border-[#30120B rounded-md px-3 py-2">
      <input
        type="search"
        placeholder="I am looking for..."
        className="w-full rounded-lg bg-background border-none my-3.5"
      />
      <img src={SearchIcon} />
    </div>
  );
}
