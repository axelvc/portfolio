import data from '/public/data.json'
import Section from '/components/Section'
import Icon from '/components/Icon/Icon'

export default function Projects({ className }: { className?: string }) {
  return (
    <Section title="projects" className={className}>
      <div className="group">
        {data.projects.map(({ title, link, code, description, technologies }) => (
          <article
            key={title}
            className="relative mt-2 p-6 rounded-sm bg-green-200 transition duration-300 ease-out group-hover:opacity-50 hover:!opacity-100"
          >
            {code && (
              <a
                href={code}
                title="Code"
                target="_blank"
                rel="noreferrer"
                className="z-10 absolute top-6 right-6 grid place-items-center h-8 w-8 cursor-pointer rounded-sm transition-colors hover:bg-green-300 hover:text-green-600"
              >
                <Icon name="code" size="sm" />
              </a>
            )}
            <small className="text-xs capitalize">{technologies.join(', ')}</small>
            <h3 className="my-2 text-green-600 font-medium capitalize">{title}</h3>

            {description && <p className="text-sm">{description}</p>}
            {link && <a href={link} title={title} target="blank" className="absolute inset-0" aria-label={title} />}
          </article>
        ))}
      </div>
    </Section>
  )
}
