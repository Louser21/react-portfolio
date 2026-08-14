import doodleDash from '../assets/images/doodle-dash.png'
import intellidce from '../assets/images/idce.png'
import aptsms from '../assets/images/aptsms.png'
import technozion from '../assets/images/tz.jpeg'

export const projects = [
  {
    id: 'doodle-dash',
    index: '01',
    title: 'Doodle Dash',
    image: doodleDash,
    role: 'Game Developer',
    year: '2025',
    readTime: '4 min read',
    description:
      'Built a fast-paced browser game with responsive controls, score tracking, and an arcade-style layout focused on quick replayability.',
    summary:
      'An arcade-inspired browser game with simple controls, scoring, and polished visuals.',
    tech: ['JavaScript', 'Canvas', 'Responsive UI'],
    highlights: [
      'Responsive gameplay tuned for keyboard and touch input',
      'Score loop designed for quick restart and replay',
      'Lightweight UI structure that keeps the game focused and readable',
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Doodle Dash is a browser-based arcade project built around short, repeatable runs. The goal was to keep the interaction simple while still making the game feel responsive and polished across screen sizes.',
      },
      {
        heading: 'How it was built',
        body: 'The project uses a lightweight front-end approach with React for structure and JavaScript for interaction and state updates. The focus was on keeping the game loop easy to understand and quick to iterate on.',
      },
      {
        heading: 'Gameplay loop',
        body: 'The main loop is built around quick input, score accumulation, and instant restartability. That makes it easy to test, easy to play, and forgiving enough for repeated runs without extra friction.',
      },
    ],
  },
  {
    id: 'intellidce',
    index: '02',
    title: 'IntelliDCE',
    image: intellidce,
    role: 'AI / Compiler Research',
    year: '2025',
    readTime: '5 min read',
    description:
      'Designed an AI-assisted compiler optimization prototype that uses GraphSAGE to detect dead code from compiler intermediate representation.',
    summary:
      'Research-oriented prototype applying graph learning to modern compiler optimizations.',
    tech: ['GraphSAGE', 'Compiler IR', 'Python'],
    highlights: [
      'Models compiler intermediate representation as a graph for learning',
      'GraphSAGE embeddings classify statements as live or dead',
      'Proof-of-concept cut — measurable redundant instruction detection',
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Dead code elimination is a classic compiler pass, but it is heuristic-heavy. IntelliDCE explores whether a graph neural network can learn the same judgment: given a control-flow graph of compiler intermediate representation, decide which statements can never affect the output.',
      },
      {
        heading: 'Graph representation',
        body: 'Each function is converted into a graph where basic blocks are nodes and control-flow transfers are edges. Node features encode opcode, operand types, and use-def counts, giving the model a rich signal without losing the structure the optimizer relies on.',
      },
      {
        heading: 'Results & next steps',
        body: 'The prototype successfully flags clearly redundant instructions on the test IR set. The natural next step is training on a larger corpus and validating that removed statements never change observable behaviour across more complex control flow.',
      },
    ],
  },
  {
    id: 'aptsms-website',
    index: '03',
    title: 'APTSMS Website',
    image: aptsms,
    role: 'Front-end Engineer',
    year: '2024',
    readTime: '3 min read',
    description:
      'Developed an official portal with reusable React components, Vite tooling, and a structured CSS system for maintainable delivery.',
    summary:
      'Official public portal built entirely with reusable React components and a strict CSS system.',
    tech: ['React', 'Vite', 'Reusable UI'],
    highlights: [
      'Component library of buttons, cards, forms, and layout primitives',
      'Design tokens centralised so the whole site re-themes in one place',
      'Vite tooling for fast local development and small production bundles',
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'APTSMS is the official student management portal. The website needed to be reliable, fast, and easy to maintain across many releases — which pushed the whole build toward strong component reuse rather than one-off pages.',
      },
      {
        heading: 'Design system approach',
        body: 'Every visual pattern is a reusable React component backed by CSS custom properties. Colours, spacing, and radii are tokens, so a brand tweak is a one-line change instead of a site-wide find-and-replace.',
      },
      {
        heading: 'Delivery & tooling',
        body: 'Vite keeps the local loop instant and the production output lean. Because the CSS system is strict and the components are self-contained, new pages are assembled rather than written, which has kept maintenance effort low.',
      },
    ],
  },
  {
    id: 'technozion-2025',
    index: '04',
    title: 'Technozion 2025',
    image: technozion,
    role: 'Full Stack Developer',
    year: '2025',
    readTime: '4 min read',
    description:
      'Built event registration, authentication, payment verification, and responsive dashboards for a campus festival workflow using the MERN stack.',
    summary:
      'Full-stack event platform handling registrations and payments end to end for a large campus festival.',
    tech: ['MERN', 'Authentication', 'Dashboards'],
    highlights: [
      'End-to-end registration flow used by thousands of attendees',
      'Role-based dashboards for core team, coordinators, and finance',
      'Verification pipeline pairing manual checks with automated payments',
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Technozion is the annual techno-management festival of NIT Warangal. The platform I built handles the complete attendee lifecycle: creating an account, registering for events, paying fees, and receiving verification before entry to festival grounds.',
      },
      {
        heading: 'How it was built',
        body: 'The stack is MERN — MongoDB for attendee and event records, Express for the REST API, React for the dashboards, and Node.js as the runtime. Authentication uses signed sessions so role-based routes can be guarded server-side as well as in the UI.',
      },
      {
        heading: 'Verification workflow',
        body: 'The trickiest part was payment verification. The dashboard gives the finance team a queue of pending transactions, each with its own audit trail, so confirmations can be actioned quickly without losing a record of who did what and when.',
      },
    ],
  },
]