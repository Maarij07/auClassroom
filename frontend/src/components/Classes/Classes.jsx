import React from 'react'
import ClassCard from '../ClassCard/ClassCard'


export default function Classes() {
  return (
    <div className="sm:h-[33.6rem] overflow-auto justify-around flex flex-wrap p-6">
        <ClassCard/>
        <ClassCard/>
    </div>
  )
}
