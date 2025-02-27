import { HeroBannerProps } from './types'

const HeroBanner = ({
  title,
  subtitle,
  image,
  mobileImage,
  hideOnMobile,
  textPosition,
}: HeroBannerProps) => {
  return <h1>{title?.value}</h1>
}

export default HeroBanner
