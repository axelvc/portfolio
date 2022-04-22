import Section from '/components/Section'
import data from '/public/data.json'

export default function About({ className }: { className?: string }) {
  return (
    <Section title="about" className={className}>
      {data.description.map((paragraph, i) => (
        <p key={i} className="mt-8">
          {paragraph}
        </p>
      ))}

      <p className="mt-8 mb-3">These are some technologies that I know:</p>

      <ul className="list-inside list-disc columns-2">
        {data.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  )
}
