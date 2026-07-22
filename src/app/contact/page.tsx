import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — NeoSelf',
  description: "Get in touch with NeoSelf. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactForm />;
}
