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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat bibendum convallis. Vivamus sit amet tristique lorem, id semper velit. Mauris pharetra urna quis mauris mattis ornare. Morbi sem erat, suscipit et mi interdum, porta porttitor sapien. Mauris nec ipsum id purus lobortis aliquam quis vitae ante. Integer eros lacus, tincidunt at condimentum nec, fermentum ut justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin nibh ipsum, porttitor eu convallis ut, vulputate non eros. Suspendisse et mollis eros. Mauris mattis lacinia justo, et lobortis ex venenatis a. Morbi pellentesque porta fermentum. In scelerisque lacus et orci finibus varius. Nam et posuere nulla, in facilisis dolor.

Quisque sed purus ullamcorper, pretium sapien sit amet, pharetra ipsum. Duis nec velit malesuada, ultricies arcu at, aliquet justo. Aliquam dui leo, vestibulum vitae velit non, mollis laoreet enim. Fusce aliquam a tortor ac hendrerit. Nam molestie enim et dapibus lobortis. Donec ut dui non felis aliquet vehicula vitae non massa. Suspendisse auctor rhoncus libero, eu eleifend lacus.

Aenean porta leo vitae mi interdum laoreet. Phasellus ullamcorper scelerisque sapien, id maximus nisl aliquam vel. Sed ut gravida neque. Vivamus imperdiet, quam sit amet mollis imperdiet, nisi urna pretium elit, eu fermentum massa metus efficitur elit. Nulla id tempor elit. Aliquam ac metus ut mauris dignissim pretium. Maecenas eu nibh porttitor, placerat nisi at, lobortis risus.

Cras ac neque tortor. Donec mattis eros a quam laoreet, non lacinia ligula congue. Nulla eros ipsum, maximus sit amet dui fringilla, mollis viverra est. Sed libero nibh, hendrerit et porta a, faucibus non nulla. Nulla nisl ligula, molestie vitae bibendum at, faucibus ac diam. In pharetra volutpat lobortis. Morbi efficitur elit eu est laoreet, non consequat lectus imperdiet.

Duis vitae lorem dignissim, tempus tortor at, rhoncus metus. Aliquam orci ligula, ultrices ut dolor tempus, suscipit consequat augue. Aenean vel ligula eu urna placerat porttitor et dignissim erat. Donec porttitor, sem at pulvinar commodo, massa risus dapibus elit, eget condimentum libero felis non est. Pellentesque feugiat ante sit amet velit sodales ullamcorper. Duis sollicitudin tellus id nulla consequat eleifend. Duis eu nulla non magna fermentum aliquam. Nullam ac fermentum arcu. Mauris viverra augue non arcu pellentesque blandit. Nam quis posuere diam. Proin elementum, nisi vitae volutpat euismod, leo metus pretium leo, nec sollicitudin risus tellus in magna. Sed dapibus, mi nec aliquet elementum, urna sem consequat purus, et sagittis nibh dui sed velit. Phasellus pharetra varius mollis.
          </p>
</div>
</div>
</main>
);
}