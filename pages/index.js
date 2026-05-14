import Head from 'next/head';
import { motion } from "framer-motion";

export default function AcordeIngenieria() {
  const services = [
    {
      title: "Diseño Eléctrico Integral",
      text: "Desarrollo de ingeniería para sistemas eléctricos en media y baja tensión enfocados en infraestructura corporativa, residencial, comercial e industrial.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop",
      icon: "▣",
    },
    {
      title: "Ingeniería Fotovoltaica",
      text: "Diseño y estructuración de soluciones solares con criterios de eficiencia energética, sostenibilidad y cumplimiento regulatorio.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop",
      icon: "◉",
    },
    {
      title: "Calidad y Eficiencia Energética",
      text: "Evaluaciones técnicas especializadas para optimizar consumo energético, continuidad operativa y desempeño eléctrico.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop",
      icon: "⚡",
    },
  ];

  return (
    <>
      <Head>
        <title>Acorde Ingeniería S.A.S | Ingeniería Eléctrica y Energética</title>
        <meta name="description" content="Soluciones energéticas desarrolladas para empresas, constructoras e infraestructura moderna bajo estándares técnicos y normativos de alto nivel." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#f4f1eb] text-[#111827] font-sans overflow-hidden tracking-[-0.01em]">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#f4f1eb]/90 backdrop-blur-2xl border-b border-black/5">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex gap-1">
                <div className="w-3 h-14 bg-[#d97706] rotate-12 rounded-full"></div>
                <div className="w-3 h-10 bg-[#991b1b] rotate-12 rounded-full mt-4"></div>
                <div className="w-3 h-14 bg-[#d97706] rotate-12 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight">Acorde</h1>
                <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-bold mt-1">Ingeniería S.A.S</p>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-12 uppercase tracking-[0.15em] text-sm font-semibold text-gray-600">
              <a href="#empresa" className="hover:text-[#d97706] transition">Empresa</a>
              <a href="#servicios" className="hover:text-[#d97706] transition">Servicios</a>
              <a href="#normativa" className="hover:text-[#d97706] transition">Normativa</a>
              <a href="#contacto" className="hover:text-[#d97706] transition">Contacto</a>
            </nav>
            <a href="https://wa.me/573183918554" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition">WhatsApp</a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111827]">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2200&auto=format&fit=crop" alt="Infraestructura" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.82)_45%,rgba(15,23,42,0.45)_100%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-44 grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}>
              <p className="uppercase tracking-[0.35em] text-[#fbbf24] text-sm font-bold mb-8">Ingeniería · Energía · Infraestructura</p>
              <h1 className="text-white text-6xl md:text-7xl xl:text-[96px] leading-[0.9] tracking-[-0.06em] font-black mb-10 max-w-5xl">Ingeniería eléctrica con visión corporativa.</h1>
              <p className="text-gray-300 text-2xl leading-relaxed max-w-2xl font-light mb-14">Soluciones energéticas desarrolladas para empresas, constructoras e infraestructura moderna bajo estándares técnicos y normativos de alto nivel.</p>
              <div className="flex flex-wrap gap-5">
                <a href="#contacto" className="bg-[#d97706] hover:bg-[#b45309] transition text-white px-10 py-5 rounded-full font-semibold flex items-center gap-3">Solicitar asesoría <span className="text-xl">→</span></a>
                <a href="#servicios" className="border border-white/20 hover:border-white/40 transition text-white px-10 py-5 rounded-full font-semibold">Explorar capacidades</a>
              </div>
            </motion.div>

            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[36px] p-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
                <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop" alt="Centro de control" className="rounded-[28px] mb-8" />
                <div className="space-y-6">
                  {["Diseño eléctrico en media y baja tensión", "Estudios de calidad de energía", "Eficiencia energética y fotovoltaica", "Acompañamiento técnico y regulatorio"].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <div className="w-6 h-6 rounded-full bg-[#fbbf24] flex items-center justify-center text-[#111827] text-sm font-bold">✓</div>
                      <p className="text-gray-200 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Empresa Section */}
        <section id="empresa" className="py-44 bg-[#f4f1eb]">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-28 items-center">
            <div>
              <p className="uppercase tracking-[0.35em] text-[#d97706] text-sm font-bold mb-8">Nuestra Firma</p>
              <h2 className="text-5xl md:text-6xl font-black leading-[1] tracking-[-0.05em] mb-10 text-[#111827]">Soluciones energéticas diseñadas con visión técnica y empresarial.</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">En Acorde Ingeniería S.A.S desarrollamos soluciones integrales para proyectos eléctricos, energéticos y fotovoltaicos bajo un enfoque de precisión técnica, sostenibilidad y cumplimiento normativo.</p>
              <div className="space-y-8">
                {["Diseño eléctrico residencial, comercial e industrial.", "Integración de sistemas fotovoltaicos.", "Estudios de calidad y eficiencia energética.", "Trámites ante operadores de red."].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 border-b border-black/10 pb-6">
                    <div className="w-3 h-3 rounded-full bg-[#d97706] mt-2"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop" alt="Empresa" className="rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.12)]" />
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-44 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-4xl mb-28">
              <p className="uppercase tracking-[0.35em] text-[#d97706] text-sm font-bold mb-8">Capacidades Técnicas</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[1] text-[#111827]">Ingeniería desarrollada para infraestructura y operaciones modernas.</h2>
            </div>
            <div className="space-y-40">
              {services.map((service, i) => (
                <div key={i} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <img src={service.image} alt={service.title} className="rounded-[40px] shadow-[0_40px_120px_rgba(15,23,42,0.14)] h-[620px] w-full object-cover" />
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-lg border border-black/5">
                      <span className="text-3xl text-[#d97706] font-bold">{service.icon}</span>
                    </div>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.3em] text-[#d97706] text-sm font-bold mb-6">Servicio {i + 1}</p>
                    <h3 className="text-5xl font-black tracking-[-0.05em] leading-[1] text-[#111827] mb-8">{service.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">{service.text}</p>
                    
                    {service.title === "Ingeniería Fotovoltaica" && (
                      <div className="border-t border-black/10 pt-8">
                        <p className="uppercase tracking-[0.28em] text-[#d97706] text-xs font-bold mb-6">Experiencia en Colombia</p>
                        <div className="space-y-5">
                          {["Aguazul, Casanare · 1.29 MWp", "Barichara, Santander · 430 kWp", "Campoalegre, Huila · 307 kWp", "Montería, Córdoba · 30 kWp"].map((project, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-black/10 pb-4">
                              <span className="text-lg text-[#111827] font-medium tracking-[-0.02em]">{project}</span>
                              <div className="w-10 h-[1px] bg-black/20"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Normativa Section */}
        <section id="normativa" className="py-44 bg-[#0f172a] text-white relative overflow-hidden">
          {/* Content omitted for brevity in this block, same as previous valid code */}
          {/* Ensure to copy the full Normativa section from your code or the previous response here */}
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-4xl mb-24">
              <p className="uppercase tracking-[0.35em] text-[#fbbf24] text-sm font-bold mb-8">Expertos en Normativa</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[1] mb-10">Ingeniería desarrollada bajo cumplimiento técnico y regulatorio.</h2>
              <p className="text-xl text-gray-300 leading-relaxed">Nuestros proyectos integran criterios normativos, trazabilidad técnica y documentación alineada con las exigencias del sector energético colombiano.</p>
            </div>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-stretch">
               {/* ... Copy Normativa Grid Content Here ... */}
               <div className="relative overflow-hidden rounded-[36px] border border-white/10 min-h-[520px]">
                 <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop" alt="Ingeniería normativa" className="absolute inset-0 w-full h-full object-cover opacity-35" />
                 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.35)_0%,rgba(15,23,42,0.92)_100%)]"></div>
                 <div className="relative z-10 p-14 flex flex-col justify-end h-full">
                   <div className="w-24 h-[2px] bg-[#fbbf24] mb-10"></div>
                   <h3 className="text-4xl md:text-5xl font-black tracking-[-0.05em] leading-[1.05] mb-8 max-w-3xl">Experiencia técnica respaldada por normativa y trazabilidad documental.</h3>
                   <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">Aplicamos criterios técnicos alineados con RETIE, NTC 2050, RETILAP y regulación energética vigente para garantizar proyectos seguros, eficientes y conformes con los estándares del sector eléctrico colombiano.</p>
                 </div>
               </div>
               <div className="bg-white/[0.03] border border-white/10 rounded-[36px] p-10 backdrop-blur-xl flex flex-col justify-between">
                 <div>
                   <p className="uppercase tracking-[0.28em] text-[#fbbf24] text-xs font-bold mb-10">Marco Técnico</p>
                   <div className="space-y-6">
                     {["RETIE", "NTC 2050", "RETILAP", "CREG 174 de 2021", "ISO 50001", "Operadores de Red"].map((item, i) => (
                       <div key={i} className="flex items-center justify-between border-b border-white/10 pb-5">
                         <span className="text-xl text-white font-medium tracking-[-0.02em]">{item}</span>
                         <div className="w-10 h-[1px] bg-white/30"></div>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div className="mt-16 pt-10 border-t border-white/10">
                   <p className="text-gray-400 leading-relaxed text-lg">Desarrollo de ingeniería con enfoque en cumplimiento regulatorio, continuidad operativa y confiabilidad energética.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-44 bg-[#ece7df]">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24">
            <div>
              <p className="uppercase tracking-[0.35em] text-[#d97706] text-sm font-bold mb-8">Contacto</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[1] mb-10">Construyamos infraestructura energética preparada para el futuro.</h2>
              <div className="space-y-8">
                <div className="border-b border-black/10 pb-6">
                  <h3 className="font-black text-2xl mb-3">Teléfono</h3>
                  <p className="text-gray-600 text-lg">+57 318 391 8554</p>
                </div>
                <div className="border-b border-black/10 pb-6">
                  <h3 className="font-black text-2xl mb-3">Correo</h3>
                  <p className="text-gray-600 text-lg break-all">gerenciadeproyectos@acordeingenieria.com</p>
                </div>
                <div className="border-b border-black/10 pb-6">
                  <h3 className="font-black text-2xl mb-3">Ubicación</h3>
                  <p className="text-gray-600 text-lg">Bogotá D.C., Colombia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[36px] p-12 shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>No llenar: <input name="bot-field" /></label>
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <input id="name" type="text" name="name" required className="w-full border border-black/10 rounded-2xl px-6 py-5 bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#d97706]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                  <input id="email" type="email" name="email" required className="w-full border border-black/10 rounded-2xl px-6 py-5 bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#d97706]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea id="message" rows={6} name="message" required className="w-full border border-black/10 rounded-2xl px-6 py-5 bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#d97706] resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#111827] text-white py-5 rounded-2xl font-bold tracking-[0.08em] uppercase hover:bg-black transition cursor-pointer">Enviar Solicitud</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0b1120] text-gray-400 py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between gap-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-white tracking-[-0.05em] mb-8">Acorde Ingeniería S.A.S</h2>
              <p className="text-lg leading-relaxed">Ingeniería eléctrica, energética y fotovoltaica para proyectos empresariales, infraestructura y operaciones modernas.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 uppercase tracking-[0.18em] text-sm font-semibold">
              <span>Diseño Eléctrico</span>
              <span>Fotovoltaico</span>
              <span>Eficiencia Energética</span>
              <span>Calidad de Energía</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}