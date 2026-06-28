import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Compare developers", href: "/compare" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black border-b border-white/10">
      <nav className="flex items-center justify-between px-6 py-6 lg:px-8">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center gap-2">
            <FaGithub className="h-8 w-8 text-white" />

            <span className="text-lg font-semibold text-white">
              Git Profile
            </span>
          </a>
        </div>


        {/* Mobile button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2.5 text-gray-200"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>


        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-300 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>


        {/* Github button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/sazluz/github-profile"
            target="_blank"
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
          >
            Star on GitHub
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

      </nav>


      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-gray-900 p-6 sm:max-w-sm">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaGithub className="h-7 w-7 text-white" />
              <span className="font-semibold text-white">
                Git Profile
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>


          <div className="mt-8 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-white hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}


            <a
              href="https://github.com/sazluz/github-profile"
            target="_blank"
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-white hover:bg-white/5"
            >
              Star on GitHub
              <FaGithub className="h-5 w-5" />
            </a>

          </div>

        </DialogPanel>
      </Dialog>

    </header>
  );
};

export default Navbar;