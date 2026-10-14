interface FooterProps {
  cantidadTotal: number;
  precioTotal: number;
}

export const Footer = ({ cantidadTotal, precioTotal }: FooterProps) => {
  return (
    <footer className="pie-pagina">
      <p>
        Total en carrito ({cantidadTotal} productos): <strong>${precioTotal.toFixed(2)} MXN</strong>
      </p>
    </footer>
  );
};