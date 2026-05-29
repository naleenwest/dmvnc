const questions = [
  {
    section: "Your License",
    question: "What tests are required for a North Carolina learner permit?",
    choices: ["Vision, traffic signs, and knowledge of motor vehicle laws", "Only a road skills test", "Vehicle inspection and insurance tests", "A written test only"],
    answer: 0,
    explanation: "The handbook says learner permit testing includes vision, traffic signs, and knowledge of motor vehicle laws."
  },
  {
    section: "Your License",
    question: "If your license requires corrective lenses, what is driving without those lenses treated as?",
    choices: ["Driving without a license", "A parking violation", "A warning only", "A vehicle registration issue"],
    answer: 0,
    explanation: "The handbook says driving without required corrective lenses is the same as driving without a license."
  },
  {
    section: "Your License",
    question: "For a Level One Limited Learner Permit, how long must the supervising driver have been licensed?",
    choices: ["At least five years", "At least six months", "At least one year", "At least ten years"],
    answer: 0,
    explanation: "A supervising driver must hold a valid license and must have been licensed for at least five years."
  },
  {
    section: "Your License",
    question: "What happens if a provisional licensee drives after consuming any amount of alcohol or drugs?",
    choices: ["A one-year license revocation", "A warning letter only", "Two driver license points", "A required vehicle inspection"],
    answer: 0,
    explanation: "For drivers under 18, a conviction for driving after or while consuming alcohol or drugs results in a one-year revocation."
  },
  {
    section: "Alcohol and the Law",
    question: "At what BAC is everyone considered impaired according to the handbook?",
    choices: ["0.08 percent", "0.02 percent", "0.15 percent", "0.20 percent"],
    answer: 0,
    explanation: "The handbook states that everyone's driving is impaired at a BAC of 0.08 percent."
  },
  {
    section: "Alcohol and the Law",
    question: "What BAC level triggers immediate revocation for a commercial motor vehicle driver?",
    choices: ["0.04 or more", "0.08 or more", "0.10 or more", "0.15 or more"],
    answer: 0,
    explanation: "For commercial motor vehicle drivers, a BAC of 0.04 or more can trigger immediate revocation."
  },
  {
    section: "Alcohol and the Law",
    question: "What is the only thing the handbook says sobers up a drinker?",
    choices: ["Time", "Coffee", "A cold shower", "A large meal"],
    answer: 0,
    explanation: "Coffee, food, and cold showers do not sober a person up. Only time does."
  },
  {
    section: "Alcohol and the Law",
    question: "What is the legal age to purchase alcohol in North Carolina?",
    choices: ["21", "18", "19", "25"],
    answer: 0,
    explanation: "The handbook states the legal age to purchase any alcoholic beverage in North Carolina is 21."
  },
  {
    section: "Driving Privilege",
    question: "How many driver license points can lead to assignment to a driver improvement clinic?",
    choices: ["7 points", "3 points", "5 points", "12 points"],
    answer: 0,
    explanation: "At seven points, a driver may be assigned to a driver improvement clinic."
  },
  {
    section: "Driving Privilege",
    question: "How many points within a three-year period may result in license suspension?",
    choices: ["12 points", "6 points", "8 points", "20 points"],
    answer: 0,
    explanation: "Accumulating as many as 12 points within three years can result in suspension."
  },
  {
    section: "Driving Privilege",
    question: "How many driver license points are assessed for passing a stopped school bus?",
    choices: ["5 points", "2 points", "3 points", "4 points"],
    answer: 0,
    explanation: "Passing a stopped school bus is listed as a five-point violation."
  },
  {
    section: "Driving Privilege",
    question: "What is the first suspension period under the driver license point system?",
    choices: ["60 days", "30 days", "6 months", "12 months"],
    answer: 0,
    explanation: "A first point-system suspension may last 60 days."
  },
  {
    section: "Your Driving",
    question: "At 55 mph in ideal conditions, about how far does the handbook say a vehicle needs to stop completely?",
    choices: ["211 feet", "55 feet", "100 feet", "500 feet"],
    answer: 0,
    explanation: "The handbook gives approximately 211 feet as the stopping distance at 55 mph under ideal conditions."
  },
  {
    section: "Your Driving",
    question: "Unless otherwise posted, what is the speed limit in cities and towns?",
    choices: ["35 mph", "25 mph", "45 mph", "55 mph"],
    answer: 0,
    explanation: "The handbook lists 35 mph in cities and towns unless otherwise posted."
  },
  {
    section: "Your Driving",
    question: "What is the maximum speed limit for a school bus?",
    choices: ["45 mph", "35 mph", "55 mph", "70 mph"],
    answer: 0,
    explanation: "The handbook lists the maximum speed limit for school buses as 45 mph."
  },
  {
    section: "Your Driving",
    question: "What does the two-second rule help drivers maintain?",
    choices: ["A safe following distance", "The correct tire pressure", "The right turn signal length", "The legal parking distance"],
    answer: 0,
    explanation: "The two-second rule is used to keep safe space between your vehicle and the vehicle ahead."
  },
  {
    section: "Your Driving",
    question: "When changing lanes, what should you do after checking mirrors?",
    choices: ["Check over your shoulder to clear the blind spot", "Speed up immediately", "Tap the brakes twice", "Move without signaling"],
    answer: 0,
    explanation: "The handbook says to check mirrors, check over your shoulder, signal, and then change lanes."
  },
  {
    section: "Your Driving",
    question: "Where is passing always unsafe and usually illegal?",
    choices: ["On a curve or hill where you cannot see at least 500 feet ahead", "On a one-way street with multiple lanes", "When a vehicle is in a left-turn lane", "On highways with two lanes in each direction"],
    answer: 0,
    explanation: "The handbook lists curves or hills with less than 500 feet of visibility as places where passing is unsafe and usually illegal."
  },
  {
    section: "Your Driving",
    question: "When backing, how fast should you go according to the handbook?",
    choices: ["Not more than 10 mph", "At least 15 mph", "The posted speed limit", "As fast as traffic allows"],
    answer: 0,
    explanation: "The handbook says to back very slowly, not more than 10 mph."
  },
  {
    section: "Your Driving",
    question: "Who has the right of way when vehicles are already inside a roundabout?",
    choices: ["Vehicles already in the roundabout", "Vehicles entering from the right", "The largest vehicle", "The vehicle traveling fastest"],
    answer: 0,
    explanation: "Drivers must yield to vehicles and bicyclists already in the roundabout."
  },
  {
    section: "Railroad Crossings",
    question: "When stopping at a railroad crossing because of a train warning, where should you stop?",
    choices: ["Within 50 feet but not less than 15 feet from the nearest rail", "Exactly 100 feet from the crossing", "On the tracks until the gate rises", "At least 500 feet away"],
    answer: 0,
    explanation: "North Carolina law requires stopping within 50 feet, but not less than 15 feet, from the nearest rail."
  },
  {
    section: "Railroad Crossings",
    question: "What should you do if your vehicle stalls on or near railroad tracks?",
    choices: ["Get out immediately and move away from the tracks", "Stay inside and call for help", "Try to push the vehicle alone", "Wait for the crossing gate to rise"],
    answer: 0,
    explanation: "The handbook says to get out immediately and move away from the vehicle and tracks."
  },
  {
    section: "Hazardous Driving",
    question: "When are headlights required in North Carolina?",
    choices: ["From sunset to sunrise and when visibility is 400 feet or less", "Only after midnight", "Only in rural areas", "Only when driving on interstates"],
    answer: 0,
    explanation: "The handbook says headlights are required from sunset to sunrise and when visibility is 400 feet or less."
  },
  {
    section: "Hazardous Driving",
    question: "What must North Carolina motorists use whenever windshield wipers are on due to bad weather?",
    choices: ["Headlights", "High beams only", "Hazard lights", "Parking lights only"],
    answer: 0,
    explanation: "Motorists are required to use headlights whenever using windshield wipers due to inclement weather."
  },
  {
    section: "Hazardous Driving",
    question: "What should you do if your vehicle begins to hydroplane?",
    choices: ["Take your foot off the gas, keep the wheel straight, and avoid braking", "Brake hard immediately", "Turn sharply toward the shoulder", "Use cruise control to stabilize speed"],
    answer: 0,
    explanation: "The handbook says to take your foot off the gas, resist braking, keep the wheel straight, and let momentum decrease."
  },
  {
    section: "Hazardous Driving",
    question: "How much fast-moving water can sweep a car off the highway according to the handbook?",
    choices: ["Six inches", "One inch", "Three feet", "Five feet"],
    answer: 0,
    explanation: "The handbook reports that six inches of fast-moving water can sweep a car off the highway."
  },
  {
    section: "Signals and Signs",
    question: "What does a circular yellow signal mean?",
    choices: ["Caution; stop unless you are too close to stop safely", "Speed up to beat the red light", "Proceed without yielding", "Turn only if a green arrow appears"],
    answer: 0,
    explanation: "A circular yellow signal means caution and the signal is about to turn red."
  },
  {
    section: "Signals and Signs",
    question: "What should you do at a malfunctioning traffic light?",
    choices: ["Treat the intersection as controlled by stop signs on all approaches", "Drive through without stopping", "Wait until the light turns green", "Only yield if traffic is heavy"],
    answer: 0,
    explanation: "The handbook says to proceed as though the intersection is controlled by a stop sign on all approaches."
  },
  {
    section: "Signals and Signs",
    question: "What shape is used only for stop signs?",
    choices: ["Octagon", "Triangle", "Pentagon", "Circle"],
    answer: 0,
    explanation: "The octagonal shape is used for stop signs only."
  },
  {
    section: "Signals and Signs",
    question: "What do yellow pavement lines separate?",
    choices: ["Travel lanes moving in opposite directions", "Lanes moving in the same direction", "Parking areas from bike lanes", "Emergency lanes from shoulders"],
    answer: 0,
    explanation: "Yellow lines separate travel lanes moving in opposite directions."
  },
  {
    section: "Sharing the Road",
    question: "How should bicyclists ride according to the handbook?",
    choices: ["With the flow of traffic on the right side of the road", "Facing traffic on the left side", "Only on sidewalks", "Only in marked school zones"],
    answer: 0,
    explanation: "Bicyclists should ride right, with traffic, not facing traffic."
  },
  {
    section: "Sharing the Road",
    question: "At night, how far must a bicycle front light be visible?",
    choices: ["At least 300 feet", "At least 50 feet", "At least 100 feet", "At least 1,000 feet"],
    answer: 0,
    explanation: "At night, a bicycle must have a front light visible for at least 300 feet."
  },
  {
    section: "Sharing the Road",
    question: "Which children must wear an approved bicycle helmet?",
    choices: ["All bicycle riders and passengers under age 16", "Only riders under age 8", "Only passengers under age 5", "All riders of any age"],
    answer: 0,
    explanation: "The handbook says all bicycle riders and passengers under age 16 must wear an approved helmet."
  },
  {
    section: "Vehicle Responsibilities",
    question: "What is the minimum liability insurance required for injury to one person in a crash?",
    choices: ["$30,000", "$25,000", "$60,000", "$750,000"],
    answer: 0,
    explanation: "The handbook lists $30,000 for injuries to any one person in a crash."
  }
];

