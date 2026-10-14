import { Producto } from '../types';

interface TarjetaProductoProps {
  producto: Producto;
  onAgregar: (producto: Producto) => void;
}

export const TarjetaProducto = ({ producto, onAgregar }: TarjetaProductoProps) => {
  const sinStock = producto.existencia <= 0;

  return (
    <div className="tarjeta-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">${producto.precio.toFixed(2)}</p>
      <p className="existencia">
        {sinStock ? <span className="agotado">Agotado</span> : `Existencias: ${producto.existencia}`}
      </p>
      <button 
        disabled={sinStock} 
        onClick={() => onAgregar(producto)}
      >
        {sinStock ? 'Agotado' : 'Agregar al carrito'}
      </button>
    </div>
  );
};