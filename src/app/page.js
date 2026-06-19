import React from 'react'
// 1. เปลี่ยนชื่อตัวแปรที่รับมาให้เป็นพิมพ์ใหญ่ (HeroSections)
import HeroSections from "./components/Herosections";
import Cardsection from './components/Cardsection'
import Footersection from './components/Footersection'

export default function Home() {
  return (
    <div>
    <HeroSections />
    <Cardsection />
    <Footersection />
    </div>
  )
}
