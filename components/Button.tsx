
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark-outline';
  size?: 'default' | 'sm';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-black uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 text-center px-8 lg:px-12";
  
  const variants = {
    primary: "bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_rgba(255,255,255,0.1)] border-2 border-white/10 active:bg-gray-200",
    secondary: "bg-purple-600 text-white hover:bg-purple-500 shadow-[0_20px_40px_-10px_rgba(147,51,234,0.3)]",
    outline: "border-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20 backdrop-blur-sm",
    dark_outline: "border-2 border-white/5 bg-black/60 text-white hover:text-white hover:bg-white/10 hover:border-purple-500/50 backdrop-blur-md shadow-xl",
    ghost: "text-gray-400 hover:text-white bg-transparent hover:bg-white/5"
  };

  const sizes = size === 'sm' ? "py-2.5 px-6 text-[10px]" : "py-4 lg:py-6 text-[11px] sm:text-xs";
  const widthClass = fullWidth ? "w-full" : "";

  // Mapeamento da chave da variante devido à diferença de hífen vs underscore nos objetos JS
  const variantClass = variant === 'dark-outline' ? variants.dark_outline : variants[variant as keyof typeof variants];

  return (
    <button 
      className={`${baseStyles} ${variantClass} ${sizes} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 block">{children}</span>
    </button>
  );
};

export default Button;
