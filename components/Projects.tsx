import data from '/public/data.json'
import Section from '/components/Section'
import Icon from '/components/Icon/Icon'
import MagneticLink from '/components/MagneticLink'

export default function Projects({ className }: { className?: string }) {
  return (
    <Section title="projects" className={className}>
      <div className="group">
        {data.projects.map(({ title, link, code, description, technologies }) => (
          <article
            key={title}
            data-cursor-class="opacity-80"
            className="relative mt-2 p-6 rounded-sm bg-gray-100 dark:bg-brown-800 transition duration-300 ease-out pointer-fine:group-hover:opacity-50 pointer-fine:hover:!opacity-100"
          >
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
                aria-label={title}
                data-cursor-text="See"
              />
            )}
            {code && (
              <MagneticLink
                href={code}
                title="Code"
                target="_blank"
                rel="noreferrer"
                className="z-10 absolute top-6 right-6 grid place-items-center h-8 w-8 transition-colors pointer-fine:hover:text-gray-50 dark:pointer-fine:hover:text-brown-800"
              >
                <Icon name="code" size="sm" />
              </MagneticLink>
            )}
            <small className="text-xs capitalize">{technologies.join(', ')}</small>
            <h3 className="my-2 text-green-600 dark:text-rose-200 font-medium capitalize">{title}</h3>

            {description && <p className="text-sm">{description}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}
