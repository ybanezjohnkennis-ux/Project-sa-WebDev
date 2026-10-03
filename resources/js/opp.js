const jobs = [
  { id: 'j1', cat: 'Admin & Virtual Assistants', title: 'Virtual Executive Assistant', company: 'Northstar', place: 'Remote', type: 'fulltime', salary: '₱28k–₱35k', match: 92, logo: 'N', tags: ['Calendar Management', 'Email', 'Admin'], desc: 'Support an executive team with scheduling, inbox management, research, meeting notes, and day-to-day coordination.', budget: '₱30k monthly retainer', support: 'Need help clarifying role expectations? WorkBridge support can guide you.' },
  { id: 'j2', cat: 'Admin & Virtual Assistants', title: 'Project Coordinator VA', company: 'BrightPath', place: 'Remote', type: 'parttime', salary: '₱20k–₱26k', match: 87, logo: 'B', tags: ['Notion', 'Docs', 'Coordination'], desc: 'Coordinate tasks, update project boards, prepare reports, and keep team deliverables organized.', budget: '₱450–₱600/hour', support: 'Support is available for application questions.' },
  { id: 'j3', cat: 'Customer Support', title: 'Customer Success Associate', company: 'Vertex Labs', place: 'Cebu / Remote', type: 'fulltime', salary: '₱28k–₱35k', match: 94, logo: 'V', tags: ['Customer Service', 'CRM', 'Communication'], desc: 'Support customers, resolve account issues, document feedback, and collaborate with product teams.', budget: '₱32k monthly', support: 'Ask support about customer support application requirements.' },
  { id: 'j4', cat: 'Customer Support', title: 'Live Chat Support Representative', company: 'Cloudline', place: 'Remote', type: 'parttime', salary: '₱22k–₱27k', match: 90, logo: 'C', tags: ['Live Chat', 'Zendesk', 'English'], desc: 'Respond to live customer questions, document cases, and maintain service quality across chat channels.', budget: '₱350–₱450/hour', support: 'Support can explain expected response metrics.' },
  { id: 'j5', cat: 'Web & Tech', title: 'Junior Web Developer', company: 'Northstar', place: 'Manila / Remote', type: 'fulltime', salary: '₱35k–₱45k', match: 91, logo: 'N', tags: ['HTML', 'CSS', 'JavaScript'], desc: 'Build and maintain responsive website features while collaborating with design and QA teams.', budget: '₱40k monthly', support: 'Support is available for portfolio and technical requirements.' },
  { id: 'j6', cat: 'Web & Tech', title: 'IT Support Specialist', company: 'BrightPath', place: 'Davao', type: 'fulltime', salary: '₱26k–₱34k', match: 85, logo: 'B', tags: ['Hardware', 'Networking', 'Tickets'], desc: 'Provide first-line technical support, troubleshoot devices and network issues, and document resolutions.', budget: '₱30k monthly', support: 'Support can clarify shift and escalation expectations.' },
  { id: 'j7', cat: 'Content & Social Media', title: 'Social Media Coordinator', company: 'Glow Studio', place: 'Remote', type: 'parttime', salary: '₱24k–₱30k', match: 88, logo: 'G', tags: ['Content', 'Canva', 'Analytics'], desc: 'Plan content calendars, publish social content, support campaigns, and report weekly engagement metrics.', budget: '₱500–₱700/hour', support: 'Support can help with portfolio submission.' },
  { id: 'j8', cat: 'Content & Social Media', title: 'Short-Form Content Writer', company: 'StoryHaus', place: 'Remote', type: 'parttime', salary: '₱20k–₱28k', match: 83, logo: 'S', tags: ['Copywriting', 'Reels', 'Research'], desc: 'Write concise social captions, video hooks, and scripts designed for audience engagement.', budget: '₱300–₱500 per approved piece', support: 'Ask support about sample-work requirements.' },
  { id: 'j9', cat: 'Bookkeeping & Finance', title: 'Junior Bookkeeper', company: 'LedgerWorks', place: 'Remote', type: 'fulltime', salary: '₱27k–₱35k', match: 86, logo: 'L', tags: ['QuickBooks', 'Reconciliation', 'Excel'], desc: 'Assist with transaction recording, reconciliations, reports, and monthly bookkeeping tasks.', budget: '₱32k monthly', support: 'Support can clarify software experience requirements.' },
  { id: 'j10', cat: 'Bookkeeping & Finance', title: 'Accounts Receivable Assistant', company: 'Terra Finance', place: 'Cebu', type: 'fulltime', salary: '₱29k–₱38k', match: 84, logo: 'T', tags: ['AR', 'Collections', 'Excel'], desc: 'Maintain receivable records, send invoices, follow up accounts, and support monthly close activities.', budget: '₱34k monthly', support: 'Support can explain the application checklist.' },
  { id: 'j11', cat: 'Creative & Design', title: 'Junior Graphic Designer', company: 'PixelForge', place: 'Remote', type: 'parttime', salary: '₱24k–₱32k', match: 89, logo: 'P', tags: ['Figma', 'Canva', 'Branding'], desc: 'Create digital graphics, social assets, and simple campaign visuals using an established brand system.', budget: '₱500–₱800/hour', support: 'Support can advise on portfolio expectations.' },
  { id: 'j12', cat: 'Creative & Design', title: 'UI Design Assistant', company: 'Studio North', place: 'Remote', type: 'internship', salary: '₱15k–₱20k', match: 82, logo: 'S', tags: ['Figma', 'UI', 'Prototyping'], desc: 'Support UI designers with component cleanup, mockups, prototypes, and design documentation.', budget: '₱18k monthly stipend', support: 'Support can clarify internship requirements.' },
  { id: 'j13', cat: 'AI & Automation', title: 'AI Workflow Assistant', company: 'FutureWorks', place: 'Remote', type: 'fulltime', salary: '₱35k–₱48k', match: 93, logo: 'F', tags: ['AI Tools', 'Prompts', 'Automation'], desc: 'Help teams streamline repetitive work using AI tools, templates, lightweight automations, and process documentation.', budget: '₱42k monthly', support: 'Support can answer questions about the practical AI assessment.' },
  { id: 'j14', cat: 'AI & Automation', title: 'No-Code Automation Specialist', company: 'AutomateHQ', place: 'Remote', type: 'parttime', salary: '₱30k–₱42k', match: 90, logo: 'A', tags: ['Zapier', 'Make', 'Workflows'], desc: 'Build no-code workflows, connect SaaS tools, monitor automations, and document processes for client teams.', budget: '₱650–₱900/hour', support: 'Support can explain the workflow challenge.' }
];

