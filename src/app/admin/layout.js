"use client";
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import store from '@/store/store';
import { Provider } from 'react-redux';

export default function AdminLayout({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-4 pt-[110px] pb-10">
        {children}
      </div>
      <Footer />
    </Provider>
  );
}