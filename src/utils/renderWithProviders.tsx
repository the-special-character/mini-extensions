import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import {  PreloadedState } from '@reduxjs/toolkit';
import { AppStore, RootState, setupStore } from '../core/store/configureStore';


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
  }
  
  export function renderWithProviders(
    ui: React.ReactElement,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      store = setupStore(preloadedState),
      ...renderOptions
    }: ExtendedRenderOptions = {}
  ) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
      return <Provider store={store}>{children}</Provider>
    }
  
    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }