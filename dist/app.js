const icons = {
  flask:'<path d="M9 3h6m-5 0v6l-5.5 8.7A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.3L14 9V3M8 15h8"/><path d="M10 18h.01m4-5h.01"/>',
  home:'<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 21v-7h6v7"/>',
  book:'<path d="M12 6c-3-3-6-3-10-2v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-4-1-7-1-10 2zm0 0v15"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  chart:'<path d="M4 3v17h16M8 16v-3m5 3V9m5 7V5"/>',
  atom:'<ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  spark:'<path d="M12 2c0 6 4 10 10 10-6 0-10 4-10 10 0-6-4-10-10-10 6 0 10-4 10-10z"/>'
};
const icon = name => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[name]+'</svg>';
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));

const escapeText = value => String(value).replace(/[&<>"']/g, character => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
})[character]);
const lessonById = new Map(lessons.map(lesson => [lesson.id, lesson]));
const storageKey = 'hoa-hoc-cung-de-v1';
const state = {done:[], diagnostic:null, best:{}};
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (Array.isArray(saved?.done)) state.done = lessons.filter(l => saved.done.includes(l.id)).map(l => l.id);
  for (const lesson of lessons) {
    for (const [level, questions] of Object.entries(lesson.practiceByLevel)) {
      const score = saved?.best?.[lesson.id]?.[level];
      if (Number.isInteger(score) && score >= 0 && score <= questions.length) {
        (state.best[lesson.id] ??= {})[level] = score;
      }
    }
  }
  if (Array.isArray(saved?.diagnostic) && saved.diagnostic.length === 8 &&
      saved.diagnostic.every(choice => Number.isInteger(choice) && choice >= 0 && choice <= 2)) {
    state.diagnostic = saved.diagnostic;
  }
} catch {
  storageAvailable = false;
}
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { storageAvailable = false; }
}

const navItems = [
  ['home','home','Tổng quan'], ['roadmap','book','Lộ trình học'], ['semester','flask','Ôn học kỳ 1'],
  ['diagnostic','target','Kiểm tra đầu vào'], ['progress','chart','Tiến độ']
];
const diagnostic = [
  ['mol', ['10 g CaCO₃ (M = 100 g/mol) có bao nhiêu mol?', ['0,1 mol','1 mol','10 mol'], 0, 'n = m/M = 10/100 = 0,1 mol.']],
  ['mol', ['Cần hệ số nào ở trước HCl khi cân bằng Mg + HCl → MgCl₂ + H₂?', ['1','2','3'], 1, 'MgCl₂ có 2 Cl và H₂ có 2 H, nên cần 2 HCl.']],
  ['atom', ['Nguyên tử trung hòa Na có Z = 11. Số electron là bao nhiêu?', ['12','22','11'], 2, 'Nguyên tử trung hòa có 11 proton và 11 electron.']],
  ['bond', ['Loại liên kết đặc trưng trong tinh thể NaCl là gì?', ['Cộng hóa trị','Ion','Kim loại'], 1, 'Các ion Na⁺ và Cl⁻ hút nhau bằng lực tĩnh điện.']],
  ['redox', ['S có số oxi hóa bao nhiêu trong H₂SO₄?', ['+4','−2','+6'], 2, '2(+1) + x + 4(−2) = 0 nên x = +6.']],
  ['equilibrium', ['Ở cân bằng động, tốc độ thuận so với tốc độ nghịch thế nào?', ['Bằng nhau','Luôn lớn hơn','Cả hai bằng 0'], 0, 'Hai chiều vẫn diễn ra với tốc độ bằng nhau.']],
  ['ph', ['pH xấp xỉ của dung dịch HCl 0,01 M là bao nhiêu?', ['12','2','7'], 1, '[H₃O⁺] ≈ 10⁻² M nên pH ≈ 2.']],
  ['organic', ['Nhóm chức nào có trong CH₃COOH?', ['–CHO','–COO–','–COOH'], 2, '–COOH là nhóm carboxyl, đặc trưng của carboxylic acid.']]
];
const main = document.querySelector('main');
const byGrade = grade => lessons.filter(l => l.grade === Number(grade));
const completed = grade => byGrade(grade).filter(l => state.done.includes(l.id)).length;
const lessonLink = id => '#lesson/'+id;
const weakLessons = () => [...new Set(diagnostic.filter(([, q], i) => state.diagnostic[i] !== q[2]).map(([id]) => id))].map(id => lessons.find(l => l.id === id));
const meter = (value,max,label) => '<progress aria-label="'+label+'" value="'+value+'" max="'+max+'"></progress>';

