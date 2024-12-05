import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { SidebarOpen } from 'lucide-react';
import Image from 'next/image';

export default function DisciplinasPage() {
  const utilidades = [
    'NOTÍCIAS',
    'REVISTA COOPEX',
    'DOWNLOADS',
    'BIBLIOTECA',
    'TRABALHE CONOSCO',
    'OUVIDORIA',
    'MATRÍCULA ACADÊMICA',
    'CALENDÁRIO ACADÊMICO',
  ];

  const disciplinasPorPeriodo = {
    '1º Período': [
      {
        foto: '/teacher/sormany.png',
        disciplina: 'Programação Estruturada',
        professor: 'Sormany',
      },
      {
        foto: '/teacher/angelica.png',
        disciplina: 'Engenharia de Requisitos',
        professor: 'Angélica',
      },
      { foto: '/teacher/dilma.png', disciplina: 'Inglês', professor: 'Dilma' },
      {
        foto: '/teacher/thiago-laurentino.png',
        disciplina: 'Arquitetura e Organização de Computadores',
        professor: 'Thiago Laurentino',
      },
      {
        foto: '/teacher/janne.png',
        disciplina: 'Fundamentos da Matemática e Lógica',
        professor: 'Janne',
      },
    ],
    '2º Período': [
      {
        foto: '/teacher/roberta.png',
        disciplina: 'Extensão 1',
        professor: 'Roberta',
      },
      {
        foto: '/teacher/roberta.png',
        disciplina: 'Fundamentos da Administração e Finanças',
        professor: 'Roberta',
      },
      {
        foto: '/teacher/pablo-roberto.png',
        disciplina: 'Programação Orientada a Objetos (POO)',
        professor: 'Pablo Roberto',
      },
      {
        foto: '/teacher/flavio.png',
        disciplina: 'Direitos Humanos',
        professor: 'Flávio',
      },
      {
        foto: '/teacher/keila.png',
        disciplina: '(Eletiva) Autoria Web',
        professor: 'Keila',
      },
      {
        foto: '/teacher/keila.png',
        disciplina: 'Engenharia de Software',
        professor: 'Keila',
      },
    ],
    '3º Período': [
      {
        foto: '/teacher/jose-neto.png',
        disciplina: 'Extensão 2',
        professor: 'José Neto',
      },
      {
        foto: '/teacher/jose-neto.png',
        disciplina: 'Estrutura de Dados',
        professor: 'José Neto',
      },
      {
        foto: '/teacher/jose-matheus.png',
        disciplina: 'Desenvolvimento Web 1',
        professor: 'José Matheus',
      },
      {
        foto: '/teacher/keila.png',
        disciplina: 'Banco de Dados 1',
        professor: 'Keila',
      },
      {
        foto: '/teacher/jose-neto.png',
        disciplina: 'Laboratório de Redes',
        professor: 'José Neto',
      },
    ],
    '4º Período': [
      {
        foto: '/teacher/angelica.png',
        disciplina: 'Design de Interação e UX',
        professor: 'Angélica',
      },
      {
        foto: '/teacher/jose-matheus.png',
        disciplina: 'Desenvolvimento Web 2',
        professor: 'José Matheus',
      },
      {
        foto: '/teacher/keila.png',
        disciplina: 'Banco de Dados 2',
        professor: 'Keila',
      },
      {
        foto: '/teacher/allyson.png',
        disciplina: 'Desenvolvimento Mobile',
        professor: 'Allyson',
      },
      {
        foto: '/teacher/allyson.png',
        disciplina: '(Eletiva) Desenvolvimento de Jogos',
        professor: 'Allyson',
      },
      {
        foto: '/teacher/pablo-roberto.png',
        disciplina: 'Métodos Avançados de Programação (MAP)',
        professor: 'Pablo Roberto',
      },
    ],
    '5º Período': [
      {
        foto: '/teacher/angelica.png',
        disciplina: 'Estágio Supervisionado',
        professor: 'Angélica',
      },
      {
        foto: '/teacher/pablo-roberto.png',
        disciplina: 'Projeto de Banco de Dados',
        professor: 'Pablo Roberto',
      },
      {
        foto: '/teacher/jose-matheus.png',
        disciplina: 'Projeto Web',
        professor: 'José Matheus',
      },
      {
        foto: '/teacher/angelica.png',
        disciplina: 'Projeto UX',
        professor: 'Angélica',
      },
      {
        foto: '/teacher/angelica.png',
        disciplina: 'Projeto de Engenharia de Software',
        professor: 'Angélica',
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Banner name="Disciplinas" />
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row-reverse">
        <nav className="bg-white shadow-md w-full md:w-1/4 p-6 mt-10 mr-10 h-1/4">
          <h2 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
            <SidebarOpen size={24} /> UTILIDADES
          </h2>
          <ul className="space-y-4">
            {utilidades.map((item, index) => (
              <li
                key={index}
                className="text-blue-950 hover:text-orange-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-6">
          <Header title="Estrutura" spanText="Curricular" />

          {/* Listagem de Períodos e Disciplinas */}
          {Object.entries(disciplinasPorPeriodo).map(
            ([periodo, disciplinas]) => (
              <section key={periodo} className="space-y-6">
                <h2 className="text-xl font-semibold text-blue-950">
                  {periodo}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {disciplinas.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden flex items-center"
                    >
                      {/* Foto do Professor */}
                      <Image
                        src={item.foto}
                        alt={`Foto de ${item.professor}`}
                        width={100}
                        height={100}
                        className="w-24 h-24 object-cover"
                      />
                      {/* Informações */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-blue-950">
                          {item.disciplina}
                        </h3>
                        <p className="text-gray-600">{item.professor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          )}
        </main>
      </div>
    </>
  );
}
