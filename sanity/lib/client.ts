import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const sanityFetch = async (query: string, params?: Record<string, unknown>) => {
  try {
    const data = await client.fetch(query, params)
    return data
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}
