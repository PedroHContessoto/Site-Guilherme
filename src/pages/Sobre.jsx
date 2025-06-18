import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  User,
  Calendar,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Star,
  Activity,
  Zap,
  Target
} from 'lucide-react';

function Sobre() {
  const achievements = [
    { title: "Início Precoce", description: "Começou aos 7 anos na escolinha Show de Bola", icon: Calendar },
    { title: "Base Sólida", description: "3-4 anos de formação no Athletico Paranaense", icon: Award },
    { title: "Versatilidade", description: "Atua em 5 posições diferentes com excelência", icon: Users },
    { title: "Performance Atual", description: "6 gols em 7 jogos no Campeonato Paulista", icon: TrendingUp }
  ];

  const positions = [
    { name: "Meia", icon: Star, color: "from-blue-500 to-purple-500" },
    { name: "Primeiro volante", icon: Award, color: "from-green-500 to-blue-500" },
    { name: "Segundo volante", icon: Activity, color: "from-purple-500 to-pink-500" },
    { name: "Ponta", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "Centroavante", icon: Target, color: "from-red-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-3xl md:text-5xl">Sobre o Atleta</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <div>
              <Card className="card-premium group">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl md:text-3xl mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    Perfil Profissional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm md:text-base">{achievement.title}</h4>
                        <p className="text-white/70 text-xs md:text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="card-premium group">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl md:text-3xl mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    Posições Táticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
                    {positions.map((position, index) => (
                      <div key={index} className="group">
                        <div className={`position-badge bg-gradient-to-r ${position.color} hover:scale-105 transition-all duration-300 flex items-center gap-2 md:gap-3 text-sm md:text-base`}>
                          <position.icon className="w-4 h-4 md:w-5 md:h-5" />
                          <span>{position.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Box-to-box characteristic moved here */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Estilo Box-to-box
                    </h4>
                    <p className="text-white/80 text-sm">
                      Midfielder completo que atua tanto na defesa quanto no ataque, 
                      cobrindo todo o campo com versatilidade excepcional.
                    </p>
                  </div>
                  
                  <blockquote className="text-base md:text-lg italic text-white/80 border-l-4 border-gradient-to-b from-blue-500 to-green-500 pl-4 md:pl-6 bg-white/5 p-4 md:p-6 rounded-r-lg">
                    "Essa versatilidade me permite adaptar ao estilo tático da equipe, 
                    contribuindo tanto na construção quanto na finalização das jogadas."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;


