import type { Metadata } from 'next'
import '../styles.css'

export const metadata: Metadata = {
  title: 'DIY MIDI Controller',
  description: 'Build your own MIDI Controller with Raspberry Pi Pico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
