import React from 'react';
// import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import clsx from 'clsx';
import RootProvider from '@src/shared/provider/RootProvider';
// import keystoreStorage from '@src/shared/storages/networkStorage';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <RootProvider>
      <div
        className={clsx('App', theme === 'light' ? ' zm-bg-page text-white' : ' zm-bg-page text-white')}
        // style={{
        //   backgroundColor: theme === 'light' ? '#fff' : '#000',
        // }}
      >
        {/* <header className="App-header" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme === 'light' && '#0281dc', marginBottom: '10px' }}>
          Learn React!
        </a>
        <button
          style={{
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#000' : '#fff',
          }}
          onClick={exampleThemeStorage.toggle}>
          Toggle theme
        </button>
      </header> */}
        <RouterProvider router={router} />
      </div>
    </RootProvider>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
