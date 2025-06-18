import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import {
  Trophy,
  Target,
  Star,
  TrendingUp
} from 'lucide-react';

function Desempenho() {
  const currentStats = [
    { label: "Jogos", value: "7", icon: Trophy, color: "text-blue-400" },
    { label: "Gols", value: "6", icon: Target, color: "text-green-400" },
    { label: "Competição", value: "Campeonato Paulista", icon: Star, color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title text-3xl md:text-5xl">Desempenho Atual</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
            {currentStats.map((stat, index) => (
              <Card key={index} className="card-premium stats-card group">
                <CardContent className="p-4 md:p-8 text-center">
                  <div className="relative mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-gradient">{stat.value}</div>
                  <div className="text-white/60 font-medium text-sm md:text-base">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <p className="text-lg md:text-xl font-semibold text-white/80 bg-green-600/20 px-4 md:px-6 py-2 md:py-3 rounded-full inline-flex items-center gap-2">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              Média de {(6 / 7).toFixed(2)} gols por jogo
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Desempenho;


