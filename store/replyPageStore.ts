import { create } from 'zustand'

type ReplyPageStore = {
  refetch: () => void
  setRefetch: (refetch: () => void) => void
}

export const useReplyPageStore = create<ReplyPageStore>((set) => ({
  refetch: () => {},
  setRefetch: (refetch) => set(() => ({ refetch })),
}))
