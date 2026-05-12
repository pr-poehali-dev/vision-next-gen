import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Школьный доклад</Badge>,
    title: "Мой доклад.",
    showButton: true,
    buttonText: 'Смотреть далее'
  },
  {
    id: 'topic',
    title: 'О чём доклад?',
    content: 'Здесь можно написать краткое введение в тему — о чём пойдёт речь и почему это важно.'
  },
  {
    id: 'main',
    title: 'Основная часть',
    content: 'Ключевые факты, аргументы и данные по теме. Расскажи самое интересное и важное из своего исследования.'
  },
  {
    id: 'examples',
    title: 'Примеры и факты',
    content: 'Конкретные примеры, цифры или случаи, которые подтверждают тему доклада и делают его убедительным.'
  },
  {
    id: 'conclusion',
    title: 'Вывод',
    content: 'Краткое резюме доклада: что удалось узнать, какие выводы можно сделать и почему тема актуальна.',
    showButton: true,
    buttonText: 'Спасибо за внимание!'
  },
]