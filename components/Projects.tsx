import data from '/public/data.json'
import Section from '/components/Section'
import Icon from '/components/Icon/Icon'
import MagneticLink from '/components/MagneticLink'
import useCursor from '/hooks/useCursor'

export default function Projects({ className }: { className?: string }) {
  const { cursor } = useCursor()

  function hoverProject() {
    cursor?.dot.classList.add('opacity-80')
  }

  function leaveProject() {
    cursor?.dot.classList.remove('opacity-80')
  }

  function hoverProjectLink() {
    if (!cursor) return

    cursor.text.textContent = 'See'
    cursor.dot.classList.add('scale-[3]')
    cursor.text.classList.add('opacity-100', 'scale-100')
  }

  function leaveProjectLink() {
    if (!cursor) return

    cursor.dot.classList.remove('scale-[3]')
    cursor.text.classList.remove('opacity-100', 'scale-100')
  }

  return (
    <Section title="projects" className={className}>
      <div className="group">
        {data.projects.map(({ title, link, code, description, technologies }) => (
          <article
            key={title}
            onMouseEnter={hoverProject}
            onMouseLeave={leaveProject}
            className="relative mt-2 p-6 rounded-sm bg-gray-100 dark:bg-brown-800 transition duration-300 ease-out group-hover:opacity-50 hover:!opacity-100"
          >
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
                aria-label={title}
                onMouseEnter={hoverProjectLink}
                onMouseLeave={leaveProjectLink}
              />
            )}
            {code && (
              <MagneticLink
                href={code}
                title="Code"
                target="_blank"
                rel="noreferrer"
                className="z-10 absolute top-6 right-6 grid place-items-center h-8 w-8 transition-colors hover:text-gray-50 dark:hover:text-brown-800"
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
