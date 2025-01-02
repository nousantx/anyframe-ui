import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styler } from '@stylx'
import { useTheme } from '@/contexts/ThemeContext'
import { SearchBar } from './SearchBar'
import { Sidebar } from './Sidebar'

export function Navbar() {
  styler()
  const [showNav, setShowNav] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const toggleNav = () => setShowNav((prev) => !prev)
  const handleThemeToggle = () => {
    toggleDarkMode()
  }

  return (
    <header className="h-62px px-2rem center space-between fixed [t,l,r]-0 bg-neutral-50 bg-opacity-0.4 [backdrop-filter]-[blur(6px)]">
      <Link
        to="/"
        className="lh-1 fs-1.2rem fw-600 ls--0.020em td-none text-neutral-950 h-35px center"
      >
        nUI
      </Link>

      <div className="center flex-wrap gap-8px">
        <SearchBar />

        <button
          className="[border,outline]-none center box-35px br-6px [background]-transparent hover:bg-neutral-200 text-neutral-950 bg-opacity-0.5 tr-300ms"
          onClick={handleThemeToggle}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.49 9.49 0 0 0 3 11.507"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
              />
            </svg>
          )}
        </button>
        <button
          className="[border,outline]-none center box-35px br-6px [background]-transparent hover:bg-neutral-200 text-neutral-950 bg-opacity-0.5 tr-300ms"
          onClick={toggleNav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 5h18M3 12h18M3 19h18"
            />
          </svg>
        </button>
        <nav
          id="sidebar"
          className={`[background]-[rgb({neutral-50})] fixed h-100dvh p-1.5rem shadow-xl shadow-neutral-950 t-0 l-${
            showNav ? '0' : '-100%'
          } [transition]-300ms [transition-property]-[left] flex-col gap-1rem md-up`}
        >
          <Sidebar />
        </nav>
      </div>
    </header>
  )
}