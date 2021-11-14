import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import axios from "axios";
import Jobcard from './Jobcard';

const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
        
       
    }, [])

    useEffect(() => {
        console.log(data)
    },[data])
    
    async function getData() {
        let jobdata = await axios.get("http://localhost:3000/job")

        setData(jobdata.data.jobs)
    }
    return (
        <>  
           
            <div className="main1">
                <Navbar />

                <div className="cardbody">

                    {data.map((el) => {
                        return (
                            <Jobcard data={el} />
                        )
                    })}

                </div>
            </div>

          


        </>
    )
}

export default Main
