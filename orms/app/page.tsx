import { createUser, getUser } from "@/actions/action";

export default async function Home() {

  const data = await getUser();
  console.log(data);

  return (
    <div className="flex flex-col">
      <h1>Create User</h1>
      
      <form action={createUser}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <button type="submit">Create User</button>
      </form>
      
    </div>
  );
}
