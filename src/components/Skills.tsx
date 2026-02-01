import './Skills.css'

interface SkillCategory {
  title: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: [
      'C/C++',
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'SQL',
      'Racket',
      'VBA',
      'LabVIEW SDK',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'React/React Native',
      'MERN',
      'Node.js',
      'Express.js',
      'Next.js',
      'REST API',
      'jQuery',
      'Bootstrap',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Postman',
      'Linux command line',
      'GitHub',
      'Version control (git)',
      'n8n',
      'Test automation',
      'Docker',
      'SSH',
      'UI/UX',
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-items">
              {category.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
