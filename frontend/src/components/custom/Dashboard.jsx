import React from 'react'
import Card from './Card'

function Dashboard() {
    return (
        <div className='w-max h-max p-10 flex flex-col gap-5 items-center justify-center border rounded-lg shadow-lg shadow-slate-400 '>
            <div className='text-3xl font-semibold'>
                IPD 2024-25
            </div>
            <div className='text-2xl font-medium'>
                ESP32 Soil Sensor Dashboard
            </div>
            <div className='flex flex-row items-center justify-around gap-5 '>
                <Card title={"Nitrogen"} amount={70} unit={"%"} />
                <Card title={"Potassium"} amount={70} unit={"%"} />
                <Card title={"Phosphorus Content"} amount={80} unit={"%"} />

            </div>
            <div className='flex flex-row items-center justify-around gap-5'>
                <Card title={"Soil Mositure"} amount={70} unit={"%"} />
                <Card title={"Temperature "} amount={80} unit={"°C"} />
                <Card title={"Humidity"} amount={80} unit={"%"} />
                
            </div>
        </div>
  )
}

export default Dashboard