import { AddDevice } from '@/app/ui/devices/buttons';
import DevicesTable from '@/app/ui/devices/table';
import Search from '@/app/ui/search';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
  
    return (
        <main className='w-full'>
            <h1 className="mb-4 text-xl md:text-2xl">
                Dashboard
            </h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search devices..." />
                <AddDevice />
            </div>
            <div>
                <DevicesTable query={query} currentPage={currentPage}/>
            </div>
        </main>
    );
}