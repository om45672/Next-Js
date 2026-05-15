"use client";
import React, { useEffect, useState } from "react";

const ClientPage = () => {
  const [cnt, setcnt] = useState(0);
    const [userData, setUserData] = useState(null);
    const [origin, setOrigin] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users/aestheticsuraj234");
      const data = await res.json();
      setUserData(data);
    }
      fetchData();
    setOrigin(window.location.origin);
  }, []);
  return (
    <div>
      <h2>Client Component Counter</h2>
      <div className="flex">
        <p>Count: {cnt}</p>
        <button
          onClick={() => setcnt(cnt + 1)}
          className="ml-3 bg-green-400 rounded-lg hover:cursor-pointer"
        >
          increase cnt
        </button>
        <button
          onClick={() => setcnt(cnt - 1)}
          className="ml-3 bg-red-400 rounded-lg hover:cursor-pointer"
        >
          decrease cnt
        </button>
      </div>
          {JSON.stringify(userData)}
          {origin}
    </div>
  );
};

export default ClientPage;
