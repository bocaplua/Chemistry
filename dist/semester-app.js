const semesterSessions = [
  ['Đọc công thức và phổ', 'Đếm nguyên tử từ công thức khung. Dùng phần trăm khối lượng và M⁺ để tìm công thức phân tử, rồi dùng IR để nhận nhóm chức.', ['organic','spectra']],
  ['Tách chất và tính độ tan', 'Phân biệt khối lượng chất tan, dung môi và dung dịch. Chọn phương pháp chiết, chưng cất hoặc sắc kí theo dữ kiện.', ['separation']],
  ['Đếm đồng phân và đọc phản ứng alkane', 'Xét các H tương đương khi thế, đếm đồng phân arene và dùng bảo toàn nguyên tử trong bài cracking.', ['hydrocarbon-methods']],
  ['Lần theo phản ứng alkene và alkyne', 'Xác định hướng cộng, điều kiện có đồng phân hình học và dấu hiệu nhận biết alkyne đầu mạch.', ['hydrocarbon','hydrocarbon-methods']],
  ['Tính nhiệt và hiệu suất', 'Phân biệt ΔH âm với trị số nhiệt tỏa ra. Đổi kJ sang MJ và nhân hiệu suất nếu quy trình có nhiều công đoạn.', ['energy','polymer']]
];

let semesterAttempt = null;

function spectrumExample() {
  const peaks = [
    [29,24,'Mảnh'], [43,100,'Đỉnh nền'], [71,42,'Mảnh'],
    [88,34,'Ion M⁺'], [89,2,'Đồng vị']
  ];
  return '<figure class="spectrum"><figcaption><strong>So sánh các đỉnh trên phổ MS minh họa</strong>'+
    '<span>Cường độ tương đối (%)</span></figcaption><ol class="spectrum-peaks">'+peaks.map(([mz,intensity,label]) =>
    '<li><div class="peak-track" style="--intensity:'+intensity+'%"><span></span><b>'+intensity+
    '</b></div><strong>'+mz+'</strong><small>'+label+'</small></li>').join('')+
    '</ol><p class="spectrum-axis">Giá trị m/z ở dưới từng cột</p><details><summary>Đọc khối lượng phân tử từ hình</summary>'+
    '<p>Đỉnh nền ở m/z = 43 vì cao nhất. Ion phân tử M⁺ của mẫu minh họa ở m/z = 88, nên M ≈ 88 g/mol. Đỉnh m/z = 89 là đỉnh đồng vị.</p>'+
    '</details><p class="spectrum-reference"><a href="https://goldbook.iupac.org/terms/view/M03988">Thuật ngữ ion phân tử của IUPAC</a> · '+
    '<a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C107926&amp;Index=0&amp;Type=IR-SPEC">Phổ IR của butanoic acid trên NIST</a></p></figure>';
}

function semesterLinks(ids) {
  return '<div class="semester-links">'+ids.map(id =>
    '<a href="'+lessonLink(id)+'">'+escapeText(lessonById.get(id).title)+'</a>').join('')+'</div>';
}
function semesterHome() {
  return pageHeader('Ôn học kỳ 1 · Hóa 11','Đại cương hữu cơ và hydrocarbon theo trọng tâm đề cương của Dế.')+
    '<div class="study-column"><section class="panel semester-intro"><div><h2>Bài luyện tổng hợp</h2>'+
    '<p>20 ý chấm tự động gồm chọn đáp án, đúng/sai và trả lời bằng số. Mỗi ý có lời giải và bài ôn liên quan.</p></div>'+
    '<a class="button primary" href="#semester/practice">'+(semesterAttempt?'Xem kết quả':'Mở bài luyện')+'</a></section>'+
    '<section class="panel"><h2>Lộ trình 5 buổi</h2><ol class="semester-plan">'+semesterSessions.map(([title,copy,ids]) =>
      '<li><h3>'+escapeText(title)+'</h3><p>'+escapeText(copy)+'</p>'+semesterLinks(ids)+'</li>').join('')+
    '</ol></section><section class="panel"><h2>Ôn theo hai phiếu bài tập</h2><p>'+
    'Luyện thêm dẫn xuất halogen và alcohol, gồm cách chọn phản ứng, độ tan, lên men và tính độ cồn.</p>'+
    semesterLinks(['halogen-derivatives','alcohol-properties'])+'</section></div>';
}

