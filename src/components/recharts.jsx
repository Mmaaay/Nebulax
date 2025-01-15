import PropTypes from "prop-types";

import { LineChart, Line, Tooltip, YAxis } from "recharts";

const patterns = {
  bluePattern: [
    { value: 800 },
    { value: 400 },
    { value: 900 },
    { value: 300 },
    { value: 1000 },
    { value: 500 },
    { value: 1200 },
  ],
  greenPattern: [
    { value: 1000 },
    { value: 400 },
    { value: 800 },
    { value: 300 },
    { value: 900 },
  ],
};

const SmoothLineChart = ({ pattern = "bluePattern" }) => {
  const chartData = patterns[pattern] || patterns.bluePattern;
  const strokeColor = pattern === "bluePattern" ? "#1e40af" : "#22c55e";

  return (
    <div
      className="w-full h-20 sm:h-24 md:h-28 lg:h-20"
      style={{ transform: "skewY(-20deg)" }}
    >
      <LineChart
        width={
          window.innerWidth < 640 ? 200 : window.innerWidth < 768 ? 220 : 240
        }
        height={
          window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 70 : 80
        }
        data={chartData}
        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
      >
        <YAxis hide={true} domain={["dataMin - 100", "dataMax + 100"]} />
        <Tooltip content={() => null} cursor={false} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={strokeColor}
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default SmoothLineChart;

SmoothLineChart.propTypes = {
  pattern: PropTypes.oneOf(["bluePattern", "greenPattern"]),
};
