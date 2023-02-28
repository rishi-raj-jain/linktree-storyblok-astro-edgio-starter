import { useStoryblokApi } from '@storyblok/astro'

export async function getUserInfo(slug) {
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  })
  return data
}
