import Icon from '/components/Icon/Icon'
import { useRouter } from 'next/router'

interface Props {
  data: PageData
  className?: string
}

export default function Footer({ className, data }: Props) {
  const router = useRouter()

  function changeLang(locale: string) {
    router.replace(router.pathname, undefined, { locale })
  }

  return (
    <footer className={className}>
      <div className="w-full h-px bg-gray-300 dark:bg-brown-600 my-10" />

      <label className="inline-flex items-center gap-4">
        <Icon name="lang" />
        <span className="select-none">—</span>
        <select
          value={router.locale}
          onChange={ev => changeLang(ev.target.value)}
          data-cursor-root-class="dark:mix-blend-difference"
          data-cursor-class="scale-[3] dark:opacity-100"
          className="p-1 rounded border border-brown-400 dark:bg-brown-900"
        >
          {router.locales!.map(locale => (
            <option key={locale} value={locale}>
              {data.locales[locale]}
            </option>
          ))}
        </select>
      </label>
    </footer>
  )
}
