'use client'

import { Search } from 'lucide-react'

export default function FiltersBar({
  search,
  onSearchChange,

  filters = [], // [{ key, value, options }]
}) {
  return (
    <div className="bg-white border rounded-xl py-4 px-5 flex gap-6  items-center">

      {/* SEARCH */}
      {/* <div className="relative flex-1 bg-background">
        <Search
          size={18}
          className="absolute left-3  top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          placeholder="Search..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-10 h-10 border rounded-md"
        />
      </div> */}

      {/* DROPDOWNS */}
      {filters.map(filter => (
        <select
          key={filter.key}
          value={filter.value}
          onChange={e =>
            filter.onChange(e.target.value)
          }
          className="h-10 px-3  w-[250px]  border rounded-md bg-background"
        >
          {filter.options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  )
}
