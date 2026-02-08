'use client'

import {
  Vote,
  FileText,
  Users,
  Bell,
  BarChart3,
  UserCog
} from 'lucide-react'
import Link from 'next/link'
import Text from '../ui/Text'

export default function DashboardCards() {
  const cards = [
    {
      title: 'Elections',
      desc: 'Create, schedule, and manage all election activities',
      icon: Vote,
      href: '/elections',
    },
    {
      title: 'Candidate Nominations',
      desc: 'Review and finalize candidate nominations',
      icon: FileText,
      href: '/nominations',
    },
    {
      title: 'Members',
      desc: 'View and search registered party members',
      icon: Users,
      href: 'members',
    },
    {
      title: 'Notifications',
      desc: 'Send announcements to party members',
      icon: Bell,
      href: 'notifications',
    },
    {
      title: 'Results',
      desc: 'View election results and publish to members',
      icon: BarChart3,
      href: 'results',
    },
    {
      title: 'Admin Management',
      desc: 'Assign roles and manage admin permissions',
      icon: UserCog,
      href: 'admin-management',
    },
  ]

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <Link key={index} href={card.href} className="block">
              <div
                className="group relative cursor-pointer bg-white border border-gray-200 rounded-xl p-6 transition hover:border-hover-red hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition">
                  <Icon
                    size={22}
                    className="text-primary-red group-hover:text-hover-red transition"
                  />
                </div>

                <Text
                  as="h3"
                  variant="h3"
                  className="text-heading text-lg font-semibold mb-2 group-hover:text-hover-red transition"
                >
                  {card.title}
                </Text>

                <Text>{card.desc}</Text>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