function chrome(section) {
  document.querySelector('nav').innerHTML = navItems.map(([id, i, label], index) =>
    (index === 0 ? '<p class="nav-label">KHÔNG GIAN HỌC</p>' : '') +
    '<a href="#'+id+'"'+(section===id?' aria-current="page"':'')+'>'+icon(i)+label+'</a>').join('');
  document.querySelector('#breadcrumb').textContent = navItems.find(([id]) => id === section)[2];
  document.querySelector('#side-status').textContent = state.done.length+' bài hoàn thành';
  document.querySelector('#head-status').textContent = state.done.length+' / '+lessons.length+' bài hoàn thành';
}
function pageHeader(title,desc) {
  return '<header class="page-head"><h1>'+escapeText(title)+'</h1><p>'+escapeText(desc)+'</p></header>';
}
function gradeCards() {
  return '<div class="grade-grid">'+Object.entries(grades).map(([grade, g]) => {
    const gradeLessons = byGrade(grade);
    const total = gradeLessons.length;
    const questions = gradeLessons.reduce((sum, lesson) => sum + lesson.practiceCount,0);
    return '<a class="grade-card theme-'+grade+'" href="#roadmap/'+grade+'">'+
      '<div class="grade-top"><span class="tile-icon">'+icon(g.icon)+'</span><span class="tag">LỚP '+grade+'</span></div>'+
      '<h3>'+g.title+'</h3><p>'+g.desc+'</p>'+
      '<div class="grade-meta"><span>'+total+' bài học</span><span>'+questions+' câu trắc nghiệm</span></div>'+
      meter(completed(grade),total,completed(grade)+'/'+total+' bài hoàn thành lớp '+grade)+
      '<span class="grade-completed">'+completed(grade)+'/'+total+' bài hoàn thành</span></a>';
  }).join('')+'</div>';
}
function home() {
  const next = (state.diagnostic ? weakLessons().find(l => !state.done.includes(l.id)) : null) ||
    lessons.find(l => !state.done.includes(l.id));
  return '<section class="hero">'+
    '<div class="hero-copy"><div class="hero-label">'+icon('spark')+' HÓA HỌC 10–12</div>'+
    '<h1>Học Hóa cùng Dế<span>.</span></h1><p>Ôn lại phần còn vướng, theo kịp lớp 11 và tự tin bước vào Hóa 12.</p>'+
    '<div class="actions"><a class="button primary" href="#diagnostic">'+icon('target')+(state.diagnostic?'Xem kết quả đầu vào':'Kiểm tra đầu vào')+'</a>'+
    '<a class="button secondary" href="#roadmap">Xem lộ trình</a></div></div>'+
    '<div class="hero-art" aria-hidden="true"><div class="orb"></div><div class="orbit one"></div><div class="orbit two"></div><div class="orbit three"></div>'+
    '<div class="element carbon"><small>6</small><b>C</b><span>Carbon</span></div><div class="element oxygen"><small>8</small><b>O</b><span>Oxygen</span></div>'+
    '<div class="element sodium"><small>11</small><b>Na</b><span>Sodium</span></div><i class="star a">✦</i><i class="star b">✧</i><i class="star c">✦</i><i class="star d">✧</i></div></section>'+
    '<section class="next-card semester-entry"><span class="tile-icon">'+icon('flask')+'</span>'+
    '<div><h2>Ôn học kỳ 1 · Hóa 11</h2><p>Đại cương hữu cơ và hydrocarbon theo đề cương.</p></div>'+
    '<a class="button secondary" href="#semester">Mở phần ôn</a></section>'+
    '<section class="home-section"><div class="section-heading"><h2>Lộ trình học</h2><p>Chọn lớp hoặc chủ đề Dế muốn học hôm nay.</p></div>'+gradeCards()+'</section>'+
    '<section class="next-card"><span class="tile-icon">'+icon('book')+'</span><div><h2>'+(next?'Bài học gợi ý':'Dế đã hoàn thành lộ trình')+'</h2>'+
    '<p>'+(next?'Lớp '+next.grade+' · '+escapeText(next.title):'Xem lại các bài đã học trong mục Tiến độ.')+'</p></div>'+
    '<a class="button secondary" href="'+(next?lessonLink(next.id):'#progress')+'">'+(next?'Mở bài học':'Xem tiến độ')+'</a></section>';
}
function roadmap(grade) {
  const valid = grades[grade];
  return pageHeader('Lộ trình học','Ôn kiến thức trọng tâm qua ví dụ mẫu và bài luyện có giải thích.')+
    (valid ? '<div class="tabs" aria-label="Chọn lớp"><a href="#roadmap">Tất cả</a>'+
      Object.keys(grades).map(g => '<a href="#roadmap/'+g+'" '+(g===grade?'aria-current="page"':'')+'>Lớp '+g+'</a>').join('')+'</div>'+
      '<h2 class="list-title">'+valid.title+'</h2>'+
      (grade==='11'?'<a class="button secondary semester-roadmap" href="#semester">Ôn theo đề cương học kỳ 1</a>':'')+
      '<div class="lesson-list">'+byGrade(grade).map(l => lessonRow(l)).join('')+'</div>'
      : gradeCards());
}
function lessonRow(l) {
  const done = state.done.includes(l.id);
  return '<a class="lesson-row theme-'+l.grade+'" href="'+lessonLink(l.id)+'"><span class="tile-icon">'+icon(done?'check':'book')+
    '</span><div><h3>'+escapeText(l.title)+'</h3><p>'+escapeText(l.summary)+'</p></div><span class="row-meta">'+
    (done?'Đã hoàn thành':l.practiceCount+' câu trắc nghiệm')+'</span></a>';
}
function questionMarkup(question, index) {
  const [prompt,choices] = question;
  return '<fieldset><legend><span class="question-index">'+(index+1)+'.</span> '+escapeText(prompt)+'</legend>'+
    '<div class="choices">'+choices.map((choice,i) => '<label class="choice"><input type="radio" name="q'+index+'" value="'+i+
    '" required><span>'+escapeText(choice)+'</span></label>').join('')+'</div></fieldset>';
}
function quizForm(questions, buttonLabel, id = 'quiz') {
  return '<form id="'+id+'" class="quiz">'+questions.map(questionMarkup).join('')+
    '<button class="button primary" type="submit">'+buttonLabel+'</button></form>';
}
function readAnswers(form, questions) {
  const data = new FormData(form);
  return questions.map((_, i) => Number(data.get('q'+i)));
}
function review(questions, answers, resultId = 'result-heading') {
  const hits = questions.filter((q,i) => q[2] === answers[i]).length;
  const heading = resultId === 'result-heading' ? 'h2' : 'h3';
  return '<'+heading+' class="result-heading" id="'+resultId+'" tabindex="-1">Kết quả · '+hits+'/'+questions.length+' câu đúng</'+heading+'>'+
    '<div class="review-list">'+questions.map(([prompt, choices, correct, why], i) => {
      const hit = answers[i] === correct;
      return '<article class="review '+(hit?'right':'wrong')+'"><h4>'+(i+1)+'. '+escapeText(prompt)+
        '</h4><p><strong>'+(hit?'Đúng':'Cần ôn')+'</strong> · Dế chọn '+escapeText(choices[answers[i]])+
        (hit?'':'. Đáp án đúng là '+escapeText(choices[correct]))+'.</p><p>'+escapeText(why)+'</p></article>';
    }).join('')+'</div>';
}
function diagnosticPage() {
  const questions = diagnostic.map(([,q]) => q);
  const attempt = state.diagnostic;
  main.innerHTML = pageHeader('Kiểm tra đầu vào','8 câu ngắn để biết Dế nên ôn lại phần nào của Hóa 10–11.')+(attempt ?
    '<div class="study-column"><section class="panel recommendations"><h2>'+ (weakLessons().length?'Chủ đề nên ôn trước':'Dế đã trả lời đúng cả 8 câu')+
    '</h2>'+(weakLessons().length ? '<div class="lesson-list">'+weakLessons().map(lessonRow).join('')+'</div>' :
     '<p>Dế có thể tiếp tục với bài đang học ở lớp 11 hoặc thử các chủ đề lớp 12.</p><a class="button secondary" href="#roadmap">Xem lộ trình</a>')+
    '</section><section class="panel">'+review(questions,attempt)+'<button id="retry-diagnostic" class="button secondary" type="button">Làm lại bài kiểm tra</button></section></div>' :
    '<div class="study-column panel"><p>Hãy chọn một đáp án cho mỗi câu. Dế sẽ thấy lời giải và bài gợi ý sau khi nộp.</p>'+quizForm(questions,'Nộp bài kiểm tra')+'</div>');
  main.querySelector('#retry-diagnostic')?.addEventListener('click', () => {
    state.diagnostic = null;
    save();
    diagnosticPage();
    main.focus();
    window.scrollTo(0,0);
  });
  main.querySelector('#quiz')?.addEventListener('submit', event => {
    event.preventDefault();
    state.diagnostic = readAnswers(event.currentTarget, questions);
    save();
    diagnosticPage();
    main.querySelector('.recommendations h2').setAttribute('tabindex','-1');
    main.querySelector('.recommendations h2').focus();
  });
}
const prerequisites = {
  limiting:['mol'], concentration:['mol'], equilibrium:['concentration'],
  ph:['equilibrium','concentration'], titration:['ph','mol'], organic:['bond'],
  spectra:['organic'], separation:['concentration'], 'hydrocarbon-methods':['hydrocarbon','organic'],
  'halogen-derivatives':['hydrocarbon-methods'], alcohol:['organic'], 'alcohol-properties':['alcohol','bond'],
  carbonyl:['alcohol'], carboxylic:['ph','alcohol'],
  ester:['carboxylic','alcohol'], sugar:['organic'], amine:['organic','ph'],
  protein:['amine'], polymer:['hydrocarbon'], cell:['redox','mol'],
  'electrolysis-practice':['cell','mol'], metals:['redox'], 'metal-groups':['metals'],
  complex:['bond','redox']
};

