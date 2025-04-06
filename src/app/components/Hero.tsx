

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gray-900 text-white h-screen flex items-center justify-center"
    >
      <div className="text-center px-5">
        <img
          className="h-60 w-60 rounded-full object-cover mx-auto mb-6"
          src="/foto.jpeg"
          alt="Gabriel Oliveira"
        />
        <h1 className="text-5xl font-bold mb-4">
          Olá, eu sou Gabriel Oliveira
        </h1>
        <p className="text-xl mb-6">
          Desenvolvedor Web apaixonado por criar interfaces incríveis e
          experiências digitais impactantes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
          >
            Veja meus projetos
          </a>
          <a
            href="/Gabriel Oliveira.pdf"
            download
            className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;