import { About, Experience, Homepage, Projects } from "@/components"

export default function Home() {

  return (
    <div className='w-full h-full'>
      <Homepage
        style='bg-black text-white animate-fade'
      />
      <About
        style='bg-white text-black'
      />
      <Experience
        style='bg-black text-white'
      />
      <Projects
        style='bg-white text-black'
      />
    </div>
  )
}
