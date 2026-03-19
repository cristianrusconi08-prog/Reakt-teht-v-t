function nollaus({ setCount }) {
  return (
    <button onClick={() => setCount(0)}>
      Nollaus
    </button>
  );
}

export default nollaus;