function semesterQuestions() {
  const {choices,statements,numbers} = semesterQuiz;
  return '<form id="semester-form" class="study-column">'+
    '<section class="panel"><h2>Chọn một đáp án</h2><div class="quiz">'+
    choices.map(([, ...question],i) => questionMarkup(question,i)).join('')+'</div></section>'+
    '<section class="panel"><h2>Đúng hoặc sai</h2><div class="quiz">'+statements.map(([,context,items],i) =>
      '<section class="statement-set"><h3>Nhóm '+(i+1)+'</h3><p>'+escapeText(context)+'</p>'+
      items.map(([prompt],j) => '<fieldset><legend>'+String.fromCharCode(97+j)+'. '+escapeText(prompt)+
        '</legend><div class="choices binary-choices">'+['Đúng','Sai'].map((option,k) =>
          '<label class="choice"><input type="radio" name="tf-'+i+'-'+j+'" value="'+k+
          '" required><span>'+option+'</span></label>').join('')+'</div></fieldset>').join('')+'</section>').join('')+'</div></section>'+
    '<section class="panel"><h2>Trả lời bằng số</h2><p>Dùng dấu phẩy hoặc dấu chấm cho phần thập phân. Nhập số theo đơn vị cho sẵn.</p>'+
    '<div class="quiz">'+numbers.map(([,prompt,,unit],i) => '<fieldset class="number-question"><legend><span class="question-index">'+
      (i+1)+'.</span> '+escapeText(prompt)+'</legend><label><span>Đáp án ('+escapeText(unit)+')</span>'+
      '<input type="text" inputmode="decimal" name="num-'+i+'" autocomplete="off" required></label></fieldset>').join('')+
    '</div></section><div class="actions"><button type="submit" class="button primary">Chấm bài tổng hợp</button></div></form>';
}

function parseSemesterNumber(text) {
  const decimal = text.trim().replace(/^−/,'-').replace(',','.');
  return /^[+-]?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(decimal) ? Number(decimal) : NaN;
}
function gradeSemester(form) {
  const {choices,statements,numbers} = semesterQuiz;
  const inputs = Array.from(form.querySelectorAll('.number-question input'));
  const invalid = inputs.find(input => !Number.isFinite(parseSemesterNumber(input.value)));
  if (invalid) {
    invalid.setCustomValidity('Dế nhập một số, ví dụ 12,5 hoặc −12,5.');
    invalid.reportValidity();
    return null;
  }
  const data = new FormData(form);
  return [
    ['Chọn đáp án', choices.map(([topic,prompt,options,key,why],i) => {
      const answer = Number(data.get('q'+i));
      return {topic,prompt,hit:answer===key,answer:options[answer],correct:options[key],why};
    })],
    ['Đúng hoặc sai', statements.flatMap(([topic,,items],i) =>
      items.map(([prompt,key,why],j) => {
        const answer = data.get('tf-'+i+'-'+j)==='0';
        return {topic,prompt,hit:answer===key,answer:answer?'Đúng':'Sai',correct:key?'Đúng':'Sai',why};
      }))],
    ['Trả lời bằng số', numbers.map(([topic,prompt,key,unit,correct,why],i) => {
      const raw = inputs[i].value.trim();
      return {topic,prompt,hit:parseSemesterNumber(raw)===key,answer:raw+' '+unit,correct,why};
    })]
  ];
}
function semesterReview(attempt) {
  const items = attempt.flatMap(([,group]) => group);
  const hits = items.filter(row => row.hit).length;
  const gaps = new Map();
  for (const row of items) {
    if (!row.hit) gaps.set(row.topic,(gaps.get(row.topic) || 0)+1);
  }
  const toReview = [...gaps].sort((a,b) => b[1]-a[1]).map(([topic]) => topic);
  return '<div class="study-column"><section class="panel"><h2 id="semester-result" tabindex="-1">Kết quả · '+hits+
    '/'+items.length+' ý đúng</h2><ul class="semester-scores">'+attempt.map(([title,group]) =>
    '<li>'+title+' <strong>'+group.filter(row => row.hit).length+'/'+group.length+'</strong></li>').join('')+
    '</ul>'+(toReview.length?'<h3>Ưu tiên ôn lại</h3>'+semesterLinks(toReview):
    '<p>Dế đã làm đúng cả ba phần. Có thể xem lại lời giải bên dưới.</p>')+
    '<button class="button secondary" id="semester-retry" type="button">Làm lại bài luyện</button></section>'+
    attempt.map(([title,group]) => '<section class="panel"><h2>'+title+'</h2><div class="review-list">'+
      group.map(({prompt,hit,answer,correct,why},index) =>
        '<article class="review '+(hit?'right':'wrong')+'"><h3>'+(index+1)+'. '+escapeText(prompt)+'</h3><p><strong>'+
        (hit?'Đúng':'Cần ôn')+'</strong> · Dế chọn '+escapeText(answer)+
        (hit?'':'. Đáp án: '+escapeText(correct))+'.</p><p>'+escapeText(why)+'</p></article>').join('')+
      '</div></section>').join('')+'</div>';
}
function semesterPracticePage() {
  main.innerHTML = '<a class="back" href="#semester">Về lộ trình học kỳ 1</a>'+
    pageHeader('Bài luyện tổng hợp học kỳ 1','Hóa 11 · Đại cương hữu cơ và hydrocarbon')+
    (semesterAttempt ? semesterReview(semesterAttempt) : semesterQuestions());
  const form = main.querySelector('#semester-form');
  if (form) {
    form.addEventListener('input',event => {event.target.setCustomValidity('');});
    form.addEventListener('submit',event => {
      event.preventDefault();
      const result = gradeSemester(form);
      if (!result) return;
      semesterAttempt = result;
      semesterPracticePage();
      main.querySelector('#semester-result').focus();
    });
  }
  main.querySelector('#semester-retry')?.addEventListener('click', () => {
    semesterAttempt = null;
    semesterPracticePage();
    main.focus();
    window.scrollTo(0,0);
  });
}
