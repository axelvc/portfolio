import Icon from './Icon/Icon'
import Section from './Section'

const projectsList = [
  {
    title: 'This web',
    technologies: ['react'],
  },
  {
    title: 'Mini Translator',
    link: '#mini_translator',
    description: 'Web extension to translate selected or written text',
    technologies: ['vue'],
  },
  {
    title: 'Typing Test',
    link: '#typing_test',
    description: 'Measure your typing speed',
    technologies: ['react'],
  },
  {
    title: 'Sudoku Game',
    link: '#sudoku_game',
    technologies: ['react'],
  },
]

export default function Projects({ className }: { className?: string }) {
  return (
    <Section title="projects" className={className}>
      <div className="group">
        {projectsList.map(({ title, link, description, technologies }) => (
          <article
            key={title}
            className="relative grid gap-2 mt-2 p-6 rounded-sm bg-green-200 transition duration-300 ease-out group-hover:opacity-50 hover:!opacity-100"
          >
            <div className="flex items-center">
              <small className={`text-xs capitalize`}>{technologies.join(', ')}</small>

              {link && (
                <>
                  <Icon name="external" size="sm" className="ml-auto" />
                  <a href={link} className="absolute inset-0" aria-label={title} />
                </>
              )}
            </div>

            <h3 className="text-green-600 font-medium capitalize">{title}</h3>

            {description && <p className="text-sm">{description}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}
