import React from "react";



function Loggedheader() {
  return (
    <header className=" border-b relative z-10">
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between pt-3">
          <div className="flex items-center gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500 text-lg"
                    href="/"
                  >
                    
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500 text-lg"
                    href="#"
                  >
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500 text-lg"
                    href="#"
                  >
                    Documentation{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              

              <div className="hidden sm:flex">
                <div className="rounded-full cursor-pointer bg-gray-900 px-5 py-2.5 text-sm font-medium text-white">
                  Learn More
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Loggedheader;
