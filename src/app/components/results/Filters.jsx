"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters({ filters }) {
  const router = useRouter();
  const params = useSearchParams();

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(params.toString());
    value ? newParams.set(key, value) : newParams.delete(key);
    newParams.set("page", 1); // reset page
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex gap-4 flex-wrap">
      <select
        className="border p-2 rounded"
        onChange={e => updateFilter("election_level", e.target.value)}
        defaultValue={filters.election_level || ""}
      >
        <option value="">All Levels</option>
        <option value="STATE">State</option>
        <option value="DISTRICT">District</option>
        <option value="ASSEMBLY">Assembly</option>
        <option value="WARD">Ward</option>
      </select>

      <input
        placeholder="State ID"
        className="border p-2 rounded"
        onBlur={e => updateFilter("state_id", e.target.value)}
      />

      <input
        placeholder="District ID"
        className="border p-2 rounded"
        onBlur={e => updateFilter("district_id", e.target.value)}
      />

      <input
        placeholder="Assembly ID"
        className="border p-2 rounded"
        onBlur={e => updateFilter("assembly_id", e.target.value)}
      />
    </div>
  );
}
