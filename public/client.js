let nickname = localStorage.getItem('nickname') || '';



// ── 닉네임 설정 ──────────────────────────────
function setNickname() {

  const input = document.getElementById('nickname');

  nickname = input.value.trim();

  if (!nickname) return;

  localStorage.setItem('nickname', nickname);


  input.disabled = true;

  document.getElementById('nickname-box').style.display =
  'none';
  
  document.getElementById('messages').style.display =
  'flex';
  
  document.querySelector('.input-area').style.display =
  'flex';

}

// ── 메시지 전송 ──────────────────────────────
function sendMessage() {

  const input = document.getElementById('input');

  const text = input.value.trim();

  if (!text) return;

  console.log(localStorage.getItem('currentRoom'));

  const roomId =
    localStorage.getItem('currentRoom');

  saveRoomMessage(
    roomId,
    text,
    nickname
  );

  addMessage(`${nickname}: ${text}`, 'sent', new Date().toLocaleTimeString('ko-KR'));

  input.value = '';

  input.focus();

}

// Enter 키 전송
document.getElementById('input').addEventListener('keydown', (e) => {

  if (e.key === 'Enter') {

    sendMessage();

  }

});

// ── 메시지 출력 ──────────────────────────────
function addMessage(text, type, time) {

  const messages = document.getElementById('messages');

  const div = document.createElement('div');

  div.className = `message ${type}`;

  div.innerHTML = `
    ${text}
    ${time ? `<small>${time}</small>` : ''}
  `;

  messages.appendChild(div);

  messages.scrollTop = messages.scrollHeight;

}

// ── 상태 변경 ────────────────────────────────
function setStatus(msg) {

  document.getElementById('status').textContent = msg;

}

// ── 입력창 활성화 ────────────────────────────
function setInputEnabled(enabled) {

  document.getElementById('input').disabled = !enabled;

  document.getElementById('send-btn').disabled = !enabled;

}