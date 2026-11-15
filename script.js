/**
 * CHILAKA BABHITHA — PORTFOLIO JAVASCRIPT
 * Interactive Modals, Live Simulator Widget, Skills Filter, Contact Handling & Theme Switching
 */

const PROJECT_MODULES = [
  {
    title: '01 • Problem Statement & Core Objectives',
    badge: 'Educational Diagnostics',
    content: `
      <p style="margin-bottom: 12px; font-size: 0.95rem; line-height: 1.65; color: var(--text-muted);">
        Standard grading systems provide aggregate percentages (e.g. 75%), which obscures specific conceptual deficiencies. A student might excel at basic syntax but struggle fundamentally with recursive calls or async event handling.
      </p>
      <h4 style="font-family: var(--font-heading); font-size: 1.05rem; margin: 16px 0 8px; color: var(--text-main);">Primary Goals:</h4>
      <ul style="padding-left: 20px; font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
        <li><strong>Granular Concept Tracking:</strong> Map test questions directly to distinct sub-topics and Bloom's taxonomy cognitive levels.</li>
        <li><strong>Automated Gap Detection:</strong> Calculate quantitative comprehension scores per topic to flag blind spots immediately.</li>
        <li><strong>Targeted Remediation:</strong> Provide instantaneous, tailored practice tasks rather than generic re-study prompts.</li>
      </ul>
    `
  },
  {
    title: '02 • Technology Stack & System Architecture',
    badge: 'Backend Architecture',
    content: `
      <p style="margin-bottom: 12px; font-size: 0.95rem; line-height: 1.65; color: var(--text-muted);">
        Built with high-performance asynchronous Python services, modular clean code principles, and lightweight client-side dashboards.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 16px 0;">
        <div style="background: var(--bg-card-subtle); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <strong style="font-size: 0.85rem; color: var(--primary-teal); display: block; margin-bottom: 4px;">FASTAPI BACKEND</strong>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Asynchronous REST routes, auto-generated OpenAPI documentation, and dependency injection.</span>
        </div>
        <div style="background: var(--bg-card-subtle); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <strong style="font-size: 0.85rem; color: var(--primary-teal); display: block; margin-bottom: 4px;">PYDANTIC SCHEMAS</strong>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Strict runtime type enforcement for incoming assessment submissions and score outputs.</span>
        </div>
        <div style="background: var(--bg-card-subtle); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <strong style="font-size: 0.85rem; color: var(--primary-teal); display: block; margin-bottom: 4px;">PYTHON DATA ENGINE</strong>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Analytical scoring algorithm calculating weighted difficulty vs. question success rates.</span>
        </div>
      </div>
    `
  },
  {
    title: '03 • FastAPI REST Endpoints & Sample Schemas',
    badge: 'API Specification',
    content: `
      <p style="margin-bottom: 12px; font-size: 0.95rem; line-height: 1.65; color: var(--text-muted);">
        The backend exposes modular REST endpoints designed for fast JSON payloads and seamless frontend dashboard integration:
      </p>
      <div style="background: var(--bg-code); border-radius: 8px; padding: 14px; margin: 12px 0; overflow-x: auto;">
        <pre style="margin: 0; font-family: var(--font-mono); font-size: 0.78rem; color: #e2e8f0; line-height: 1.5;"><code><span style="color:#38bdf8">from</span> fastapi <span style="color:#38bdf8">import</span> FastAPI, HTTPException
<span style="color:#38bdf8">from</span> pydantic <span style="color:#38bdf8">import</span> BaseModel
<span style="color:#38bdf8">from</span> typing <span style="color:#38bdf8">import</span> List, Dict

app = FastAPI(title=<span style="color:#a7f3d0">"Student Gap Analyser API"</span>, version=<span style="color:#a7f3d0">"1.0.0"</span>)

<span style="color:#38bdf8">class</span> <span style="color:#fbbf24">AssessmentSubmission</span>(BaseModel):
    student_id: <span style="color:#38bdf8">str</span>
    subject: <span style="color:#38bdf8">str</span>
    responses: Dict[<span style="color:#38bdf8">str</span>, <span style="color:#38bdf8">int</span>] <span style="color:#64748b"># question_id -> selected_option</span>

<span style="color:#f472b6">@app.post</span>(<span style="color:#a7f3d0">"/api/v1/assessments/submit"</span>)
<span style="color:#38bdf8">async def</span> <span style="color:#60a5fa">submit_assessment</span>(payload: AssessmentSubmission):
    analysis = calculate_topic_gaps(payload.subject, payload.responses)
    <span style="color:#38bdf8">return</span> {<span style="color:#a7f3d0">"status"</span>: <span style="color:#a7f3d0">"success"</span>, <span style="color:#a7f3d0">"student_id"</span>: payload.student_id, <span style="color:#a7f3d0">"gap_report"</span>: analysis}</code></pre>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        Interactive Swagger UI docs are automatically available at <code>/docs</code> for rapid testing and endpoint verification.
      </p>
    `
  },
  {
    title: '04 • Diagnostic Metrics & Remedial Roadmaps',
    badge: 'Analytical Modeling',
    content: `
      <p style="margin-bottom: 12px; font-size: 0.95rem; line-height: 1.65; color: var(--text-muted);">
        The gap analysis engine categorizes student performance into three distinct actionable thresholds:
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px; margin: 12px 0;">
        <div style="padding: 10px 14px; border-radius: 6px; background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; font-size: 0.85rem;">
          <strong style="color: #10b981;">Mastery Zone (≥ 85%):</strong> Student demonstrates strong conceptual grasp; receives optional advanced enrichment challenges.
        </div>
        <div style="padding: 10px 14px; border-radius: 6px; background: rgba(217, 119, 6, 0.1); border-left: 3px solid #d97706; font-size: 0.85rem;">
          <strong style="color: #d97706;">Moderate Gap (60% - 84%):</strong> Minor execution or edge-case misunderstandings; assigned 3 to 5 targeted concept reviews.
        </div>
        <div style="padding: 10px 14px; border-radius: 6px; background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; font-size: 0.85rem;">
          <strong style="color: #ef4444;">Critical Gap (&lt; 60%):</strong> Fundamental breakdown in core theory; triggers step-by-step remedial walkthroughs and instructor notification.
        </div>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 10px;">
        Future roadmap: Integrating automated adaptive testing where subsequent questions adjust in difficulty based on real-time responses.
      </p>
    `
  }
];

