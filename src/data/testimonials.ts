import type { Testimonial } from "../types";
import testimonyHuman from "../assets/images/testimony_human.png";
import testimonyDog from "../assets/images/testimony_dog.png";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Max",
    petType: "Golden Retriever",
    rating: 5,
    quote:
      "TinDog helped Max find his soulmate! They're inseparable now. The matching process was so easy and fun!",
    avatarSrc: testimonyHuman,
    petAvatarSrc: testimonyDog,
  },
  {
    id: 2,
    name: "James & Luna",
    petType: "Husky",
    rating: 5,
    quote:
      "Luna was always so lonely when I was at work. Thanks to TinDog, she found a best friend to play with every day!",
    avatarSrc: testimonyHuman,
    petAvatarSrc: testimonyDog,
  },
  {
    id: 3,
    name: "Maria & Charlie",
    petType: "Beagle",
    rating: 4,
    quote:
      "The adoption partnership program is amazing. We found Charlie through one of their partner shelters. Highly recommend!",
    avatarSrc: testimonyHuman,
    petAvatarSrc: testimonyDog,
  },
  {
    id: 4,
    name: "David & Bella",
    petType: "Poodle",
    rating: 5,
    quote:
      "Bella used to be so shy around other dogs. TinDog matched her with a gentle playmate and she's come out of her shell!",
    avatarSrc: testimonyHuman,
    petAvatarSrc: testimonyDog,
  },
];