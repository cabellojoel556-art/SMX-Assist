
import React from 'react';
import { Settings, Wifi, ShieldAlert, MonitorCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Incidencias de Software',
      desc: '¿Tu programa no abre? ¿El ordenador va lento? Limpiamos virus y optimizamos tu equipo para que rinda como el primer día.',
      icon: <MonitorCheck className="w-7 h-7" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Configuración de Equipos',
      desc: 'Puesta en marcha de nuevos ordenadores, portátiles o tablets. Instalación de aplicaciones y periféricos como impresoras.',
      icon: <Settings className="w-7 h-7" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Redes Domésticas',
      desc: 'Configuración de routers, ampliación de señal Wi-Fi para que llegue a todas las habitaciones y resolución de cortes de conexión.',
      icon: <Wifi className="w-7 h-7" />,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Seguridad Básica',
      desc: 'Asesoramiento para evitar estafas por internet, gestión de contraseñas seguras y configuración de copias de seguridad automáticas.',
      icon: <ShieldAlert className="w-7 h-7" />,
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ofrecemos soluciones prácticas para los problemas informáticos del día a día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
