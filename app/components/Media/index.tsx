import { MediaProps } from './types'
import { Image, MediaFile } from '@shopify/hydrogen'

const defaultMediaOptions = {
  video: {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    controls: false,
  },
}

const Media = ({ className, mediaOptions, data }: MediaProps) => {
  if (!data || !data.__typename) return null
  console.log('mediaOptions:', mediaOptions)
  switch (data.__typename) {
    case 'Image':
      return <Image data={data} className={className}></Image>
    default:
      return (
        <MediaFile
          //   mediaOptions={{ ...defaultMediaOptions, ...mediaOptions }}
          data={data}
          className={className}
        />
      )
  }
}

export default Media
