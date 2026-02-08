'use client'

import clsx from 'clsx'

export default function Input({
    label,
    error,
    className,
    inputClassName,
    ...props
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {/* Label (optional) */}
            {label && (
                <label className="text-sm font-medium text-heading">
                    {label}
                </label>
            )}
            <input
                {...props}
                className={clsx(
                    'h-8 bg-background w-full rounded-md border px-3  text-sm outline-none transition',
                    'placeholder:text-paragraph plaxeholder:text-[8px]',
                    'focus:ring-2 focus:ring-primary-red/30 focus:border-primary-red',
                    error
                        ? 'border-hover-red focus:ring-hover-red/40'
                        : 'border-gray-300',
                    className
                )}
            />
            {error && (
                <p className="text-xs text-hover-red mt-1">
                    {error}
                </p>
            )}
        </div>
    )
}