/* ---- Original browse/search (superseded further down) ---- */
let selectedCategory = 'All Categories', selectedFilter = 'all';

function renderJobs() {
  const q = $('#jobSearch').value.trim().toLowerCase();
  const filtered = jobs.filter(j =>
    (selectedCategory === 'All Categories' || j.cat === selectedCategory) &&
    (selectedFilter === 'all' || j.type === selectedFilter) &&
    (!q || [j.title, j.company, j.cat, j.place, j.tags.join(' ')].join(' ').toLowerCase().includes(q))
  );
  $('#jobGrid').innerHTML = filtered.length
    ? filtered.map(j => `<article class="job-card"><div class="company-line"><span class="company-logo ${j.logo === 'N' ? 'blue' : j.logo === 'V' ? 'purple' : j.logo === 'B' ? 'green' : (j.logo === 'G' || j.logo === 'P') ? 'orange' : 'red'}">${j.logo}</span><span class="match">${j.match}% match</span></div><h3>${j.title}</h3><p>${j.company} · ${j.place} · ${j.salary}</p><div class="job-tags">${j.tags.map(t => `<span>${t}</span>`).join('')}</div><button class="job-btn" data-job="${j.id}">View job post →</button></article>`).join('')
    : `<div class="no-results">No jobs match this category or search.</div>`;
  $$('.job-btn').forEach(b => b.addEventListener('click', () => openJob(b.dataset.job)));
}

let activeJob = null;