const state = {
  current: 0,
  selected: null,
  correct: 0,
  answered: false,
  currentChoices: [],
  missed: []
};

const questionCount = document.querySelector("#question-count");
const sectionLabel = document.querySelector("#section-label");
const progressBar = document.querySelector("#progress-bar");
const score = document.querySelector("#score");
const questionText = document.querySelector("#question-text");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const submitBtn = document.querySelector("#submit-btn");
const nextBtn = document.querySelector("#next-btn");
const restartBtn = document.querySelector("#restart-btn");
const results = document.querySelector("#results");
const finalScore = document.querySelector("#final-score");
const reviewList = document.querySelector("#review-list");

function shuffledChoices(item) {
  const mixed = item.choices.map((choice, index) => ({
    text: choice,
    isCorrect: index === item.answer
  }));

  for (let index = mixed.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [mixed[index], mixed[swapIndex]] = [mixed[swapIndex], mixed[index]];
  }

  return mixed;
}

function renderQuestion() {
  const item = questions[state.current];
  state.selected = null;
  state.answered = false;
  state.currentChoices = shuffledChoices(item);

  questionCount.textContent = `Question ${state.current + 1} of ${questions.length}`;
  sectionLabel.textContent = item.section;
  progressBar.style.width = `${(state.current / questions.length) * 100}%`;
  score.textContent = state.correct;
  questionText.textContent = item.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  submitBtn.disabled = true;
  submitBtn.hidden = false;
  nextBtn.hidden = true;
  restartBtn.hidden = true;

  choices.innerHTML = "";
  state.currentChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => selectChoice(index));
    choices.append(button);
  });
}

