// --- DOM Selectors ---
const dom = {
  // Clock
  time: document.getElementById('clock-time'),
  date: document.getElementById('clock-date'),
  greeting: document.getElementById('greeting-text'),
  
  // Progress Tracker Tabs (Pipeline)
  trackerItems: document.querySelectorAll('.tracker-list .tracker-item'),
  tabPanes: document.querySelectorAll('.tab-content .tab-pane'),
  
  // Breathing Meditation
  meditationToggle: document.getElementById('btn-meditation-toggle'),
  meditationReset: document.getElementById('btn-meditation-reset'),
  breathingBall: document.getElementById('breathing-ball'),
  breathingInstruction: document.getElementById('breathing-instruction'),
  breathingCountdown: document.getElementById('breathing-countdown'),
  btnSoundToggle: document.getElementById('btn-sound-toggle'),
  soundIcon: document.getElementById('sound-icon'),
  soundText: document.getElementById('sound-text'),
  
  // GM Executive Center Dashboard
  executiveMetricsRow: document.getElementById('executive-metrics-row'),
  competitorComparisonTbody: document.getElementById('competitor-comparison-tbody'),
  majorIssuesGrid: document.getElementById('major-issues-grid'),
  gmScheduleList: document.getElementById('gm-schedule-list'),
  competitorIntelList: document.getElementById('competitor-intel-list'),
  
  // Unit 1: Problem Redefinition (核心重構)
  dilemmaInput: document.getElementById('dilemma-input'),
  btnDissectDilemma: document.getElementById('btn-dissect-dilemma'),
  dissectionResultsPanel: document.getElementById('dissection-results-panel'),
  symptomText: document.getElementById('symptom-text'),
  coreText: document.getElementById('core-text'),
  interrogationQuestionsPanel: document.getElementById('interrogation-questions-panel'),
  interrogationQuestionsList: document.getElementById('interrogation-questions-list'),
  
  // Unit 2: Three-Option Sandtable (沙盤矩陣)
  casePresetSelect: document.getElementById('case-preset-select'),
  opt1Title: document.getElementById('opt1-title'),
  opt2Title: document.getElementById('opt2-title'),
  opt3Title: document.getElementById('opt3-title'),
  optSliders: document.querySelectorAll('.opt-slider'),
  sandtableChart: document.getElementById('sandtable-bar-chart'),
  descOpt1Ratio: document.getElementById('desc-opt1-ratio'),
  descOpt2Ratio: document.getElementById('desc-opt2-ratio'),
  descOpt3Ratio: document.getElementById('desc-opt3-ratio'),
  
  // Unit 3: Devil's Advocate Chat (Red Team 紅軍挑戰)
  advocateChatMessages: document.getElementById('advocate-chat-messages'),
  advocateOptionSelect: document.getElementById('advocate-option-select'),
  btnTriggerChallenge: document.getElementById('btn-trigger-challenge'),
  
  // Unit 4: Convergence Report (決策備忘)
  briefPrintContent: document.getElementById('brief-print-content'),
  btnExportCopy: document.getElementById('btn-export-copy'),
  btnExportPrint: document.getElementById('btn-export-print'),
  
  // Right Sidebar Notes
  notesList: document.getElementById('notes-list'),
  noteForm: document.getElementById('note-form'),
  noteInput: document.getElementById('note-input'),
  notesSearch: document.getElementById('notes-search'),
  
  // Toast Container
  toastContainer: document.getElementById('toast-container'),

  // --- Top-level Role Switcher ---
  btnModeExecutive: document.getElementById('btn-mode-executive'),
  btnModeInstructor: document.getElementById('btn-mode-instructor'),
  layoutExecutive: document.getElementById('layout-executive'),
  layoutInstructor: document.getElementById('layout-instructor'),
  headerBrandLogo: document.getElementById('header-brand-logo'),
  headerBrandTitle: document.getElementById('header-brand-title'),
  statusTitle: document.getElementById('status-title'),
  statusDesc: document.getElementById('status-desc'),

  // --- AI Instructor Workspace ---
  instructorCourseList: document.getElementById('instructor-course-list'),
  instructorSandboxList: document.getElementById('instructor-sandbox-list'),
  instructorActiveCourseTitle: document.getElementById('instructor-active-course-title'),
  instructorActiveCourseDuration: document.getElementById('instructor-active-course-duration'),
  instructorSyllabusContent: document.getElementById('instructor-syllabus-content'),
  instructorPromptInput: document.getElementById('instructor-prompt-input'),
  btnRunPromptDemo: document.getElementById('btn-run-prompt-demo'),
  btnClearPromptDemo: document.getElementById('btn-clear-prompt-demo'),
  promptOutputPanel: document.getElementById('prompt-output-panel'),
  promptOutputText: document.getElementById('prompt-output-text'),
  instructorQAGrid: document.getElementById('instructor-qa-grid'),
  instructorScheduleList: document.getElementById('instructor-schedule-list'),
  instructorNotesSearch: document.getElementById('instructor-notes-search'),
  instructorNotesList: document.getElementById('instructor-notes-list'),
  instructorNoteForm: document.getElementById('instructor-note-form'),
  instructorNoteInput: document.getElementById('instructor-note-input'),

  // --- AI Instructor Sub-Tabs & Calendar ---
  btnInstTabClassroom: document.getElementById('btn-inst-tab-classroom'),
  btnInstTabCalendar: document.getElementById('btn-inst-tab-calendar'),
  instPaneClassroom: document.getElementById('inst-pane-classroom'),
  instPaneCalendar: document.getElementById('inst-pane-calendar'),
  btnCalViewWeek: document.getElementById('btn-cal-view-week'),
  btnCalViewMonth: document.getElementById('btn-cal-view-month'),
  calendarWeekGrid: document.getElementById('calendar-week-grid'),
  calendarMonthGrid: document.getElementById('calendar-month-grid'),
  btnGoogleCalendarSync: document.getElementById('btn-google-calendar-sync'),
  syncStatusText: document.getElementById('sync-status-text'),

  // --- Google Sync Controls & Status ---
  googleStatusPill: document.getElementById('google-status-pill'),
  googleStatusLabel: document.getElementById('google-status-label'),
  btnGoogleConfig: document.getElementById('btn-google-config'),
  googleConfigModal: document.getElementById('google-config-modal'),
  btnCloseGoogleConfig: document.getElementById('btn-close-google-config'),
  googleClientId: document.getElementById('google-client-id'),
  googleApiKey: document.getElementById('google-api-key'),
  btnGoogleConfigClear: document.getElementById('btn-google-config-clear'),
  btnGoogleConfigSave: document.getElementById('btn-google-config-save'),

  // --- Google Tasks UI ---
  instructorNewTaskInput: document.getElementById('instructor-new-task-input'),
  btnAddInstructorTask: document.getElementById('btn-add-instructor-task')
};

// --- Preset Cases for Group Decisions ---
const CASE_PRESETS = {
  custom: {
    dilemma: '',
    opt1: { title: '維持現狀與成本優化', opp: 3, cost: 2, risk: 2 },
    opt2: { title: '局部升級與生態系聯結', opp: 6, cost: 5, risk: 4 },
    opt3: { title: '全面重構與顛覆式創新', opp: 9, cost: 8, risk: 7 }
  },
  pxmart: {
    dilemma: '面對全聯「小時達」生鮮電商擴張與量販併購，集團該如何加速家樂福的實體與生鮮冷鏈整合以防守市佔？',
    opt1: { title: '優化家樂福量販店內動線與實體採購折扣', opp: 4, cost: 2, risk: 3 },
    opt2: { title: '建立家樂福與 7-11 前置倉共用，共享物流冷鏈', opp: 8, cost: 6, risk: 4 },
    opt3: { title: '全面重組 OPENPOINT 點數，對家樂福生鮮進行剛性補貼以打擊全聯熟客群', opp: 9, cost: 8, risk: 7 }
  },
  familymart: {
    dilemma: '全家便利商店加速佈局科技零售與 FamiPoints 會員點數，7-11 該如何防守並反擊？',
    opt1: { title: '跟進全家推出新型態鮮食與聯名咖啡產品', opp: 5, cost: 3, risk: 2 },
    opt2: { title: '擴大佈署「智FUN機」於封閉商辦，防堵全家實體店外拓', opp: 7, cost: 5, risk: 4 },
    opt3: { title: '整合康是美、星巴克與家樂福，推出 OPENPOINT 跨通路訂閱制生態圈', opp: 9, cost: 8, risk: 6 }
  },
  momo: {
    dilemma: 'Momo 佈局都會區「衛星短鏈倉儲」，實測3小時極速達，我們該如何防堵其侵蝕 7-11 實體通路快消品市場？',
    opt1: { title: '調整 7-11 快消品陳列與實體促銷策略', opp: 4, cost: 2, risk: 2 },
    opt2: { title: '利用 7-11 門市作為前置履約中心，結合外送平台推出30分鐘快商務', opp: 8, cost: 7, risk: 5 },
    opt3: { title: '自建集團專屬的同城極速物流物流網（整合黑貓與店配）', opp: 9, cost: 9, risk: 7 }
  },
  shopee: {
    dilemma: '面對蝦皮店到店大舉擴張，搶佔 7-11 包裹取件客流，集團該如何守護我們的門市寄取件手續費收益與店內併買商機？',
    opt1: { title: '優化 7-11 店內取件動線，發放取件專屬門市優惠券以刺激併買率', opp: 4, cost: 2, risk: 2 },
    opt2: { title: '與其他非蝦皮大型物流與電商平台（PChome/Yahoo）結盟，擴大 7-11 寄取服務', opp: 7, cost: 4, risk: 3 },
    opt3: { title: '推出 7-11 專屬的「店配同城快寄」與跨業態「免運訂閱會員」反制蝦皮', opp: 9, cost: 8, risk: 6 }
  }
};

// --- GM Executive Center Mock Data ---
const INITIAL_GM_SCHEDULE = [
  { id: 's-1', time: '09:00', title: '家樂福生鮮與 7-11 前置倉共用整合戰略研討會', checked: true },
  { id: 's-2', time: '11:30', title: 'OPENPOINT 跨業態數據變現 (RMN) 簡報會議', checked: false },
  { id: 's-3', time: '14:00', title: '封閉商辦區「智FUN機」二代無人零售點視察', checked: false },
  { id: 's-4', time: '16:30', title: '應對 momo 短鏈快配情資分析會報', checked: false }
];

const INITIAL_COMPETITOR_INTEL = [
  { name: '全聯福利中心 (PX Mart)', alert: 'high', news: '全聯加速佈局「小時達」生鮮電商，覆蓋率已達都會區 90%，生鮮大宗採購與線上配送市佔持續擴張，正剛性侵蝕量販生鮮版圖。' },
  { name: '全家便利商店 (FamilyMart)', alert: 'medium', news: '全家大舉推廣「FamiSuper」生鮮超市複合店型，首波瞄準都會區住宅大樓，試圖以「下樓就買到生鮮」攔截傳統超市客群。' },
  { name: 'momo 購物網 (Fubon Media)', alert: 'high', news: 'momo 實測都會區「3小時極速達」快配服務，廣設衛星迷你倉，快消品與日用品配送時效已壓迫到便利商店的即時補給功能。' },
  { name: '蝦皮購物 (Shopee)', alert: 'high', news: '蝦皮店到店全台門市已達 1,500+ 間，其「隔日配」與「店到家」服務大舉瓜分超商包裹寄取手續費，並透過蝦皮超市快消品促銷掠奪實體門市的併買客群。' }
];

const INITIAL_MAJOR_ISSUES = [
  { id: 'issue-1', title: '對抗全聯：家樂福生鮮與 7-11 門市前置倉冷鏈共用整合路徑', threat: 'high', desc: '全聯生鮮小時達電商大舉擴張。家樂福實體採購規模與 7-11 社區通路之「前置倉與冷鏈共用」綜效整合亟待定奪。', target: 'pxmart' },
  { id: 'issue-2', title: '對抗全家：7-11 智FUN機與跨通路 OPENPOINT 會員大數據整合', threat: 'medium', desc: '全家深耕 FamiPoints 點數並大舉鋪設科技店型。7-11 需加速封閉商辦區二代「智FUN機」無人店部屬，並整合康是美、星巴克與家樂福點數以防堵全家。', target: 'familymart' },
  { id: 'issue-3', title: '應對 Momo：7-11 衛星短鏈倉儲改建與都會區 Omnichannel 快商務配', threat: 'high', desc: 'Momo 都會區「3小時極速達」快配服務廣設衛星迷你倉，威脅超商日用品。我們需重構 7-11 實體後倉為「快商務前置履約中心」進行 30 分鐘快配防守。', target: 'momo' },
  { id: 'issue-4', title: '對抗蝦皮：7-11 店到店包裹防守與同城寄取件免運會員聯防', threat: 'high', desc: '蝦皮店到店 1500+ 間搶佔超商包裹人流與手續費。我們需推出 7-11 專屬的「店配同城快寄」與跨通路免運訂閱會員進行反制。', target: 'shopee' }
];

const INITIAL_COMPETITOR_COMPARISON = [
  {
    dimension: '最後一哩履約時效',
    icon: 'fa-truck-fast',
    us: { val: '30-60 mins', desc: '門市快商務配送' },
    px: { val: '45-60 mins', desc: '小時達社區送' },
    fm: { val: '60 mins', desc: '外送平台合作' },
    momo: { val: '3-6 hrs', desc: '都會短鏈主倉送' },
    shopee: { val: '1-2 days', desc: '店到店/快遞配送' }
  },
  {
    dimension: '實體履約節點數',
    icon: 'fa-store',
    us: { val: '6,800+ 門市', desc: '超商+量販密集網' },
    px: { val: '1,100+ 門市', desc: '社區生鮮超市' },
    fm: { val: '4,200+ 門市', desc: '便利超商體系' },
    momo: { val: '30+ 主/衛倉', desc: '重資產倉儲配置' },
    shopee: { val: '1,500+ 店到店', desc: '取貨門市快速擴張' }
  },
  {
    dimension: '生態圈活躍會員數',
    icon: 'fa-users',
    us: { val: '1,700 萬', desc: '跨業態點數黏著' },
    px: { val: '1,400 萬', desc: 'PXPay行動支付' },
    fm: { val: '1,650 萬', desc: '超商單一會員' },
    momo: { val: '1,200 萬', desc: 'momo幣抵用生態' },
    shopee: { val: '1,800 萬', desc: '網購高頻交易客' }
  },
  {
    dimension: '數字渠道滲率',
    icon: 'fa-network-wired',
    us: { val: '78.5%', desc: '跨通路線上購' },
    px: { val: '52.0%', desc: '生鮮小時達支撐' },
    fm: { val: '65.4%', desc: '隨買跨店取黏著' },
    momo: { val: '98.0%', desc: '純電商主戰場' },
    shopee: { val: '99.5%', desc: '行動端網購霸主' }
  }
];

