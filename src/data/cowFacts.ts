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
  },
  {
    text: "Cows have facial recognition abilities for humans.",
    isTrue: true,
    explanation: "Research has shown that cows can recognize and remember individual human faces."
  },
  {
    text: "The average dairy cow weighs about 1,400 pounds.",
    isTrue: true,
    explanation: "Most dairy cows weigh between 1,200-1,500 pounds when fully grown."
  },
  {
    text: "Cows have three eyelids.",
    isTrue: true,
    explanation: "Cows have a third, transparent eyelid called the nictitating membrane that protects their eyes."
  },
  {
    text: "Cows can predict rain and will lie down before it starts.",
    isTrue: false,
    explanation: "This is a myth. Cows lie down for many reasons, but weather prediction isn't one of them."
  },
  {
    text: "A cow's pregnancy lasts 9 months, just like humans.",
    isTrue: true,
    explanation: "The gestation period for cows is approximately 283 days, which is about 9 months."
  },
  {
    text: "Cows can be taught to open gates with their horns.",
    isTrue: true,
    explanation: "Cows are intelligent and can learn to open gates and simple latches with their horns or noses."
  },
  {
    text: "Cows produce more milk when listening to music.",
    isTrue: true,
    explanation: "Several studies have shown that cows produce more milk when exposed to calming music."
  },
  {
    text: "The world record for milk production by a single cow is over 10,000 gallons in one year.",
    isTrue: true,
    explanation: "A Wisconsin Holstein cow named Ever-Green-View My Gold-ET produced 77,480 pounds (about 9,000 gallons) of milk in 365 days."
  },
  {
    text: "Cows can survive on only grass their entire lives.",
    isTrue: true,
    explanation: "Cows are ruminants designed to eat grass and can get all necessary nutrients from well-managed pasture."
  },
  {
    text: "Most dairy cows only produce milk after being artificially inseminated.",
    isTrue: true,
    explanation: "In commercial dairy farms, artificial insemination is the standard practice for breeding dairy cows."
  },
  {
    text: "Cows have a special enzyme that allows them to digest plastic.",
    isTrue: false,
    explanation: "Cows cannot digest plastic. Ingesting plastic can be fatal to cows."
  },
  {
    text: "Cows can jump up to 7 feet high when frightened.",
    isTrue: false,
    explanation: "While cows can jump, they typically can only jump 2-3 feet high, not 7 feet."
  },
  {
    text: "A cow can smell water from over a mile away.",
    isTrue: true,
    explanation: "Cows have an exceptional sense of smell and can detect water sources from great distances."
  },
  {
    text: "Cows have regional accents in their moos.",
    isTrue: true,
    explanation: "Research suggests that cows develop distinct 'dialects' based on their herd, similar to regional accents."
  },
  {
    text: "The first cow in America arrived on the second voyage of Columbus.",
    isTrue: true,
    explanation: "The first cattle in the Americas arrived with Christopher Columbus on his second voyage in 1493."
  },
  {
    text: "Cows are mentioned over 34 times in the Bible.",
    isTrue: true,
    explanation: "Cattle are frequently mentioned in the Bible, with references to cows, bulls, calves, and oxen throughout."
  },
  {
    text: "Cows can taste sweet, sour, salty, and bitter flavors.",
    isTrue: true,
    explanation: "Cows have taste buds that can detect the same basic flavors humans can, though their preferences differ."
  },
  {
    text: "In India, all cows are legally protected from slaughter nationwide.",
    isTrue: false,
    explanation: "While cows are sacred in Hinduism, cow slaughter laws vary by state in India and are not uniform nationwide."
  },
  {
    text: "Cows rarely form close bonds with other cows outside their immediate family.",
    isTrue: false,
    explanation: "Cows are highly social and regularly form bonds with non-related herd members."
  },
  {
    text: "Cows can swim and are naturally strong swimmers.",
    isTrue: true,
    explanation: "Cows are capable swimmers and can cross rivers and even small lakes when necessary."
  },
  {
    text: "The ancestor of modern cows, the aurochs, was approximately twice the size of today's cows.",
    isTrue: true,
    explanation: "Aurochs, extinct since 1627, were much larger than modern cattle, standing up to 6 feet tall at the shoulder."
  },
  {
    text: "Cows can predict earthquakes minutes before they happen.",
    isTrue: false,
    explanation: "While some animals may be sensitive to pre-earthquake signals, there's no scientific evidence that cows can predict earthquakes."
  },
  {
    text: "A cow's stomach makes up about 75% of its digestive system.",
    isTrue: true,
    explanation: "The multiple compartments of a cow's stomach take up a large portion of their digestive tract."
  },
  {
    text: "Cows are unable to walk backwards for more than a few steps.",
    isTrue: false,
    explanation: "Cows can walk backwards normally, though they prefer to turn around and walk forward."
  },
  {
    text: "There are over 800 different breeds of cattle worldwide.",
    isTrue: true,
    explanation: "There are approximately 800-1,000 distinct breeds of cattle recognized globally."
  },
  {
    text: "Cows can go up to two weeks without water if necessary.",
    isTrue: false,
    explanation: "Cows require fresh water daily and can become severely dehydrated within days without it."
  },
  {
    text: "Cows kill more people than sharks every year.",
    isTrue: true,
    explanation: "Statistics show that cows cause approximately 20 human deaths per year in the US alone, more than sharks worldwide."
  },
  {
    text: "A cow's diet directly affects the flavor of its milk.",
    isTrue: true,
    explanation: "Different feeds can influence the fat content and flavor compounds in a cow's milk."
  },
  {
    text: "Dairy cows must be milked at least twice a day to prevent discomfort and health issues.",
    isTrue: true,
    explanation: "Modern dairy cows are bred to produce large amounts of milk and need regular milking to prevent painful udder pressure."
  },
  {
    text: "Cows have been domesticated for over 10,000 years.",
    isTrue: true,
    explanation: "Archaeological evidence suggests cattle were first domesticated around 10,000 years ago in the Middle East."
  },
  {
    text: "All cows grow horns, regardless of gender.",
    isTrue: true,
    explanation: "Both male and female cattle naturally grow horns, though many dairy breeds are selectively bred to be hornless (polled)."
  }
];

// Get 10 random facts from the array for each game
export const getShuffledFacts = (): CowFact[] => {
  const shuffled = [...cowFacts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10); // Return only 10 facts
};

export default cowFacts;
