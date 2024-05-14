export default function NewPage({ params}) {
  return (
    <div>
      <h1>New {params.id}</h1>
      <p>News content</p>
    </div>
  );
}