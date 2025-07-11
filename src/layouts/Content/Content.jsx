import './Content.scss'

export default (props) => {
  const { children } = props

  return <main className="content">{children}</main>
}