function knowledgeMarkup(lesson) {
  return '<section class="panel"><h2>Kiến thức cần nhớ</h2>'+
    '<div class="key-points">'+lesson.theory.map(p => '<p>'+escapeText(p)+'</p>').join('')+'</div>'+
    '<div class="topic-list">'+lesson.sections.map(([title, copy]) =>
      '<div class="topic"><h3>'+escapeText(title)+'</h3><p>'+escapeText(copy)+'</p></div>').join('')+
    '</div>'+(lesson.id==='spectra'?spectrumExample():'')+'</section>';
}
function examplesMarkup(lesson) {
  return '<section class="panel"><h2 id="examples-heading" tabindex="-1">Ví dụ đã giải</h2>'+
    '<div class="example-list">'+lesson.examples.map(([prompt, solution], index) =>
      '<article class="example"><h3>Ví dụ '+(index+1)+'</h3><p>'+escapeText(prompt)+'</p>'+
      '<details><summary>Xem cách giải</summary><p>'+escapeText(solution)+'</p></details></article>').join('')+
    '</div></section>';
}
function writtenMarkup(lesson) {
  if (!lesson.written.length) return '';
  return '<section class="panel"><h2 id="written-heading" tabindex="-1">Bài tập tự luận</h2>'+
    '<p>Dế thử viết cách giải ra giấy rồi đối chiếu từng bước.</p><div class="example-list">'+
    lesson.written.map(([prompt, hint, steps], index) =>
      '<article class="example written"><h3>Bài '+(index+1)+'</h3><p>'+escapeText(prompt)+'</p>'+
      '<details><summary>Xem gợi ý</summary><p>'+escapeText(hint)+'</p></details>'+
      '<details><summary>Xem lời giải từng bước</summary><ol>'+steps.map(step => '<li>'+escapeText(step)+'</li>').join('')+
      '</ol></details></article>').join('')+'</div></section>';
}
function bestScore(lesson, level) {
  const score = state.best[lesson.id]?.[level];
  return score === undefined ? 'Chưa làm' : 'Điểm cao nhất '+score+'/'+lesson.practiceByLevel[level].length;
}
function lessonQuizMarkup(lesson) {
  const levels = Object.entries(practiceLevels);
  return '<section class="panel practice"><h2 id="practice-heading" tabindex="-1">Luyện trắc nghiệm</h2>'+
    '<p>Đúng tất cả câu Nhận biết để hoàn thành bài. Dế có thể luyện các mức theo thứ tự mình muốn.</p>'+
    '<div class="level-picker" role="group" aria-label="Mức độ luyện tập">'+levels.map(([level, info]) =>
      '<button class="level-button" type="button" data-level="'+level+'" aria-pressed="'+(level==='basic')+
      '" aria-controls="level-'+level+'"><strong>'+info.label+'</strong><span>'+
      lesson.practiceByLevel[level].length+' câu</span></button>').join('')+'</div>'+
    levels.map(([level, info]) => '<section class="level-body" id="level-'+level+'"'+(level==='basic'?'':' hidden')+
      ' aria-label="'+info.label+'"><div class="level-intro"><p>'+info.description+'</p><span class="best-score">'+bestScore(lesson,level)+
      '</span></div>'+quizForm(lesson.practiceByLevel[level],'Chấm bài','quiz-'+level)+
      '<div class="lesson-result" hidden></div></section>').join('')+'</section>';
}

