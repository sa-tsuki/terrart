import React, { memo } from 'react'

const Top: React.VFC = () => {
  return (
    <>
      <section id="top">
        <div className="copy">
          <span>創る、そして想いに応える</span>
          <h1>
            <span>Create it</span>
            <span>
              by Devel<span className="accent">o</span>ping
            </span>
          </h1>
        </div>
      </section>
    </>
  )
}
export default memo(Top)
