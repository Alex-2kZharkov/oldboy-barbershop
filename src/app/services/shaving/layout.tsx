import { ReduxProvider } from '@/store/provider';
import { PropsWithChildren } from 'react';

export default async function ShavingLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <ReduxProvider>{children}</ReduxProvider>
    </main>
  );
}
