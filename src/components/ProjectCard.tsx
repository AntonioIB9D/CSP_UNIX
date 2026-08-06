import { Chip } from "@heroui/react";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

type ProjectCardProps = {
  category: string;
  name: string;
  subtitle: string;
  description: string;
  options: string[];
  link: string;
  images: {
    image: string;
  }[];
};

const chipColors = [
  {
    id: 1,
    color: "success",
  },
  {
    id: 2,
    color: "accent",
  },
  {
    id: 3,
    color: "warning",
  },
  {
    id: 4,
    color: "danger",
  },
  {
    id: 5,
    color: "default",
  },
];

export default function ProjectCard({
  category,
  name,
  subtitle,
  description,
  options,
  link,
  images,
}: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = images;

  /* The `useEffect` hook in the provided code snippet is setting up a timer interval that updates the
   current index of the carousel every 5 seconds. Here's a breakdown of what it's doing: */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 8000); // Avanza cada 5 segundos

    return () => clearInterval(interval); // Limpieza cuando el componente se desmonta
  }, [items.length]);

  return (
    <>
      {/* Data 1 PRESS DATA*/}
      <div
        className={`bg-[#141414] rounded-2xl p-2 w-40 text-center font-bold ${category === "Analytics" ? "text-[#28A745]" : category === "Defects" ? "text-[#CFA011]" : category === "Tracking" ? "text-[#DC3545]" : category === "Learning" ? "text-[#D74273]" : "text-[#FF8656]"}`}
      >
        {category}
      </div>
      <div className="bg-[#141414] rounded-2xl p-4 w-[92%] flex justify-center gap-4">
        <div className="flex flex-col gap-4 justify-center items-center w-2/4">
          <img
            src={items[currentIndex].image}
            alt="Carousel Image"
            className="w-full h-full object-cover"
          />
          <div className="flex gap-2 mt-2 md:mt-0 ">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-2/4">
          <h1 className="font-semibold text-[#FF791B]">{subtitle}</h1>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-[#86868B] font-medium text-pretty">
            {parse(description)}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {options.map((option, index) => (
              <Chip
                key={index}
                color={
                  chipColors[index % chipColors.length].color as
                    | "success"
                    | "accent"
                    | "warning"
                    | "danger"
                    | "default"
                }
                className="text-[14px]"
              >
                {option}
              </Chip>
            ))}
          </div>
          <div className="text-[#0068FF] font-semibold flex justify-end items-end h-full ">
            <p
              className="hover:cursor-pointer"
              onClick={() => window.open(link, "_blank")}
            >
              Visit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
