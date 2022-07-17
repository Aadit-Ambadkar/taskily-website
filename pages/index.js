import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-row items-center justify-center">
        <div className="h-1/5 w-1/5 fill-current mr-5">
          <Logo />
        </div>
        <div className="h-1/5 bg-primary text-center">
          <h1 className="text-5xl font-bold text-secondary-500 hover:text-6xl duration-200">
            Taskily
          </h1>
          <p className="text-xl text-primary-700">
             Hi
          </p>
        </div>
      </div>
    </div>
  )
}
