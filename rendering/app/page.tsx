
export default async function Home() {
  const res = await fetch("https://api.github.com/users/aestheticsuraj234");
  const data = await res.json();
  return (
    <div>
      <p>
        {JSON.stringify(data)};
      </p>
    </div>
  );
}
