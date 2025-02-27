export const MEDIA_IMAGE_FRAGMENT = `#graphql
  fragment MediaImage on MediaImage {
    __typename
    id
    image {
      altText
      height
      url
      width
    }
  }
` as const

export const VIDEO_FRAGMENT = `#graphql
  fragment Video on Video {
    __typename
    sources {
      url
      width
      height
      mimeType
      format
    }
    previewImage {
      altText
      height
      width
      url
    }
  }
` as const