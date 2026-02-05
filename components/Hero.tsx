
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-indigo-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Soporte informático <br />
            <span className="text-blue-600">sencillo y cercano</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
            ¿Problemas con tu ordenador o el Wi-Fi? En SMX Assist te ayudamos a resolver tus dudas tecnológicas sin complicaciones ni lenguajes difíciles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contacto" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:translate-y-[-2px]"
            >
              Pedir ayuda ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#servicios" 
              className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start text-slate-500 font-medium text-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Ayuda a domicilio y remota
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Sin tecnicismos
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Precios asequibles
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800" 
            alt="Soporte técnico cercano" 
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl -z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 rounded-full -z-0"></div>
        </div>
      </div>
    </section>
  );
};
