import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FiDollarSign, FiPackage, FiHeart, FiPhone, FiMapPin } from "react-icons/fi";
import { toast } from "react-hot-toast";

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
      toast.error("Payment failed. Please try again.");
    } else {
      console.log("Payment method:", paymentMethod);
      toast.success("Payment method created successfully!");
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <FiDollarSign className="mr-2" />
        Secure Payment
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="bg-white/20 p-4 rounded-xl mb-4">
          <CardElement 
            className="text-white"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#ffffff',
                  '::placeholder': {
                    color: '#ffffff80',
                  },
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full btn-primary"
          disabled={!stripe}
        >
          Process Payment
        </button>
      </form>
    </div>
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
      .catch((err) => {
        console.error("Error fetching user", err);
        toast.error("Please login to continue");
        navigate("/login");
      });
  }, [navigate]);

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

      toast.success("Donation submitted successfully! Thank you for your generosity.");
      navigate("/dashboard");
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || "Failed to submit donation";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [25, 50, 100, 250, 500, 1000];

  return (
    <div className="min-h-screen gradient-primary p-4">
      {/* Navigation */}
      <nav className="mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-white hover:text-blue-200 transition-colors flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-2xl font-bold text-white">💝 Make a Donation</h1>
          <div></div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Every Contribution Saves Lives
          </h2>
          <p className="text-xl text-white/80">
            Your generosity provides immediate relief to those in need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form (for money donations) */}
          {type === "money" && (
            <div className="lg:col-span-1">
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            </div>
          )}

          {/* Main Donation Form */}
          <div className={`${type === "money" ? "lg:col-span-2" : "lg:col-span-3"}`}>
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              {user && (
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <h3 className="text-white font-semibold mb-2">Donor Information</h3>
                  <p className="text-white/80"><strong>Name:</strong> {user.name}</p>
                  <p className="text-white/80"><strong>Email:</strong> {user.email}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donation Type Selection */}
                <div>
                  <label className="block text-white font-medium mb-4">Choose Donation Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setType("money")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        type === "money"
                          ? "border-green-400 bg-green-400/20 text-white"
                          : "border-white/30 bg-white/10 text-white/80 hover:border-white/50"
                      }`}
                    >
                      <FiDollarSign className="mx-auto mb-2" size={24} />
                      <div className="font-semibold">Money</div>
                      <div className="text-sm opacity-80">Financial support</div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setType("supplies")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        type === "supplies"
                          ? "border-blue-400 bg-blue-400/20 text-white"
                          : "border-white/30 bg-white/10 text-white/80 hover:border-white/50"
                      }`}
                    >
                      <FiPackage className="mx-auto mb-2" size={24} />
                      <div className="font-semibold">Supplies</div>
                      <div className="text-sm opacity-80">Essential items</div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setType("food")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        type === "food"
                          ? "border-orange-400 bg-orange-400/20 text-white"
                          : "border-white/30 bg-white/10 text-white/80 hover:border-white/50"
                      }`}
                    >
                      <FiHeart className="mx-auto mb-2" size={24} />
                      <div className="font-semibold">Food</div>
                      <div className="text-sm opacity-80">Meals & nutrition</div>
                    </button>
                  </div>
                </div>

                {/* Money Amount Selection */}
                {type === "money" && (
                  <div>
                    <label className="block text-white font-medium mb-4">Donation Amount</label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                      {quickAmounts.map((quickAmount) => (
                        <button
                          key={quickAmount}
                          type="button"
                          onClick={() => setAmount(quickAmount)}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            amount === quickAmount
                              ? "border-green-400 bg-green-400/20 text-white"
                              : "border-white/30 bg-white/10 text-white/80 hover:border-white/50"
                          }`}
                        >
                          ${quickAmount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter custom amount"
                        min="1"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Supplies Details */}
                {type === "supplies" && (
                  <div>
                    <label className="block text-white font-medium mb-2">Describe Supplies</label>
                    <div className="relative">
                      <FiPackage className="absolute left-3 top-3 text-white/60" size={20} />
                      <textarea
                        value={mention}
                        onChange={(e) => setMention(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 h-24 resize-none"
                        placeholder="e.g., Blankets, water bottles, first aid kits..."
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Food Disaster Selection */}
                {type === "food" && (
                  <div>
                    <label className="block text-white font-medium mb-2">Select Disaster Location</label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                      <select
                        value={disasterId}
                        onChange={(e) => setDisasterId(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 appearance-none"
                        required
                      >
                        <option value="" className="bg-gray-800">-- Choose Disaster Location --</option>
                        {disasters.map((disaster) => (
                          <option key={disaster._id} value={disaster._id} className="bg-gray-800">
                            {disaster.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Phone Number */}
                <div>
                  <label className="block text-white font-medium mb-2">Contact Phone Number</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Processing Donation...
                    </div>
                  ) : (
                    `Submit ${type === "money" ? `$${amount}` : type.charAt(0).toUpperCase() + type.slice(1)} Donation`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Impact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-white font-semibold mb-2">Financial Impact</h3>
            <p className="text-white/80 text-sm">$50 can provide emergency supplies for a family of 4</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-white font-semibold mb-2">Supply Distribution</h3>
            <p className="text-white/80 text-sm">Essential items reach families within 24 hours</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="text-white font-semibold mb-2">Food Security</h3>
            <p className="text-white/80 text-sm">Meals delivered directly to disaster zones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationPage;