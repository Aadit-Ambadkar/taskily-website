import Link from "next/link"
import Logo from "./Logo"

export default function Nav(props) {
    const { names, links } = props
    return (
        <nav className="h-16 px-8 bg-primary-900 text-primary-50 fixed top-0 left-0 right-0">
            <div className="h-full max-w-5xl mx-auto flex items-center justify-between text-sm sm:text-base">
                <div className="flex items-center gap-4 sm:gap-8 font-light">
                    <Link href="/">
                        <a className="flex items-center justify-center text-accent-500 underline text-gradient text-base sm:text-lg drop-shadow-md font-bold">
                            <div className="w-6 h-6 mb-[19rem]">
                                <Logo dark="true" />
                            </div>
                            <span className="hidden sm:block">askily</span>
                        </a>
                    </Link>
                    <>
                    {
                        names.map(function (name, idx) {
                            return (
                            <Link href={links[idx]} key={idx}>
                                <a>
                                    <span>{name}</span>
                                </a>
                            </Link>
                            )
                        })
                    }
                    </>
                </div>
            </div>
        </nav>
    )
}