import React from 'react'
import Carousel from "@/components/Carousel"
import ResearchGroups from "@/components/ResearchGroups"
import Education from "@/components/Education"

function Home() {
  return (
    <div>
      <Carousel />
      <ResearchGroups />
      <Education />
    </div>
  )
}

export default Home