// --- AI Instructor Mock Data ---
const INITIAL_INSTRUCTOR_COURSES = [
  {
    id: 'c-1',
    title: '企業級 Agentic AI 落地實務與決策沙盤',
    duration: '6 hrs',
    syllabus: `
      <h3>課程核心模組</h3>
      <ul>
        <li><strong>模組一：Agent 規劃機制與雙人對齊（09:00 - 10:30）</strong><br>解構 Agent 自主決策的推理迴圈 (ReAct) 與人類決策對齊機制。</li>
        <li><strong>模組二：企業前置倉與冷鏈物流排程實作（10:45 - 12:00）</strong><br>模擬 7-11 與家樂福前置倉共用下的自動補貨決策演算法。</li>
        <li><strong>模組三：多 Agent 協同對抗沙盤（13:30 - 15:00）</strong><br>以全聯小時達、momo極速配為假想敵，實測超商快商務防禦矩陣。</li>
        <li><strong>模組四：紅軍演練與失敗預防 (Pre-mortem)（15:15 - 17:00）</strong><br>實踐企業決策中的 AI 紅軍挑戰，質詢盲點與防禦漏洞。</li>
      </ul>
    `
  },
  {
    id: 'c-2',
    title: '生成式 AI 提示工程與思維鏈 (CoT) 應用',
    duration: '4 hrs',
    syllabus: `
      <h3>課程核心模組</h3>
      <ul>
        <li><strong>模組一：提示工程核心三原則（09:00 - 10:00）</strong><br>角色扮演 (Role-Playing)、Few-Shot 範例引導、與格式約束。</li>
        <li><strong>模組二：思維鏈 (Chain of Thought) 深度推理（10:15 - 11:30）</strong><br>如何引導 LLM 在輸出答案前進行 Step-by-Step 邏輯自檢。</li>
        <li><strong>模組三：結構化資料剖析與 RMN 變現（13:00 - 14:30）</strong><br>分析消費者點數軌跡與購買偏好，生成精準廣告促銷文案。</li>
        <li><strong>模組四：提示工程安全與對話越獄防禦（14:45 - 16:00）</strong><br>如何設計系統提示詞 (System Prompt) 阻隔惡意注入。</li>
      </ul>
    `
  },
  {
    id: 'c-3',
    title: '企業 RAG 知識庫與零售媒體廣告 (RMN) 實戰',
    duration: '8 hrs',
    syllabus: `
      <h3>課程核心模組</h3>
      <ul>
        <li><strong>模組一：RAG 檢索增強生成架構（09:00 - 11:00）</strong><br>從 PDF 向量化 (Chunking) 到高效 Vector DB 檢索機制。</li>
        <li><strong>模組二：解決 RAG 幻覺與資訊滯後（11:15 - 12:30）</strong><br>導入 Hybrid Search 與 Cross-Encoder 重排 (Reranking) 技術。</li>
        <li><strong>模組三：零售媒體網絡 (RMN) 數據變現（13:30 - 15:30）</strong><br>結合 OPENPOINT 1700萬會員數據，打造高轉化率的精準投放引擎。</li>
        <li><strong>模組四：快商務履約調度與路徑優化（15:45 - 18:00）</strong><br>利用 RAG 輔助系統即時更新運力地圖，規劃最佳配送路線。</li>
      </ul>
    `
  },
  {
    id: 'c-4',
    title: 'AI 搜尋引擎最佳化 (GEO/AEO) 與 SGE 生成式搜尋防守實戰',
    duration: '6 hrs',
    syllabus: `
      <h3>課程核心模組</h3>
      <ul>
        <li><strong>模組一：AI 搜尋引擎（Perplexity, ChatGPT Search）排名機制解析（09:00 - 10:30）</strong><br>解析大型語言模型如何抓取、理解、與引用企業網頁內容，介紹 GEO (Generative Engine Optimization) 原理。</li>
        <li><strong>模組二：SGE 生成式搜尋引擎優化與關鍵字定位（10:45 - 12:00）</strong><br>實作 Answer Engine Optimization (AEO)，如何將傳統 SEO 的關鍵字優化轉型為 AI 直接推薦的首選答案結構。</li>
        <li><strong>模組三：AI 時代的企業品牌流量防守沙盤（13:30 - 15:00）</strong><br>以電商與連鎖零售競業為對手，實測品牌關鍵字在 AI 搜尋結果中的防禦與佔位比。</li>
        <li><strong>模組四：網頁結構化 Schema 與 AI 友善爬蟲設定（15:15 - 17:00）</strong><br>實作 Schema.org 語意標記與優化 robots.txt，讓 OpenAI、Google Gemini、Perplexity 爬蟲精確且優先推薦您的品牌。</li>
      </ul>
    `
  }
];

const INITIAL_INSTRUCTOR_SANDBOX_TEMPLATES = [
  {
    id: 'pt-1',
    name: 'CoT 思維鏈提示 (Step-by-Step)',
    template: `你現在是統一集團的資深戰略分析師。
請針對「面對 momo 衛星短鏈倉儲，我們是否該將 7-11 門市後倉改建為快商務前置履約中心」進行戰略分析。

請嚴格遵循以下推理步驟：
1. 分析實體店與純電商的非對稱優勢與劣勢。
2. 評估揀貨人力、庫存空間、外送成本這三大痛點。
3. 給出最終的機會代價比 (Ratio) 與執行建議。
4. 讓我們一步一步思考，將推理過程詳細寫出來。`
  },
  {
    id: 'pt-2',
    name: '角色扮演與挑戰 (Role-Playing)',
    template: `你現在是無情的紅軍挑戰者 (Devil's Advocate)。
目前總經理提出的戰略方案是：「針對全聯小時達的擴張，我們要在家樂福生鮮與 7-11 之間實施冷鏈與前置倉共享。」

請你提出 3 個最尖銳、最致命的失敗預警 (Pre-mortem)：
- 必須包含組織加盟利益分配的內耗。
- 必須包含冷鏈損耗率失控的財務風險。
- 用無情且客觀的口吻質詢。`
  },
  {
    id: 'pt-3',
    name: 'RMN 廣告文案生成 (Structured)',
    template: `你是一個 AI 行銷大腦。
我們擁有以下 OPENPOINT 會員特徵：
- 會員標籤：35-45歲上班族、每週固定購買 7-11 拿鐵、有家樂福生鮮採購紀錄。
- 監測競業動作：全聯正在大推生鮮蔬菜小時達折價券。

請生成一則簡訊促銷文案：
- 必須結合 7-11 咖啡取件與家樂福週末生鮮特惠。
- 強調跨通路點數折抵優惠。
- 限制在 70 字以內，語氣溫暖有吸引力。`
  }
];

const INITIAL_INSTRUCTOR_SCHEDULE = [
  { id: 'is-1', time: '10:00', title: 'Momo 集團高階主管內訓：企業級 Agentic AI 落地實務', checked: true },
  { id: 'is-2', time: '13:30', title: '全家零售 AI 創新論壇：OPENPOINT 與 FamiPoints 數據護城河對話', checked: false },
  { id: 'is-3', time: '16:00', title: '全聯福利中心總部演講：生成式 AI 與智慧冷鏈履約策略', checked: false }
];

const INITIAL_INSTRUCTOR_QA = [
  {
    id: 'qa-1',
    student: '李經理 (momo 運營部)',
    question: '我們在導入 Agent 進行商品調撥時，如何防止 Agent 因為偏誤而超量採購？',
    reference: '企業級 Agentic AI 落地實務 - 模組一',
    solution: '【AI 講師解答】：\n1. 必須在 Agent 的推理環境中設置「硬性規則邊界」(Hard Guardrails)，例如單次調撥金額上限。\n2. 導入「人機協同審查機制」(Human-in-the-loop)，當調撥量偏離歷史預測值 20% 以上時，強制暫停並送交人工核准。\n3. 在 Prompt 中加入「失敗成本自檢」，要求 Agent 寫出調撥過量時的處置方案，從而降低盲目採購。'
  },
  {
    id: 'qa-2',
    student: '張處長 (全家系統規劃)',
    question: 'FamiPoints 想跟 7-11 OPENPOINT 一樣做跨業態點數抵用，但各公司的拆帳整合極難，有何建議？',
    reference: '生成式 AI 提示工程 - 模組三',
    solution: '【AI 講師解答】：\n1. 建議先採用「虛擬點數清算平台」架構，以 API 進行即時交易清算，不變動各子公司的財務系統底層。\n2. 首波僅在「高頻低毛利」商品（如咖啡、鮮食）實施抵用，由總部補貼初期匯差，驗證交叉帶貨率。\n3. 運用 AI 預測點數回收週期，評估點數折抵帶來的「實體店順便併買效應」，以數據說服獨立子公司。'
  },
  {
    id: 'qa-3',
    student: '陳特助 (全聯商品企劃)',
    question: '小時達生鮮揀貨的耗損率很高，AI 預測庫存真的能降低生鮮耗損嗎？',
    reference: '企業 RAG 知識庫 - 模組四',
    solution: '【AI 講師解答】：\n1. 能！但關鍵在於「氣象數據、節慶活動與歷史損耗」的融合預測。單純看銷售數據是不夠的。\n2. 實作上，可將 AI 庫存水位與「動態定價引擎」聯結。當 AI 發現某生鮮品項庫存預期會超量時，在小時達 App 自動推播即時折價券給熟客。\n3. 這就是 RAG 與即時預測 API 的協同應用，將預測準確率從傳統的 65% 提升至 88% 以上。'
  }
];

const INITIAL_INSTRUCTOR_NOTES = [
  { id: 'in-1', timestamp: new Date(Date.now() - 1000 * 60 * 120).toLocaleString(), content: '課堂互動靈感：\n講述「思維鏈 CoT」時，可以用「解答數學題前先寫下運算公式」做類比，學員最容易理解。另外，可用 momo 與全聯的小時達生鮮對決做為課堂 Sandbox 演練案例。' },
  { id: 'in-2', timestamp: new Date().toLocaleString(), content: '提示詞優化筆記：\n企業級 Agent 的 System Prompt 必須加入「你不能假設用戶擁有權限」的安全防禦語句。在 momo 內訓時，學員對於 API 越獄防禦的興趣非常高，下週課程可適度加深該部分。' }
];

// --- App State ---
const state = {
  tasks: [], // Unused action items, tasks placeholder
  metrics: [
    { title: '即時配送時效', value: '2.4 hrs', subtext: '<i class="fa-solid fa-caret-down" style="color: var(--color-success)"></i> 較上週縮短 0.3h' },
    { title: '都會區快配覆蓋率', value: '85.2%', subtext: '<i class="fa-solid fa-caret-up" style="color: var(--color-success)"></i> 當季提升 1.8%' },
    { title: '點數會員月活躍率', value: '72.4%', subtext: '<i class="fa-solid fa-caret-up" style="color: var(--color-success)"></i> 較上季增長 0.5%' },
    { title: '競業威脅綜合指數', value: '8.2 / 10', subtext: '<i class="fa-solid fa-triangle-exclamation" style="color: var(--color-danger)"></i> 處於高防守警戒' }
  ],
  competitorComparison: INITIAL_COMPETITOR_COMPARISON,
  notes: JSON.parse(localStorage.getItem('sr_notes')) || [{ id: 'n-1', timestamp: new Date().toLocaleString(), content: '集團戰略筆記：\\n隨時注意競業如全聯、momo等通路擴張的動態。' }],
  schedule: JSON.parse(localStorage.getItem('sr_schedule')) || INITIAL_GM_SCHEDULE,
  competitorIntel: INITIAL_COMPETITOR_INTEL, // Always refresh competitor feed
  majorIssues: INITIAL_MAJOR_ISSUES,
  activeTab: 'gm',
  
  // Multi-role State
  currentRole: 'instructor',
  activeCourseId: 'c-1',
  activeSandboxId: 'pt-1',
  instructorSchedule: JSON.parse(localStorage.getItem('sr_inst_schedule')) || INITIAL_INSTRUCTOR_SCHEDULE,
  instructorNotes: JSON.parse(localStorage.getItem('sr_inst_notes')) || INITIAL_INSTRUCTOR_NOTES,
  instructorQA: INITIAL_INSTRUCTOR_QA,

  // AI Instructor Sub-Tabs & Calendar State
  instSubTab: 'classroom', // 'classroom' | 'calendar'
  instCalendarView: 'week', // 'week' | 'month'
  isGoogleCalendarSynced: JSON.parse(localStorage.getItem('sr_google_synced')) || false,
  googleCalendarEvents: JSON.parse(localStorage.getItem('sr_google_events')) || [
    { id: 'ge-1', date: '2026-06-22', time: '10:00 - 12:00', title: 'Momo高階主管 AI 內訓', type: 'corporate' },
    { id: 'ge-2', date: '2026-06-24', time: '13:30 - 15:30', title: '全家零售 AI 創新論壇', type: 'public' },
    { id: 'ge-3', date: '2026-06-26', time: '16:00 - 18:00', title: '全聯智慧物流大會演講', type: 'public' },
    { id: 'ge-4', date: '2026-06-23', time: '14:00 - 16:00', title: '家樂福生鮮智慧供應鏈閉門會', type: 'corporate' },
    { id: 'ge-5', date: '2026-06-25', time: '09:00 - 12:00', title: '統一集團 AI 戰略對齊工作坊', type: 'corporate' },
    { id: 'ge-6', date: '2026-06-29', time: '10:00 - 12:00', title: 'Momo Quick-Commerce 履約演習', type: 'corporate' },
    { id: 'ge-7', date: '2026-06-30', time: '14:00 - 16:30', title: '蝦皮店到店免運策略分析座談', type: 'public' }
  ],

  // Sparring inputs
  dilemma: localStorage.getItem('sr_dilemma') || '',
  symptom: localStorage.getItem('sr_symptom') || '',
  coreProblem: localStorage.getItem('sr_core') || '',
  questions: JSON.parse(localStorage.getItem('sr_questions')) || [],
  
  // Sandtable Scores
  sandtable: JSON.parse(localStorage.getItem('sr_sandtable')) || {
    opt1: { opp: 3, cost: 2, risk: 2 },
    opt2: { opp: 6, cost: 5, risk: 4 },
    opt3: { opp: 9, cost: 8, risk: 7 }
  },
  
  // Devil's advocate dialog (Red Team)
  chatHistory: JSON.parse(localStorage.getItem('sr_chat')) || [],
  
  // Breathing
  meditation: {
    isRunning: false,
    ratio: 1.0,
    soundEnabled: false,
    intervalId: null,
    phases: [
      { type: 'inhale', text: '吸氣', baseSec: 4, class: 'inhale' },
      { type: 'holdIn', text: '屏息', baseSec: 4, class: 'hold' },
      { type: 'exhale', text: '呼氣', baseSec: 4, class: 'exhale' },
      { type: 'holdOut', text: '屏息', baseSec: 4, class: 'hold' }
    ],
    currentPhaseIdx: 0,
    remainingSeconds: 0
  }
};

