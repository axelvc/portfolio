import type { IconName } from 'components/Icon/Icon'

export const skills = ['HTML', 'Javascript', 'React', 'Redux', 'Git', 'CSS', 'Typescript', 'Vue', 'Node', 'Express']

export const projects: {
  [key: string]: {
    code: string
    link?: string
    technologies: string[]
  }
} = {
  thisWeb: {
    code: 'https://github.com/axelvc/portfolio',
    technologies: ['react'],
  },
  miniTranslator: {
    code: 'https://github.com/axelvc/mini_translator',
    link: 'https://chrome.google.com/webstore/detail/mini-translator/godoijpcenklboeghnkeafimbadkgiib',
    technologies: ['vue'],
  },
  typingTest: {
    code: 'https://github.com/axelvc/typing_test',
    link: 'https://typest.netlify.app/',
    technologies: ['react'],
  },
  asky: {
    code: 'https://github.com/axelvc/asky',
    link: 'https://crates.io/crates/asky',
    technologies: ['rust'],
  },
  sudoku: {
    code: 'https://github.com/axelvc/sudoku',
    link: 'https://axelvc-sudoku.netlify.app',
    technologies: ['react'],
  },
}

export const networks: {
  [key: string]: {
    name: string
    icon: IconName
    link: string
  }
} = {
  linkedin: {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'http://linkedin.com/in/axelvc',
  },
  twitter: {
    name: 'Twitter',
    icon: 'twitter',
    link: 'https://twitter.com/axel__vc',
  },
  github: {
    name: 'Github',
    icon: 'github',
    link: 'https://github.com/axelvc',
  },
  email: {
    name: 'Email me',
    icon: 'email',
    link: 'a.axelvc@gmail.com',
  },
}
