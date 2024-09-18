export default function ColorBox({
    color,
    intensity,
}: {
    color: string;
    intensity: number;
}){
    return(
        <div className={`bg-${color}-${intensity}  py-3 rounded-lg border border-gray-200`}>{color}</div>
    )
}