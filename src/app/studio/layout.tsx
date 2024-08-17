// app/studio/layout.tsx
import { ReactNode } from 'react';

interface SanityStudioLayoutProps {
  children: ReactNode;
}

export default function SanityStudioLayout({ children }: SanityStudioLayoutProps) {
  return (
    <div> 
      {children}
    </div>
  );
}
