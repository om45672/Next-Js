import Image from "next/image";
import { Button } from "@/components/ui/button"
import { connectDB } from "@/lib/db";

export default async function Home() {

  await connectDB();

  return (
    <Button className="max-w-30">Hello world</Button>
  );
}
