import create from 'zustand';

const tabBarStore = create((set?: any) => ({
  tabBarDisplay: 'flex',
  hideTabBar: () => set(() => ({tabBarDisplay: 'none'})),
  showTabBar: () => set(() => ({tabBarDisplay: 'flex'})),
}));

export default tabBarStore;
