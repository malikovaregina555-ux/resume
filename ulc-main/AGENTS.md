# ulcamp

Одностраничный лендинг-портфолио «Регина — веб дизайнер». Статика без сборки, деплой на Vercel (https://des-reg.vercel.app/).

## Структура
- `index.html` — вся разметка: главная (hero, package, skills, cases, cta, footer, меню) и страницы кейсов `<article class="case-view">`, которые показываются по hash.
- `styles.css` — все стили. В `:root`: `--fs-*` — адаптивные роли (переопределяются на брейкпоинтах), `--text-*` — статичная шкала размеров шрифта. Новые размеры брать из шкалы.
- `script.js` — меню, parallax, reveal-анимации, turntable-портрет, роутинг кейсов по hash, автовоспроизведение видео `video[data-autoplay]` в зоне видимости, ссылки `[data-resume]` (открывают PDF в новой вкладке и параллельно скачивают его).
- `Regina_Malikova_Web_Designer_CV.pdf` — резюме; исключено из правила `*.pdf` в `.gitignore` и `.vercelignore`.
- `turntable.html` — отдельный демо-стенд с покадровой анимацией поворота портрета.
- `img/` — кадры поворота портрета (front/back/left1-4/right1-4), использует и index.html, и turntable.html.
- `images/` — иллюстрации секций и материалы кейсов (`norma/`, `tish/`, `opara/`, `podpislon/`).
- `fonts/NOGGI Regular.otf` — единственный источник шрифта NOGGI (подключается через `@font-face` в styles.css).

## Кейсы
Норма (`#case-norma`), Тишь (`#case-tish`), Опара (`#case-opara`, лендинг пекарни; живая копия сайта лежит в `opara/` и открывается ссылкой из кейса), Подпислон (`#case-podpislon`). Ещё две карточки на главной — заглушки «скоро». Кейсы связаны цепочкой «следующий кейс».

## Деплой
`vercel.json` → `outputDirectory: "."`, без build-шага. `.vercelignore` исключает `.Codex`, `references`, `*.pdf` (кроме резюме), черновые прототипы (`skeletons.html`, `userflow*.html`, `scenario-a-screens.html`), исходные PNG/GIF «Подпислона», `images/pole` и прочие неиспользуемые экспорты. Добавляя новый файл-черновик в корень, дописывать его в `.vercelignore`.

## Заметки
- Изображения-портреты обёрнуты в контейнеры с `aria-hidden="true"` — пустой `alt=""` у них корректен (декоративные).
- Картинки кейсов — WebP, анимации — MP4/WebM с постером, а не GIF.
- `og:image` должен быть абсолютным URL (соцсети не понимают относительные пути).
