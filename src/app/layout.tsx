// Import React and any other necessary components/libraries
import React from 'react';
import './globals.css'; // Include your global styles

// Your layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className="h-full w-full bg-white m-0">
        {children}
      </body>
  );
}
