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
      "docs.lead": "Откройте отдельную страницу с гайдами по установке, настройке и сборке.",
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
      "download.lead": "Выбери сборку под свою систему. Для Windows готовые архивы, для macOS и Linux — сборка из исходников.",
      "download.winCuda": "CUDA · NVIDIA",
      "download.winCpu": "CPU-сборка",
      "download.mac": "Сборка из исходников",
      "download.linux": "Сборка из исходников",
      "download.note": "BSD 3-Clause · исходники на GitHub · Windows-сборки доступны",
      "footer.tagline": "Голосовой ввод, который остаётся на твоём компьютере.",
      "footer.colProduct": "Продукт",
      "footer.colResources": "Ресурсы",
      "footer.colProject": "Проект",
      "footer.made": "Сделано на Rust + egui",
      "footer.note": "Каркас сайта: тексты и ссылки — заготовки.",
      "footer.top": "Наверх ↑",
      "docsPage.meta.title": "Документация VoiceAI — установка, настройка, сборка",
      "docsPage.meta.description": "Гайды VoiceAI: установка, настройка .env, горячие клавиши и сборка под Windows, macOS и Linux.",
      "docsPage.eyebrow": "Документация",
      "docsPage.title": "Руководства VoiceAI",
      "docsPage.lead": "Установка, настройка и сборка. Всё, что нужно, чтобы запустить голосовой ввод на своём компьютере.",
      "docsPage.tocLabel": "Содержание документации",
      "docsPage.tocTitle": "На этой странице",
      "docsPage.tocInstall": "Установка",
      "docsPage.tocConfig": "Настройка",
      "docsPage.tocBuild": "Сборка",
      "docsPage.back": "На главную",
      "docsPage.install.meta": "гайд",
      "docsPage.install.title": "Установка",
      "docsPage.install.lead": "От установки Rust до первого запуска голосового ввода.",
      "docsPage.install.reqTitle": "Что понадобится",
      "docsPage.install.req1": "Windows 10/11, macOS 12+ или Linux с X11. Под Wayland глобальные хоткеи и вставка могут не работать.",
      "docsPage.install.req2": "Стабильный Rust (edition 2021) и инструменты сборки: MSVC на Windows, Xcode Command Line Tools на macOS, build-essential на Linux.",
      "docsPage.install.req3": "Микрофон.",
      "docsPage.install.req4": "Интернет и ~1.6 ГБ свободного места для однократной загрузки модели.",
      "docsPage.install.platformTitle": "Особенности платформ",
      "docsPage.install.platformWin": "Windows: CUDA использует NVIDIA GPU; без него приложение автоматически работает на CPU.",
      "docsPage.install.platformMac": "macOS: только CPU. Разрешите доступ к микрофону и «Универсальный доступ» (Accessibility).",
      "docsPage.install.platformLinux": "Linux: только CPU. Нужны системные библиотеки для аудио и GUI, глобальные хоткеи работают под X11.",
      "docsPage.install.step1Title": "1. Клонируйте репозиторий",
      "docsPage.install.c1": "# 1. клонируем репозиторий",
      "docsPage.install.step2Title": "2. Создайте .env (необязательно)",
      "docsPage.install.step2Text": "Без .env приложение использует встроенные значения, а настройки можно менять прямо в интерфейсе — они сохранятся в .env автоматически.",
      "docsPage.install.step3Title": "3. Установите зависимости (Linux)",
      "docsPage.install.c2": "# 2. зависимости для Linux (Debian/Ubuntu)",
      "docsPage.install.step4Title": "4. Соберите и запустите",
      "docsPage.install.c3": "# 3. запуск с CUDA (Windows + NVIDIA)",
      "docsPage.install.c4": "# 4. CPU-сборка (Windows без NVIDIA, macOS, Linux)",
      "docsPage.install.step5Title": "5. Разрешите доступ (macOS)",
      "docsPage.install.step5Text": "При первом запуске разрешите доступ к микрофону и «Универсальный доступ» (System Settings → Privacy & Security → Accessibility).",
      "docsPage.install.modelNote": "При первом запуске модель ~1.6 ГБ скачивается в фоне с Hugging Face в папку models/. После загрузки интернет не нужен.",
      "docsPage.config.meta": "справочник",
      "docsPage.config.title": "Настройка",
      "docsPage.config.lead": "Значения по умолчанию задаются через .env. Большинство настроек меняется прямо в интерфейсе и сохраняется автоматически.",
      "docsPage.config.exampleTitle": "Пример .env",
      "docsPage.config.c1": "# пример .env",
      "docsPage.config.tableTitle": "Все переменные",
      "docsPage.config.tableVar": "Переменная",
      "docsPage.config.tableDefault": "По умолчанию",
      "docsPage.config.tableDesc": "Описание",
      "docsPage.config.v1": "Путь к файлу модели .bin.",
      "docsPage.config.v2": "auto / 1 / 0: использовать ли GPU в CUDA-сборке Windows (на macOS/Linux всегда CPU).",
      "docsPage.config.v3": "Клавиша записи; перезаписывается из интерфейса.",
      "docsPage.config.v4": "Клавиша выхода; перезаписывается из интерфейса.",
      "docsPage.config.v5": "Режим записи: hold (Рация) или toggle (Переключатель).",
      "docsPage.config.v6": "Имя входного устройства (микрофона); пусто — устройство по умолчанию.",
      "docsPage.config.v7": "Усиление сигнала микрофона (1–50).",
      "docsPage.config.v8": "Список слов-паразитов через запятую для локальной очистки.",
      "docsPage.config.v9": "Замены слов, по одному правилу слово=замена на строку.",
      "docsPage.config.seeBelow": "см. ниже",
      "docsPage.config.replacementsTitle": "Замены слов по умолчанию",
      "docsPage.config.uiTitle": "Настройки интерфейса",
      "docsPage.config.ui1": "Тема (тёмная/светлая) — для полного применения требуется перезапуск.",
      "docsPage.config.ui2": "Входное устройство — выбор микрофона из списка; кнопка «Обновить» пересканирует устройства.",
      "docsPage.config.ui3": "Усиление микрофона (1–50×) — применяется сразу; начните с 10–15×.",
      "docsPage.config.ui4": "Режим записи — «Рация» или «Переключатель».",
      "docsPage.config.ui5": "Горячие клавиши — назначаются нажатием и сохраняются в .env.",
      "docsPage.config.ui6": "Путь к модели — можно выбрать файл кнопкой «Обзор»; после смены требуется перезапуск.",
      "docsPage.config.ui7": "Стоп-слова и замены слов — редактируются в интерфейсе и сохраняются автоматически.",
      "docsPage.config.saveNote": "Изменённые настройки сохраняются в .env автоматически.",
      "docsPage.build.meta": "гайд",
      "docsPage.build.title": "Сборка",
      "docsPage.build.lead": "Релизная сборка и портативная версия для Windows.",
      "docsPage.build.releaseTitle": "Релизная сборка",
      "docsPage.build.releaseText": "Исполняемый файл появится в target/release/whisper_flow_rust (.exe на Windows).",
      "docsPage.build.c1": "# Windows с NVIDIA GPU (CUDA)",
      "docsPage.build.c2": "# Windows без NVIDIA GPU, macOS, Linux (CPU)",
      "docsPage.build.portableTitle": "Портативная версия для Windows",
      "docsPage.build.portableText": "CUDA-сборка зависит от cublas64_13.dll, cublasLt64_13.dll и Visual C++ runtime. package.ps1 собирает самодостаточный архив.",
      "docsPage.build.c3": "# полная сборка с CUDA",
      "docsPage.build.c4": "# лёгкая CPU-сборка без CUDA",
      "docsPage.build.portableNote": "Результат — папки dist\\VoiceAI и dist\\VoiceAI-cpu, а также архивы dist\\VoiceAI-<версия>-win64.zip. CUDA-библиотеки берутся из установленного CUDA Toolkit.",
      "docsPage.build.testsTitle": "Тесты",
      "docsPage.build.c5": "# запуск тестов",
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
      "docs.lead": "Open the separate page with installation, configuration and build guides.",
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
      "download.lead": "Pick the build for your system. Ready-made archives for Windows; build from source for macOS and Linux.",
      "download.winCuda": "CUDA · NVIDIA",
      "download.winCpu": "CPU build",
      "download.mac": "Build from source",
      "download.linux": "Build from source",
      "download.note": "BSD 3-Clause · source on GitHub · Windows builds available",
      "footer.tagline": "Voice input that stays on your computer.",
      "footer.colProduct": "Product",
      "footer.colResources": "Resources",
      "footer.colProject": "Project",
      "footer.made": "Made with Rust + egui",
      "footer.note": "Site skeleton: copy and links are placeholders.",
      "footer.top": "Back to top ↑",
      "docsPage.meta.title": "VoiceAI documentation — install, configure, build",
      "docsPage.meta.description": "VoiceAI guides: installation, .env configuration, hotkeys and builds for Windows, macOS and Linux.",
      "docsPage.eyebrow": "Documentation",
      "docsPage.title": "VoiceAI guides",
      "docsPage.lead": "Installation, configuration and building. Everything you need to run voice input on your machine.",
      "docsPage.tocLabel": "Documentation contents",
      "docsPage.tocTitle": "On this page",
      "docsPage.tocInstall": "Installation",
      "docsPage.tocConfig": "Configuration",
      "docsPage.tocBuild": "Building",
      "docsPage.back": "Back to home",
      "docsPage.install.meta": "guide",
      "docsPage.install.title": "Installation",
      "docsPage.install.lead": "From installing Rust to your first voice input session.",
      "docsPage.install.reqTitle": "What you need",
      "docsPage.install.req1": "Windows 10/11, macOS 12+ or Linux with X11. Global hotkeys and paste may not work on Wayland.",
      "docsPage.install.req2": "Stable Rust (edition 2021) and build tools: MSVC on Windows, Xcode Command Line Tools on macOS, build-essential on Linux.",
      "docsPage.install.req3": "A microphone.",
      "docsPage.install.req4": "Internet and ~1.6 GB of free space for the one-time model download.",
      "docsPage.install.platformTitle": "Platform notes",
      "docsPage.install.platformWin": "Windows: CUDA uses an NVIDIA GPU; without one the app automatically runs on the CPU.",
      "docsPage.install.platformMac": "macOS: CPU only. Allow microphone access and Accessibility permissions.",
      "docsPage.install.platformLinux": "Linux: CPU only. Audio and GUI system libraries are required; global hotkeys work under X11.",
      "docsPage.install.step1Title": "1. Clone the repository",
      "docsPage.install.c1": "# 1. clone the repository",
      "docsPage.install.step2Title": "2. Create .env (optional)",
      "docsPage.install.step2Text": "Without .env the app uses built-in defaults, and settings can be changed right in the UI — they are saved to .env automatically.",
      "docsPage.install.step3Title": "3. Install dependencies (Linux)",
      "docsPage.install.c2": "# 2. Linux dependencies (Debian/Ubuntu)",
      "docsPage.install.step4Title": "4. Build and run",
      "docsPage.install.c3": "# 3. run with CUDA (Windows + NVIDIA)",
      "docsPage.install.c4": "# 4. CPU build (Windows without NVIDIA, macOS, Linux)",
      "docsPage.install.step5Title": "5. Grant permissions (macOS)",
      "docsPage.install.step5Text": "On first launch, allow microphone access and Accessibility (System Settings → Privacy & Security → Accessibility).",
      "docsPage.install.modelNote": "On first launch the ~1.6 GB model is downloaded in the background from Hugging Face into models/. After that, no internet is needed.",
      "docsPage.config.meta": "reference",
      "docsPage.config.title": "Configuration",
      "docsPage.config.lead": "Defaults are set through .env. Most settings can be changed in the UI and are saved automatically.",
      "docsPage.config.exampleTitle": "Example .env",
      "docsPage.config.c1": "# example .env",
      "docsPage.config.tableTitle": "All variables",
      "docsPage.config.tableVar": "Variable",
      "docsPage.config.tableDefault": "Default",
      "docsPage.config.tableDesc": "Description",
      "docsPage.config.v1": "Path to the .bin model file.",
      "docsPage.config.v2": "auto / 1 / 0: whether to use the GPU in the Windows CUDA build (macOS/Linux always use the CPU).",
      "docsPage.config.v3": "Recording hotkey; overwritten from the UI.",
      "docsPage.config.v4": "Exit hotkey; overwritten from the UI.",
      "docsPage.config.v5": "Recording mode: hold (push-to-talk) or toggle.",
      "docsPage.config.v6": "Input device (microphone) name; empty means the system default.",
      "docsPage.config.v7": "Microphone gain (1–50).",
      "docsPage.config.v8": "Comma-separated filler words for local cleanup.",
      "docsPage.config.v9": "Word replacements, one word=replacement rule per line.",
      "docsPage.config.seeBelow": "see below",
      "docsPage.config.replacementsTitle": "Default word replacements",
      "docsPage.config.uiTitle": "Interface settings",
      "docsPage.config.ui1": "Theme (dark/light) — a restart is required for full effect.",
      "docsPage.config.ui2": "Input device — pick a microphone from the list; Refresh rescans devices.",
      "docsPage.config.ui3": "Microphone gain (1–50×) — applied immediately; start with 10–15×.",
      "docsPage.config.ui4": "Recording mode — hold or toggle.",
      "docsPage.config.ui5": "Hotkeys — assigned by pressing and saved to .env.",
      "docsPage.config.ui6": "Model path — choose a file with Browse; a restart is required after changing it.",
      "docsPage.config.ui7": "Stop words and word replacements — edited in the UI and saved automatically.",
      "docsPage.config.saveNote": "Changed settings are saved to .env automatically.",
      "docsPage.build.meta": "guide",
      "docsPage.build.title": "Building",
      "docsPage.build.lead": "Release builds and a portable Windows version.",
      "docsPage.build.releaseTitle": "Release build",
      "docsPage.build.releaseText": "The executable appears in target/release/whisper_flow_rust (.exe on Windows).",
      "docsPage.build.c1": "# Windows with NVIDIA GPU (CUDA)",
      "docsPage.build.c2": "# Windows without NVIDIA GPU, macOS, Linux (CPU)",
      "docsPage.build.portableTitle": "Portable Windows build",
      "docsPage.build.portableText": "The CUDA build depends on cublas64_13.dll, cublasLt64_13.dll and the Visual C++ runtime. package.ps1 assembles a self-contained archive.",
      "docsPage.build.c3": "# full CUDA build",
      "docsPage.build.c4": "# lightweight CPU build without CUDA",
      "docsPage.build.portableNote": "Output: dist\\VoiceAI and dist\\VoiceAI-cpu folders, plus dist\\VoiceAI-<version>-win64.zip archives. CUDA libraries are taken from the installed CUDA Toolkit.",
      "docsPage.build.testsTitle": "Tests",
      "docsPage.build.c5": "# run tests",
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
  const copyTimers = new WeakMap();
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

    const page = document.body?.dataset.page || "home";
    const titleKey = page === "docs" ? "docsPage.meta.title" : "meta.title";
    const descriptionKey = page === "docs" ? "docsPage.meta.description" : "meta.description";

    document.title = t(titleKey);

    const description = $("#meta-description");
    if (description) description.setAttribute("content", t(descriptionKey));

    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t(titleKey));

    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t(descriptionKey));

    $$(".lang-btn").forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    $$("[data-copy]").forEach((button) => {
      button.textContent = button.classList.contains("is-copied") ? t("cli.copied") : t("cli.copy");
    });

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
    const links = $$(".nav-link").filter((link) => (link.getAttribute("href") || "").startsWith("#"));
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

  function setupCopyButtons() {
    $$("[data-copy]").forEach((button) => {
      const container = button.closest(".terminal") || button.parentElement;
      const code = container ? $("pre", container) : null;
      if (!code) return;

      button.addEventListener("click", async () => {
        const text = code.innerText.trim();
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          fallbackCopy(text);
        }

        button.classList.add("is-copied");
        button.textContent = t("cli.copied");
        clearTimeout(copyTimers.get(button));
        copyTimers.set(
          button,
          window.setTimeout(() => {
            button.classList.remove("is-copied");
            button.textContent = t("cli.copy");
          }, 1800)
        );
      });
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
    setupCopyButtons();
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
