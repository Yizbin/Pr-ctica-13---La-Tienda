import { useState } from 'react';
import { productos as productosIniciales } from './datos';
import { Producto, ItemCarrito } from './types';
import { Layout } from './components/Layout';
import { Filtros } from './components/Filtros';
import { TarjetaProducto } from './components/TarjetaProducto';

export const App = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todas');
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  const handleAgregarAlCarrito = (producto: Producto) => {
    if (producto.existencia <= 0) return;

    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.producto.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevCarrito, { producto, cantidad: 1 }];
    });
  };


  const productosFiltrados = categoriaActiva === 'todas'
    ? productosIniciales
    : productosIniciales.filter((p) => p.categoria === categoriaActiva);

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const precioTotal = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);

  return (
    <Layout cantidadTotal={cantidadTotal} precioTotal={precioTotal}>
      <Filtros
        categoriaActiva={categoriaActiva}
        onSeleccionarCategoria={setCategoriaActiva}
      />
      <div className="catalogo">
        {productosFiltrados.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            onAgregar={handleAgregarAlCarrito}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
