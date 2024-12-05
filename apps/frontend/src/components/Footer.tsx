import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="flex items-center text-2xl font-semibold text-blue-950">
            <span className="mr-2">ADS</span>
            <Image src="/logo.png" alt="Logo ADS" width={48} height={48} />
          </h3>
          <p className="text-gray-600 mt-4">
            Quer conhecer mais sobre nosso cotidiano? Acesse nossas redes
            sociais.
          </p>
          <div className="flex mt-4 space-x-2">
            <Link
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-orange-500 text-blue-950 hover:text-white transition"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-orange-500 text-blue-950 hover:text-white transition"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-orange-500 text-blue-950 hover:text-white transition"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-orange-500 text-blue-950 hover:text-white transition"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-950">
            Informações de contato
          </h3>
          <div className="mt-4 space-y-2">
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <Phone size={24} className="mr-2 text-orange-500" />
              (83) 3421-4047
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <Mail size={24} className="mr-2 text-orange-500" />
              coordenacao@ads.fiponline.edu.br
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <MapPin size={24} className="mr-2 text-orange-500" />
              Patos, Brasil - 58704-440
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-950">
            Links rápidos
          </h3>
          <div className="mt-4 space-y-2">
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-orange-500" />
              Início
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-orange-500" />
              Extensões
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-orange-500" /> Projetos
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-orange-500" /> Documentação
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-orange-500" /> Disciplinas
            </Link>
            <Link
              href="#"
              className="links flex items-center text-zinc-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-orange-500" /> Monitorias
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-950">
            Boletim de notícias
          </h3>
          <p className="text-zinc-600 mt-4">
            Inscreva-se para receber as últimas atualizações
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="seu email"
              className="w-full rounded-lg border border-zinc-300 p-3 mb-4"
            />
            <Button
              type="submit"
              className="w-full rounded-lg bg-blue-950 text-white p-6 hover:bg-orange-500 transition"
            >
              Inscreva-se
            </Button>
          </form>
        </div>
      </div>

      <div className="credit mt-8 text-center border-t border-zinc-300 pt-4 text-gray-600">
        Criado pelos alunos de
        <span className="text-orange-500 font-semibold ml-1 mr-1">ADS</span>|
        todos os direitos reservados!
      </div>
    </footer>
  );
}
