function vahennys({ count, setCount }) {
  return (
    <button onClick={() => setCount(count - 1)}>
      Vähennys
    </button>
  );
}

export default vahennys;