'use client';
export default function Footer() {
    const year = new Date().getFullYear(); 
  
    return (
      <footer className="py-6 px-4 border-t bg-muted/30 text-center">
        <p>© {year} Ela Arjomandi. All rights reserved.</p>
      </footer>
    );
  }
  