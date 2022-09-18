export default function App() {
  return (
    <div className="container">
      <div className="slider">
        <div className="item-list">
          <div className="item">
            <p className="number">0</p>
          </div>
          <div className="item">
            <p className="number">1</p>
          </div>
          <div className="item">
            <p className="number">1</p>
          </div>
        </div>
        <div className="navigation">
          <button className="arrow">-</button>
          <button className="arrow">+</button>
        </div>
      </div>
    </div>
  );
}
