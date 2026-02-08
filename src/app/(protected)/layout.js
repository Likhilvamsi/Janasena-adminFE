import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"

export default function ProtectedLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="ml-[20%] max-w-[calc(100%-20%)] flex flex-col min-h-screen">
        
        {/* Header (sticky) */}
        <Header />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </main>

      </div>
    </div>
  )
}