function bindLessonQuiz(lesson) {
  const next = lessons[lessons.indexOf(lesson)+1];
  const picker = main.querySelector('.level-picker');
  const levelButtons = [...picker.querySelectorAll('button')];
  for (const button of levelButtons) {
    const level = button.dataset.level;
    const section = main.querySelector('#level-'+level);
    const quiz = section.querySelector('form');
    const result = section.querySelector('.lesson-result');
    const questions = lesson.practiceByLevel[level];
    button.addEventListener('click', () => {
      for (const choice of levelButtons) {
        const active = choice === button;
        choice.setAttribute('aria-pressed',active);
        main.querySelector('#level-'+choice.dataset.level).hidden = !active;
      }
    });
    quiz.addEventListener('submit', event => {
      event.preventDefault();
      const answers = readAnswers(quiz,questions);
      const score = questions.filter((q,i) => q[2] === answers[i]).length;
      const scores = state.best[lesson.id] ??= {};
      scores[level] = Math.max(score, scores[level] ?? 0);
      section.querySelector('.best-score').textContent = bestScore(lesson,level);

      const passed = score === questions.length;
      if (level === 'basic' && passed && !state.done.includes(lesson.id)) {
        state.done.push(lesson.id);
        chrome('roadmap');
        main.querySelector('.lesson-label').insertAdjacentHTML('beforeend','<span class="complete">'+icon('check')+' Đã hoàn thành</span>');
      }
      save();

      quiz.hidden = true;
      result.hidden = false;
      result.innerHTML = review(questions,answers,'result-'+level)+
        '<div class="actions"><button class="button secondary retry-level" type="button">Luyện lại mức này</button>'+
        (level === 'basic' && passed ? '<a class="button primary" href="'+(next?lessonLink(next.id):'#progress')+
        '">'+(next?'Bài tiếp theo':'Xem tiến độ')+'</a>':'')+'</div>';
      result.querySelector('.result-heading').focus();
      result.querySelector('.retry-level').addEventListener('click', () => {
        result.hidden = true;
        quiz.reset();
        quiz.hidden = false;
        quiz.querySelector('input').focus();
      });
    });
  }
}

