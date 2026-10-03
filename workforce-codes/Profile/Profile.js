function renderProfile() {
  const p = state.profile || {};

  $('#postJobBtn').style.display = (state.role === 'client' && state.user) ? 'block' : 'none';
  $('#clientMessagesBtn').style.display = (state.role === 'client' && state.user) ? 'block' : 'none';
  $('#panel-received').style.display = state.role === 'client' ? 'block' : 'none';
  $('#panel-posted').style.display = state.role === 'client' ? 'block' : 'none';

  const allPosted = state.clientJobs || [];
  $('#postedJobsList').innerHTML = allPosted.length
    ? allPosted.map(j => `<div class="myjob-row"><div class="job-left"><strong>${j.title}</strong><span>${j.cat} · ${j.place} · ${j.budget}</span></div><span class="status-chip status-approved">LIVE</span></div>`).join('')
    : `<div class="status-row"><span class="job-left"><strong>No jobs posted yet</strong><span>Use Post a Job to create your first opportunity for workers.</span></span><button class="mini-btn" onclick="openJobPost()">Post a job →</button></div>`;

  const received = (state.applications || []).filter(a => a.jobOwner && state.clientJobs?.some(j => j.id === a.jobId));
  $('#receivedList').innerHTML = received.length
    ? received.map(a => `<div class="myjob-row"><div class="job-left"><strong>${a.title}</strong><span>${a.applicant?.name || 'Worker'} · ${a.applicant?.email || ''}</span></div><span class="status-chip status-pending">REVIEW</span></div>`).join('')
    : `<div class="status-row"><span class="job-left"><strong>No worker applications yet</strong><span>Applications to your posted jobs will appear here.</span></span></div>`;

  if (state.user) {
    $('#profileAvatar').innerHTML = p.photo ? `<img src="${p.photo}" alt="Profile photo">` : initials(p.name || state.user.name);
    $('#profileName').textContent = p.name || state.user.name;
    $('#profileRole').textContent = state.role === 'client' ? 'Client · Hiring / Talent seeker' : 'Worker · Job seeker';
    $('#panel-myjobs h3').textContent = state.role === 'client' ? 'My Posted Jobs' : 'My Jobs';
    $('#panel-myjobs .panel-title span').textContent = state.role === 'client' ? 'Jobs you posted' : 'Applications and saved work';
    $('#profileSignIn').textContent = 'Log out';
  } else {
    $('#profileAvatar').textContent = 'W';
    $('#profileName').textContent = 'Guest User';
    $('#profileRole').textContent = 'Not signed in';
    $('#profileSignIn').textContent = 'Sign in / Create account';
  }

  const starredJobs = jobs.filter(j => state.starred.includes(j.id));
  const apps = state.applications;
  $('#myJobsCount').textContent = apps.length + ' items';
  $('#starredCount').textContent = starredJobs.length + ' items';

  $('#myJobsList').innerHTML = apps.length
    ? apps.map(a => `<div class="myjob-row"><div class="job-left"><strong>${a.title}</strong><span>${a.company} · ${a.submitted}</span></div><span class="status-chip ${a.status === 'Pending Review' ? 'status-pending' : a.status === 'Rejected' ? 'status-rejected' : 'status-approved'}">${a.status}</span></div>`).join('')
    : `<div class="status-row"><span class="job-left"><strong>No applications yet</strong><span>Browse opportunities and submit an application with your resume.</span></span><button class="mini-btn" onclick="show('opportunities')">Find jobs →</button></div>`;

  $('#starredList').innerHTML = starredJobs.length
    ? starredJobs.map(j => `<div class="myjob-row"><div class="job-left"><strong>${j.title}</strong><span>${j.company} · ${j.cat}</span></div><button class="mini-btn" data-open-star="${j.id}">View →</button></div>`).join('')
    : `<div class="status-row"><span class="job-left"><strong>No starred jobs</strong><span>Use ☆ Star on any job post to save it here.</span></span></div>`;

  const pending = apps.filter(a => a.status === 'Pending Review');
  $('#pendingList').innerHTML = pending.length
    ? pending.map(a => `<div class="myjob-row"><div class="job-left"><strong>${a.title}</strong><span>${a.company} · Submitted ${a.submitted}</span></div><span class="status-chip status-pending">Pending Review</span></div>`).join('')
    : `<div class="status-row"><span class="job-left"><strong>No pending applications</strong><span>Your submitted applications will appear here.</span></span></div>`;

  $('#rejectedList').innerHTML = state.rejected.length
    ? state.rejected.map(a => `<div class="myjob-row"><div class="job-left"><strong>${a.title}</strong><span>${a.company} · ${a.submitted || ''}</span></div><span class="status-chip status-rejected">Rejected</span></div>`).join('')
    : `<div class="status-row"><span class="job-left"><strong>No rejected applications</strong><span>Keep building skills and applying.</span></span></div>`;

  if (state.resume) {
    $('#resumeTitle').textContent = state.resume.name;
    $('#resumeMeta').textContent = `${state.resume.type || 'File'} · Updated ${state.resume.updated}`;
    $('#resumeCompleteness').textContent = p.skills
      ? '95% — profile and resume are ready for applications.'
      : '82% — add your skills and profile summary.';
    $('#downloadResumeBtn').style.display = 'inline-block';
    $('#removeResumeBtn').style.display = 'inline-block';
  } else {
    $('#resumeTitle').textContent = 'No resume uploaded';
    $('#resumeMeta').textContent = 'Upload your latest PDF, DOC, or DOCX resume so it can be attached automatically when you apply.';
    $('#resumeCompleteness').textContent = '60% — add your resume, skills, and profile details.';
    $('#downloadResumeBtn').style.display = 'none';
    $('#removeResumeBtn').style.display = 'none';
  }

  $$('[data-open-star]').forEach(b => b.addEventListener('click', () => openJob(b.dataset.openStar)));
}

