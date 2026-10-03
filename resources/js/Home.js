
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let state = {
  role: localStorage.getItem('wb_role') || null,
  user: JSON.parse(localStorage.getItem('wb_user') || 'null'),
  skill: localStorage.getItem('wb_skill') || 'cybersecurity',
  starred: JSON.parse(localStorage.getItem('wb_starred') || '[]'),
  applications: JSON.parse(localStorage.getItem('wb_applications') || '[]'),
  rejected: JSON.parse(localStorage.getItem('wb_rejected') || '[]'),
  clientJobs: JSON.parse(localStorage.getItem('wb_clientJobs') || '[]'),
  resume: JSON.parse(localStorage.getItem('wb_resume') || 'null'),
  selectedChat: null,
  profile: JSON.parse(localStorage.getItem('wb_profile') || 'null')
};

state.profile = state.profile || {
  name: state.user?.name || '',
  title: '',
  location: '',
  experience: '',
  skills: '',
  bio: '',
  photo: ''
};

if (Array.isArray(state.resume)) {
  state.resume = null;
}

const persist = () => {
  localStorage.setItem('wb_role', state.role || '');
  if (state.user) localStorage.setItem('wb_user', JSON.stringify(state.user));
  else localStorage.removeItem('wb_user');
  localStorage.setItem('wb_skill', state.skill);
  localStorage.setItem('wb_starred', JSON.stringify(state.starred));
  localStorage.setItem('wb_applications', JSON.stringify(state.applications));
  localStorage.setItem('wb_rejected', JSON.stringify(state.rejected));
  if (state.resume) localStorage.setItem('wb_resume', JSON.stringify(state.resume));
  else localStorage.removeItem('wb_resume');
  localStorage.setItem('wb_profile', JSON.stringify(state.profile));
  localStorage.setItem('wb_clientJobs', JSON.stringify(state.clientJobs || []));
};

function toast(m) {
  const t = $('#toast');
  t.textContent = m;
  t.classList.add('show');
  clearTimeout(window.__t);
  window.__t = setTimeout(() => t.classList.remove('show'), 2200);
}

function show(id) {
  $$('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  $$('.nav-link').forEach(b => b.classList.toggle('active', b.dataset.go === id));
  if (id === 'profile') renderProfile();
  if (id === 'messages') renderMessages();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$$('[data-go]').forEach(b => b.addEventListener('click', () => {
  show(b.dataset.go);
  $('#mainNav').classList.remove('mobile-open');
}));

$('#menuBtn').addEventListener('click', () => $('#mainNav').classList.toggle('mobile-open'));

function initials(name = 'Guest User') {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join('').toUpperCase() || 'W';
}

function updateHeader() {
  if (state.user) {
    $('#loginBtn').textContent = 'My profile';
    $('#loginBtn').onclick = () => show('profile');
    $('#startBtn').textContent = 'Messages';
    $('#startBtn').onclick = () => show('messages');
  } else {
    $('#loginBtn').textContent = 'Sign in';
    $('#loginBtn').onclick = () => openAccount('signin');
    $('#startBtn').textContent = 'Get started';
    $('#startBtn').onclick = () => openAccount('signup');
  }
}
updateHeader();

/* Generic modal close wiring (used across all modals). */
$$('[data-close]').forEach(b => b.addEventListener('click', () => $('#' + b.dataset.close).classList.add('hidden')));

['accountModal', 'jobModal', 'applicationModal'].forEach(id =>
  $('#' + id).addEventListener('click', e => {
    if (e.target.id === id) e.currentTarget.classList.add('hidden');
  })
);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') $$('.modal').forEach(m => m.classList.add('hidden'));
});

/* ---- App bootstrap ----
   Requires renderSkill (Skills.js), renderProfile (Profile.js),
   and renderMessages (Messages.js) to already be defined. */
renderSkill(state.skill);
show('welcome');
renderProfile();
renderMessages();