import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  Users
} from 'lucide-react';

function Contato() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title">Contato Profissional</h2>
          <p className="text-xl text-white/70 mb-12">
            Entre em contato para oportunidades profissionais, negociações e parcerias
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">Instagram</h3>
                <p className="text-white/70 mb-6">@g_cavalhieri</p>
                <a href="https://www.instagram.com/g_cavalhieri" target="_blank" rel="noopener noreferrer">
                  <button className="button-primary">
                    <Instagram className="w-5 h-5 mr-2" /> Seguir
                  </button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">WhatsApp</h3>
                <p className="text-white/70 mb-6">Jogador</p>
                <a href="https://wa.me/5519992428114" target="_blank" rel="noopener noreferrer">
                  <button className="button-primary">
                    <MessageCircle className="w-5 h-5 mr-2" /> Conversar
                  </button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">Responsável</h3>
                <p className="text-white/70 mb-6">WhatsApp</p>
                <a href="https://wa.me/5519992698703" target="_blank" rel="noopener noreferrer">
                  <button className="button-primary">
                    <Phone className="w-5 h-5 mr-2" /> Contatar
                  </button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">Agente</h3>
                <p className="text-white/70 mb-6">Filipi da Silva Gonçalves</p>
                <button className="button-primary">
                  <Mail className="w-5 h-5 mr-2" /> Representação
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contato;


