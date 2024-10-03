import Image from "next/image";
import Logo from "@/images/logo.svg";
import { RiInstagramLine, RiWhatsappLine } from "react-icons/ri";


export default function Header() {
  return (
    <header className="bg-header w-full">
      <div className="max-w-[1216px] py-4 mx-auto flex justify-between items-center px-6 lg:px-0">
        <Image
          loading="eager"
          src={Logo}
          alt="logo"
          width={135}
          height={21}
        />

        <nav className="flex">
          <ul className="flex gap-8">
            <li>
              <a href="#" className="text-white text-sm">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-sm">
                Equipe
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-sm">
                Áreas de atuação
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-sm">
                Blog
              </a>
            </li>
          </ul>
          <div className="flex ml-24 gap-4">
            <a href="#">
              <RiInstagramLine
                size={24}
                color="#AC8869"
              />
            </a>
            <a href="#">
              <RiWhatsappLine
                size={24}
                color="#AC8869"
              />
            </a>
          </div>
        </nav>

      </div>
    </header>
  );
}