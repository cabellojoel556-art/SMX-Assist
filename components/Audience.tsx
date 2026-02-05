
import React from 'react';
import { User, GraduationCap, Home, Store } from 'lucide-react';

export const Audience: React.FC = () => {
  const targets = [
    { title: 'Gente Mayor', icon: <User className="w-6 h-6" />, desc: 'Paciencia y explicaciones claras para su día a día.' },
    { title: 'Familias', icon: <Home className="w-6 h-6" />, desc: 'Control parental y redes Wi-Fi para todo el hogar.' },
    { title: 'Estudiantes', icon: <GraduationCap className="w-6 h-6" />, desc: 'Ayuda con software educativo y equipos para clase.' },
    { title: 'Pequeños Negocios', icon: <Store className="w-6 h-6" />, desc: 'Mantenimiento básico para que el negocio no se detenga.' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ayudamos a quienes más lo necesitan</h2>
            <p className="text-slate-400 text-lg mb-8">
              No todo el mundo tiene por qué ser un experto informático. Estamos aquí para cerrar la brecha digital y dar seguridad a quienes se sienten perdidos frente a la pantalla.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {targets.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="text-blue-400 mt-1">{item.icon}</div>
                  <div>
                    <h5 className="font-bold">{item.title}</h5>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800" 
                alt="Ayuda personalizada" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-blue-600 p-8 rounded-full hidden md:block">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs uppercase font-medium">Cercano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
