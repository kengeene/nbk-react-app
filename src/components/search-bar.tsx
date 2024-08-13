import { Search } from "lucide-react";
import { Input } from "@/components/shared/input";

export default function SearchBar() {
  return (
    <div className="w-1/4 relative flex-1 md:grow-0">
      <Input
        type="search"
        placeholder="I am looking for..."
        className="w-full rounded-lg bg-background md:w-[200px] lg:w-[336px]"
      />
      <Search className="absolute right-1.5 top-2.5 h-5 w-5 bg-[#30120B] text-[#FFAA00] rounded-sm" />
    </div>
  );
}
