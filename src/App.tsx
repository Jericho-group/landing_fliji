import React, { useEffect, useRef } from 'react';
import { Play, Film, Users, Share2, MessageCircle, Smartphone, Globe as Globe2, Heart, ArrowRight, Clock, Sparkles, Zap, Shield, Gift, Download } from 'lucide-react';

function App() {
  const [likedFeatures, setLikedFeatures] = React.useState<{[key: string]: boolean}>({});
  const [hearts, setHearts] = React.useState<{id: string, x: number, r: number}[]>([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLike = (featureId: string) => {
    setLikedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));

    if (!likedFeatures[featureId]) {
      // Create multiple hearts with random positions
      const newHearts = Array.from({length: 5}).map((_, i) => ({
        id: `${featureId}-${Date.now()}-${i}`,
        x: (Math.random() - 0.5) * 100, // Random X offset
        r: (Math.random() - 0.5) * 45 // Random rotation
      }));
      setHearts(prev => [...prev, ...newHearts]);
      
      // Remove hearts after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
      }, 1000);
    }
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    document.querySelectorAll('.fade-up, .fade-in, .scale-up').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div className="absolute inset-0 grid-background opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#8A5AEC]/20 via-black to-black"></div>

        <div className="relative z-10 container mx-auto px-8 lg:px-16 pt-20 lg:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-8 fade-in">
              <span className="text-[#8A5AEC] text-sm font-medium mr-2">Новое</span>
              <span className="text-gray-400 text-sm">Групповые трансляции уже доступны</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 fade-up">
              Смотрите любимый контент вместе
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed fade-up" style={{ transitionDelay: '0.2s' }}>
              Fliji — социальная сеть нового поколения для интерактивного совместного просмотра видео и поиска знакомств по интересам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ transitionDelay: '0.4s' }}>
              <a 
                href="https://apps.apple.com/ru/app/fliji/id1644308906?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition border border-white/10 flex items-center justify-center group"
              >
                <Download className="w-5 h-5 mr-2" />
                App Store
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.fliji.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition border border-white/10 flex items-center justify-center group"
              >
                <Download className="w-5 h-5 mr-2" />
                Google Play
              </a>
            </div>
          </div>

          <div className="mt-24 relative fade-up" style={{ transitionDelay: '0.6s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  image: "https://blog.potok.digital/wp-content/uploads/2023/07/video.jpg",
                  name: "Александр Волков",
                  followers: "2.1M подписчиков",
                  category: "Технологии"
                },
                {
                  image: "https://opora.ru/site/assets/files/54789/izobrazhenie_2023-08-15_180655237.1536x1152.webp",
                  name: "Мария Светлова",
                  followers: "1.8M подписчиков",
                  category: "Лайфстайл"
                },
                {
                  image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6617fdc802d8796b316c8586_6617fdd002d8796b316c8c8b/scale_1200",
                  name: "Дмитрий Черных",
                  followers: "3.2M подписчиков",
                  category: "Путешествия"
                },
                {
                  image: "https://avatars.mds.yandex.net/i?id=4335d5d02bcff25afee2c61e52bef1b9_l-5226766-images-thumbs&n=13",
                  name: "Анна Королева",
                  followers: "1.5M подписчиков",
                  category: "Мода"
                }
              ].map((blogger, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-[2/3] rounded-2xl overflow-hidden scale-up"
                  style={{ 
                    animation: `float ${3 + i}s ease-in-out infinite`,
                    transitionDelay: `${i * 0.1}s`
                  }}
                >
                  <img
                    src={blogger.image}
                    alt={blogger.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-center">
                        <h3 className="text-lg font-bold mb-1">{blogger.name}</h3>
                        <p className="text-sm text-gray-300 mb-2">{blogger.category}</p>
                        <p className="text-sm text-[#8A5AEC] mb-4">{blogger.followers}</p>
                        <button className="w-full bg-[#8A5AEC] p-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#7849d1] transition">
                          <Users className="w-5 h-5" />
                          <span>Подписаться</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-32 relative overflow-hidden" id="features">
        <div className="absolute inset-0 grid-background opacity-30"></div>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Здесь все как вы любите
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Мы создали платформу, которая объединяет все необходимые функции для комфортного совместного просмотра
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'sync',
                icon: Sparkles,
                title: "Умная синхронизация",
                description: "Автоматическая синхронизация видео между всеми участниками просмотра",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                id: 'rooms',
                icon: Users,
                title: "Групповые комнаты",
                description: "Создавайте приватные комнаты для просмотра с друзьями и близкими",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                id: 'chat',
                icon: MessageCircle,
                title: "Живое общение",
                description: "Чат, реакции и голосовые комментарии во время просмотра",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                id: 'security',
                icon: Shield,
                title: "Безопасность",
                description: "Надежная защита личных данных и конфиденциальность общения",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group relative rounded-3xl p-1 scale-up"
                style={{
                  background: `linear-gradient(to bottom right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`,
                  transitionDelay: `${i * 0.1}s`
                }}
              >
                <div className="relative h-full bg-[#8A5AEC]/10 backdrop-blur-sm rounded-[23px] p-8 overflow-hidden hover:bg-[#8A5AEC]/15 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6" style={{
                        background: `linear-gradient(to bottom right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`
                      }}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <button 
                        onClick={() => handleLike(feature.id)}
                        className="relative"
                      >
                        <Heart 
                          className={`w-6 h-6 transition-colors duration-300 cursor-pointer ${
                            likedFeatures[feature.id] ? 'fill-[#8A5AEC] text-[#8A5AEC]' : 'text-gray-400'
                          }`}
                          style={{
                            animation: likedFeatures[feature.id] ? 'like 0.5s ease-in-out' : 'none'
                          }}
                        />
                        {hearts.filter(h => h.id.startsWith(feature.id)).map((heart) => (
                          <Heart 
                            key={heart.id}
                            className="w-4 h-4 absolute bottom-0 left-1/2 fill-[#8A5AEC] text-[#8A5AEC]"
                            style={{
                              '--tx': `${heart.x}px`,
                              '--r': `${heart.r}deg`,
                              animation: 'float-hearts 1s ease-out forwards'
                            } as React.CSSProperties}
                          />
                        ))}
                      </button>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30"></div>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Приложение
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Простой и интуитивный интерфейс для комфортного использования на любом устройстве
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { src: "/onboarding-4.png", alt: "Onboarding 4" },
              { src: "/onboarding-5.png", alt: "Onboarding 5" },
              { src: "/onboarding-6.png", alt: "Onboarding 6" },
              { src: "/onboarding-7.png", alt: "Onboarding 7" },
              { src: "/onboarding-8.png", alt: "Onboarding 8" },
              { src: "/onboarding-9.png", alt: "Onboarding 9" }
            ].map((image, i) => (
              <div 
                key={i}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden scale-up purple-glow"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#8A5AEC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30"></div>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Таймлайн
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Возможность присоединиться к пользователю в определенный момент времени и перейти от частного просмотра к совместному простым нажатием одной кнопки. Fliji предоставляет возможность переключаться между пользователями под одним видео, обеспечивая плавный переход между группами и отдельными зрителями.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#8A5AEC]/20 via-[#8A5AEC] to-[#8A5AEC]/20"></div>
            
            {/* Timeline Items */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  time: "19:30",
                  image: "https://images.pexels.com/photos/7234270/pexels-photo-7234270.jpeg?auto=compress&cs=tinysrgb&w=800",
                  title: "Марвел Марафон",
                  viewers: 234,
                  host: "Анна К."
                },
                {
                  time: "20:15",
                  image: "https://www.shutterstock.com/shutterstock/videos/3432976723/thumb/1.jpg?ip=x480",
                  title: "Аниме вечер",
                  viewers: 567,
                  host: "Дмитрий В."
                },
                {
                  time: "21:00",
                  image: "https://i.pinimg.com/474x/3a/9c/fa/3a9cfa99780894964a92d92cda6b35c7.jpg",
                  title: "Классика кино",
                  viewers: 789,
                  host: "Мария С."
                },
                {
                  time: "23:15",
                  image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67aeae13e51fcf55b15d1aa3_67aeae702529682c556d75c2/scale_1200",
                  title: "Ретро игры",
                  viewers: 892,
                  host: "Игорь М."
                }
              ].map((event, i) => (
                <div key={i} className="group scale-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="relative bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 purple-glow">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#8A5AEC]" />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {event.viewers} зрителей
                        </span>
                        <span className="flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          {event.host}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#8A5AEC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Points */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#8A5AEC] glow-point"
                  style={{
                    animation: `pulse 2s infinite ${i * 0.5}s`,
                    boxShadow: '0 0 10px rgba(138, 90, 236, 0.5)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/60 z-10"></div>
          <div className="absolute inset-0 grid-background opacity-30"></div>
        </div>
        <div className="relative z-20 container mx-auto px-8 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Ни рубля за общение!
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Присоединяйтесь к тысячам зрителей, которые уже наслаждаются совместным просмотром на бесплатной основе
            </p>
            <button 
              onClick={scrollToTop}
              className="bg-[#8A5AEC] px-12 py-4 rounded-full text-lg font-medium hover:bg-[#7849d1] transition group"
            >
              Присоединиться к остальным
              <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="fade-up">
              <div className="flex items-center space-x-2 mb-6">
                <Play className="w-8 h-8 text-[#8A5AEC]" fill="currentColor" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A5AEC] to-[#A78BFA]">
                  Fliji
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Лучший способ смотреть контент вместе с друзьями и семьей
              </p>
            </div>
            
            {[
              {
                title: "Компания",
                links: [
                  "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ФЛИДЖИ\"",
                  "ФЛИДЖИ - Компания разработчик программного обеспечения, мобильных приложений",
                  "ИНН: 2304084711",
                  "ОКВЭД: 62.01 Разработка компьютерного программного обеспечения",
                  "Юридический адрес компании: улица Суворова, д. 29, кв./оф. ПОМЕЩ. 95, Краснодарский край, г. Геленджик",
                  "Телефон: ‪+7 928 407-41-22‬",
                  "Электронная почта: flijililtd@gmail.com"
                ],
                clickable: false
              },
              {
                title: "Технический стек",
                links: ["Python, Laravel, PHP8, Socket.IO, REST API, WebRTC, Swift, Kotlin, Java"],
                clickable: false
              },
              {
                title: "Правовая информация",
                links: ["Пользовательское соглашение"],
                clickable: true
              }
            ].map((section, i) => (
              <div key={i} className="fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                <div className="flex flex-col space-y-4">
                  {section.links.map((link, j) => (
                    section.clickable ? (
                      <a 
                        key={j} 
                        href="https://fliji.net/privacy_policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition text-sm leading-relaxed"
                      >
                        {link}
                      </a>
                    ) : (
                      <span 
                        key={j} 
                        className="text-gray-400 text-sm leading-relaxed"
                      >
                        {link}
                      </span>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;