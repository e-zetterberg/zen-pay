import React from "react";
import { redirect } from "next/navigation";
import { unstable_getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await unstable_getServerSession();
  console.log(session);

  if(!session) {
    redirect("/login");
  }


  return (
    <main className="main dashboard">
      <h1>Dashboard</h1>
    </main>
  );
};

export default Dashboard;
