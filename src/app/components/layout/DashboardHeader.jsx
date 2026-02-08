
export default function DashboardHeader({ title, para, action }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>
        
        <p className="mt-1 text-gray-500">
          {para}
        </p>
      </div>
      {
        action && (
          <div>
            {action}
          </div>
        )
      }
    </div>
  )
}