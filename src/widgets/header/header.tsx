import { Input } from "@/shared/ui/input.tsx";
import { Search } from "lucide-react";
import { useEvents } from "@/entities/event";

export function Header() {
  const { setFilter } = useEvents();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="w-full bg-[url('/public/скатерть.png')]  bg-repeat bg-center  flex justify-between items-center py-4 px-10 gap-4">
      <h1 className="font-amatic text-[80px]/normal font-bold text-white bg-red-500 rounded-2xl px-4">
        Скатерть
      </h1>
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex items-center justify-center w-full  max-w-2xl relative">
          <Input
            onChange={handleSearchChange}
            className="w-full bg-red-500 text-[60px] text-white placeholder:text-white py-2 px-4 rounded-lg"
            placeholder="Поиск"
          />
          <Search
            size={16}
            className="text-white absolute right-4 cursor-pointer hover:scale-110 transition-all ease-out duration-300 active:scale-95"
          />
        </div>
      </div>
      <button>
        <p className="font-amatic text-[50px]/normal font-bold text-white bg-red-500 rounded-2xl px-4 hover:bg-red-600 transition-all ease-out duration-300 cursor-pointer active:scale-95">
          Прикол дня
        </p>
      </button>
    </div>
  );
}
