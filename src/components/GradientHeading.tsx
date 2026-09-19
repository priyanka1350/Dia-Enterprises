import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

/**
 * GradientHeading — applies the site's brand gradient (green → brown)
 * to any section or page headline. Use `as` to control the HTML tag.
 */
export function GradientHeading({
  children,
  as: Tag = 'h2',
  className = '',
}: GradientHeadingProps) {
  return (
    <Tag
      className={`bg-clip-text text-transparent inline-block ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #597124 0%, #7a6828 40%, #8B5934 100%)',
      }}
    >
      {children}
    </Tag>
  );
}
