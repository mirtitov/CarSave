// Отдельный layout для страницы логина - без Header и Footer
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
