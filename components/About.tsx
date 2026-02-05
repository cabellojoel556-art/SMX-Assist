
import React from 'react';
import { Heart, ShieldCheck, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="que-es" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Qué es SMX Assist</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tu mano amiga en el mundo digital</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            SMX Assist nace como un proyecto de soporte técnico informático enfocado en lo humano. No somos solo técnicos; somos vecinos dispuestos a ayudarte con las herramientas que usas a diario. Nuestro lenguaje es el tuyo: sencillo, sin términos que no entiendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-blue-200 shadow-lg">
              <Heart className="text-white w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Cercanía</h4>
            <p className="text-slate-600">Trato directo y personal. Nos importa que entiendas qué ha pasado y cómo prevenirlo en el futuro.</p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-slate-200 shadow-lg">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Confianza</h4>
            <p className="text-slate-600">Manejamos tus dispositivos con el máximo respeto por tu privacidad y seguridad de tus datos.</p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-blue-100 shadow-lg">
              <Users className="text-white w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Accesible</h4>
            <p className="text-slate-600">Servicios pensados para familias, personas mayores y estudiantes que necesitan soluciones rápidas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
