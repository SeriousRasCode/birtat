const ICONS = {
  vol: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',
  mic: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>',
  chk: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg>',
  pad: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>'
};

const STORAGE_KEY = 'db_signup_state_v1';
// BEGIN GENERATED TRANSLATIONS (run `node scripts/build-i18n.js` after editing JSON)
const TRANSLATIONS = {
  "am": {
    "title": "ብርታት ተደራሽ ምዝገባ",
    "keypadOn": "የቁጥር መደወያ፡ በርቷል",
    "keypadOff": "የቁጥር መደወያ (1-2-3)",
    "sunlight": "የፀሐይ ብርሃን ንፅፅር",
    "listen": "ያዳምጡ",
    "speak": "በድምፅ ይመልሱ",
    "listening": "በማዳመጥ ላይ... አሁን ይናገሩ",
    "back": "ተመለስ (*)",
    "next": "ቀጥል",
    "finish": "ምዝገባውን ጨርስ",
    "repeatHint": "ለመድገም # ይጫኑ፣ ለመመለስ * ይጫኑ",
    "offlineBanner": "በስልክዎ ላይ ተቀምጧል። ኢንተርኔት ሲገኝ ይላካል።",
    "stepProgress": "ጥያቄ {step} ከ {of}",
    "steps": {
      "lang": {
        "heading": "ቋንቋዎን ይምረጡ",
        "options": [
          "አማርኛ",
          "English"
        ]
      },
      "name": {
        "heading": "ሙሉ ስምዎ ማን ነው?",
        "label": "ሙሉ ስም",
        "error": "እባክዎ ስምዎን ያስገቡ ወይም በድምፅ ይናገሩ።",
        "voiceSaved": "የድምፅ ቅጂዎ እንደ ተጨማሪ ማረጋገጫ ተቀምጧል።"
      },
      "phone": {
        "heading": "ስልክ ቁጥርዎ ስንት ነው?",
        "label": "ስልክ ቁጥር (09..., 07..., ወይም +251...)",
        "error": "እባክዎ ትክክለኛ የኢትዮጵያ ስልክ ቁጥር ያስገቡ።"
      },
      "idRoute": {
        "heading": "ማንነትዎን እንዴት ማረጋገጥ ይፈልጋሉ?",
        "options": [
          "ብሔራዊ መታወቂያ (ፋይዳ)",
          "የስደተኞች መታወቂያ",
          "ሌላ ሰነድ",
          "ምንም ሰነድ የለኝም፣ በአጋር ድርጅት በኩል ይላኩኝ"
        ]
      },
      "support": {
        "heading": "በትምህርትዎ ምን አይነት ድጋፍ ይፈልጋሉ? (አማራጭ)",
        "note": "በስልክዎ ላይ በሚስጥር ይቀመጣል። ለቀጣሪዎች በፍፁም አይታይም።",
        "options": [
          "የጽሑፍ መግለጫ (Captions)",
          "የምልክት ቋንቋ (EthSL)",
          "የስክሪን አንባቢ ድጋፍ",
          "ትልቅ ጽሑፍ",
          "አስተርጓሚ",
          "ተጨማሪ ጊዜ",
          "መናገር አልፈልግም"
        ]
      }
    },
    "done": {
      "heading": "ምዝገባዎ በተሳካ ሁኔታ ተጠናቋል!",
      "referralMsg": "ጊዜያዊ የአጋር ድርጅት መለያ ቁጥር፡",
      "reset": "እንደገና ጀምር / አስተካክል"
    }
  },
  "en": {
    "title": "Birtat Accessible Sign-Up",
    "keypadOn": "Keypad Mode: ON",
    "keypadOff": "Keypad Mode (1-2-3)",
    "sunlight": "Sunlight Contrast",
    "listen": "Listen",
    "speak": "Speak Answer",
    "listening": "Listening... Speak now",
    "back": "Back (*)",
    "next": "Continue",
    "finish": "Complete Registration",
    "repeatHint": "Press # to repeat, * for back",
    "offlineBanner": "Saved on this phone. It will send when you are online.",
    "stepProgress": "Question {step} of {of}",
    "steps": {
      "lang": {
        "heading": "Choose your language",
        "options": [
          "Amharic (አማርኛ)",
          "English"
        ]
      },
      "name": {
        "heading": "What is your full name?",
        "label": "Full name",
        "error": "Please enter or speak your name.",
        "voiceSaved": "Voice recording attached as backup."
      },
      "phone": {
        "heading": "What is your phone number?",
        "label": "Phone number (09..., 07..., or +251...)",
        "error": "Please enter a valid Ethiopian phone number."
      },
      "idRoute": {
        "heading": "How would you like to verify your identity?",
        "options": [
          "National ID (Fayda)",
          "Refugee ID",
          "Other Document",
          "I have no document, refer me through a partner"
        ]
      },
      "support": {
        "heading": "What support helps you learn best? (Optional)",
        "note": "Saved privately on your device. Never shared with employers.",
        "options": [
          "Captions",
          "Sign language (EthSL)",
          "Screen reader support",
          "Large text",
          "Interpreter",
          "More time",
          "Prefer not to say"
        ]
      }
    },
    "done": {
      "heading": "Registration Complete!",
      "referralMsg": "Provisional Partner Referral Code:",
      "reset": "Start Over / Edit"
    }
  }
};
// END GENERATED TRANSLATIONS
const NUM_KEYS = '123456789'.split('').map(Number);


