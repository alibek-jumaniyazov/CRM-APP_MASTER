import React from 'react'

export default function PersonalHistoyTableCard({item}) {
  return (
    <div className='PersonalHistoyTableCard'>
        <div className="PersonalHistoyTableCardInfos">
            <p>{item.title}</p>
            <span>{item.desc}</span>
        </div>
    </div>
  )
}
