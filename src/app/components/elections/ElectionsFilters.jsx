import Input from '../ui/Input'

export default function ElectionsFilters({
  filters,
  onChange,
  onStatusChange,        // ✅ CALLBACK
  statusOptions = [],
  levelOptions = [],
  assemblies,
}) {
  return (
    <div className="bg-white border rounded-xl p-4 flex gap-4 flex-wrap">

      {/* SEARCH (NO AUTO APPLY) */}
      <Input
        placeholder="Search elections..."
        value={filters.search}
        onChange={e =>
          onChange(prev => ({
            ...prev,
            search: e.target.value,
          }))
        }
      />

      {/* DISTRICT */}
      {assemblies && (
        <select
          value={filters.district}
          onChange={e =>
            onChange(prev => ({
              ...prev,
              district: e.target.value,
            }))
          }
          className="border rounded-md px-3 h-8 bg-background"
        >
          <option value="all">All Districts</option>
          {assemblies.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      {/* STATUS (AUTO APPLY VIA CALLBACK) */}
      <select
        value={filters.status}
        onChange={e => {
          const value = e.target.value

          const updatedFilters = {
            ...filters,
            status: value,
          }

          // 1️⃣ update UI state
          onChange(updatedFilters)

          // 2️⃣ notify page (page decides what to do)
          onStatusChange?.(updatedFilters)
        }}
        className="border rounded-md px-3 h-8 bg-background"
      >
        {statusOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* LEVEL (NO AUTO APPLY) */}
      <select
        value={filters.level}
        onChange={e =>
          onChange(prev => ({
            ...prev,
            level: e.target.value,
          }))
        }
        className="border rounded-md px-3 h-8 bg-background"
      >
        {levelOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
