import { graphql } from 'gatsby'

export const DatoCMS = graphql`
  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock{
    __typename
    id
    title
    pretitle
    alignment
    textContent
    backgroundColor
    image{
      gatsbyImageData(width:500, height:500)
      alt
    }
    ctas{
      title
      isButton
      link{
        ... on DatoCmsGlobalLink{
          label
          url
          content{
            ... on DatoCmsPage{
              slug
            }
          }
        }
      }
    }
  }
  fragment BlockLogos on DatoCmsLogosBlock{
    __typename
    id
    title
    intro
    backgroundColor
    logos{
      ... on DatoCmsLogo{
        id
        name
        url
        icon{
          gatsbyImageData
        }
      }
    }
    ctas{
      title
      isButton
      link{
        ... on DatoCmsGlobalLink{
          label
          url
          content{
            ... on DatoCmsPage{
              slug
            }
          }
        }
      }
    }
  }

`
