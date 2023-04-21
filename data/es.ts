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
      "Soy un desarrollador mexicano autodidacta. Enfocado en hacer sitios web atractivos, pero también fáciles de usar.",
      "Fanático de la tecnología desde mi infancia. Empecé a programar en 2018 y me considero una persona curiosa, por lo que constantemente estoy aprendiendo cosas nuevas. Me gusta probar/hacer herramientas para optimizar y/o automatizar procesos."
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
