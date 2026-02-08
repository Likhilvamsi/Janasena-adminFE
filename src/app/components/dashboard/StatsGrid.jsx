import StatCard from './StatCard'

export default function StatsGrid() {
  const stats = [
    {
      title: 'Total Members',
      value: '156,420',
      icon: '👥',
      bg: 'bg-gray-100',
    },
    {
      title: 'Active Elections',
      value: '1',
      icon: '📊',
      bg: 'bg-green-100',
    },
    {
      title: 'Pending Nominations',
      value: '3',
      icon: '📋',
      bg: 'bg-orange-100',
    },
    {
      title: 'Completed Elections',
      value: '24',
      icon: '✅',
      bg: 'bg-blue-100',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map(stat => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
