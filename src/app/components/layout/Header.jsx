'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import { dashboardActions } from '../../../actions/dashboardActions'
import { useRouter } from 'next/navigation'
export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState('Super Admin')

  const roles = ['Super Admin', 'Admin', 'Viewer']

  return (
    <header className="sticky top-0 z-20 hidden lg:flex  w-full items-center justify-between bg-white border-b border-gray-200 px-6">
      {/* LEFT TITLE */}

      <div className='flex gap-5  h-20 justify-between items-center gap-2 font-semibold'>
        <img
          src="/images/47329.jpg"
          alt="JNSP"
          width="300"
        />
       <div>
         <h2>JANASENA PARTY ELECTION MANAGEMENT</h2>
       </div>
      </div>
      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        {/* ROLE DROPDOWN (FIXED WIDTH) */}
        <div className="relative">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="w-[160px] h-9 flex items-center justify-between px-3 rounded-md border bg-white text-sm font-medium text-secondary-red hover:bg-gray-50"
          >
            <span className="truncate">{role}</span>
            <span className="ml-2">▾</span>
          </button>

          {/* DROPDOWN MENU */}
          {open && (
            <div
              className="
                absolute right-0 mt-2
                w-[160px]             /* SAME WIDTH AS BUTTON */
                rounded-md
                border
                bg-white
                shadow-lg
                z-50
              "
            >
              {roles.map(r => (
                <button
                  key={r}
                  onClick={() => {
                    setRole(r)
                    setOpen(false)
                  }}
                  className="
                    w-full text-left
                    px-3 py-2
                    text-sm
                    hover:bg-gray-100
                  "
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* LOGOUT ICON */}
        {/* <Button onClick={()=>dashboardActions.handleLogout(router)}>Logout</Button> */}
      </div>
    </header>
  )
}
