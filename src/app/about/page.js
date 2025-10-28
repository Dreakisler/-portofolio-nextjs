// src/app/about/page.js 
import Image from 'next/image'; // Jangan lupa import! 
export default function AboutPage() { 
return ( 
<main className="container mx-auto px-4 py-12"> 
      <h1 className="text-4xl font-bold text-center mb-10">Tentang Saya</h1> 
 
      <div className="flex flex-col md:flex-row items-center gap-10"> 
        {/* Kolom Gambar */} 
        <div className="w-48 h-48 md:w-56 md:h-56 relative flex-shrink-0"> 
          <Image 
            src="/profile.jpg" 
            alt="Foto Profil Aqila" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full shadow-lg" 
          /> 
        </div> 
 
        {/* Kolom Teks */} 
        <div className="text-center md:text-left"> 
          <p className="mb-4 text-lg"> 
            Halo! Nama saya Aqila, seorang siswa SMK yang tertarik dengan dunia  
            pengembangan web. Saya mulai belajar koding sejak setahun yang lalu  
            dan langsung tertarik dengan proses mengubah ide menjadi aplikasi web  
            yang interaktif. 
          </p> 
          <p className="text-lg"> 
            Saya fokus pada teknologi back-end modern,  
dan selalu bersemangat untuk mempelajari hal-hal baru. 
</p> 
</div> 
</div> 
</main> 
); 
} 