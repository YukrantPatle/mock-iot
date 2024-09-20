"use client"
import { plotData, plotData2 } from "@/app/lib/data";
import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";

export default function Page() {
    const containerRef = useRef();

    useEffect(() => {
        if (plotData === undefined) return;
        const plot = Plot.plot({
            y: { grid: true },
            x: { grid: true },
            marks: [
                Plot.ruleY([0]),
                Plot.lineX(plotData, { x: "time", y: "speed", tip: true, marker: "circle" ,stroke:"red" }),
                Plot.lineX(plotData2, { x: "time", y: "speed", tip: true, marker: "circle" })

            ]

        });
        containerRef.current.append(plot);
        return () => plot.remove();
    }, [plotData]);

    return <main>
        <h1 className="mb-4 text-2xl md:text-3xl font-semibold">
                Plot 2
            </h1>
        <div ref={containerRef} />
    </main>;
}