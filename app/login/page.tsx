
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
};
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="mt-5 flex w-full max-w-[400px] flex-col">
        <div className="flex w-full items-end rounded-lg bg-violet-600 p-3 mt-3 mb-1">
          <div className="w-32 text-white text-2xl md:w-36">
            Mock-IOT
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}