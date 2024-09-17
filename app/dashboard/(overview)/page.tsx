import { AddDevice } from '@/app/ui/devices/buttons';
import Search from '@/app/ui/search';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default async function Page() {

    return (
        <main>
            <h1 className="mb-4 text-xl md:text-2xl">
                Dashboard
            </h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <AddDevice />
            </div>
        </main>
    );
}