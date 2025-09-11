'use client'

import { useState } from 'react'
import { Home, Info, Hammer, Folder } from 'lucide-react'
import clsx from 'clsx'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <aside className={clsx(
            "h-screen bg-steampunk-dark text-steampunk-cream transition-all duration-300",
            collapsed ? "w-16" : "w-64"
        )}>
            <div className="flex items-center justify-between p-4">
                {!collapsed && <h2 className="text-xl font-bold">My App</h2>}
                <button onClick={() => setCollapsed(!collapsed)} className="text-sm">
                    {collapsed ? '▶' : '◀'}
                </button>
            </div>
            <nav className="flex flex-col space-y-4 p-4">
                <a href="/" className="flex items-center space-x-2 hover:text-steampunk-brass transition">
                    <Home />
                    {!collapsed && <span>Home</span>}
                </a>

                <a href="/about" className="flex items-center space-x-2 hover:text-steampunk-brass transition">
                    <Info />
                    {!collapsed && <span>About</span>}
                </a>

                <a href="/skills" className="flex items-center space-x-2 hover:text-steampunk-brass transition">
                    <Hammer />
                    {!collapsed && <span>Skills</span>}
                </a>

                <a href="/projects" className="flex items-center space-x-2 hover:text-steampunk-brass transition">
                    <Folder />
                    {!collapsed && <span>Portforio</span>}
                </a>
            </nav>
        </aside>
    )
}

export default Sidebar
