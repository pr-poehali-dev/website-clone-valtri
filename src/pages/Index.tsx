import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('main');

  const navigationItems = [
    { id: 'main', title: 'Главная', icon: 'Home' },
    { id: 'about', title: 'О проекте', icon: 'Building2' },
    { id: 'location', title: 'Расположение', icon: 'MapPin' },
    { id: 'gallery', title: 'Галерея', icon: 'Image' },
    { id: 'offices', title: 'Выбрать офис', icon: 'Calendar' },
    { id: 'conditions', title: 'Условия покупки', icon: 'FileText' },
    { id: 'partners', title: 'Партнерам', icon: 'Handshake' },
    { id: 'construction', title: 'Ход строительства', icon: 'HardHat' },
  ];

  const projectDocuments = [
    { id: 1, name: 'Проектная декларация', type: 'PDF', size: '2.4 MB', url: '#' },
    { id: 2, name: 'Генплан комплекса', type: 'PDF', size: '1.8 MB', url: '#' },
    { id: 3, name: 'Планировки квартир', type: 'PDF', size: '5.2 MB', url: '#' },
    { id: 4, name: 'Технические характеристики', type: 'PDF', size: '1.1 MB', url: '#' },
  ];

  const apartmentTypes = [
    { type: 'Студия', area: '25-30', price: '12 500 000', count: 24 },
    { type: '1-комнатная', area: '35-45', price: '18 200 000', count: 36 },
    { type: '2-комнатная', area: '60-75', price: '29 800 000', count: 28 },
    { type: '3-комнатная', area: '85-105', price: '42 500 000', count: 18 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">VALTRI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
          <Button variant="outline" size="sm">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {activeSection === 'main' && (
          <>
            {/* Hero Section */}
            <section className="relative hero-gradient text-white py-24 lg:py-32">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Премиум-класс в центре Москвы
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                      VALTRI
                      <span className="block text-2xl lg:text-3xl font-normal mt-2 opacity-90">
                        Новый стандарт жизни
                      </span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-md">
                      Эксклюзивный жилой комплекс с уникальной архитектурой 
                      и безупречным сервисом в сердце столицы
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                        <Icon name="Calendar" className="h-5 w-5 mr-2" />
                        Записаться на просмотр
                      </Button>
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                        <Icon name="Download" className="h-5 w-5 mr-2" />
                        Скачать презентацию
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="/img/658b3b4e-3bd4-4cdb-990c-d1919b6d0a6a.jpg" 
                      alt="VALTRI Building" 
                      className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-muted/50">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">24</h3>
                    <p className="text-muted-foreground">этажа</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">106</h3>
                    <p className="text-muted-foreground">квартир</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">2025</h3>
                    <p className="text-muted-foreground">год сдачи</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">от 12.5М</h3>
                    <p className="text-muted-foreground">₽ стоимость</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Apartment Types */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Планировки квартир</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Каждая квартира спроектирована с вниманием к деталям 
                    и максимальным комфортом для жизни
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {apartmentTypes.map((apt, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{apt.type}</CardTitle>
                        <CardDescription>{apt.area} м²</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-2xl font-bold text-primary">
                          от {apt.price} ₽
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Доступно: {apt.count} квартир
                        </div>
                        <Button className="w-full" onClick={() => setActiveSection('offices')}>
                          Выбрать квартиру
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Documents Section */}
            <section className="py-16 bg-muted/50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Документы проекта</h2>
                  <p className="text-muted-foreground">
                    Вся необходимая документация для ознакомления с проектом
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projectDocuments.map((doc) => (
                    <Card key={doc.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon name="FileText" className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-sm">{doc.name}</CardTitle>
                            <CardDescription className="text-xs">
                              {doc.type} • {doc.size}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button variant="outline" size="sm" className="w-full">
                          <Icon name="Download" className="h-4 w-4 mr-2" />
                          Скачать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'about' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">О проекте VALTRI</h1>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground">
                      VALTRI — это новый стандарт премиального жилья в центре Москвы. 
                      Комплекс сочетает в себе современную архитектуру, инновационные 
                      технологии и исключительный уровень сервиса.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                        <span>Уникальная архитектура от ведущих мировых бюро</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                        <span>Премиальные материалы отделки</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                        <span>Развитая инфраструктура и сервисы</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                        <span>Экологичность и энергоэффективность</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/img/51a2a509-9ac8-4e8b-923b-fa75ce24e1ae.jpg" 
                      alt="Interior" 
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'location' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Расположение</h1>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Центр Москвы</CardTitle>
                      <CardDescription>
                        Премиальное расположение в историческом центре столицы
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                        <Icon name="Map" className="h-16 w-16 text-muted-foreground" />
                        <span className="ml-4 text-muted-foreground">Интерактивная карта</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Транспорт</h4>
                          <p className="text-sm text-muted-foreground">
                            3 станции метро в шаговой доступности
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Инфраструктура</h4>
                          <p className="text-sm text-muted-foreground">
                            Рестораны, театры, парки поблизости
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Безопасность</h4>
                          <p className="text-sm text-muted-foreground">
                            Охраняемая территория 24/7
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'gallery' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Галерея проекта</h1>
                <Tabs defaultValue="exterior" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="exterior">Экстерьер</TabsTrigger>
                    <TabsTrigger value="interior">Интерьер</TabsTrigger>
                    <TabsTrigger value="amenities">Сервисы</TabsTrigger>
                    <TabsTrigger value="documents">Документы</TabsTrigger>
                  </TabsList>
                  <TabsContent value="exterior" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <img 
                        src="/img/658b3b4e-3bd4-4cdb-990c-d1919b6d0a6a.jpg" 
                        alt="Building exterior" 
                        className="rounded-lg shadow-md w-full h-64 object-cover"
                      />
                      <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                        <Icon name="Image" className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                        <Icon name="Image" className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="interior" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <img 
                        src="/img/51a2a509-9ac8-4e8b-923b-fa75ce24e1ae.jpg" 
                        alt="Interior" 
                        className="rounded-lg shadow-md w-full h-64 object-cover"
                      />
                      <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                        <Icon name="Image" className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                        <Icon name="Image" className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="amenities" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                        <Icon name="Image" className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="documents" className="mt-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {projectDocuments.map((doc) => (
                        <Card key={doc.id}>
                          <CardHeader>
                            <div className="flex items-center space-x-3">
                              <Icon name="FileText" className="h-8 w-8 text-primary" />
                              <div>
                                <CardTitle>{doc.name}</CardTitle>
                                <CardDescription>{doc.type} • {doc.size}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Icon name="Eye" className="h-4 w-4 mr-2" />
                                Просмотр
                              </Button>
                              <Button size="sm">
                                <Icon name="Download" className="h-4 w-4 mr-2" />
                                Скачать
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'offices' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Выбрать офис</h1>
                <div className="grid lg:grid-cols-3 gap-8">
                  {apartmentTypes.map((apt, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{apt.type}</CardTitle>
                        <CardDescription>Площадь: {apt.area} м²</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <Icon name="Home" className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-primary">от {apt.price} ₽</div>
                          <div className="text-sm text-muted-foreground">
                            Доступно: {apt.count} квартир
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Планировка
                          </Button>
                          <Button size="sm" className="flex-1">
                            Забронировать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'conditions' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Условия покупки</h1>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="payment">
                    <AccordionTrigger>Способы оплаты</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">100% оплата</h4>
                          <p className="text-sm text-muted-foreground">Скидка 7% при полной оплате</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Рассрочка</h4>
                          <p className="text-sm text-muted-foreground">Беспроцентная рассрочка до сдачи дома</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Ипотека</h4>
                          <p className="text-sm text-muted-foreground">Сотрудничество с ведущими банками</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="documents">
                    <AccordionTrigger>Необходимые документы</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Паспорт покупателя</li>
                        <li>• СНИЛС</li>
                        <li>• Справка о доходах (при ипотеке)</li>
                        <li>• Согласие супруга/супруги (при необходимости)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="process">
                    <AccordionTrigger>Процесс покупки</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center p-0">1</Badge>
                          <span className="text-sm">Выбор квартиры и бронирование</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center p-0">2</Badge>
                          <span className="text-sm">Подготовка документов</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center p-0">3</Badge>
                          <span className="text-sm">Подписание договора</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center p-0">4</Badge>
                          <span className="text-sm">Регистрация в Росреестре</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'partners' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">Партнерам</h1>
                <p className="text-lg text-muted-foreground mb-12">
                  Мы открыты для сотрудничества с риелторами, 
                  брокерами и другими участниками рынка недвижимости
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Риелторам</CardTitle>
                      <CardDescription>Высокие комиссии и поддержка продаж</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-left space-y-2 text-sm">
                        <li>• Комиссия до 3%</li>
                        <li>• Маркетинговая поддержка</li>
                        <li>• Обучение продукту</li>
                        <li>• Персональный менеджер</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Корпоративным клиентам</CardTitle>
                      <CardDescription>Специальные условия для юридических лиц</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-left space-y-2 text-sm">
                        <li>• Индивидуальные скидки</li>
                        <li>• Пакетные предложения</li>
                        <li>• Отсрочка платежей</li>
                        <li>• Юридическое сопровождение</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-12">
                  <Button size="lg">
                    <Icon name="Mail" className="h-5 w-5 mr-2" />
                    Стать партнером
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'construction' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Ход строительства</h1>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Текущий статус</CardTitle>
                      <CardDescription>Обновлено: сентябрь 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Готовность проекта</span>
                            <span>65%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-green-600">Завершено</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Фундамент</li>
                              <li>• Каркас здания</li>
                              <li>• Кровля</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-primary">В процессе</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Внутренние работы</li>
                              <li>• Инженерные системы</li>
                              <li>• Фасадные работы</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-muted-foreground">Планируется</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Благоустройство</li>
                              <li>• Чистовая отделка</li>
                              <li>• Сдача объекта</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Camera" className="h-12 w-12 text-muted-foreground" />
                      <span className="ml-3 text-muted-foreground">Фото с объекта</span>
                    </div>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Video" className="h-12 w-12 text-muted-foreground" />
                      <span className="ml-3 text-muted-foreground">Видео-отчет</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Building2" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">VALTRI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальный жилой комплекс 
                в центре Москвы
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@valtri.moscow</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Информация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Режим работы: 9:00-21:00</p>
                <p>Выходные: без выходных</p>
                <p>Парковка: бесплатная</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 VALTRI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}