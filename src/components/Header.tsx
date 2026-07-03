export function Header() {
    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <div className="text-xl font-bold">Custom Soap Shop</div>

                <nav className="flex gap-6 text-sm font-medium">
                    <a href="#about" className="hover:text-stone-600">
                        About
                    </a>
                    <a href="#ready-soaps" className="hover:text-stone-600">
                        Soaps
                    </a>
                    <a href="#create" className="hover:text-stone-600">
                        Create
                    </a>
                    <a href="#contact" className="hover:text-stone-600">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}