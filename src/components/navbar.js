// src/components/Navbar.js 
import Link from 'next/link'; 
 
export default function Navbar() { 
  return ( 
    <nav className="bg-primary p-4 shadow-lg"> 
      <div className="flex gap-2"> 
  <Link href="/" className="text-gray-300 hover:bg-secondary hover:text-light px-3 py-2 
rounded-md transition-all duration-300"> 
Home 
</Link> 
<Link href="/about" className="text-gray-300 hover:bg-secondary hover:text-light px-3 
py-2 rounded-md transition-all duration-300"> 
About 
</Link> 
{/* Tambahkan ini */} 
<Link href="/posts" className="text-gray-300 hover:bg-secondary hover:text-light px-3 
py-2 rounded-md transition-all duration-300"> 
Posts 
</Link> 
<Link href="/contact" className="text-gray-300 hover:bg-secondary hover:text-light px-3 
py-2 rounded-md transition-all duration-300"> 
Contact 
</Link> 
</div>
          
  
    </nav> 
  ); 
}