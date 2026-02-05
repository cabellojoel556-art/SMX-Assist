
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Cuéntanos el problema',
      desc: 'Rellena el formulario o contáctanos explicando qué le sucede a tu equipo.'
    },
    {
      num: '02',
      title: 'Análisis inicial',
      desc: 'Un técnico revisa tu caso y te propone la mejor forma de actuar.'
    },
    {
      num: '03',
      title: 'Intervención técnica',
      desc: 'Solucionamos el fallo ya sea mediante control remoto o visita presencial.'
    },
    {
      num: '04',
      title: 'Explicación final',
      desc: 'Te explicamos qué hemos hecho y cómo evitar que vuelva a ocurrir.'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cómo funciona</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Proceso transparente en cuatro pasos para que siempre sepas en qué punto estamos.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                  <span className="text-xl font-bold">{step.num}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
