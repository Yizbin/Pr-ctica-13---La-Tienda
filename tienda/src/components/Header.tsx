interface HeaderProps {
  cantidadTotal: number;
}

export const Header = ({ cantidadTotal }: HeaderProps) => {
  return (
    <header className="encabezado">
      <div className="marca">
        <img src="/img/logo.svg" alt="Logo" className="logo" />
        <h1>La Tienda</h1>
      </div>
      <div className="carrito-resumen">
        <span>🛒 Carrito: {cantidadTotal} piezas</span>
      </div>
    </header>
  );
};