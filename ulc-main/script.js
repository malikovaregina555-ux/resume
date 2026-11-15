    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const body = document.body;
    const menu = document.getElementById("menuOverlay");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const homeView = document.getElementById("main");
    const caseViews = Array.from(document.querySelectorAll(".case-view[data-case-route]"));
    const footer = document.getElementById("footer");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
    const turntableImages = Array.from(document.querySelectorAll(".hero .turntable-img"));
    const turntableFrames = [
      "img/front.webp",
      "img/right1.webp",
      "img/right2.webp",
      "img/left2.webp",
      "img/left1.webp",
      "img/front.webp",
      "img/front.webp"
    ];
    const pointer = { x: 0, y: 0 };
    let ticking = false;
    let frameIndex = 0;
    let turntableTimer = null;

    function openMenu() {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      menuToggle.setAttribute("aria-expanded", "true");
      homeView.inert = true;
      caseViews.forEach((view) => {
        view.inert = true;
      });
      footer.inert = true;
      body.classList.add("menu-open");
      menuClose.focus();
    }

    function closeMenu() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      menuToggle.setAttribute("aria-expanded", "false");
      homeView.inert = false;
      caseViews.forEach((view) => {
        view.inert = view.hidden;
      });
      footer.inert = false;
      body.classList.remove("menu-open");
      menuToggle.focus();
    }

    function setupReveal() {
      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        return;
      }

      body.classList.add("motion-ready");
      const revealItems = document.querySelectorAll(".section, .site-footer, .case-page");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach((item) => {
        item.classList.add("reveal");
        observer.observe(item);
      });
    }

    function updateParallax() {
      ticking = false;

      if (reducedMotion.matches) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const depth = Number(item.dataset.depth || 0.08);
        const rotate = Number(item.dataset.rotate || 0);
        const itemCenter = rect.top + rect.height / 2;
        const scrollShift = (viewportCenter - itemCenter) * depth * 0.11;
        const pointerShiftX = pointer.x * depth * 10;
        const pointerShiftY = pointer.y * depth * 6;
        const rotateShift = (pointer.x * rotate * 8) + (scrollShift * rotate * 0.08);

        item.style.setProperty("--parallax-x", `${pointerShiftX.toFixed(2)}px`);
        item.style.setProperty("--parallax-y", `${(scrollShift + pointerShiftY).toFixed(2)}px`);
        item.style.setProperty("--parallax-r", `${rotateShift.toFixed(3)}deg`);
      });
    }

    function requestParallax() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    }

    function setupParallax() {
      if (reducedMotion.matches) {
        return;
      }

      window.addEventListener("scroll", requestParallax, { passive: true });
      window.addEventListener("resize", requestParallax);
      window.addEventListener("pointermove", (event) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
        requestParallax();
      }, { passive: true });

      requestParallax();
    }

    // Главная: каждый блок залипает, когда его низ доходит до низа экрана, и следующий наплывает
    // на него сверху (--stick-top). Блок «кейсы» на время листания замирает,
    // а вертикальная прокрутка сдвигает ленту карточек вбок (--cases-h, --cases-x)
    const stackSections = Array.from(homeView.querySelectorAll(":scope > .section"));
    const casesSection = homeView.querySelector(".cases");
    const casesPin = casesSection && casesSection.querySelector(".cases__inner");
    const casesTrack = casesSection && casesSection.querySelector(".desktop-board");
    const caseCards = casesTrack ? Array.from(casesTrack.querySelectorAll(".case-card")) : [];
    const casesCount = casesSection && casesSection.querySelector("[data-cases-count]");
    let casesDistance = 0;
    let casesTop = 0;
    let sectionTops = [];
    let lastStackY = window.scrollY;
    let stackTicking = false;

    function stackActive() {
      return !reducedMotion.matches && !homeView.hidden;
    }

    // блок доехал до верха экрана и встал — коротко пружинит вверх (класс is-landing, анимация в styles.css)
    function landSection(section) {
      section.classList.remove("is-landing");
      void section.offsetWidth;
      section.classList.add("is-landing");
    }

    function updateStack() {
      stackTicking = false;

      if (!stackActive()) {
        return;
      }

      const scrollY = window.scrollY;
      if (scrollY > lastStackY) {
        stackSections.forEach((section, index) => {
          if (index > 0 && lastStackY < sectionTops[index] && scrollY >= sectionTops[index]) {
            landSection(section);
          }
        });
      }
      lastStackY = scrollY;

      // --in: блок въезжает снизу (0 — верх блока у низа экрана, 1 — блок встал наверх);
      // --out: его закрывает следующий блок (это --in следующего)
      const viewportHeight = window.innerHeight;
      const enter = stackSections.map((section, index) => clamp01((scrollY - sectionTops[index] + viewportHeight) / viewportHeight));
      stackSections.forEach((section, index) => {
        section.style.setProperty("--in", enter[index].toFixed(3));
        section.style.setProperty("--out", (enter[index + 1] || 0).toFixed(3));
      });

      if (casesTrack) {
        const progress = clamp01(casesDistance ? (scrollY - casesTop) / casesDistance : 0);
        casesTrack.style.setProperty("--cases-x", `${(-progress * casesDistance).toFixed(1)}px`);
        casesSection.style.setProperty("--cases-p", progress.toFixed(4));
        updateCaseCards(progress);
      }
    }

    // карточки кейсов: номер текущей в счётчике и сдвиг картинки внутри рамки — чем дальше карточка
    // от центра экрана, тем сильнее (--px от -1 до 1), получается параллакс при листании вбок
    function updateCaseCards(progress) {
      const index = Math.round(progress * (caseCards.length - 1)) + 1;
      if (casesCount && casesCount.textContent !== String(index).padStart(2, "0")) {
        casesCount.textContent = String(index).padStart(2, "0");
      }

      const viewportWidth = window.innerWidth;
      caseCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const shift = (rect.left + rect.width / 2 - viewportWidth / 2) / viewportWidth;
        card.style.setProperty("--px", Math.max(-1, Math.min(1, shift)).toFixed(3));
      });
    }

    function clamp01(value) {
      return Math.min(1, Math.max(0, value));
    }

    function measureStack() {
      if (!stackActive()) {
        return;
      }

      const viewportHeight = window.innerHeight;
      if (casesTrack) {
        casesDistance = Math.max(0, casesTrack.scrollWidth - casesPin.clientWidth);
        casesSection.style.setProperty("--cases-h", `${viewportHeight + casesDistance}px`);
        casesTop = flowTop(casesSection);
      }

      stackSections.forEach((section) => {
        section.style.setProperty("--stick-top", `${Math.min(0, viewportHeight - section.offsetHeight)}px`);
      });
      sectionTops = stackSections.map(flowTop);
      updateStack();
    }

    function requestStack() {
      if (!stackTicking) {
        stackTicking = true;
        window.requestAnimationFrame(updateStack);
      }
    }

    function setupStack() {
      window.addEventListener("scroll", requestStack, { passive: true });
      window.addEventListener("resize", measureStack);
      window.addEventListener("load", measureStack);
      reducedMotion.addEventListener("change", measureStack);
      stackSections.forEach((section) => {
        section.addEventListener("animationend", (event) => {
          if (event.target === section) {
            section.classList.remove("is-landing");
          }
        });
      });

      if ("ResizeObserver" in window) {
        const observer = new ResizeObserver(() => measureStack());
        stackSections.forEach((section) => observer.observe(section));
      }

      measureStack();
    }

    // огромные слова NOGGI (data-mega): каждая буква — свой span с номером --i, чтобы буквы выезжали
    // из-под линии по очереди; целое слово остаётся для скринридеров в .sr-only
    function splitMega() {
      document.querySelectorAll("[data-mega]").forEach((word) => {
        const text = word.textContent.trim();
        const label = document.createElement("span");
        const letters = document.createElement("span");
        label.className = "sr-only";
        label.textContent = text;
        letters.setAttribute("aria-hidden", "true");
        Array.from(text).forEach((char, index) => {
          const letter = document.createElement("span");
          letter.className = "mega__ch";
          letter.style.setProperty("--i", index);
          letter.textContent = char;
          letters.append(letter);
        });
        word.replaceChildren(label, letters);
      });
    }

    // первый экран собирается после загрузки шрифта: буквы, портрет и пометки (классы в styles.css)
    function revealHero() {
      const show = () => window.requestAnimationFrame(() => body.classList.add("is-loaded"));
      if (document.fonts && document.fonts.load) {
        Promise.race([document.fonts.load('100px "NOGGI"'), new Promise((resolve) => window.setTimeout(resolve, 1200))]).then(show, show);
      } else {
        show();
      }
    }

    // позиция блока в потоке страницы: у залипшего (и чуть уменьшенного) блока
    // getBoundingClientRect даёт место, где он висит, поэтому складываем высоты блоков выше
    function flowTop(element) {
      const index = stackSections.indexOf(element);
      if (index < 0) {
        return element.getBoundingClientRect().top + window.scrollY;
      }

      return stackSections.slice(0, index).reduce(
        (top, section) => top + section.offsetHeight,
        homeView.getBoundingClientRect().top + window.scrollY
      );
    }

    // «что умею» — как блок Forms follow perspective на noth.in: таблички и предметы лежат кучкой,
    // курсор расталкивает их с поворотом и лёгким увеличением, ушёл — они пружинят обратно.
    // Без курсора (и на телефоне) точкой отталкивания служит центр экрана, поэтому в покое кучка чуть раскрыта
    function setupSkillForms() {
      const stage = document.querySelector("[data-forms]");
      if (!stage) {
        return;
      }

      const section = stage.closest(".section");
      const items = Array.from(stage.querySelectorAll(".skill-label, .skill-form"));
      const state = items.map(() => ({ x: 0, y: 0, r: 0, s: 1, vx: 0, vy: 0, vr: 0, vs: 0, tx: 0, ty: 0, tr: 0, ts: 1 }));
      const compact = window.matchMedia("(max-width: 767px)");
      const pointer = { x: 0, y: 0, inside: false };
      const STIFFNESS = 0.09;
      const DAMPING = 0.76;
      let visible = false;
      let running = false;

      function settings() {
        return compact.matches
          ? { radius: 260, push: 110, rot: 12, grow: 0.1 }
          : { radius: 460, push: 260, rot: 30, grow: 0.2 };
      }

      // цель каждого предмета: уйти по лучу от точки отталкивания; сила спадает к краю радиуса,
      // а сдвиг ограничен краями сцены, чтобы ничего не улетало под заголовок и за экран
      function aim() {
        const { radius, push, rot, grow } = settings();
        const fx = pointer.inside ? pointer.x : window.innerWidth / 2;
        const fy = pointer.inside ? pointer.y : window.innerHeight / 2;
        const box = stage.getBoundingClientRect();

        items.forEach((item, i) => {
          const st = state[i];
          if (!visible) {
            st.tx = 0;
            st.ty = 0;
            st.tr = 0;
            st.ts = 1;
            return;
          }

          const rect = item.getBoundingClientRect();
          const cx = rect.left + rect.width / 2 - st.x;
          const cy = rect.top + rect.height / 2 - st.y;
          const dist = Math.hypot(cx - fx, cy - fy);
          if (dist >= radius) {
            st.tx = 0;
            st.ty = 0;
            st.tr = 0;
            st.ts = 1;
            return;
          }

          const angle = Math.atan2(cy - fy, cx - fx);
          const force = Math.pow((radius - dist) / radius, 1.6);
          const halfW = item.offsetWidth / 2;
          const halfH = item.offsetHeight / 2;
          const clamp = (value, lo, hi) => (lo > hi ? value : Math.min(hi, Math.max(lo, value)));
          st.tx = clamp(Math.cos(angle) * force * push, box.left + halfW - cx, box.right - halfW - cx);
          st.ty = clamp(Math.sin(angle) * force * push, box.top + halfH - cy, box.bottom - halfH - cy);
          st.tr = Math.cos(angle) * force * rot;
          st.ts = 1 + force * grow;
        });
      }

      function apply(item, st) {
        item.style.setProperty("--fx", `${st.x.toFixed(1)}px`);
        item.style.setProperty("--fy", `${st.y.toFixed(1)}px`);
        item.style.setProperty("--fr", `${st.r.toFixed(2)}deg`);
        item.style.setProperty("--fs", st.s.toFixed(3));
      }

      // пружина: быстро отлетают и с лёгким перелётом возвращаются
      function step() {
        aim();
        let moving = false;

        items.forEach((item, i) => {
          const st = state[i];
          st.vx = (st.vx + (st.tx - st.x) * STIFFNESS) * DAMPING;
          st.vy = (st.vy + (st.ty - st.y) * STIFFNESS) * DAMPING;
          st.vr = (st.vr + (st.tr - st.r) * STIFFNESS) * DAMPING;
          st.vs = (st.vs + (st.ts - st.s) * STIFFNESS) * DAMPING;
          st.x += st.vx;
          st.y += st.vy;
          st.r += st.vr;
          st.s += st.vs;

          if (Math.abs(st.tx - st.x) + Math.abs(st.ty - st.y) + Math.abs(st.tr - st.r) > 0.1
            || Math.abs(st.vx) + Math.abs(st.vy) + Math.abs(st.vr) > 0.05
            || Math.abs(st.ts - st.s) > 0.001) {
            moving = true;
          }
          apply(item, st);
        });

        if (moving) {
          window.requestAnimationFrame(step);
        } else {
          running = false;
        }
      }

      function wake() {
        if (!running) {
          running = true;
          window.requestAnimationFrame(step);
        }
      }

      // без анимаций: сразу ставим раскрытую кучку, как в покое
      if (reducedMotion.matches) {
        const settle = () => {
          visible = true;
          aim();
          items.forEach((item, i) => {
            const st = state[i];
            st.x = st.tx;
            st.y = st.ty;
            st.r = st.tr;
            st.s = st.ts;
            apply(item, st);
          });
        };
        settle();
        window.addEventListener("resize", settle);
        return;
      }

      section.addEventListener("pointermove", (event) => {
        pointer.inside = true;
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        wake();
      }, { passive: true });

      ["pointerleave", "pointercancel"].forEach((type) => {
        section.addEventListener(type, () => {
          pointer.inside = false;
          wake();
        });
      });
      section.addEventListener("pointerup", (event) => {
        if (event.pointerType !== "mouse") {
          pointer.inside = false;
          wake();
        }
      });

      window.addEventListener("scroll", wake, { passive: true });
      window.addEventListener("resize", wake);

      if ("IntersectionObserver" in window) {
        new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          wake();
        }).observe(section);
      } else {
        visible = true;
        wake();
      }
    }

    function setupTurntable() {
      if (reducedMotion.matches || turntableImages.length === 0) {
        return;
      }

      const preloadFrames = () => {
        turntableFrames.forEach((src) => {
          const image = new Image();
          image.src = src;
        });
      };

      if (document.readyState === "complete") {
        preloadFrames();
      } else {
        window.addEventListener("load", preloadFrames, { once: true });
      }

      turntableTimer = window.setInterval(() => {
        frameIndex = (frameIndex + 1) % turntableFrames.length;
        const nextFrame = turntableFrames[frameIndex];
        turntableImages.forEach((image) => {
          image.src = nextFrame;
        });
      }, 620);
    }

    function setupAutoplayVideos() {
      const videos = Array.from(document.querySelectorAll("video[data-autoplay]"));
      if (videos.length === 0) {
        return;
      }

      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        videos.forEach((video) => {
          video.controls = true;
        });
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
          } else {
            entry.target.pause();
          }
        });
      }, { threshold: 0.25 });

      videos.forEach((video) => observer.observe(video));
    }

    // нижнее размытие края экрана темнеет, пока под ним чёрный футер:
    // корень наблюдателя сужен до нижних 10% экрана — примерно высота полосы размытия
    function setupFooterEdge() {
      const footer = document.getElementById("footer");
      if (!footer || !("IntersectionObserver" in window)) {
        return;
      }

      const observer = new IntersectionObserver(([entry]) => {
        document.body.classList.toggle("footer-edge", entry.isIntersecting);
      }, { rootMargin: "-90% 0px 0px 0px" });

      observer.observe(footer);
    }

    // просмотр картинок кейсов: клик открывает картинку крупно поверх страницы;
    // если реальный размер больше экрана, клик по крупной картинке показывает её целиком в полный размер,
    // её можно двигать мышью или прокруткой; Esc, крестик или клик мимо картинки закрывают просмотр
    function setupLightbox() {
      const lightbox = document.getElementById("lightbox");
      if (!lightbox || typeof lightbox.showModal !== "function") {
        return;
      }

      const stage = lightbox.querySelector(".lightbox__stage");
      const image = lightbox.querySelector(".lightbox__img");
      const navButtons = lightbox.querySelectorAll(".lightbox__nav");
      const sources = Array.from(document.querySelectorAll(".case-view .case-figure > img, .case-view .case-scheme__link img"));
      let current = null;
      let isZoomed = false;
      let isZoomable = false;
      let drag = null;
      let dragged = false;
      let backdropPixels = null;

      // у схем (user flow, скелетоны) свой светлый фон занимает почти весь экран просмотра,
      // поэтому клик по пустому фону самой схемы тоже считается кликом мимо картинки
      function readBackdropPixels() {
        backdropPixels = null;
        if (!current || !current.closest(".case-scheme__link") || !image.naturalWidth) {
          return;
        }
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        context.drawImage(image, 0, 0);
        backdropPixels = context;
      }

      function isSchemeBackdrop(event) {
        if (!backdropPixels) {
          return false;
        }
        const rect = image.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / rect.width * image.naturalWidth);
        const y = Math.floor((event.clientY - rect.top) / rect.height * image.naturalHeight);
        // соседние пиксели тоже проверяются, чтобы клик по тонкой стрелке или краю плашки не закрывал просмотр
        const size = 7;
        const data = backdropPixels.getImageData(x - 3, y - 3, size, size).data;
        for (let i = 0; i < data.length; i += 4) {
          if (Math.abs(data[i] - 242) > 6 || Math.abs(data[i + 1] - 242) > 6 || Math.abs(data[i + 2] - 240) > 6) {
            return false;
          }
        }
        return true;
      }

      function setImageScale(scale) {
        image.style.width = `${Math.round(image.naturalWidth * scale)}px`;
        image.style.height = `${Math.round(image.naturalHeight * scale)}px`;
      }

      // картинка вписывается в экран целиком (мелкие увеличиваются не больше чем вдвое)
      function fitImage() {
        if (!lightbox.open || isZoomed || !image.naturalWidth) {
          return;
        }
        const styles = window.getComputedStyle(stage);
        const width = stage.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
        const height = stage.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
        const scale = Math.min(2, width / image.naturalWidth, height / image.naturalHeight);
        setImageScale(scale);
        isZoomable = scale < 0.85;
        lightbox.classList.toggle("is-zoomable", isZoomable);
        lightbox.classList.remove("is-loading");
      }

      // полный размер; точка, по которой кликнули, остаётся под курсором
      function zoomIn(event) {
        const rect = image.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        isZoomed = true;
        lightbox.classList.add("is-zoomed");
        setImageScale(1);
        const stageRect = stage.getBoundingClientRect();
        stage.scrollLeft = image.offsetLeft + x * image.offsetWidth - (event.clientX - stageRect.left);
        stage.scrollTop = image.offsetTop + y * image.offsetHeight - (event.clientY - stageRect.top);
      }

      function zoomOut() {
        isZoomed = false;
        lightbox.classList.remove("is-zoomed");
        stage.scrollTo(0, 0);
        fitImage();
      }

      // листаются только картинки того же кейса, по кругу
      function caseSources() {
        const view = current.closest(".case-view");
        return sources.filter((source) => source.closest(".case-view") === view);
      }

      function show(source) {
        current = source;
        isZoomed = false;
        lightbox.classList.remove("is-zoomed", "is-zoomable");
        lightbox.classList.add("is-loading");
        image.src = source.currentSrc || source.src;
        image.alt = source.alt;
        // скругление как у превью
        image.style.borderRadius = window.getComputedStyle(source).borderRadius;
        navButtons.forEach((button) => {
          button.hidden = caseSources().length < 2;
        });
        stage.scrollTo(0, 0);
        backdropPixels = null;
        if (image.complete) {
          readBackdropPixels();
          fitImage();
        }
      }

      function step(delta) {
        const list = caseSources();
        show(list[(list.indexOf(current) + delta + list.length) % list.length]);
      }

      function open(source) {
        body.classList.add("lightbox-open");
        lightbox.showModal();
        show(source);
      }

      sources.forEach((source) => {
        const link = source.closest("a");
        if (!link) {
          source.tabIndex = 0;
          source.setAttribute("role", "button");
          source.setAttribute("aria-label", source.alt ? `${source.alt} — открыть крупнее` : "открыть изображение крупнее");
          // пробел срабатывает на отпускание, как у обычной кнопки: иначе отпускание
          // попадёт на стрелку просмотра, которая уже получила фокус, и сразу перелистнёт
          source.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              open(source);
            } else if (event.key === " ") {
              event.preventDefault();
            }
          });
          source.addEventListener("keyup", (event) => {
            if (event.key === " ") {
              open(source);
            }
          });
        }
        // у схем остаётся ссылка на файл — без скрипта она по-прежнему открывает его в новой вкладке
        (link || source).addEventListener("click", (event) => {
          event.preventDefault();
          open(source);
        });
      });

      image.addEventListener("load", () => {
        readBackdropPixels();
        fitImage();
      });
      window.addEventListener("resize", fitImage);

      lightbox.addEventListener("pointerdown", () => {
        dragged = false;
      });

      // перетаскивание мышью в полном размере; на телефоне картинку двигает обычная прокрутка
      stage.addEventListener("pointerdown", (event) => {
        if (!isZoomed || event.pointerType !== "mouse" || event.button !== 0) {
          return;
        }
        drag = { x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop };
      });

      window.addEventListener("pointermove", (event) => {
        if (!drag) {
          return;
        }
        const dx = event.clientX - drag.x;
        const dy = event.clientY - drag.y;
        if (!dragged && Math.abs(dx) + Math.abs(dy) < 5) {
          return;
        }
        dragged = true;
        lightbox.classList.add("is-dragging");
        stage.scrollLeft = drag.left - dx;
        stage.scrollTop = drag.top - dy;
      });

      window.addEventListener("pointerup", () => {
        drag = null;
        lightbox.classList.remove("is-dragging");
      });

      navButtons.forEach((button) => {
        button.addEventListener("click", () => step(Number(button.dataset.step)));
      });

      // в полном размере стрелки клавиатуры прокручивают картинку, а не листают
      lightbox.addEventListener("keydown", (event) => {
        if (isZoomed || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) {
          return;
        }
        event.preventDefault();
        step(event.key === "ArrowLeft" ? -1 : 1);
      });

      lightbox.addEventListener("click", (event) => {
        if (dragged) {
          dragged = false;
          return;
        }
        if (event.target.closest(".lightbox__nav")) {
          return;
        }
        if (event.target !== image || isSchemeBackdrop(event)) {
          lightbox.close();
        } else if (isZoomed) {
          zoomOut();
        } else if (isZoomable) {
          zoomIn(event);
        }
      });

      lightbox.addEventListener("close", () => {
        isZoomed = false;
        drag = null;
        lightbox.classList.remove("is-zoomed", "is-zoomable", "is-dragging");
        body.classList.remove("lightbox-open");
        image.removeAttribute("src");
      });

      window.addEventListener("hashchange", () => {
        if (lightbox.open) {
          lightbox.close();
        }
      });
    }

    function renderRoute() {
      const activeCase = caseViews.find((view) => view.dataset.caseRoute === window.location.hash);
      const isCase = Boolean(activeCase);
      homeView.hidden = isCase;
      footer.hidden = isCase;
      caseViews.forEach((view) => {
        const isActive = view === activeCase;
        view.hidden = !isActive;
        view.inert = !isActive;
      });
      body.classList.toggle("case-mode", isCase);

      if (isCase) {
        window.scrollTo(0, 0);
        requestParallax();
        return;
      }

      measureStack();
      const target = window.location.hash && document.querySelector(window.location.hash);
      if (target) {
        window.setTimeout(() => window.scrollTo(0, flowTop(target)), 0);
      } else {
        window.scrollTo(0, 0);
      }
      requestParallax();
    }

    // скачивание через blob: у blob-ссылки download работает всегда, поэтому клик по ней
    // не может увести текущую страницу на PDF (с обычной ссылкой так бывает на file:// и чужих доменах);
    // если файл не получить (например, сайт открыт как файл), скачивание просто пропускается
    function downloadFile(url) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.blob();
        })
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const download = document.createElement("a");
          download.href = blobUrl;
          download.download = decodeURIComponent(url.split("/").pop());
          download.hidden = true;
          body.appendChild(download);
          download.click();
          download.remove();
          window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        })
        .catch(() => {});
    }

    // резюме открывается в отдельном окне браузера, главная страница остаётся на месте;
    // если окно заблокировано, срабатывает обычный переход по ссылке в новую вкладку
    document.querySelectorAll("[data-resume]").forEach((link) => {
      link.addEventListener("click", (event) => {
        const width = Math.min(900, window.screen.availWidth - 40);
        const height = Math.min(1100, window.screen.availHeight - 40);
        const left = Math.round((window.screen.availWidth - width) / 2);
        const top = Math.round((window.screen.availHeight - height) / 2);
        const resumeWindow = window.open(link.href, "resume", `popup,width=${width},height=${height},left=${left},top=${top}`);
        if (resumeWindow) {
          event.preventDefault();
          resumeWindow.focus();
        }

        downloadFile(link.href);
      });
    });

    menuToggle.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    menu.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (link && link.getAttribute("href").startsWith("#")) {
        closeMenu();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
      }
    });
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches && turntableTimer) {
        window.clearInterval(turntableTimer);
        turntableImages.forEach((image) => {
          image.src = "img/front.webp";
        });
      }
    });
    window.addEventListener("hashchange", renderRoute);
    splitMega();
    setupReveal();
    setupStack();
    revealHero();
    setupParallax();
    setupSkillForms();
    setupTurntable();
    setupAutoplayVideos();
    setupFooterEdge();
    setupLightbox();

    // при загрузке и перезагрузке главная всегда открывается с первого блока:
    // якорь секции (#skills, #cases…) убирается из адреса, ссылки на кейсы остаются рабочими
    const isCaseHash = caseViews.some((view) => view.dataset.caseRoute === window.location.hash);
    if (window.location.hash && !isCaseHash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    renderRoute();
