interface FiltrosProps {
  categoriaActiva: string;
  onSeleccionarCategoria: (categoria: string) => void;
}

export const Filtros = ({ categoriaActiva, onSeleccionarCategoria }: FiltrosProps) => {
  const categorias = ['todas', 'calzado', 'ropa', 'accesorios'];

  return (
    <div className="filtros">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={categoriaActiva === cat ? 'activo' : ''}
          onClick={() => onSeleccionarCategoria(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};