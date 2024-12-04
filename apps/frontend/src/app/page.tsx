import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import {
  Book,
  Clock4,
  DollarSign,
  File,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  SquarePen,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative h-screen">
        {/* Background da página */}
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Conteúdo principal */}
        <section className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="container text-center px-4 sm:px-12">
            <div className="flex justify-center items-center">
              <h1 className="text-center text-7xl font-bold mt-36">
                ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
              </h1>
            </div>

            <div className="border-b-[10px] border-orange-500 mt-6 mx-auto max-w-xs sm:max-w-md"></div>

            <div className="flex justify-center items-center mt-6 gap-2 text-lg sm:text-xl">
              <span>Tecnólogo</span>
              <span className="text-orange-500">•</span>
              <span>Noturno</span>
              <span className="text-orange-500">•</span>
              <span>2 anos e meio</span>
            </div>

            {/* Botão */}
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block px-6 py-3 text-white border border-white rounded-md transition duration-300 hover:bg-white hover:text-blue-900"
              >
                Acesse aqui
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 text-center">
          <Header title="Objetivo" spanText="Curso" />
          <p className="text-left px-28 text-zinc-600 text-lg">
            O curso de Análise e Desenvolvimento de Sistemas tem como objetivo
            formar profissionais capazes de analisar, projetar, desenvolver,
            implementar e manter sistemas de informação, com conhecimentos de
            programação, banco de dados, redes, engenharia de software, sistemas
            operacionais, entre outros.
          </p>
        </section>

        <section>
          <div className="flex justify-center items-center">
            <Link
              href="#"
              className="flex justify-center items-center gap-2 text-white bg-orange-500 px-32 py-5 rounded-md mt-8 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <File />
              Matriz Curricular
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 mx-60 mt-10">
          <div className="bg-white shadow-2xl rounded-lg">
            <div className="py-4 pl-6">
              <div className="flex justify-left items-center gap-1 mb-3">
                <DollarSign size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Matrícula:</span>
                <span className="text-zinc-700">R$ 688,00</span>
              </div>
              <div className="flex justify-left items-center gap-1 mb-3">
                <DollarSign size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Mensalidade:</span>
                <span className="text-zinc-700">R$ 688,00</span>
              </div>
              <div className="flex justify-left items-center gap-1 mb-3">
                <Clock4 size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Turno:</span>
                <span className="text-zinc-700">Noturno</span>
              </div>
              <div className="flex justify-left items-center gap-1">
                <GraduationCap size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Duração:</span>
                <span className="text-zinc-700">2 anos e meio</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-lg">
            <div className="py-4 pl-6">
              <div className="flex justify-left items-center gap-1 mb-3">
                <MapPin size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Local:</span>
                <span className="text-zinc-700">Patos, Brasil</span>
              </div>
              <div className="flex justify-left items-center gap-1 mb-3">
                <Book size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Coordenador:</span>
                <span className="text-zinc-700">Sormany Silva Dantas</span>
              </div>
              <div className="flex justify-left items-center gap-1 mb-3">
                <Mail size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Email:</span>
                <span className="text-zinc-700">
                  coordenacao@ads.fiponline.edu.br
                </span>
              </div>
              <div className="flex justify-left items-center gap-1">
                <Phone size={20} className="text-blue-950 font-bold" />
                <span className="text-blue-950 font-bold">Contado:</span>
                <span className="text-zinc-700">(83) 3421-4047</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center">
            <Link
              href="#"
              className="flex justify-center items-center gap-2 text-white bg-blue-950 px-32 py-5 rounded-md mt-8 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <SquarePen />
              Faça já sua inscrição
            </Link>
          </div>
        </section>

        <section>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iYg5at4OXiE?si=fSIppt9hkliDTPkW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </>
  );
}
