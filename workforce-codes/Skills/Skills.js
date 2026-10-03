const skillData = {
  cybersecurity: {
    label: 'CYBERSECURITY · CAREER PATH',
    title: 'Cybersecurity',
    readiness: 82,
    matches: 12,
    copy: 'Build practical skills in security foundations, network defense, incident response, and the tools employers use to protect systems and data.',
    mods: [
      ['01', 'Security Foundations', 'Threats, vulnerabilities, the CIA triad, and safe workplace practices.'],
      ['02', 'Network Security', 'Ports, protocols, firewalls, monitoring, and basic defensive thinking.'],
      ['03', 'Incident Response', 'Recognize, document, and respond to security incidents.'],
      ['04', 'Security Tools', 'Explore logs, endpoints, vulnerability checks, and security workflows.']
    ]
  },
  cloud: {
    label: 'CLOUD ENGINEERING · CAREER PATH',
    title: 'Cloud Engineer',
    readiness: 78,
    matches: 9,
    copy: 'Develop cloud fundamentals, infrastructure knowledge, networking skills, and reliable deployment habits.',
    mods: [
      ['01', 'Cloud Foundations', 'Compute, storage, networking, identity, and service models.'],
      ['02', 'Linux & Networking', 'Troubleshoot systems and understand how services connect.'],
      ['03', 'Cloud Platforms', 'Understand common cloud services and scalable architectures.'],
      ['04', 'Deployment Basics', 'Build repeatable and reliable deployment workflows.']
    ]
  },
  software: {
    label: 'SOFTWARE DEVELOPMENT · CAREER PATH',
    title: 'Software Engineer',
    readiness: 85,
    matches: 17,
    copy: 'Strengthen programming, problem-solving, version control, API, and testing skills used by development teams.',
    mods: [
      ['01', 'Programming', 'Logic, syntax, debugging, and clean coding habits.'],
      ['02', 'Version Control', 'Git workflows and collaborative development.'],
      ['03', 'APIs', 'Understand how applications communicate with other services.'],
      ['04', 'Testing', 'Practice habits that improve reliability and maintainability.']
    ]
  },
  data: {
    label: 'DATA & ANALYTICS · CAREER PATH',
    title: 'Data Scientist',
    readiness: 76,
    matches: 11,
    copy: 'Build analytical thinking and practical data skills for teams that use information to make decisions.',
    mods: [
      ['01', 'Data Foundations', 'Data types, quality, preparation, and responsible handling.'],
      ['02', 'Statistics', 'Useful concepts for interpreting patterns and uncertainty.'],
      ['03', 'Python for Data', 'Basic analysis and repeatable data workflows.'],
      ['04', 'Communication', 'Present findings clearly to technical and non-technical audiences.']
    ]
  },
  database: {
    label: 'DATABASE SYSTEMS · CAREER PATH',
    title: 'Database Administrator',
    readiness: 74,
    matches: 8,
    copy: 'Learn how databases are designed, secured, backed up, monitored, and maintained.',
    mods: [
      ['01', 'SQL Foundations', 'Query and manipulate structured data.'],
      ['02', 'Database Design', 'Tables, keys, relationships, and normalization basics.'],
      ['03', 'Backups', 'Recovery planning and data protection fundamentals.'],
      ['04', 'Monitoring', 'Recognize availability and performance issues.']
    ]
  },
  mobile: {
    label: 'MOBILE DEVELOPMENT · CAREER PATH',
    title: 'Mobile App Developer',
    readiness: 80,
    matches: 10,
    copy: 'Build mobile development foundations from interface design to APIs, application logic, and testing.',
    mods: [
      ['01', 'Mobile UI', 'Design clear and usable mobile experiences.'],
      ['02', 'App Logic', 'Build organized and reusable application logic.'],
      ['03', 'APIs', 'Connect mobile applications to online services.'],
      ['04', 'Testing', 'Validate behavior across devices and scenarios.']
    ]
  },
  it: {
    label: 'IT OPERATIONS · CAREER PATH',
    title: 'IT Manager',
    readiness: 83,
    matches: 14,
    copy: 'Develop technical operations and leadership habits needed to coordinate technology teams and services.',
    mods: [
      ['01', 'IT Operations', 'Understand support, service, and operations processes.'],
      ['02', 'Project Basics', 'Plan tasks, risks, deadlines, and priorities.'],
      ['03', 'Team Leadership', 'Support effective collaboration and communication.'],
      ['04', 'Service Delivery', 'Improve reliability and user experience.']
    ]
  },
  devops: {
    label: 'DEVOPS · CAREER PATH',
    title: 'DevOps Engineer',
    readiness: 81,
    matches: 13,
    copy: 'Connect development and operations through automation, delivery, monitoring, and reliable systems thinking.',
    mods: [
      ['01', 'Automation', 'Reduce repetitive work with repeatable processes.'],
      ['02', 'CI/CD', 'Understand continuous integration and continuous delivery.'],
      ['03', 'Containers', 'Learn portable application environments.'],
      ['04', 'Monitoring', 'Use feedback and telemetry to improve reliability.']
    ]
  }
};

function renderSkill(key) {
  const d = skillData[key] || skillData.cybersecurity;
  state.skill = key;
  persist();

  $('#pathName').textContent = d.title;
  $('#pathDescription').textContent = d.copy;
  $('#readiness').textContent = d.readiness + '%';
  $('#readinessBar').style.width = d.readiness + '%';

  $('#detailLabel').textContent = d.label;
  $('#detailTitle').textContent = d.title;
  $('#detailCopy').textContent = d.copy;
  $('#detailReadiness').textContent = d.readiness + '%';
  $('#detailReadinessBar').style.width = d.readiness + '%';
  $('#detailMatches').textContent = d.matches;

  $('#moduleGrid').innerHTML = d.mods.map(m =>
    `<div class="module-card"><small>${m[0]}</small><b>${m[1]}</b><p>${m[2]}</p></div>`
  ).join('');

  show('detail');
}

$$('.skill-card').forEach(b => b.addEventListener('click', () => renderSkill(b.dataset.skill)));

$('#lastPathBtn').addEventListener('click', () => renderSkill(state.skill));
$('#backSkills').addEventListener('click', () => show('skills'));

$('#enrollBtn').addEventListener('click', () => {
  localStorage.setItem('wb_enrolled_' + state.skill, '1');
  toast('Learning path started.');
});

$('#saveBtn').addEventListener('click', () => {
  localStorage.setItem('wb_saved_' + state.skill, '1');
  toast('Skill path saved.');
});

$('#matchesBtn').addEventListener('click', () => show('opportunities'));