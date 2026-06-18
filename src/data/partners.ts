import type { Partner } from "../types";
import paws from "../assets/logos/paws.png";
import animalIndustry from "../assets/logos/animal-industry.png";
import animalhouse from "../assets/logos/animalhouse.png";
import websiteLogo3 from "../assets/logos/websitelogo3.png";

export const partners: Partner[] = [
  {
    id: 1,
    name: "Paws",
    logoSrc: paws,
    alt: "Paws partner organization logo",
  },
  {
    id: 2,
    name: "Animal Industry",
    logoSrc: animalIndustry,
    alt: "Animal Industry partner organization logo", 
  },
  {
    id: 3,
    name: "Website Logo",
    logoSrc: websiteLogo3,
    alt: "Website Logo partner organization logo",
  },
  {
    id: 4,
    name: "Animal House",
    logoSrc: animalhouse,
    alt: "Animal House partner organization logo",
  },
];