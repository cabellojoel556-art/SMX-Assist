
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="md:w-2/5 bg-blue-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Solicita Ayuda</h2>
              <p className="text-blue-100 mb-8">
                Rellena el formulario con tus datos y una breve descripción de tu problema. Nos pondremos en contacto contigo lo antes posible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <span>Atención rápida</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>Garantía de servicio</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-blue-200 text-sm italic">
              "Mi objetivo es que la tecnología deje de ser una barrera para ti."
            </div>
          </div>

          <div className="md:w-3/5 p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-slate-600">Gracias por contactar con SMX Assist. <br /> En breve un técnico se pondrá en contacto contigo.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-semibold underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ej. María García"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">¿Cuál es el problema?</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Cuéntanos brevemente qué necesitas..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Solicitar ayuda
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