$$('.profile-tab').forEach(b => b.addEventListener('click', () => {
  $$('.profile-tab').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  $$('.profile-panel').forEach(x => x.classList.remove('active'));
  $('#panel-' + b.dataset.profile).classList.add('active');
}));

function openProfileEditor() {
  const p = state.profile || {};
  $('#profileFullName').value = p.name || state.user?.name || '';
  $('#profileTitle').value = p.title || '';
  $('#profileLocation').value = p.location || '';
  $('#profileExperience').value = p.experience || '';
  $('#profileSkills').value = p.skills || '';
  $('#profileBio').value = p.bio || '';
  $('#profilePreviewAvatar').innerHTML = p.photo ? `<img src="${p.photo}" alt="Profile photo">` : initials(p.name || state.user?.name || 'Guest User');
  $('#profileModal').classList.remove('hidden');
}

$('#editProfileBtn').addEventListener('click', openProfileEditor);

$('#profilePhotoInput').addEventListener('change', e => {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!f.type.startsWith('image/')) { toast('Please choose an image file.'); return; }
  if (f.size > 3 * 1024 * 1024) { toast('Please choose an image smaller than 3 MB.'); return; }
  const r = new FileReader();
  r.onload = () => {
    window.__pendingPhoto = r.result;
    $('#profilePreviewAvatar').innerHTML = `<img src="${r.result}" alt="Profile photo preview">`;
  };
  r.readAsDataURL(f);
});

$('#profileForm').addEventListener('submit', e => {
  e.preventDefault();
  state.profile = {
    name: $('#profileFullName').value.trim() || 'WorkBridge User',
    title: $('#profileTitle').value.trim(),
    location: $('#profileLocation').value.trim(),
    experience: $('#profileExperience').value,
    skills: $('#profileSkills').value.trim(),
    bio: $('#profileBio').value.trim(),
    photo: window.__pendingPhoto || state.profile.photo || ''
  };
  if (!state.user) {
    state.role = state.role || 'worker';
    state.user = { name: state.profile.name, email: '', role: state.role };
  }
  state.user.name = state.profile.name;
  persist();
  updateHeader();
  renderProfile();
  renderMessages();
  $('#profileModal').classList.add('hidden');
  window.__pendingPhoto = null;
  toast('Profile updated.');
});

$('#profileSignIn').addEventListener('click', () => {
  if (state.user) {
    state.user = null;
    state.role = null;
    persist();
    updateHeader();
    renderProfile();
    toast('Signed out.');
  } else {
    openAccount('signin');
  }
});

$('#resumeBtn').addEventListener('click', () => $('#resumeFileInput').click());

$('#resumeFileInput').addEventListener('change', e => {
  const file = e.target.files?.[0];
  if (!file) return;
  if (!/\.(pdf|doc|docx)$/i.test(file.name)) { toast('Please upload a PDF, DOC, or DOCX file.'); return; }
  if (file.size > 4 * 1024 * 1024) { toast('Please upload a resume smaller than 4 MB for this browser-only demo.'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    state.resume = {
      name: file.name,
      type: file.type || 'Resume',
      size: file.size,
      data: reader.result,
      updated: new Date().toLocaleDateString()
    };
    persist();
    renderProfile();
    toast('Resume uploaded successfully.');
  };
  reader.readAsDataURL(file);
});

$('#editResumeBtn')?.addEventListener('click', () => $('#resumeFileInput').click());

$('#removeResumeBtn').addEventListener('click', () => {
  state.resume = null;
  persist();
  renderProfile();
  toast('Resume removed.');
});

$('#downloadResumeBtn').addEventListener('click', () => {
  if (!state.resume?.data) { toast('No resume file available.'); return; }
  const a = document.createElement('a');
  a.href = state.resume.data;
  a.download = state.resume.name || 'resume';
  document.body.appendChild(a);
  a.click();
  a.remove();
});