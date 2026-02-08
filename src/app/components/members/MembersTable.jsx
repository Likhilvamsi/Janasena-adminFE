'use client'

import { Mail, Phone, User } from 'lucide-react'
import Text from '../ui/Text'
import clsx from 'clsx'
import Avatar from '../ui/Avatar'
import StatusBadge from '../ui/StatusBadge'
import VotedBadge from '../ui/VotedBadge'
export default function MembersTable({ members }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden mt-4">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-4">Member</th>
            <th className="px-6 py-4">Contact</th>
            <th className="px-6 py-4">District</th>
            <th className="px-6 py-4">Constituency</th>
            <th className="px-6 py-4">Joined</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="divide-y">
          {members.map(member => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  
                  <Text as="span" variant="h6">
                    {member.name}
                  </Text>
                </div>
              </td>

              {/* CONTACT */}
              <td className="px-6 py-4 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} />
                  {member.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} />
                  {member.phone}
                </div>
              </td>

              {/* DISTRICT */}
              <td className="px-6 py-4">
                <Text>{member.district}</Text>
              </td>

              {/* CONSTITUENCY */}
              <td className="px-6 py-4">
                <Text>{member.constituency}</Text>
                <Text variant="muted">{member.area}</Text>
              </td>
              {/* JOINED */}
              <td className="px-6 py-4 text-sm text-gray-600">
                {member.joined}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
