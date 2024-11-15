"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useWindowSize from "@/hooks/useWindowSize";
import { analytics } from "@/data/analytics";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const AnalyticsChart: React.FC = () => {
  const { width } = useWindowSize();
  const data = {
    labels: analytics.map((item) => item.name),
    datasets: [
      {
        label: "Views",
        data: analytics.map((item) => item.amt),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.5,
        fill: false,
      },
    ],
    options: {
      maintainAspectRatio: false,
    },
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For The Last 12 Months</CardTitle>
        <CardDescription>Views per month</CardDescription>
      </CardHeader>
      <CardContent>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;
