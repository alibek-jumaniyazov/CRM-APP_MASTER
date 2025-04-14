import React from 'react'

export default function FinanceCirculationCard({item}) {
  return (
    <div className='FinanceCirculationCard'>
        <p className='FinanceCirculationCardTitle'>{item.title}</p>
        <div className="FinanceCirculationCardInfo">
            <p>{item.price}</p>
            <span>{item.kurs}</span>
        </div>
        <div className="FinanceCirculationCardHr"></div>
    </div>
  )
}
