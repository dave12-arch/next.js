// Suppress TS error when there are no type declarations for CSS imports
// @ts-ignore
import './ui/global.css';
import { inter } from './ui/fonts'; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
