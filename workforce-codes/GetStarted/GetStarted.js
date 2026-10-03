$('#startBtn').addEventListener('click', () => openAccount('signup'));

$$('.role-card').forEach(b => b.addEventListener('click', () => openAccount('signup', b.dataset.role)));

$('#guestBtn').addEventListener('click', () => {
  localStorage.setItem('wb_guest', '1');
  state.user = null;
  state.role = null;
  persist();
  updateHeader();
  renderProfile();
  toast('Guest mode: browse freely, sign in when you are ready.');
  show('opportunities');
});

$$('[data-role-choice]').forEach(b => b.addEventListener('click', () => chooseRole(b.dataset.roleChoice)));

function chooseRole(role) {
  state.role = role;
  localStorage.setItem('wb_role', role);
  $('#roleChoices').style.display = 'none';
  $('#accountForm').classList.remove('hidden');
  $('#accountCopy').textContent = role === 'client'
    ? 'Client account: post jobs and manage skilled workers.'
    : 'Worker account: build your profile and find meaningful work.';
  $('#accountName').value = state.user?.name || '';
  $('#accountEmail').value = state.user?.email || '';
}