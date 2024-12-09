import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Code, Folder } from 'lucide-react';

export default function Projetos() {
  return (
    <>
      <Navbar />
      <Banner name="Projetos" />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-950 mb-4">
          Projetos do Curso de ADS
        </h1>

        <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Ano: Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Parceria: Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="com-alunos">Com Alunos</SelectItem>
              <SelectItem value="coordenacao">Coordenação</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Tecnologia: Ex: Django, React" />
        </section>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Parcerias e Projetos da Coordenação
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Projeto WebLinker</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Uma plataforma desenvolvida para compartilhamento de links e
                recursos educacionais.
              </p>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Folder /> Parceria: Com Alunos
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar /> Data de Conclusão: Março de 2024
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Code /> Tecnologias: Django, React
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-800 text-white">Saiba Mais</Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Kitanda Delivery</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Aplicativo focado em vendas locais, desenvolvido pela
                coordenação para fortalecer a comunidade.
              </p>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Folder /> Parceria: Coordenação
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar /> Data de Conclusão: Junho de 2024
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Code /> Tecnologias: Flutter
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-800 text-white">Saiba Mais</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
