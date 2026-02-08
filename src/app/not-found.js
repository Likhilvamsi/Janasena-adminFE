import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-6">
      <div className="max-w-md w-full text-center bg-white border rounded-2xl p-10 shadow-sm">
        
        {/* ERROR CODE */}
        <h1 className="text-6xl font-bold text-primary-red mb-2">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-heading mb-2">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-paragraph mb-6">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* ACTIONS */}
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="
              px-5 py-2.5 rounded-md
              bg-primary-red text-white
              text-sm font-medium
              hover:bg-hover-red
              transition
            "
          >
            Go to Dashboard
          </Link>

          <Link
            href="/login"
            className="
              px-5 py-2.5 rounded-md
              border
              text-sm font-medium
              text-heading
              hover:bg-gray-50
              transition
            "
          >
            Login
          </Link>
        </div>

        {/* FOOTER NOTE */}
        <p className="mt-8 text-xs text-gray-400">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  )
}
