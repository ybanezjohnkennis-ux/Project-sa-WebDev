function makeContactPhoto(initial, bg, skin, shirt) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><rect width='96' height='96' rx='48' fill='${bg}'/><circle cx='48' cy='37' r='18' fill='${skin}'/><path d='M21 91c2-24 14-35 27-35s25 11 27 35' fill='${shirt}'/><path d='M29 33c2-13 10-20 20-20 11 0 18 7 19 20-5-5-10-8-19-8-8 0-14 3-20 8z' fill='#1c1c1c'/><text x='48' y='82' text-anchor='middle' fill='white' font-size='9' font-family='Arial' font-weight='700'>${initial}</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const defaultContactPhotos = {
  'WorkBridge Support': makeContactPhoto('W', '#343434', '#d69b78', '#545454'),
  'Northstar': makeContactPhoto('N', '#2b406a', '#c58c6b', '#315e8e'),
  'Vertex Labs': makeContactPhoto('V', '#4f315c', '#e0af8b', '#4d7a6a')
};

state.messages = state.messages || [
  {
    id: 'workbridge',
    name: 'WorkBridge Support',
    sub: 'Platform support',
    unread: true,
    photo: defaultContactPhotos['WorkBridge Support'],
    chat: [
      { who: 'them', text: 'Welcome to WorkBridge! Need help with your profile, resume, or application?' },
      { who: 'me', text: 'I am checking the application process and my profile.' }
    ]
  },
  {
    id: 'northstar',
    name: 'Northstar',
    sub: 'Client · Junior Cybersecurity Analyst',
    unread: false,
    photo: defaultContactPhotos['Northstar'],
    chat: [
      { who: 'them', text: 'Hi! We are reviewing candidates for our junior analyst role.' }
    ]
  },
  {
    id: 'vertex',
    name: 'Vertex Labs',
    sub: 'Client · Cloud Support Intern',
    unread: false,
    photo: defaultContactPhotos['Vertex Labs'],
    chat: [
      { who: 'them', text: 'Thanks for your interest. Feel free to ask any questions about the internship.' }
    ]
  }
];

state.messages.forEach(c => {
  if (!c.photo && defaultContactPhotos[c.name]) c.photo = defaultContactPhotos[c.name];
});

function persistMessages() {
  localStorage.setItem('wb_messages', JSON.stringify(state.messages));
}

function addMessage(name, sub, text) {
  let c = state.messages.find(x => x.name === name);
  if (!c) {
    c = { id: 'm' + Date.now(), name, sub, unread: true, photo: '', chat: [] };
    state.messages.unshift(c);
  }
  c.chat.push({ who: 'them', text });
  c.unread = true;
  persistMessages();
  renderMessages();
  state.selectedChat = c.id;
}

function renderMessages() {
  if (!state.messages?.length) state.messages = [];
  $('#conversationList').innerHTML = state.messages.map(c =>
    `<button class="conversation ${state.selectedChat === c.id ? 'active' : ''} ${c.unread ? 'unread' : ''}" data-chat="${c.id}"><span class="conversation-avatar">${c.photo ? `<img src="${c.photo}" alt="${c.name}">` : initials(c.name)}</span><span class="conversation-copy"><strong>${c.name}</strong><p>${c.sub}</p></span></button>`
  ).join('');
  $$('.conversation').forEach(b => b.addEventListener('click', () => openChat(b.dataset.chat)));
  if (!state.selectedChat && state.messages[0]) state.selectedChat = state.messages[0].id;
  openChat(state.selectedChat);
}

function openChat(id) {
  const c = state.messages.find(x => x.id === id);
  if (!c) return;
  state.selectedChat = id;
  c.unread = false;
  persistMessages();
  $('#chatAvatar').innerHTML = c.photo ? `<img src="${c.photo}" alt="${c.name}">` : initials(c.name);
  $('#chatName').textContent = c.name;
  $('#chatSub').textContent = c.sub;
  const myPhoto = state.profile?.photo || '';
  const myName = state.profile?.name || state.user?.name || 'You';
  $('#chatMessages').innerHTML = c.chat.map(m => {
    const me = m.who === 'me';
    const av = me
      ? (myPhoto ? `<img src="${myPhoto}" alt="${myName}">` : initials(myName))
      : (c.photo ? `<img src="${c.photo}" alt="${c.name}">` : initials(c.name));
    return `<div class="bubble-wrap ${me ? 'me' : ''}"><span class="bubble-avatar">${av}</span><div class="bubble ${me ? 'me' : 'them'}">${m.text}</div></div>`;
  }).join('');
  $('#chatMessages').scrollTop = 99999;
  $$('.conversation').forEach(b => b.classList.toggle('active', b.dataset.chat === id));
}

$('#chatForm').addEventListener('submit', e => {
  e.preventDefault();
  const text = $('#chatInput').value.trim();
  if (!text) return;
  const c = state.messages.find(x => x.id === state.selectedChat);
  if (!c) return;
  c.chat.push({ who: 'me', text });
  persistMessages();
  $('#chatInput').value = '';
  openChat(c.id);
  setTimeout(() => {
    c.chat.push({ who: 'them', text: 'Thanks for your message. We will get back to you shortly.' });
    persistMessages();
    openChat(c.id);
  }, 500);
});