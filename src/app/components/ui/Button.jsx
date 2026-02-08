'use client'

import clsx from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary-red/40 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-primary-red text-white hover:bg-hover-red',
    secondary:
      'bg-secondary-red text-white hover:bg-hover-red',
    outline:
      'border border-primary-red text-primary-red hover:bg-primary-red hover:text-white',
    ghost:
      'text-primary-red hover:bg-red-50',
    HighlightBox:
       'text-xs px-2 py-1 '
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
