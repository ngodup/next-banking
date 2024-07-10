// "use cleint";

import React from "react";
import { formatAmount } from "../lib/utils";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col-gap-6">
        <div className="header-2">Bank Accounts: {totalBanks}</div>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex gap-2">
            {/* <CountUp end={100} /> Error: useRef only works in Client Components. Add the "use client" Solution convert to use client or create component called AnimatedCounter  */}
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