function openJob(id) {
  activeJob = jobs.find(j => j.id === id);
  if (!activeJob) return;
  $('#jobTitle').textContent = activeJob.title;
  $('#jobCopy').textContent = activeJob.desc;
  $('#jobMeta').innerHTML = `<div class="job-summary"><strong>${activeJob.company}</strong><p>${activeJob.cat} · ${activeJob.place} · ${activeJob.type} · ${activeJob.salary}</p><p style="margin-top:7px">Budget terms: ${activeJob.budget}</p></div>`;
  $('#starJobBtn').textContent = state.starred.includes(activeJob.id) ? '★ Starred' : '☆ Star';
  $('#jobModal').classList.remove('hidden');
}

$('#starJobBtn').addEventListener('click', () => {
  if (!activeJob) return;
  if (state.starred.includes(activeJob.id)) {
    state.starred = state.starred.filter(x => x !== activeJob.id);
    toast('Removed from starred.');
  } else {
    state.starred.push(activeJob.id);
    toast('Job starred.');
  }
  persist();
  $('#starJobBtn').textContent = state.starred.includes(activeJob.id) ? '★ Starred' : '☆ Star';
});

$('#applyBtn').addEventListener('click', () => {
  if (!state.user) {
    $('#jobModal').classList.add('hidden');
    openAccount('signup', 'worker');
    toast('Create a worker account to apply.');
    return;
  }
  if (!state.resume) {
    $('#jobModal').classList.add('hidden');
    show('profile');
    setTimeout(() => {
      $$('.profile-tab').forEach(x => x.classList.remove('active'));
      document.querySelector('[data-profile="resume"]').classList.add('active');
      $$('.profile-panel').forEach(x => x.classList.remove('active'));
      $('#panel-resume').classList.add('active');
    }, 50);
    toast('Please add your resume before applying.');
    return;
  }
  openApplication();
});

let appStep = 1;

function openApplication() {
  if (!activeJob) return;
  $('#applicationModal').classList.remove('hidden');
  appStep = 1;
  syncAppStep();
  $('#applicationTitle').textContent = 'Apply: ' + activeJob.title;
  $('#appJobName').textContent = activeJob.title;
  $('#appJobSummary').textContent = `${activeJob.company} · ${activeJob.place} · ${activeJob.type} · ${activeJob.salary}`;
  $('#reviewJob').textContent = activeJob.title;
  $('#reviewSummary').textContent = `${activeJob.company} · ${activeJob.cat} · ${activeJob.place}`;
  $('#appFullName').value = state.user?.name || '';
  $('#appEmail').value = state.user?.email || '';
  $('#reviewResume').textContent = state.resume?.name || 'No resume attached';
}

function syncAppStep() {
  $$('.modal-step').forEach(x => x.classList.add('hidden'));
  $('#appStep' + appStep).classList.remove('hidden');
  $$('.step').forEach(x => x.classList.toggle('active', Number(x.dataset.appStep) === appStep));
  $('#appPrevBtn').style.display = appStep === 1 ? 'none' : 'block';
  $('#appBackBtn').textContent = appStep === 1 ? 'Cancel' : 'Back';
  $('#appNextBtn').textContent = appStep === 4 ? 'Submit application' : 'Continue →';
}

$('#appNextBtn').addEventListener('click', () => {
  if (appStep < 4) {
    if (appStep === 2 && !$('#applicationForm').reportValidity()) return;
    if (appStep === 3 && !$('#applicationForm').reportValidity()) return;
    appStep++;
    syncAppStep();
  } else {
    submitApplication();
  }
});

$('#appPrevBtn').addEventListener('click', () => {
  if (appStep > 1) { appStep--; syncAppStep(); }
});

$('#appBackBtn').addEventListener('click', () => {
  if (appStep === 1) {
    $('#applicationModal').classList.add('hidden');
  } else {
    appStep--;
    syncAppStep();
  }
});

