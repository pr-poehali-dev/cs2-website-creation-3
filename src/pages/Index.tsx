import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const newsItems = [
    {
      id: 1,
      title: 'Новое обновление: Operation Riptide',
      date: '2024-11-10',
      category: 'Обновления',
      description: 'Valve выпустила масштабное обновление с новыми картами и скинами',
      image: 'https://cdn.poehali.dev/projects/d2665cb7-a2d8-453d-a8dd-4d2de8f2c861/files/c768f636-5cf5-4cc5-ac08-33eef2e5e46a.jpg'
    },
    {
      id: 2,
      title: 'Чемпионат мира CS2: Результаты четвертьфинала',
      date: '2024-11-08',
      category: 'Киберспорт',
      description: 'NAVI проходит в полуфинал после драматичного матча',
      image: 'https://cdn.poehali.dev/projects/d2665cb7-a2d8-453d-a8dd-4d2de8f2c861/files/73cadeae-a029-46c8-9f3e-f5c9673a12b2.jpg'
    },
    {
      id: 3,
      title: 'Патч 1.5: Баланс оружия',
      date: '2024-11-05',
      category: 'Патчи',
      description: 'Значительные изменения в балансе AWP и AK-47',
      image: 'https://cdn.poehali.dev/projects/d2665cb7-a2d8-453d-a8dd-4d2de8f2c861/files/135f2588-2d66-4b11-8797-d49b8237e22d.jpg'
    }
  ];

  const guides = [
    {
      id: 1,
      title: 'Освоение стрельбы: Гайд по контролю отдачи',
      difficulty: 'Продвинутый',
      views: '12.5K',
      icon: 'Target'
    },
    {
      id: 2,
      title: 'Экономика в CS2: Полное руководство',
      difficulty: 'Средний',
      views: '8.2K',
      icon: 'DollarSign'
    },
    {
      id: 3,
      title: 'Настройка прицела и лучшие конфиги',
      difficulty: 'Начальный',
      views: '15.3K',
      icon: 'Settings'
    },
    {
      id: 4,
      title: 'Смоки и флешки на Mirage',
      difficulty: 'Средний',
      views: '9.7K',
      icon: 'Cloud'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b-2 border-primary/40 hologram">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-secondary rounded-lg flex items-center justify-center border-2 border-primary/60 relative overflow-hidden">
                <span className="text-xl font-black text-background relative z-10">CS</span>
                <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
              </div>
              <span className="text-2xl font-black glow-cyan tracking-wider">CS2 PORTAL</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Новости', 'Гайды', 'Сообщество', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-background font-bold border-2 border-primary/60 border-glow-cyan hologram">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border-2 border-accent/60 text-lg px-6 py-2 hologram">
              <Icon name="Zap" size={16} className="mr-2" />
              Counter-Strike 2
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-wider">
              TACTICAL SHOOTER
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Киберспортивный портал с актуальными новостями, профессиональными гайдами и активным сообществом игроков
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-bold text-lg px-8 border-2 border-primary/70 border-glow-cyan hologram">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть обзор
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/70 text-primary hover:bg-primary/20 font-bold text-lg px-8 hologram">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать гайды
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Newspaper', title: 'Актуальные новости', desc: 'Ежедневные обновления' },
              { icon: 'Trophy', title: 'Киберспорт', desc: 'Турниры и результаты' },
              { icon: 'GraduationCap', title: 'Обучение', desc: 'Гайды от профи' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-2 border-primary/40 hover:border-primary/80 transition-all hover:scale-105 animate-fade-in hologram" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-primary/50 relative overflow-hidden">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-primary/20" />

      <section id="новости" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Newspaper" size={32} className="text-secondary" />
            <h2 className="text-4xl md:text-5xl font-black text-neon-purple glow-purple tracking-wider">НОВОСТИ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news, idx) => (
              <Card key={news.id} className="bg-card border-2 border-primary/40 hover:border-secondary/80 transition-all group cursor-pointer animate-slide-in hologram" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {news.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{news.title}</CardTitle>
                  <CardDescription>{news.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-2 border-secondary/70 text-secondary hover:bg-secondary/20 hologram">
              Все новости
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-primary/20" />

      <section id="гайды" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="BookOpen" size={32} className="text-primary" />
            <h2 className="text-4xl md:text-5xl font-black text-neon-cyan glow-cyan tracking-wider">ГАЙДЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, idx) => (
              <Card key={guide.id} className="bg-card border-2 border-primary/40 hover:border-primary/80 transition-all group cursor-pointer animate-fade-in hologram" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/50 group-hover:border-primary/80 transition-colors">
                        <Icon name={guide.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">{guide.title}</CardTitle>
                        <div className="flex items-center gap-3 text-sm">
                          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                            {guide.difficulty}
                          </Badge>
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {guide.views}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-bold border-2 border-primary/70 border-glow-cyan hologram">
              Все гайды
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-primary/20" />

      <section id="сообщество" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Users" size={32} className="text-accent" />
              <h2 className="text-4xl md:text-5xl font-black text-neon-green glow-green tracking-wider">СООБЩЕСТВО</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Более 50,000 активных игроков обсуждают стратегии, делятся опытом и играют вместе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'MessageSquare', title: 'Discord', members: '25K+', color: 'primary' },
              { icon: 'Users', title: 'Steam Group', members: '18K+', color: 'secondary' },
              { icon: 'Tv', title: 'Twitch', members: '12K+', color: 'accent' }
            ].map((community, idx) => (
              <Card key={idx} className="bg-card border-2 border-primary/40 hover:border-accent/80 transition-all text-center group cursor-pointer animate-scale-in hologram" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-8 pb-8">
                  <div className={`w-20 h-20 bg-${community.color}/10 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-${community.color}/30 group-hover:border-${community.color} transition-colors`}>
                    <Icon name={community.icon as any} size={36} className={`text-${community.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{community.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{community.members} участников</p>
                  <Button variant="outline" className="w-full group-hover:bg-accent/10 group-hover:border-accent group-hover:text-accent">
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-primary/20" />

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-black text-neon-cyan glow-cyan mb-4 tracking-wider">КОНТАКТЫ</h2>
            <p className="text-muted-foreground text-lg">
              Есть вопросы, предложения или хотите стать частью команды?
            </p>
          </div>

          <Card className="bg-card border-2 border-primary/50 hologram">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border-2 border-primary/40 rounded px-4 py-3 focus:outline-none focus:border-primary focus:border-glow-cyan transition-colors font-medium"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background border-2 border-primary/40 rounded px-4 py-3 focus:outline-none focus:border-primary focus:border-glow-cyan transition-colors font-medium"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-background border-2 border-primary/40 rounded px-4 py-3 focus:outline-none focus:border-primary focus:border-glow-cyan transition-colors resize-none font-medium"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-background font-bold border-2 border-primary/70 border-glow-cyan hologram">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center">
                  <span className="text-lg font-bold text-background">CS</span>
                </div>
                <span className="text-xl font-bold">CS2 Portal</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший киберспортивный портал для игроков Counter-Strike 2
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('главная')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('новости')} className="hover:text-primary transition-colors">Новости</button></li>
                <li><button onClick={() => scrollToSection('гайды')} className="hover:text-primary transition-colors">Гайды</button></li>
                <li><button onClick={() => scrollToSection('сообщество')} className="hover:text-primary transition-colors">Сообщество</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">База знаний</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                {['Twitter', 'Youtube', 'Github'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all">
                    <Icon name={social as any} size={20} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-primary/20 mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 CS2 Portal. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}