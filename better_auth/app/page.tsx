import { requireAuth } from "@/lib/auth-guard";
import Image from "next/image";
import LogoutButton from "@/components/logout-button"
import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

async function Home() {
  const session = await requireAuth();

  const { user } = session;
  
  const dbuser = await prisma.user.findUnique({
    where: {
      id: session?.user?.id
    },
    select: {
      plan: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    }
  })
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
      <LogoutButton />
      
      <div className="flex flex-col items-center justify-center gap-10 space-y-2">  
        <Badge variant={dbuser?.plan==="FREE"?"default":"destructive"}>
          {dbuser?.plan}
        </Badge>
        </div>
      {
        dbuser?.plan === "FREE" && (
          <Link href={"/pricing"} className={buttonVariants()}>
            Go to Pricing
          </Link>
        )
        }
    </div>
  );
}

export default Home;
