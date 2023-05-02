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
      <div className='flex flex-row text-gray-700 bg-gray-200 dark:bg-gray-900 p-4 pt-24 h-screen overflow-auto'>
        <main className='w-full h-full'>{children}</main>
      </div>
      {/* <footer>Footer content here</footer> */}
    </div>
  );
}

export default Layout;
