"use client"

import GoogleSignIn from '@/components/fragments/authFireBase';
import { useState, useEffect } from 'react';

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between min-h-screen py-40 mx-auto max-w-7xl">
      <div className="relative isolate">
        <GoogleSignIn />
      </div>
    </main>
  );
}
