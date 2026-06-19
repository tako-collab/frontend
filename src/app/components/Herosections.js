"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSections() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // จับพิกัดเมาส์เพื่อทำเอฟเฟกต์ไฟวิ่งตาม (Dynamic Spotlight)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 lg:min-h-[85vh] flex items-center">
      
      {/* 1. แสง Spotlight วิ่งตามเมาส์แบบเนียน ๆ (Dynamic Background Glow) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      {/* 2. ลายตาราง Tech Grid + แสงไฟเรืองแสงพื้นหลัง */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* ส่วนเนื้อหาฝั่งซ้าย */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
              🚀 ยินดีต้อนรับสู่โลกนวัตกรรมแห่งอนาคต
            </span>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-[1.15]">
              สร้างอนาคตด้วย
              <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-400 bg-clip-text font-black text-transparent animate-gradient">
                เทคโนโลยีและนวัตกรรม
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-xl mx-auto lg:mx-0">
              รับพัฒนาเว็บไซต์ แอปพลิเคชัน และระบบสารสนเทศครบวงจร 
              ด้วยเทคโนโลยีล้ำสมัยที่พร้อมจะขับเคลื่อนและยกระดับองค์กรของคุณสู่ยุคดิจิทัล
            </p>

            {/* ปุ่มกดที่มีลูกเล่น Glow Effect */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                เรียนรู้เพิ่มเติม
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-8 py-3.5 font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900 hover:text-white"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          {/* ส่วนเนื้อหาฝั่งขวา (รูปภาพ + การ์ดลอยอเนกประสงค์) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* แสงออร่าหลังรูป */}
              <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-25 blur-3xl animate-pulse"></div>
              
              {/* กรอบรูปหลักสไตล์กระจก */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/40 p-3 backdrop-blur-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                  alt="Modern Technology Space"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* 3. การ์ดลอย (Floating Badges) เพิ่มความมีมิติทางสายตา */}
              {/* กล่องที่ 1: ฝั่งซ้ายบน */}
              <div className="absolute -top-6 -left-6 transform -translate-x-2 animate-bounce [animation-duration:4s] hidden sm:flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  ⚡
                </div>
                <div>
                  <p className="text-xs text-slate-400">⚡ Performance</p>
                  <p className="text-sm font-bold text-white">99.9% Uptime</p>
                </div>
              </div>

              {/* กล่องที่ 2: ฝั่งขวาล่าง */}
              <div className="absolute -bottom-6 -right-6 transform translate-x-2 animate-bounce [animation-duration:5s] hidden sm:flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  ⭐
                </div>
                <div>
                  <p className="text-xs text-slate-400">Success Rate</p>
                  <p className="text-sm font-bold text-white">100+ Projects</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}