class DbSignup extends HTMLElement {
  static observedAttributes = ['lang', 'api'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.dict = {};
    this.state = this.loadState();
    this.keypadMode = false;
    this.sunlightMode = false;
    this.errorMsg = '';
    this.isRecording = false;
    this.onKeyDown = this.handleGlobalKey.bind(this);
  }

  loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.profile) {
        this.hasSavedState = true;
        if (Array.isArray(saved.support)) {
          saved.support = saved.support.map((item) => {
            const index = TRANSLATIONS.am.steps.support.options.indexOf(item);
            return index >= 0 ? TRANSLATIONS.en.steps.support.options[index] : item;
          });
        }
        return saved;
      }
    } catch (_) {}
    return {
      step: 0,
      completed: false,
      profile: { language: 'am', name: '', phone: '', idRoute: '', referralCode: '' },
      support: [],
      voiceNotes: []
    };
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }

  async connectedCallback() {
    const attrLang = this.getAttribute('lang');
    if (!this.hasSavedState && (attrLang === 'en' || attrLang === 'am')) {
      this.state.profile.language = attrLang;
    }
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('online', () => this.syncOfflineQueue());
    await this.loadTranslations(this.state.profile.language);
    this.render(true);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  async loadTranslations(lang) {
    this.dict = TRANSLATIONS[lang] || TRANSLATIONS.am;
  }

  vibrate(pattern) {
    if (navigator.vibrate) navigator.vibrate(pattern);
  }

  speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = this.state.profile.language === 'am' ? 'am-ET' : 'en-US';
    window.speechSynthesis.speak(utter);
  }

  normalizePhone(raw) {
    const clean = raw.replace(/[\s-]/g, '');
    if (/^0[79]\d{8}$/.test(clean)) return '+251' + clean.slice(1);
    if (/^\+251[79]\d{8}$/.test(clean)) return clean;
    return null;
  }

  handleGlobalKey(e) {
    if (!this.keypadMode || this.state.completed) return;
    const active = this.shadowRoot.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;

    if (e.key >= '1' && e.key <= '9') {
      e.preventDefault();
      this.pressKeypad(Number(e.key));
    } else if (e.key === '*') {
      e.preventDefault();
      this.prevStep();
    } else if (e.key === '#') {
      e.preventDefault();
      this.vibrate(40);
      this.readCurrentStep();
    }
  }

  pressKeypad(num) {
    const steps = ['lang', 'name', 'phone', 'idRoute', 'support'];
    const current = steps[this.state.step];
    const stepData = this.dict.steps[current];

    if (stepData && stepData.options && stepData.options[num - 1]) {
      this.vibrate(50);
      const choice = stepData.options[num - 1];
      if (current === 'lang') {
        const nextLang = num === 1 ? 'am' : 'en';
        const oldOptions = this.dict.steps.idRoute.options;
        const routeIndex = oldOptions.indexOf(this.state.profile.idRoute);
        if (routeIndex >= 0) {
          this.state.profile.idRoute = TRANSLATIONS[nextLang].steps.idRoute.options[routeIndex];
        }
        this.state.profile.language = nextLang;
        this.loadTranslations(nextLang).then(() => this.nextStep());
        return;
      }
      if (current === 'idRoute') {
        this.state.profile.idRoute = choice;
        this.nextStep();
        return;
      }
      if (current === 'support') {
        this.toggleSupport(choice);
        this.render(false);
        return;
      }
    } else if (num === 9 && current === 'support') {
      this.vibrate(50);
      this.nextStep();
    } else {
      this.vibrate([80, 60, 80]);
    }
  }

  toggleSupport(item) {
    const index = this.dict.steps.support.options.indexOf(item);
    if (index >= 0) item = TRANSLATIONS.en.steps.support.options[index];
    const idx = this.state.support.indexOf(item);
    if (idx > -1) this.state.support.splice(idx, 1);
    else this.state.support.push(item);
    this.saveState();
  }

  readCurrentStep() {
    const steps = ['lang', 'name', 'phone', 'idRoute', 'support'];
    const current = steps[this.state.step];
    const s = this.dict.steps[current];
    if (!s) return;
    let speech = s.heading + '. ';
    if (s.options) {
      speech += s.options.map((opt, i) => (i + 1) + ': ' + opt).join('. ');
      if (current === 'support') speech += '. 9: ' + this.dict.finish;
    }
    this.speak(speech);
  }

  startVoiceInput(field) {
    this.vibrate(40);
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      const rec = new SR();
      rec.lang = this.state.profile.language === 'am' ? 'am-ET' : 'en-US';
      this.isRecording = true;
      this.render(false);
      rec.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        this.state.profile[field] = transcript;
        this.isRecording = false;
        this.vibrate(50);
        this.saveState();
        this.render(false);
        this.speak(transcript);
      };
      rec.onerror = () => {
        this.isRecording = false;
        this.vibrate([80, 60, 80]);
        this.render(false);
      };
      rec.start();
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const recorder = new MediaRecorder(stream);
        const chunks = [];
        recorder.ondataavailable = (e) => chunks.push(e.data);
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm' });
          this.state.voiceNotes.push({ field, url: URL.createObjectURL(blob), ts: Date.now() });
          this.saveState();
          stream.getTracks().forEach((t) => t.stop());
        };
        recorder.start();
        setTimeout(() => { if (recorder.state === 'recording') recorder.stop(); }, 4000);
      }).catch(() => {});
    }
  }

  validateStep() {
    const steps = ['lang', 'name', 'phone', 'idRoute', 'support'];
    const current = steps[this.state.step];
    this.errorMsg = '';

    if (current === 'name' && !this.state.profile.name.trim()) {
      this.errorMsg = this.dict.steps.name.error;
      this.vibrate([80, 60, 80]);
      return false;
    }
    if (current === 'phone') {
      const norm = this.normalizePhone(this.state.profile.phone);
      if (!norm) {
        this.errorMsg = this.dict.steps.phone.error;
        this.vibrate([80, 60, 80]);
        return false;
      }
      this.state.profile.phone = norm;
    }
    return true;
  }

  nextStep() {
    if (!this.validateStep()) {
      this.render(false);
      const inp = this.shadowRoot.querySelector('input');
      if (inp) inp.focus();
      return;
    }

    if (this.state.step < 4) {
      this.state.step += 1;
      this.saveState();
      this.dispatchEvent(new CustomEvent('db-signup:step', {
        bubbles: true, composed: true, detail: { step: this.state.step + 1, of: 5 }
      }));
      this.render(true);
      if (this.keypadMode) this.readCurrentStep();
    } else {
      this.finishRegistration();
    }
  }

  prevStep() {
    if (this.state.step > 0) {
      this.vibrate(40);
      this.errorMsg = '';
      this.state.step -= 1;
      this.saveState();
      this.render(true);
      if (this.keypadMode) this.readCurrentStep();
    }
  }

  finishRegistration() {
    if (this.state.profile.idRoute === TRANSLATIONS.en.steps.idRoute.options[3] ||
        this.state.profile.idRoute === TRANSLATIONS.am.steps.idRoute.options[3]) {
      this.state.profile.referralCode = 'DB-' + Math.floor(1000 + Math.random() * 9000);
    }
    this.state.completed = true;
    this.saveState();
    this.vibrate([150, 80, 300]);

    this.dispatchEvent(new CustomEvent('db-signup:done', {
      bubbles: true,
      composed: true,
      detail: {
        profile: Object.assign({}, this.state.profile),
        voiceNotes: this.state.voiceNotes
      }
    }));
    this.dispatchEvent(new CustomEvent('db-signup:support', {
      bubbles: true,
      composed: true,
      detail: { support: this.state.support.slice() }
    }));

    this.syncOfflineQueue();
    this.render(true);
    this.speak(this.dict.done.heading);
  }

  async syncOfflineQueue() {
    const api = this.getAttribute('api');
    if (!api || !navigator.onLine || !this.state.completed) return;
    try {
      const res = await fetch(api + '/v1/learners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.profile)
      });
      if (res.ok) {
        const data = await res.json();
        await fetch(api + '/v1/learners/' + data.id + '/support', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ support: this.state.support })
        });
      }
    } catch (_) {}
  }

  render(focusHeading = false) {
    if (!this.dict.steps) return;
    const lang = this.state.profile.language;
    const steps = ['lang', 'name', 'phone', 'idRoute', 'support'];
    const current = steps[this.state.step];
    const progressText = this.dict.stepProgress
      .replace('{step}', this.state.step + 1)
      .replace('{of}', 5);

    const fg = this.sunlightMode ? '#FFD700' : 'var(--bs-body-color, #1a1a1a)';
    const bg = this.sunlightMode ? '#000000' : '#ffffff';
    const border = this.sunlightMode ? '3px solid #FFD700' : '1px solid #d0d7de';
    const pri = this.sunlightMode ? '#FFD700' : 'var(--bs-primary, #002b56)';
    const priText = this.sunlightMode ? '#000' : '#fff';

    const styleHtml = [
      '<style>',
      ':host { display: block; font-family: var(--bs-body-font-family, "Noto Sans Ethiopic", system-ui, sans-serif); color: ' + fg + '; background: ' + bg + '; border: ' + border + '; border-radius: 12px; padding: 1.25rem; max-width: 540px; margin: 1rem auto; line-height: ' + (lang === 'am' ? '1.7' : '1.5') + '; }',
      '.toolbar { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1rem; }',
      'button { display: inline-flex; align-items: center; justify-content: center; gap: .4rem; font: inherit; min-height: 48px; min-width: 48px; padding: .6rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; border: 2px solid ' + pri + '; background: ' + bg + '; color: ' + pri + '; }',
      'button.primary { background: ' + pri + '; color: ' + priText + '; }',
      ':focus-visible { outline: 3px solid #f5a300; outline-offset: 2px; }',
      'h2 { font-size: 1.35rem; margin: .5rem 0 1rem; }',
      '.progress { font-size: .95rem; font-weight: 600; opacity: .85; }',
      'label { display: block; font-weight: 600; margin-bottom: .5rem; }',
      'input { width: 100%; box-sizing: border-box; font: inherit; min-height: 48px; padding: .75rem; border-radius: 8px; border: 2px solid #555; margin-bottom: .75rem; background: ' + (this.sunlightMode ? '#111' : '#fff') + '; color: ' + (this.sunlightMode ? '#FFD700' : '#000') + '; }',
      '.option-btn { justify-content: flex-start; width: 100%; text-align: start; margin-bottom: .6rem; }',
      '.badge { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 6px; font-weight: 700; flex-shrink: 0; background: ' + pri + '; color: ' + priText + '; }',
      '.keypad { display: grid; grid-template-columns: repeat(3, 1fr); gap: .5rem; margin-top: 1rem; padding-top: 1rem; border-top: 2px dashed #888; }',
      '.keypad button { min-height: 58px; font-size: 1.35rem; }',
      '.error { color: ' + (this.sunlightMode ? '#ff6b6b' : '#b00020') + '; font-weight: 700; }',
      '.offline { background: #fff3cd; color: #5c4500; padding: .6rem; border-radius: 6px; margin-bottom: .75rem; }',
      '.nav { display: flex; justify-content: space-between; gap: .75rem; margin-top: 1.25rem; }',
      '.pass-box { padding: 1rem; border: 2px dashed currentColor; border-radius: 8px; margin: 1rem 0; font-size: 1.2rem; }',
      '</style>'
    ].join('\n');

    const offlineHtml = !navigator.onLine ? '<div class="offline" role="status">' + this.dict.offlineBanner + '</div>' : '';
    const listenBtn = !this.state.completed ? '<button type="button" id="btn-listen">' + ICONS.vol + ' ' + this.dict.listen + '</button>' : '';
    const mainHtml = this.state.completed ? this.renderDone() : this.renderStep(current, progressText);

    this.shadowRoot.innerHTML = styleHtml +
      '<div lang="' + lang + '">' + offlineHtml +
      '<div class="toolbar">' +
      '<button type="button" id="btn-keypad" class="' + (this.keypadMode ? 'primary' : '') + '" aria-pressed="' + this.keypadMode + '">' + ICONS.pad + ' ' + (this.keypadMode ? this.dict.keypadOn : this.dict.keypadOff) + '</button>' +
      '<button type="button" id="btn-sun" aria-pressed="' + this.sunlightMode + '">' + ICONS.sun + ' ' + this.dict.sunlight + '</button>' +
      listenBtn +
      '</div>' + mainHtml + '</div>';

    this.bindEvents(current);
    if (focusHeading) {
      const h2 = this.shadowRoot.querySelector('h2');
      if (h2) h2.focus();
    }
  }

  renderStep(current, progressText) {
    const s = this.dict.steps[current];
    let body = '';

    if (s.options) {
      body = s.options.map((opt, idx) => {
        const selected = current === 'support'
          ? this.state.support.includes(TRANSLATIONS.en.steps.support.options[idx])
          : (current === 'lang' ? (idx === 0 && this.state.profile.language === 'am') || (idx === 1 && this.state.profile.language === 'en') : this.state.profile.idRoute === opt);
        return '<button type="button" class="option-btn ' + (selected ? 'primary' : '') + '" data-idx="' + idx + '" aria-pressed="' + selected + '"><span class="badge">' + (idx + 1) + '</span><span>' + opt + '</span></button>';
      }).join('');
      if (s.note) body += '<p><small>' + s.note + '</small></p>';
    } else {
      const val = this.state.profile[current] || '';
      const type = current === 'phone' ? 'tel' : 'text';
      body = '<label for="field-' + current + '">' + s.label + '</label>' +
        '<input id="field-' + current + '" type="' + type + '" value="' + val + '" aria-describedby="err-msg" aria-invalid="' + Boolean(this.errorMsg) + '">' +
        '<button type="button" id="btn-speak">' + ICONS.mic + ' ' + (this.isRecording ? this.dict.listening : this.dict.speak) + '</button>' +
        (current === 'name' && this.state.voiceNotes.length ? '<p role="status">' + ICONS.chk + ' ' + s.voiceSaved + '</p>' : '');
    }

    const keypadHtml = this.keypadMode
      ? '<p><small>' + this.dict.repeatHint + '</small></p><div class="keypad" role="group" aria-label="Phone Keypad">' +
        NUM_KEYS.map((n) => '<button type="button" data-pad="' + n + '">' + n + '</button>').join('') +
        '<button type="button" id="pad-back">*</button><button type="button" data-pad="0">0</button><button type="button" id="pad-repeat">#</button></div>'
      : '';

    const backBtn = this.state.step > 0 ? '<button type="button" id="btn-back">' + this.dict.back + '</button>' : '<span></span>';
    const nextLabel = this.state.step === 4 ? this.dict.finish : this.dict.next;

    return '<div class="progress" aria-live="polite">' + progressText + '</div>' +
      '<h2 tabindex="-1">' + s.heading + '</h2>' +
      '<form id="step-form" novalidate>' + body +
      '<p id="err-msg" class="error" role="alert">' + this.errorMsg + '</p>' +
      keypadHtml +
      '<div class="nav">' + backBtn + '<button type="submit" class="primary">' + nextLabel + '</button></div>' +
      '</form>';
  }

  renderDone() {
    const p = this.state.profile;
    const passHtml = p.referralCode ? '<div class="pass-box">' + this.dict.done.referralMsg + ' <strong>' + p.referralCode + '</strong></div>' : '';
    return '<h2 tabindex="-1">' + ICONS.chk + ' ' + this.dict.done.heading + '</h2>' +
      '<p><strong>' + p.name + '</strong> (' + p.phone + ')</p>' +
      '<p>' + p.idRoute + '</p>' + passHtml +
      '<button type="button" id="btn-reset">' + this.dict.done.reset + '</button>';
  }

  bindEvents(current) {
    const sr = this.shadowRoot;
    const on = (sel, ev, fn) => { const el = sr.querySelector(sel); if (el) el.addEventListener(ev, fn); };

    on('#btn-keypad', 'click', () => {
      this.keypadMode = !this.keypadMode;
      this.vibrate(50);
      this.render(false);
      if (this.keypadMode) this.readCurrentStep();
    });
    on('#btn-sun', 'click', () => {
      this.sunlightMode = !this.sunlightMode;
      this.render(false);
    });
    on('#btn-listen', 'click', () => this.readCurrentStep());
    on('#btn-back', 'click', () => this.prevStep());
    on('#btn-speak', 'click', () => this.startVoiceInput(current));

    sr.querySelectorAll('.option-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.pressKeypad(Number(btn.dataset.idx) + 1));
    });
    sr.querySelectorAll('[data-pad]').forEach((btn) => {
      btn.addEventListener('click', () => this.pressKeypad(Number(btn.dataset.pad)));
    });
    on('#pad-back', 'click', () => this.prevStep());
    on('#pad-repeat', 'click', () => this.readCurrentStep());

    on('input', 'input', (e) => {
      this.state.profile[current] = e.target.value;
      this.saveState();
    });

    on('#step-form', 'submit', (e) => {
      e.preventDefault();
      this.vibrate(40);
      this.nextStep();
    });

    on('#btn-reset', 'click', () => {
      localStorage.removeItem(STORAGE_KEY);
      this.state = this.loadState();
      this.render(true);
    });
  }
}

customElements.define('db-signup', DbSignup);


