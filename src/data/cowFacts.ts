
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
  }
];

// Shuffle the facts to make the game more interesting
export const getShuffledFacts = (): CowFact[] => {
  return [...cowFacts].sort(() => Math.random() - 0.5);
};

export default cowFacts;
