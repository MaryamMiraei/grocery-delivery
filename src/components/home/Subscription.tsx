import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="bg-white m-auto rounded-3xl border border-gray-200 p-8 sm:p-12">
      <div className="flex flex-col items-center text-center">
        <div className="bg-white w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mb-5">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold">
          Subscribe to our Newsletter
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl text-sm sm:text-base">
          Get weekly updates on fresh produce, seasonal offers, and exclusive
          discounts right to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-lg"
        >
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />

            {error && (
              <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-950 hover:bg-green-900 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