function selectChoice(index) {
  if (state.answered) return;
  state.selected = index;
  submitBtn.disabled = false;
  [...choices.children].forEach((button, buttonIndex) => {
    button.classList.toggle("selected", buttonIndex === index);
  });
}

function submitAnswer() {
  if (state.selected === null || state.answered) return;

  const item = questions[state.current];
  const selectedChoice = state.currentChoices[state.selected];
  const correctChoice = state.currentChoices.find((choice) => choice.isCorrect);
  const isCorrect = selectedChoice.isCorrect;
  state.answered = true;

  [...choices.children].forEach((button, index) => {
    button.disabled = true;
    button.classList.remove("selected");
    if (state.currentChoices[index].isCorrect) button.classList.add("correct");
    if (!isCorrect && index === state.selected) button.classList.add("incorrect");
  });

  if (isCorrect) {
    state.correct += 1;
    score.textContent = state.correct;
    feedback.textContent = `Correct. ${item.explanation}`;
    feedback.classList.add("correct");
  } else {
    state.missed.push({
      question: item.question,
      chosen: selectedChoice.text,
      correct: correctChoice.text,
      explanation: item.explanation
    });
    feedback.textContent = `Incorrect. Correct answer: ${correctChoice.text}. ${item.explanation}`;
    feedback.classList.add("incorrect");
  }

  submitBtn.hidden = true;
  nextBtn.hidden = false;
  nextBtn.textContent = state.current === questions.length - 1 ? "Finish" : "Next";
}

