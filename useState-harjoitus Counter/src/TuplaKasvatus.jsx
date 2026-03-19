function tuplakasvatus({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 2)}>
      TuplaKasvatus
    </button>
  );
}

export default tuplakasvatus;