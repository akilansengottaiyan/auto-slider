import React from "react";
import Banner from './Banner'

export default function App() {
  const cards = [
    {
      id: 1,
      mainText: 'MSD da',
      subText: 'Former indian team captain MSD tshirts & jerseys',
      imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
    {
      id: 2,
      mainText: 'VKians',
      subText: 'Former indian team captain MSD tshirts & jerseys (royal challengers bangalore tshirts included).',
      imgUrl: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      id: 3,
      mainText: 'Cinema Kadai',
      subText: 'All kind of Kollywood tshirts and jerseys firstime for all the directors and music composers with specific movies and event (past, current and upcoming).',
      imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg',
    }
  ]
  return <Banner cards={cards} />
}
