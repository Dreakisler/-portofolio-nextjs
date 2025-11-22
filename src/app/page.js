import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 pb-20">
      <div className="pt-10 shadow-md">
        <h4 className="font-bold text-center text-gray-700 text-4xl">
          PORTOFOLIO BLOG DIGITAL
        </h4>
        <p className="text-gray-500 text-center text-3xl pb-10">
          Aqila Muhammad Syaifullah
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-9 pb-50">
        {/* Kolom Gambar */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="/profile.jpg"
            alt="Foto Profil Aqila Muhammad"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>
        
        
        {/* Kolom Teks */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Aqila Muhammad Syaifullah
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Junior Web Developer | Penggemar Teknologi
          </p>
          <p className="max-w-xl mt-4">
            Selamat datang di portofolio saya! Tempat saya berbagi proyek
            dan perjalanan saya di dunia koding.
          </p>
        </div>
      </div>

      

      <div className="pt-1 text-center py-10">
        <h3 className="font-bold text-center text-gray-700 text-4xl p-4">
          SELAMAT DATANG
        </h3>

        <div className="text-center rounded-md mx-2 pb-10 shadow-md px-10 py-8 bg-white">
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt nunc vel blandit sodales. Aliquam nisl sapien, convallis sit amet ex vitae, euismod tempus magna. Curabitur maximus dictum lacus, in pretium felis gravida non. Vivamus cursus, neque in dictum congue, mauris neque elementum ligula, eget pretium est nisl sed nunc. Maecenas imperdiet ex et felis dignissim feugiat non at lectus. Sed cursus ligula in orci luctus placerat. Morbi quis tortor nec diam ultrices varius vel et nibh. Quisque pulvinar dui in massa ullamcorper, quis lacinia purus porttitor.

Morbi magna arcu, egestas eget justo sed, vehicula consequat enim. Nullam nec condimentum tellus, nec tristique lorem. Vivamus dictum magna tellus, a tincidunt est iaculis at. Fusce pretium maximus sapien ornare vulputate. Etiam vehicula tempus diam, et condimentum risus malesuada eget. Nulla at pretium lorem. Sed semper massa eu risus tincidunt scelerisque ac et ex. Nulla ultrices nisl sed diam semper, nec porttitor diam elementum. Vestibulum et feugiat tellus. Nullam et arcu porta, consequat nulla eget, molestie nisl. Nam orci urna, lobortis quis faucibus mollis, efficitur ac dui.
            <br />
            <br />
            
          </p>
        </div>
      </div>

      {/* Section PROJECT*/}
      <div className="mt-24 shadow-md p-4">
  <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-6">
    PROJECTS
  </h2>

  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
    Berikut beberapa proyek yang telah saya kerjakan. Setiap proyek mencerminkan
    perjalanan belajar saya di dunia pengembangan web dan pemrograman.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    {[
      {
        title: "Kalkulator Sederhana",
        desc: "Kalkulator GUI menggunakan Python. Proyek dasar untuk memahami logika perhitungan dan UI.",
        img: "/projects/kalkulator.png",
      },
      {
        title: "Form Login & Registrasi",
        desc: "Projek pertama saya yang terhubung ke database. Dibangun menggunakan PHP & MySQL.",
        img: "/projects/form.png",
      },
      {
        title: "Kalkulator Matrix",
        desc: "Menggunakan Java OOP: enkapsulasi, polymorphism, dan inheritance.",
        img: "/projects/matrix.png",
      },
    ].map((project, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-44 object-cover rounded-xl mb-5"
        />

        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4">{project.desc}</p>

        <button className="mt-3 px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all">
          Detail
        </button>
      </div>
    ))}
  </div>
</div>
      <div className="mt-20">
  <h2 className="text-center text-4xl font-extrabold text-gray-700 mb-6">
    SKILLS
  </h2>

  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
    Berikut adalah kemampuan yang saya kuasai dalam dunia pemrograman dan teknologi,
    mulai dari front-end, back-end, hingga tools pendukung pengembangan aplikasi.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {/* Skill Card */}
    {[
      { name: "HTML", img: "/skills/html.png" },
      { name: "CSS", img: "/skills/css.png" },
      { name: "JavaScript", img: "/skills/js.png" },
      { name: "React", img: "/skills/react.png" },
      { name: "Next.js", img: "/skills/nextjs.png" },
      { name: "Tailwind CSS", img: "/skills/tailwind.png" },
      { name: "Python", img: "/skills/python.png" },
      { name: "Java", img: "/skills/java.png" },
    ].map((skill, i) => (
      <div
        key={i}
        className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        <img
          src={skill.img}
          alt={skill.name}
          className="w-16 h-16 mb-4 object-contain"
        />
        <p className="text-gray-700 font-semibold text-lg">{skill.name}</p>
      </div>
    ))}
  </div>
</div>

      {/* CONTACT INFO */}
      <div className="bg-gray-700 text-center py-12 mt-16 rounded-md">
        <h4 className="font-bold text-white text-4xl pb-10">CONTACT INFO</h4>

        <div className="flex flex-col md:flex-row justify-center gap-10 px-5">

          <div className="shadow-md rounded-md w-80 p-7 bg-white">
            <p className="font-bold text-gray-700 text-2xl pb-2">Whatsapp</p>
            <p className="text-gray-800 pb-1">
              Hubungi Saya Dengan Nomor di Bawah
            </p>
            <p className="text-gray-800">
              📞 089543982428 (Galang)
            </p>
          </div>

          <div className="shadow-md rounded-md w-80 p-7 bg-white">
            <p className="font-bold text-gray-700 text-2xl pb-2">E-mail</p>
            <p className="text-gray-800 pb-1">
              Hubungi Saya Dengan Email di bawah
            </p>
            <p className="text-gray-800">
              ✉️ lordindo96@gmail.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
  
}
