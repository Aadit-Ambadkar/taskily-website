import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-row items-center justify-center">
        <div className="h-1/5 w-1/5 hover:w-1/4 fill-current mr-5 duration-200">
          <Logo />
        </div>
        <div className="h-1/5 bg-primary text-center">
          <h1 className="text-5xl font-bold text-secondary-500 hover:text-6xl duration-200">
            Taskily
          </h1>
          <p className="max-w-lg text-xl text-primary-700 duration-200">
            Have you ever wanted to do something, but then forgot what it
            was you wanted to do later in the day? <span className="font-bold">Keep your day organized with Taskily</span>
          </p>
        </div>
      </div>
    </div>
  )
}
