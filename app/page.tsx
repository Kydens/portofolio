import { About, Experience, Homepage, Projects, Skills } from "@/components"

export default function Home() {

  return (
    <div className='w-full h-screen overflow-scroll no-scrollbar snap-y snap-mandatory'>
      <Homepage
        style='snap-start bg-gradient-to-b from-[#e7e4dc] from-90% to-[#e3ebee] to-100% text-black'
      />
      <About
        style='snap-start bg-gradient-to-b from-[#e3ebee] from-85% to-[#f0ece2] to-100% text-black'
      />
      <Experience
        style='snap-start bg-[#f0ece2] text-black'
      />
      <Projects
        style='snap-start bg-gradient-to-t from-[#e3ebee] from-85% to-[#f0ece2] to-100% text-black'
      />
      <Skills
        style='snap-start bg-gradient-to-t from-[#e7e4dc] from-85% to-[#e3ebee] to-96% text-black'
      />
    </div>
  )
}
