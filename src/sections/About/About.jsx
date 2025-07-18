import './About.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'

export default () => {
  return (
    <Section
      title="About section title"
      titleId="about-title"
      description="About section description"
    >
      <p>About section content</p>
      <Image src="/src/assets/images/cat.jpg" />
    </Section>
  )
}
