import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#075879] text-white py-16 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-row justify-between mb-16">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2 text-base flex flex-col justify-start items-start">
              <h4 className="text-blue-300 font-semibold mb-5 tracking-wide self-start">Institution</h4>
              <Link target="_blank" href="https://www.risa.gov.rw/about/overview" className="hover:text-white transition">About</Link>
              <Link target="_blank" href="https://www.risa.gov.rw/about/services-charter" className="hover:text-white transition">Services</Link>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <ul className="space-y-2 text-base flex flex-col justify-start items-start">
              <h4 className="text-blue-300 font-semibold mb-5 tracking-wide self-start">Contact</h4>
              <Link target="_blank" href="https://www.risa.gov.rw/contact" className="hover:text-white transition">Contact</Link>
              <Link target="_blank" href="https://www.risa.gov.rw/contact/quick-navigation" className="hover:text-white transition">Quick Navigation</Link>
              <Link target="_blank" href="https://www.risa.gov.rw/contact/back" className="hover:text-white transition">Back</Link>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-blue-300 font-semibold mb-5 tracking-wide self-start">Socials</h4>
            <ul className="space-x-5 text-base flex flex-row justify-start items-start">
              <Link target="_blank" href="https://www.linkedin.com/company/18879714" className="hover:text-white transition"><Linkedin></Linkedin></Link>
              <Link target="_blank" href="https://twitter.com/RISARwanda" className="hover:text-white transition"> <Twitter></Twitter></Link>
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