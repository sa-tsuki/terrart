import { memo } from 'react'

const Custom404: React.VFC = () => {
  return (
    <section id="notfound">
      <div className="max-width">404</div>
    </section>
  )
}

export default memo(Custom404)