// --- Web Audio Ocean Waves Synthesizer ---
let audio = {
  ctx: null,
  noiseNode: null,
  filterNode: null,
  gainNode: null,
  initialized: false
};

function initAudioContext() {
  if (audio.initialized) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audio.ctx = new AudioContext();
    
    const bufferSize = audio.ctx.sampleRate * 2;
    const noiseBuffer = audio.ctx.createBuffer(1, bufferSize, audio.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    audio.noiseNode = audio.ctx.createBufferSource();
    audio.noiseNode.buffer = noiseBuffer;
    audio.noiseNode.loop = true;
    
    audio.filterNode = audio.ctx.createBiquadFilter();
    audio.filterNode.type = 'lowpass';
    audio.filterNode.Q.value = 1.0;
    
    audio.gainNode = audio.ctx.createGain();
    audio.filterNode.frequency.setValueAtTime(200, audio.ctx.currentTime);
    audio.gainNode.gain.setValueAtTime(0, audio.ctx.currentTime);
    
    audio.noiseNode.connect(audio.filterNode);
    audio.filterNode.connect(audio.gainNode);
    audio.gainNode.connect(audio.ctx.destination);
    
    audio.noiseNode.start();
    audio.initialized = true;
  } catch (error) {
    console.error('Failed to initialize Web Audio:', error);
  }
}

function rampOceanSound(phaseType, durationSec) {
  if (!state.meditation.soundEnabled || !audio.initialized) return;
  if (audio.ctx.state === 'suspended') {
    audio.ctx.resume();
  }
  const now = audio.ctx.currentTime;
  switch (phaseType) {
    case 'inhale':
      audio.filterNode.frequency.exponentialRampToValueAtTime(650, now + durationSec);
      audio.gainNode.gain.linearRampToValueAtTime(0.07, now + durationSec);
      break;
    case 'holdIn':
      audio.filterNode.frequency.linearRampToValueAtTime(600, now + durationSec);
      audio.gainNode.gain.linearRampToValueAtTime(0.06, now + durationSec);
      break;
    case 'exhale':
      audio.filterNode.frequency.exponentialRampToValueAtTime(200, now + durationSec);
      audio.gainNode.gain.linearRampToValueAtTime(0.005, now + durationSec);
      break;
    case 'holdOut':
      audio.filterNode.frequency.linearRampToValueAtTime(200, now + durationSec);
      audio.gainNode.gain.linearRampToValueAtTime(0.002, now + durationSec);
      break;
  }
}

function muteOceanSound() {
  if (audio.initialized && audio.gainNode) {
    audio.gainNode.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + 0.5);
  }
}

// --- General Toast Notification ---
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' 
    ? '<i class="fa-solid fa-circle-check" style="color: var(--color-success)"></i>' 
    : '<i class="fa-solid fa-triangle-exclamation" style="color: var(--color-warning)"></i>';
  toast.innerHTML = `${icon}<span>${message}</span>`;
  dom.toastContainer.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '1'; }, 10);
  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Tab Switching Logic ---
function initTabs() {
  dom.trackerItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.dataset.tab;
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  state.activeTab = tabId;
  
  dom.trackerItems.forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabId);
  });
  
  dom.tabPanes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${tabId}`);
  });
  
  if (tabId === 'convergence') {
    compileDecisionBrief();
  }
  
  showToast(`切換至：${getTabLabelName(tabId)}`, 'success');
}

function getTabLabelName(tabId) {
  const names = {
    gm: '總經理特區',
    intro: '思維整流 (Clarity & Traps)',
    unit1: '核心重構 (Redefining)',
    unit2: '沙盤矩陣 (Sandtable)',
    unit3: '紅軍挑戰 (Red Teaming)',
    convergence: '決策備忘 (Executive Memo)'
  };
  return names[tabId] || tabId;
}

// --- Live Clock & Date Widget ---
function initClock() {
  function updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    dom.time.textContent = `${hrs}:${mins}:${secs}`;
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
    dom.date.textContent = `${year}/${month}/${date} 星期${dayNames[now.getDay()]}`;
    
    let greet = '總經理戰略決策室';
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) {
      greet = '總經理，晨光靜心，適合重構與三大競業的本質命題';
    } else if (hour >= 12 && hour < 14) {
      greet = '總經理，正午潮汐，建議調息呼吸以清除大腦雜訊';
    } else if (hour >= 14 && hour < 18) {
      greet = '總經理，午後攻堅，開啟沙盤矩陣對比競業機會與風險';
    } else if (hour >= 18 && hour < 23) {
      greet = '總經理，夜幕思考，檢視紅軍質詢結果與決策備忘';
    } else {
      greet = '總經理，深夜靜心，閉目調息，讓大腦邏輯自然沉澱';
    }
    dom.greeting.textContent = greet;
  }
  updateClock();
  setInterval(updateClock, 1000);
}

// --- Ocean Breathing Meditation ---
function initMeditation() {
  dom.meditationToggle.addEventListener('click', toggleMeditation);
  dom.meditationReset.addEventListener('click', resetMeditation);
  dom.btnSoundToggle.addEventListener('click', toggleSound);
  resetMeditationState();
}

function resetMeditationState() {
  const med = state.meditation;
  med.currentPhaseIdx = 0;
  med.remainingSeconds = Math.round(med.phases[med.currentPhaseIdx].baseSec * med.ratio);
  dom.breathingInstruction.textContent = '靜心調息';
  dom.breathingCountdown.textContent = med.remainingSeconds + 's';
  dom.breathingBall.className = 'breathing-ball';
}

function toggleMeditation() {
  const med = state.meditation;
  if (med.isRunning) {
    pauseMeditation();
    showToast('情境呼吸已暫停', 'warning');
  } else {
    initAudioContext();
    med.isRunning = true;
    dom.meditationToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
    dom.meditationToggle.classList.add('btn-secondary');
    showToast('啟動靜心引導，調節大腦缺氧焦慮', 'success');
    runBreathingCycle();
  }
}

function pauseMeditation() {
  const med = state.meditation;
  med.isRunning = false;
  clearInterval(med.intervalId);
  dom.meditationToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
  dom.meditationToggle.classList.remove('btn-secondary');
  muteOceanSound();
}

function resetMeditation() {
  pauseMeditation();
  resetMeditationState();
  showToast('引導呼吸已重設', 'warning');
}

function runBreathingCycle() {
  const med = state.meditation;
  clearInterval(med.intervalId);
  
  let phase = med.phases[med.currentPhaseIdx];
  let duration = Math.round(phase.baseSec * med.ratio);
  med.remainingSeconds = duration;
  
  dom.breathingBall.className = `breathing-ball ${phase.class}`;
  dom.breathingBall.style.transitionDuration = `${duration}s`;
  
  dom.breathingInstruction.textContent = phase.text;
  dom.breathingCountdown.textContent = med.remainingSeconds + 's';
  
  rampOceanSound(phase.type, duration);
  
  med.intervalId = setInterval(() => {
    med.remainingSeconds--;
    dom.breathingCountdown.textContent = med.remainingSeconds + 's';
    
    if (med.remainingSeconds <= 0) {
      clearInterval(med.intervalId);
      med.currentPhaseIdx = (med.currentPhaseIdx + 1) % med.phases.length;
      if (med.isRunning) {
        runBreathingCycle();
      }
    }
  }, 1000);
}

function toggleSound() {
  const med = state.meditation;
  med.soundEnabled = !med.soundEnabled;
  if (med.soundEnabled) {
    initAudioContext();
    dom.soundIcon.className = 'fa-solid fa-volume-high';
    dom.soundText.textContent = '潮汐聲播放中';
    showToast('模擬潮汐音效啟動', 'success');
    if (med.isRunning) {
      rampOceanSound(med.phases[med.currentPhaseIdx].type, med.remainingSeconds);
    }
  } else {
    dom.soundIcon.className = 'fa-solid fa-volume-xmark';
    dom.soundText.textContent = '潮汐聲已靜音';
    showToast('環境音效已靜音', 'warning');
    muteOceanSound();
  }
}

// --- GM Executive Center Dashboard Rendering ---
function renderGMWorkspace() {
  // Render Executive Metrics
  if (dom.executiveMetricsRow) {
    dom.executiveMetricsRow.innerHTML = '';
    state.metrics.forEach(metric => {
      const card = document.createElement('div');
      card.className = 'metric-card';
      card.innerHTML = `
        <span class="metric-card-title">${escapeHTML(metric.title)}</span>
        <span class="metric-card-value">${escapeHTML(metric.value)}</span>
        <span class="metric-card-subtext">${metric.subtext}</span>
      `;
      dom.executiveMetricsRow.appendChild(card);
    });
  }

  // Render Competitor Comparison Table
  if (dom.competitorComparisonTbody) {
    dom.competitorComparisonTbody.innerHTML = '';
    state.competitorComparison.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="padding: 0.6rem 0.8rem; text-align: left;">
          <div class="comp-dim-name">
            <i class="fa-solid ${row.icon}"></i>
            <span>${escapeHTML(row.dimension)}</span>
          </div>
        </td>
        <td style="padding: 0.6rem 0.8rem;" class="comp-col-highlight">
          <span class="comp-val-us">${escapeHTML(row.us.val)}</span>
          <span class="comp-desc">${escapeHTML(row.us.desc)}</span>
        </td>
        <td style="padding: 0.6rem 0.8rem;">
          <span style="font-weight: 700; color: var(--text-primary);">${escapeHTML(row.px.val)}</span>
          <span class="comp-desc">${escapeHTML(row.px.desc)}</span>
        </td>
        <td style="padding: 0.6rem 0.8rem;">
          <span style="font-weight: 700; color: var(--text-primary);">${escapeHTML(row.fm.val)}</span>
          <span class="comp-desc">${escapeHTML(row.fm.desc)}</span>
        </td>
        <td style="padding: 0.6rem 0.8rem;">
          <span style="font-weight: 700; color: var(--text-primary);">${escapeHTML(row.momo.val)}</span>
          <span class="comp-desc">${escapeHTML(row.momo.desc)}</span>
        </td>
        <td style="padding: 0.6rem 0.8rem;">
          <span style="font-weight: 700; color: var(--text-primary);">${escapeHTML(row.shopee.val)}</span>
          <span class="comp-desc">${escapeHTML(row.shopee.desc)}</span>
        </td>
      `;
      dom.competitorComparisonTbody.appendChild(tr);
    });
  }

  // Render Major Issues List
  dom.majorIssuesGrid.innerHTML = '';
  state.majorIssues.forEach(issue => {
    const card = document.createElement('div');
    card.className = 'issue-card';
    
    const badgeClass = issue.threat === 'high' ? 'badge-threat-high' : 'badge-threat-medium';
    const badgeLabel = issue.threat === 'high' ? '高威脅' : '中威脅';
    
    card.innerHTML = `
      <div class="issue-card-header">
        <span class="issue-title">${escapeHTML(issue.title)}</span>
        <span class="issue-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <div class="issue-description">${escapeHTML(issue.desc)}</div>
      <div class="issue-actions">
        <span class="issue-target"><i class="fa-solid fa-crosshairs"></i> 監測標的: ${issue.title.includes('全聯') ? '全聯' : issue.title.includes('全家') ? '全家' : 'Momo'}</span>
        <button class="btn-send-pipeline" data-id="${issue.id}">
          <i class="fa-solid fa-paper-plane"></i>
          傳送至決策管線
        </button>
      </div>
    `;
    
    // Bind Send to Pipeline Action
    card.querySelector('.btn-send-pipeline').addEventListener('click', () => {
      sendToDecisionPipeline(issue.id);
    });
    
    dom.majorIssuesGrid.appendChild(card);
  });
  
  // Render GM Schedule List
  renderGMSchedule();
  
  // Render Competitor Intel List
  renderCompetitorIntel();
}

