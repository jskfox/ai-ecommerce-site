'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { toast } = useToast();
  const t = useTranslations();
  const router = useRouter();

  const handleRemoveFromCart = (productId: string|number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
    toast({
      title: t('cart.productRemoved'),
      description: t('cart.productRemovedDesc'),
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: t('cart.cartCleared'),
      description: t('cart.cartClearedDesc'),
    });
  };

  const handleCheckout = () => {
    if (state.items.length === 0) {
      toast({
        title: t('cart.cartEmpty'),
        description: t('cart.addProductsBeforeCheckout'),
        variant: "destructive",
      });
      return;
    }
    // Navigate to checkout page
    router.push('/checkout');
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">{t('cart.emptyCart')}</h2>
          <p className="text-gray-600">{t('cart.whyNotAddProducts')}</p>
          <Link href="/">
            <Button size="lg">
              {t('cart.continueShopping')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.16; // 16% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckout();
        }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{t('cart.yourCart')}</h1>
          <Button
            variant="outline"
            onClick={handleClearCart}
            className="text-red-600 hover:text-red-700"
          >
            {t('cart.clearCart')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white p-4 rounded-lg shadow"
              >
                {/* Product Image */}
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        dispatch({
                          type: 'DECREASE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity },
                        })
                      }
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity + 1 },
                        })
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <h2 className="text-xl font-bold">{t('cart.orderTotal')}</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{t('cart.subtotal')}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('cart.shipping')}</span>
                  <span>{t('cart.free')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('cart.tax')}</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>{t('cart.total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full" type="submit">
                {t('cart.proceedToCheckout')}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
