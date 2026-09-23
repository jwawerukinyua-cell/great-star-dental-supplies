import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark-only' | 'light';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  onClick,
}) => {
  const sizeMap = {
    sm: { iconWidth: 38, iconHeight: 34, titleClass: 'text-sm sm:text-base', subClass: 'text-[8.5px] sm:text-[9.5px]' },
    md: { iconWidth: 46, iconHeight: 40, titleClass: 'text-base sm:text-lg', subClass: 'text-[10px] sm:text-[11px]' },
    lg: { iconWidth: 58, iconHeight: 52, titleClass: 'text-xl sm:text-2xl', subClass: 'text-xs' },
    xl: { iconWidth: 74, iconHeight: 66, titleClass: 'text-2xl sm:text-3xl', subClass: 'text-sm' },
  };

  const current = sizeMap[size];
  const isLight = variant === 'light';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none cursor-pointer group ${className}`}
      id="brand-logo-container"
    >
      {/* Authentic Tooth Emblem with Cyan & Green Cusps and Roots matching official Great Star logo */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={current.iconWidth}
          height={current.iconHeight}
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm"
        >
          {/* Top-Left Cyan Ribbon Cusp */}
          <path
            d="M 60 28 C 48 27, 30 14, 18 14 C 10 14, 8 26, 12 34 C 14 38, 17 38, 20 36 C 26 31, 32 23, 46 25 C 54 26, 58 29, 60 28 Z"
            fill="#00A0E9"
          />

          {/* Top-Right Leaf-Green Ribbon Cusp */}
          <path
            d="M 52 18 C 66 14, 88 13, 102 18 C 108 20, 106 30, 100 34 C 94 38, 91 30, 81 24 C 71 19, 58 19, 52 18 Z"
            fill="#4EB846"
          />

          {/* Bottom-Left Cyan Root Hook */}
          <path
            d="M 22 64 C 23 74, 29 88, 39 88 C 47 88, 51 74, 52 69 C 53 66, 56 67, 55 71 C 52 82, 47 94, 36 94 C 24 94, 14 78, 14 64 C 14 61, 22 61, 22 64 Z"
            fill="#00A0E9"
          />

          {/* Bottom-Right Leaf-Green Root Hook */}
          <path
            d="M 64 72 C 66 69, 70 70, 71 74 C 74 82, 79 90, 87 90 C 94 90, 97 78, 98 67 C 99 64, 105 64, 105 68 C 103 81, 98 94, 84 94 C 74 94, 67 83, 64 72 Z"
            fill="#4EB846"
          />
        </svg>
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-tight ${current.titleClass} ${
              isLight ? 'text-white' : 'text-[#1d2c8c]'
            }`}
          >
            Great Star
          </span>
          <span
            className={`font-extrabold uppercase tracking-wide mt-0.5 ${current.subClass} ${
              isLight ? 'text-emerald-300' : 'text-slate-900'
            }`}
          >
            Dental Supplies Ltd
          </span>
        </div>
      )}
    </div>
  );
};
