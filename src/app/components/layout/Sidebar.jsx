'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutGrid,
  Vote,
  UserCheck,
  Users,
  Settings,
  Bell,
  Shield,Trophy
} from 'lucide-react'
import { ROUTES } from '../../routes/index'
export default function Sidebar() {
  const pathname = usePathname()
  const menu = [
    { name: 'Dashboard', path:ROUTES.DASHBOARD, icon: LayoutGrid },
    { name: 'Elections', path:ROUTES.ELECTIONS , icon: Vote },
    { name: 'Nominations', path: ROUTES.NOMINATIONS, icon: UserCheck },
    { name: 'Members', path: ROUTES.MEMBERS, icon: Users },
    { name: 'Notifications', path: ROUTES.NOTIFICATIONS, icon: Bell },
    { name: 'Results', path: ROUTES.RESULTS, icon: Trophy },
  ]

    return (
    <aside
      className="fixed left-0 top-0 h-screen w-[20%] max-w-[280px] bg-primary-red text-white  flex flex-col justify-between "
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-secondary-red p-2 rounded-lg">
            <Shield size={22} />
          </div>
          <h1 className="text-lg font-semibold">Party Admin</h1>
        </div>
        <nav className="space-y-1">
          {menu.map(item => {
            const Icon = item.icon
            const active = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                  ${active ? 'bg-secondary-red' : 'hover:bg-hover-red'}
                `}
              >
                <Icon size={22} />
                <span className="text-md font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* BOTTOM PROFILE */}
      <div className="border-t border-white/10 p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-red flex items-center justify-center font-semibold">
          RK
        </div>
        <div>
          <p className="text-sm font-medium">Rajesh Kumar</p>
          <p className="text-xs text-white/70">National</p>
        </div>
      </div>
    </aside>
  )

}