function submitApplication() {
  if (!$('#appAgree').checked) {
    toast('Please confirm the application details.');
    return;
  }
  const record = {
    id: 'a' + Date.now(),
    jobId: activeJob.id,
    title: activeJob.title,
    company: activeJob.company,
    cat: activeJob.cat,
    status: 'Pending Review',
    submitted: new Date().toLocaleDateString(),
    budget: $('#appBudget').value,
    availability: $('#appAvailability').value,
    resume: state.resume
  };
  state.applications.unshift(record);
  persist();
  $('#appStep4').classList.add('hidden');
  $('#appActions').style.display = 'none';
  $('#appSuccess').classList.remove('hidden');
  toast('Application submitted.');
  addMessage(activeJob.company, 'Application received', 'Thanks for applying. We will review your profile and follow up shortly.');
}

$('#appDoneBtn').addEventListener('click', () => {
  $('#applicationModal').classList.add('hidden');
  $('#appSuccess').classList.add('hidden');
  $('#appActions').style.display = 'flex';
  show('profile');
  document.querySelector('[data-profile="pending"]').click();
});

$('#supportBtn').addEventListener('click', () => {
  toast('WorkBridge support request opened.');
  show('messages');
  $('#applicationModal').classList.add('hidden');
  addMessage('WorkBridge Support', 'Application support', 'Hi! Tell us what part of the application you need help with.');
});

$('#openResumeFromApp').addEventListener('click', () => {
  show('profile');
  $('#applicationModal').classList.add('hidden');
  document.querySelector('[data-profile="resume"]').click();
});

/* =========================================
   CLIENT JOB POSTING FLOW
   ========================================= */
let postStep = 1;

function openJobPost() {
  if (!state.user) {
    openAccount('signup', 'client');
    toast('Sign in as a client to post a job.');
    return;
  }
  if (state.role !== 'client') {
    toast('Switch to a Client account to post a job.');
    return;
  }
  $('#jobPostModal').classList.remove('hidden');
  postStep = 1;
  updateJobPostStep();
  const p = state.profile || {};
  $('#postContactName').value = p.name || state.user?.name || '';
  $('#postContactEmail').value = state.user?.email || '';
}

function updateJobPostStep() {
  $$('#jobPostModal .post-step').forEach((el, i) => el.classList.toggle('hidden', i !== postStep - 1));
  $$('#jobPostSteps .step').forEach((el, i) => el.classList.toggle('active', i === postStep - 1));
  $('#postPrevBtn').style.visibility = postStep === 1 ? 'hidden' : 'visible';
  $('#postNextBtn').textContent = postStep === 4 ? 'Publish job →' : 'Continue →';
  if (postStep === 4) {
    $('#postReviewTitle').textContent = $('#postTitle').value || 'Job title';
    $('#postReviewSummary').textContent = `${$('#postCategory').value || 'Category'} · ${$('#postWorkSetup').value || 'Work setup'} · ${$('#postBudget').value || 'Budget'} · ${$('#postLength').value || 'Length'}`;
  }
}

function validatePostStep() {
  const current = $('#postStep' + postStep);
  if (postStep === 4) return $('#postAgree').checked;
  const required = [...current.querySelectorAll('input[required],select[required],textarea[required]')];
  let ok = true;
  required.forEach(x => { if (!x.value.trim()) { x.reportValidity(); ok = false; } });
  return ok;
}

$('#postJobBtn').addEventListener('click', openJobPost);
$('#clientMessagesBtn').addEventListener('click', () => show('messages'));

$('#postPrevBtn').addEventListener('click', () => {
  if (postStep > 1) { postStep--; updateJobPostStep(); }
});

$('#postNextBtn').addEventListener('click', () => {
  if (!validatePostStep()) {
    if (postStep === 4) toast('Please confirm the publishing checklist.');
    return;
  }
  if (postStep < 4) { postStep++; updateJobPostStep(); }
  else publishClientJob();
});

$('#postCancelBtn').addEventListener('click', () => $('#jobPostModal').classList.add('hidden'));

$('#postSupportBtn').addEventListener('click', () => {
  addMessage('WorkBridge Support', 'Platform support', 'I need help creating my client job post.');
  $('#jobPostModal').classList.add('hidden');
  show('messages');
  toast('Support conversation opened.');
});

$('#postDoneBtn').addEventListener('click', () => {
  $('#jobPostModal').classList.add('hidden');
  show('opportunities');
});

