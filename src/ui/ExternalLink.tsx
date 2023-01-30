import { HiArrowRight } from 'react-icons/hi';

export const ExternalLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="inline-flex gap-x-8 rounded-lg bg-orange-400 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      <div>{children}</div>

      <HiArrowRight className="block w-4" />
    </a>
  );
};
