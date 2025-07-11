import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, type = 'button', href, children, ...otherProps } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component className={clsx('button', className)} {...specificProps}>
      {children}
    </Component>
  )
}
