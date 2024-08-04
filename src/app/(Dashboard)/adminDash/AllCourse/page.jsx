import CPrograming from '@/app/components/Main/StudentComponent/CourseIndex/CPrograming'
import CssIndex from '@/app/components/Main/StudentComponent/CourseIndex/CssIndex'
import HtmlIndex from '@/app/components/Main/StudentComponent/CourseIndex/HtmlIndex'
import JavaScript from '@/app/components/Main/StudentComponent/CourseIndex/JavaScript'
import React from 'react'

export default function page() {
  return (
    <>
      <CPrograming/>
      <HtmlIndex/>
      <CssIndex/>
      <JavaScript/>
    </>
  )
}
