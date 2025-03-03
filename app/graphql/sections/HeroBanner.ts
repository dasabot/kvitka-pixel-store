import { MEDIA_IMAGE_FRAGMENT } from '../sharedObjects'

const HERO_BANNER_FRAGMENT = `#graphql
fragment HeroBanner on Metaobject {
    id
    type
    title: field(key: "title") {
        value
      }
      subtitle: field(key: "subtitle") {
        value
      }
      image: field(key: "image") {
        reference {
          ...MediaImage
          }
        }
      mobileImage: field(key: "mobile_image") {
        reference {
          ...MediaImage
        }
      }
      hideOnMobile: field(key: "hide_on_mobile") {
        value
      }
      textPosition: field(key: "text_position") {
        value
      }
}
${MEDIA_IMAGE_FRAGMENT}
 ` as const

export default HERO_BANNER_FRAGMENT
