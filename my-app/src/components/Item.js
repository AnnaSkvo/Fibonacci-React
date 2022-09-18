export default function Item({ styleClass, number }) {
    return (
      <div title={number} className={"item " + styleClass}>
        <p className="number">{number}</p>
      </div>
    );
  }