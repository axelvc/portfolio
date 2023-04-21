import { networks, projects, skills } from '/data/common'

const locale: PageData = {
  networks,
  cv: {
    title: 'Ve mi CV',
    saveName: 'Axel CV',
    link: `/cv_es.pdf`,
  },
  about: {
    title: 'Sobre mí',
    description: [
      'Hola! Me llamo Axel. Soy un programador autodidacta de México, fanático de todo lo relacionado a la tecnología, también interesado en accesibilidad y UX/UI',
      'Me ha encantado la tecnología desde que tengo memoria y empece en la programación en el 2018. Me considero una persona curiosa, por lo que siempre estoy cosas nuevas',
    ],
    skills: {
      text: 'Algunas tecnologías que conozco:',
      list: skills,
    },
  },
  projects: {
    title: 'Algunos proyectos',
    cursorText: 'Ver',
    label: 'Proyecto {title}',
    codeLabel: 'Código de {title}',
    list: [
      {
        title: 'Esta web',
        description: null,
        ...projects.thisWeb,
      },
      {
        title: 'Mini Translator',
        description: 'Extensión web para traducir texto escrito o seleccionado',
        ...projects.miniTranslator,
      },
      {
        title: 'Typing Test',
        description: 'Mide tu velocidad de mecanografía',
        ...projects.typingTest,
      },
      {
        title: 'Asky',
        description: 'Libreria para crear atractivos prompts en la terminal',
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
    en: 'Ingles',
    es: 'Español',
  },
}

export default locale
