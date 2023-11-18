import { create } from 'zustand'

type AnswerPageStore = {
  refetch: () => void
  setRefetch: (refetch: () => void) => void
}

export const useAnswerPageStore = create<AnswerPageStore>((set) => ({
  refetch: () => {},
  setRefetch: (refetch) => set(() => ({ refetch })),
}))