function renderGMSchedule() {
  dom.gmScheduleList.innerHTML = '';
  state.schedule.forEach(item => {
    const div = document.createElement('div');
    div.className = `schedule-item ${item.checked ? 'completed' : ''}`;
    
    div.innerHTML = `
      <div class="schedule-checkbox ${item.checked ? 'checked' : ''}">
        ${item.checked ? '<i class="fa-solid fa-check"></i>' : ''}
      </div>
      <div class="schedule-text-container">
        <span class="schedule-time">${item.time}</span>
        <span class="schedule-title">${escapeHTML(item.title)}</span>
      </div>
    `;
    
    // Toggle Schedule Status
    div.addEventListener('click', () => {
      item.checked = !item.checked;
      saveToStorage('schedule', state.schedule);
      renderGMSchedule();
      showToast(`日程狀態已更新`, 'success');
    });
    
    dom.gmScheduleList.appendChild(div);
  });
}

function renderCompetitorIntel() {
  dom.competitorIntelList.innerHTML = '';
  state.competitorIntel.forEach(intel => {
    const div = document.createElement('div');
    div.className = 'competitor-card';
    
    const badgeClass = intel.alert === 'high' ? 'alert-high' : 'alert-medium';
    const alertLabel = intel.alert === 'high' ? 'HIGH ALERT' : 'MONITOR';
    
    div.innerHTML = `
      <div class="competitor-card-header">
        <span class="competitor-name">${escapeHTML(intel.name)}</span>
        <span class="competitor-alert ${badgeClass}">${alertLabel}</span>
      </div>
      <div class="competitor-news">${escapeHTML(intel.news)}</div>
    `;
    
    dom.competitorIntelList.appendChild(div);
  });
}

function sendToDecisionPipeline(issueId) {
  const issue = state.majorIssues.find(i => i.id === issueId);
  if (!issue) return;
  
  // Populate unit 1 text area and set preset select
  dom.dilemmaInput.value = issue.desc;
  
  // Update dropdown selection if preset matching competitor exists
  if (dom.casePresetSelect) {
    dom.casePresetSelect.value = issue.target;
    // Trigger case load
    loadPresetCase(issue.target);
  } else {
    state.dilemma = issue.desc;
    localStorage.setItem('sr_dilemma', issue.desc);
    dissectDilemma();
  }
  
  // Switch to problem redefining tab (unit1)
  switchTab('unit1');
  showToast(`已成功將議題載入決策管線，請解構本質問題！`, 'success');
}

// --- Unit 1: Problem Redefinition (Core Redefining) ---
function initUnit1() {
  if (dom.btnDissectDilemma) {
    dom.btnDissectDilemma.addEventListener('click', dissectDilemma);
  }
  if (state.dilemma && dom.dilemmaInput) {
    dom.dilemmaInput.value = state.dilemma;
    displayDissectionResults();
  }
}

function dissectDilemma() {
  const input = dom.dilemmaInput.value.trim();
  if (!input) {
    showToast('請先輸入您的決策困境命題！', 'warning');
    return;
  }
  
  state.dilemma = input;
  localStorage.setItem('sr_dilemma', input);
  
  // GM competitive strategic analysis
  if (input.includes('全聯') || input.includes('pxmart') || input.includes('生鮮')) {
    state.symptom = "聚焦於家樂福『生鮮採購品項折扣與全聯拼價格』的實體量販戰場，忽略全聯以生鮮小時達電商大舉掠奪社區家庭即時補給份額的維度打擊。";
    state.coreProblem = "本質核心命題：如何整合 7-11 門市網與家樂福生鮮冷鏈物流，重塑集團的「同城即時生鮮配送綜效」，並利用 OPENPOINT 點數生態剛性圈對抗全聯的小時達用戶黏著度？";
    state.questions = [
      "若將家樂福前置倉與都會區 7-11 快快送物流共用，生鮮冷鏈履約成本能降低多少？",
      "全聯小時達的核心痛點是實體店揀貨效率，我們如何利用 OPENPOINT 點數跨通路（如康是美、星巴克）折抵，強力搶佔其生鮮主力客群？",
      "在非都會區，我們是否應避開昂貴的生鮮直營，改以家樂福B2B生鮮批發與 7-11 社區智FUN機複合店型進行防禦？"
    ];
  } else if (input.includes('全家') || input.includes('familymart') || input.includes('點數')) {
    state.symptom = "將便利商店競爭窄化為『網紅聯名食品』或『智能零售硬體模仿』，陷入 7-11 與全家單店銷售及門市數量的紅海拉鋸戰。";
    state.coreProblem = "本質核心命題：如何透過跨越 7-11、星巴克、康是美、家樂福的跨業態「OPENPOINT 終身顧客價值 (CLV)」大數據變現，創造全家單一超商體系完全無法複製的護城河？";
    state.questions = [
      "全家智取櫃核心是降低店內人力負擔，我們如何以「智FUN機」在封閉商辦與校園宿舍等高毛利封閉市場取得獨佔？",
      "OPENPOINT 能否在 3 個月內推出涵蓋外送免運費與現煮咖啡折扣的剛性付費訂閱制，以徹底鎖定高端超商熟客？",
      "在零售媒體廣告網絡 (RMN) 的投資上，我們如何在保障加盟主利益的前提下，將跨通路大數據廣告利潤分潤回饋店東？"
    ];
  } else if (input.includes('Momo') || input.includes('momo') || input.includes('電商')) {
    state.symptom = "將電商威脅窄化為『實體商品上架線上商城』，忽略了消費者快消品採購的「時效性」競爭正在從『隔日達』轉向『小時達/分鐘達』。";
    state.coreProblem = "本質核心命題：面對 momo 衛星短鏈倉儲，我們如何將全台 6700+ 家 7-11 實體門市的後倉，重構為同城極速配送的「前置履約中心 (Micro-fulfillment Center)」？";
    state.questions = [
      "momo 實測都會區 3小時極速達，我們如何利用 7-11 門市地理優勢，在 30分鐘內完成日用快消品揀貨與同城配送？",
      "與電商的低價戰相比，我們實體店提供「即刻體驗」、「店取退換貨」與「現製熱食」的非對稱優勢該如何結構性放大？",
      "在集團的「快商務 (Q-Commerce)」佈局中，外送抽成、物流店配與門市揀貨人力的損益平衡點具體在何處？"
    ];
  } else if (input.includes('蝦皮') || input.includes('shopee') || input.includes('店到店')) {
    state.symptom = "聚焦於『包裹手續費打折或單純增加店員寄取件速度』以防守包裹份額，忽略蝦皮店到店已發展為具備前置倉與宅配功能之實體物流網絡。";
    state.coreProblem = "本質核心命題：如何利用我們 7-11 門市的實體密度，轉化為提供『24小時即時寄取、店配同城快寄、跨業態 OPENPOINT 點數剛性折抵』的非對稱快遞服務，以反吞噬蝦皮的高頻用戶？";
    state.questions = [
      "蝦皮店到店營業時間受限於 11:30-22:30，我們 7-11 超商 24小時營業的便利性如何結構性變現？",
      "若與其他大型電商平台（如PChome、Yahoo、露天）結盟，推出免運補貼與專屬 7-11 快速寄取櫃，能多大程度對沖蝦皮的流失？",
      "店內取件顧客的『順便併買率』達 22%，如何運用智能推播與點數卡，將取件人流精準導流至 7-11 鮮食與咖啡消費？"
    ];
  } else {
    state.symptom = "陷入『做或不做』的手段二元論，嘗試用『增加預算投入』來緩解競業大舉入侵所帶來的通路焦慮。";
    state.coreProblem = "本質核心命題：統一集團該項決策背後，默認且不能倒塌的第一性原理 (First Principle) 假設是什麼？目前利害關係人數據是否證實該假設正在發生偏移？";
    state.questions = [
      "若我們在未來 12 個月內主動選擇對此競業動作『什麼都不做』，客觀的最壞戰略後果是什麼？",
      "有什麼低成本、小範圍的最小可行性實驗 (MVE) 能在 2 週內證實我們的預判？",
      "如果這是一筆完全失敗的戰略押注，最先受創的是公司的資產平衡表，還是集團跨業態生態圈的信任度？"
    ];
  }
  
  localStorage.setItem('sr_symptom', state.symptom);
  localStorage.setItem('sr_core', state.coreProblem);
  localStorage.setItem('sr_questions', JSON.stringify(state.questions));
  
  displayDissectionResults();
  showToast('決策本質重構剖析完成！', 'success');
}

function displayDissectionResults() {
  dom.symptomText.textContent = state.symptom;
  dom.coreText.textContent = state.coreProblem;
  dom.dissectionResultsPanel.style.display = 'grid';
  
  dom.interrogationQuestionsList.innerHTML = '';
  state.questions.forEach(q => {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `<i class="fa-solid fa-circle-question" style="color: var(--accent-cyan); margin-right: 0.5rem;"></i>${escapeHTML(q)}`;
    dom.interrogationQuestionsList.appendChild(div);
  });
  dom.interrogationQuestionsPanel.style.display = 'block';
}

// --- Unit 2: Three-Option Sandtable Sliders & Presets ---
function initUnit2() {
  if (dom.casePresetSelect) {
    dom.casePresetSelect.addEventListener('change', (e) => {
      const presetKey = e.target.value;
      loadPresetCase(presetKey);
    });
  }
  
  if (dom.optSliders) {
    dom.optSliders.forEach(slider => {
      slider.addEventListener('input', (e) => {
        const option = e.target.dataset.option;
        const metric = e.target.dataset.metric;
        const val = parseInt(e.target.value);
        
        const badge = document.getElementById(`val-${option}-${metric}`);
        if (badge) badge.textContent = val;
        
        state.sandtable[option][metric] = val;
        saveToStorage('sandtable', state.sandtable);
        
        updateSandtableData();
      });
    });
  }
  
  updateSlidersUI();
  updateSandtableData();
}

function loadPresetCase(presetKey) {
  const caseData = CASE_PRESETS[presetKey];
  if (!caseData) return;
  
  if (caseData.dilemma) {
    dom.dilemmaInput.value = caseData.dilemma;
    state.dilemma = caseData.dilemma;
    localStorage.setItem('sr_dilemma', caseData.dilemma);
    dissectDilemma();
  }
  
  dom.opt1Title.textContent = caseData.opt1.title;
  dom.opt2Title.textContent = caseData.opt2.title;
  dom.opt3Title.textContent = caseData.opt3.title;
  
  state.sandtable.opt1 = { ...caseData.opt1 };
  state.sandtable.opt2 = { ...caseData.opt2 };
  state.sandtable.opt3 = { ...caseData.opt3 };
  saveToStorage('sandtable', state.sandtable);
  
  updateSlidersUI();
  updateSandtableData();
  showToast(`已載入決策案例：${dom.casePresetSelect.options[dom.casePresetSelect.selectedIndex].text}`, 'success');
}

function updateSlidersUI() {
  Object.keys(state.sandtable).forEach(option => {
    const metrics = state.sandtable[option];
    Object.keys(metrics).forEach(metric => {
      const val = metrics[metric];
      const slider = document.getElementById(`slider-${option}-${metric}`);
      if (slider) slider.value = val;
      const badge = document.getElementById(`val-${option}-${metric}`);
      if (badge) badge.textContent = val;
    });
  });
}

function updateSandtableData() {
  const opt1Ratio = (state.sandtable.opt1.opp / Math.max(state.sandtable.opt1.cost, 1)).toFixed(2);
  const opt2Ratio = (state.sandtable.opt2.opp / Math.max(state.sandtable.opt2.cost, 1)).toFixed(2);
  const opt3Ratio = (state.sandtable.opt3.opp / Math.max(state.sandtable.opt3.cost, 1)).toFixed(2);
  
  dom.descOpt1Ratio.textContent = opt1Ratio;
  dom.descOpt2Ratio.textContent = opt2Ratio;
  dom.descOpt3Ratio.textContent = opt3Ratio;
  
  renderSandtableChart();
}

function renderSandtableChart() {
  const opt1 = state.sandtable.opt1;
  const opt2 = state.sandtable.opt2;
  const opt3 = state.sandtable.opt3;
  
  const svgWidth = 280;
  const svgHeight = 130;
  const paddingX = 40;
  const paddingY = 15;
  const barHeight = 16;
  const spacing = 12;
  const maxScore = 10;
  const chartWidth = svgWidth - paddingX - 15;
  
  let barsHtml = `
    <defs>
      <linearGradient id="grad-opt1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7371fc" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="var(--accent-purple)"/>
      </linearGradient>
      <linearGradient id="grad-opt2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="var(--accent-cyan)"/>
      </linearGradient>
      <linearGradient id="grad-opt3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff007f" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="var(--accent-pink)"/>
      </linearGradient>
    </defs>
  `;
  
  const gridDivisions = 5;
  for (let i = 0; i <= gridDivisions; i++) {
    const xVal = paddingX + (chartWidth / gridDivisions) * i;
    const gridScore = (maxScore / gridDivisions) * i;
    barsHtml += `
      <line x1="${xVal}" y1="${paddingY}" x2="${xVal}" y2="${svgHeight - paddingY - 10}" stroke="rgba(15, 23, 42, 0.05)" stroke-width="1" stroke-dasharray="3,3"></line>
      <text x="${xVal}" y="${svgHeight - 4}" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="7" text-anchor="middle">${gridScore}</text>
    `;
  }
  
  const optionsList = [
    { key: 'opt1', label: '保守方案', data: opt1, grad: 'url(#grad-opt1)' },
    { key: 'opt2', label: '改善方案', data: opt2, grad: 'url(#grad-opt2)' },
    { key: 'opt3', label: '突破方案', data: opt3, grad: 'url(#grad-opt3)' }
  ];
  
  optionsList.forEach((opt, idx) => {
    const yVal = paddingY + (barHeight + spacing) * idx * 1.5;
    const avgScore = ((opt.data.opp + opt.data.cost + opt.data.risk) / 3).toFixed(1);
    const barWidth = (avgScore / maxScore) * chartWidth;
    
    barsHtml += `
      <text x="${paddingX - 8}" y="${yVal + barHeight / 2 + 3}" fill="var(--text-secondary)" font-size="8" font-weight="700" text-anchor="end">${opt.label}</text>
      <rect x="${paddingX}" y="${yVal}" width="${chartWidth}" height="${barHeight}" rx="4" fill="rgba(15,23,42,0.02)"></rect>
      <rect class="svg-chart-bar" x="${paddingX}" y="${yVal}" width="${barWidth}" height="${barHeight}" rx="4" fill="${opt.grad}"></rect>
      <text x="${paddingX + barWidth + 4}" y="${yVal + barHeight / 2 + 3}" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="8" font-weight="700">${avgScore}</text>
    `;
  });
  
  dom.sandtableChart.innerHTML = barsHtml;
}

