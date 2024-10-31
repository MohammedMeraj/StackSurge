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
    { month: "January", desktop: 523 },
    { month: "February", desktop: 253 },
    { month: "March", desktop: 253 },
    { month: "April", desktop: 163 },
    { month: "May", desktop: 725 },
    { month: "June", desktop: 416 },
    
  ],[])
  
  const chartConfig = {
    desktop: {
      label: "Sales",
      color: "#000",
    },
  } satisfies ChartConfig



  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales</CardTitle>
        <CardDescription>Showing sales data for your company</CardDescription>
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