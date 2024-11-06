import React from "react";
//layout for each page 
export default function RootLayout(
  {children,}:
  Readonly<{children: React.ReactNode;}>
){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}