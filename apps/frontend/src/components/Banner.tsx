import Image from 'next/image';

interface BannerProps {
  name: string;
}

export default function Banner({ name }: BannerProps) {
  return (
    <>
      <div className="relative h-96">
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
              <h1 className="text-center text-7xl font-bold mt-36 text-transform: uppercase">
                {name}
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
