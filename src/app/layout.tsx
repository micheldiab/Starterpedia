// Import React and any other necessary components/libraries
import React from 'react';
import './globals.css'; // Include your global styles
import './module.css'; 

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
