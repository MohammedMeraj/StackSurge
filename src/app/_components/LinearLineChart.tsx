"use client"
import * as React from 'react'

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const LinearLineChart = () => {


      
const chartData = React.useMemo(() => [
    { month: "Sat", desktop: 84 },
    { month: "Sun", desktop: 423 },
    { month: "Mon", desktop: 136 },
    { month: "Tue", desktop: 73 },
    { month: "Wed", desktop: 512 },
    { month: "Thurs", desktop: 321 },
    { month: "Friday", desktop: 623 },
    
  ],[])
  
  const chartConfig = {
    desktop: {
      label: "Investors",
      color: "#000",
    },
  } satisfies ChartConfig



  return (
    <Card>
      <CardHeader>
        <CardTitle>Investors : This Week</CardTitle>
        <CardDescription>Showing the investors invested in your company in this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}

export default LinearLineChart