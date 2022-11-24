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
    <main className="main dashboard--container">
      <div className="dashboard--account-overview">Account overview</div>
      <div className="dashboard--card">
        <div className="dashboard--current-balance">
          <div className="dashboard--current-balance-text">Current balance</div>
          <div className="dashboard--balance">
            <div className="dashboard--amount">204</div>
            <div className="dashboard--currency">€</div>
          </div>
        </div>
        <button className="dashboard--add-funds">+</button>
      </div>
    </main>
  );
};

export default Dashboard;
