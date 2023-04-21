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
      "I'm a self-taught Mexican developer. Focused on making good-looking websites, but also easy to use.",
      "Fan of technology since my childhood. I started programming in 2018 and consider myself a curious person, so I'm constantly learning new things. I like to try/make tools to optimize and or automate processes.",
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
