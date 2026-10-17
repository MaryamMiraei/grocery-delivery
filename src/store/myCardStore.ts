import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICardStore {
  items: ICartItem[];
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useMyCardStore = create<ICardStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === newItem.id,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { items: [...items, newItem] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, newQuantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, newQuantity) }
              : item,
          ),
        })),

        clearCart:()=> set({items:[]}),

        getTotalPrice: ()=> {
          return get().items.reduce((total,item)=> total + (item.price * item.quantity),0)
        }
    }),
    {
      name: "card-storage",
    },
  ),
);
