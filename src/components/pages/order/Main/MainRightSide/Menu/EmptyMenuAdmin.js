export default function EmptyMenuAdmin({ onReset }) {
  return (
    <div>
      <span>Pas de produit</span>
      <button onClick={onReset}>Reset menu</button>
    </div>
  );
}