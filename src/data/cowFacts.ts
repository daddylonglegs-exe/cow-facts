
export interface CowFact {
  text: string;
  isTrue: boolean;
  explanation?: string; // Optional explanation for the answer
}

const cowFacts: CowFact[] = [
  {
    text: "Cows have four stomachs.",
    isTrue: false,
    explanation: "Cows actually have one stomach with four compartments: rumen, reticulum, omasum, and abomasum."
  },
  {
    text: "Cows can sleep standing up.",
    isTrue: true,
    explanation: "Cows can doze while standing up, but they usually lie down for deep sleep."
  },
  {
    text: "The average cow produces about 7.5 gallons of milk daily.",
    isTrue: true,
    explanation: "Modern dairy cows can produce about 7-9 gallons of milk per day."
  },
  {
    text: "Cows are colorblind and cannot see the color red.",
    isTrue: false,
    explanation: "Cows are not colorblind. They can see colors, but red doesn't make them angry - that's a myth."
  },
  {
    text: "Cows have best friends and get stressed when separated from them.",
    isTrue: true,
    explanation: "Studies have shown that cows form close bonds with other cows and show signs of stress when separated."
  },
  {
    text: "A cow chews its food around 50 times per minute.",
    isTrue: true,
    explanation: "Cows spend about 8 hours a day chewing cud, at approximately 40-60 chews per minute."
  },
  {
    text: "Cows can walk upstairs but not downstairs.",
    isTrue: false,
    explanation: "This is a myth. Cows can walk both up and down stairs, but they're usually reluctant to do either."
  },
  {
    text: "The average cow drinks about 30 gallons of water each day.",
    isTrue: true,
    explanation: "Dairy cows can drink between 30-50 gallons of water per day, especially during milk production."
  },
  {
    text: "Cows can recognize over 100 other cows in their herd.",
    isTrue: true,
    explanation: "Cows have excellent social memory and can recognize and remember many individual cows."
  },
  {
    text: "A cow's heart beats at 120 beats per minute.",
    isTrue: false,
    explanation: "A cow's normal heart rate is about 60-70 beats per minute, not 120."
  },
  {
    text: "Cows can smell something up to 6 miles away.",
    isTrue: true,
    explanation: "Cows have an excellent sense of smell and can detect odors up to 6 miles away under the right conditions."
  },
  {
    text: "The average lifespan of a domestic cow is about 20 years.",
    isTrue: true,
    explanation: "While many dairy cows are culled earlier, cows can naturally live for about 15-20 years."
  },
  {
    text: "Cows can climb trees when threatened.",
    isTrue: false,
    explanation: "Cows cannot climb trees. Their body structure makes it physically impossible for them to climb."
  },
  {
    text: "Cows can produce up to 200 pounds of methane gas per year.",
    isTrue: true,
    explanation: "A single cow can produce between 150-200 pounds of methane annually through their digestive process."
  },
  {
    text: "A cow's only natural predator is the wolf.",
    isTrue: false,
    explanation: "Cows have several natural predators including wolves, bears, big cats, and coyotes."
  },
  {
    text: "Cows have a nearly 360-degree panoramic vision.",
    isTrue: true,
    explanation: "Cows can see in almost all directions without moving their heads, though they have poor depth perception."
  },
  {
    text: "Holstein cows are always black and white.",
    isTrue: false,
    explanation: "While most Holstein cows are black and white, they can also be red and white due to a recessive gene."
  },
  {
    text: "Cows can hear lower and higher frequencies than humans.",
    isTrue: true,
    explanation: "Cows can detect sounds at much lower and higher frequencies than humans can perceive."
  },
  {
    text: "Cows never sit down.",
    isTrue: false,
    explanation: "Cows do sit down. They spend about 12-14 hours per day lying down while resting or ruminating."
  },
  {
    text: "A cow-human hybrid was successfully created in a lab in 2015.",
    isTrue: false,
    explanation: "This is completely false. No such hybrid has ever been created, as it's biologically impossible."
  }
];

// Shuffle the facts to make the game more interesting
export const getShuffledFacts = (): CowFact[] => {
  return [...cowFacts].sort(() => Math.random() - 0.5);
};

export default cowFacts;
