import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <div className="container">
        <h1>Home page</h1>
        <Button>Button</Button>
        <Button href="/">Link</Button>
        <Field
          label="Phone Number"
          placeholder="+7 (999) 999-99-99"
          inputMode="tel"
          mask="+7 (000) 000-00-00"
          isRequired
        />
      </div>
      <Hero />
    </>
  )
}
