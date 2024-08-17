import Header from "@/components/custom/Header";

export default function MainLayout ({children}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}