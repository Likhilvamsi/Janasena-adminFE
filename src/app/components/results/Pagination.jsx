"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ pagination }) {
  const router = useRouter();
  const params = useSearchParams();

  const goToPage = page => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", page);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex justify-between items-center">
      <p className="text-sm">
        Page {pagination.page} of {pagination.pages}
      </p>

      <div className="flex gap-2">
        <button
          disabled={pagination.page === 1}
          onClick={() => goToPage(pagination.page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          disabled={pagination.page === pagination.pages}
          onClick={() => goToPage(pagination.page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
