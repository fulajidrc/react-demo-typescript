import { ReactNode } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/types';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const configStore = useSelector((state: RootState) => state.config);
  const { darkMode } = configStore;
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header />
        <main>{children}</main>
      {/* <footer>Footer content here</footer> */}
    </div>
  );
}

export default Layout;
