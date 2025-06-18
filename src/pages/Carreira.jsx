import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Calendar } from 'lucide-react';

function Carreira() {
  const careerTimeline = [
    {
      src: "/images/club_logos/guarani_fc_logo.png",
      club: "Guarani FC",
      period: "2019 (3 meses)",
      description: "Início da trajetória profissional",
      year: "2019"
    },
    {
      src: "/images/club_logos/amparo_ac_logo.jpg",
      club: "Amparo AC",
      period: "2019 (3 meses)",
      description: "Desenvolvimento técnico",
      year: "2019"
    },
    {
      src: "/images/club_logos/athletico_paranaense_logo.png",
      club: "Athletico Paranaense",
      period: "2019 a 2022 (3-4 anos)",
      description: "Formação na base de um grande clube",
      year: "2019-2022"
    },
    {
      src: "/images/club_logos/guacuano_logo.png",
      club: "Guaçuano",
      period: "2023",
      description: "Experiência profissional",
      year: "2023"
    },
    {
      src: "/images/club_logos/uniao_sao_joao_araras_logo.png",
      club: "União São João de Araras",
      period: "2024 até o momento",
      description: "Clube atual - Excelente desempenho",
      year: "2024",
      current: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-3xl md:text-5xl">Trajetória Profissional</h2>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full"></div>
            
            <div className="space-y-16">
              {careerTimeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className={`card-premium group ${item.current ? 'ring-2 ring-blue-500/50' : ''}`}>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-6 mb-4">
                          {index % 2 === 0 ? (
                            <>
                              <div>
                                <h3 className="text-2xl font-bold text-gradient mb-2">{item.club}</h3>
                                <p className="text-lg text-blue-400 mb-2">{item.period}</p>
                                <p className="text-white/70">{item.description}</p>
                              </div>
                              <img src={item.src} alt={`${item.club} logo`} className="club-logo group-hover:scale-110 transition-transform" />
                            </>
                          ) : (
                            <>
                              <img src={item.src} alt={`${item.club} logo`} className="club-logo group-hover:scale-110 transition-transform" />
                              <div>
                                <h3 className="text-2xl font-bold text-gradient mb-2">{item.club}</h3>
                                <p className="text-lg text-blue-400 mb-2">{item.period}</p>
                                <p className="text-white/70">{item.description}</p>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {careerTimeline.map((item, index) => (
                <Card key={index} className={`card-premium group ${item.current ? 'ring-2 ring-blue-500/50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={item.logo} 
                        alt={`${item.club} logo`} 
                        className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full border-2 border-white/10 group-hover:scale-110 transition-transform flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-blue-400">{item.year}</span>
                          {item.current && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Atual</span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2 leading-tight">{item.club}</h3>
                        <p className="text-base md:text-lg text-white/80 mb-2 font-medium">{item.period}</p>
                        <p className="text-sm md:text-base text-white/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Mobile Summary */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl border border-blue-500/20">
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Resumo da Carreira
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient">5</div>
                  <div className="text-sm text-white/70">Clubes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">6</div>
                  <div className="text-sm text-white/70">Anos de Carreira</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carreira;