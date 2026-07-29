import type { Metadata } from 'next';
import TermsPageClient from './TermsPageClient';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions governing your use of Pager Studio AI visibility services for healthcare practices.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Pager Studio',
    description:
      'Terms and conditions governing your use of Pager Studio AI visibility services.',
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
