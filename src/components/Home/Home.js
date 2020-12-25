import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import placeholder from '../blog/placeholder.jpg'
import './Home.scss'

const items = [
  {
    src: placeholder,
    altText: 'Gorge road dirtjumps',
    caption: 'New Zealand',
    header: 'Gorge road dirtjumps'
  },
  {
    src: placeholder,
    altText: 'Stubai Zoo',
    caption: 'Austria',
    header: 'Stubai Zoo'
  },
  {
    src: placeholder,
    altText: 'Beartooth Basin',
    caption: 'Read Lodge Montana',
    header: 'Beartooth Basin'
  },
  {
    src: placeholder,
    altText: 'Barnum dirt jumps',
    caption: 'Denver, CO',
    header: 'Barnum dirt jumps'
  }
]

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className='carousel'
      >
        <img className='p-image' src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  )
}

export default Home
