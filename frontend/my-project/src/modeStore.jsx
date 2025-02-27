import { create } from 'zustand';

const useModeStore = create((set, get) => ({
  darkMode: false,
  setDarkMode: (isDark) => set({ darkMode: isDark }),
}));

export default useModeStore;