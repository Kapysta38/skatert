import { IEvent } from "@/entities/event";
import { AspectRatio } from "@/shared/ui/aspect-ratio.tsx";
import { ExternalLink } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/ui/tooltip.tsx";
import { cn } from "@/shared/lib/utils.ts";

interface EventProps {
  className?: string;
  event: IEvent;
}

export function Event({ event, className }: EventProps) {
  const {
    title,
    image,
    shortDescription,
    link,
    textPosition,
    fullDescription,
  } = event;

  // Определяем позиционирование для текста (overlay) и иконки.
  const textPositionClass = textPosition === "top" ? "top-0" : "bottom-0";
  const iconPositionClass = textPosition === "bottom" ? "top-4" : "bottom-4";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn("relative w-full", className)}>
            {/* Фоновая картинка */}
            <AspectRatio ratio={3 / 4}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </AspectRatio>

            {/* Блок с текстом */}
            <div
              className={` absolute inset-x-0 ${textPositionClass} flex justify-center `}
            >
              <div className="w-full bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                <h2 className="font-spectral text-2xl font-semibold">
                  {title}
                </h2>
                <p className="text-black mt-2">{shortDescription}</p>
              </div>
            </div>

            {/* Иконка-ссылка в правом углу */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute ${iconPositionClass} right-4 p-2 bg-white/80 rounded-full shadow-md transition-transform hover:scale-105`}
            >
              <ExternalLink />
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" hidden={!fullDescription}>
          <p className="text-lg w-80">{fullDescription}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
