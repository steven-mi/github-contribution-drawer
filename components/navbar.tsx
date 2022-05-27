import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl px-4">
                <div className="relative flex items-center justify-between h-16">
                    <p className="text-2xl tracking-tight font-extrabold text-white">
                        GitHub Contribution Drawer
                    </p>
                </div>
            </div>
        </nav>
    )
}