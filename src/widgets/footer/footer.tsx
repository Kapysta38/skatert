import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <div className="snap-end bg-[rgba(64,61,57,1)] flex py-8 px-20 justify-end items-center gap-2 text-white">
      <MapPin size={16} />
      <a className="font-amatic text-[30px]">Пермь</a>
    </div>
  );
}
