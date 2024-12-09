import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoSection from '@/components/InfoSection';
import Navbar from '@/components/Navbar';
import {
  ArrowRight,
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
  const section1Items = [
    { icon: DollarSign, title: 'Matrícula', description: 'R$ 688,00' },
    { icon: DollarSign, title: 'Mensalidade', description: 'R$ 688,00' },
    { icon: Clock4, title: 'Turno', description: 'Noturno' },
    { icon: GraduationCap, title: 'Duração', description: '2 anos e meio' },
  ];

  const section2Items = [
    { icon: MapPin, title: 'Local', description: 'Patos, Brasil' },
    { icon: Book, title: 'Coordenador', description: 'Sormany Silva Dantas' },
    {
      icon: Mail,
      title: 'Email',
      description: 'coordenacao@ads.fiponline.edu.br',
    },
    { icon: Phone, title: 'Contato', description: '(83) 3421-4047' },
    { icon: Phone, title: 'Contato', description: '(83) 3421-4047' },
  ];
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
              href="/files/matriz-curricular.pdf"
              className="flex justify-center items-center gap-2 text-white bg-orange-500 px-32 py-5 rounded-md mt-8 transform transition-transform duration-300 ease-in-out hover:scale-110"
              target="_blank"
            >
              <File />
              Matriz Curricular
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 mx-60 mt-10">
          <InfoSection items={section1Items} />
          <InfoSection items={section2Items} />
        </section>

        <section>
          <div className="flex justify-center items-center">
            <Link
              href="https://www.studus.com.br/StudusFIP/inscricaoonline/inscricaoonline.xhtml?curso=ADS"
              target="_blank"
              className="flex justify-center items-center gap-2 text-white bg-blue-950 px-32 py-5 rounded-md mt-8 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <SquarePen />
              Faça já sua inscrição
            </Link>
          </div>
        </section>

        <section className="bg-white flex justify-center items-center mt-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/iYg5at4OXiE?si=fSIppt9hkliDTPkW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="p-4"
          ></iframe>
        </section>

        <section className="mb-10">
          <Header title="Área" spanText="Atuação" />

          <div className="grid grid-cols-4 gap-6 mx-20">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="relative w-full h-80">
                <Image
                  src="/areas-activity/image-1.png"
                  alt="Imagem 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-center text-xl font-bold text-blue-950">
                  Analista de sistemas
                </h2>
                <p className="text-zinc-700 mt-4">
                  Profissional que analisa e desenvolve softwares e programas.
                  Mapeia processos e realiza modelagem de dados, visando estudar
                  e implementar sistemas.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="relative w-full h-80">
                <Image
                  src="/areas-activity/image-2.png"
                  alt="Imagem 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-center text-xl font-bold text-blue-950">
                  Gestor de projetos de sistemas
                </h2>
                <p className="text-zinc-700 mt-4">
                  Faz a interligação entre a administração da empresa e a área
                  de computação.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="relative w-full h-80">
                <Image
                  src="/areas-activity/image-3.png"
                  alt="Imagem 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-center text-xl font-bold text-blue-950">
                  Técnico de desenvolvimento de softwares e aplicativos
                </h2>
                <p className="text-zinc-700 mt-4">
                  labora programas e jogos para computadores e celulares.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="relative w-full h-80">
                <Image
                  src="/areas-activity/image-4.png"
                  alt="Imagem 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-center text-xl font-bold text-blue-950">
                  Gerente de projetos de sistemas
                </h2>
                <p className="text-zinc-700 mt-4">
                  É responsável por gerenciar o projeto em todos seus estágios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-8 py-6 rounded-lg shadow-md">
          <Header title="Perfil" spanText="Profissional" />
          <p className="text-left px-28 text-zinc-600 text-lg my-3">
            O profissional formado em Análise e Desenvolvimento de Sistemas é
            capaz de analisar, projetar, desenvolver, implementar e manter
            sistemas de informação, com conhecimentos de programação, banco de
            dados, redes, engenharia de software, sistemas operacionais, entre
            outros.
          </p>
          <div className="ml-24">
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Análise de Requisitos
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Modelagem de Sistemas
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Desenvolvimento e Integração
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Testes e Qualidade
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Suporte e Manutenção
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Banco de Dados
              </span>
            </Link>
          </div>
        </section>

        <section className="px-8 py-6 rounded-lg shadow-md">
          <Header title="Estrutura" spanText="Curricular" />

          <p className="text-left px-28 text-zinc-600 text-lg my-3">
            O profissional formado em Análise e Desenvolvimento de Sistemas é
            capaz de analisar, projetar, desenvolver, implementar e manter
            sistemas de informação, com conhecimentos de programação, banco de
            dados, redes, engenharia de software, sistemas operacionais, entre
            outros.
          </p>

          <div className="ml-24">
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Análise de Requisitos
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Modelagem de Sistemas
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Desenvolvimento e Integração
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Testes e Qualidade
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Suporte e Manutenção
              </span>
            </Link>
            <Link
              href="#"
              className="links flex items-center text-base transition-all duration-300 py-2"
            >
              <ArrowRight
                size={20}
                className="text-orange-500 mr-2 transition-all duration-300 hover:mr-6"
              />
              <span className="text-zinc-700 hover:ml-5 transition-all duration-300">
                Banco de Dados
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
