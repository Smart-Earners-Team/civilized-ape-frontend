import type { Person } from "../components/types";

export const teams: Person[] = [
  {
    name: "EVMlord",
    role: "Project Lead",
    aka: "CEO $mart Earners Team",
    image: "H.jpg",
    socials: [],
  },
  {
    name: "Kingz",
    role: "DeFi and Nft enthusiast",
    image: "A.jpg",
    aka: "",
    socials: [],
  },
  {
    name: "Hood",
    role: "Social Media Manager",
    image: "D.jpg",
    aka: "Web3 Enthusiast",
    socials: [],
  },
  {
    name: "CAther",
    role: "Master Of the Digital Arts",
    image: "E.jpg",
    aka: "",
    socials: [],
  },
  {
    name: "Tebify",
    role: "Software Developer",
    aka: "",
    image: "G.jpg",
    socials: [],
  },
  {
    name: "Crypto Queen",
    role: "Chief Marketing Officer (CMO)",
    aka: "Founder: D'Queens Academy",
    image: "C.jpg",
    socials: [],
  },
  {
    name: "Koinonos",
    role: "Technical Analyst",
    image: "J.jpg",
    aka: "",
    socials: [],
  },
  {
    name: "Daniel (Demon slayer zap⚡)",
    role: "Technical Analyst",
    image: "K.jpg",
    aka: "Gold Specialist",
    socials: [],
  },
];

interface Testimonial {
  name: string;
  testimony: string;
}
export const testimonials: Testimonial[] = [
  {
    name: "Mrs Lawal",
    testimony: `I'm highly pleased and satisfied with today's lecture like that of yesterday.
    Everything was  explained in such a way that I have the recognition of the candle stick patterns without cramming any of them.
    SUPERB!`,
  },
  {
    name: "Brendan",
    testimony: "Thank you for the amazing session. It was super educative",
  },
  {
    name: "Jumoke",
    testimony:
      "Thanks so much , I have has sessions on candle sticks before but didn't get a crystal clear explanation like yours.",
  },
  {
    name: "Oba Adeleke",
    testimony:
      "A very sweet class we had today, it was as sweet as popcorn😅 A very big thanks to our facilitator",
  },
  {
    name: "Elijah James",
    testimony:
      "I am one of the students for civilized Ape Town, and I'm very thankful that I took this opportunity. The  TA classes we're awesome and interesting. I have learnt so many things like  market movement, how to manage Risk properly etc. And the response from the tutors and Admins is really encouraging.",
  },
  {
    name: "Meshack",
    testimony:
      "Though I wasn't new to crypto, I learned a lot from the instructors. Perviously I was a spot trader, but the sessions have prepared me for trading the futures market, Market structures, volume, capital preservation etc  Thanks to cAPE class organisers",
  },
  {
    name: "Matthew",
    testimony:
      "From the introduction classes, I was awed. I don't regret leaving what I was doing to take part in this class. I'm so great full I'm part of this community, in the past, I used to think TA was hard, I've watched tons of YouTube videos and read books, but everything looked so mixed up, but in cApe, the instructors took us by the hand so to speak and now I can easily analyse charts and understand market movement.",
  },
];
