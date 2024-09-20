"use client"
import { plotData } from "@/app/lib/data";
import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";

const data = plotData.map(data => ({
    speed: data.speed,
    time: new Date(data.time).getSeconds()
}))

export default function Page() {
    const containerRef = useRef();
    useEffect(() => {
        if (plotData === undefined) return;
        const plot = Plot.plot({
            y: { grid: true },
            x: { grid: true },
            marks: [
                Plot.ruleY([0]),
                Plot.lineY(data, { x: "time", y: "speed", tip: true, marker: "circle" })

            ]

        });
        containerRef.current.append(plot);
        return () => plot.remove();
    }, [plotData]);

    return <main>
        <h1 className="mb-4 text-2xl md:text-2xl font-semibold">
                Plot 1
            </h1>
        <div ref={containerRef} />
    </main>;
}