'use client';
import { countState } from "@/app/lib/atoms";
import { useRecoilValue } from "recoil";

export default function Page() {
    const count = useRecoilValue(countState);
    return (
        <main className='w-full'>
            <h1 className="mb-4 text-2xl md:text-2xl font-semibold">
                Profile Page
            </h1>
            <div className="font-semibold">
                Count Value : {count}
            </div>
        </main>
    );
}