import Visa from '@/assets/media/payments/Visa.webp';
import creditCard from '@/assets/media/payments/CreditCard.webp';
import PayPal from '@/assets/media/payments/PayPal.webp';
import IphonePay from '@/assets/media/payments/IphonePay.webp';
import Gpay from '@/assets/media/payments/Gpay.webp';

const footerLinks = [
    "Support Center", "Invoicing", "Contract", "stripe PayPal Pay", "Careers",
    "Blog", "FAQ,S"];

const paylinks = [
    { src: Visa, alt: 'Visa' },
    { src: creditCard, alt: 'Credit Card' },
    { src: PayPal, alt: 'Paypal' },
    { src: IphonePay, alt: 'Apple Pay' },
    { src: Gpay, alt: 'Gpay' },
];
export {
    footerLinks, paylinks
}