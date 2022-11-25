import React from 'react';

function Loading() {
  return (
    <>
      <progress className="pure-material-progress-linear" />
      <main className="main dashboard--container">
        <div className="dashboard--account-overview">Account overview</div>
        <div className="dashboard--card">
          <div className="dashboard--current-balance">
            <div className="dashboard--current-balance-text">Current balance</div>
            <div className="dashboard--balance">
              <div className="dashboard--amount">Loading balance</div>
              <div className="dashboard--currency">€</div>
            </div>
          </div>
          <button type="button" className="dashboard--add-funds">+</button>
        </div>
      </main>
    </>
  );
}

export default Loading;
