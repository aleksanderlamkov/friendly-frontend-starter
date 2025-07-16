import './Logo.scss'
import { Image } from 'minista'
import clsx from 'clsx'
import logoImgSrc from '@/assets/images/logo.svg'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <Image className="logo__image" src={logoImgSrc} loading={loading} />
    </a>
  )
}
