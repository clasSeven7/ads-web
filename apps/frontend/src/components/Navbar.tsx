import {
  Book,
  Facebook,
  FileText,
  Folder,
  Home,
  Instagram,
  Layers,
  Monitor,
  Search,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="shadow-md fixed w-full z-50">
      <div className="bg-white flex justify-between items-center px-32 py-5 shadow-zinc-950">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo ADS"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-blue-950">ADS</span>
        </Link>

        <div className="flex space-x-4 text-blue-950 gap-4">
          <Link href="#" aria-label="Facebook">
            <Facebook size={25} className="text-blue-950 hover:text-blue-700" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter size={25} className="text-blue-950 hover:text-blue-400" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram size={25} className="text-blue-950 hover:text-red-400" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <Youtube size={25} className="text-blue-950 hover:text-red-600" />
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link href="#" className="p-2 bg-zinc-200 rounded-xl">
            <Search size={25} className="text-blue-950" />
          </Link>
          <Link href="#" className="p-2 bg-zinc-200 rounded-xl">
            <User size={25} className="text-blue-950" />
          </Link>
        </div>
      </div>

      <nav className="bg-zinc-50 shadow-sm border border-t py-2">
        <ul className="flex justify-center space-x-6 py-3 text-blue-950 font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <Home size={20} />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link
              href="/disciplinas"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <Layers size={20} />
              <span>Disciplinas</span>
            </Link>
          </li>
          <li>
            <Link
              href="/extensoes"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <Folder size={20} />
              <span>Extensões</span>
            </Link>
          </li>
          <li>
            <Link
              href="/documentacoes"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <FileText size={20} />
              <span>Documentações</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projetos"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <Book size={20} />
              <span>Projetos</span>
            </Link>
          </li>
          <li>
            <Link
              href="/monitorias"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <Monitor size={20} />
              <span>Monitorias</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
