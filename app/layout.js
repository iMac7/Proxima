import './globals.css'

export const metadata = {
  title: 'Proxima AI',
  description: 'Business AI/ML company',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
