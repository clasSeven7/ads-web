// components/InfoSection.tsx
import { LucideIcon } from 'lucide-react';

interface InfoItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface InfoSectionProps {
  items: InfoItem[];
}

export default function InfoSection({ items }: InfoSectionProps) {
  return (
    <div className="bg-white shadow-2xl rounded-lg">
      <div className="py-4 pl-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-left items-center gap-1 mb-3"
          >
            <item.icon size={20} className="text-blue-950 font-bold" />
            <span className="text-blue-950 font-bold">{item.title}:</span>
            <span className="text-zinc-700">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
