import React from "react";
import GraphCard from "./GraphCard";
import BarGraph from "./charts/BarGraph";
import LineGraph from "./charts/LineGraph";
import EmojiCard from "./EmojiCard";

const Charts = () => {
  return (
    <div className="w-full h-full py-2 px-4">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
        <GraphCard>
          <BarGraph />
        </GraphCard>

        <GraphCard>
          <LineGraph />
        </GraphCard>

        <GraphCard>
          <EmojiCard/>
        </GraphCard>
      </div>
    </div>
  );
};

export default Charts;
