import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Logo = ({
  className,
  width = 150,
  height = 50,
  priority = false
}: LogoProps) => {
  return (
    <div className={cn('relative inline-block', className)}>
      <img
        src="/src/assets/images/logo.webp"
        alt="Logo"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="w-auto h-auto object-contain"
      />
    </div>
  );
};
