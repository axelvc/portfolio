import es from '/data/es'
import en from '/data/en'

const langs: Record<string, PageData> = { es, en }

export default function getData(locale: string): PageData {
  return langs[locale]
}
