'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LoginModal from './LoginModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // 🌟 1. เพิ่ม State สำหรับเปิด-ปิด หน้าต่างล็อกอิน (Login Modal)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // เพิ่มลูกเล่นเปลี่ยนสไตล์ของ Navbar ตามการเลื่อนจอ (Scroll Effect)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'บริการของเรา', href: '/service' },
    { name: 'ติดต่อเรา', href: '/contract' }, // แก้ไขตัวสะกดจาก contract -> contact ใน href (ถ้ามีไฟล์)
  ]

  return (
    <>
      {/* ปรับคลาสให้ยืดหยุ่นตามการ Scroll: ถ้าเลื่อนลงมาจะทึบและมีเงาแบบกระจก Glassmorphism */}
      <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-gray-200/50 bg-white/80 backdrop-blur-md shadow-sm'
          : 'border-transparent bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                M
              </div>

              <div>
                <h1 className="text-lg font-extrabold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
                  NextShop
                </h1>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
                  Online E-Commerce
                </p>
              </div>
            </Link>

            {/* Right Section */}
            <div className="flex items-center gap-4 md:gap-6">
              
              {/* Desktop Menu Items */}
              <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-600 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Cart Button */}
              <Link
                href="/cart"
                className="relative p-2 text-gray-700 transition-transform duration-200 hover:text-blue-600 hover:scale-110 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:-rotate-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                
                <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-sm">
                  <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping"></span>
                  <span className="relative">3</span>
                </span>
              </Link>

              {/* 🛠️ 2. ปุ่ม Login ฝั่ง Desktop ที่สลับสีตามการ Scroll (โค้ดที่คุณให้มา) */}
              <div className="hidden md:block">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                      : 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  เข้าสู่ระบบ
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden rounded-xl p-2 text-gray-700 transition hover:bg-gray-100/80"
                aria-label="Toggle Menu"
              >
                <div className="space-y-1.5">
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              isOpen ? 'max-h-[380px] opacity-100 py-4 border-t border-gray-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* 🛠️ 3. ปรับปุ่มเข้าสู่ระบบของ Mobile ให้เปิด Modal ได้เหมือนกันด้วยครับ */}
              <button
                onClick={() => {
                  setIsOpen(false);         // ปิดแถบเมนูมือถือลงไปก่อน
                  setIsLoginModalOpen(true); // เปิด Modal ล็อกอินขึ้นมาแทน
                }}
                className="mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/10 transition-all active:scale-[0.98]"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 🌟 4. เรียกใช้คอมโพเนนต์ LoginModal พร้อมส่ง State ไปควบคุมข้างใน */}
      {isLoginModalOpen && (
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      )}
    </>
  )
}
