import { GET } from '../api/(detail)/(route)'

export const fetchPostDetail = async (contentId: string) => await GET(contentId)
