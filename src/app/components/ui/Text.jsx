'use client'

import clsx from 'clsx'

export default function Text({
  as = 'p',        // p | span | h1 | h2 | h3 | h4 | h5 | h6
  variant = 'body',
  className,
  children,
  ...props
}) {
  const Component = as

  const variants = {
    h1: 'text-3xl font-semibold text-heading',
    h2: 'text-2xl font-semibold text-heading',
    h3: 'text-xl font-semibold text-heading',
    h4: 'text-lg font-semibold text-heading',
    h5: 'text-base font-medium text-heading',
    h6: 'text-sm font-medium text-heading',

    body: 'text-sm  text-paragraph',
    muted: 'text-xs text-gray-500',
    label: 'text-xs font-medium text-gray-600',
  }

  return (
    <Component
      className={clsx(variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
