import { Trophy, Users, BarChart2 } from 'lucide-react'
import Text from '../ui/Text'
import clsx from 'clsx'

export default function ResultCard({ result }) {
  return (
    <div className="bg-white border rounded-xl p-6 space-y-4 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Text as="h3" variant="h4">
            {result.title}
          </Text>
          <Text variant="muted">
            {result.location} · {capitalize(result.level)}
          </Text>
        </div>

        <span
          className={clsx(
            'px-2 py-0.5 text-xs rounded-md font-medium whitespace-nowrap',
            result.status === 'published'
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          )}
        >
          {capitalize(result.status)}
        </span>
      </div>

      {/* Winner */}
      <div className="flex items-center gap-3 bg-background p-3 rounded-lg">
        <Trophy className="text-hover-red shrink-0" size={20} />
        <div>
          <Text className="font-semibold">
            {result.winner || '—'}
          </Text>
          <Text variant="muted">
            Winner · {Number(result.winnerVotes || 0).toLocaleString()} votes
          </Text>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <Stat
          icon={<Users size={16} />}
          label="Total Votes"
          value={Number(result.totalVotes || 0).toLocaleString()}
        />
        <Stat
          icon={<BarChart2 size={16} />}
          label="Votes Cast"
          value={Number(result.votesCast || result.totalVotes || 0).toLocaleString()}
        />
        <Stat
          icon={<BarChart2 size={16} />}
          label="winnerVotes"
          value={`${result.winnerVotes || 0}`}
        />
      </div>

      {/* Footer */}
      <Text variant="muted" className="text-xs">
        Result Published:{' '}
        {formatDate(result.publishedAt)}
      </Text>
    </div>
  )
}

/* ---------- helpers ---------- */

function Stat({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-gray-500">{icon}</div>
      <Text className="text-sm font-semibold">{value}</Text>
      <Text variant="muted" className="text-xs">
        {label}
      </Text>
    </div>
  )
}

function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
