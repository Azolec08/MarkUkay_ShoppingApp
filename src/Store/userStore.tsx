import { create } from "zustand";

interface MyState {
  // States
  count: number;
  open: boolean;
  favoriteCount: number;
  cartList: any;
  data: null;

  //Functions
  incrementCount: () => void;
  handleOpenOnClick: () => void;
  decrementCount: () => void;
  handleFavoriteCount: () => void;
  handleFavoriteMinusCount: () => void;
}

export const useUserStore = create<MyState>((set) => ({
  // states
  count: 0,
  open: true,
  favoriteCount: 0,
  cartList: [],
  data: null,
  //  functions
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  handleOpenOnClick: () => set((state) => ({ open: !state.open })),
  handleFavoriteCount: () =>
    set((state) => ({ favoriteCount: state.favoriteCount + 1 })),
  handleFavoriteMinusCount: () =>
    set((state) => ({ favoriteCount: state.favoriteCount - 1 })),
}));

// seeeeeeeppaaaaaaaaraaaaaaaatttttttttttttttttte
