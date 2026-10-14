import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  cantidadTotal: number;
  precioTotal: number;
}

export const Layout = ({ children, cantidadTotal, precioTotal }: LayoutProps) => {
  return (
    <div className="layout">
      <Header cantidadTotal={cantidadTotal} />
      <main className="contenido">{children}</main>
      <Footer cantidadTotal={cantidadTotal} precioTotal={precioTotal} />
    </div>
  );
};