// --- Unit 3: Devil's Advocate Chat Simulator (Red Team) ---
function initUnit3() {
  if (dom.btnTriggerChallenge) {
    dom.btnTriggerChallenge.addEventListener('click', triggerChallenge);
  }
  if (state.chatHistory.length > 0) {
    renderChat();
  }
}

function triggerChallenge() {
  const optionKey = dom.advocateOptionSelect.value;
  const optTitle = document.getElementById(`${optionKey}-title`).textContent;
  const scores = state.sandtable[optionKey];
  
  const userMessage = {
    sender: 'user',
    content: `啟動紅軍防守質詢：挑戰 [${optTitle}]（機會：${scores.opp}、代價：${scores.cost}、風險：${scores.risk}）。請指出最致命的盲點。`
  };
  state.chatHistory.push(userMessage);
  
  let botReply = '';
  const currentDilemma = state.dilemma.toLowerCase();
  
  if (currentDilemma.includes('全聯') || currentDilemma.includes('pxmart')) {
    // PX Mart response
    if (optionKey === 'opt1') {
      botReply = `【紅軍挑戰 - 保守方案質詢 (對抗全聯)】\n『${optTitle}』僅聚焦於實體店的流程折扣，評估代價僅有 ${scores.cost}。紅軍警告：這完全是防守量販店的基本盤，根本無法阻擋全聯「小時達」的生鮮配送對傳統社區採購的替代。如果我們不利用 7-11 的門市網絡進行「前置倉聯防」，家樂福的生鮮流失將不可逆。我們是否正在因害怕前期重組冷鏈的昂貴代價，而默許核心市佔率被全聯溫水煮青蛙？`;
    } else if (optionKey === 'opt2') {
      botReply = `【紅軍挑戰 - 改善方案質詢 (對抗全聯)】\n選擇『${optTitle}』建立 7-11 與家樂福前置倉共用，機會為 ${scores.opp}，代價為 ${scores.cost}。紅軍的質詢是：『共用倉的組織邊界與加盟商利益分配如何擺平？』便利商店的加盟店東是否會抗拒大型生鮮前置倉進駐門市後院？這是否會演變成集團內耗，最終系統雖通、物流雖建，但一線門市執行率低落？`;
    } else {
      botReply = `【紅軍挑戰 - 突破方案質詢 (對抗全聯)】\n全面補貼與重組點數『${optTitle}』代價高達 ${scores.cost}。紅軍的 Pre-mortem（失敗預警）：如果全聯與 PXPay 發起跟進補貼，我們的點數補貼將演變成利潤黑洞。若家樂福的生鮮耗損率在補貼期間未能從 12% 降到 5% 以下，這個龐大投資將完全虧空集團的利潤。我們的資金帶寬是否支持這場點數消耗戰？`;
    }
  } else if (currentDilemma.includes('全家') || currentDilemma.includes('familymart')) {
    // FamilyMart response
    if (optionKey === 'opt1') {
      botReply = `【紅軍挑戰 - 保守方案質詢 (對抗全家)】\n單純推出食品與聯名咖啡『${optTitle}』是極易被模仿的紅海戰術，機會僅為 ${scores.opp}。全家在聯名行銷上的反應速度並不落後於 7-11。如果全家在 2 週內推出同質商品，我們付出的行銷代價是否會付諸流水？這是否顯示我們缺乏核心的、不可複製的數據或業態護城河？`;
    } else if (optionKey === 'opt2') {
      botReply = `【紅軍挑戰 - 改善方案質詢 (對抗全家)】\n佈署智FUN機『${optTitle}』以阻隔全家，風險為 ${scores.risk}。紅軍質詢：智FUN機的設備折舊與每日補貨物流成本非常高昂。如果在一個商辦大樓內，每日交易筆數未能達到損益平衡點，這個防守網是否會變成持續失血的資產負債包袱？`;
    } else {
      botReply = `【紅軍挑戰 - 突破方案質詢 (對抗全家)】\n推出跨通路付費訂閱制生態圈『${optTitle}』是一步險棋。機會 ${scores.opp}、風險 ${scores.risk}。紅軍 Pre-mortem 警告：康是美、星巴克與家樂福的加盟與直營結構極度複雜。如何說服星巴克與康是美獨立公司接受 OPENPOINT 訂閱的跨平台拆帳？若系統上線後整合繁瑣、體驗差，是否會反而砸毀了 OPENPOINT 既有的跨通路信任品牌？`;
    }
  } else if (currentDilemma.includes('momo') || currentDilemma.includes('電商')) {
    // Momo response
    if (optionKey === 'opt1') {
      botReply = `【紅軍挑戰 - 保守方案質詢 (對抗 Momo)】\n調整實體商品陳列『${optTitle}』機會僅 ${scores.opp}。這完全是「以實體舊邏輯對抗數字新物流」。Momo 搶佔的是「足不出戶的即時履約需求」，您調整再多門市陳列，也無法阻止消費者在辦公桌前下單 momo 極速配。此方案的盲點是把「微調實體陳列」當作安全避風港，忽略了整個消費習慣的結構性飄移。`;
    } else if (optionKey === 'opt2') {
      botReply = `【紅軍挑戰 - 改善方案質詢 (對抗 Momo)】\n利用 7-11 作為前置快配倉『${optTitle}』代價為 ${scores.cost}。紅軍質詢：7-11 門市黃金店面空間極其有限，後倉無法容納快配所需的大量日用日消備貨。若揀貨工作完全轉嫁給店員，會否導致店員勞務崩潰，使門市現煮咖啡與繳費等高毛利核心服務的體驗大幅下滑？`;
    } else {
      botReply = `【紅軍挑戰 - 突破方案質詢 (對抗 Momo)】\n自建極速同城物流『${optTitle}』風險達 ${scores.risk}。紅軍 Pre-mortem：這需要整合快遞與超商配送，是一場極近於重資產的物流戰。如果超商的快商務外送抽成比率與物流司機薪資持續高漲，在 momo 既有規模經濟的運力優勢壓制下，我們的每一單配送是否都在持續貼錢？如果 1 年內未能搶下 momo 5% 的快消品份額，集團的資金鏈退場閥具體在哪？`;
    }
  } else {
    // Default response
    if (optionKey === 'opt1') {
      botReply = `【紅軍挑戰 - 保守方案質詢】\n『${optTitle}』的代價較低，但您的機會評分僅有 ${scores.opp}。您是否正在以「成本優化」來掩蓋「對手即將顛覆市場」的實質威脅？此路徑最大的盲點是：把「什麼都不做」誤認為是「最安全的做法」，實質上面臨的是核心利潤被溫水煮青蛙的危機。`;
    } else if (optionKey === 'opt2') {
      botReply = `【紅軍挑戰 - 改善方案質詢】\n『${optTitle}』看似平穩，是中庸的選擇。然而您評估代價為 ${scores.cost}、風險為 ${scores.risk}。這種方案最容易陷入『兩頭不到岸』的妥協陷阱。因為沒有全面推翻舊流程，新購置的軟體系統極大機率被舊有的工作習慣和行政流程架空，最終流於形式。`;
    } else {
      botReply = `【紅軍挑戰 - 突破方案質詢】\n突破方案『${optTitle}』擁有高達 ${scores.opp} 的機會回報，但代價 ${scores.cost} 與風險 ${scores.risk} 雙雙逼近極限。這可能是一個組織無法承受的豪賭。請列出您預判的 3 個致命崩潰場景，並明確寫入預備案中。`;
    }
  }
  
  const botMessage = {
    sender: 'bot',
    content: botReply
  };
  state.chatHistory.push(botMessage);
  saveToStorage('chat', state.chatHistory);
  renderChat();
  showToast('紅軍挑戰質詢分析已發布！', 'warning');
}

function renderChat() {
  dom.advocateChatMessages.innerHTML = '';
  state.chatHistory.forEach(msg => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${msg.sender}`;
    const label = msg.sender === 'user' ? '總經理 (Commander)' : '紅軍挑戰 (Red Team)';
    bubble.innerHTML = `
      <span class="bubble-sender">${label}</span>
      <div style="white-space: pre-wrap;">${escapeHTML(msg.content)}</div>
    `;
    dom.advocateChatMessages.appendChild(bubble);
  });
  dom.advocateChatMessages.scrollTop = dom.advocateChatMessages.scrollHeight;
}

// --- Unit 4: Convergence (Amazon-style Executive briefing Compiler) ---
function compileDecisionBrief() {
  const hasDilemma = !!state.dilemma;
  if (!hasDilemma) {
    dom.briefPrintContent.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding-top: 5rem;">
        尚未輸入決策挑戰。請先回到 **「總經理特區」** 選取議題傳送，或在 **「核心重構」** 中輸入困境。
      </div>
    `;
    return;
  }
  
  const now = new Date().toLocaleString();
  const opt1 = state.sandtable.opt1;
  const opt2 = state.sandtable.opt2;
  const opt3 = state.sandtable.opt3;
  
  const opt1Title = dom.opt1Title.textContent;
  const opt2Title = dom.opt2Title.textContent;
  const opt3Title = dom.opt3Title.textContent;
  
  let challengeSection = '無挑戰記錄';
  const chatReplies = state.chatHistory.filter(msg => msg.sender === 'bot');
  if (chatReplies.length > 0) {
    challengeSection = chatReplies.map((r, i) => `<li style="margin-bottom: 0.6rem;"><strong>挑戰觀點 ${i+1}：</strong> ${escapeHTML(r.content)}</li>`).join('');
  }
  
  dom.briefPrintContent.innerHTML = `
    <div class="brief-print-container">
      <div class="brief-print-header">
        <div class="brief-print-title">總經理 戰略決策備忘錄 (Executive Memo)</div>
        <div class="brief-print-meta">機密存檔 | 呈送董事會/戰略委員會</div>
      </div>
      
      <div class="brief-section-item">
        <div class="brief-section-title">1. 戰略挑戰命題 (The Dilemma Context)</div>
        <div class="brief-section-body" style="font-weight: 600;">${escapeHTML(state.dilemma)}</div>
      </div>
      
      <div class="brief-section-item">
        <div class="brief-section-title">2. 問題本質重構剖析 (Problem Redefinition)</div>
        <div class="brief-section-body">
          <p style="margin-bottom: 0.4rem;"><strong>表面現象 (Symptom)：</strong>${escapeHTML(state.symptom)}</p>
          <p><strong>核心本質命題 (Root Cause)：</strong>${escapeHTML(state.coreProblem)}</p>
        </div>
      </div>
      
      <div class="brief-section-item">
        <div class="brief-section-title">3. 策略沙盤矩陣分值對比 (The Options Matrix)</div>
        <div class="brief-section-body">
          <table style="width: 100%; font-size: 0.8rem; border-collapse: collapse; margin-top: 0.5rem; background: rgba(255,255,255,0.7);">
            <thead>
              <tr style="background: rgba(15, 23, 42, 0.05); text-align: left; font-weight: 700;">
                <th style="padding: 0.45rem; border: 1px solid #cbd5e1;">方案路徑</th>
                <th style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">機會</th>
                <th style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">代價</th>
                <th style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">風險</th>
                <th style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">機會/代價比</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1;"><strong>保守：</strong>${escapeHTML(opt1Title)}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt1.opp}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt1.cost}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt1.risk}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center; font-weight: 700; color: var(--accent-purple);">${(opt1.opp / Math.max(opt1.cost, 1)).toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1;"><strong>改善：</strong>${escapeHTML(opt2Title)}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt2.opp}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt2.cost}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt2.risk}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center; font-weight: 700; color: var(--accent-purple);">${(opt2.opp / Math.max(opt2.cost, 1)).toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1;"><strong>突破：</strong>${escapeHTML(opt3Title)}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt3.opp}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt3.cost}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center;">${opt3.risk}</td>
                <td style="padding: 0.45rem; border: 1px solid #cbd5e1; text-align: center; font-weight: 700; color: var(--accent-purple);">${(opt3.opp / Math.max(opt3.cost, 1)).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="brief-section-item">
        <div class="brief-section-title">4. 紅軍質詢與失敗預言 (Red Teaming pre-mortem)</div>
        <div class="brief-section-body">
          <ul style="padding-left: 1.1rem; margin-top: 0.35rem;">
            ${challengeSection}
          </ul>
        </div>
      </div>
      
      <div class="brief-section-item">
        <div class="brief-section-title">5. 集團核心假設與驗證計畫 (Hypothesis Testing Protocol)</div>
        <div class="brief-section-body">
          為避免盲目推進重資產投資，總經理裁示執行以下前置驗證：
          <ul style="padding-left: 1.1rem; margin-top: 0.35rem;">
            <li><strong>跨業整合驗證</strong>：針對共用前置倉生鮮損耗率，以試點門市進行為期 2 週的 MVE 實測。</li>
            <li><strong>數據生態變現測量</strong>：廣告 RMN 系統開發前，先以配送包裝與聯名版位進行人工銷售，驗證外部廣告商之付費意願。</li>
            <li><strong>快商務運力驗證</strong>：實測快快送 30分鐘達的每單平均揀貨時間，嚴密劃定門市正職人員與外包外送司機的摩擦邊界。</li>
          </ul>
        </div>
      </div>
      
    </div>
  `;
}

// --- Right Sidebar Notes Management ---
function renderNotes() {
  dom.notesList.innerHTML = '';
  const query = dom.notesSearch.value.toLowerCase().trim();
  const filtered = state.notes.filter(n => n.content.toLowerCase().includes(query));
  
  if (filtered.length === 0) {
    dom.notesList.innerHTML = '<div style="color: var(--text-muted); font-size: 0.8rem; text-align: center; margin-top: 1rem;">無符合筆記</div>';
    return;
  }
  
  filtered.forEach(note => {
    const item = document.createElement('div');
    item.className = 'note-item';
    item.innerHTML = `
      <div class="note-header">
        <span class="note-time">${note.timestamp}</span>
        <button class="note-delete" data-id="${note.id}" title="清除筆記">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <div class="note-content">${escapeHTML(note.content)}</div>
    `;
    item.querySelector('.note-delete').addEventListener('click', () => deleteNote(note.id));
    dom.notesList.appendChild(item);
  });
}

