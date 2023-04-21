import { networks, projects, skills } from '/data/common'

const locale = {
  networks,
  cv: {
    title: 'Get my CV',
    saveName: "Axel's CV",
    link: `/cv_en.pdf`,
  },
  about: {
    title: 'About me',
    description: [
      "Hello! My name is Axel. I'm a self-taught developer from Mexico, a big fan of all about technology, and interested in accessibility and UX/UI.",
      "I've loved technology for as long as I can remember and started programming in 2018. I consider myself a curious person, so I'm constantly learning new things",
    ],
    skills: {
      text: 'These are some technologies that I know:',
      list: skills,
    },
  },
  projects: {
    title: 'Some Projects',
    cursorText: 'See',
    label: '{title} Project',
    codeLabel: 'Code of {title}',
    list: [
      {
        title: 'This web',
        description: null,
        ...projects.thisWeb,
      },
      {
        title: 'Mini Translator',
        description: 'Web extension to translate selected or written text',
        ...projects.miniTranslator,
      },
      {
        title: 'Typing Test',
        description: 'Measure your typing speed',
        ...projects.typingTest,
      },
      {
        title: 'Asky',
        description: 'Library to create good looking prompts in the terminal',
        ...projects.asky,
      },
      {
        title: 'Sudoku Game',
        description: null,
        ...projects.sudoku,
      },
    ],
  },
  locales: {
    en: 'English',
    es: 'Spanish',
  } as Record<string, string>,
}

export default locale
