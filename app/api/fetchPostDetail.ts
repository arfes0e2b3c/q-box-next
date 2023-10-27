import { GET } from './(detail)/(route)'

export const fetchPostDetail = async (contentId: string) => await GET(contentId)
