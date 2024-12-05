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

export default function Footer() {
  return (
    <footer className="footer bg-white py-12 px-6">
      {/* Box Container */}
      <div className="box-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo e Redes Sociais */}
        <div className="box">
          <h3 className="flex items-center text-2xl font-semibold text-blue-700">
            <span className="mr-2">ADS</span>
            <Image
              src="/assets/logo.png"
              alt="Logo ADS"
              width={48}
              height={48}
              className="icon-logo"
            />
          </h3>
          <p className="text-gray-600 mt-4">
            Quer conhecer mais sobre nosso cotidiano? Acesse nossas redes
            sociais.
          </p>
          <div className="share flex mt-4 space-x-2">
            <a
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-blue-700 hover:text-white transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-blue-700 hover:text-white transition"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-blue-700 hover:text-white transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="rounded-lg bg-gray-200 p-2 hover:bg-blue-700 hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="box">
          <h3 className="text-2xl font-semibold text-blue-700">
            Informações de contato
          </h3>
          <div className="mt-4 space-y-2">
            <a
              href="#"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <Phone className="mr-2 text-blue-600" /> (83) 3421-4047
            </a>
            <a
              href="#"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <Mail className="mr-2 text-blue-600" />{' '}
              coordenacao@ads.fiponline.edu.br
            </a>
            <a
              href="#"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <MapPin className="mr-2 text-blue-600" /> Patos, Brasil -
              58704-440
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="box">
          <h3 className="text-2xl font-semibold text-blue-700">
            Links rápidos
          </h3>
          <div className="mt-4 space-y-2">
            <a
              href="./index.html"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-blue-600" /> Início
            </a>
            <a
              href="./src/pages/extensions.html"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-blue-600" /> Extensões
            </a>
            <a
              href="./src/pages/projects.html"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-blue-600" /> Projetos
            </a>
            <a
              href="./src/pages/documentations.html"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-blue-600" /> Documentação
            </a>
            <a
              href="./src/pages/disciplines.html"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-blue-600" /> Disciplinas
            </a>
            <a
              href="./src/pages/monitarians.html"
              className="links flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="mr-2 text-blue-600" /> Monitorias
            </a>
          </div>
        </div>

        {/* Boletim de Notícias */}
        <div className="box">
          <h3 className="text-2xl font-semibold text-blue-700">
            Boletim de notícias
          </h3>
          <p className="text-gray-600 mt-4">
            Inscreva-se para receber as últimas atualizações
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="seu email"
              className="w-full rounded-lg border border-gray-300 p-3 mb-4"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 text-white p-3 hover:bg-blue-800 transition"
            >
              Inscreva-se
            </button>
          </form>
        </div>
      </div>

      {/* Credit */}
      <div className="credit mt-8 text-center border-t border-gray-300 pt-4 text-gray-600">
        Criado pelos alunos de{' '}
        <span className="text-blue-700 font-semibold">ADS</span> | todos os
        direitos reservados!
      </div>
    </footer>
  );
}
