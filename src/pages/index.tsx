import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'
import camiseta4 from '../assets/4.png'
import camiseta5 from '../assets/5.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView:3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>
            R$ 27,00
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>
            R$ 27,00
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>
            R$ 27,00
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>
            R$ 27,00
          </span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
