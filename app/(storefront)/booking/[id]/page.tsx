import { notFound } from 'next/navigation';
import { storefrontPageMetadata } from '@/features/storefront/lib/page-metadata';
import BookingDetailPage from '@/features/storefront/screens/BookingDetailPage';

export const generateMetadata = () => storefrontPageMetadata('Your reservation', 'Reservation status, statement and trip tools.', { index: false });

// Booking ids are cuids. Anything else can never be a booking, so it is a plain 404.
// Well-formed ids still render the page; it reads the same for missing and not-yours ids.
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^c[a-z0-9]{20,32}$/.test(id)) notFound();
  return <BookingDetailPage />;
}
