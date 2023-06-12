import "../globals.css";

export const metadata = {
  title: "State of Antiquity",
  description: "Website for State of Antiquity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
