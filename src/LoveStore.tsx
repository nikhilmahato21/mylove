import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const products = [
  {
    id: 1,
    name: "My Brain 🧠",
    price: "Already Yours",
    desc: "Half of it is already eaten by you.",
  },
  {
    id: 2,
    name: "My Heart ❤️",
    price: "Lifetime Access",
    desc: "Beats only for you.",
  },
  {
    id: 3,
    name: "My Time ⏳",
    price: "Unlimited",
    desc: "For calls, dates, and us.",
  },
  {
    id: 4,
    name: "My Hoodie 🧥",
    price: "Borrow Forever",
    desc: "Already smells like you.",
  },
  {
    id: 5,
    name: "My Sanity 🤯",
    price: "Non-Refundable",
    desc: "You ate this too. Worth it.",
  },
  {
    id: 6,
    name: "My Attention 👀",
    price: "100%",
    desc: "No distractions, only you",
  },
];

export default function LoveStore() {
  const [cart, setCart] = useState<number[]>([]);
  const [checkout, setCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  return (
    <section className=" relative py-24 px-6 bg-[#fafafa]">
       
      <div className="max-w-6xl mx-auto z-50">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-2">
            Love Store 🛍️
          </h2>
          <p className="text-gray-500">
            Everything here already belongs to you
          </p>
        </div>

        {/* GRID */}
        {!checkout && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white p-8 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {item.desc}
                    </p>
                    <span className="text-sm text-gray-400">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={cart.includes(item.id)}
                    className="mt-6 rounded-full bg-gray-900 py-3 text-sm text-white font-medium hover:scale-105 transition disabled:bg-gray-300"
                  >
                    {cart.includes(item.id)
                      ? "Already Yours 💖"
                      : "Add to Cart"}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* CHECKOUT BUTTON */}
            {cart.length > 0 && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setCheckout(true)}
                  className="rounded-full bg-black px-10 py-4 text-white font-medium shadow-xl hover:scale-105 transition"
                >
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </>
        )}

        {/* CHECKOUT */}
        <AnimatePresence>
          {checkout && !confirmed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10 text-center"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Checkout 🧾
              </h3>

              <ul className="space-y-3 mb-8 text-gray-600">
                {products
                  .filter((p) => cart.includes(p.id))
                  .map((item) => (
                    <li key={item.id}>• {item.name}</li>
                  ))}
              </ul>

              <p className="text-sm text-gray-400 mb-8">
                Total: Forever ♾️
              </p>

              <button
                onClick={() => setConfirmed(true)}
                className="rounded-full bg-gray-900 px-10 py-3 text-white font-medium hover:scale-105 transition"
              >
                Confirm Order
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONFIRMATION */}
        <AnimatePresence>
          {confirmed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-black text-white rounded-3xl shadow-2xl p-14 text-center"
            >
              <h2 className="text-3xl font-semibold mb-4">
                Order Confirmed 💍
              </h2>
              <p className="text-lg text-white/80">
                Thank you for choosing me.  
                <br />
                This order is valid for <b>Forever</b>.
              </p>
              <p className="mt-6 text-sm text-white/60">
                No returns. No refunds. Only us.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
