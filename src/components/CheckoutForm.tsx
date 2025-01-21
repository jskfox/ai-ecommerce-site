'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const createCheckoutSchema = (t: any) => z.object({
  firstName: z.string().min(2, t('checkout.form.firstName.error')),
  lastName: z.string().min(2, t('checkout.form.lastName.error')),
  email: z.string().email(t('checkout.form.email.error')),
  phone: z.string().min(10, t('checkout.form.phone.error')),
  address: z.string().min(5, t('checkout.form.address.error')),
  city: z.string().min(2, t('checkout.form.city.error')),
  state: z.string().min(2, t('checkout.form.state.error')),
  zipCode: z.string().min(5, t('checkout.form.zipCode.error')),
});

interface CheckoutFormProps {
  onSubmit: (data: any) => void;
  isProcessing: boolean;
}

export const CheckoutForm = ({ onSubmit, isProcessing }: CheckoutFormProps) => {
  const t = useTranslations();
  const checkoutSchema = createCheckoutSchema(t);
  type CheckoutFormData = z.infer<typeof checkoutSchema>;

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
  });

  const handleSubmit = (data: CheckoutFormData) => {
    console.log('Form data:', data);
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('checkout.form.firstName.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('checkout.form.firstName.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('checkout.form.lastName.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('checkout.form.lastName.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('checkout.form.email.label')}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={t('checkout.form.email.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('checkout.form.phone.label')}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder={t('checkout.form.phone.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('checkout.form.address.label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('checkout.form.address.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('checkout.form.city.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('checkout.form.city.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('checkout.form.state.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('checkout.form.state.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('checkout.form.zipCode.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('checkout.form.zipCode.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isProcessing}
        >
          {isProcessing ? t('checkout.form.submit.processing') : t('checkout.form.submit.button')}
        </Button>
      </form>
    </Form>
  );
};
