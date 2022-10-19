import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { buildDirectiveArgs, processExpression } from '@vue/compiler-core'

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dateset: 'production',
    apiVersion: '2011-11-16',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
