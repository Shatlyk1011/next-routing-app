"use client"
import { useState, useEffect } from "react"

const Timer = () => {
  const [seconds, setSeconds] = useState(20)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        // When it reaches 0, reset to 20
        if (prev === 0) {
          return 20
        }
        return prev - 1
      })
    }, 1000)

    // Clear interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return <div className="inline-block">{seconds}</div>
}

export default Timer