function addNote(text) {
  if (!text.trim()) return;
  const newNote = {
    id: 'note-' + Date.now(),
    timestamp: new Date().toLocaleString(),
    content: text.trim()
  };
  state.notes.unshift(newNote);
  saveToStorage('notes', state.notes);
  renderNotes();
  showToast('決策脈絡筆記已更新', 'success');
}

function deleteNote(id) {
  state.notes = state.notes.filter(n => n.id !== id);
  saveToStorage('notes', state.notes);
  renderNotes();
  showToast('筆記已清除', 'warning');
}

// --- Copy & Export Report Helpers ---
function initExportButtons() {
  if (dom.btnExportCopy) {
    dom.btnExportCopy.addEventListener('click', () => {
      if (dom.briefPrintContent) {
        const reportText = dom.briefPrintContent.innerText;
        navigator.clipboard.writeText(reportText).then(() => {
          showToast('決策備忘錄已複製到剪貼簿！', 'success');
        }).catch(err => {
          console.error('Copy failed:', err);
          showToast('複製失敗，請手動複製', 'warning');
        });
      }
    });
  }
  
  if (dom.btnExportPrint) {
    dom.btnExportPrint.addEventListener('click', () => {
      window.print();
    });
  }
}

// --- General HTML Helpers ---
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

function saveToStorage(key, value) {
  localStorage.setItem('sr_' + key, JSON.stringify(value));
}

// --- Role Switcher Logic ---
function initRoleSwitcher() {
  if (dom.btnModeExecutive && dom.btnModeInstructor) {
    dom.btnModeExecutive.addEventListener('click', () => switchRole('executive'));
    dom.btnModeInstructor.addEventListener('click', () => switchRole('instructor'));
  }
  
  // Set initial state
  switchRole(state.currentRole, true);
}

function switchRole(role, isInitial = false) {
  state.currentRole = role;
  localStorage.setItem('sr_role', role);

  // Toggle active button class
  if (dom.btnModeExecutive) dom.btnModeExecutive.classList.toggle('active', role === 'executive');
  if (dom.btnModeInstructor) dom.btnModeInstructor.classList.toggle('active', role === 'instructor');

  // Toggle layout display
  if (role === 'executive') {
    if (dom.layoutExecutive) dom.layoutExecutive.style.display = 'block';
    if (dom.layoutInstructor) dom.layoutInstructor.style.display = 'none';
    
    // Header UI brand updates
    if (dom.headerBrandTitle) dom.headerBrandTitle.textContent = "總經理 戰略決策室";
    if (dom.headerBrandLogo) dom.headerBrandLogo.innerHTML = '<i class="fa-solid fa-user-tie"></i>';
    if (dom.statusTitle) dom.statusTitle.textContent = "決策模式";
    if (dom.statusDesc) dom.statusDesc.textContent = "戰略沙盤推演中";
    
    // Dark tactical operations room background
    document.body.classList.add('dark-theme');
    document.body.style.backgroundImage = "none";
    
    renderGMWorkspace();
    renderNotes();
    if (!isInitial) {
      showToast("切換至：集團總經理模式", "success");
    }
  } else {
    if (dom.layoutExecutive) dom.layoutExecutive.style.display = 'none';
    if (dom.layoutInstructor) dom.layoutInstructor.style.display = 'block';
    
    // Header UI brand updates
    if (dom.headerBrandTitle) dom.headerBrandTitle.textContent = "AI 講師 知識大腦工作台";
    if (dom.headerBrandLogo) dom.headerBrandLogo.innerHTML = '<i class="fa-solid fa-chalkboard-user"></i>';
    if (dom.statusTitle) dom.statusTitle.textContent = "教學模式";
    if (dom.statusDesc) dom.statusDesc.textContent = "課堂互動與沙盒演示中";
    
    // Mountain view body background
    document.body.classList.remove('dark-theme');
    document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), url('bright_mountain_sea.png')";
    
    renderInstructorWorkspace();
    renderInstructorNotes();
    
    // Auto-fill template if not already filled
    const activeTemplate = INITIAL_INSTRUCTOR_SANDBOX_TEMPLATES.find(t => t.id === state.activeSandboxId);
    if (activeTemplate && dom.instructorPromptInput && !dom.instructorPromptInput.value) {
      dom.instructorPromptInput.value = activeTemplate.template;
    }
    
    if (!isInitial) {
      showToast("切換至：AI 講師工作台模式", "success");
    }
  }
}

// --- AI Instructor Workspace Functions ---
function renderInstructorWorkspace() {
  // 1. Render Course List
  if (dom.instructorCourseList) {
    dom.instructorCourseList.innerHTML = '';
    INITIAL_INSTRUCTOR_COURSES.forEach(course => {
      const item = document.createElement('div');
      const isActive = course.id === state.activeCourseId;
      item.className = `tracker-item ${isActive ? 'active' : ''}`;
      item.innerHTML = `
        <span class="tracker-badge">${course.duration}</span>
        <span>${escapeHTML(course.title)}</span>
      `;
      item.addEventListener('click', () => {
        selectCourse(course.id);
      });
      dom.instructorCourseList.appendChild(item);
    });
  }

  // 2. Render Sandbox Template List
  if (dom.instructorSandboxList) {
    dom.instructorSandboxList.innerHTML = '';
    INITIAL_INSTRUCTOR_SANDBOX_TEMPLATES.forEach(template => {
      const item = document.createElement('div');
      const isActive = template.id === state.activeSandboxId;
      item.className = `tracker-item ${isActive ? 'active' : ''}`;
      item.innerHTML = `
        <span class="tracker-badge"><i class="fa-solid fa-code"></i></span>
        <span>${escapeHTML(template.name)}</span>
      `;
      item.addEventListener('click', () => {
        selectSandbox(template.id);
      });
      dom.instructorSandboxList.appendChild(item);
    });
  }

  // 3. Render Active Syllabus
  const activeCourse = INITIAL_INSTRUCTOR_COURSES.find(c => c.id === state.activeCourseId);
  if (activeCourse && dom.instructorActiveCourseTitle) {
    dom.instructorActiveCourseTitle.textContent = activeCourse.title;
    dom.instructorActiveCourseDuration.textContent = activeCourse.duration;
    dom.instructorSyllabusContent.innerHTML = activeCourse.syllabus;
  }

  // 4. Render Student Q&A Board
  if (dom.instructorQAGrid) {
    dom.instructorQAGrid.innerHTML = '';
    state.instructorQA.forEach(qa => {
      const card = document.createElement('div');
      card.className = 'issue-card';
      
      const badgeClass = qa.solved ? 'badge-status-solved' : 'badge-status-unsolved';
      const badgeLabel = qa.solved ? '已解答' : '未解答';
      
      card.innerHTML = `
        <div class="issue-card-header">
          <span class="issue-title" style="color: var(--text-primary); font-weight: 700;">
            <i class="fa-solid fa-graduation-cap" style="color: var(--accent-cyan); margin-right: 0.4rem;"></i>
            學員 ${escapeHTML(qa.student)} 提問
          </span>
          <span class="issue-badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="issue-description" style="font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
          「${escapeHTML(qa.question)}」
        </div>
        <div class="issue-target" style="font-size: 0.72rem; color: var(--accent-purple); font-weight: 600;">
          <i class="fa-solid fa-book-open"></i> 關聯課程模組: ${escapeHTML(qa.reference)}
        </div>
        ${qa.solved ? `
        <div class="competitor-news" style="margin-top: 0.6rem; background: rgba(15, 23, 42, 0.04); border-left: 3px solid var(--accent-purple); padding: 0.75rem; border-radius: 8px; font-size: 0.78rem; line-height: 1.5; white-space: pre-wrap; color: var(--text-secondary);">
          ${escapeHTML(qa.solution)}
        </div>` : ''}
        <div class="issue-actions" style="margin-top: 0.6rem; border-top: 1px dashed rgba(255,255,255,0.3); padding-top: 0.5rem;">
          <span></span>
          <button class="btn-send-pipeline btn-solve-qa" style="background: ${qa.solved ? 'var(--accent-purple)' : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))'}; color:#fff; border:none;" data-id="${qa.id}">
            <i class="fa-solid ${qa.solved ? 'fa-eye-slash' : 'fa-wand-magic-sparkles'}"></i>
            ${qa.solved ? '隱藏解答' : '生成解說答案'}
          </button>
        </div>
      `;
      
      card.querySelector('.btn-solve-qa').addEventListener('click', () => {
        toggleSolveQA(qa.id);
      });
      
      dom.instructorQAGrid.appendChild(card);
    });
  }

  // 5. Render Speaking Schedule
  renderInstructorSchedule();
}

function selectCourse(courseId) {
  state.activeCourseId = courseId;
  renderInstructorWorkspace();
  showToast(`載入大綱：${INITIAL_INSTRUCTOR_COURSES.find(c => c.id === courseId).title}`, 'success');
}

function selectSandbox(templateId) {
  state.activeSandboxId = templateId;
  const temp = INITIAL_INSTRUCTOR_SANDBOX_TEMPLATES.find(t => t.id === templateId);
  if (temp && dom.instructorPromptInput) {
    dom.instructorPromptInput.value = temp.template;
    if (dom.promptOutputPanel) dom.promptOutputPanel.style.display = 'none';
  }
  renderInstructorWorkspace();
  showToast(`已套用提示詞範本：${temp.name}`, 'success');
}

function toggleSolveQA(qaId) {
  const qa = state.instructorQA.find(q => q.id === qaId);
  if (!qa) return;
  qa.solved = !qa.solved;
  renderInstructorWorkspace();
  if (qa.solved) {
    showToast(`成功運行大模型，解說分析答案生成！`, 'success');
  } else {
    showToast(`解答已收合`, 'warning');
  }
}

function renderInstructorSchedule() {
  if (!dom.instructorScheduleList) return;
  dom.instructorScheduleList.innerHTML = '';
  
  if (state.instructorSchedule.length === 0) {
    dom.instructorScheduleList.innerHTML = `
      <div style="text-align: center; color: var(--text-secondary); font-size: 0.8rem; padding: 2rem 1rem; opacity: 0.8;">
        <i class="fa-solid fa-list-check" style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; opacity: 0.5;"></i>
        目前沒有工作日程。請在上方新增工作，或點擊 Google 同步載入任務。
      </div>
    `;
    return;
  }
  
  state.instructorSchedule.forEach(item => {
    const div = document.createElement('div');
    div.className = `schedule-item ${item.checked ? 'completed' : ''}`;
    div.innerHTML = `
      <div class="schedule-checkbox ${item.checked ? 'checked' : ''}">
        ${item.checked ? '<i class="fa-solid fa-check"></i>' : ''}
      </div>
      <div class="schedule-text-container" style="flex-grow:1; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="schedule-time" style="background:${item.isGoogleTask ? 'rgba(66, 133, 244, 0.15)' : 'rgba(255,255,255,0.2)'}; color:${item.isGoogleTask ? '#4285F4' : 'inherit'}; padding: 0.1rem 0.35rem; border-radius: 4px; font-size: 0.65rem; margin-right: 0.4rem;">${item.isGoogleTask ? 'Google' : 'Local'} ${item.time}</span>
          <span class="schedule-title">${escapeHTML(item.title)}</span>
        </div>
        ${item.isGoogleTask ? '<i class="fa-brands fa-google" style="color: #4285F4; font-size: 0.75rem; opacity: 0.6;" title="Google Tasks 同步中"></i>' : ''}
      </div>
    `;
    div.addEventListener('click', () => {
      toggleTaskStatus(item);
    });
    dom.instructorScheduleList.appendChild(div);
  });
}

