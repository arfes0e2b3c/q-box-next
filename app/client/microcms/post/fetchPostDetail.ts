import { GET_CLIENT } from '../../../api/detail/[contentId]/routeClient'

export const fetchPostDetail = async (contentId: string) => await GET_CLIENT(contentId)
