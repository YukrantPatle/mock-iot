'use client';
import { countState } from "@/app/lib/atoms";
import { decrementCountState, incrementCountState } from "@/app/lib/selectors";
import { Button } from "@/app/ui/button";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Page() {
    const [count, setCount] = useRecoilState(countState);
    const decrementCountStateValue = useRecoilValue(decrementCountState)
    const incrementCountStateValue = useRecoilValue(incrementCountState)
    return (
        <main className='w-full'>
            <h1 className="mb-4 text-2xl md:text-2xl font-semibold">
                Counter Page
            </h1>
            <div className="font-semibold">
                Count Value : {count}
            </div>
            <div className="flex">
                <div className="m-3">
                    <Button onClick={() => setCount(count - 1)}>Decrement</Button>
                    <div>Prev Value : {decrementCountStateValue}</div>
                </div>
                <div className="m-3">
                    <Button onClick={() => setCount(count + 1)}>Increment</Button>
                    <div>Next Value : {incrementCountStateValue}</div>
                </div>
            </div>
        </main>
    );
}