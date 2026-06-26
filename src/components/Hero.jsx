import { useState } from 'react'
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative isolate pt-30 lg:pt-2 px-6 lg:px-8">
  <div className="mx-auto max-w-2xl sm:py-30 lg:py-40">
    <div className="text-center">
      <h1 className="text-5xl font-semibold text-white sm:text-7xl">
        Explore GitHub Profiles Like Never Before
      </h1>

      <p className="mt-4 text-lg text-gray-400 sm:text-xl">
        Discover developer profiles, repositories, programming languages, contributions, and open-source activity — all in one place.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400"
        >
          Get started
        </a>

        <a href="#" className="text-sm font-semibold text-white">
          Learn more →
        </a>
      </div>
    </div>
  </div>
</div>
  )
}
