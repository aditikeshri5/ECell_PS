// Central data source for all problem statements.
// Keeping this separate from UI components means new challenges can be
// added or edited without touching a single line of JSX.

export const domains = [
  "AI / ML",
  "Healthcare",
  "Agriculture",
  "Environment",
  "Smart Cities",
  "Education",
  "Cybersecurity",
];

export const difficulties = ["Moderate", "Hard", "Advanced"];

const problemStatements = [
  {
    id: "PS-01",
    title: "AI Misinformation Radar",
    domain: "AI / ML",
    difficulty: "Hard",
    shortDescription:
      "Detect and flag fast-spreading misinformation across regional-language social posts before it goes viral.",
    problemStatement:
      "Misinformation spreads fastest in the first few hours of a post going live, and regional-language content is the least covered by existing fact-checking tools. Build a system that ingests text posts, classifies the likelihood of misinformation, and traces how a claim mutates as it spreads across platforms.",
    whyItMatters:
      "Low-resource language misinformation drives real-world harm — from health scares to communal tension — yet almost no moderation tooling covers Hindi, Bengali, Tamil and other regional languages at scale.",
    expectedSolution:
      "A web dashboard that scores incoming text for misinformation risk, clusters near-duplicate claims, and visualizes how a rumor has spread and mutated over time.",
    technologies: ["AI/ML", "Web", "Data Analytics", "APIs"],
    expectedImpact:
      "Faster identification of harmful claims gives fact-checkers and platform moderators a head start instead of reacting after a rumor has already gone viral.",
    constraints:
      "Must work with limited labeled data for regional languages; avoid over-flagging legitimate opinion or satire as misinformation.",
  },
  {
    id: "PS-02",
    title: "Deepfake & Synthetic Media Detector",
    domain: "AI / ML",
    difficulty: "Advanced",
    shortDescription:
      "A lightweight browser tool that flags manipulated video and audio in real time as users browse.",
    problemStatement:
      "Deepfake generation tools have become trivially easy to use, while detection remains locked behind slow, research-grade models. Build a browser extension or web tool that analyzes video/audio clips for signs of synthetic manipulation and surfaces a confidence score to the viewer.",
    whyItMatters:
      "Synthetic media is increasingly used for scams, political manipulation, and harassment. Everyday users have no accessible way to check what they're watching.",
    expectedSolution:
      "A browser extension or uploader tool that runs a manipulation-detection model on short clips and returns an easy-to-read authenticity score with supporting evidence (frame artifacts, audio-lip mismatch, etc.).",
    technologies: ["AI/ML", "Web", "Cloud"],
    expectedImpact:
      "Gives everyday internet users a first line of defense against synthetic media scams and misinformation.",
    constraints:
      "Model inference must stay lightweight enough to run near real-time; false positives on legitimately edited content should be minimized.",
  },
  {
    id: "PS-03",
    title: "Intelligent Document Digitizer",
    domain: "AI / ML",
    difficulty: "Moderate",
    shortDescription:
      "Turn messy scanned forms, receipts and handwritten notes into clean, structured, searchable data.",
    problemStatement:
      "Government offices, small businesses and students still rely on paper forms, receipts and handwritten notes that never make it into structured digital systems. Build a tool that scans/uploads such documents and extracts structured, editable data.",
    whyItMatters:
      "Manual data entry is slow and error-prone, and it locks valuable information away in unsearchable paper or images.",
    expectedSolution:
      "A web app where users upload an image of a document and receive structured, exportable data (CSV/JSON) with an editable review step for corrections.",
    technologies: ["AI/ML", "Web", "APIs"],
    expectedImpact:
      "Cuts manual data-entry time drastically for small offices, students, and administrative teams handling paper records.",
    constraints:
      "Handwriting recognition accuracy will vary; the tool should let humans quickly review and correct low-confidence extractions rather than fail silently.",
  },
  {
    id: "PS-04",
    title: "Symptom-to-Specialist Navigator",
    domain: "Healthcare",
    difficulty: "Hard",
    shortDescription:
      "Help patients describe symptoms in plain language and get routed to the right specialist or department.",
    problemStatement:
      "Patients, especially in smaller towns, often don't know which type of doctor or hospital department to approach for their symptoms, leading to wasted time and delayed care. Build a guided triage assistant that takes plain-language symptom descriptions and suggests the appropriate specialization and urgency level.",
    whyItMatters:
      "Correct first-visit routing saves time, reduces unnecessary hospital load, and can be critical in urgent cases.",
    expectedSolution:
      "A conversational web app that asks clarifying questions, estimates urgency, and recommends the relevant medical specialty along with general next-step guidance.",
    technologies: ["AI/ML", "Web", "APIs"],
    expectedImpact:
      "Reduces misdirected hospital visits and helps patients reach appropriate care faster, particularly in underserved areas.",
    constraints:
      "Must clearly state it is not a diagnostic tool and always recommend professional consultation for anything beyond basic triage.",
  },
  {
    id: "PS-05",
    title: "Medicine Availability Tracker",
    domain: "Healthcare",
    difficulty: "Moderate",
    shortDescription:
      "A real-time map of which nearby pharmacies actually have a specific medicine in stock.",
    problemStatement:
      "Patients frequently visit multiple pharmacies to find a specific medicine, especially during shortages. Build a platform where pharmacies can update stock status and patients can search for medicine availability nearby.",
    whyItMatters:
      "Time lost searching for medicine can be critical for patients with urgent or chronic conditions, and shortages are hard to track informally.",
    expectedSolution:
      "A web app with a searchable medicine index, a map view of nearby pharmacies, and a simple stock-update interface for pharmacy staff.",
    technologies: ["Web", "Maps", "APIs"],
    expectedImpact:
      "Saves patient time and travel, and gives early visibility into local medicine shortages.",
    constraints:
      "Relies on pharmacies keeping stock data updated; needs a simple enough interface that busy pharmacy staff will actually use it.",
  },
  {
    id: "PS-06",
    title: "Emergency Resource Coordinator",
    domain: "Healthcare",
    difficulty: "Advanced",
    shortDescription:
      "Match blood, oxygen, and ambulance requests to nearby donors and hospitals during emergencies.",
    problemStatement:
      "During medical emergencies and mass-casualty events, coordinating blood donors, oxygen cylinders, and ambulances happens through scattered phone calls and social media posts. Build a coordination platform that matches urgent requests to nearby verified resources in real time.",
    whyItMatters:
      "Minutes matter in emergencies; a centralized, verified matching system can save lives that are currently lost to slow, informal coordination.",
    expectedSolution:
      "A web/mobile-responsive platform where requesters post verified needs, resource holders (donors, hospitals, ambulance services) register availability, and a matching engine connects the closest viable match.",
    technologies: ["Web", "Mobile", "Maps", "Cloud"],
    expectedImpact:
      "Reduces response time for critical resource requests and creates a reusable verified-donor network for future emergencies.",
    constraints:
      "Needs safeguards against false requests and a lightweight verification step that doesn't slow down genuine emergencies.",
  },
  {
    id: "PS-07",
    title: "Smart Crop Advisory Assistant",
    domain: "Agriculture",
    difficulty: "Moderate",
    shortDescription:
      "Recommend the best crop, fertilizer and sowing window based on soil data and local weather.",
    problemStatement:
      "Small and marginal farmers often make crop and fertilizer decisions based on tradition or guesswork rather than current soil and weather data. Build an advisory tool that takes basic soil parameters and location to recommend suitable crops, fertilizer dosage, and optimal sowing windows.",
    whyItMatters:
      "Better-informed decisions directly improve yield and reduce wasted input costs for farmers operating on thin margins.",
    expectedSolution:
      "A simple web app (usable on low-end phones) where farmers enter soil test values or answer guided questions, and receive crop and fertilizer recommendations with reasoning in plain language.",
    technologies: ["AI/ML", "Web", "Data Analytics"],
    expectedImpact:
      "Improves yield predictability and reduces input waste for smallholder farms.",
    constraints:
      "Must work with incomplete or approximate data since many farmers won't have lab-grade soil test results; needs regional-language support.",
  },
  {
    id: "PS-08",
    title: "Pest & Disease Early Warning System",
    domain: "Agriculture",
    difficulty: "Hard",
    shortDescription:
      "Identify crop pests and diseases from a phone photo before an outbreak spreads across a field.",
    problemStatement:
      "By the time crop disease or pest damage is visually obvious to the naked eye, it has often already spread significantly. Build a tool that lets farmers photograph affected leaves and receive an early identification along with recommended organic and chemical treatment options.",
    whyItMatters:
      "Early detection can be the difference between a treatable patch and a lost harvest, especially for farmers without easy access to agricultural extension officers.",
    expectedSolution:
      "A mobile-friendly web app with image upload, a classification model trained on common regional crop diseases, and clear, localized treatment recommendations.",
    technologies: ["AI/ML", "Mobile", "Web"],
    expectedImpact:
      "Reduces crop loss from late-detected disease and pest outbreaks, particularly for smallholder farms.",
    constraints:
      "Model accuracy depends on photo quality and lighting; should gracefully communicate uncertainty rather than false confidence.",
  },
  {
    id: "PS-09",
    title: "Irrigation Water Optimizer",
    domain: "Agriculture",
    difficulty: "Advanced",
    shortDescription:
      "Schedule irrigation using soil moisture and weather forecasts instead of fixed routines.",
    problemStatement:
      "Many farms irrigate on a fixed schedule regardless of actual soil moisture or upcoming rainfall, wasting water in a resource-constrained system. Build a decision-support tool that combines soil moisture sensor data (or manual readings) with weather forecasts to recommend when and how much to irrigate.",
    whyItMatters:
      "Water is an increasingly scarce resource in agriculture; smarter scheduling can meaningfully cut usage without hurting yield.",
    expectedSolution:
      "A dashboard that ingests sensor or manually logged soil-moisture data plus a weather API, and outputs a simple daily irrigation recommendation with the reasoning behind it.",
    technologies: ["IoT", "AI/ML", "Data Analytics", "APIs"],
    expectedImpact:
      "Reduces water wastage on farms while maintaining or improving crop health outcomes.",
    constraints:
      "Should support both sensor-based and manual-entry workflows, since not all farms will have IoT hardware.",
  },
  {
    id: "PS-10",
    title: "Smart Waste Segregation Assistant",
    domain: "Environment",
    difficulty: "Moderate",
    shortDescription:
      "Point a phone camera at an item and instantly learn how to correctly dispose of it.",
    problemStatement:
      "Households and institutions frequently misclassify waste (recyclable vs. hazardous vs. organic), reducing the effectiveness of downstream recycling. Build a tool that identifies an item from a photo and tells the user exactly which bin it belongs in, with local disposal guidance.",
    whyItMatters:
      "Correct segregation at the source is the single biggest lever for effective recycling and waste management systems.",
    expectedSolution:
      "A web app with image classification for common waste categories, localized bin-color guidance, and a running log of a household's or campus's segregation habits.",
    technologies: ["AI/ML", "Web", "Mobile"],
    expectedImpact:
      "Improves source segregation accuracy, reducing contamination in recycling streams.",
    constraints:
      "Categories and disposal rules vary by municipality, so guidance needs to be configurable by region rather than hardcoded.",
  },
  {
    id: "PS-11",
    title: "Urban Air Quality Predictor",
    domain: "Environment",
    difficulty: "Hard",
    shortDescription:
      "Forecast hyperlocal air quality a few hours ahead so people can plan around pollution spikes.",
    problemStatement:
      "Official air quality monitoring stations are sparse, so residents rarely know how pollution will vary across their own neighborhood over the next few hours. Build a tool that combines available sensor/station data with weather and traffic patterns to produce short-term, hyperlocal AQI forecasts.",
    whyItMatters:
      "Advance warning of pollution spikes lets vulnerable groups (children, elderly, asthma patients) adjust outdoor activity timing.",
    expectedSolution:
      "A web dashboard showing a short-term AQI forecast for user-selected localities, with simple health guidance tied to the predicted severity.",
    technologies: ["AI/ML", "Data Analytics", "Maps", "APIs"],
    expectedImpact:
      "Enables proactive health decisions and adds visibility to pollution patterns underserved by sparse official monitoring.",
    constraints:
      "Forecast accuracy is limited by sparse ground-truth station coverage; the tool should communicate confidence levels transparently.",
  },
  {
    id: "PS-12",
    title: "Water Leak & Wastage Detector",
    domain: "Environment",
    difficulty: "Advanced",
    shortDescription:
      "Spot abnormal water usage patterns in a building or pipeline before they become a major leak.",
    problemStatement:
      "Undetected leaks in residential complexes, campuses and municipal pipelines waste enormous volumes of treated water over time. Build a system that analyzes water meter/flow data to detect abnormal usage patterns indicative of leaks.",
    whyItMatters:
      "Early leak detection prevents water wastage, reduces infrastructure damage, and lowers utility costs.",
    expectedSolution:
      "A dashboard that ingests flow-meter readings (real or simulated sensor data), flags anomalous continuous-flow patterns, and alerts facility managers with the likely location.",
    technologies: ["IoT", "AI/ML", "Data Analytics"],
    expectedImpact:
      "Reduces water loss and enables faster maintenance response for building and municipal water systems.",
    constraints:
      "Needs to distinguish genuine leaks from legitimate high-usage periods (e.g., irrigation, cleaning schedules) to avoid alert fatigue.",
  },
  {
    id: "PS-13",
    title: "Citizen Grievance Intelligence Platform",
    domain: "Smart Cities",
    difficulty: "Hard",
    shortDescription:
      "Automatically categorize and prioritize civic complaints so urgent issues don't get buried.",
    problemStatement:
      "Municipal grievance portals receive high volumes of complaints that are manually sorted, causing delays and inconsistent prioritization. Build a system that automatically classifies incoming complaints by department and urgency, and detects duplicate or clustered reports of the same issue.",
    whyItMatters:
      "Faster, fairer triage of civic complaints means urgent issues (like a burst pipe or open manhole) get attention before minor ones.",
    expectedSolution:
      "A web platform where citizens submit complaints with text/photo/location, an AI layer auto-tags department and severity, and a dashboard shows municipal staff a prioritized, de-duplicated queue.",
    technologies: ["AI/ML", "Web", "Maps", "Data Analytics"],
    expectedImpact:
      "Reduces resolution time for high-priority civic issues and improves transparency in how complaints are handled.",
    constraints:
      "Classification categories must map to real municipal department structures to be usable in practice.",
  },
  {
    id: "PS-14",
    title: "Real-Time Traffic Congestion Predictor",
    domain: "Smart Cities",
    difficulty: "Advanced",
    shortDescription:
      "Predict where congestion will build up in the next 30 minutes, not just where it already is.",
    problemStatement:
      "Most traffic apps show current congestion but don't forecast where it's about to form, leaving commuters reacting rather than planning ahead. Build a model that predicts short-term traffic buildup on key routes using historical patterns and live signals.",
    whyItMatters:
      "Predictive routing reduces commute time and helps distribute traffic load more evenly across a city's road network.",
    expectedSolution:
      "A web dashboard/map showing predicted congestion levels for the next 15–30 minutes on selected routes, with suggested alternate paths.",
    technologies: ["AI/ML", "Maps", "Data Analytics", "APIs"],
    expectedImpact:
      "Reduces average commute time and helps balance load across alternate routes during peak hours.",
    constraints:
      "Requires reasonably granular historical or live traffic data; predictions should communicate uncertainty rather than false precision.",
  },
  {
    id: "PS-15",
    title: "Smart Parking Finder",
    domain: "Smart Cities",
    difficulty: "Moderate",
    shortDescription:
      "Show drivers live parking spot availability nearby instead of endless circling.",
    problemStatement:
      "Drivers in dense urban areas spend significant time circling for parking, adding to congestion and emissions. Build a platform that shows live or crowd-reported parking availability near a destination.",
    whyItMatters:
      "Reducing search time for parking directly cuts congestion, fuel wastage, and driver frustration.",
    expectedSolution:
      "A web/mobile-friendly app combining sensor data (where available) with crowd-sourced reporting to show a live map of likely-available parking spots.",
    technologies: ["Web", "Mobile", "Maps", "IoT"],
    expectedImpact:
      "Cuts time spent searching for parking and reduces unnecessary congestion in high-demand areas.",
    constraints:
      "Without dedicated sensors, accuracy depends on crowd-sourced input quality — the design must make reporting effortless.",
  },
  {
    id: "PS-16",
    title: "Learning Gap Detector",
    domain: "Education",
    difficulty: "Moderate",
    shortDescription:
      "Pinpoint exactly which foundational concept a student is missing, not just which chapter.",
    problemStatement:
      "Students who fall behind are usually missing one or two foundational concepts, but standard tests only reveal overall low scores rather than the specific gap. Build an adaptive quiz tool that identifies the precise concept a student is struggling with.",
    whyItMatters:
      "Precise gap detection lets teachers and students focus remediation effort exactly where it's needed instead of re-teaching entire topics.",
    expectedSolution:
      "A web app with adaptive question sequencing that narrows down to a specific weak concept and generates a short, targeted practice set.",
    technologies: ["AI/ML", "Web", "Data Analytics"],
    expectedImpact:
      "Improves remediation efficiency and helps struggling students catch up faster with focused practice.",
    constraints:
      "Needs a well-structured concept map for each subject/topic to make gap detection meaningful rather than generic.",
  },
  {
    id: "PS-17",
    title: "Skill-to-Career Pathway Mapper",
    domain: "Education",
    difficulty: "Hard",
    shortDescription:
      "Map a student's existing skills to realistic career paths and the exact gaps to close.",
    problemStatement:
      "Students often choose career paths based on limited awareness of options rather than a clear view of how their current skills map to real job roles. Build a tool that takes a student's skills, interests and academic background and suggests concrete career pathways with the specific gaps to close for each.",
    whyItMatters:
      "Clearer visibility into realistic, personalized career pathways helps students make better-informed decisions earlier.",
    expectedSolution:
      "A web app where students input skills/interests and receive ranked career pathway suggestions, each with a gap analysis and suggested next courses or projects.",
    technologies: ["AI/ML", "Web", "Data Analytics"],
    expectedImpact:
      "Improves career decision quality and gives students a concrete, actionable roadmap instead of vague guidance.",
    constraints:
      "Career and skill-mapping data needs regular updates to stay relevant to a fast-changing job market.",
  },
  {
    id: "PS-18",
    title: "Peer Knowledge Exchange Platform",
    domain: "Education",
    difficulty: "Moderate",
    shortDescription:
      "Connect students with nearby peers who can answer a specific doubt, in minutes.",
    problemStatement:
      "Students often have a specific doubt that a peer who recently learned the same topic could answer quickly, but there's no efficient way to find that peer. Build a platform that matches doubt-askers with subject-capable peers nearby or online.",
    whyItMatters:
      "Peer-to-peer explanation is often faster and more relatable than searching generic content, and it builds a collaborative learning culture.",
    expectedSolution:
      "A web app where students post a specific doubt tagged by subject/topic, and the platform matches them with an available peer helper for a quick text or call-based exchange.",
    technologies: ["Web", "Mobile", "APIs"],
    expectedImpact:
      "Reduces time-to-resolution for academic doubts and builds a reusable peer-support network within an institution.",
    constraints:
      "Needs lightweight moderation and a fair matching system so a few peers aren't overloaded with every request.",
  },
  {
    id: "PS-19",
    title: "Personal Cyber-Risk Score Analyzer",
    domain: "Cybersecurity",
    difficulty: "Hard",
    shortDescription:
      "Give everyday users a plain-language risk score for their personal digital footprint.",
    problemStatement:
      "Most people have no clear sense of how exposed their personal accounts and data actually are until after a breach occurs. Build a tool that evaluates a user's digital hygiene (password reuse patterns, exposed breach data, account settings) and produces a clear risk score with prioritized fixes.",
    whyItMatters:
      "Proactive, understandable risk awareness helps ordinary users fix the highest-impact vulnerabilities before they're exploited.",
    expectedSolution:
      "A web app that checks user-submitted (non-sensitive) indicators like email exposure in known breach datasets and account hygiene practices, returning a risk score with a prioritized action checklist.",
    technologies: ["Web", "APIs", "Data Analytics"],
    expectedImpact:
      "Improves personal cybersecurity hygiene at scale by translating technical risk into clear, actionable steps.",
    constraints:
      "Must never ask users to submit actual passwords or sensitive credentials; should rely only on safe, aggregate indicators.",
  },
  {
    id: "PS-20",
    title: "Phishing Simulation & Awareness Trainer",
    domain: "Cybersecurity",
    difficulty: "Moderate",
    shortDescription:
      "Train employees and students to spot phishing through realistic, gamified simulations.",
    problemStatement:
      "Phishing remains one of the most common attack vectors because most awareness training is a one-time slideshow that's quickly forgotten. Build an interactive platform that simulates realistic phishing scenarios and gives immediate, specific feedback on what gave the attempt away.",
    whyItMatters:
      "Repeated, realistic practice is far more effective at building lasting phishing awareness than static training material.",
    expectedSolution:
      "A web app presenting simulated emails/messages of varying sophistication, where users identify phishing indicators and receive instant explanations, with a progress dashboard over time.",
    technologies: ["Web", "Data Analytics"],
    expectedImpact:
      "Measurably improves phishing detection rates among trained users, reducing organizational security risk.",
    constraints:
      "Simulated content must be clearly sandboxed and never resemble real, deployable phishing material.",
  },
];

export default problemStatements;
