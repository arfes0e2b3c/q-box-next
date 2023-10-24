import { fetchPost } from './microcms'

export const fetchPostDetail = async (contentId: string) =>
  await fetchPost({ contentId: contentId })
