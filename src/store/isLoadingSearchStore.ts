import create from 'zustand';

const isLoadingSearchStore = create((set?: any) => ({
  isLoadingSearch: true,
  enableLoadingSearch: () => set(() => ({isLoadingSearch: true})),
  disableLoadingSearch: () => set(() => ({isLoadingSearch: false})),
}));

export default isLoadingSearchStore;
