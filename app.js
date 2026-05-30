const QUESTION_COUNT = 34;
const SEEN_QUESTIONS_KEY = "nc-dmv-seen-questions";

const questionBank = [
  {
    section: "Your License",
    question: "Which group of tests is required for a North Carolina learner permit?",
    choices: ["Vision, traffic signs, and motor vehicle laws", "Vision, parking skills, and vehicle equipment", "Road skills, vehicle inspection, and signs", "Insurance rules, road skills, and parking"],
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
    question: "After checking mirrors before a lane change, what is the next safety check?",
    choices: ["Look over your shoulder to check the blind spot", "Tap the brakes to warn drivers beside you", "Move halfway over and then activate the signal", "Sound the horn before crossing the lane line"],
    answer: 0,
    explanation: "The handbook says to check mirrors, check over your shoulder, signal, and then change lanes."
  },
  {
    section: "Your Driving",
    question: "Which location is unsafe and usually illegal for passing?",
    choices: ["A hill or curve where you cannot see 500 feet ahead", "A one-way street with two marked lanes each way", "A lane beside a vehicle waiting to turn left", "A roadway with two lanes in your direction"],
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
    question: "A railroad warning activates. Where should the driver stop?",
    choices: ["Within 50 feet but at least 15 feet from the nearest rail", "Within 100 feet but at least 50 feet from the nearest rail", "Beside the crossbuck sign even if that is on the tracks", "At the stop line only when a flagger is also present"],
    answer: 0,
    explanation: "North Carolina law requires stopping within 50 feet, but not less than 15 feet, from the nearest rail."
  },
  {
    section: "Railroad Crossings",
    question: "Your vehicle stalls on or near railroad tracks. What should you do?",
    choices: ["Get out immediately and move away from the tracks", "Stay in the vehicle and call the railroad company", "Try to restart until the warning signals activate", "Push the vehicle only if the gate is still raised"],
    answer: 0,
    explanation: "The handbook says to get out immediately and move away from the vehicle and tracks."
  },
  {
    section: "Hazardous Driving",
    question: "When does North Carolina require headlights to be used?",
    choices: ["From sunset to sunrise and when visibility is 400 feet or less", "From dusk to dawn and when visibility is 1,000 feet or less", "Only after midnight and during active rainfall or snowfall", "Only outside city limits and on highways without streetlights"],
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
    question: "If your vehicle starts to hydroplane, what is the best response?",
    choices: ["Ease off the gas, keep the wheel straight, and avoid braking", "Brake firmly, steer toward the shoulder, and downshift", "Use cruise control to hold speed until traction returns", "Turn quickly left and right to cut through the water"],
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
    question: "A circular yellow signal appears as you approach. What does it mean?",
    choices: ["Stop unless you are too close to stop safely", "Turn only after yielding to pedestrians first", "Proceed because oncoming traffic has stopped", "Speed up only if the intersection is clear"],
    answer: 0,
    explanation: "A circular yellow signal means caution and the signal is about to turn red."
  },
  {
    section: "Signals and Signs",
    question: "How should drivers handle an intersection when the traffic light is malfunctioning?",
    choices: ["Treat all approaches as controlled by stop signs", "Yield only to traffic already on the main road", "Proceed cautiously if your lane had the green last", "Wait until another driver enters, then follow them"],
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
    question: "Which bicyclist movement follows the handbook?",
    choices: ["Riding on the right side with the flow of traffic", "Riding on the left side facing oncoming traffic", "Using sidewalks whenever the road has no bike lane", "Riding only in marked zones near schools or parks"],
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
    question: "Who must wear an approved helmet when riding a bicycle?",
    choices: ["All riders and passengers under age 16", "Only riders under age 8 on public roads", "Only passengers under age 5 in carriers", "All riders of any age after sunset"],
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
    question: "When leaving a private driveway, what is required before entering the road?",
    choices: ["Stop and yield to vehicles and pedestrians", "Yield only to vehicles already in your lane", "Signal, accelerate, and merge without stopping", "Use hazard lights until fully in the roadway"],
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
    question: "An emergency vehicle approaches with lights and siren. What should you do?",
    choices: ["Move to the right edge of the road and stop completely", "Keep moving at the limit until the vehicle changes lanes", "Stop in your current lane and turn on high beams", "Move left if the emergency vehicle is behind you"],
    answer: 0,
    explanation: "Drivers should move to the right-hand curb or edge of the road and stop completely until the emergency vehicle passes."
  },
  {
    section: "Emergency Vehicles",
    question: "On a multi-lane road, what should you do for a stopped emergency vehicle with lights activated?",
    choices: ["Move to a lane away from it and continue safely past", "Stop in the nearest lane until the lights are turned off", "Keep your lane but drive closer to the center line", "Use high beams and pass only after sounding the horn"],
    answer: 0,
    explanation: "North Carolina's move-over rule requires drivers to move into a lane away from the parked emergency vehicle when it is safe."
  },
  {
    section: "Traffic Stops",
    question: "After safely stopping for law enforcement, what should the driver do first?",
    choices: ["Park, lower the window, turn off the engine, and stay seated", "Exit with license and registration held in both hands", "Open compartments and gather documents before asked", "Keep the engine running and wait with doors unlocked"],
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
    question: "Why is cruise control risky during or soon after rain?",
    choices: ["It can delay your response if hydroplaning begins", "It prevents headlights from turning on with wipers", "It makes the vehicle ignore anti-lock brakes", "It lowers tire pressure on wet pavement"],
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
    question: "Your gas pedal sticks while driving. Which response matches the handbook?",
    choices: ["Shift to neutral and brake firmly without locking wheels", "Turn sharply off the roadway before touching the brakes", "Pump the accelerator hard until the linkage releases", "Set the parking brake first and turn off all lights"],
    answer: 0,
    explanation: "The handbook says to try to unstick the pedal, shift to neutral, brake firmly without locking the wheels, and move off the road safely."
  },
  {
    section: "Emergencies",
    question: "A tire blows out and the vehicle starts to swerve. What should you do first?",
    choices: ["Grip the steering wheel tightly and keep the vehicle straight", "Brake hard immediately and steer toward the nearest shoulder", "Shift into neutral and release the steering wheel briefly", "Turn sharply away from traffic and set the parking brake"],
    answer: 0,
    explanation: "For a blowout, hold the steering wheel tightly, keep straight, reduce speed by lifting off the accelerator, and avoid braking until controlled."
  },
  {
    section: "Emergencies",
    question: "Your vehicle drops onto the shoulder. What should you avoid doing immediately?",
    choices: ["Braking hard or jerking sharply back to the road", "Easing off the accelerator while steering straight", "Letting the engine slow the vehicle gradually", "Checking traffic before returning to the lane"],
    answer: 0,
    explanation: "The handbook warns not to immediately apply the brakes or try to turn back, because you could skid or lose control."
  },
  {
    section: "Crashes",
    question: "Which crash must be reported immediately to law enforcement?",
    choices: ["One with injury, death, or apparent damage of $1,000 or more", "One with any tire damage, even if no other property is harmed", "One on an interstate shoulder, regardless of damage amount", "One where both drivers agree to exchange information only"],
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
    question: "At a flashing yellow arrow, how should a driver make the indicated turn?",
    choices: ["Turn after yielding to oncoming traffic and pedestrians", "Turn only after stopping until the signal changes green", "Turn without yielding because the movement is protected", "Do not turn until a circular green signal is displayed"],
    answer: 0,
    explanation: "With a flashing yellow arrow, the indicated turn is permitted only after yielding to oncoming traffic and pedestrians."
  },
  {
    section: "Signals and Signs",
    question: "What does a pentagon-shaped sign warn of?",
    choices: ["A school zone or crossing area", "A railroad crossing ahead", "A no-passing zone begins", "A nearby hospital entrance"],
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
    question: "How should a driver pass a bicyclist when passing is lawful and safe?",
    choices: ["Change lanes with abundant clearance and no oncoming traffic", "Stay in the lane and squeeze by slowly near the center line", "Use the shoulder briefly to create extra passing distance", "Pass only inside intersections where lanes are wider"],
    answer: 0,
    explanation: "The handbook says the safest way to pass a bicyclist is to change lanes when it is lawful and safe."
  },
  {
    section: "Sharing the Road",
    question: "Why should drivers give large trucks extra space on downhill grades?",
    choices: ["Truck brakes heat up and stopping distance increases", "Trucks can always stop faster because they sit higher", "Truck rear wheels follow exactly behind front wheels", "Trucks must move onto the shoulder before braking"],
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

const freshQuestionSet = [
  {
    section: "Your License",
    question: "What does a North Carolina learner permit allow its holder to do?",
    choices: ["Drive the specified class while carrying the permit", "Drive any passenger vehicle without supervision", "Skip the road signs and knowledge requirements", "Register a vehicle before showing liability coverage"],
    answer: 0,
    explanation: "A learner permit authorizes the holder to drive the specified class or type of vehicle while carrying the permit."
  },
  {
    section: "Your License",
    question: "What must a learner permit holder have while operating a motor vehicle on highways?",
    choices: ["A licensed driver seated beside them", "A notarized vehicle title", "A vehicle inspection receipt only", "A motorcycle endorsement"],
    answer: 0,
    explanation: "The permit holder must be accompanied by a licensed driver for the vehicle being driven, seated beside the permit holder."
  },
  {
    section: "Your License",
    question: "What type of license do most drivers need to operate personal automobiles and small trucks?",
    choices: ["Regular Class C license", "Commercial Class A license", "School bus endorsement", "Motorcycle learner permit"],
    answer: 0,
    explanation: "The handbook says most drivers need only a Regular Class C license for ordinary personal vehicles."
  },
  {
    section: "Your License",
    question: "What does a REAL ID license or identification card display?",
    choices: ["A gold star", "A red triangle", "A blue crossbuck", "A green arrow"],
    answer: 0,
    explanation: "North Carolina REAL ID cards are identified by a gold star."
  },
  {
    section: "Your License",
    question: "When moving to North Carolina with a commercial driver license from another jurisdiction, how soon must you apply for a North Carolina CDL to maintain it?",
    choices: ["Within 30 days", "Within 90 days", "Within six months", "Only after it expires"],
    answer: 0,
    explanation: "The handbook says CDL holders moving to North Carolina must apply for a North Carolina commercial license within 30 days to maintain it."
  },
  {
    section: "Alcohol and the Law",
    question: "After a DWI charge, what is the license consequence for refusing a required chemical test?",
    choices: ["A 30-day immediate revocation plus a DMV revocation", "A court warning plus two driver license points", "A vehicle inspection hold plus a registration fee", "A short permit restriction plus a road skills retest"],
    answer: 0,
    explanation: "Refusing a required breath or blood test results in immediate revocation for at least 30 days plus an additional minimum 12-month DMV revocation."
  },
  {
    section: "Alcohol and the Law",
    question: "Which evidence can prove driving while impaired under the handbook?",
    choices: ["Appreciable impairment or a qualifying BAC level", "A crash report plus any traffic citation", "An open container found anywhere in the vehicle", "A driver statement that alcohol was purchased"],
    answer: 0,
    explanation: "DWI can be proven by appreciable physical or mental impairment or by a qualifying BAC level."
  },
  {
    section: "Alcohol and the Law",
    question: "What BAC can require an ignition interlock device after a DWI conviction?",
    choices: ["0.15 or more", "0.04 or more", "0.05 or more", "0.07 or more"],
    answer: 0,
    explanation: "A DWI conviction with a BAC of 0.15 or more can require an ignition interlock device."
  },
  {
    section: "Driving Privilege",
    question: "What happens to previous driver license points when driving privilege is reinstated?",
    choices: ["They are canceled", "They double", "They stay forever", "They become insurance points"],
    answer: 0,
    explanation: "When driving privilege is reinstated, previous driver license points are canceled."
  },
  {
    section: "Driving Privilege",
    question: "How many driver license points are assessed for running through a stop sign?",
    choices: ["3 points", "1 point", "2 points", "5 points"],
    answer: 0,
    explanation: "Running through a stop sign is listed as a three-point violation."
  },
  {
    section: "Driving Privilege",
    question: "How many driver license points are assessed for following too closely?",
    choices: ["4 points", "1 point", "2 points", "3 points"],
    answer: 0,
    explanation: "Following too closely is listed as a four-point violation."
  },
  {
    section: "Driving Privilege",
    question: "What may the DMV do after two speeding-over-55 convictions within 12 months?",
    choices: ["Suspend the driver license", "Cancel all previous points", "Renew the vehicle registration", "Require only a vision exam"],
    answer: 0,
    explanation: "The DMV can suspend a license for two convictions of speeding over 55 mph within 12 months."
  },
  {
    section: "Driver Safety",
    question: "Which sign may indicate that a driver is becoming drowsy?",
    choices: ["Not remembering the last few miles driven", "Hearing the turn signal click normally", "Having a full tank before a long trip", "Using low beams on a rural highway"],
    answer: 0,
    explanation: "The handbook lists not remembering the last few miles driven as a warning sign of drowsy driving."
  },
  {
    section: "Driver Safety",
    question: "How often should you stop to stretch and walk briskly on long trips?",
    choices: ["At least every 2 hours", "Only once per day", "Every 10 minutes", "Only when the gas tank is empty"],
    answer: 0,
    explanation: "The handbook recommends stopping at least every two hours during long-distance driving."
  },
  {
    section: "Driver Safety",
    question: "Which activity is listed as a driving distraction?",
    choices: ["Using a navigation system", "Checking tire pressure before leaving", "Wearing a seat belt", "Stopping at a red light"],
    answer: 0,
    explanation: "Using a navigation system is one of the distractions listed in the handbook."
  },
  {
    section: "Seat Belts and Child Safety",
    question: "Who must wear seat belts in a motor vehicle manufactured with seat belts?",
    choices: ["The driver and all passengers", "Only the driver", "Only front-seat passengers", "Only passengers under 16"],
    answer: 0,
    explanation: "The handbook says the driver and all passengers must have seat belts properly fastened while the vehicle is moving forward."
  },
  {
    section: "Seat Belts and Child Safety",
    question: "When must a child under age 8 and less than 80 pounds be secured in a child passenger restraint system?",
    choices: ["Whenever being transported", "Only on interstates", "Only during bad weather", "Only in commercial vehicles"],
    answer: 0,
    explanation: "A child under age 8 and weighing less than 80 pounds must be properly secured in a weight-appropriate child restraint system."
  },
  {
    section: "Seat Belts and Child Safety",
    question: "Where should children age 12 and under generally ride?",
    choices: ["Buckled up in a rear seat", "Unbuckled in the front seat", "In the cargo area", "In the driver's lap"],
    answer: 0,
    explanation: "The handbook's child safety points say children age 12 and under should ride buckled up in a rear seat."
  },
  {
    section: "Pedestrians",
    question: "A signal changes while a pedestrian is still in the street. What must drivers do?",
    choices: ["Allow the pedestrian to finish crossing safely", "Proceed if turning traffic still has a green arrow", "Honk once and pass behind the pedestrian", "Stop only if the pedestrian is in a marked crosswalk"],
    answer: 0,
    explanation: "Drivers must allow pedestrians already in the street to finish crossing safely."
  },
  {
    section: "Pedestrians",
    question: "At an unsignalized intersection, how may a blind pedestrian be identified?",
    choices: ["By a white cane, red-tipped white cane, or guide dog", "By a yellow hand flag, reflective vest, or whistle", "By a blue marker, raised hand, or marked crossing card", "By any cane, bicycle helmet, or flashing warning light"],
    answer: 0,
    explanation: "The law gives special consideration to blind pedestrians using a white cane, a white cane with a red tip, or a guide dog."
  },
  {
    section: "Farm Equipment",
    question: "When is it advisable to pass slow farm equipment on a public road?",
    choices: ["When the operator pulls off at a practical place for traffic", "When the equipment is signaling left but slowing down", "When the road is straight but marked as a no-passing zone", "When you can use part of the shoulder to get around it"],
    answer: 0,
    explanation: "The handbook says the only advisable time to pass is when the equipment operator moves off the road to allow traffic to pass."
  },
  {
    section: "Funeral Processions",
    question: "How should vehicles in a funeral procession be lighted?",
    choices: ["Headlights on, with hazard signals on if equipped", "High beams on, with brake lights tapped often", "Parking lights on, with turn signals disabled", "Interior lights on, with headlights optional"],
    answer: 0,
    explanation: "Every vehicle in a funeral procession must have headlights on and hazard warning signals on if equipped."
  },
  {
    section: "City Driving",
    question: "In city traffic, you need to turn but are in the wrong lane. What should you do?",
    choices: ["Continue to the next intersection and turn there", "Stop until drivers make space for your lane change", "Turn from your lane after signaling for 100 feet", "Back up slowly until you reach the correct lane"],
    answer: 0,
    explanation: "The handbook says to continue to the next intersection and turn there if you are not in the proper lane."
  },
  {
    section: "Communicating",
    question: "Which planned movement requires signaling ahead of time?",
    choices: ["Slowing, stopping, turning, changing lanes, or leaving the curb", "Only turning, changing lanes, or entering a freeway ramp", "Only stopping suddenly, backing, or entering a driveway", "Only turning left, passing, or crossing a railroad track"],
    answer: 0,
    explanation: "The handbook says to signal anytime you plan to slow down, stop, turn, change lanes, or pull away from the curb."
  },
  {
    section: "Communicating",
    question: "How far in advance should you signal before turning or stopping when the speed limit is under 45 mph?",
    choices: ["At least the last 100 feet", "At least the last 10 feet", "At least one mile", "Only after entering the turn"],
    answer: 0,
    explanation: "Signal at least the last 100 feet before turning or stopping when the speed limit is under 45 mph."
  },
  {
    section: "Communicating",
    question: "How far in advance should you signal before turning when the speed limit is 45 mph or more?",
    choices: ["At least the last 200 feet", "At least the last 20 feet", "At least the last 50 feet", "Only while turning"],
    answer: 0,
    explanation: "If the speed limit is 45 mph or more, signal at least the last 200 feet before turning."
  },
  {
    section: "Night Driving",
    question: "At night, an approaching driver leaves bright headlights on. What should you do?",
    choices: ["Blink high beams once, then keep your lights on low beam", "Keep high beams on until the other vehicle passes you", "Turn headlights off briefly and use the road edge only", "Move toward the center line to increase visibility"],
    answer: 0,
    explanation: "The handbook says you can blink high beams once as a reminder, but keep your lights on low beam if the other driver still does not dim."
  },
  {
    section: "Night Driving",
    question: "Why should night speed be limited by how far you can see ahead?",
    choices: ["You need enough visible distance to stop safely", "Headlights use less power at lower speeds", "Low beams are required only below 45 mph", "Nighttime speed limits are always lower"],
    answer: 0,
    explanation: "The handbook warns never to drive at a speed where you cannot stop within the distance visible ahead."
  },
  {
    section: "Weather",
    question: "When is pavement especially dangerous after rain begins?",
    choices: ["During the first 10 to 15 minutes", "Only after one full day", "Only after the road dries", "Only before rain starts"],
    answer: 0,
    explanation: "For the first 10 to 15 minutes, rain mixes with oil, dirt, dust, and rubber to create a slick surface."
  },
  {
    section: "Weather",
    question: "If fog makes visibility extremely poor, what should you do?",
    choices: ["Pull far off the road, stop, secure the vehicle, and use flashers", "Stop in the lane, keep low beams on, and wait for traffic to pass", "Use high beams, follow tail lights, and continue at low speed", "Drive on the shoulder until the next marked intersection"],
    answer: 0,
    explanation: "The handbook says to pull far off the roadway, stop, secure the vehicle, and turn on emergency flashers."
  },
  {
    section: "Railroad Crossings",
    question: "After a train clears a crossing, when should you proceed?",
    choices: ["After the red lights stop flashing and the way is safe", "As soon as the last train car passes your lane", "When the gate on your side begins to rise slightly", "Immediately if the vehicle behind you sounds a horn"],
    answer: 0,
    explanation: "The handbook says to wait until the red lights have stopped flashing before moving ahead."
  },
  {
    section: "Signals and Signs",
    question: "What does a solid red arrow mean?",
    choices: ["Turning traffic must stop", "Turns are protected", "Turns are allowed after yielding", "The signal is malfunctioning"],
    answer: 0,
    explanation: "A red arrow means turning traffic must stop."
  },
  {
    section: "Signals and Signs",
    question: "At a yield sign, what determines whether you must stop?",
    choices: ["Whether stopping is needed to avoid interfering with traffic", "Whether the sign is posted within 50 feet of a crosswalk", "Whether another driver sounds a horn or flashes lights", "Whether your vehicle is turning left instead of right"],
    answer: 0,
    explanation: "A yield sign requires drivers to slow down and yield; stopping depends on intersecting traffic."
  },
  {
    section: "Signals and Signs",
    question: "What does a pennant-shaped yellow warning sign mark?",
    choices: ["The start of a no-passing zone", "The edge of a hospital zone", "The entrance to a parking area", "The location of a rail phone"],
    answer: 0,
    explanation: "A pennant-shaped yellow warning sign emphasizes the beginning of a no-passing zone."
  },
  {
    section: "Vehicle Responsibilities",
    question: "Where must the registration card be kept?",
    choices: ["In the vehicle at all times", "At home only", "With the insurance agent", "At the county courthouse"],
    answer: 0,
    explanation: "The registration card must be kept in the vehicle and available to show law enforcement on request."
  },
  {
    section: "Vehicle Responsibilities",
    question: "What should you do with a valid license plate before canceling liability insurance?",
    choices: ["Surrender the license plate", "Keep it as a souvenir", "Transfer it to any vehicle", "Throw it away"],
    answer: 0,
    explanation: "To avoid a fine or penalty, surrender the vehicle's valid license plate before terminating or canceling liability insurance."
  }
];

questionBank.push(...freshQuestionSet);

let questions = buildQuestionSet({ freshOnly: true });

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

function shuffleItems(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function getSeenQuestions() {
  try {
    return JSON.parse(localStorage.getItem(SEEN_QUESTIONS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveSeenQuestions(items) {
  const seen = new Set(getSeenQuestions());
  items.forEach((item) => seen.add(item.question));

  if (seen.size >= questionBank.length) {
    localStorage.removeItem(SEEN_QUESTIONS_KEY);
    return;
  }

  localStorage.setItem(SEEN_QUESTIONS_KEY, JSON.stringify([...seen]));
}

function buildQuestionSet(options = {}) {
  const source = options.freshOnly ? freshQuestionSet : questionBank;
  const seen = new Set(getSeenQuestions());
  const unseen = source.filter((item) => !seen.has(item.question));
  const recycled = source.filter((item) => seen.has(item.question));
  const selected = [
    ...shuffleItems(unseen),
    ...shuffleItems(recycled)
  ].slice(0, Math.min(QUESTION_COUNT, source.length));

  saveSeenQuestions(selected);
  return selected;
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
