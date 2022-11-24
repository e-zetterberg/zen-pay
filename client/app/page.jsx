import React from "react";
import { redirect } from "next/navigation";
import { unstable_getServerSession } from "next-auth";
import "../styles/Dashboard.css"
import { MdOutlineAddCircleOutline } from "react-icons/md"

const Dashboard = async () => {
  const session = await unstable_getServerSession();

  if(!session) {
    redirect("/login");
  }

  return (
    <main className="dashboard--container">
      <div className="dashboard--account-overview">Account overview</div>
      <div className="dashboard--card">
        <div className="dashboard--balance">
          <div className="dashboard--amount">204</div>
          <div className="dashboard--currency">EUR - Euro</div>
        </div>
        <MdOutlineAddCircleOutline className="dashboard--add-funds"/>
      </div>
    </main>
  );
};

export default Dashboard;
