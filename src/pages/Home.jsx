import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  User,
  Trophy,
  Target,
  Phone,
  Instagram,
  MessageCircle,
  Calendar,
  MapPin,
  Weight,
  Zap,
  Star,
  TrendingUp,
  Play,
  Camera,
  Video,
  Image,
  Award,
  Activity,
  Users,
  Mail,
  ExternalLink,
  ChevronDown,
  Sparkles
} from 'lucide-react';

// Import club logos
import guaraniLogo from '../assets/club_logos/guarani_fc_logo.png';
import amparoLogo from '../assets/club_logos/amparo_ac_logo.jpg';
import athleticoLogo from '../assets/club_logos/athletico_paranaense_logo.png';
import guacuanoLogo from '../assets/club_logos/guacuano_logo.png';
import uniaoLogo from '../assets/club_logos/uniao_sao_joao_araras_logo.png';

function Home() {
  const currentStats = [
    { label: "Jogos", value: "7", icon: Trophy, color: "text-blue-400" },
    { label: "Gols", value: "6", icon: Target, color: "text-green-400" },
    { label: "Competição", value: "Campeonato Paulista", icon: Star, color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
      {/* Floating Background Elements */}
      <div className="floating-elements" />

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center py-16 md:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-xs md:text-sm font-medium text-white/80">Jogador Profissional de Futebol</span>
            </div>
            
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 md:mb-6 leading-tight">
              Guilherme <span className="text-gradient">Cavalhieri</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Midfielder versátil com visão de jogo apurada. 
              Ambidestro, criativo e finalizador nato.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
              <Badge variant="secondary" className="glass-effect text-base md:text-lg px-4 md:px-6 py-2 md:py-3 hover:scale-105 transition-transform">
                <Weight className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                71kg
              </Badge>
              <Badge variant="secondary" className="glass-effect text-base md:text-lg px-4 md:px-6 py-2 md:py-3 hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Ambidestro
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12 px-4">
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
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white/40 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


