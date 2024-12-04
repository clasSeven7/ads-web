interface NavbarProps {
  title: string;
  spanText: string;
}

export default function Header({ title, spanText }: NavbarProps) {
  return (
    <h1 className="text-center font-bold text-4xl text-blue-950 py-8 pb-12">
      {title}
      <span
        className="inline-block bg-orange-500 text-white py-2 px-12"
        style={{
          clipPath:
            'polygon(100% 0%, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)',
        }}
      >
        {spanText}
      </span>
    </h1>
  );
}
