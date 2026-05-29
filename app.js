const QUESTION_COUNT = 34;

const questionBank = [
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
  },
  {
    section: "Your License",
    question: "How early may a North Carolina driver license be renewed before a customer's birthday?",
    choices: ["Up to six months before", "Up to one month before", "Only after it expires", "Up to two years before"],
    answer: 0,
    explanation: "The handbook says driver licenses may be renewed up to six months before a customer's birthday."
  },
  {
    section: "Your License",
    question: "How long is a temporary driving certificate valid after applying at a driver license office?",
    choices: ["60 days", "10 days", "30 days", "One year"],
    answer: 0,
    explanation: "Customers receive a temporary driving certificate valid for 60 days while the new license is delivered by mail."
  },
  {
    section: "Alcohol and the Law",
    question: "What is required before driving privileges can be reinstated after a DWI conviction?",
    choices: ["A substance abuse assessment", "A vehicle emissions inspection", "A new title application", "A bicycle safety class"],
    answer: 0,
    explanation: "The handbook says anyone convicted of DWI must obtain a substance abuse assessment before reinstatement."
  },
  {
    section: "Alcohol and the Law",
    question: "What is the mandatory license revocation for a first DWI conviction?",
    choices: ["One year", "30 days", "90 days", "Four years"],
    answer: 0,
    explanation: "A first DWI conviction carries a mandatory driver license revocation of one year."
  },
  {
    section: "Driving Privilege",
    question: "How many points are deducted after satisfactory completion of a driver improvement clinic?",
    choices: ["Three points", "One point", "Five points", "All points"],
    answer: 0,
    explanation: "After satisfactory completion of the clinic, three points are deducted from the driving record."
  },
  {
    section: "Driving Privilege",
    question: "How many points are assessed for reckless driving?",
    choices: ["4 points", "1 point", "2 points", "5 points"],
    answer: 0,
    explanation: "Reckless driving is listed as a four-point violation."
  },
  {
    section: "Driving Privilege",
    question: "How long can a second point-system suspension last?",
    choices: ["6 months", "30 days", "60 days", "12 months"],
    answer: 0,
    explanation: "The handbook lists six months for the second suspension under the point system."
  },
  {
    section: "Your Driving",
    question: "When should you slow down for a curve?",
    choices: ["Before entering the curve", "Halfway through the curve", "Only after leaving the curve", "Only if another car is behind you"],
    answer: 0,
    explanation: "The handbook says to slow down before entering a curve so you do not need to brake while in it."
  },
  {
    section: "Your Driving",
    question: "For a right turn, where should your vehicle be positioned?",
    choices: ["Close to the right edge of the road", "In the center of the road", "Close to the left edge of the road", "Across both lanes"],
    answer: 0,
    explanation: "For right turns, the handbook says to stay close to the right edge of the road."
  },
  {
    section: "Your Driving",
    question: "When being passed, what should you avoid doing?",
    choices: ["Increasing your speed", "Moving right if horned", "Helping the other driver pass", "Staying in your lane"],
    answer: 0,
    explanation: "The handbook says never to increase your speed when another vehicle is passing."
  },
  {
    section: "Your Driving",
    question: "Where should you generally park on a road?",
    choices: ["On the right side of the road", "Facing traffic on the left side", "On a crosswalk", "Within 15 feet of a fire hydrant"],
    answer: 0,
    explanation: "The handbook says to always park on the right side of the road, except on one-way streets."
  },
  {
    section: "Your Driving",
    question: "At an intersection with no signs or signals, which vehicle has the right of way when two vehicles arrive at the same time?",
    choices: ["The vehicle to the right", "The vehicle to the left", "The larger vehicle", "The vehicle turning left"],
    answer: 0,
    explanation: "When two or more vehicles reach an unsigned intersection at the same time, the vehicle to the right has the right of way."
  },
  {
    section: "Your Driving",
    question: "What should drivers do when exiting a private driveway?",
    choices: ["Stop and yield to all vehicles and pedestrians", "Enter traffic immediately", "Yield only to vehicles, not pedestrians", "Use hazard lights and keep moving"],
    answer: 0,
    explanation: "The handbook says to stop and yield to all other vehicles and pedestrians when exiting a private driveway."
  },
  {
    section: "School Buses",
    question: "On a two-lane roadway, what must traffic do when a school bus stops for passengers?",
    choices: ["Traffic from both directions must stop", "Only traffic behind the bus must stop", "Only oncoming traffic must stop", "No traffic must stop if the road is straight"],
    answer: 0,
    explanation: "On a two-lane roadway, all traffic from both directions must stop for a school bus loading or unloading passengers."
  },
  {
    section: "School Buses",
    question: "On a divided highway of four lanes or more with a median, who must stop for a stopped school bus?",
    choices: ["Only traffic following the bus", "All traffic in both directions", "Only traffic facing the bus", "No traffic if the median is painted"],
    answer: 0,
    explanation: "On a divided highway with four or more lanes and a median, only traffic following the bus must stop."
  },
  {
    section: "Emergency Vehicles",
    question: "What should you do when an emergency vehicle with flashing lights and siren approaches?",
    choices: ["Drive to the right edge of the road and stop completely", "Speed up to stay ahead of it", "Stop in the left lane", "Continue normally if you have a green light"],
    answer: 0,
    explanation: "Drivers should move to the right-hand curb or edge of the road and stop completely until the emergency vehicle passes."
  },
  {
    section: "Emergency Vehicles",
    question: "When an emergency vehicle is parked with warning lights on and you are on a highway with at least two lanes in your direction, what should you do?",
    choices: ["Move into a lane away from the emergency vehicle when safe", "Stop directly beside it", "Drive closer to inspect the scene", "Turn on high beams"],
    answer: 0,
    explanation: "North Carolina's move-over rule requires drivers to move into a lane away from the parked emergency vehicle when it is safe."
  },
  {
    section: "Traffic Stops",
    question: "During a traffic stop, what should you do after stopping the vehicle?",
    choices: ["Put it in Park, roll down the window, turn off the engine, and remain seated", "Exit immediately with your documents", "Reach under the seat for paperwork", "Keep the radio loud"],
    answer: 0,
    explanation: "The handbook says to place the vehicle in Park, roll down the window, turn off the engine, silence devices, and remain seated."
  },
  {
    section: "Traffic Stops",
    question: "If you disagree with a traffic ticket during a stop, what should you do?",
    choices: ["Contest it later in court", "Argue until the ticket is withdrawn", "Refuse to sign it", "Leave before the officer finishes"],
    answer: 0,
    explanation: "The handbook says not to prolong the contact by arguing; you can explain your point of view in court."
  },
  {
    section: "Hazardous Driving",
    question: "How much should you reduce speed on wet pavement compared with dry pavement?",
    choices: ["At least 5 to 10 mph slower", "Exactly 1 mph slower", "Only slow down if it is dark", "Do not slow down"],
    answer: 0,
    explanation: "The handbook advises driving at least five to ten miles per hour slower on wet pavement."
  },
  {
    section: "Hazardous Driving",
    question: "Why should you avoid cruise control when it is raining or after it has been raining?",
    choices: ["It can delay your response if the vehicle hydroplanes", "It turns headlights off", "It makes windshield wipers illegal", "It prevents braking entirely"],
    answer: 0,
    explanation: "If a vehicle hydroplanes, the time needed to turn off cruise control or tap the brake can affect control."
  },
  {
    section: "Hazardous Driving",
    question: "In fog, which headlights should you use?",
    choices: ["Low-beam headlights", "High-beam headlights", "No headlights", "Parking lights only"],
    answer: 0,
    explanation: "The handbook says to use low-beam headlights when driving in fog."
  },
  {
    section: "Hazardous Driving",
    question: "On packed snow, how much does the handbook recommend reducing speed?",
    choices: ["By more than half", "By exactly 5 mph", "Not at all", "Only below 20 mph"],
    answer: 0,
    explanation: "The handbook recommends reducing speed by more than half for packed snow and slowing to a crawl on ice."
  },
  {
    section: "Emergencies",
    question: "If your gas pedal sticks, what should you do?",
    choices: ["Shift to neutral and apply firm brake pressure without locking the wheels", "Turn sharply off the road immediately", "Pump the accelerator repeatedly at high speed", "Turn off the headlights"],
    answer: 0,
    explanation: "The handbook says to try to unstick the pedal, shift to neutral, brake firmly without locking the wheels, and move off the road safely."
  },
  {
    section: "Emergencies",
    question: "If a tire blowout occurs, what should you do first?",
    choices: ["Hold the steering wheel tightly and keep the vehicle straight", "Brake hard immediately", "Turn quickly toward the shoulder", "Shift into reverse"],
    answer: 0,
    explanation: "For a blowout, hold the steering wheel tightly, keep straight, reduce speed by lifting off the accelerator, and avoid braking until controlled."
  },
  {
    section: "Emergencies",
    question: "If your vehicle runs off the pavement onto the shoulder, what should you avoid doing immediately?",
    choices: ["Braking hard or turning sharply back onto the road", "Steering straight ahead", "Lifting your foot from the accelerator", "Checking traffic before returning"],
    answer: 0,
    explanation: "The handbook warns not to immediately apply the brakes or try to turn back, because you could skid or lose control."
  },
  {
    section: "Crashes",
    question: "When must you immediately report a crash to law enforcement?",
    choices: ["When anyone is killed or injured, or damage appears to be $1,000 or more", "Only when both drivers agree", "Only if a vehicle is towed", "Only on interstate highways"],
    answer: 0,
    explanation: "A crash must be reported when someone is killed or injured or the total damage appears to be $1,000 or more."
  },
  {
    section: "Signals and Signs",
    question: "What does a flashing red traffic signal mean?",
    choices: ["The same as a stop sign", "Proceed without stopping", "Speed up through the intersection", "Yield only to pedestrians"],
    answer: 0,
    explanation: "A flashing red signal has the same meaning as a stop sign."
  },
  {
    section: "Signals and Signs",
    question: "What does a flashing yellow traffic signal mean?",
    choices: ["Slow down and proceed with caution", "Come to a full stop every time", "The road is closed", "Only buses may proceed"],
    answer: 0,
    explanation: "A flashing yellow signal has the same meaning as a warning sign: slow down and proceed with caution."
  },
  {
    section: "Signals and Signs",
    question: "What does a flashing yellow arrow mean?",
    choices: ["The turn is allowed, but you must yield to oncoming traffic and pedestrians", "No turns are allowed", "The turn is protected", "You must stop until a green circle appears"],
    answer: 0,
    explanation: "With a flashing yellow arrow, the indicated turn is permitted only after yielding to oncoming traffic and pedestrians."
  },
  {
    section: "Signals and Signs",
    question: "What does a pentagon-shaped sign warn of?",
    choices: ["A school zone or school crossing", "A railroad crossing", "A no-passing zone", "A hospital"],
    answer: 0,
    explanation: "The five-sided pentagon sign warns of a school zone or school crossing."
  },
  {
    section: "Signals and Signs",
    question: "What do white pavement lines separate?",
    choices: ["Travel lanes moving in the same direction", "Travel lanes moving in opposite directions", "School zones from sidewalks", "Railroad tracks from roads"],
    answer: 0,
    explanation: "White lines separate travel lanes moving in the same direction."
  },
  {
    section: "Sharing the Road",
    question: "What is the safest way to pass a bicyclist?",
    choices: ["Change lanes when there is abundant clearance and no oncoming traffic", "Squeeze by in the same lane", "Use the shoulder at full speed", "Pass only at intersections"],
    answer: 0,
    explanation: "The handbook says the safest way to pass a bicyclist is to change lanes when it is lawful and safe."
  },
  {
    section: "Sharing the Road",
    question: "What should drivers remember about large trucks traveling downhill?",
    choices: ["Truck brakes create heat and trucks require additional stopping distance", "They stop faster than cars", "They never need extra turning room", "They must use bicycle lanes"],
    answer: 0,
    explanation: "The handbook notes that truck brakes create heat downhill and large trucks need additional stopping distance."
  },
  {
    section: "Vehicle Responsibilities",
    question: "Within how many days must you notify DMV after changing your name?",
    choices: ["60 days", "10 days", "30 days", "One year"],
    answer: 0,
    explanation: "The handbook says if you change your name, you must notify DMV within 60 days."
  },
  {
    section: "Vehicle Responsibilities",
    question: "Within how many days of moving within North Carolina must a license or ID holder update their physical address?",
    choices: ["60 days", "15 days", "6 months", "One year"],
    answer: 0,
    explanation: "The handbook says license or ID holders must update their physical address within 60 days of moving within North Carolina."
  },
  {
    section: "Vehicle Responsibilities",
    question: "How soon before registration expiration can a vehicle inspection be performed?",
    choices: ["Up to 90 days before", "Only the day before", "Up to one year before", "Only after expiration"],
    answer: 0,
    explanation: "Vehicle inspections may be performed up to 90 days prior to the registration expiration date."
  },
  {
    section: "Vehicle Responsibilities",
    question: "What is the minimum liability insurance required for property damage in a crash?",
    choices: ["$25,000", "$30,000", "$60,000", "$750,000"],
    answer: 0,
    explanation: "The handbook lists $25,000 as the minimum required coverage for property damage in a crash."
  }
];

let questions = buildQuestionSet();

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

function buildQuestionSet() {
  const shuffled = [...questionBank];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, Math.min(QUESTION_COUNT, shuffled.length));
}

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
  questions = buildQuestionSet();
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
