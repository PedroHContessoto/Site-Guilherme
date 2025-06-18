import React, { useState, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Play, Image, Calendar, Trophy, Users, Target, Star, AlertCircle } from 'lucide-react';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('videos');
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef({});

  const playerPhotos = [
    {
      src: "/images/player_photos/otima_foto_de_frente_olhando_para_direita_atual.jpeg",
      title: "Foto Profissional Atual",
      description: "Retrato profissional atual do jogador, demonstrando confiança e determinação",
      category: "profissional",
      icon: <Star className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_de_frente_uniao.jpeg",
      title: "Guilherme - União São João",
      description: "Foto oficial com a camisa do União São João de Araras, clube atual",
      category: "profissional",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/uniao_guilher_driblando.jpeg",
      title: "Driblando Adversários",
      description: "Momento de habilidade técnica driblando adversários durante partida oficial",
      category: "acao",
      icon: <Target className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_dominando_a_bola_com_3_rivais_atras.jpeg",
      title: "Dominando a Bola",
      description: "Demonstração de controle de bola com três rivais na marcação",
      category: "acao",
      icon: <Target className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_com_a_bola_em_campo.jpeg",
      title: "Em Campo com a Bola",
      description: "Jogada em campo durante partida oficial, mostrando posicionamento tático",
      category: "acao",
      icon: <Target className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_caindo_uniao_atras_da_bola.jpeg",
      title: "Disputa de Bola",
      description: "Momento de disputa intensa pela posse de bola durante o jogo",
      category: "acao",
      icon: <Target className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_segurando_um_trofel_uniao.jpeg",
      title: "Conquista com o União",
      description: "Celebrando conquista importante com a camisa do União São João",
      category: "conquistas",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_fazendo_embaixadinha_atletico.jpeg",
      title: "Habilidade Técnica - Athletico",
      description: "Demonstrando técnica com embaixadinhas durante período no Athletico Paranaense",
      category: "tecnica",
      icon: <Star className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/tima_todo_guacuano.jpeg",
      title: "Período no Guaçuano",
      description: "Foto oficial durante passagem pelo Guaçuano em 2023",
      category: "profissional",
      icon: <Calendar className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_costas_uniao.jpeg",
      title: "União São João - Costas",
      description: "Foto de costas com a camisa do clube atual, mostrando o número da camisa",
      category: "profissional",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_costas_atletico.jpeg",
      title: "Athletico Paranaense - Base",
      description: "Período de formação na base do Athletico Paranaense (2019-2022)",
      category: "formacao",
      icon: <Users className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilher_mordendo_uma_medalha_crianca_atletico.jpeg",
      title: "Primeira Medalha",
      description: "Criança mordendo medalha conquistada no Athletico Paranaense - início da trajetória",
      category: "formacao",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_crianca_com_o_time_atlhetico.jpeg",
      title: "Time do Athletico - Base",
      description: "Foto com o time da base do Athletico Paranaense, formação fundamental",
      category: "formacao",
      icon: <Users className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_crianca_com_o_time_sulbrasileiro.jpeg",
      title: "Time Sul-Brasileiro",
      description: "Foto com equipe do time Sul-Brasileiro durante período de formação",
      category: "formacao",
      icon: <Users className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilher_no_campo_com_o_pai_e_a_mae.jpeg",
      title: "Apoio Familiar",
      description: "Momento especial em campo com o pai e a mãe, demonstrando apoio familiar",
      category: "familia",
      icon: <Users className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilher_crianca_com_o_pai.jpeg",
      title: "Início da Jornada",
      description: "Criança com o pai, início da paixão pelo futebol aos 7 anos",
      category: "familia",
      icon: <Calendar className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/guilherme_crianca_com_o_pai.jpeg",
      title: "Primeiros Passos",
      description: "Momentos iniciais no futebol com o apoio paterno fundamental",
      category: "familia",
      icon: <Calendar className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/WhatsApp Image 2025-06-11 at 20.30.29.jpeg",
      title: "Momento Recente 1",
      description: "Foto recente do jogador em atividade profissional",
      category: "recente",
      icon: <Star className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/WhatsApp Image 2025-06-11 at 20.30.30 (2).jpeg",
      title: "Momento Recente 2",
      description: "Registro atual da carreira profissional do atleta",
      category: "recente",
      icon: <Star className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/WhatsApp Image 2025-06-11 at 20.30.30.jpeg",
      title: "Momento Recente 3",
      description: "Foto atual demonstrando evolução e maturidade profissional",
      category: "recente",
      icon: <Star className="w-4 h-4" />
    },
    {
      src: "/images/player_photos/WhatsApp Image 2025-06-11 at 20.30.31.jpeg",
      title: "Momento Recente 4",
      description: "Registro recente da trajetória profissional em ascensão",
      category: "recente",
      icon: <Star className="w-4 h-4" />
    }
  ];

  const playerVideos = [
    {
      id: 'video1',
      src: "/images/player_videos/campeonato_paulista_otimizado.mp4",
      title: "Campeonato Paulista - Highlights 1",
      description: "Melhores momentos e jogadas do Campeonato Paulista, demonstrando versatilidade e qualidade técnica em campo",
      category: "campeonato",
      icon: <Trophy className="w-4 h-4" />,
      duration: "2:15",
      quality: "HD"
    },
    {
      id: 'video2',
      src: "/images/player_videos/campeonato_paulista2_otimizado.mp4",
      title: "Campeonato Paulista - Highlights 2",
      description: "Continuação dos highlights do Campeonato Paulista, mostrando diferentes posições e situações de jogo",
      category: "campeonato",
      icon: <Trophy className="w-4 h-4" />,
      duration: "1:45",
      quality: "HD"
    }
  ];

  const categories = {
    photos: [
      { id: 'profissional', name: 'Profissional', count: playerPhotos.filter(p => p.category === 'profissional').length },
      { id: 'acao', name: 'Em Ação', count: playerPhotos.filter(p => p.category === 'acao').length },
      { id: 'conquistas', name: 'Conquistas', count: playerPhotos.filter(p => p.category === 'conquistas').length },
      { id: 'tecnica', name: 'Técnica', count: playerPhotos.filter(p => p.category === 'tecnica').length },
      { id: 'formacao', name: 'Formação', count: playerPhotos.filter(p => p.category === 'formacao').length },
      { id: 'familia', name: 'Família', count: playerPhotos.filter(p => p.category === 'familia').length },
      { id: 'recente', name: 'Recentes', count: playerPhotos.filter(p => p.category === 'recente').length }
    ],
    videos: [
      { id: 'campeonato', name: 'Campeonato', count: playerVideos.filter(v => v.category === 'campeonato').length }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPhotos = selectedCategory === 'all'
      ? playerPhotos
      : playerPhotos.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all'
      ? playerVideos
      : playerVideos.filter(video => video.category === selectedCategory);

  // Handler para erro de vídeo melhorado
  const handleVideoError = (e, videoId, videoSrc) => {
    console.error(`Erro ao carregar vídeo ${videoId}:`, videoSrc, e);
    setVideoErrors(prev => ({
      ...prev,
      [videoId]: true
    }));
  };

  // Handler para sucesso no carregamento
  const handleVideoLoad = (videoId) => {
    console.log(`Vídeo ${videoId} carregado com sucesso`);
    setVideoErrors(prev => ({
      ...prev,
      [videoId]: false
    }));
  };

  // Componente de Fallback para vídeos
  const VideoFallback = ({ video }) => (
      <div className="w-full h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl flex items-center justify-center border-2 border-dashed border-gray-600">
        <div className="text-center text-white/70 p-6">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-400" />
          <h4 className="text-lg font-semibold mb-2">Vídeo Temporariamente Indisponível</h4>
          <p className="text-sm mb-4">{video.title}</p>
          <div className="text-xs bg-gray-700 rounded-lg p-3 max-w-xs mx-auto">
            <p className="mb-1"><strong>Possíveis causas:</strong></p>
            <p>• Arquivo ainda carregando</p>
            <p>• Formato não suportado</p>
            <p>• Problemas de conectividade</p>
          </div>
          <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2"
              onClick={() => window.location.reload()}
          >
            Recarregar Página
          </Button>
        </div>
      </div>
  );

  return (
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-3xl md:text-5xl mb-8">Portfólio Profissional</h2>
            <p className="text-lg md:text-xl text-white/70 text-center mb-12 max-w-3xl mx-auto">
              Vídeos e fotografias destacando a versatilidade técnica e qualidade em campo
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-white/5 rounded-xl p-2 backdrop-blur-sm border border-white/10">
                <Button
                    onClick={() => {setActiveTab('videos'); setSelectedCategory('all');}}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                        activeTab === 'videos'
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Play className="w-4 h-4" />
                  Vídeos
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{playerVideos.length}</span>
                </Button>
                <Button
                    onClick={() => {setActiveTab('fotos'); setSelectedCategory('all');}}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                        activeTab === 'fotos'
                            ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Image className="w-4 h-4" />
                  Fotos
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{playerPhotos.length}</span>
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === 'all'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
              >
                Todas
              </Button>
              {categories[activeTab === 'videos' ? 'videos' : 'photos'].map(category => (
                  <Button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                          selectedCategory === category.id
                              ? 'bg-blue-500 text-white'
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                  >
                    {category.name}
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
                  </Button>
              ))}
            </div>

            {/* Videos Section - VERSÃO CORRIGIDA COM FALLBACK */}
            {activeTab === 'videos' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredVideos.map((video, index) => (
                      <Card key={video.id} className="card-premium group overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative">
                            {videoErrors[video.id] ? (
                                <VideoFallback video={video} />
                            ) : (
                                <video
                                    ref={el => videoRefs.current[video.id] = el}
                                    controls
                                    preload="metadata"
                                    playsInline
                                    webkit-playsinline="true"
                                    className="w-full h-64 md:h-80 object-cover rounded-t-xl bg-black"
                                    onError={(e) => handleVideoError(e, video.id, video.src)}
                                    onLoadedData={() => handleVideoLoad(video.id)}
                                    onLoadStart={() => console.log(`Iniciando carregamento: ${video.title}`)}
                                    onCanPlay={() => console.log(`Pronto para reproduzir: ${video.title}`)}
                                >
                                  <source src={video.src} type="video/mp4" />
                                  <source src={video.src.replace('.mp4', '.webm')} type="video/webm" />
                                  <source src={video.src.replace('.mp4', '.mov')} type="video/quicktime" />
                                  <p className="text-white text-center p-4">
                                    Seu navegador não suporta a reprodução de vídeo HTML5.
                                    <br />
                                    <a href={video.src} className="text-blue-400 underline">
                                      Clique aqui para baixar o vídeo
                                    </a>
                                  </p>
                                </video>
                            )}

                            <div className="absolute top-4 left-4">
                              <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                {video.icon}
                                {video.category}
                              </span>
                            </div>

                            {/* Indicador de status do vídeo */}
                            {!videoErrors[video.id] && (
                                <div className="absolute top-4 right-4">
                                  <div className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                    Disponível
                                  </div>
                                </div>
                            )}
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gradient mb-3">{video.title}</h3>
                            <p className="text-white/70 leading-relaxed mb-4">{video.description}</p>

                            {/* Informações técnicas do vídeo */}
                            <div className="flex gap-4 text-xs text-white/50">
                              {video.duration && (
                                  <span className="flex items-center gap-1">
                                  ⏱️ {video.duration}
                                </span>
                              )}
                              {video.quality && (
                                  <span className="flex items-center gap-1">
                                  🎬 {video.quality}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                📁 MP4
                              </span>
                            </div>

                            {/* Botões de ação */}
                            <div className="flex gap-2 mt-4">
                              <Button
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                  onClick={() => {
                                    const videoEl = videoRefs.current[video.id];
                                    if (videoEl) {
                                      if (videoEl.paused) {
                                        videoEl.play();
                                      } else {
                                        videoEl.pause();
                                      }
                                    }
                                  }}
                              >
                                <Play className="w-3 h-3 mr-1" />
                                Reproduzir
                              </Button>

                              <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-white/20 text-white/70 hover:bg-white/10"
                                  onClick={() => window.open(video.src, '_blank')}
                              >
                                ⬇️ Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
            )}

            {/* Photos Section */}
            {activeTab === 'fotos' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredPhotos.map((photo, index) => (
                      <Card key={index} className="card-premium group overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.src = "/api/placeholder/400/300";
                                  console.error('Erro ao carregar imagem:', photo.src);
                                }}
                                loading="lazy"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                {photo.icon}
                                {photo.category}
                              </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-bold text-gradient mb-2 leading-tight">{photo.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{photo.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
            )}

            {/* Stats Summary */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-gradient mb-2">{playerPhotos.length}</div>
                <div className="text-white/70">Fotos</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
                <div className="text-3xl font-bold text-gradient mb-2">{playerVideos.length}</div>
                <div className="text-white/70">Vídeos</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-gradient mb-2">6</div>
                <div className="text-white/70">Anos de Carreira</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <div className="text-3xl font-bold text-gradient mb-2">5</div>
                <div className="text-white/70">Clubes</div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Portfolio;