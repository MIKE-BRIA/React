export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        {marks.map((mark) => (
          <li key={mark.id}></li>
        ))}
      </ul>
    </>
  );
}