function lessonPage(lesson) {
  const done = state.done.includes(lesson.id);
  const prereqs = prerequisites[lesson.id] || [];
  main.innerHTML = '<a class="back" href="#roadmap/'+lesson.grade+'">Tất cả bài Hóa '+lesson.grade+'</a>'+
    pageHeader(lesson.title,lesson.summary)+'<div class="study-column"><div class="lesson-tools">'+
    '<div class="lesson-label theme-'+lesson.grade+'"><span class="tag">LỚP '+lesson.grade+'</span>'+
    (done?'<span class="complete">'+icon('check')+' Đã hoàn thành</span>':'')+'</div>'+
    (prereqs.length?'<div class="prereqs"><strong>Ôn trước nếu cần</strong>'+prereqs.map(id =>
      '<a href="'+lessonLink(id)+'">'+escapeText(lessonById.get(id).title)+'</a>').join('')+'</div>':'')+
    '<div class="jump-links" role="group" aria-label="Đi đến phần trong bài">'+
    '<button type="button" class="button secondary" data-jump="examples-heading">Ví dụ đã giải</button>'+
    '<button type="button" class="button primary" data-jump="practice-heading">Luyện trắc nghiệm</button>'+
    (lesson.written.length?'<button type="button" class="button secondary" data-jump="written-heading">Bài tập tự luận</button>':'')+
    '</div></div>'+knowledgeMarkup(lesson)+examplesMarkup(lesson)+lessonQuizMarkup(lesson)+writtenMarkup(lesson)+'</div>';
  main.querySelectorAll('[data-jump]').forEach(button => button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.jump);
    target.focus({preventScroll:true});
    target.scrollIntoView({block:'start'});
  }));
  bindLessonQuiz(lesson);
}
function progressPage() {
  const done = lessons.filter(l => state.done.includes(l.id));
  return pageHeader('Tiến độ học tập', storageAvailable ? 'Tiến độ được lưu trên trình duyệt này.' : 'Trình duyệt không lưu được tiến độ. Dữ liệu hiện tại chỉ có trong phiên này.')+
    '<section class="panel overview"><span class="tile-icon">'+icon('chart')+'</span><div><h2>'+done.length+'/'+lessons.length+
    ' bài đã hoàn thành</h2>'+meter(done.length,lessons.length,'Tổng tiến độ')+'</div></section>'+
    gradeCards()+'<section class="home-section"><h2>Bài đã hoàn thành</h2>'+
    (done.length?'<div class="lesson-list">'+done.map(lessonRow).join('')+'</div>':
    '<div class="panel"><p>Dế chưa hoàn thành bài nào. Hãy chọn một bài và làm phần Nhận biết để bắt đầu.</p><a class="button secondary" href="#roadmap">Chọn bài học</a></div>')+'</section>';
}
function route(focus = false) {
  const [page, key] = (location.hash.slice(1) || 'home').split('/');
  if (page==='main') return;
  const lesson = page==='lesson' ? lessons.find(l => l.id===key) : null;
  const section = lesson ? 'roadmap' : navItems.some(([id]) => id===page) ? page : 'home';
  chrome(section);
  if (lesson) lessonPage(lesson);
  else if (section==='semester') {
    if (key==='practice') semesterPracticePage();
    else main.innerHTML = semesterHome();
  }
  else if (section==='diagnostic') diagnosticPage();
  else if (section==='roadmap') main.innerHTML = roadmap(Object.hasOwn(grades,key) ? key : '');
  else if (section==='progress') main.innerHTML = progressPage();
  else main.innerHTML = home();
  document.title = lesson ? lesson.title+' | Hóa học cùng Dế' : 'Hóa học cùng Dế';
  if (focus) main.focus({preventScroll:true});
  window.scrollTo(0,0);
}
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});
window.addEventListener('hashchange', () => route(true));
route();
