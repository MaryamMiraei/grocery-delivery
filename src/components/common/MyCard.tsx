import { useMyCardStore } from "../../store/myCardStore";
interface IProps {
  onClose: () => void;
}
const MyCard = ({ onClose }: IProps) => {
  const { items, removeItem, getTotalPrice, clearCart, updateQuantity } =
    useMyCardStore();
  const totalPrice = getTotalPrice();
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-all
    duration-300
    ease-out"
      >
        <header className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="text-lg">🛒</span>
            <h2 className="text-base font-bold text-gray-900">Your Cart</h2>
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
              {items.length} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-400 transition hover:text-gray-900"
            aria-label="Close cart"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-3">
              {items.map((item) => {
                const lineTotal = item.price * item.quantity;
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-11 shrink-0 object-contain"
                    />

                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        ${item.price.toFixed(2)} / {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-0.5">
                      <button
                        onClick={() =>
                          item.quantity > 1
                            ? updateQuantity(item.id, item.quantity - 1)
                            : removeItem(item.id)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-600 transition hover:bg-gray-100 hover:border-gray-300"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-600 transition hover:bg-gray-100 hover:border-gray-300 disabled:opacity-30"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>

                    <span className="w-16 shrink-0 text-right text-sm font-bold text-gray-900">
                      ${lineTotal.toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 transition hover:text-red-500"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <footer className="border-t border-gray-100 px-6 py-5">
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium text-gray-900">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-gray-500">Delivery</span>

            <span className="font-bold text-green-500">Free</span>
          </div>

          <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
            <span className="text-base font-bold text-gray-900">Total</span>
            <span className="text-base font-bold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            // onClick={onCheckout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF7A00] py-3.5 text-base font-bold text-white transition hover:bg-[#E56E00]"
          >
            Proceed to Checkout
            <span aria-hidden="true">→</span>
          </button>
        </footer>
      </aside>
    </div>
  );
};

export default MyCard;
