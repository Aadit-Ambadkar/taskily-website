import { useRouter } from 'next/router'

export default function Clear() {
  const router = useRouter();
  return (
    <>
    <div className="flex mt-24">
      <div className="m-auto flex flex-row items-center justify-center">
        Clicking the button below will clear all created tasks.<span className="font-bold">&nbsp;Are you sure you wish to proceed?</span>
      </div>
    </div>
    <div className="mt-2 flex flex-col items-center">
        <button onClick={async () => {
        const requestOptions = {
            method: 'PURGE',
            headers: { 'Content-Type': 'application/json' }
        }
        await fetch('/api/server', requestOptions)
        router.push(`/`)
        }}>
        <div className="className='bg-transparent hover:bg-accent-700 text-accent-800 font-semibold hover:text-white py-2 px-4 border border-accent-700 hover:border-transparent rounded duration-200'">
            Clear All Tasks
        </div>
        </button>
    </div>
    </>
  )
}