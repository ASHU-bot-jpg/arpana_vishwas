import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Trash2, Star, Sparkles, Gift } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

const specialOffers = [
  {
    id: "one-program-offer",
    title: "Single Program",
    subtitle: "Perfect for focused learning",
    originalPrice: 150,
    salePrice: 120,
    discount: "20% OFF",
    programs: 1,
    description: "Choose any one program",
    color: "from-icreative-green to-green-400",
    badge: "POPULAR",
  },
  {
    id: "two-programs-offer",
    title: "Dual Program Bundle",
    subtitle: "Enhanced learning experience",
    originalPrice: 300,
    salePrice: 220,
    discount: "27% OFF",
    programs: 2,
    description: "Choose any two programs",
    color: "from-icreative-magenta to-purple-500",
    badge: "BEST VALUE",
  },
  {
    id: "three-programs-offer",
    title: "Triple Program Package",
    subtitle: "Comprehensive development",
    originalPrice: 450,
    salePrice: 300,
    discount: "33% OFF",
    programs: 3,
    description: "Choose any three programs",
    color: "from-icreative-purple to-indigo-500",
    badge: "SAVE MORE",
  },
  {
    id: "all-programs-offer",
    title: "Complete Learning Suite",
    subtitle: "Full educational experience",
    originalPrice: 600,
    salePrice: 360,
    discount: "40% OFF",
    programs: 4,
    description: "All four programs included",
    color: "from-orange-500 to-red-500",
    badge: "MAXIMUM SAVINGS",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart items from localStorage
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);

  const addOfferToCart = (offer: (typeof specialOffers)[0]) => {
    const newItem = {
      id: offer.id,
      name: offer.title,
      price: offer.salePrice,
    };

    const updatedItems = [...cartItems, newItem];
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Replace this URL with your actual WooCommerce checkout URL
    const wooCommerceUrl = "https://your-woocommerce-site.com/checkout";

    // You can pass cart items as URL parameters or set up a proper integration
    const cartData = encodeURIComponent(JSON.stringify(cartItems));
    window.open(`${wooCommerceUrl}?cart_data=${cartData}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Shopping Cart
            </h1>
            <p className="text-icreative-grey font-roboto text-lg">
              Review your selected programs before checkout
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="space-y-12">
              {/* Empty Cart Message */}
              <div className="text-center py-12">
                <div className="bg-icreative-pink-light p-8 rounded-2xl">
                  <h2 className="text-icreative-purple font-roboto text-2xl font-bold mb-4">
                    Your cart is empty
                  </h2>
                  <p className="text-icreative-grey font-roboto text-lg mb-6">
                    Add some programs to get started with your child's learning
                    journey!
                  </p>
                  <Link
                    to="/programs"
                    className="bg-icreative-green text-black px-8 py-4 rounded-3xl font-inter text-base font-bold hover:bg-green-400 transition-colors inline-block"
                  >
                    Browse Programs
                  </Link>
                </div>
              </div>

              {/* Special Offers Section */}
              <div className="space-y-8">
                {/* Section Header */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-icreative-purple/10 to-icreative-magenta/10 border border-icreative-purple/20 px-4 py-2 rounded-full mb-4">
                    <Gift className="w-4 h-4 text-icreative-magenta" />
                    <span className="text-icreative-purple font-inter text-sm font-medium">
                      Special Offers
                    </span>
                  </div>
                  <h3 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-4">
                    Program Bundles & Savings
                  </h3>
                  <p className="text-icreative-grey font-inter text-lg max-w-2xl mx-auto">
                    Save more when you choose multiple programs for
                    comprehensive learning
                  </p>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {specialOffers.map((offer, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                    >
                      {/* Sale Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          {offer.discount}
                        </div>
                      </div>

                      {/* Popular Badge */}
                      {offer.badge && (
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-gradient-to-r from-icreative-magenta to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            {offer.badge}
                          </div>
                        </div>
                      )}

                      {/* Card Content */}
                      <div
                        className={`relative bg-gradient-to-br ${offer.color} p-6 text-center text-white`}
                      >
                        <div className="space-y-2 mb-4">
                          <Sparkles className="w-8 h-8 mx-auto opacity-80" />
                          <h4 className="font-roboto text-lg font-bold">
                            {offer.title}
                          </h4>
                          <p className="text-white/90 font-inter text-sm">
                            {offer.subtitle}
                          </p>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-white/70 font-inter text-sm line-through">
                              ${offer.originalPrice}
                            </span>
                            <span className="font-roboto text-2xl font-bold">
                              ${offer.salePrice}
                            </span>
                          </div>
                          <p className="text-white/90 font-inter text-xs">
                            {offer.description}
                          </p>
                        </div>

                        {/* Programs Count */}
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(offer.programs)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                          <span className="ml-2 text-white/90 font-inter text-sm">
                            {offer.programs}{" "}
                            {offer.programs === 1 ? "Program" : "Programs"}
                          </span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <div className="p-6 bg-white">
                        <button
                          onClick={() => addOfferToCart(offer)}
                          className="w-full bg-gradient-to-r from-icreative-purple to-icreative-magenta hover:from-icreative-magenta hover:to-purple-600 text-white px-6 py-3 rounded-2xl font-inter text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center bg-gradient-to-r from-icreative-purple/5 to-icreative-magenta/5 rounded-2xl p-6 border border-icreative-purple/10">
                  <p className="text-icreative-grey font-inter text-sm">
                    <strong>Note:</strong> Bundle offers include flexible
                    program selection. Choose your preferred programs during
                    checkout process.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Cart Items */
            <div className="space-y-8">
              {/* Cart Items List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-icreative-purple font-roboto text-lg font-bold mb-2">
                          {item.name}
                        </h3>
                        <p className="text-icreative-magenta font-inter text-xl font-bold">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-icreative-purple font-roboto text-xl font-bold">
                    Total Amount:
                  </h3>
                  <p className="text-icreative-purple font-roboto text-2xl font-bold">
                    ${getTotalPrice()}
                  </p>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-icreative-magenta text-white px-8 py-4 rounded-3xl font-inter text-lg font-bold hover:bg-icreative-magenta-dark transition-colors"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="text-center">
                    <Link
                      to="/programs"
                      className="text-icreative-purple font-inter text-base hover:underline"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>

              {/* WooCommerce Integration Note */}
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> This will redirect you to our secure
                  payment portal powered by WooCommerce. You can pay using
                  credit card, PayPal, or other available payment methods.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