// --- Prompt Demo Simulator ---
function runPromptDemo() {
  const promptInput = dom.instructorPromptInput.value.trim();
  if (!promptInput) {
    showToast('請先輸入或選擇教學 Prompt！', 'warning');
    return;
  }

  showToast('AI 推理生成中，請稍候...', 'success');
  if (dom.promptOutputPanel) dom.promptOutputPanel.style.display = 'block';
  if (dom.promptOutputText) dom.promptOutputText.innerHTML = '正在初始化教學 Sparring Session...';

  let simulationResult = '';
  const lowerInput = promptInput.toLowerCase();
  
  if (lowerInput.includes('cot') || lowerInput.includes('step-by-step') || lowerInput.includes('思考')) {
    simulationResult = `【AI 教學模擬 - CoT 思考推理鏈解析】

1. [實體店與電商維度分析]
   - 7-11實體門市優勢：離消費者最近，擁有熱食、咖啡與24小時即時履約能力。
   - momo純電商優勢：倉儲集中化，配送快消品品項齊全。

2. [三大痛點拆解與防守策略]
   - 揀貨人力：7-11店員平日已承載現煮咖啡與取件業務，若將門市轉為前置倉，必須引入「智取櫃與自動排程軟體」，否則運營成本會將利潤吞噬。
   - 庫存空間：便利商店坪效極高，無法像 momo 容納大體積日用品。因此必須專注於「高頻率、快消、即時性」商品（如冷飲、日用品急需品），而非全品項。

3. [機會代價比與建議]
   - 機會得分 (Opportunity): 8 / 10
   - 代價得分 (Cost): 7 / 10
   - 結論：利用 7-11 作為都會區快商務 (Q-Commerce) 衛星履約節點，與黑貓/外送聯網配合，以 30 分鐘履約擊敗 momo 的 3 小時。`;
  } else if (lowerInput.includes('角色扮演') || lowerInput.includes('紅軍') || lowerInput.includes('失敗')) {
    simulationResult = `【AI 教學模擬 - 角色扮演與紅軍挑戰質詢】

我現在扮演無情且客觀的「紅軍挑戰者 (Devil's Advocate)」。針對家樂福生鮮與 7-11 前置倉共享方案，我有 3 點質詢：

1. 組織加盟主利益分配內耗：
   - 7-11加盟店東是否會因為門市後倉空間被劃分為家樂福生鮮前置倉，而認為損害了其店內陳列利潤？如果運費是由總部吸收，加盟主是否會抗拒額外揀貨勞務？
2. 冷鏈損耗率失控：
   - 7-11的小型配送車與生鮮前置倉缺乏大型量販的精細溫控設備。若配送過程中損耗率從目前的 5% 飆升至 15%，整筆利潤將完全被耗損吞噬。
3. 全聯的小時達跟進打擊：
   - 如果全聯發現我們在社區進行生鮮補貼，發起剛性跟進折價，我們是否會陷入重資產冷鏈與補貼的雙重利潤黑洞？`;
  } else if (lowerInput.includes('rmn') || lowerInput.includes('廣告') || lowerInput.includes('點數')) {
    simulationResult = `【AI 教學模擬 - 零售媒體 RMN 促銷簡訊生成】

[AI 行銷大腦生成簡訊]
「【OPENPOINT 專屬】親愛的會員，想來杯濃郁拿鐵嗎？☕ 週五下班至 7-11 取包裹，即享咖啡 2 杯 79 折！搭配家樂福週末有機生鮮 85 折優惠，扣點再省 50 元！帶走週末美味，生活一鍵配。回傳 1 領券。」

[文案策略拆解]
- 鎖定核心軌跡：包裹取件、Latte 熟客、家樂福生鮮採購軌跡。
- 點數黏著：融入 OPENPOINT 跨通路折抵，提高跨店群交叉帶貨率。
- 行動呼籲：明確的取件併買導流，創造門市快消品利潤。`;
  } else {
    simulationResult = `【AI 講師提示詞演示結果】

[Prompt 解析]：
您的提示詞成功加載。系統已識別這是一則結構化商務策略命題。

[大模型示範輸出]：
「已接收到您的自定義策略。高階主管工作台的核心宗旨是將 AI 作為思考對齊的『鏡子』。
建議您在提示詞中，明確指出『排除二分抉擇』與『限制思考步驟』，以避免大模型給出大而無當的公版回答。

若要對比競業，建議導入蝦皮、momo、全聯、全家等實際對手作為非對稱博弈的角色設定。」`;
  }

  let index = 0;
  function typeWriter() {
    if (!dom.promptOutputText || !dom.promptOutputPanel) return;
    if (index < simulationResult.length) {
      dom.promptOutputText.textContent = simulationResult.substring(0, index + 1);
      index++;
      dom.promptOutputPanel.scrollTop = dom.promptOutputPanel.scrollHeight;
      setTimeout(typeWriter, 5);
    } else {
      showToast('演示結果模擬生成完畢！', 'success');
    }
  }
  typeWriter();
}

function clearPromptDemo() {
  if (dom.instructorPromptInput) dom.instructorPromptInput.value = '';
  if (dom.promptOutputPanel) dom.promptOutputPanel.style.display = 'none';
  if (dom.promptOutputText) dom.promptOutputText.textContent = '';
  showToast('已清空 Playground 內容', 'warning');
}

// --- AI Instructor Notes Management ---
function renderInstructorNotes() {
  if (!dom.instructorNotesList) return;
  dom.instructorNotesList.innerHTML = '';
  const query = dom.instructorNotesSearch.value.toLowerCase().trim();
  const filtered = state.instructorNotes.filter(n => n.content.toLowerCase().includes(query));
  
  if (filtered.length === 0) {
    dom.instructorNotesList.innerHTML = '<div style="color: var(--text-muted); font-size: 0.8rem; text-align: center; margin-top: 1rem;">無符合靈感</div>';
    return;
  }
  
  filtered.forEach(note => {
    const item = document.createElement('div');
    item.className = 'note-item';
    item.innerHTML = `
      <div class="note-header">
        <span class="note-time">${note.timestamp}</span>
        <button class="note-delete-inst" data-id="${note.id}" title="清除靈感">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <div class="note-content">${escapeHTML(note.content)}</div>
    `;
    item.querySelector('.note-delete-inst').addEventListener('click', () => deleteInstructorNote(note.id));
    dom.instructorNotesList.appendChild(item);
  });
}

function addInstructorNote(text) {
  if (!text.trim()) return;
  const newNote = {
    id: 'inote-' + Date.now(),
    timestamp: new Date().toLocaleString(),
    content: text.trim()
  };
  state.instructorNotes.unshift(newNote);
  saveToStorage('inst_notes', state.instructorNotes);
  renderInstructorNotes();
  showToast('教學靈感已存入提示庫', 'success');
}

function deleteInstructorNote(id) {
  state.instructorNotes = state.instructorNotes.filter(n => n.id !== id);
  saveToStorage('inst_notes', state.instructorNotes);
  renderInstructorNotes();
  showToast('靈感筆記已清除', 'warning');
}

// --- AI Instructor Calendar & Tab Toggles ---
function switchInstSubTab(subTab) {
  state.instSubTab = subTab;
  
  if (dom.btnInstTabClassroom && dom.btnInstTabCalendar) {
    dom.btnInstTabClassroom.classList.toggle('active', subTab === 'classroom');
    dom.btnInstTabCalendar.classList.toggle('active', subTab === 'calendar');
  }

  if (dom.instPaneClassroom && dom.instPaneCalendar) {
    dom.instPaneClassroom.style.display = subTab === 'classroom' ? 'block' : 'none';
    dom.instPaneCalendar.style.display = subTab === 'calendar' ? 'block' : 'none';
  }

  if (subTab === 'calendar') {
    renderCalendar();
  }
}

function switchCalView(view) {
  state.instCalendarView = view;
  
  if (dom.btnCalViewWeek && dom.btnCalViewMonth) {
    dom.btnCalViewWeek.classList.toggle('active', view === 'week');
    dom.btnCalViewMonth.classList.toggle('active', view === 'month');
  }

  if (dom.calendarWeekGrid && dom.calendarMonthGrid) {
    dom.calendarWeekGrid.style.display = view === 'week' ? 'block' : 'none';
    dom.calendarMonthGrid.style.display = view === 'month' ? 'block' : 'none';
  }

  renderCalendar();
}

function renderCalendar() {
  const isSynced = state.isGoogleCalendarSynced;
  
  if (dom.syncStatusText && dom.btnGoogleCalendarSync) {
    if (isSynced) {
      dom.syncStatusText.innerHTML = '<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--color-success); margin-right:4px; box-shadow:0 0 6px var(--color-success)"></span>已同步 Google 日曆';
      dom.btnGoogleCalendarSync.style.background = 'rgba(16, 185, 129, 0.12)';
      dom.btnGoogleCalendarSync.style.border = '1px solid var(--color-success)';
      dom.btnGoogleCalendarSync.style.color = 'var(--color-success)';
    } else {
      dom.syncStatusText.textContent = '同步 Google 日曆';
      dom.btnGoogleCalendarSync.style.background = 'rgba(255,255,255,0.5)';
      dom.btnGoogleCalendarSync.style.border = '1px solid rgba(255,255,255,0.6)';
      dom.btnGoogleCalendarSync.style.color = 'var(--text-secondary)';
    }
  }

  if (state.instCalendarView === 'week') {
    renderWeekGrid(isSynced);
  } else {
    renderMonthGrid(isSynced);
  }
}

function renderWeekGrid(isSynced) {
  if (!dom.calendarWeekGrid) return;
  
  const weekDays = [
    { name: '週一', dateStr: '2026-06-22', label: '6/22' },
    { name: '週二', dateStr: '2026-06-23', label: '6/23' },
    { name: '週三', dateStr: '2026-06-24', label: '6/24' },
    { name: '週四', dateStr: '2026-06-25', label: '6/25' },
    { name: '週五', dateStr: '2026-06-26', label: '6/26' },
    { name: '週六', dateStr: '2026-06-27', label: '6/27' },
    { name: '週日', dateStr: '2026-06-28', label: '6/28' }
  ];

  const timeSlots = [
    { label: '上午<br>09:00-12:00', matcher: '09:00 - 12:00' },
    { label: '下午 (I)<br>13:30-15:30', matcher: '13:30 - 15:30' },
    { label: '下午 (II)<br>16:00-18:00', matcher: '16:00 - 18:00' }
  ];

  let html = `
    <div class="week-grid-container">
      <div class="week-grid-header">
        <div class="week-grid-header-cell" style="background: rgba(255,255,255,0.3)">時段</div>
  `;

  weekDays.forEach(day => {
    const isToday = day.dateStr === '2026-06-26';
    const todayStyle = isToday ? 'background: rgba(0, 180, 216, 0.08); border-bottom: 2px solid var(--accent-cyan); font-weight:800;' : '';
    html += `
      <div class="week-grid-header-cell" style="${todayStyle}">
        <span>${day.name}</span>
        <span style="font-size:0.68rem; opacity:0.8;">${day.label}</span>
      </div>
    `;
  });

  html += `</div>`; // Close header

  timeSlots.forEach(slot => {
    html += `<div class="week-grid-row">`;
    html += `<div class="week-grid-time-cell">${slot.label}</div>`;

    weekDays.forEach(day => {
      let eventsHtml = '';
      if (isSynced) {
        const matchingEvents = state.googleCalendarEvents.filter(e => e.date === day.dateStr && e.time === slot.matcher);
        matchingEvents.forEach(e => {
          const typeClass = e.type === 'corporate' ? 'event-corporate' : 'event-public';
          eventsHtml += `
            <div class="calendar-event-card ${typeClass}" title="${escapeHTML(e.title)} (${e.time})">
              <span style="font-weight:800; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHTML(e.title)}</span>
              <span class="calendar-event-time">${e.time}</span>
            </div>
          `;
        });
      }

      html += `
        <div class="week-grid-day-cell">
          ${eventsHtml}
        </div>
      `;
    });

    html += `</div>`; // Close row
  });

  html += `</div>`; // Close container

  if (!isSynced) {
    html += `
      <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin-top: 1.5rem; background: rgba(255,255,255,0.2); padding: 2rem; border-radius: 10px; border: 1px dashed rgba(255,255,255,0.4);">
        <i class="fa-brands fa-google" style="font-size: 1.8rem; color: #4285F4; margin-bottom: 0.5rem; display: block;"></i>
        <span>日曆尚未同步。請點擊右上角「<strong>同步 Google 日曆</strong>」按鈕連結您 Google 日曆上的授課時程。</span>
      </div>
    `;
  }

  dom.calendarWeekGrid.innerHTML = html;
}

function renderMonthGrid(isSynced) {
  if (!dom.calendarMonthGrid) return;

  const weekHeaders = ['週一', '週二', '週三', '週四', '週五', '週六', '週日'];
  
  let html = `
    <div class="month-grid-container">
      <div class="month-grid-header">
  `;

  weekHeaders.forEach(day => {
    html += `<div class="month-grid-header-cell">${day}</div>`;
  });

  html += `</div>`; // Close header

  // June 2026 starts on Monday June 1, ends on Tuesday June 30.
  // We render 35 cells: June 1 to July 5.
  for (let d = 1; d <= 35; d++) {
    let dayNum = d;
    let monthLabel = 6;
    let dateStr = '';
    let isOtherMonth = false;

    if (d <= 30) {
      dateStr = `2026-06-${String(dayNum).padStart(2, '0')}`;
    } else {
      dayNum = d - 30;
      monthLabel = 7;
      dateStr = `2026-07-${String(dayNum).padStart(2, '0')}`;
      isOtherMonth = true;
    }

    let eventsHtml = '';
    if (isSynced) {
      const matchingEvents = state.googleCalendarEvents.filter(e => e.date === dateStr);
      matchingEvents.forEach(e => {
        const typeClass = e.type === 'corporate' ? 'event-corporate' : 'event-public';
        eventsHtml += `
          <div class="calendar-event-card ${typeClass}" title="${escapeHTML(e.title)} (${e.time})">
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; font-weight:800;">${escapeHTML(e.title)}</span>
            <span class="calendar-event-time">${e.time.split(' ')[0]}</span>
          </div>
        `;
      });
    }

    const todayClass = dateStr === '2026-06-26' ? 'background: rgba(0, 180, 216, 0.08); border: 1.5px solid var(--accent-cyan); font-weight:800;' : '';
    const otherMonthClass = isOtherMonth ? 'other-month' : '';

    html += `
      <div class="month-grid-day-cell ${otherMonthClass}" style="${todayClass}">
        <span class="month-grid-day-number">${monthLabel}/${dayNum}</span>
        ${eventsHtml}
      </div>
    `;
  }

  html += `</div>`; // Close container

  if (!isSynced) {
    html += `
      <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin-top: 1.5rem; background: rgba(255,255,255,0.2); padding: 2rem; border-radius: 10px; border: 1px dashed rgba(255,255,255,0.4);">
        <i class="fa-brands fa-google" style="font-size: 1.8rem; color: #4285F4; margin-bottom: 0.5rem; display: block;"></i>
        <span>日曆尚未同步。請點擊右上角「<strong>同步 Google 日曆</strong>」按鈕連結您 Google 日曆上的授課時程。</span>
      </div>
    `;
  }

  dom.calendarMonthGrid.innerHTML = html;
}

function openGoogleSyncModal() {
  openGoogleConfigModal();
}

// --- Google APIs Integration (GAPI & GIS) ---
let tokenClient;
let gapiInited = false;
let gisInited = false;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function updateGoogleStatusUI(connected) {
  if (!dom.googleStatusPill || !dom.googleStatusLabel) return;
  if (connected) {
    dom.googleStatusPill.className = 'status-pill-connected';
    dom.googleStatusLabel.innerHTML = '<span class="status-dot"></span><span>Google 已連線</span>';
  } else {
    dom.googleStatusPill.className = 'status-pill-disconnected';
    dom.googleStatusLabel.innerHTML = '<span class="status-dot"></span><span>Google 尚未連線</span>';
  }
}

