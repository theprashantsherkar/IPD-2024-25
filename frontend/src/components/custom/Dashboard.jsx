import React from 'react'
import Card from './Card'
import { Sprout } from 'lucide-react'
function Dashboard() {
    return (
        <div className='h-screen flex items-center justify-center bg-black text-white'>
            <div className='w-max h-max p-10 flex flex-col gap-5 items-center justify-center border rounded-lg shadow-md shadow-slate-700 '>
                <div className='text-3xl font-semibold flex flex-row items-center gap-3'>
                    <Sprout className='scale-150 text-green-400'/>
                    <h1>SmartKrishi</h1>
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
        </div>
  )
}

export default Dashboard