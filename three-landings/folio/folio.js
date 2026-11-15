(() => {
  const root = document.documentElement;
  const $ = (s) => document.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  root.classList.add('js');
  if (!reduce) root.classList.add('motion');

  // лоадер
  const loader = $('#loader');
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    root.classList.add('ready');
    document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('visible'));
    if (loader) {
      loader.classList.add('out');
      setTimeout(() => loader.remove(), 1000);
    }
  };
  if (reduce || !loader) {
    if (loader) loader.remove();
    finished = true;
    root.classList.add('ready');
  } else {
    setTimeout(finish, 1900);
    loader.addEventListener('click', finish);
    addEventListener('keydown', finish, { once: true });
  }

  // появление блоков
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('visible'));
  }

  // полоса прогресса
  const bar = $('#progress');
  const onScroll = () => {
    const h = root.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // курсор и превью работ
  if (fine && !reduce) {
    root.classList.add('has-cursor');
    const cur = $('#cursor');
    const label = cur.querySelector('span');
    const peek = $('#peek');
    const peekImg = peek.querySelector('img');
    let mx = innerWidth / 2, my = innerHeight / 2;
    let cx = mx, cy = my, px = mx, py = my;

    addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.classList.add('on');
    }, { passive: true });
    document.addEventListener('mouseleave', () => cur.classList.remove('on'));

    document.addEventListener('mouseover', (e) => {
      const t = e.target.closest('[data-cursor],a,button');
      cur.classList.toggle('big', !!(t && t.dataset.cursor));
      cur.classList.toggle('link', !!t && !t.dataset.cursor);
      label.textContent = t && t.dataset.cursor ? t.dataset.cursor : '';
    });

    document.querySelectorAll('.row').forEach((row) => {
      row.addEventListener('mouseenter', () => {
        peekImg.src = row.dataset.img;
        peek.classList.add('on');
      });
      row.addEventListener('mouseleave', () => peek.classList.remove('on'));
    });

    const tick = () => {
      cx += (mx - cx) * 0.25;
      cy += (my - cy) * 0.25;
      const tilt = Math.max(-12, Math.min(12, (mx - px) * 0.05));
      px += (mx - px) * 0.12;
      py += (my - py) * 0.12;
      cur.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
      peek.style.transform = 'translate3d(' + px + 'px,' + py + 'px,0) rotate(' + tilt + 'deg)';
      requestAnimationFrame(tick);
    };
    tick();
  }

  // копирование почты
  const toast = $('#toast');
  let tt;
  const say = (text) => {
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove('show'), 2200);
  };
  $('#copy').addEventListener('click', async () => {
    const text = $('#mail').textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      say('Почта скопирована');
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); say('Почта скопирована'); } catch (e2) { say('Не получилось скопировать'); }
      ta.remove();
    }
  });

  // ссылки-заглушки не прыгают вверх
  document.querySelectorAll('[data-todo]').forEach((a) => {
    a.addEventListener('click', (e) => { e.preventDefault(); say('Добавь ссылку в index.html'); });
  });
})();
