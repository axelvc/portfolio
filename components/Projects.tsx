import Section from '/components/Section'
import Icon from '/components/Icon/Icon'

const projectsList = [
  {
    title: 'This web',
    code: 'https://github.com/axelvc/portfolio',
    technologies: ['react'],
  },
  {
    title: 'Mini Translator',
    code: 'https://github.com/axelvc/mini_translator',
    link: 'https://chrome.google.com/webstore/detail/mini-translator/godoijpcenklboeghnkeafimbadkgiib',
    description: 'Web extension to translate selected or written text',
    technologies: ['vue'],
  },
  {
    title: 'Typing Test',
    code: 'https://github.com/axelvc/typing_test',
    link: 'https://typest.netlify.app/',
    description: 'Measure your typing speed',
    technologies: ['react'],
  },
  {
    title: 'Sudoku Game',
    code: 'https://github.com/axelvc/sudoku',
    link: 'https://axelvc-sudoku.netlify.app',
    technologies: ['react'],
  },
]

export default function Projects({ className }: { className?: string }) {
  return (
    <Section title="projects" className={className}>
      <div className="group">
        {projectsList.map(({ title, link, code, description, technologies }) => (
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