function nextQuestion() {
  if (state.current === questions.length - 1) {
    showResults();
    return;
  }

  state.current += 1;
  renderQuestion();
}

function showResults() {
  progressBar.style.width = "100%";
  finalScore.textContent = `You scored ${state.correct} out of ${questions.length}.`;
  reviewList.innerHTML = "";

  if (state.missed.length === 0) {
    const perfect = document.createElement("div");
    perfect.className = "review-item";
    perfect.innerHTML = "<strong>No missed questions.</strong><p>Clean run.</p>";
    reviewList.append(perfect);
  } else {
    state.missed.forEach((missed) => {
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <strong>${missed.question}</strong>
        <p>Your answer: ${missed.chosen}</p>
        <p>Correct answer: ${missed.correct}</p>
        <p>${missed.explanation}</p>
      `;
      reviewList.append(item);
    });
  }

  results.hidden = false;
  submitBtn.hidden = true;
  nextBtn.hidden = true;
  restartBtn.hidden = false;
  restartBtn.textContent = "Restart";
}

function restartQuiz() {
  state.current = 0;
  state.selected = null;
  state.correct = 0;
  state.answered = false;
  state.currentChoices = [];
  state.missed = [];
  results.hidden = true;
  renderQuestion();
}

submitBtn.addEventListener("click", submitAnswer);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

renderQuestion();
