function openAccount(mode = 'signin', role = null) {
  $('#accountModal').classList.remove('hidden');
  setAccountMode(mode);
  if (role) chooseRole(role);
}

function setAccountMode(mode) {
  window.accountMode = mode;
  $('#signInTab').classList.toggle('active', mode === 'signin');
  $('#signUpTab').classList.toggle('active', mode === 'signup');
  $('#accountTitle').textContent = mode === 'signin' ? 'Sign in' : 'Create your account';
  $('#accountCopy').textContent = 'Choose your account type to continue.';
  $('#accountForm').classList.add('hidden');
  $('#accountDone').classList.add('hidden');
  $('#roleChoices').style.display = 'grid';
  $('#accountName').required = mode === 'signup';
  $('#accountSubmit').textContent = mode === 'signin' ? 'Sign in →' : 'Create account →';
}

$('#signInTab').addEventListener('click', () => setAccountMode('signin'));
$('#signUpTab').addEventListener('click', () => setAccountMode('signup'));
$('#loginBtn').addEventListener('click', () => openAccount('signin'));

$('#accountForm').addEventListener('submit', e => {
  e.preventDefault();
  state.user = {
    name: $('#accountName').value.trim() || 'WorkBridge User',
    email: $('#accountEmail').value.trim(),
    role: state.role
  };
  state.profile = state.profile || { name: '', title: '', location: '', experience: '', skills: '', bio: '', photo: '' };
  state.profile.name = state.user.name;
  persist();
  $('#accountForm').classList.add('hidden');
  $('#accountDone').classList.remove('hidden');
  $('#accountDone').textContent = `Welcome, ${state.user.name}. Your ${state.role === 'client' ? 'Client' : 'Worker'} workspace is ready.`;
  updateHeader();
  toast(state.accountMode === 'signup' ? 'Account created.' : 'Signed in.');
});

$('#forgotBtn').addEventListener('click', () => toast('Password reset instructions would be sent to your email in the full production system.'));