(() => {
  "use strict";

  const I18N = {
    ru: {
      "meta.title": "VoiceAI — голосовой ввод без облака",
      "meta.description": "VoiceAI — локальный голосовой ввод для Windows, macOS и Linux. Говори в любое поле, текст распознаётся на твоём компьютере.",
      "a11y.skip": "Перейти к содержимому",
      "brand.tagline": "Голосовой ввод во все приложения",
      "nav.label": "Основная навигация",
      "nav.home": "Главная",
      "nav.features": "Возможности",
      "nav.models": "Модели",
      "nav.cli": "CLI",
      "nav.docs": "Документация",
      "nav.faq": "FAQ",
      "lang.label": "Язык сайта",
      "header.menu": "Меню",
      "hero.eyebrow": "OFFLINE · ЛОКАЛЬНО ПО УМОЛЧАНИЮ · OPEN SOURCE",
      "hero.title1": "Продиктуй",
      "hero.title2": "и готово",
      "hero.lead": "VoiceAI — голосовой ввод для Windows, macOS и Linux. Текст попадает в любое поле, а распознавание идёт на твоём компьютере.",
      "hero.ctaPrimary": "Скачать",
      "hero.ctaSecondary": "Документация",
      "hero.chip1": "Whisper large-v3-turbo",
      "hero.chip2": "Windows · macOS · Linux",
      "hero.chip3": "Без аккаунта и телеметрии",
      "hero.chip4": "CUDA на NVIDIA",
      "demo.label": "Демонстрация терминала VoiceAI",
      "demo.transcript": "Дай сверю changelog перед релизом, и потом...",
      "features.eyebrow": "Возможности",
      "features.title": "Всё, что нужно для диктовки",
      "features.lead": "Горячая клавиша, голос и готовый текст в активном поле. Без облачных запросов, аккаунтов и подписок.",
      "features.f1.title": "Полностью офлайн",
      "features.f1.text": "Распознавание идёт через whisper.cpp. Модель лежит на диске, в облако не уходит ни байта.",
      "features.f1.tag": "local-first",
      "features.f2.title": "Два режима записи",
      "features.f2.text": "Удерживай F9, чтобы говорить, или включи режим переключения и нажимай один раз. Клавиша меняется в .env.",
      "features.f2.tag": "hold / toggle",
      "features.f3.title": "Автовставка в любое поле",
      "features.f3.text": "Готовая расшифровка вставляется через Ctrl+V (Cmd+V на macOS) в окно, которое было активно.",
      "features.f3.tag": "Ctrl+V / Cmd+V",
      "features.f4.title": "GPU-ускорение",
      "features.f4.text": "CUDA на Windows с NVIDIA и автоматический откат на CPU. macOS и Linux работают на процессоре.",
      "features.f4.tag": "CUDA · CPU",
      "features.f5.title": "Чистка речи",
      "features.f5.text": "Слова-паразиты и замена фраз на лету: например, произнесённые знаки превращаются в символы.",
      "features.f5.tag": "правила в .env",
      "features.f6.title": "История и трей",
      "features.f6.text": "Последние 2000 расшифровок хранятся локально в history.jsonl. На Windows есть иконка в трее.",
      "features.f6.tag": "history.jsonl",
      "how.eyebrow": "Как это работает",
      "how.title": "Три шага до текста",
      "how.lead": "От голоса до готового текста в активном поле — пара секунд.",
      "how.s1.title": "Нажми F9",
      "how.s1.text": "В любом приложении и любом поле. Удерживай клавишу или включи режим переключения.",
      "how.s2.title": "Продиктуй",
      "how.s2.text": "Звук берётся с выбранного микрофона и нормализуется для распознавания.",
      "how.s3.title": "Текст на месте",
      "how.s3.text": "Готовая расшифровка вставляется автоматически — или копируется в буфер как запасной вариант.",
      "models.eyebrow": "Модели",
      "models.title": "Модель живёт на твоём диске",
      "models.lead": "Распознавание идёт через whisper.cpp. Модель по умолчанию скачивается один раз и переиспользуется.",
      "models.m1.badge": "по умолчанию",
      "models.m1.desc": "Баланс качества и скорости. Рекомендуемая точка старта для большинства машин.",
      "models.m2.badge": "скоро",
      "models.m2.desc": "Максимальное качество для сложного аудио. Появится в каталоге моделей.",
      "models.m3.badge": "скоро",
      "models.m3.desc": "Лёгкая модель для старого железа и мгновенных черновиков.",
      "models.note": "При первом запуске модель скачивается с Hugging Face и кэшируется в папке models/.",
      "specs.size": "Размер",
      "specs.sizeValue": "~1.6 ГБ",
      "specs.speed": "Скорость",
      "specs.speedValue": "быстро",
      "specs.slow": "медленнее",
      "specs.fastValue": "быстрее",
      "specs.languages": "Языки",
      "specs.languagesValue": "мультиязычная",
      "specs.backend": "Бэкенд",
      "cli.eyebrow": "CLI",
      "cli.title": "Собирается из исходников",
      "cli.lead": "Проект написан на Rust. Клонируй, выбери бэкенд и запускай.",
      "cli.b1": "Rust-тулчейн (edition 2021)",
      "cli.b2": "CUDA Toolkit для GPU-сборки на Windows",
      "cli.b3": "Настройки в .env: клавиши, микрофон, режимы",
      "cli.b4": "package.ps1 собирает переносимую сборку для Windows",
      "cli.link": "Открыть руководство по установке",
      "cli.terminalTitle": "voiceai — shell",
      "cli.copy": "Копировать",
      "cli.copied": "Скопировано",
      "cli.c1": "# 1. клонируем репозиторий",
      "cli.c2": "# 2. запуск с CUDA (Windows + NVIDIA)",
      "cli.c3": "# 3. без GPU — CPU-сборка",
      "docs.eyebrow": "Документация",
      "docs.title": "Коротко о главном",
      "docs.lead": "Гайды по установке, настройке и сборке. Полная документация — на подходе.",
      "docs.d1.meta": "гайд",
      "docs.d1.title": "Установка",
      "docs.d1.text": "Rust, системные зависимости и первый запуск.",
      "docs.d2.meta": "справочник",
      "docs.d2.title": "Настройка",
      "docs.d2.text": ".env, горячие клавиши, микрофон и режимы.",
      "docs.d3.meta": "гайд",
      "docs.d3.title": "Сборка",
      "docs.d3.text": "CUDA, CPU и переносимая сборка для Windows.",
      "docs.d4.meta": "быстро",
      "docs.d4.title": "FAQ",
      "docs.d4.text": "Ответы на самые частые вопросы.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Частые вопросы",
      "faq.lead": "Короткие ответы перед установкой.",
      "faq.q1": "Нужен ли интернет?",
      "faq.a1": "Только чтобы скачать модель при первом запуске (~1.6 ГБ). Дальше распознавание работает полностью офлайн.",
      "faq.q2": "Где хранится история?",
      "faq.a2": "Локально в history.jsonl рядом с приложением, не больше 2000 записей. Никуда не отправляется.",
      "faq.q3": "Можно ли без GPU?",
      "faq.a3": "Да. На Windows приложение само откатывается на CPU, на macOS и Linux используется процессор.",
      "faq.q4": "Какие системы поддерживаются?",
      "faq.a4": "Windows 10/11, macOS 12+ и Linux с X11. На Wayland пока есть ограничения с глобальными горячими клавишами.",
      "faq.q5": "Куда уходит текст?",
      "faq.a5": "Никуда. Аудио и расшифровки остаются на твоей машине. Аккаунта и телеметрии нет.",
      "faq.q6": "Под какой лицензией проект?",
      "faq.a6": "BSD 3-Clause. Код можно использовать, изменять и распространять.",
      "download.eyebrow": "Скачать",
      "download.title": "Готов продиктовать?",
      "download.lead": "Выбери сборку под свою систему. Ссылки на релизы появятся, когда выйдет первая публичная версия.",
      "download.winCuda": "CUDA · NVIDIA",
      "download.winCpu": "CPU-сборка",
      "download.mac": "Apple Silicon · Intel",
      "download.linux": "X11 · AppImage",
      "download.note": "BSD 3-Clause · исходники на GitHub · релизы скоро",
      "footer.tagline": "Голосовой ввод, который остаётся на твоём компьютере.",
      "footer.colProduct": "Продукт",
      "footer.colResources": "Ресурсы",
      "footer.colProject": "Проект",
      "footer.made": "Сделано на Rust + egui",
      "footer.note": "Каркас сайта: тексты и ссылки — заготовки.",
      "footer.top": "Наверх ↑",
      "toast.placeholder": "Ссылка-заглушка — добавим реальный адрес на следующем шаге."
    },
    en: {
      "meta.title": "VoiceAI — voice input without the cloud",
      "meta.description": "VoiceAI is local voice input for Windows, macOS and Linux. Dictate into any field — recognition runs on your machine.",
      "a11y.skip": "Skip to content",
      "brand.tagline": "Voice input for every app",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.models": "Models",
      "nav.cli": "CLI",
      "nav.docs": "Docs",
      "nav.faq": "FAQ",
      "lang.label": "Site language",
      "header.menu": "Menu",
      "hero.eyebrow": "OFFLINE · LOCAL BY DEFAULT · OPEN SOURCE",
      "hero.title1": "Just say it",
      "hero.title2": "and it's typed",
      "hero.lead": "VoiceAI is voice input for Windows, macOS and Linux. Your speech lands in any text field while recognition runs on your own machine.",
      "hero.ctaPrimary": "Download",
      "hero.ctaSecondary": "Documentation",
      "hero.chip1": "Whisper large-v3-turbo",
      "hero.chip2": "Windows · macOS · Linux",
      "hero.chip3": "No account, no telemetry",
      "hero.chip4": "CUDA on NVIDIA",
      "demo.label": "VoiceAI terminal demo",
      "demo.transcript": "Let me check the changelog before the release, and then...",
      "features.eyebrow": "Features",
      "features.title": "Everything you need to dictate",
      "features.lead": "A hotkey, your voice and finished text in the active field. No cloud requests, accounts or subscriptions.",
      "features.f1.title": "Fully offline",
      "features.f1.text": "Recognition runs through whisper.cpp. The model lives on your disk; not a byte goes to the cloud.",
      "features.f1.tag": "local-first",
      "features.f2.title": "Two recording modes",
      "features.f2.text": "Hold F9 to talk or switch to toggle mode and press once. The hotkey is configurable in .env.",
      "features.f2.tag": "hold / toggle",
      "features.f3.title": "Auto-paste anywhere",
      "features.f3.text": "The finished transcript is inserted with Ctrl+V (Cmd+V on macOS) into the window that was active.",
      "features.f3.tag": "Ctrl+V / Cmd+V",
      "features.f4.title": "GPU acceleration",
      "features.f4.text": "CUDA on Windows with NVIDIA and automatic CPU fallback. macOS and Linux run on the processor.",
      "features.f4.tag": "CUDA · CPU",
      "features.f5.title": "Speech cleanup",
      "features.f5.text": "Filler words and phrase replacements on the fly: spoken punctuation turns into symbols, for example.",
      "features.f5.tag": "rules in .env",
      "features.f6.title": "History & tray",
      "features.f6.text": "The last 2000 transcripts are stored locally in history.jsonl. Windows also gets a tray icon.",
      "features.f6.tag": "history.jsonl",
      "how.eyebrow": "How it works",
      "how.title": "Three steps to text",
      "how.lead": "From voice to finished text in the active field — a couple of seconds.",
      "how.s1.title": "Press F9",
      "how.s1.text": "In any app and any field. Hold the key or use toggle mode.",
      "how.s2.title": "Speak",
      "how.s2.text": "Audio is captured from the selected microphone and normalized for recognition.",
      "how.s3.title": "Text is there",
      "how.s3.text": "The transcript is pasted automatically — or copied to the clipboard as a fallback.",
      "models.eyebrow": "Models",
      "models.title": "The model lives on your disk",
      "models.lead": "Recognition runs through whisper.cpp. The default model is downloaded once and reused.",
      "models.m1.badge": "default",
      "models.m1.desc": "A balance of quality and speed. The recommended starting point for most machines.",
      "models.m2.badge": "soon",
      "models.m2.desc": "Maximum quality for difficult audio. Coming to the model catalogue.",
      "models.m3.badge": "soon",
      "models.m3.desc": "A lightweight model for older hardware and instant drafts.",
      "models.note": "On first launch the model is downloaded from Hugging Face and cached in the models/ folder.",
      "specs.size": "Size",
      "specs.sizeValue": "~1.6 GB",
      "specs.speed": "Speed",
      "specs.speedValue": "fast",
      "specs.slow": "slower",
      "specs.fastValue": "faster",
      "specs.languages": "Languages",
      "specs.languagesValue": "multilingual",
      "specs.backend": "Backend",
      "cli.eyebrow": "CLI",
      "cli.title": "Built from source",
      "cli.lead": "The project is written in Rust. Clone it, pick a backend and launch.",
      "cli.b1": "Rust toolchain (edition 2021)",
      "cli.b2": "CUDA Toolkit for GPU builds on Windows",
      "cli.b3": "Settings in .env: hotkeys, microphone, modes",
      "cli.b4": "package.ps1 assembles a portable Windows build",
      "cli.link": "Open the setup guide",
      "cli.terminalTitle": "voiceai — shell",
      "cli.copy": "Copy",
      "cli.copied": "Copied",
      "cli.c1": "# 1. clone the repository",
      "cli.c2": "# 2. run with CUDA (Windows + NVIDIA)",
      "cli.c3": "# 3. no GPU — CPU build",
      "docs.eyebrow": "Documentation",
      "docs.title": "The essentials",
      "docs.lead": "Guides for install, configuration and building. Full docs are on the way.",
      "docs.d1.meta": "guide",
      "docs.d1.title": "Installation",
      "docs.d1.text": "Rust, system dependencies and the first launch.",
      "docs.d2.meta": "reference",
      "docs.d2.title": "Configuration",
      "docs.d2.text": ".env, hotkeys, microphone and modes.",
      "docs.d3.meta": "guide",
      "docs.d3.title": "Building",
      "docs.d3.text": "CUDA, CPU and a portable Windows build.",
      "docs.d4.meta": "quick read",
      "docs.d4.title": "FAQ",
      "docs.d4.text": "Answers to the most common questions.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently asked",
      "faq.lead": "Quick answers before you install.",
      "faq.q1": "Does it need the internet?",
      "faq.a1": "Only to download the model on first launch (~1.6 GB). After that recognition works fully offline.",
      "faq.q2": "Where is my history stored?",
      "faq.a2": "Locally in history.jsonl next to the app, capped at 2000 entries. Nothing is uploaded.",
      "faq.q3": "Can I use it without a GPU?",
      "faq.a3": "Yes. On Windows the app automatically falls back to CPU; macOS and Linux always run on the processor.",
      "faq.q4": "Which systems are supported?",
      "faq.a4": "Windows 10/11, macOS 12+ and Linux with X11. Wayland currently has limitations with global hotkeys.",
      "faq.q5": "Where does the text go?",
      "faq.a5": "Nowhere. Audio and transcripts stay on your machine. There is no account and no telemetry.",
      "faq.q6": "What license is it under?",
      "faq.a6": "BSD 3-Clause. You can use, modify and redistribute the code.",
      "download.eyebrow": "Download",
      "download.title": "Ready to dictate?",
      "download.lead": "Pick the build for your system. Release links will appear when the first public version ships.",
      "download.winCuda": "CUDA · NVIDIA",
      "download.winCpu": "CPU build",
      "download.mac": "Apple Silicon · Intel",
      "download.linux": "X11 · AppImage",
      "download.note": "BSD 3-Clause · source on GitHub · releases coming soon",
      "footer.tagline": "Voice input that stays on your computer.",
      "footer.colProduct": "Product",
      "footer.colResources": "Resources",
      "footer.colProject": "Project",
      "footer.made": "Made with Rust + egui",
      "footer.note": "Site skeleton: copy and links are placeholders.",
      "footer.top": "Back to top ↑",
      "toast.placeholder": "Placeholder link — we'll add the real URL in the next step."
    }
  };

  const STORAGE_KEY = "voiceai-lang";
  const DEFAULT_LANG = "ru";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentLang = DEFAULT_LANG;
  let toastTimer = null;
  let copyTimer = null;
  let terminalTimer = null;
  let terminalRun = 0;

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return I18N[saved] ? saved : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  }

  function t(key) {
    return I18N[currentLang][key] ?? I18N[DEFAULT_LANG][key] ?? key;
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    currentLang = lang;

    const dict = I18N[lang];
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (key && dict[key] != null) element.textContent = dict[key];
    });

    $$("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (key && dict[key]) element.setAttribute("aria-label", dict[key]);
    });

    $$("[data-i18n-title]").forEach((element) => {
      const key = element.dataset.i18nTitle;
      if (key && dict[key]) element.setAttribute("title", dict[key]);
    });

    document.title = t("meta.title");

    const description = $("#meta-description");
    if (description) description.setAttribute("content", t("meta.description"));

    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title"));

    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t("meta.description"));

    $$(".lang-btn").forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const copyBtn = $("[data-copy]");
    if (copyBtn && copyBtn.classList.contains("is-copied")) {
      copyBtn.textContent = t("cli.copied");
    }

    renderTerminal();

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
    }
  }

  function buildLiveSpectro() {
    const bars = $("#liveBars");
    if (!bars) return;

    const width = bars.clientWidth || 700;
    const count = Math.max(48, Math.min(140, Math.round(width / 7)));
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
      const height = Math.min(
        98,
        20 + Math.abs(Math.sin(index * 0.63)) * 62 + Math.abs(Math.cos(index * 0.21)) * 18
      );
      const bar = document.createElement("span");
      bar.style.setProperty("--h", `${height}%`);
      bar.style.setProperty("--d", `${-(index % 11) * 0.11}s`);
      fragment.append(bar);
    }

    bars.replaceChildren(fragment);
  }

  function renderTerminal() {
    const output = $("#terminalOutput");
    if (!output) return;

    terminalRun += 1;
    const run = terminalRun;
    clearTimeout(terminalTimer);
    output.replaceChildren();

    const transcript = t("demo.transcript");
    const detected = currentLang === "ru" ? "ru" : "en";
    const lines = [
      { prefix: [{ text: "$", className: "live-prompt" }], value: " voiceai listen" },
      { prefix: [{ text: "[00:00]", className: "live-time" }, { text: " model:", className: "live-label" }], value: " large-v3-turbo" },
      { prefix: [{ text: ">", className: "live-prompt" }], value: " Listening..." },
      { prefix: [{ text: "[00:03]", className: "live-time" }, { text: " detected:", className: "live-label" }], value: ` ${detected}` },
      { prefix: [{ text: "[00:04]", className: "live-time" }, { text: " text:", className: "live-label" }], value: ` "${transcript}"`, quote: true }
    ];

    const appendCaret = () => {
      if (run !== terminalRun) return;
      const line = document.createElement("div");
      line.className = "live-line live-line--caret";
      const caret = document.createElement("span");
      caret.className = "live-caret";
      caret.setAttribute("aria-hidden", "true");
      line.append(caret);
      output.append(line);
    };

    const addLine = (line) => {
      const lineElement = document.createElement("div");
      lineElement.className = "live-line";
      line.prefix.forEach((part) => {
        const span = document.createElement("span");
        span.className = part.className;
        span.textContent = part.text;
        lineElement.append(span);
      });
      const value = document.createElement("span");
      value.className = line.quote ? "live-value live-value--quote" : "live-value";
      lineElement.append(value);
      output.append(lineElement);
      return value;
    };

    if (reduceMotion) {
      lines.forEach((line) => {
        const value = addLine(line);
        value.textContent = line.value;
      });
      appendCaret();
      return;
    }

    let lineIndex = 0;
    const typeNextLine = () => {
      if (run !== terminalRun) return;
      if (lineIndex >= lines.length) {
        appendCaret();
        return;
      }

      const line = lines[lineIndex];
      const value = addLine(line);
      const characters = Array.from(line.value);
      let characterIndex = 0;

      const typeCharacter = () => {
        if (run !== terminalRun) return;
        if (characterIndex < characters.length) {
          value.textContent += characters[characterIndex];
          characterIndex += 1;
          terminalTimer = window.setTimeout(typeCharacter, 12 + Math.random() * 10);
        } else {
          lineIndex += 1;
          terminalTimer = window.setTimeout(typeNextLine, 260);
        }
      };

      terminalTimer = window.setTimeout(typeCharacter, 160);
    };

    terminalTimer = window.setTimeout(typeNextLine, 220);
  }

  function setupLangSwitch() {
    $$(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => applyLang(button.dataset.lang));
    });
  }

  function setupMenu() {
    const menuBtn = $(".menu-btn");
    const nav = $("#nav");
    if (!menuBtn || !nav) return;

    const closeMenu = () => {
      nav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };

    menuBtn.addEventListener("click", () => {
      const isOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", isOpen);
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    $$(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        menuBtn.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1120) closeMenu();
    });
  }

  function setupScrollSpy() {
    const links = $$(".nav-link");
    if (!links.length || !("IntersectionObserver" in window)) return;

    const sections = links
      .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
      .filter(Boolean);

    const setActive = (id) => {
      links.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    links.forEach((link) => {
      link.addEventListener("click", () => setActive(link.getAttribute("href").slice(1)));
    });
  }

  function setupReveal() {
    const elements = $$(".reveal");
    if (!elements.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            instance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function setupBarHover(container) {
    if (!container) return;

    let frame = null;
    let pointerX = null;

    const update = () => {
      frame = null;
      if (pointerX == null) return;

      Array.from(container.children).forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(center - pointerX);
        const boost = Math.max(0, 1 - distance / 90) * 24;
        bar.style.setProperty("--boost", `${boost}%`);
      });
    };

    container.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      if (!frame) frame = requestAnimationFrame(update);
    });

    container.addEventListener("pointerleave", () => {
      pointerX = null;
      if (frame) cancelAnimationFrame(frame);
      frame = null;
      Array.from(container.children).forEach((bar) => bar.style.setProperty("--boost", "0%"));
    });
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.append(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch {
    }
    textarea.remove();
  }

  function setupCopyButton() {
    const button = $("[data-copy]");
    const code = $(".terminal pre");
    if (!button || !code) return;

    button.addEventListener("click", async () => {
      const text = code.innerText.trim();
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        fallbackCopy(text);
      }

      button.classList.add("is-copied");
      button.textContent = t("cli.copied");
      clearTimeout(copyTimer);
      copyTimer = window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.textContent = t("cli.copy");
      }, 1800);
    });
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function setupPlaceholderLinks() {
    $$('a[href="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast(t("toast.placeholder"));
      });
    });
  }

  function setupBackToTop() {
    const button = $(".to-top");
    if (!button) return;
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  function init() {
    currentLang = getSavedLang();
    buildLiveSpectro();
    applyLang(currentLang);
    setupLangSwitch();
    setupMenu();
    setupScrollSpy();
    setupReveal();
    setupBarHover($("#liveBars"));
    setupCopyButton();
    setupPlaceholderLinks();
    setupBackToTop();

    let spectroResizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(spectroResizeTimer);
      spectroResizeTimer = window.setTimeout(buildLiveSpectro, 150);
    });
  }

  init();
})();
