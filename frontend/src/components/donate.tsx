
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_stripe_public_key_here");

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });

    if (error) {
      console.error("Stripe error:", error);
    } else {
      console.log("Payment method:", paymentMethod);
      alert("Payment method created successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm border border-indigo-100"
    >
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">💳 Secure Payment</h3>
      <CardElement className="p-3 border border-gray-300 rounded-lg mb-4 bg-gray-50 h-12" />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition"
      >
        Pay Now
      </button>
    </form>
  );
};

const CreateDonationPage: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("money");
  const [amount, setAmount] = useState<number>(0);
  const [mention, setMention] = useState("");
  const [phone, setPhone] = useState("");
  const [disasterId, setDisasterId] = useState("");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [disasters, setDisasters] = useState<{ _id: string; title: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://disaster-relief-app-3.onrender.com/api/v1/user/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUser(res.data.user))
      .catch((err) => console.error("Error fetching user", err));
  }, []);

  useEffect(() => {
    if (type === "food") {
      axios
        .get("https://disaster-relief-app-3.onrender.com/api/v1/disasters/active")
        .then((res) => setDisasters(res.data.disasters))
        .catch((err) => console.error("Error fetching disasters", err));
    }
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload =
        type === "supplies"
          ? { type, phone, mention }
          : type === "food"
          ? { type, phone, disasterId }
          : { type, amount, phone };

      await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/user/donate", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      alert("Donation submitted!");
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to submit donation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6 flex flex-col md:flex-row items-start gap-8">
      {type === "money" && (
        <div className="w-full md:w-[300px] mb-6 md:mb-0 md:mr-8">
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-2/3 border border-indigo-100"
      >
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">🏱 Make a Donation</h2>

        {user && (
          <div className="mb-4 text-sm text-gray-600">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}

        <label htmlFor="type" className="block mb-2 font-medium text-indigo-800">Donation Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="money">Money</option>
          <option value="supplies">Supplies</option>
          <option value="food">Food</option>
        </select>

        {type === "supplies" && (
          <>
            <label htmlFor="mention" className="block mb-2 font-medium text-indigo-800">Mention Supplies</label>
            <input
              id="mention"
              type="text"
              value={mention}
              onChange={(e) => setMention(e.target.value)}
              className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </>
        )}

        {type === "food" && (
          <>
            <label htmlFor="disaster" className="block mb-2 font-medium text-indigo-800">Select Disaster Location</label>
            <select
              id="disaster"
              value={disasterId}
              onChange={(e) => setDisasterId(e.target.value)}
              className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
              title="Disaster Location"
            >
              <option value="">-- Choose Disaster --</option>
              {disasters.map((disaster) => (
                <option key={disaster._id} value={disaster._id}>
                  {disaster.title}
                </option>
              ))}
            </select>
          </>
        )}

        {type === "money" && (
          <>
            <label htmlFor="amount" className="block mb-2 font-medium text-indigo-800">Amount</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </>
        )}

        <label htmlFor="phone" className="block mb-2 font-medium text-indigo-800">Phone Number</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full h-12 p-3 border rounded-lg mb-6 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit Donation"}
        </button>
      </form>
    </div>
  );
};

export default CreateDonationPage;