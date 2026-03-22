interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Badge({ children, color, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}
      style={
        color
          ? { backgroundColor: `${color}15`, color }
          : undefined
      }
    >
      {children}
    </span>
  );
}
