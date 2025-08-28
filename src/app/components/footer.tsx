import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#075879] text-[#6e7787] py-16 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 text-center mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-[#6eafce] font-medium mb-4 tracking-wide">MENU</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-white transition">About&nbsp;RISA</a></li>
              <li><a href="#" className="hover:text-white transition">Members</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-[#6eafce] font-medium mb-4 tracking-wide">MENU</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Quicl Navigation</a></li>
              <li><a href="#" className="hover:text-white transition">Back</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-[#6eafce] font-medium mb-4 tracking-wide">Socials</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Youtube</a></li>
            </ul>
          </div>
        </div>
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/guidelines/Coat2.png"
            alt="Coat of Arms"
            width={48}
            height={52.55}
            className="mx-auto"
            priority
          />
        </div>
        {/* Copyright */}
        <div className="text-center text-[#c2d6e2] text-sm mt-2">
          © 2025 Republic of Rwanda
        </div>
      </div>
    </footer>
  )
}