function publishClientJob() {
  const user = state.user || {};
  const newJob = {
    id: 'user' + Date.now(),
    cat: $('#postCategory').value,
    title: $('#postTitle').value.trim(),
    company: $('#postCompany').value.trim(),
    place: $('#postWorkSetup').value,
    type: 'client-post',
    salary: $('#postBudget').value.trim(),
    match: 100,
    logo: (($('#postCompany').value.trim() || 'C')[0] || 'C').toUpperCase(),
    tags: $('#postSkills').value.split(',').map(x => x.trim()).filter(Boolean),
    desc: $('#postDescription').value.trim(),
    budget: $('#postBudget').value.trim(),
    support: 'WorkBridge support is available for questions about this client job post.',
    owner: user.name || 'Client'
  };
  state.clientJobs = state.clientJobs || [];
  state.clientJobs.unshift(newJob);
  persist();
  $('#postActions').style.display = 'none';
  $('#postSuccess').classList.remove('hidden');
  // Re-render opportunities with client job included.
  renderJobs();
  addMessage(newJob.company, 'Job post published', 'Your job post is now live. You can review incoming applications from your client workspace.');
  toast('Job published successfully.');
}

/* Merge client-created posts with the seeded opportunity list. */
const __originalJobs = jobs.slice();
function getAllJobs() { return [...(state.clientJobs || []), ...__originalJobs]; }

/* This redefinition of renderJobs() overrides the version above. */
function renderJobs() {
  const all = getAllJobs();
  const category = window.activeCategory || 'All Categories';
  const type = window.activeType || 'all';
  const q = ($('#jobSearch')?.value || '').toLowerCase().trim();
  const list = all.filter(j => {
    const catOk = category === 'All Categories' || j.cat === category;
    const typeOk = type === 'all' || j.type === type || (type === 'remote' && j.place.toLowerCase().includes('remote'));
    const textOk = !q || `${j.title} ${j.company} ${j.cat} ${j.tags.join(' ')}`.toLowerCase().includes(q);
    return catOk && typeOk && textOk;
  });
  $('#jobGrid').innerHTML = list.map(j =>
    `<article class="job-card"><div class="job-top"><span class="company-logo">${j.logo}</span><span class="job-match">${j.match}% match</span></div><h3>${j.title}</h3><p>${j.company} · ${j.place} · ${j.salary}</p><div class="job-tags">${j.tags.map(t => `<span>${t}</span>`).join('')}</div><button class="job-view-btn" data-job-id="${j.id}">View role →</button></article>`
  ).join('') || '<div class="empty-state">No opportunities match your current filters.</div>';
  $$('.job-view-btn').forEach(b => b.addEventListener('click', () => openJobById(b.dataset.jobId)));
}

function openJobById(id) {
  const j = getAllJobs().find(x => x.id === id);
  if (!j) return;
  activeJob = j;
  $('#jobTitle').textContent = j.title;
  $('#jobCopy').textContent = j.desc;
  $('#jobMeta').innerHTML = `<div class="job-summary"><strong>${j.company}</strong><p>${j.cat} · ${j.place} · ${j.salary}</p><p style="margin-top:7px">Budget terms: ${j.budget}</p></div>`;
  $('#starJobBtn').textContent = state.starred.includes(j.id) ? '★ Starred' : '☆ Star';
  $('#jobModal').classList.remove('hidden');
}

/* Make the existing category/type/search controls use the complete list. */
$$('.category-btn[data-category]').forEach(b => b.addEventListener('click', () => {
  window.activeCategory = b.dataset.category;
  $$('.category-btn[data-category]').forEach(x => x.classList.toggle('active', x === b));
  renderJobs();
}));

$$('.filter[data-filter]').forEach(b => b.addEventListener('click', () => {
  window.activeType = b.dataset.filter;
  $$('.filter[data-filter]').forEach(x => x.classList.toggle('active', x === b));
  renderJobs();
}));

$('#jobSearch').addEventListener('input', () => renderJobs());

/* Ensure the current client-post buttons use the new job renderer. */
renderJobs();