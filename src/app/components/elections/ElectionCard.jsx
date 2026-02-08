import {
  Calendar,
  Clock,
  Users,
  MoreVertical,
} from 'lucide-react'

export default function ElectionCard({ election }) {
  const turnoutPercent = Math.round(
    (election.votesCast / election.voters) * 100
  )

  return (
    <div className="bg-white border rounded-xl p-6 space-y-4">

      {/* TOP ROW */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {/* Level Badge */}
          <span className="px-2 py-0.5 text-xs rounded-md bg-gray-100 text-gray-700">
            {capitalize(election.level)}
          </span>

          {/* Status Badge */}
          <span
            className={`
              px-2 py-0.5 text-xs rounded-md font-medium
              ${election.status === 'active'
                ? 'bg-green-100 text-green-700'
                : election.status === 'scheduled'
                  ? 'bg-blue-100 text-blue-700'
                  : election.status === 'completed'
                    ? 'bg-gray-200 text-gray-700'
                    : 'bg-orange-100 text-orange-700'
              }
            `}
          >
            ● {capitalize(election.status)}
          </span>
        </div>

        {/* Menu */}
        <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
      </div>

      {/* TITLE */}
      <div>
        <h3 className="text-base font-semibold text-heading">
          {election.title}
        </h3>
        <p className="text-sm text-paragraph">
          {election.location}
        </p>
      </div>

      {/* META INFO */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          {formatDate(election.date)}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {election.time}
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {election.voters.toLocaleString()} voters
        </div>
      </div>

      {/* TURNOUT */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Turnout</span>
          <span className="font-semibold">{turnoutPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full bg-green-600 rounded-full"
            style={{ width: `${turnoutPercent}%` }}
          />
        </div>

        <p className="text-xs text-gray-500">
          {election.votesCast.toLocaleString()} of{' '}
          {election.voters.toLocaleString()} votes
        </p>
      </div>
    </div>
  )
}

/* ===============================
   Helpers
================================ */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
