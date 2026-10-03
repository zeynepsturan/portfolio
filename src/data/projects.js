import { projectIcons as icon, projectScreenshots as shot } from "./assets";

// label = klasördeki ve pencere başlığındaki isim
// title = detay sayfasındaki başlık
export const PROJECTS = [
  {
    id: "sprinkler",
    label: "Sprinkler",
    icon: icon.sprinkler,
    title: "Sprinkler",
    description:
      "A map-based environmental volunteering mobile app and website built from scratch with React Native. Integrates a backend API and interactive Leaflet maps to track tree-watering activities, with UI, state management, and end-to-end API communication for a production-ready experience.",
    tech: ["React", "React Native", "Node.js", "Express", "MongoDB", "Prisma", "Leaflet"],
    github: "https://github.com/zeynepsturan/Sprinkler-app",
    demo: "#",
    images: shot.sprinkler,
    details:
      "Independently developed the entire mobile application from scratch in React Native, integrating with a teammate-built backend API. Implemented an interactive Leaflet-based map for locating and tracking tree watering activity, built all UI components and screens, managed application state, and handled full API communication and data synchronization. Delivered a complete, production-ready mobile experience, from architecture to polished UI, enabling users to discover trees, log watering, and engage in community-driven environmental efforts.",
  },
  {
    id: "welldone",
    label: "Welldone",
    icon: icon.welldone,
    title: "Welldone",
    description:
      "Contributing to an EU transnational project that embeds wheelchair skills training into university curricula. Combining software development and project coordination to promote inclusive mobility, knowledge exchange, and digital dissemination across Europe.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Capacitor", "Docker"],
    github: "https://github.com/zeynepsturan/welldone",
    demo: "#",
    images: shot.welldone,
    details:"A comprehensive full-stack content management system and video training platform using React, Node.js, Express, and MongoDB. Implemented automated YouTube playlist synchronization, a custom rating and commenting system, and an advanced analytics dashboard with IP-based geographic tracking. Secured the RESTful API with JWT authentication and role-based access control, while utilizing Capacitor for Progressive Web App (PWA) mobile support and Docker for seamless containerized deployment."
  },
  {
    id: "skatezone",
    label: "SkateZone",
    icon: icon.skatezone,
    title: "Skate Zone",
    description:
      "A map-based platform for discovering skateable places, including skateparks, rails, and downhill spots. Skaters can vote on locations, share community feedback, and share selected spots through Google Maps or Apple Maps.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/zeynepsturan/SkateZone",
    demo: "#",
    images: shot.skateZone,
    imageLayout: "stack",
    details:
      "SkateZone maps locations that skateboarders can ride, from dedicated skateparks to rails and downhill routes. When adding a new spot, users can upload a photo and specify the surface type and lighting conditions. Users can vote on mapped locations, helping the community surface useful skate spots and share feedback with other skaters. Skaters will also be able to share a selected spot through Google Maps or Apple Maps.",
  },
  {
    id: "darkfactory",
    label: "Dark Factory",
    icon: icon.darkFactory,
    title: "Dark Factory",
    description:
      "A real-time digital twin of a fully automated, lights-out industrial facility. ESP32 devices collect ambient sensor data and machine telemetry for a FastAPI hub, which maintains factory state, runs predictive maintenance analysis, and streams live updates to a React dashboard.",
    tech: ["Python", "FastAPI", "SQLite", "React", "JavaScript", "WebSocket", "C++", "ESP32", "Ollama", "Qwen 2.5"],
    github: "#",
    demo: "#",
    images: shot.darkFactory,
    imageLayout: "stack",
    details:
      "Three ESP32 modules collect environmental readings and compressor telemetry. A FastAPI hub receives sensor data over HTTP, persists it in SQLite, updates an in-memory digital twin, forwards snapshots to a Raspberry Pi, and broadcasts live dashboard updates over WebSocket. The Pi runs a local Qwen 2.5 model through Ollama to analyze sensor history for predictive maintenance, report risks, and recommend actuator commands. The simulated compressor follows a five-state degradation model from NORMAL through HEATING, DEGRADING, and CRITICAL to FAILURE. The React dashboard supports both a browser-only demo mode and a live backend mode, with telemetry, alarms, machine controls, and actuator status. Hardware commands are polled and acknowledged by the ESP32; mist-maker commands are blocked while a gas or CO2 alarm is active. The system demonstrates embedded sensing, API design, digital twins, real-time dashboards, and local LLM integration.",
  },
  {
    id: "graymarket",
    label: "The Gray Market",
    icon: icon.graymarket,
    title: "GrayMarket",
    description:
      "A real-time, WebSocket-powered market simulation and chat app built while learning Socket.io. Prices update live for every connected client, and users can trade items and chat without page refreshes or polling. Its fan-made Arcane-inspired theme places the exchange in Zaun's undercity.",
    tech: ["Node.js", "Express", "Socket.io", "React", "socket.io-client", "Tailwind CSS"],
    github: "https://github.com/zeynepsturan/graymarket-websocket",
    demo: "#",
    images: shot.graymarket,
    imageLayout: "stack",
    details:
      "A single Node.js and Express HTTP server hosts both the app and its Socket.io server. On connection, clients receive chat history and current market prices; the server then broadcasts randomized price changes every second. Users can send messages that are instantly broadcast to the market, and BUY/SELL actions post automatic trade notices to chat. Each socket session receives a random chat color, and the interface shows live connection status. All prices and chat history are held in server memory and reset on restart; there is no authentication, and users provide their own callsigns. Built to practice WebSocket handshakes, named events, broadcasts, and server-pushed updates. MIT licensed.",
  },
  {
    id: "visicalc",
    label: "VisiCalc Clone",
    icon: icon.visicalc,
    title: "Visicalc Terminal Clone",
    description:
      "A retro-inspired, terminal-based clone of the legendary VisiCalc spreadsheet, rebuilt in C++ with modern OOP design",
    tech: ["C++"],
    github: "https://github.com/zeynepsturan/VisiCalc-Terminal-Clone",
    demo: "#",
    image: shot.visicalc,
    details:
      "Developed a terminal-based VisiCalc clone in modern C++ using object-oriented programming principles. Implemented core spreadsheet functionalities including cell editing, formula calculations, row and column operations, and file saving/loading. Optimized for performance on command-line interfaces, providing users with a classic spreadsheet experience while maintaining efficient memory usage and responsive interactions.",
  },
  {
    id: "wordle",
    label: "WORDLE Clone",
    icon: icon.wordle,
    title: "WORDLE Terminal Clone",
    description:
      "a WORDLE clone runs on terminal with both English and Turkish gameplay options",
    tech: ["C"],
    github: "https://github.com/zeynepsturan/WORDLE-clone",
    demo: "#",
    image: shot.wordle,
    details:
      "Developed a terminal-based WORDLE clone in C, supporting both English and Turkish languages with full Turkish character support (ç, ğ, ş, ü, ö, ı). Implemented core game mechanics including word selection, guess validation, and color-coded feedback for correct and misplaced letters. Designed the game for an interactive command-line experience with intuitive input handling and efficient memory usage, providing players with a seamless and engaging puzzle challenge.",
  },
  {
    id: "python",
    label: "30 Days Of Python TR Translation",
    icon: icon.python,
    title: "Python Course Translation",
    description:
      "Translated the GitHub project “30 Days of Python” into Turkish aiming to create open-source educational content for the Turkish community.",
    tech: ["Python", "Github"],
    github: "https://github.com/zeynepsturan/30-Days-Of-Python-TR",
    demo: "#",
    image: shot.python,
    details:
      "Maintained a GitHub project translating the “30 Days of Python” series into Turkish, expanding learning resources and making Python education accessible to Turkishspeaking learners worldwide. Added context-relevant examples and explanations to enhance understanding and usability. Demonstrated skills in Python programming, technical writing, localization, and creating open-source educational content for the community.",
  },
  {
    id: "portfolio",
    label: "Portfolio Website",
    icon: icon.portfolio,
    title: "Portfolio Website",
    description: "This is literally the website",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/zeynepsturan/30-Days-Of-Python-TR",
    demo: "#",
    image: shot.portfolio,
    details:
      "Developed this website to show my portfolio in a fun and interactive way :)",
  },
  {
    id: "cse101",
    label: "CSE101 Term Project",
    icon: icon.cse101,
    title: "CSE101 Term Project",
    description:
      "Content management system for portfolio websites with drag-and-drop builder and customizable themes.",
    tech: ["C", "Ardunio"],
    github: "https://github.com/zeynepsturan/CSE101-TERM-PROJECT",
    demo: "#",
    image: shot.cse101,
    details:
      'Developed and integrated a memory game, "Recall The Matrix," for our group project using three Arduino Uno microcontrollers and an 8x8 Matrix display. Implemented core game mechanics: generating a temporary random number matrix for memorization and taking player input via a remote controller. Contributed to the full project lifecycle, including research, software development, hardware setup, report documentation , debugging, and final testing for various situations.',
  },
  {
    id: "cse241",
    label: "GTU CSE241 Complete",
    icon: icon.cse241,
    title: "GTU CSE241 Complete",
    description:
      "GTU CSE241 Object-Oriented Programming course repository for Spring 2025, featuring coursework programmed in C++.",
    tech: ["C++", "Object-Oriented Programming"],
    github: "https://github.com/zeynepsturan/GTU-CSE-241-COMPLETE",
    demo: "#",
    details: [
      "The repository collects the course's C++ programming assignments and labs:",
      "Assignment 1 - Guessing Encrypted Words Game",
      "Assignment 2 - Implementing a Sparse Matrix and its Operations",
      "Assignment 3 - Building a Word String Class with Dynamic Memory Management",
      "Assignment 4 - Simulating A Robot War With Different Robot Types and Inheritance",
      "Assignment 5 - Generic Catalog Management and Query System",
      "Assignment 6 - Simulating a Media Dataset and Player/Viewer System Using the Observer Pattern",
      "Lab 1 - Dice Roll Game",
      "Lab 2 - Duello Simulation/Big Integer Addition",
      "Lab 3 - Hot Dog Stand Class/Suitor Elimination with Vectors",
      "Lab 4 - Vector2D Dot Product/Integer Indexing",
      "Lab 5 - Polynomial Arithmetic/Dynamic Student Class Management",
      "Lab 6 - DynamicStringArray Emulation/Input Authentication",
      "Lab 7 - 2D Predator-Prey Grid Simulation with Polymorphic Organisms",
      "Lab 8 - Generic Set and Heterogeneous Pair Implementations with Class Templates",
      "Lab 9 - Exception Handling with Dynamic Arrays, Recursive Stack Unwinding, and Template Stack",
    ].join("\n"),
  },
  {
    id: "cse102",
    label: "GTU CSE102 Assignments",
    icon: icon.cse102,
    title: "GTU CSE102 Assignments (2023-24)",
    description:
      "A collection of C programming assignments from GTU CSE102 (2023-24), covering encryption, simple AI, games, databases, statistics, searching algorithms, and recursion.",
    tech: ["C"],
    github: "https://github.com/zeynepsturan/GTU-CSE102-ASSIGNMENTS",
    demo: "#",
    details: [
      "The repository collects the course's C programming assignments:",
      "Assignment 1 - Word Encryption/Decryption",
      "Assignment 2 - Simple AI Model",
      "Assignment 3 - 2D Puzzle Game",
      "Assignment 4 - College Database",
      "Assignment 5 - Daily News",
      "Assignment 6 - Histogram and Averages",
      "Assignment 7 - Mancala Game",
      "Assignment 8 - Searching Algorithms",
      "Assignment 9 - 2D Botanist Game",
      "Assignment 11 - Three Recursive Examples",
      "Assignment 13 - Database with Linked Lists",
    ].join("\n"),
  },
];

export const getProject = (id) => PROJECTS.find((p) => p.id === id);
