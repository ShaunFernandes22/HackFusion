import React from 'react'
import GraphCard from './GraphCard'
import DoughnutChart from './charts/PieChart'
import MultiLineGraph from './charts/MultiLineGraph'
import MultiBarGraph from './charts/MultiBarGraph'

const HistoryInfo = () => {
  return (
    <div className="w-full min-height-screen py-2 px-4">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
            <GraphCard>
              <MultiLineGraph/>
            </GraphCard>

            <GraphCard>
              <DoughnutChart/>
            </GraphCard>

            <GraphCard>
              <MultiBarGraph/>
            </GraphCard>
        </div>
    </div>
  )
}

export default HistoryInfo