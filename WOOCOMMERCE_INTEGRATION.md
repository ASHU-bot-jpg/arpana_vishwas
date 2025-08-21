# WooCommerce Integration Guide for iCreative Learning

This guide will help you integrate your React application with WooCommerce for handling payments and program purchases.

## Overview

The current implementation includes:
- Registration form that collects user data
- Cart functionality to store selected programs
- Basic integration setup for WooCommerce

## Setup Options

### Option 1: WooCommerce REST API (Recommended)

#### 1. Install WooCommerce on your WordPress site
```bash
# Install WordPress and WooCommerce plugin
# Enable REST API in WooCommerce settings
```

#### 2. Create WooCommerce Products
Create products in WooCommerce for each program:
- Abacus Arithmetic (Grades 1-5) - $150
- Language Arts (Grades 1-5) - $180  
- Math Program (Grades 1-5) - $160

#### 3. Get API Credentials
In WooCommerce > Settings > Advanced > REST API:
- Create API key with Read/Write permissions
- Note down Consumer Key and Consumer Secret

#### 4. Install WooCommerce JavaScript SDK
```bash
npm install @woocommerce/woocommerce-rest-api
```

#### 5. Create WooCommerce Service
Create `server/services/woocommerce.ts`:

```typescript
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const WooCommerce = new WooCommerceRestApi({
  url: 'https://your-wordpress-site.com',
  consumerKey: process.env.WC_CONSUMER_KEY!,
  consumerSecret: process.env.WC_CONSUMER_SECRET!,
  version: 'wc/v3'
});

export async function createWooCommerceOrder(cartItems: any[], customerData: any) {
  const orderData = {
    payment_method: 'stripe', // or your preferred payment method
    payment_method_title: 'Credit Card',
    set_paid: false,
    billing: {
      first_name: customerData.parentName.split(' ')[0],
      last_name: customerData.parentName.split(' ')[1] || '',
      email: customerData.emailAddress,
      phone: customerData.phoneNumber,
    },
    shipping: {
      first_name: customerData.parentName.split(' ')[0],
      last_name: customerData.parentName.split(' ')[1] || '',
    },
    line_items: cartItems.map(item => ({
      product_id: item.woocommerceId, // You'll need to map your internal IDs to WooCommerce product IDs
      quantity: 1
    })),
    meta_data: [
      {
        key: 'child_name',
        value: customerData.childName
      },
      {
        key: 'child_grade',
        value: customerData.childGrade
      }
    ]
  };

  try {
    const response = await WooCommerce.post('orders', orderData);
    return response.data;
  } catch (error) {
    console.error('WooCommerce order creation failed:', error);
    throw error;
  }
}
```

#### 6. Update Registration Handler
Modify `server/routes/register.ts`:

```typescript
import { createWooCommerceOrder } from '../services/woocommerce';

export const handleRegistration: RequestHandler = async (req, res) => {
  try {
    const validatedData = registrationSchema.parse(req.body);
    
    // Save registration locally
    const registration = {
      id: Date.now().toString(),
      ...validatedData,
      submittedAt: new Date().toISOString()
    };
    
    registrations.push(registration);
    
    // Create WooCommerce order if programs selected
    if (validatedData.selectedPrograms.length > 0) {
      const cartItems = validatedData.selectedPrograms.map(programId => ({
        id: programId,
        woocommerceId: getWooCommerceProductId(programId) // You'll need to implement this mapping
      }));
      
      const order = await createWooCommerceOrder(cartItems, validatedData);
      
      res.status(200).json({
        success: true,
        message: "Registration successful",
        registrationId: registration.id,
        checkoutUrl: order.checkout_url // WooCommerce checkout URL
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Registration successful",
        registrationId: registration.id
      });
    }
    
  } catch (error) {
    // Handle errors
  }
};

function getWooCommerceProductId(programId: string): number {
  const productMap = {
    'abacus': 123, // Replace with actual WooCommerce product IDs
    'language-arts': 124,
    'math': 125
  };
  
  return productMap[programId as keyof typeof productMap] || 0;
}
```

### Option 2: Direct WooCommerce Checkout Redirect

For a simpler integration, redirect users directly to WooCommerce:

#### 1. Update Cart Component
Modify `client/pages/Cart.tsx`:

```typescript
const handleCheckout = () => {
  // Build WooCommerce checkout URL with products
  const baseUrl = 'https://your-wordpress-site.com/checkout';
  const cartParams = cartItems.map(item => 
    `add-to-cart[]=${getWooCommerceProductId(item.id)}`
  ).join('&');
  
  const checkoutUrl = `${baseUrl}?${cartParams}`;
  window.location.href = checkoutUrl; // Redirect to WooCommerce
};
```

### Option 3: WooCommerce Embedded Checkout

Use WooCommerce's embedded checkout for seamless experience:

```typescript
// Install WooCommerce Blocks
npm install @woocommerce/blocks-checkout

// Embed checkout in your React app
import { CheckoutForm } from '@woocommerce/blocks-checkout';
```

## Environment Variables

Add to your `.env` file:

```bash
# WooCommerce API Credentials
WC_CONSUMER_KEY=ck_your_consumer_key_here
WC_CONSUMER_SECRET=cs_your_consumer_secret_here
WC_SITE_URL=https://your-wordpress-site.com

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Payment Methods

Configure payment methods in WooCommerce:
- Stripe (recommended)
- PayPal
- Square
- Bank transfer
- Check payments

## Testing

1. Test in WooCommerce sandbox mode
2. Use test credit card numbers
3. Verify order creation and email notifications
4. Test payment processing

## Security Considerations

1. Use HTTPS for all transactions
2. Validate all input data
3. Store sensitive data securely
4. Implement proper error handling
5. Use environment variables for API keys

## Next Steps

1. Set up WordPress/WooCommerce site
2. Configure products and payment methods
3. Get API credentials
4. Implement chosen integration option
5. Test thoroughly before going live

## Support

- WooCommerce Documentation: https://woocommerce.com/documentation/
- REST API Docs: https://woocommerce.github.io/woocommerce-rest-api-docs/
- WordPress Support: https://wordpress.org/support/

## Current Implementation Status

✅ Registration form with cart integration
✅ Basic cart functionality  
✅ Email notification setup
⏳ WooCommerce product creation needed
⏳ API credentials configuration needed
⏳ Payment method setup needed
