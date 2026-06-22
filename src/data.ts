// Single source of truth for portfolio content.
// Edit this file to update copy without touching component logic.

export const profile = {
  name: 'Natnicha Charoenpattaraparyoon',
  shortName: 'Natnicha',
  initials: 'NC',
  role: 'Software Engineer in Training',
  tagline: 'Aspiring Software Engineer & Future AI Developer',
  location: 'Thailand',
  email: 'natnicha.dev@example.com',
  linkedin: 'https://linkedin.com/in/natnicha-c',
  github: 'https://github.com/natnicha-c',
  heroIntro:
    "I build my way into software engineering — one project, one bug, one commit at a time. Currently turning a business background into real, working code.",
}

export const about = {
  story: [
    "I graduated with a Bachelor's degree in Business Administration — a path built around spreadsheets, strategy decks, and stakeholder meetings, not semicolons or stack traces.",
    "Somewhere along the way, I got curious about how the products I used were actually built. That curiosity turned into late nights with Python tutorials, then into Flask routes, then into my first deployed project. I haven't stopped since.",
    "I'm not pretending the transition is finished. I'm early, and I'm honest about that. But I've learned that consistency closes gaps that talent alone can't — so I show up, I build, and I get a little less new each week.",
    "My goal is straightforward: become a Software Engineer who ships real things, and eventually work where software meets AI — building systems that are useful, not just impressive on paper.",
  ],
  milestones: [
    { year: '2022', label: 'Graduated', detail: 'B.A. in Business Administration' },
    { year: '2024', label: 'The pivot', detail: 'First line of Python, out of pure curiosity' },
    { year: '2025', label: 'First build', detail: 'Shipped "Nicha\'s Empire" — first Flask site' },
    { year: 'Now', label: 'In motion', detail: 'Learning daily, building in public' },
  ],
}

export type Skill = {
  name: string
  level: number // 0-100
  status: 'core' | 'learning' | 'exploring'
}

export const skills: Skill[] = [
  { name: 'Python', level: 70, status: 'core' },
  { name: 'Flask', level: 60, status: 'core' },
  { name: 'HTML', level: 80, status: 'core' },
  { name: 'CSS', level: 70, status: 'core' },
  { name: 'JavaScript', level: 40, status: 'learning' },
  { name: 'Git', level: 35, status: 'learning' },
  { name: 'AI Tools', level: 65, status: 'core' },
  { name: 'Prompt Engineering', level: 70, status: 'core' },
]

export const roadmap = [
  'React & TypeScript',
  'Backend APIs & Databases',
  'Machine Learning fundamentals',
  'System Design basics',
]

export type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  status: 'live' | 'in-progress' | 'archive'
  link?: string
}

export const projects: Project[] = [
  {
    title: "Nicha's Empire",
    subtitle: 'My first Flask website',
    description:
      'A personal website built using Python Flask and HTML — the project that turned "I want to learn to code" into something real and deployed. Rough edges and all, this is where it started.',
    tags: ['Python', 'Flask', 'HTML', 'CSS'],
    status: 'live',
  },
  {
    title: 'Python Learning Journey',
    subtitle: 'Exercises & coding challenges',
    description:
      'An ongoing collection of Python exercises and coding challenges — the daily reps. Less polished than a portfolio piece, more honest about how the skill actually gets built.',
    tags: ['Python', 'Algorithms', 'Practice'],
    status: 'in-progress',
  },
  {
    title: 'Future AI Project',
    subtitle: 'Currently in development',
    description:
      'Where the AI and Prompt Engineering skills meet real code. Details are still taking shape — check back as this one comes together.',
    tags: ['AI', 'Python', 'In Development'],
    status: 'in-progress',
  },
]

export const careerGoals = [
  { year: '2026', goal: 'Build strong programming foundation', detail: 'Python, JavaScript, data structures, and real projects — depth before breadth.' },
  { year: '2027', goal: 'Become Junior Software Engineer', detail: 'First professional role, writing production code with a team.' },
  { year: '2028', goal: 'Work with AI & Automation Systems', detail: 'Specialize where software engineering and applied AI intersect.' },
  { year: 'Future', goal: 'International Software Engineer', detail: 'Build software that works — and matters — beyond one market.' },
]
