import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — LAMPSY Skincare',
  description: "Get in touch with LAMPSY Skincare. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactForm />;
}
