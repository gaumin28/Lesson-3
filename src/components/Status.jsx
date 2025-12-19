export default function Status({ progress, number }) {
  return (
    <div id="status-bar">
      <div className="progress-box">
        <p>{progress}</p>
        <p>{number}</p>
      </div>

      <div className="add-box">
        <button>+</button>
        <button>...</button>
      </div>
    </div>
  );
}
