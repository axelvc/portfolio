import Section from '/components/Section'

const description = [
  "Hello! My name is Axel. I'm a Mexican self-taught developer, big fan of all about technology, also interested in accessibility and UX/UI",
  'I love technology since I was a child, and I started to programming since 2018, I consider myself a curious person, so I constantly learning new things',
]

const skills = ['HTML', 'Javascript', 'React', 'Redux', 'Git', 'CSS', 'Typescript', 'Vue', 'Node', 'Express']

export default function About({ className }: { className?: string }) {
  return (
    <Section title="about" className={className}>
      {description.map((paragraph, i) => (
        <p key={i} className="mt-8">
          {paragraph}
        </p>
      ))}

      <p className="mt-8 mb-3">These are some technologies that i know:</p>

      <ul className="list-inside list-disc columns-2">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  )
}
