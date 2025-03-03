import Media from '~/components/Media'
import { HeroBannerProps } from './types'
import { Image } from '@shopify/hydrogen'
import { CSSProperties } from 'react'
import Container from '~/components/Container'

const HeroBanner = ({
  title,
  subtitle,
  image,
  mobileImage,
  hideOnMobile,
  textPosition,
}: HeroBannerProps) => (
  <section className="h-[700px] w-full">
    <Container
      className="bg-no-repeat bg-center bg-cover h-full fullWidth flex items-center justify-center"
      style={
        image?.reference?.image
          ? ({ backgroundImage: `url('${image?.reference?.image?.url}')` } as CSSProperties)
          : undefined
      }
    >
      {title ? (
        <div>
          <h1
            className={`text-${
              textPosition?.value ? textPosition?.value : 'center'
            } text-[#e5e7eb] text-[64px] bold `}
          >
            {title.value}
          </h1>
        </div>
      ) : null}
      {/* {subtitle ? <span> {subtitle.value}</span> : null} */}
    </Container>
  </section>
)

export default HeroBanner
