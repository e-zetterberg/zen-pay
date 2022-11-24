import React from "react";
import { redirect } from "next/navigation";
import { unstable_getServerSession } from "next-auth";
import "../styles/Dashboard.css"

const Dashboard = async () => {
  const session = await unstable_getServerSession();
  console.log(session);

  if(!session) {
    redirect("/login");
  }


  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
    </main>
  );
};

export default Dashboard;
