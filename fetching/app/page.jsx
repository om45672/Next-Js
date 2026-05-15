import Image from "next/image";
import React from "react";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/timer", {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60,
      tags: ["timer"]
    }
  });
  const data = await response.json();
  return (
    <div>
      <h1>Nextjs Response (default)</h1>
      <p>Time: {data.readable}</p>
      <p>Request ID: {data.requestId}</p>
    </div>
  );
}
