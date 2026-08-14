const SKILLS = [
  'C++',
  'Java',
  'Python',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Git',
  'Linux',
]

export default function Skills() {
  return (
    <ul className="skill-list" aria-label="Technical skills">
      {SKILLS.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  )
}