const SIMULATOR_TOPICS = {
  python: {
    score: 82,
    statusText: 'Moderate Gap Detected',
    statusClass: 'status--warn',
    strongArea: 'Syntax, Loops & Basic Functions',
    gapArea: 'List Comprehensions & Recursive Calls',
    remedy: 'Solve 4 targeted recursion trace exercises and review call stack frames',
    endpoint: 'GET /api/v1/students/CB-2024/gap-analysis?subject=python'
  },
  fastapi: {
    score: 74,
    statusText: 'Moderate Gap Detected',
    statusClass: 'status--warn',
    strongArea: 'HTTP Methods & Route Decorators',
    gapArea: 'Pydantic Nested Models & Dependency Injection',
    remedy: 'Build a nested schema validator and implement a reusable get_db dependency',
    endpoint: 'GET /api/v1/students/CB-2024/gap-analysis?subject=fastapi'
  },
  java: {
    score: 89,
    statusText: 'Strong Mastery Achieved',
    statusClass: 'status--good',
    strongArea: 'OOP Principles, Classes & Inheritance',
    gapArea: 'Dynamic Method Dispatch & Custom Exceptions',
    remedy: 'Practice 3 polymorphism edge-case puzzles and write checked exception handlers',
    endpoint: 'GET /api/v1/students/CB-2024/gap-analysis?subject=java'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==========================================================================
     THEME TOGGLE (DARK / LIGHT)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('babhitha-theme');
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlRoot.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', next);
      localStorage.setItem('babhitha-theme', next);
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.hidden = isExpanded;
    });

    // Close when clicking nav link
    mobileNav.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  /* ==========================================================================
     MODALS LOGIC
     ========================================================================== */
  const projectModal = document.getElementById('projectModal');
  const resumeModal = document.getElementById('resumeModal');
  const modalTabDetail = document.getElementById('modalTabDetail');
  const modalTabs = document.querySelectorAll('.modal-tab');

  function setActiveProjectTab(index) {
    const mod = PROJECT_MODULES[index] || PROJECT_MODULES[0];
    modalTabs.forEach((tab, idx) => {
      tab.classList.toggle('is-active', idx === index);
    });
    if (modalTabDetail) {
      modalTabDetail.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--text-main); margin:0;">${mod.title}</h3>
          <span style="font-size:0.75rem; font-weight:700; background:var(--primary-teal-light); color:var(--primary-teal); padding:3px 8px; border-radius:4px;">${mod.badge}</span>
        </div>
        ${mod.content}
      `;
    }
  }

  function openModal(modal) {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    [projectModal, resumeModal].forEach((m) => {
      if (m) m.hidden = true;
    });
    document.body.style.overflow = '';
  }

  // Triggers for Project Modal
  document.querySelectorAll('[data-open-project]').forEach((el) => {
    el.addEventListener('click', () => {
      const idx = Number(el.getAttribute('data-open-project')) || 0;
      setActiveProjectTab(idx);
      openModal(projectModal);
    });
  });

  // Triggers for Resume Modal
  document.querySelectorAll('[data-open-resume]').forEach((el) => {
    el.addEventListener('click', () => {
      openModal(resumeModal);
    });
  });

  // Modal tab buttons
  modalTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = Number(tab.getAttribute('data-tab')) || 0;
      setActiveProjectTab(idx);
    });
  });

  // Close buttons
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', closeAllModals);
  });

  // Click outside modal window
  [projectModal, resumeModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAllModals();
      });
    }
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  /* ==========================================================================
     INTERACTIVE STUDENT GAP ANALYSER SIMULATOR
     ========================================================================== */
  const demoTopicSelector = document.getElementById('demoTopicSelector');
  const demoScoreVal = document.getElementById('demoScoreVal');
  const demoStatusTag = document.getElementById('demoStatusTag');
  const demoMeterFill = document.getElementById('demoMeterFill');
  const demoStrongArea = document.getElementById('demoStrongArea');
  const demoGapArea = document.getElementById('demoGapArea');
  const demoRemedy = document.getElementById('demoRemedy');
  const demoApiBadge = document.querySelector('.demo-api-badge code');

  if (demoTopicSelector) {
    const topicChips = demoTopicSelector.querySelectorAll('.demo-chip');

    topicChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const topicKey = chip.getAttribute('data-topic');
        const data = SIMULATOR_TOPICS[topicKey];
        if (!data) return;

        // Active chip state
        topicChips.forEach((c) => c.classList.remove('is-active'));
        chip.classList.add('is-active');

        // Animate meter and values
        if (demoMeterFill) demoMeterFill.style.width = `${data.score}%`;
        if (demoScoreVal) demoScoreVal.textContent = `${data.score}%`;
        if (demoStatusTag) demoStatusTag.textContent = data.statusText;
        if (demoStrongArea) demoStrongArea.textContent = data.strongArea;
        if (demoGapArea) demoGapArea.textContent = data.gapArea;
        if (demoRemedy) demoRemedy.textContent = data.remedy;
        if (demoApiBadge) demoApiBadge.textContent = data.endpoint;
      });
    });
  }

  /* ==========================================================================
     SKILLS CATEGORY FILTER
     ========================================================================== */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      filterTabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  /* ==========================================================================
     ONE-CLICK COPY EMAIL WITH TOAST
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotification = document.getElementById('toastNotification');
  const userEmail = 'chilakababhitha@gmail.com';

  function showToast(msg) {
    if (!toastNotification) return;
    toastNotification.textContent = msg;
    toastNotification.hidden = false;
    setTimeout(() => {
      toastNotification.hidden = true;
    }, 3200);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(userEmail);
        showToast(`Copied to clipboard: ${userEmail}`);
        copyEmailBtn.querySelector('span').textContent = 'Copied!';
      } catch (err) {
        // Fallback
        const temp = document.createElement('textarea');
        temp.value = userEmail;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(`Copied to clipboard: ${userEmail}`);
        copyEmailBtn.querySelector('span').textContent = 'Copied!';
      }

      setTimeout(() => {
        copyEmailBtn.querySelector('span').textContent = 'Copy';
      }, 2400);
    });
  }

  /* ==========================================================================
     INTERACTIVE CONTACT FORM
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('senderSubject');
      const messageInput = document.getElementById('senderMessage');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // Clear errors
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('messageError').textContent = '';

      let hasError = false;
      if (!nameVal) {
        document.getElementById('nameError').textContent = 'Please provide your name.';
        hasError = true;
      }
      if (!emailVal || !emailVal.includes('@')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        hasError = true;
      }
      if (!messageVal) {
        document.getElementById('messageError').textContent = 'Please enter your message.';
        hasError = true;
      }

      if (hasError) return;

      // Construct mailto url as direct fallback option
      const mailtoUrl = `mailto:${userEmail}?subject=${encodeURIComponent(
        subjectVal
      )}&body=${encodeURIComponent(`Hi Babhitha,\n\n${messageVal}\n\nFrom: ${nameVal} (${emailVal})`)}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.hidden = false;
        formFeedback.innerHTML = `
          <strong>Thank you, ${nameVal}!</strong> Your message has been prepared.<br />
          <a href="${mailtoUrl}" style="color:var(--primary-teal); font-weight:700; text-decoration:underline; display:inline-block; margin-top:6px;">
            Click here to send directly via your email client &rarr;
          </a>
        `;
      }

      showToast(`Message prepared for ${nameVal}!`);
      contactForm.reset();
    });
  }

  /* ==========================================================================
     SCROLL REVEAL ANIMATION
     ========================================================================== */
  const reveals = document.querySelectorAll('.reveal');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReduced) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.96) {
        el.classList.add('will-animate');
        observer.observe(el);
      }
    });
  }
});
