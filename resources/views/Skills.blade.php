<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SKILLS</title>
    <link rel="stylesheet"  href="{{ asset('css/skils.css') }}">
    <a href="{{ route('Skills') }}">Skills</a>
</head>
<body>

<section id="skills" class="screen skills-screen">

    <div class="screen-head">
        <p class="tiny-label">LEARN • PRACTICE • GROW</p>

        <h2>
            MASTER THE SKILLS THAT<br>
            <span>SHAPES YOUR FUTURE</span>
        </h2>

        <p>
            Select a career path to see the skills, modules,
            and opportunities connected to it.
        </p>
    </div>

    <div class="skills-layout">

        <div class="skill-grid">

            <button class="skill-card s-purple" data-skill="cybersecurity">
                <small>6.0 · Web Security</small>
                <b>Cybersecurity</b>
                <span>Protect systems, people, and data.</span>
            </button>

            <button class="skill-card s-blue" data-skill="cloud">
                <small>5.0 · Infrastructure</small>
                <b>Cloud<br>Engineer</b>
                <span>Build scalable cloud solutions.</span>
            </button>

            <button class="skill-card s-green" data-skill="software">
                <small>6.0 · Development</small>
                <b>Software<br>Engineer</b>
                <span>Turn ideas into reliable products.</span>
            </button>

            <button class="skill-card s-orange" data-skill="data">
                <small>4.0 · Analytics</small>
                <b>Data<br>Scientist</b>
                <span>Find insight in real-world data.</span>
            </button>

            <button class="skill-card s-red" data-skill="database">
                <small>3.0 · Systems</small>
                <b>Database<br>Administrator</b>
                <span>Keep information secure.</span>
            </button>

            <button class="skill-card s-lime" data-skill="mobile">
                <small>5.0 · Mobile</small>
                <b>Mobile App<br>Developer</b>
                <span>Create useful experiences.</span>
            </button>

            <button class="skill-card s-indigo" data-skill="it">
                <small>4.5 · Operations</small>
                <b>IT Manager</b>
                <span>Lead technology teams.</span>
            </button>

            <button class="skill-card s-gold" data-skill="devops">
                <small>4.5 · Delivery</small>
                <b>DevOps<br>Engineer</b>
                <span>Automate reliable delivery.</span>
            </button>

        </div>

        <aside class="skills-side">

            <div class="side-panel">
                <span class="tiny-label">YOUR PATH</span>

                <h3 id="pathName">
                    Choose a skill
                </h3>

                <p id="pathDescription">
                    Select any card to open its learning path.
                </p>

                <button class="small-dark-btn" id="lastPathBtn">
                    Open selected path →
                </button>
            </div>

            <div class="side-panel">
                <span class="tiny-label">CAREER READINESS</span>

                <div class="readiness">
                    <strong id="readiness">82%</strong>
                    <span>You're on a strong path.</span>
                </div>

                <div class="readiness-bar">
                    <i id="readinessBar"></i>
                </div>
            </div>

        </aside>

    </div>
</section>


<section id="detail" class="screen detail-screen">

    <div class="detail-top">
        <button class="back-link" id="backSkills">
            ← Back to skills
        </button>

        <span class="tiny-label" id="detailLabel">
            CAREER PATH
        </span>
    </div>

    <div class="detail-grid">

        <div>

            <h2 id="detailTitle">
                Cybersecurity
            </h2>

            <p id="detailCopy" class="detail-copy"></p>

            <div class="detail-actions">

                <button class="pill-btn pill-orange" id="enrollBtn">
                    Start learning →
                </button>

                <button class="pill-btn pill-dark" id="saveBtn">
                    Save path
                </button>

            </div>

            <div class="module-grid" id="moduleGrid"></div>

        </div>

        <aside class="detail-aside">

            <div class="score-panel">
                <span class="tiny-label">CAREER READINESS</span>

                <strong id="detailReadiness">82%</strong>

                <div class="score-bar">
                    <i id="detailReadinessBar"></i>
                </div>

                <small>
                    Based on your learning progress
                </small>
            </div>

            <div class="score-panel">
                <span class="tiny-label">EMPLOYER MATCHES</span>

                <strong id="detailMatches">12</strong>

                <small>
                    active opportunities connect to this path
                </small>

                <button class="small-dark-btn" id="matchesBtn">
                    View opportunities →
                </button>
            </div>

        </aside>

    </div>
</section>

</body>
</html>