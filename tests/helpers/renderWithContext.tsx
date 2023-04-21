import { render } from '@testing-library/react';
import { MyContext } from '@/context/Context';
import { IContext } from '@/Interfaces/IContext';
import { ReactNode, ReactElement } from 'react';

type ContextProviderProps = {
  children: ReactNode;
};

const renderWithContext = (ui: ReactElement, contextValue: IContext) => render(ui, {
  wrapper: ({ children } : ContextProviderProps) => (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  ),
});

export default renderWithContext;
