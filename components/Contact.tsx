import Section from './Section'
import Icon, { Props as IconProps } from './Icon/Icon'

const contactList: { name: string; url: string; icon: IconProps['name'] }[] = [
  { name: 'Linkedin', url: '#linkedin', icon: 'linkedin' },
  { name: 'Twitter', url: '#twitter', icon: 'twitter' },
  { name: 'Email me', url: '#email', icon: 'email' },
]

export default function Contact({ className }: { className?: string }) {
  return (
    <Section title="contact" className={className}>
      <ul className="grid gap-6">
        {contactList.map(({ name, url, icon }) => (
          <li key={name}>
            <a href={url} className="inline-flex gap-3.5 items-center h-10">
              <Icon name={icon} />
              {name}
              <Icon name="external" size="sm" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
