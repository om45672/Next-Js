import { requireAuth } from "@/lib/auth-guard";
import Image from "next/image";
import LogoutButton from "@/components/logout-button"

async function Home() {
  const session = await requireAuth();

  const {user} = session;
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-5">
      <Image
        src={user.image!}
        width={50}
        height={50}
        alt="userimage" 
        className="h-50 w-50 object-contain rounded-full"
      />
      <h2 className="text-3xl font-bold mt-5">{user.name}</h2>
      <p className="text-xl font-semibold text-accent-foreground">{user.email}</p>
      <LogoutButton/>
    </div>
  );
}

export default Home;
