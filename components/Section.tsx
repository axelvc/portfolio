import { FC, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  children: ReactNode
}

const Section: FC<Props> = ({ title, children, ...props }) => (
  <section {...props}>
    <h2 className="mb-8 text-2xl font-medium font-heading capitalize text-brown-600 dark:text-gray-50">{title}</h2>
    {children}
  </section>
)

export default Section
