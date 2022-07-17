import Link from "next/link"

export default function Nav(props) {
    const { names, links } = props
    console.log(names)
    console.log(links)
    return (
        <nav className="h-16 px-8 bg-primary-900 text-primary-50 fixed top-0 left-0 right-0">
            <div className="h-full max-w-5xl mx-auto flex items-center justify-between text-sm sm:text-base">
                <div className="flex items-center gap-4 sm:gap-8 font-light">
                    
                    <>
                    {
                        names.map(function (name, idx) {
                            return (
                            <Link href={links[idx]} key={idx}>
                                <a>
                                    <span className>{name}</span>
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