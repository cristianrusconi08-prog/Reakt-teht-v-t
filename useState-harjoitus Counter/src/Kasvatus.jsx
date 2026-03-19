function kasvatus({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Kasvatus
    </button>
  );
}

export default kasvatus;