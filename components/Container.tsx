interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Container({ children, size = 'md', className = '' }: ContainerProps) {
  const sizeClass = size === 'sm' ? 'container-sm' : size === 'lg' ? 'container-xl' : 'container';
  return (
    <div className={`${sizeClass} ${className}`}>
      {children}
    </div>
  );
}
