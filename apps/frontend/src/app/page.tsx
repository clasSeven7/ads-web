import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center">
          <Image
            src="/bg.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-white justify-center text-7xl font-semibold px-28">
            <h1 className="text-center">
              ANALISE E DESENVOLVIMENTO DE SISTEMAS
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