async function initGoogleServices(callback) {
  const clientId = localStorage.getItem('gapi_client_id');
  const apiKey = localStorage.getItem('gapi_api_key');
  if (!clientId || !apiKey) {
    openGoogleConfigModal();
    return false;
  }

  showToast('正在載入 Google API 模組...', 'success');
  
  try {
    await loadScript('https://apis.google.com/js/api.js');
    await loadScript('https://accounts.google.com/gsi/client');
    
    await new Promise((resolve, reject) => {
      gapi.load('client', async () => {
        try {
          await gapi.client.init({
            apiKey: apiKey,
            discoveryDocs: [
              'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
              'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'
            ],
          });
          gapiInited = true;
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
    
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/tasks',
      callback: '', // defined dynamically
    });
    gisInited = true;
    
    console.log('Google APIs initialized successfully.');
    updateGoogleStatusUI(true);
    if (callback) await callback();
    return true;
  } catch (err) {
    console.error('Google API Init Error:', err);
    showToast('Google API 初始化失敗，請確認 API Key 與 Client ID 設定！', 'danger');
    updateGoogleStatusUI(false);
    return false;
  }
}

function requestGoogleAuth(callback) {
  if (!gisInited || !tokenClient) {
    initGoogleServices(() => requestGoogleAuth(callback));
    return;
  }
  
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      showToast('授權失敗: ' + resp.error, 'danger');
      throw resp;
    }
    
    state.googleToken = resp.access_token;
    sessionStorage.setItem('gapi_access_token', resp.access_token);
    gapi.client.setToken({ access_token: resp.access_token });
    
    showToast('Google 帳戶授權成功！', 'success');
    updateGoogleStatusUI(true);
    
    if (callback) await callback();
  };
  
  tokenClient.requestAccessToken({ prompt: '' });
}

async function syncGoogleCalendar() {
  if (!gapiInited) {
    await initGoogleServices(() => syncGoogleCalendar());
    return;
  }
  
  const token = sessionStorage.getItem('gapi_access_token') || state.googleToken;
  if (!token) {
    requestGoogleAuth(() => syncGoogleCalendar());
    return;
  }
  
  gapi.client.setToken({ access_token: token });
  
  showToast('正在自 Google 日曆獲取授課時程...', 'success');
  try {
    const response = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
    });
    
    const events = response.result.items || [];
    state.googleCalendarEvents = events.map(event => {
      const start = event.start.dateTime || event.start.date;
      const end = event.end.dateTime || event.end.date;
      const dateStr = start.split('T')[0];
      
      let timeStr = '全天';
      if (event.start.dateTime) {
        const startTime = new Date(start).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
        const endTime = new Date(end).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
        timeStr = `${startTime} - ${endTime}`;
      }
      
      return {
        id: event.id,
        date: dateStr,
        time: timeStr,
        title: event.summary || '無標題',
        type: event.description && event.description.includes('企業') ? 'corporate' : 'public'
      };
    });
    
    state.isGoogleCalendarSynced = true;
    saveToStorage('google_synced', true);
    saveToStorage('google_events', state.googleCalendarEvents);
    
    renderCalendar();
    showToast('日曆同步成功！', 'success');
  } catch (err) {
    console.error('Fetch calendar error:', err);
    if (err.status === 401) {
      sessionStorage.removeItem('gapi_access_token');
      requestGoogleAuth(() => syncGoogleCalendar());
    } else {
      showToast('讀取日曆失敗，請確認權限設定。', 'danger');
    }
  }
}

async function syncGoogleTasks() {
  if (!gapiInited) {
    await initGoogleServices(() => syncGoogleTasks());
    return;
  }
  
  const token = sessionStorage.getItem('gapi_access_token') || state.googleToken;
  if (!token) {
    requestGoogleAuth(() => syncGoogleTasks());
    return;
  }
  
  gapi.client.setToken({ access_token: token });
  
  try {
    showToast('正在讀取 Google 任務...', 'success');
    const response = await gapi.client.tasks.tasks.list({
      tasklist: '@default',
      showCompleted: true,
      maxResults: 50
    });
    
    const tasks = response.result.items || [];
    state.instructorSchedule = tasks.map(task => {
      let timeVal = '--:--';
      let titleVal = task.title || '無標題';
      
      const timeMatch = titleVal.match(/^(\d{1,2}:\d{2})\s*(.*)$/);
      if (timeMatch) {
        timeVal = timeMatch[1];
        titleVal = timeMatch[2];
      } else if (task.due) {
        const dueDate = new Date(task.due);
        timeVal = dueDate.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' });
      }
      
      return {
        id: task.id,
        time: timeVal,
        title: titleVal,
        checked: task.status === 'completed',
        isGoogleTask: true
      };
    });
    
    saveToStorage('inst_schedule', state.instructorSchedule);
    renderInstructorSchedule();
    showToast('任務清單同步成功！', 'success');
  } catch (err) {
    console.error('Fetch tasks error:', err);
    if (err.status === 401) {
      sessionStorage.removeItem('gapi_access_token');
      requestGoogleAuth(() => syncGoogleTasks());
    } else {
      showToast('讀取工作任務失敗！', 'danger');
    }
  }
}

async function toggleTaskStatus(item) {
  item.checked = !item.checked;
  saveToStorage('inst_schedule', state.instructorSchedule);
  renderInstructorSchedule();
  
  if (item.isGoogleTask) {
    const token = sessionStorage.getItem('gapi_access_token') || state.googleToken;
    if (!token) {
      showToast('工作已在本地變更，若要同步至 Google Tasks 請先授權連線。', 'warning');
      return;
    }
    
    gapi.client.setToken({ access_token: token });
    try {
      showToast('正在同步至 Google Tasks...', 'success');
      await gapi.client.tasks.tasks.patch({
        tasklist: '@default',
        task: item.id,
        resource: {
          status: item.checked ? 'completed' : 'needsAction'
        }
      });
      showToast('Google Tasks 同步成功！', 'success');
    } catch (err) {
      console.error('Patch Google task error:', err);
      if (err.status === 401) {
        sessionStorage.removeItem('gapi_access_token');
        requestGoogleAuth(() => toggleTaskStatus(item));
      } else {
        showToast('與 Google Tasks 同步失敗。', 'danger');
      }
    }
  } else {
    showToast('本地任務狀態已更新', 'success');
  }
}

async function addNewTask() {
  if (!dom.instructorNewTaskInput) return;
  const title = dom.instructorNewTaskInput.value.trim();
  if (!title) {
    showToast('請輸入工作內容！', 'warning');
    return;
  }
  
  const token = sessionStorage.getItem('gapi_access_token') || state.googleToken;
  if (!token) {
    // Local fallback
    let timeVal = '--:--';
    let titleVal = title;
    const timeMatch = title.match(/^(\d{1,2}:\d{2})\s*(.*)$/);
    if (timeMatch) {
      timeVal = timeMatch[1];
      titleVal = timeMatch[2];
    }
    
    const newTask = {
      id: 'local-' + Date.now(),
      time: timeVal,
      title: titleVal,
      checked: false,
      isGoogleTask: false
    };
    state.instructorSchedule.push(newTask);
    saveToStorage('inst_schedule', state.instructorSchedule);
    renderInstructorSchedule();
    dom.instructorNewTaskInput.value = '';
    showToast('已新增本地任務', 'success');
    return;
  }
  
  gapi.client.setToken({ access_token: token });
  try {
    showToast('正在寫入 Google Tasks...', 'success');
    let timeVal = '--:--';
    let titleVal = title;
    const timeMatch = title.match(/^(\d{1,2}:\d{2})\s*(.*)$/);
    if (timeMatch) {
      timeVal = timeMatch[1];
      titleVal = timeMatch[2];
    }
    
    const response = await gapi.client.tasks.tasks.insert({
      tasklist: '@default',
      resource: {
        title: title,
        status: 'needsAction'
      }
    });
    
    const newTask = {
      id: response.result.id,
      time: timeVal,
      title: titleVal,
      checked: false,
      isGoogleTask: true
    };
    
    state.instructorSchedule.push(newTask);
    saveToStorage('inst_schedule', state.instructorSchedule);
    renderInstructorSchedule();
    dom.instructorNewTaskInput.value = '';
    showToast('已成功新增 Google 任務！', 'success');
  } catch (err) {
    console.error('Insert task error:', err);
    if (err.status === 401) {
      sessionStorage.removeItem('gapi_access_token');
      requestGoogleAuth(() => addNewTask());
    } else {
      showToast('無法新增任務至 Google Tasks。', 'danger');
    }
  }
}

// --- Google Modal UI controls ---
function openGoogleConfigModal() {
  if (!dom.googleConfigModal) return;
  if (dom.googleClientId) dom.googleClientId.value = localStorage.getItem('gapi_client_id') || '';
  if (dom.googleApiKey) dom.googleApiKey.value = localStorage.getItem('gapi_api_key') || '';
  dom.googleConfigModal.style.display = 'flex';
}

function closeGoogleConfigModal() {
  if (dom.googleConfigModal) {
    dom.googleConfigModal.style.display = 'none';
  }
}

function saveGoogleConfig() {
  const clientId = dom.googleClientId ? dom.googleClientId.value.trim() : '';
  const apiKey = dom.googleApiKey ? dom.googleApiKey.value.trim() : '';
  
  if (!clientId || !apiKey) {
    showToast('請確實填寫 Client ID 與 API Key！', 'warning');
    return;
  }
  
  localStorage.setItem('gapi_client_id', clientId);
  localStorage.setItem('gapi_api_key', apiKey);
  showToast('設定已儲存！開始進行安全授權...', 'success');
  closeGoogleConfigModal();
  
  initGoogleServices(() => {
    requestGoogleAuth(() => {
      syncGoogleCalendar();
      syncGoogleTasks();
    });
  });
}

function clearGoogleConfig() {
  localStorage.removeItem('gapi_client_id');
  localStorage.removeItem('gapi_api_key');
  sessionStorage.removeItem('gapi_access_token');
  state.googleToken = null;
  
  if (dom.googleClientId) dom.googleClientId.value = '';
  if (dom.googleApiKey) dom.googleApiKey.value = '';
  
  updateGoogleStatusUI(false);
  closeGoogleConfigModal();
  showToast('設定與授權已被清除。', 'warning');
}

// --- Initialize Event Listeners ---
function initEventListeners() {
  // GM notes (Safe Check)
  if (dom.noteForm) {
    dom.noteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addNote(dom.noteInput.value);
      dom.noteInput.value = '';
    });
  }
  if (dom.notesSearch) {
    dom.notesSearch.addEventListener('input', renderNotes);
  }

  // Instructor notes
  if (dom.instructorNoteForm) {
    dom.instructorNoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addInstructorNote(dom.instructorNoteInput.value);
      dom.instructorNoteInput.value = '';
    });
  }
  if (dom.instructorNotesSearch) {
    dom.instructorNotesSearch.addEventListener('input', renderInstructorNotes);
  }

  // Sandbox actions
  if (dom.btnRunPromptDemo) {
    dom.btnRunPromptDemo.addEventListener('click', runPromptDemo);
  }
  if (dom.btnClearPromptDemo) {
    dom.btnClearPromptDemo.addEventListener('click', clearPromptDemo);
  }

  // Instructor sub-tabs
  if (dom.btnInstTabClassroom) {
    dom.btnInstTabClassroom.addEventListener('click', () => switchInstSubTab('classroom'));
  }
  if (dom.btnInstTabCalendar) {
    dom.btnInstTabCalendar.addEventListener('click', () => switchInstSubTab('calendar'));
  }

  // Calendar views
  if (dom.btnCalViewWeek) {
    dom.btnCalViewWeek.addEventListener('click', () => switchCalView('week'));
  }
  if (dom.btnCalViewMonth) {
    dom.btnCalViewMonth.addEventListener('click', () => switchCalView('month'));
  }

  // Google Calendar Sync button
  if (dom.btnGoogleCalendarSync) {
    dom.btnGoogleCalendarSync.addEventListener('click', () => {
      syncGoogleCalendar();
      syncGoogleTasks();
    });
  }

  // Google API settings modal actions
  if (dom.btnGoogleConfig) {
    dom.btnGoogleConfig.addEventListener('click', openGoogleConfigModal);
  }
  if (dom.btnCloseGoogleConfig) {
    dom.btnCloseGoogleConfig.addEventListener('click', closeGoogleConfigModal);
  }
  if (dom.btnGoogleConfigSave) {
    dom.btnGoogleConfigSave.addEventListener('click', saveGoogleConfig);
  }
  if (dom.btnGoogleConfigClear) {
    dom.btnGoogleConfigClear.addEventListener('click', clearGoogleConfig);
  }

  // Google Tasks adding actions
  if (dom.btnAddInstructorTask) {
    dom.btnAddInstructorTask.addEventListener('click', addNewTask);
  }
  if (dom.instructorNewTaskInput) {
    dom.instructorNewTaskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addNewTask();
      }
    });
  }
}

// --- Main Launchpad ---
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTabs();
  initMeditation();
  initUnit1();
  initUnit2();
  initUnit3();
  initRoleSwitcher();
  initExportButtons();
  initEventListeners();
  
  // Set initial instructor tabs
  switchInstSubTab(state.instSubTab);
  switchCalView(state.instCalendarView);
  
  // Try automatic Google API setup if keys exist
  const clientId = localStorage.getItem('gapi_client_id');
  const apiKey = localStorage.getItem('gapi_api_key');
  if (clientId && apiKey) {
    initGoogleServices().then(success => {
      if (success) {
        const token = sessionStorage.getItem('gapi_access_token');
        if (token) {
          state.googleToken = token;
          gapi.client.setToken({ access_token: token });
          updateGoogleStatusUI(true);
          syncGoogleCalendar();
          syncGoogleTasks();
        }
      }
    });
  } else {
    updateGoogleStatusUI(false);
  }

  setTimeout(() => {
    showToast('知識大腦工作台安全順線。歡迎，AI 講師！', 'success');
  }, 1000);
});
