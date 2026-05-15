import React from "react";
import Link from "next/link";
const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col">
        <Link href={"/dashboard/reports"}>View Reports</Link>
        <Link href={"/profile"}>Go to profile</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
