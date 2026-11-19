export function initMobileSnake(launch, dialog) {
  if (!launch || typeof dialog?.showModal !== 'function') return;

  const board = dialog.querySelector('canvas');
  const ctx = board.getContext('2d');
  if (!ctx) return;

  const action = dialog.querySelector('.snake-mobile__action');
  const status = dialog.querySelector('.snake-mobile__status');
  const scoreValue = dialog.querySelector('[data-snake-score]');
  const bestValue = dialog.querySelector('[data-snake-best]');
  const arrows = [...dialog.querySelectorAll('[data-direction]')];
  const directions = { up: [0, -1], right: [1, 0], down: [0, 1], left: [-1, 0] };
  const mobile = matchMedia('(max-width: 800px), (pointer: coarse) and (hover: none)');
  const cols = 16, rows = 12, cell = board.width / cols;
  const guide = 'Смахивайте по полю или нажимайте стрелки';
  let snake, dir, pending, food, timer, gesture;
  let state = 'idle', score = 0, best = 0;

  function nextFood() {
    const free = [];
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      if (!snake.some(([sx, sy]) => sx === x && sy === y)) free.push([x, y]);
    }
    return free[Math.floor(Math.random() * free.length)];
  }

  function reset() {
    snake = [[5, 6], [4, 6], [3, 6]];
    dir = directions.right;
    pending = null;
    score = 0;
    food = nextFood();
    draw();
  }

  function draw() {
    ctx.fillStyle = '#d6e3ef';
    ctx.fillRect(0, 0, board.width, board.height);
    ctx.fillStyle = '#c8d5e0';
    for (let y = 0; y < rows; y++) {
      for (let x = (y + 1) % 2; x < cols; x += 2) ctx.fillRect(x * cell, y * cell, cell, cell);
    }
    snake.forEach(([x, y], index) => {
      ctx.fillStyle = index === 0 ? '#2b0f24' : '#a64e72';
      ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
    });
    if (food) {
      ctx.fillStyle = '#ad4b14';
      ctx.beginPath();
      ctx.arc((food[0] + .5) * cell, (food[1] + .5) * cell, cell * .32, 0, 2 * Math.PI);
      ctx.fill();
    }
    scoreValue.textContent = score;
    bestValue.textContent = best;
  }

  function setState(next, message = guide) {
    clearInterval(timer);
    timer = null;
    state = next;
    status.textContent = message;
    action.textContent = { idle: 'Начать игру', playing: 'Пауза', paused: 'Продолжить', over: 'Сыграть ещё раз' }[state];
    arrows.forEach(button => { button.disabled = state !== 'playing'; });
    if (state === 'playing') timer = setInterval(step, 260);
  }

  function step() {
    if (pending) dir = pending;
    pending = null;
    const x = snake[0][0] + dir[0], y = snake[0][1] + dir[1];
    const growing = food && x === food[0] && y === food[1];
    const occupied = growing ? snake : snake.slice(0, -1);
    if (x < 0 || x >= cols || y < 0 || y >= rows || occupied.some(([sx, sy]) => sx === x && sy === y)) {
      setState('over', 'Игра окончена. Счёт: ' + score);
      return;
    }
    snake.unshift([x, y]);
    if (growing) {
      best = Math.max(best, ++score);
      food = nextFood();
      if (!food) setState('over', 'Победа! Счёт: ' + score);
    } else snake.pop();
    draw();
  }

  function turn(direction) {
    if (state !== 'playing' || pending || !direction || direction === dir) return;
    const [x, y] = direction;
    if (x !== -dir[0] || y !== -dir[1]) pending = direction;
  }

  launch.addEventListener('click', () => {
    if (!mobile.matches || dialog.open) return;
    reset();
    setState('idle');
    dialog.showModal();
    document.documentElement.classList.add('snake-mobile-open');
  });
  dialog.addEventListener('close', () => {
    setState('idle');
    gesture = null;
    document.documentElement.classList.remove('snake-mobile-open');
  });
  action.addEventListener('click', () => {
    if (state === 'playing') setState('paused', 'Пауза');
    else {
      if (state !== 'paused') reset();
      setState('playing');
    }
  });

  arrows.forEach(button => button.addEventListener('click', () => turn(directions[button.dataset.direction])));
  dialog.addEventListener('keydown', event => {
    if (state !== 'playing' || !event.key.startsWith('Arrow')) return;
    const direction = directions[event.key.slice(5).toLowerCase()];
    if (!direction) return;
    event.preventDefault();
    turn(direction);
  });

  board.addEventListener('pointerdown', event => {
    if (state !== 'playing' || !event.isPrimary || event.button !== 0) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY };
    board.setPointerCapture(event.pointerId);
  });
  function swipe(event) {
    if (gesture?.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 14) return;
    gesture = null;
    turn(Math.abs(dx) > Math.abs(dy)
      ? directions[dx > 0 ? 'right' : 'left']
      : directions[dy > 0 ? 'down' : 'up']);
  }
  board.addEventListener('pointermove', swipe);
  board.addEventListener('pointerup', event => {
    swipe(event);
    if (gesture?.id === event.pointerId) gesture = null;
  });
  board.addEventListener('lostpointercapture', event => {
    if (gesture?.id === event.pointerId) gesture = null;
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state === 'playing') setState('paused', 'Пауза');
  });
  mobile.addEventListener('change', () => {
    if (!mobile.matches && dialog.open) dialog.close();
  });
  launch.hidden = false;
  launch.parentElement.classList.add('snake-mobile-ready');
}
