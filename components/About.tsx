import Section from '/components/Section'

interface Props {
  data: PageData
  className?: string
}

export default function About({ data, className }: Props) {
  return (
    <Section title={data.about.title} className={className}>
      {data.about.description.map((paragraph, i) => (
        <p key={i} className="mt-8">
          {paragraph}
        </p>
      ))}

      <p className="mt-8 mb-3">{data.about.skills.text}</p>

      <ul className="list-inside list-disc columns-2">
        {data.about.skills.list.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  )
}
