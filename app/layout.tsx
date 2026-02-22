import "./globals.css";

export const metadata = {
  title: "Proem | Professional Identity & Marketplace",
  description: "Identity-verified marketplace for global industry experts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
