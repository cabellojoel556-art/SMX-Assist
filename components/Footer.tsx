
import React from 'react';
import { Laptop, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Laptop className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-900">
                SMX <span className="text-blue-600">Assist</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm text-sm">
              Tu servicio de confianza para solucionar problemas informáticos de forma rápida y sencilla.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <h5 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Proyecto</h5>
              <ul className="space-y-2 text-slate-600">
                <li>CFGM SMR</li>
                <li>Educativo</li>
                <li>Sistemas Microinformáticos</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Legal</h5>
              <ul className="space-y-2 text-slate-600">
                <li>Aviso legal</li>
                <li>Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} SMX Assist. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>por <span className="font-bold text-slate-700">Joel Cabello Serna</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
