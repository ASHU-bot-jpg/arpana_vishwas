import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart items from localStorage
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Replace this URL with your actual WooCommerce checkout URL
    const wooCommerceUrl = 'https://your-woocommerce-site.com/checkout';
    
    // You can pass cart items as URL parameters or set up a proper integration
    const cartData = encodeURIComponent(JSON.stringify(cartItems));
    window.open(`${wooCommerceUrl}?cart_data=${cartData}`, '_blank');
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
            <div className="text-center py-12">
              <div className="bg-icreative-pink-light p-8 rounded-2xl">
                <h2 className="text-icreative-purple font-roboto text-2xl font-bold mb-4">
                  Your cart is empty
                </h2>
                <p className="text-icreative-grey font-roboto text-lg mb-6">
                  Add some programs to get started with your child's learning journey!
                </p>
                <Link
                  to="/programs"
                  className="bg-icreative-green text-black px-8 py-4 rounded-3xl font-inter text-base font-bold hover:bg-green-400 transition-colors inline-block"
                >
                  Browse Programs
                </Link>
              </div>
            </div>
          ) : (
            /* Cart Items */
            <div className="space-y-8">
              {/* Cart Items List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
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
                  <strong>Note:</strong> This will redirect you to our secure payment portal powered by WooCommerce. 
                  You can pay using credit card, PayPal, or other available payment methods.
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
