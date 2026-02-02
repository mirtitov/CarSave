import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Layout для основных страниц сайта (с Header и Footer)
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
