// ==========================================================================
// Default Templates & Initial Data
// ==========================================================================

const DEFAULT_SCHEDULE = [
    { time: "7:00 AM", Mon: { title: "Wake up + Breakfast", category: "break" }, Tue: { title: "Wake up + Breakfast", category: "break" }, Wed: { title: "Wake up + Breakfast", category: "break" }, Thu: { title: "Wake up + Breakfast", category: "break" }, Fri: { title: "Wake up + Breakfast", category: "break" }, Sat: { title: "Wake up + Breakfast", category: "break" }, Sun: { title: "Wake up + Rest", category: "break" } },
    { time: "7:45 AM", Mon: { title: "Light Exercise", category: "break" }, Tue: { title: "Light Exercise", category: "break" }, Wed: { title: "Light Exercise", category: "break" }, Thu: { title: "Light Exercise", category: "break" }, Fri: { title: "Light Exercise", category: "break" }, Sat: { title: "Light Exercise", category: "break" }, Sun: { title: "Rest", category: "break" } },
    { time: "8:00 AM", Mon: { title: "Python + AI/ML", category: "python" }, Tue: { title: "Python + AI/ML", category: "python" }, Wed: { title: "Python + AI/ML", category: "python" }, Thu: { title: "Python + AI/ML", category: "python" }, Fri: { title: "Python + AI/ML", category: "python" }, Sat: { title: "Python + AI/ML", category: "python" }, Sun: { title: "Review Notes", category: "python" } },
    { time: "10:00 AM", Mon: { title: "Break (15 min)", category: "break" }, Tue: { title: "Break (15 min)", category: "break" }, Wed: { title: "Break (15 min)", category: "break" }, Thu: { title: "Break (15 min)", category: "break" }, Fri: { title: "Break (15 min)", category: "break" }, Sat: { title: "Break (15 min)", category: "break" }, Sun: { title: "Break", category: "break" } },
    { time: "10:15 AM", Mon: { title: "DSA (Arrays)", category: "dsa" }, Tue: { title: "DSA (Linked Lists)", category: "dsa" }, Wed: { title: "DSA (Stacks)", category: "dsa" }, Thu: { title: "DSA (Queues)", category: "dsa" }, Fri: { title: "DSA (Trees)", category: "dsa" }, Sat: { title: "DSA (Graphs)", category: "dsa" }, Sun: { title: "Weak Topics", category: "dsa" } },
    { time: "11:45 AM", Mon: { title: "Break (15 min)", category: "break" }, Tue: { title: "Break (15 min)", category: "break" }, Wed: { title: "Break (15 min)", category: "break" }, Thu: { title: "Break (15 min)", category: "break" }, Fri: { title: "Break (15 min)", category: "break" }, Sat: { title: "Break (15 min)", category: "break" }, Sun: { title: "Break", category: "break" } },
    { time: "12:00 PM", Mon: { title: "Web Dev (HTML)", category: "web" }, Tue: { title: "Web Dev (JS)", category: "web" }, Wed: { title: "Web Dev (React)", category: "web" }, Thu: { title: "Web Dev (Node)", category: "web" }, Fri: { title: "Web Dev (Full)", category: "web" }, Sat: { title: "App Dev", category: "app" }, Sun: { title: "Portfolio", category: "web" } },
    { time: "1:30 PM", Mon: { title: "Lunch", category: "break" }, Tue: { title: "Lunch", category: "break" }, Wed: { title: "Lunch", category: "break" }, Thu: { title: "Lunch", category: "break" }, Fri: { title: "Lunch", category: "break" }, Sat: { title: "Lunch", category: "break" }, Sun: { title: "Lunch", category: "break" } },
    { time: "2:30 PM", Mon: { title: "Rest/Nap", category: "break" }, Tue: { title: "Rest/Nap", category: "break" }, Wed: { title: "Rest/Nap", category: "break" }, Thu: { title: "Rest/Nap", category: "break" }, Fri: { title: "Rest/Nap", category: "break" }, Sat: { title: "Rest/Nap", category: "break" }, Sun: { title: "Rest", category: "break" } },
    { time: "3:00 PM", Mon: { title: "Photoshop", category: "design" }, Tue: { title: "Premiere Pro", category: "design" }, Wed: { title: "After Effects", category: "design" }, Thu: { title: "Canva/CC", category: "design" }, Fri: { title: "All Tools", category: "design" }, Sat: { title: "Content Create", category: "design" }, Sun: { title: "Update Portfolio", category: "design" } },
    { time: "4:30 PM", Mon: { title: "Break (30 min)", category: "break" }, Tue: { title: "Break (30 min)", category: "break" }, Wed: { title: "Break (30 min)", category: "break" }, Thu: { title: "Break (30 min)", category: "break" }, Fri: { title: "Break (30 min)", category: "break" }, Sat: { title: "Break (30 min)", category: "break" }, Sun: { title: "Break", category: "break" } },
    { time: "5:00 PM", Mon: { title: "LeetCode (Easy)", category: "dsa" }, Tue: { title: "LeetCode (Easy)", category: "dsa" }, Wed: { title: "LeetCode (Easy)", category: "dsa" }, Thu: { title: "LeetCode (Easy)", category: "dsa" }, Fri: { title: "LeetCode (Med)", category: "dsa" }, Sat: { title: "Contest", category: "dsa" }, Sun: { title: "Rest", category: "break" } },
    { time: "7:00 PM", Mon: { title: "Break (15 min)", category: "break" }, Tue: { title: "Break (15 min)", category: "break" }, Wed: { title: "Break (15 min)", category: "break" }, Thu: { title: "Break (15 min)", category: "break" }, Fri: { title: "Break (15 min)", category: "break" }, Sat: { title: "Break (15 min)", category: "break" }, Sun: { title: "Family Time", category: "break" } },
    { time: "7:15 PM", Mon: { title: "Dinner", category: "break" }, Tue: { title: "Dinner", category: "break" }, Wed: { title: "Dinner", category: "break" }, Thu: { title: "Dinner", category: "break" }, Fri: { title: "Dinner", category: "break" }, Sat: { title: "Dinner", category: "break" }, Sun: { title: "Dinner", category: "break" } },
    { time: "8:15 PM", Mon: { title: "App Dev", category: "app" }, Tue: { title: "App Dev", category: "app" }, Wed: { title: "App Dev", category: "app" }, Thu: { title: "App Dev", category: "app" }, Fri: { title: "Project", category: "app" }, Sat: { title: "Project", category: "app" }, Sun: { title: "Plan Week", category: "break" } },
    { time: "9:45 PM", Mon: { title: "Revision", category: "python" }, Tue: { title: "Revision", category: "dsa" }, Wed: { title: "Revision", category: "web" }, Thu: { title: "Revision", category: "app" }, Fri: { title: "Revision", category: "python" }, Sat: { title: "Revision", category: "dsa" }, Sun: { title: "Review Week", category: "break" } },
    { time: "10:15 PM", Mon: { title: "YouTube/Relax", category: "break" }, Tue: { title: "YouTube/Relax", category: "break" }, Wed: { title: "YouTube/Relax", category: "break" }, Thu: { title: "YouTube/Relax", category: "break" }, Fri: { title: "YouTube/Relax", category: "break" }, Sat: { title: "YouTube/Relax", category: "break" }, Sun: { title: "Wind Down", category: "break" } },
    { time: "11:00 PM", Mon: { title: "SLEEP 💤", category: "break" }, Tue: { title: "SLEEP 💤", category: "break" }, Wed: { title: "SLEEP 💤", category: "break" }, Thu: { title: "SLEEP 💤", category: "break" }, Fri: { title: "SLEEP 💤", category: "break" }, Sat: { title: "SLEEP 💤", category: "break" }, Sun: { title: "SLEEP 💤", category: "break" } }
];

const DEFAULT_CHECKLIST = [
    { id: "task_1", text: "7:00 AM - Wake up & Breakfast", checked: false },
    { id: "task_2", text: "8:00 AM - Python + AI Study Session", checked: false },
    { id: "task_3", text: "10:15 AM - DSA Practice (Arrays/Trees)", checked: false },
    { id: "task_4", text: "12:00 PM - Web Development Session", checked: false },
    { id: "task_5", text: "3:00 PM - Design Software Practice", checked: false },
    { id: "task_6", text: "5:00 PM - LeetCode Problems solving", checked: false },
    { id: "task_7", text: "8:15 PM - App Dev Project work", checked: false },
    { id: "task_8", text: "9:45 PM - Revision Session", checked: false },
    { id: "task_9", text: "11:00 PM - Sleep schedule checkpoint", checked: false }
];

const DEFAULT_GOALS = {
    python: { id: "python", title: "Python & AI/ML", current: 0, target: 10, category: "python", color: "green" },
    dsa: { id: "dsa", title: "DSA Problems & LeetCode", current: 0, target: 8, category: "dsa", color: "blue" },
    web: { id: "web", title: "Web Development", current: 0, target: 6, category: "web", color: "teal" },
    app: { id: "app", title: "App Dev projects", current: 0, target: 3, category: "app", color: "purple" },
    design: { id: "design", title: "Photoshop & Editing", current: 0, target: 4, category: "design", color: "orange" },
    break: { id: "break", title: "Revision & Breaks", current: 0, target: 5, category: "break", color: "slate" }
};

const DEFAULT_DOCUMENTS = [
    {
        id: "doc_getting_started",
        title: "Getting Started Guide",
        emoji: "🚀",
        content: `Welcome to your personal study and work planner workspace!

This application has been tailored to help you build skills in Python, AI, DSA, Web Dev, Design, and App Dev.

### 📌 Core Features:
- **Dashboard**: High-level review, Pomodoro Focus timer, habit streaks, and quick daily checklist targets.
- **Weekly Schedule**: A highly interactive schedule view. Click on any slot to edit the activity name or change the subject category.
- **Goals & Analytics**: Log your study hours to see real-time progress against your weekly targets.
- **Notion Docs**: Write customized notes, study guides, outlines, and keep records. They auto-save instantly.

### 💡 Tips for Consistency:
- Use the **Focus Timer** (25 minutes focus, 5 minutes break) to segment your sessions.
- Log hours immediately after completing a study block to keep your progress charts updated.
- Update your **Daily Checklist** as you transition throughout the day. Happy learning!`
    },
    {
        id: "doc_learning_resources",
        title: "Study Resources & Links",
        emoji: "💡",
        content: `Keep track of your study links and references here:

### 🐍 Python & AI/ML
- [Python Documentation](https://docs.python.org/)
- [Kaggle Datasets & Courses](https://www.kaggle.com/)

### 📊 DSA & LeetCode
- [LeetCode Practice Problems](https://leetcode.com/)
- [GeeksforGeeks DSA Guide](https://www.geeksforgeeks.org/)

### 🌐 Web Dev & App Projects
- [MDN Web Docs](https://developer.mozilla.org/)
- [React and Node.js guides](https://react.dev/)

### 🎨 Editing & Design
- Photoshop & Premiere Pro keyboard shortcuts list.
- Canva templates portfolio drafts.`
    }
];

// Cover image gradient configurations matching views
const COVERS = {
    dashboard: "url('images/cover_dashboard.png') center/cover no-repeat",
    schedule: "linear-gradient(135deg, #f97316 0%, #e11d48 50%, #9333ea 100%)",
    goals: "url('images/cover_goals.png') center/cover no-repeat",
    settings: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
    document: "linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)"
};

function safeCreateIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        try {
            window.lucide.createIcons();
        } catch (e) {
            console.error("Lucide icons rendering failed", e);
        }
    }
}

// ==========================================================================
// State Manager
// ==========================================================================

let state = {
    activePeriod: null,
    schedule: DEFAULT_SCHEDULE,
    checklist: DEFAULT_CHECKLIST,
    goals: DEFAULT_GOALS,
    habits: {
        water: { checked: false, streak: 0 },
        exercise: { checked: false, streak: 0 },
        code: { checked: false, streak: 0 }
    },
    lastHabitDate: "",
    documents: DEFAULT_DOCUMENTS,
    activeDocumentId: null,
    theme: "dark",
    accent: "blue",
    font: "font-sans",
    currentView: "dashboard",
    customCovers: {},
    studyStreak: 0,
    lastActiveDate: "",
    weeklyActivity: { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false, Sun: false },
    weeklyActivityHours: { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 },
    lastUpdatedTime: 0,
    pomodorosCompleted: 0,
    streakProtection: {
        enabled: false,
        email: "",
        whatsapp: "",
        phone: "",
        mode: "simulated",
        smtpHost: "",
        smtpUser: "",
        smtpPass: "",
        twilioSid: "",
        twilioToken: "",
        twilioFrom: "",
        callStatusCallbackUrl: ""
    },
    cloudScheduler: {
        enabled: false,
        publicBaseUrl: "",
        token: ""
    },
    cloudSchedulerRunLog: [],
    alertsLog: [],
    lastSyncedDate: "",
    lastAlertsSent: {
        date: "",
        email: false,
        whatsapp: false,
        callTimes: [],
        answered: false
    }
};

// LocalStorage Persistence Keys
const STORAGE_KEY = "personal_notion_workspace_state";
const CLOUD_KEY = "notion_cloud_config"; // stores { apiKey, binId } in localStorage

// ==========================================================================
// Cloud Sync (JSONBin.io) — Real-time cross-device tracking (pre-configured)
// ==========================================================================

// Built-in API key — cloud sync works automatically on first launch
const DEFAULT_API_KEY = "$2a$10$GWu.UGo.Cs7x6OGfC1eh6urlnbjTwhmZOyNPRTQ8/xOlzc4LHQlxS";
const DEFAULT_BIN_ID = "6a34f495f5f4af5e290d9c68";

function getCloudConfig() {
    try {
        const raw = localStorage.getItem(CLOUD_KEY);
        const saved = raw ? JSON.parse(raw) : {};
        // Migrate legacy/invalid keys or empty configurations to the new working defaults
        if (saved.apiKey === "$2a$10$DFOntZXjFqfAcXtaGW.B/uWAYuMn0ZeBN39WJwHfp24dLPdHZbFNe" || !saved.binId) {
            return {
                apiKey: DEFAULT_API_KEY,
                binId: DEFAULT_BIN_ID
            };
        }
        return {
            apiKey: saved.apiKey || DEFAULT_API_KEY,
            binId: saved.binId || DEFAULT_BIN_ID
        };
    } catch (e) { return { apiKey: DEFAULT_API_KEY, binId: DEFAULT_BIN_ID }; }
}

function setCloudConfig(apiKey, binId) {
    localStorage.setItem(CLOUD_KEY, JSON.stringify({ apiKey, binId }));
}

function isCloudEnabled() {
    const cfg = getCloudConfig();
    return !!(cfg.apiKey && cfg.binId);
}

// Auto-setup: create a bin on first launch if API key is present but no bin ID
function autoSetupCloud(callback) {
    const cfg = getCloudConfig();
    if (cfg.binId) { if (callback) callback(); return; } // already set up
    if (!cfg.apiKey) { if (callback) callback(); return; }

    console.log("Auto-creating JSONBin for cloud sync...");
    createCloudBin(cfg.apiKey, (err, binId) => {
        if (!err && binId) {
            setCloudConfig(cfg.apiKey, binId);
            console.log("✅ Cloud sync auto-configured! Bin ID:", binId);
            updateCloudSyncStatus('synced');
        } else {
            console.warn("Cloud auto-setup failed:", err);
        }
        if (callback) callback();
    });
}

// Push state to JSONBin cloud
function syncToCloud() {
    const cfg = getCloudConfig();
    if (!cfg.apiKey || !cfg.binId) return;

    const payload = { ...state };
    delete payload.customCovers; // skip large base64 images from cloud sync

    fetch(`https://api.jsonbin.io/v3/b/${cfg.binId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': cfg.apiKey
        },
        body: JSON.stringify(payload)
    })
    .then(r => r.json())
    .then(() => {
        updateCloudSyncStatus('synced');
    })
    .catch(err => {
        console.warn('Cloud sync failed:', err.message);
        updateCloudSyncStatus('error');
    });
}

// Fetch latest state from JSONBin cloud
function loadFromCloud(callback) {
    const cfg = getCloudConfig();
    if (!cfg.apiKey || !cfg.binId) { callback(null); return; }

    fetch(`https://api.jsonbin.io/v3/b/${cfg.binId}/latest`, {
        headers: { 'X-Master-Key': cfg.apiKey }
    })
    .then(r => r.json())
    .then(data => {
        if (data && data.record) {
            callback(data.record);
        } else {
            callback(null);
        }
    })
    .catch(err => {
        console.warn('Cloud load failed:', err.message);
        callback(null);
    });
}

// Create a new JSONBin bin
function createCloudBin(apiKey, callback) {
    fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': apiKey,
            'X-Bin-Name': 'PersonalNotionWorkspace',
            'X-Bin-Private': 'true'
        },
        body: JSON.stringify({ initialized: true, lastUpdatedTime: Date.now() })
    })
    .then(r => r.json())
    .then(data => {
        if (data && data.metadata && data.metadata.id) {
            callback(null, data.metadata.id);
        } else {
            callback('Could not create bin. Check your API key.');
        }
    })
    .catch(err => callback(err.message));
}

function updateCloudSyncStatus(status) {
    const el = document.getElementById('cloud-sync-status');
    if (!el) return;
    const icons = { synced: '☁️', error: '❌', syncing: '🔄', offline: '💾' };
    const labels = { synced: 'Cloud synced just now', error: 'Sync failed — check API key', syncing: 'Syncing to cloud...', offline: 'Local only (no cloud configured)' };
    el.textContent = `${icons[status] || '💾'} ${labels[status] || status}`;
    el.className = `cloud-status-badge cloud-status-${status}`;
}

// Debounced cloud sync (don't hammer the API on every keystroke)
let cloudSyncTimer = null;
function scheduledCloudSync() {
    if (!isCloudEnabled()) return;
    clearTimeout(cloudSyncTimer);
    cloudSyncTimer = setTimeout(() => {
        updateCloudSyncStatus('syncing');
        syncToCloud();
    }, 2000); // 2s debounce
}

// Check if the week has changed relative to lastActiveDate, and reset weekly activity/hours if so.
function checkWeeklyReset(shouldSave = true) {
    if (!state.lastActiveDate) return;

    const today = new Date();
    const lastActive = new Date(state.lastActiveDate);

    // Helper to get the Monday of the week for a given date
    function getMondayDate(d) {
        const date = new Date(d);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
        return new Date(date.setDate(diff));
    }

    const todayMonday = getMondayDate(today);
    const lastActiveMonday = getMondayDate(lastActive);

    // Set hours, minutes, seconds, ms to 0 to compare dates accurately
    todayMonday.setHours(0, 0, 0, 0);
    lastActiveMonday.setHours(0, 0, 0, 0);

    if (todayMonday.getTime() !== lastActiveMonday.getTime()) {
        console.log("New week detected! Resetting Weekly Study Activity and Hours.");
        state.weeklyActivity = { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false, Sun: false };
        state.weeklyActivityHours = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
        if (shouldSave) {
            saveState();
        }
    }
}

// Load State from LocalStorage
function loadState() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            state = {
                ...state,
                ...parsed,
                weeklyActivity: parsed.weeklyActivity || state.weeklyActivity,
                weeklyActivityHours: parsed.weeklyActivityHours || state.weeklyActivityHours,
                lastUpdatedTime: parsed.lastUpdatedTime || state.lastUpdatedTime,
                studyStreak: parsed.studyStreak !== undefined ? parsed.studyStreak : state.studyStreak,
                lastActiveDate: parsed.lastActiveDate !== undefined ? parsed.lastActiveDate : state.lastActiveDate,
                pomodorosCompleted: parsed.pomodorosCompleted !== undefined ? parsed.pomodorosCompleted : state.pomodorosCompleted,
                streakProtection: parsed.streakProtection || state.streakProtection,
                cloudScheduler: parsed.cloudScheduler || state.cloudScheduler,
                cloudSchedulerRunLog: parsed.cloudSchedulerRunLog || state.cloudSchedulerRunLog,
                alertsLog: parsed.alertsLog || state.alertsLog,
                lastSyncedDate: parsed.lastSyncedDate !== undefined ? parsed.lastSyncedDate : state.lastSyncedDate,
                lastAlertsSent: parsed.lastAlertsSent || state.lastAlertsSent
            };
            checkWeeklyReset(true);
            validateHabitsStreak();
        } else {
            saveState();
        }
    } catch (e) {
        console.error("Error loading state", e);
    }
}

// Save State to LocalStorage + trigger cloud sync
function saveState() {
    try {
        state.lastUpdatedTime = Date.now();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        scheduledCloudSync();
    } catch (e) {
        console.error("Error saving state", e);
    }
}

// Reset streaks if habits weren't logged yesterday or today
function validateHabitsStreak() {
    const today = new Date().toDateString();

    if (state.lastHabitDate !== today) {
        // If it was yesterday, keep streaks but uncheck for today
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (state.lastHabitDate !== yesterday.toDateString()) {
            // Missed a day completely, reset all streaks
            Object.keys(state.habits).forEach(key => {
                state.habits[key].streak = 0;
            });
        }

        // Reset checkmarks for new day
        Object.keys(state.habits).forEach(key => {
            state.habits[key].checked = false;
        });

        state.lastHabitDate = today;
        saveState();
    }
}

// Navigation History / Sequence Variables
let historyIndex = 0;
let historyLength = 0;

function getPageSequence() {
    const sequence = [
        { view: "dashboard", docId: null },
        { view: "schedule", docId: null },
        { view: "goals", docId: null }
    ];
    // Add all documents in order
    if (state.documents) {
        state.documents.forEach(doc => {
            sequence.push({ view: "document", docId: doc.id });
        });
    }
    // Add settings at the end
    sequence.push({ view: "settings", docId: null });
    return sequence;
}

function initNavigation() {
    // Sidebar toggle (collapse / expand)
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");

    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        const icon = sidebarToggle.querySelector("i");
        if (sidebar.classList.contains("collapsed")) {
            icon.setAttribute("data-lucide", "chevron-right");
        } else {
            icon.setAttribute("data-lucide", "chevron-left");
        }
        safeCreateIcons();
    });

    // Expand sidebar when clicking on the search box in collapsed state
    const searchBox = document.querySelector(".sidebar-search-box");
    if (searchBox) {
        searchBox.addEventListener("click", () => {
            if (sidebar.classList.contains("collapsed")) {
                sidebar.classList.remove("collapsed");
                const icon = sidebarToggle.querySelector("i");
                if (icon) {
                    icon.setAttribute("data-lucide", "chevron-left");
                }
                safeCreateIcons();
            }
        });
    }

    // Mobile Drawer navigation toggles
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const sidebarBackdrop = document.getElementById("sidebar-backdrop");

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", () => {
            document.body.classList.toggle("sidebar-open");
        });
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener("click", () => {
            document.body.classList.remove("sidebar-open");
        });
    }

    // Prev / Next page-to-page sequential navigation handlers
    const prevBtn = document.getElementById("nav-prev-btn");
    const nextBtn = document.getElementById("nav-next-btn");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            const seq = getPageSequence();
            const currentIndex = seq.findIndex(item => 
                item.view === state.currentView && 
                (item.view !== "document" || item.docId === state.activeDocumentId)
            );
            if (currentIndex > 0) {
                const target = seq[currentIndex - 1];
                switchView(target.view, target.docId);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const seq = getPageSequence();
            const currentIndex = seq.findIndex(item => 
                item.view === state.currentView && 
                (item.view !== "document" || item.docId === state.activeDocumentId)
            );
            if (currentIndex >= 0 && currentIndex < seq.length - 1) {
                const target = seq[currentIndex + 1];
                switchView(target.view, target.docId);
            }
        });
    }

    // View buttons click handlers
    document.querySelectorAll("[data-view]").forEach(item => {
        item.addEventListener("click", (e) => {
            const viewName = item.getAttribute("data-view");
            switchView(viewName);
        });
    });

    // Document Add Button
    document.getElementById("sidebar-add-doc").addEventListener("click", (e) => {
        e.stopPropagation();
        createNewDocument();
    });

    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        const nextTheme = state.theme === "dark" ? "light" : "dark";
        state.theme = nextTheme;
        document.documentElement.setAttribute("data-theme", nextTheme);
        updateThemeUI();
        saveState();
    });

    // Apply saved preferences on startup
    document.documentElement.setAttribute("data-theme", state.theme);
    applyAccentColor(state.accent);
    applyFont(state.font);
    updateThemeUI();
}

function updateThemeUI() {
    const icon = document.getElementById("theme-icon");
    const text = document.getElementById("theme-text");
    if (state.theme === "dark") {
        icon.setAttribute("data-lucide", "sun");
        text.textContent = "Light Mode";
    } else {
        icon.setAttribute("data-lucide", "moon");
        text.textContent = "Dark Mode";
    }
    safeCreateIcons();
}

function updateBreadcrumbs() {
    const prevBtn = document.getElementById("nav-prev-btn");
    const nextBtn = document.getElementById("nav-next-btn");

    if (prevBtn && nextBtn) {
        const seq = getPageSequence();
        const currentIndex = seq.findIndex(item => 
            item.view === state.currentView && 
            (item.view !== "document" || item.docId === state.activeDocumentId)
        );
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex === -1 || currentIndex >= seq.length - 1;
    }

    const breadcrumbCurrent = document.getElementById("breadcrumb-current");
    const breadcrumbParent = document.getElementById("breadcrumb-parent");
    if (breadcrumbCurrent && breadcrumbParent) {
        if (state.currentView === "document" && state.activeDocumentId) {
            breadcrumbParent.textContent = "Documents";
            const doc = state.documents.find(d => d.id === state.activeDocumentId);
            breadcrumbCurrent.textContent = doc ? `${doc.emoji || '📄'} ${doc.title}` : "Untitled Document";
        } else {
            breadcrumbParent.textContent = "Workspace";
            const viewNames = {
                dashboard: "Dashboard",
                schedule: "Weekly Schedule",
                goals: "Goals & Analytics",
                settings: "Settings"
            };
            breadcrumbCurrent.textContent = viewNames[state.currentView] || state.currentView;
        }
    }
}

function initRouting() {
    // Read current hash from URL on startup
    const hash = window.location.hash;
    let targetView = "dashboard";
    let targetDocId = null;

    if (hash) {
        if (hash.startsWith("#doc-")) {
            targetView = "document";
            targetDocId = hash.replace("#doc-", "");
        } else if (["#dashboard", "#schedule", "#goals", "#settings"].includes(hash)) {
            targetView = hash.replace("#", "");
        }
    }

    // Set initial state
    history.replaceState({ viewName: targetView, docId: targetDocId, index: 0 }, "", hash || `#${targetView}`);
    historyIndex = 0;
    historyLength = 0;

    // Load initial view
    switchView(targetView, targetDocId, true);

    // Listen to popstate event (e.g. browser back/forward, phone swipe back)
    window.addEventListener("popstate", (e) => {
        if (e.state && e.state.viewName) {
            historyIndex = e.state.index || 0;
            switchView(e.state.viewName, e.state.docId, true);
        }
    });
}

function switchView(viewName, docId = null, isHistoryNav = false) {
    // Close mobile drawer on view switch
    document.body.classList.remove("sidebar-open");

    if (!isHistoryNav) {
        const currentView = state.currentView;
        const currentDocId = state.activeDocumentId;
        if (currentView !== viewName || currentDocId !== docId) {
            historyIndex++;
            historyLength = historyIndex;
            const hash = viewName === 'document' ? `#doc-${docId}` : `#${viewName}`;
            history.pushState({ viewName, docId, index: historyIndex }, "", hash);
        }
    }

    state.currentView = viewName;

    // Manage active state in sidebar menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });

    if (viewName === "document" && docId) {
        state.activeDocumentId = docId;
        const sidebarDocItem = document.querySelector(`.menu-item[data-doc-id="${docId}"]`);
        if (sidebarDocItem) sidebarDocItem.classList.add("active");
    } else {
        state.activeDocumentId = null;
        const sidebarViewItem = document.querySelector(`.menu-item[data-view="${viewName}"]`);
        if (sidebarViewItem) sidebarViewItem.classList.add("active");
    }

    // Hide all views, show active one
    document.querySelectorAll(".view-panel").forEach(panel => {
        panel.classList.remove("active");
    });

    const targetView = viewName === "document" ? "docs-view" : `${viewName}-view`;
    const targetPanel = document.getElementById(targetView);
    if (targetPanel) {
        targetPanel.classList.add("active");
    }

    // Update Banner Cover & Page Header metadata
    updatePageMeta(viewName, docId);

    // View-specific renderer triggers
    if (viewName === "dashboard") {
        renderDashboard();
    } else if (viewName === "schedule") {
        renderWeeklySchedule();
    } else if (viewName === "goals") {
        renderGoals();
    } else if (viewName === "document" && docId) {
        loadDocumentEditor(docId);
        saveState();
    }

    // Update breadcrumbs and history buttons
    updateBreadcrumbs();
}

function applyCoverStyle(coverKey, defaultKey = "dashboard") {
        const cover = document.getElementById("workspace-cover");
        if (!state.customCovers) {
            state.customCovers = {};
        }

        if (state.customCovers[coverKey]) {
            cover.style.background = `url(${state.customCovers[coverKey]})`;
            cover.style.backgroundSize = "cover";
            cover.style.backgroundPosition = "center";
        } else {
            cover.style.background = COVERS[defaultKey] || COVERS.dashboard;
        }
    }

    function initCoverUpload() {
        const changeCoverBtn = document.getElementById("change-cover");
        const coverFileInput = document.getElementById("cover-file-input");

        if (!changeCoverBtn || !coverFileInput) return;

        changeCoverBtn.addEventListener("click", () => {
            coverFileInput.click();
        });

        coverFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Size check: 1.5MB to prevent LocalStorage size limit crash
            if (file.size > 1.5 * 1024 * 1024) {
                alert("Image is too large! Please choose an image smaller than 1.5MB to ensure it can be saved locally.");
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const dataUrl = event.target.result;
                const coverKey = state.currentView === "document" ? state.activeDocumentId : state.currentView;
                if (!coverKey) return;

                if (!state.customCovers) {
                    state.customCovers = {};
                }
                state.customCovers[coverKey] = dataUrl;
                saveState();

                const defaultKey = state.currentView === "document" ? "document" : state.currentView;
                applyCoverStyle(coverKey, defaultKey);
            };
            reader.readAsDataURL(file);
        });
    }

    function updatePageMeta(viewName, docId) {
        const titleEl = document.getElementById("page-title");
        const descEl = document.getElementById("page-description");
        const emojiBtn = document.getElementById("page-emoji-btn");

        // Clear contenteditable attributes if not documents/custom title
        titleEl.removeAttribute("contenteditable");

        if (viewName === "dashboard") {
            applyCoverStyle("dashboard", "dashboard");
            emojiBtn.textContent = "🏠";
            titleEl.textContent = "Workspace Dashboard";
            descEl.textContent = "Overview of focus blocks, habit rings, checklists, and daily targets.";
        } else if (viewName === "schedule") {
            applyCoverStyle("schedule", "schedule");
            emojiBtn.textContent = "📅";
            titleEl.textContent = "Weekly Planner Schedule";
            descEl.textContent = "Click on any grid cell block to schedule activities or change learning tags.";
        } else if (viewName === "goals") {
            applyCoverStyle("goals", "goals");
            emojiBtn.textContent = "📈";
            titleEl.textContent = "Weekly Goals & Progress";
            descEl.textContent = "Log learning hours for each subject to meet your weekly milestone targets.";
        } else if (viewName === "settings") {
            applyCoverStyle("settings", "settings");
            emojiBtn.textContent = "🛠️";
            titleEl.textContent = "Workspace Settings";
            descEl.textContent = "Customize fonts, colors, and download JSON backups of your progress.";
        } else if (viewName === "document" && docId) {
            applyCoverStyle(docId, "document");
            const doc = state.documents.find(d => d.id === docId);
            if (doc) {
                emojiBtn.textContent = doc.emoji || "📝";
                titleEl.textContent = doc.title || "Untitled Document";
                descEl.textContent = `Private Workspace Note page. Last auto-saved locally.`;
            }
        }
    }

    // Emoji picker handling
    function initEmojiPickers() {
        const emojiBtn = document.getElementById("page-emoji-btn");
        const picker = document.getElementById("emoji-picker");

        emojiBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            picker.classList.toggle("active");
        });

        document.addEventListener("click", () => {
            picker.classList.remove("active");
        });

        picker.querySelectorAll(".emoji-option").forEach(opt => {
            opt.addEventListener("click", () => {
                const selectedEmoji = opt.textContent;
                emojiBtn.textContent = selectedEmoji;

                if (state.currentView === "document" && state.activeDocumentId) {
                    const docIndex = state.documents.findIndex(d => d.id === state.activeDocumentId);
                    if (docIndex !== -1) {
                        state.documents[docIndex].emoji = selectedEmoji;
                        renderSidebarDocuments();
                        saveState();
                    }
                }
            });
        });
    }

    // ==========================================================================
    // Dashboard View & Widgets Logic
    // ==========================================================================

    // Achievements Definitions
    const ACHIEVEMENTS = [
        { id: "first_step", title: "First Step", desc: "Log your first study hour", icon: "activity" },
        { id: "python_catalyst", title: "AI Catalyst", desc: "Log 10 hrs of Python & AI", icon: "terminal" },
        { id: "dsa_ninja", title: "DSA Ninja", desc: "Log 8 hrs of DSA practice", icon: "shield" },
        { id: "web_artisan", title: "Web Artisan", desc: "Log 6 hrs of Web Dev", icon: "code" },
        { id: "focus_titan", title: "Focus Titan", desc: "Complete 4 Focus sessions", icon: "zap" },
        { id: "perfectionist", title: "Perfectionist", desc: "Complete daily checklist", icon: "check-circle" },
        { id: "habit_hero", title: "Habit Hero", desc: "Log all habits in a day", icon: "heart" },
        { id: "streak_master", title: "Streak Master", desc: "Achieve a 7-day study streak", icon: "flame" }
    ];

    function markActiveToday() {
        checkWeeklyReset(false);
        const todayStr = new Date().toDateString();

        // 1. Weekly Grid update
        const daysLookup = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = daysLookup[new Date().getDay()];

        if (!state.weeklyActivity) {
            state.weeklyActivity = { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false, Sun: false };
        }

        state.weeklyActivity[dayName] = true;

        // 2. Daily Streak update
        if (state.lastActiveDate !== todayStr) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toDateString();

            if (state.lastActiveDate === yesterdayStr) {
                state.studyStreak = (state.studyStreak || 0) + 1;
            } else {
                state.studyStreak = 1;
            }
            state.lastActiveDate = todayStr;
        }

        saveState();
        syncStateToServer();

        // Render dashboard to see live updates if active
        if (state.currentView === "dashboard") {
            updateDashboardStats();
            renderAchievements();
        }
    }

    function renderWeeklyActivityGrid() {
        const grid = document.getElementById("weekly-activity-grid");
        if (!grid) return;
        grid.innerHTML = "";

        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        days.forEach(day => {
            const hours = state.weeklyActivityHours ? (state.weeklyActivityHours[day] || 0) : 0;
            let heatmapClass = "heatmap-0";
            if (hours > 0 && hours <= 2) heatmapClass = "heatmap-1";
            else if (hours > 2 && hours <= 5) heatmapClass = "heatmap-2";
            else if (hours > 5) heatmapClass = "heatmap-3";

            const dotWrap = document.createElement("div");
            dotWrap.className = "day-dot-wrap";

            dotWrap.innerHTML = `
            <div class="day-dot ${heatmapClass}" title="${day}: ${hours} study hour${hours === 1 ? '' : 's'} completed">
                ${day[0]}
            </div>
        `;
            grid.appendChild(dotWrap);
        });
    }

    function renderAchievements() {
        const container = document.getElementById("badges-container");
        if (!container) return;
        container.innerHTML = "";

        // Evaluate status of each achievement
        const unlocked = {
            first_step: Object.values(state.goals).some(g => g.category !== "break" && g.current > 0),
            python_catalyst: state.goals.python && state.goals.python.current >= 10,
            dsa_ninja: state.goals.dsa && state.goals.dsa.current >= 8,
            web_artisan: state.goals.web && state.goals.web.current >= 6,
            focus_titan: state.pomodorosCompleted >= 4,
            perfectionist: getTodayChecklist().length > 0 && getTodayChecklist().every(t => t.checked),
            habit_hero: state.habits && Object.values(state.habits).every(h => h.checked),
            streak_master: (state.studyStreak || 0) >= 7
        };

        ACHIEVEMENTS.forEach(badge => {
            const isUnlocked = unlocked[badge.id] || false;
            const item = document.createElement("div");
            item.className = `badge-item badge-${badge.id} ${isUnlocked ? "" : "locked"}`;

            item.innerHTML = `
            <div class="badge-icon-wrap" title="${isUnlocked ? 'Unlocked!' : 'Locked'}">
                <i data-lucide="${badge.icon}"></i>
            </div>
            <span class="badge-name">${badge.title}</span>
            <span class="badge-desc">${badge.desc}</span>
        `;

            container.appendChild(item);
        });

        // Update Streak UI
        const streakEl = document.getElementById("dashboard-streak-badge");
        if (streakEl) {
            const streak = state.studyStreak || 0;
            streakEl.innerHTML = `<span class="flame-icon">🔥</span> ${streak} Day Streak`;
        }

        // Update Weekly Activity Grid
        renderWeeklyActivityGrid();
        safeCreateIcons();
    }

    // Time parsing helper for minutes since midnight
    function timeToMinutes(timeStr) {
        const match = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
        if (!match) return 0;

        let hours = parseInt(match[1]);
        const minutes = parseInt(match[2]);
        const ampm = match[3].toUpperCase();

        if (ampm === "PM" && hours !== 12) {
            hours += 12;
        } else if (ampm === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    }

    // Find currently active schedule row index based on current system time
    function getActiveRowIndex() {
        const today = new Date();
        const currentMin = today.getHours() * 60 + today.getMinutes();

        const rowTimes = state.schedule.map((row, idx) => ({
            index: idx,
            startMin: timeToMinutes(row.time)
        })).sort((a, b) => a.startMin - b.startMin);

        for (let i = 0; i < rowTimes.length; i++) {
            const current = rowTimes[i];
            const next = rowTimes[i + 1];

            if (next) {
                if (currentMin >= current.startMin && currentMin < next.startMin) {
                    return current.index;
                }
            } else {
                if (currentMin >= current.startMin || currentMin < rowTimes[0].startMin) {
                    return current.index;
                }
            }
        }
        return -1;
    }

    // Build checklist elements dynamically synchronized with current day's timetable
    function getTodayChecklist() {
        const todayDateStr = new Date().toDateString();
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const currentDayName = dayNames[new Date().getDay()];

        if (!state.checklistCheckedByDate) state.checklistCheckedByDate = {};
        if (!state.customChecklistByDate) state.customChecklistByDate = {};

        if (!state.checklistCheckedByDate[todayDateStr]) {
            state.checklistCheckedByDate[todayDateStr] = {};
        }
        if (!state.customChecklistByDate[todayDateStr]) {
            state.customChecklistByDate[todayDateStr] = [];
        }

        const list = [];
        state.schedule.forEach((row, idx) => {
            const slot = row[currentDayName] || { title: "Free Time", category: "break" };
            const isTaskCategory = ["python", "dsa", "web", "app", "design"].includes(slot.category);

            if (isTaskCategory) {
                const taskId = `slot_${idx}`;
                const isChecked = state.checklistCheckedByDate[todayDateStr][taskId] || false;
                list.push({
                    id: taskId,
                    text: `${row.time} - ${slot.title}`,
                    checked: isChecked,
                    isFromSchedule: true,
                    rowIndex: idx
                });
            }
        });

        state.customChecklistByDate[todayDateStr].forEach(task => {
            const isChecked = state.checklistCheckedByDate[todayDateStr][task.id] || false;
            list.push({
                id: task.id,
                text: task.text,
                checked: isChecked,
                isFromSchedule: false
            });
        });

        return list;
    }

    function toggleChecklistItem(taskId, checked) {
        const todayDateStr = new Date().toDateString();
        if (!state.checklistCheckedByDate) state.checklistCheckedByDate = {};
        if (!state.checklistCheckedByDate[todayDateStr]) state.checklistCheckedByDate[todayDateStr] = {};

        state.checklistCheckedByDate[todayDateStr][taskId] = checked;

        const checklist = getTodayChecklist();
        const task = checklist.find(t => t.id === taskId);
        const taskText = task ? task.text : "Task";

        if (checked) {
            markActiveToday();
            autoLogToAnalytics(taskText);
        } else {
            removeLogFromAnalytics(taskText);
        }

        saveState();
        onTaskStateChanged();
    }

    function addCustomTask(text) {
        const todayDateStr = new Date().toDateString();
        if (!state.customChecklistByDate) state.customChecklistByDate = {};
        if (!state.customChecklistByDate[todayDateStr]) state.customChecklistByDate[todayDateStr] = [];

        const newId = "custom_" + Date.now();
        state.customChecklistByDate[todayDateStr].push({
            id: newId,
            text: text
        });
        saveState();
        onTaskStateChanged();
    }

    function deleteCustomTask(taskId) {
        const todayDateStr = new Date().toDateString();

        const checklist = getTodayChecklist();
        const task = checklist.find(t => t.id === taskId);
        if (task) {
            removeLogFromAnalytics(task.text);
        }

        if (state.customChecklistByDate && state.customChecklistByDate[todayDateStr]) {
            state.customChecklistByDate[todayDateStr] = state.customChecklistByDate[todayDateStr].filter(t => t.id !== taskId);
        }
        if (state.checklistCheckedByDate && state.checklistCheckedByDate[todayDateStr]) {
            delete state.checklistCheckedByDate[todayDateStr][taskId];
        }
        saveState();
        onTaskStateChanged();
    }

    function resetTodayChecklist() {
        const todayDateStr = new Date().toDateString();
        if (state.checklistCheckedByDate && state.checklistCheckedByDate[todayDateStr]) {
            const checklist = getTodayChecklist();
            checklist.forEach(task => {
                removeLogFromAnalytics(task.text);
            });
            state.checklistCheckedByDate[todayDateStr] = {};
        }
        saveState();
        onTaskStateChanged();
    }

    function renderDashboard() {
        updateDashboardStats();
        renderDailyChecklist();
        renderHabits();
        renderAchievements();
        renderTaskVisualizations();
        renderAutoLoggerVisualizations();
        renderTaskDetailPanel();
        updateCardHighlights();
    }

    function renderTaskVisualizations() {
        const container = document.getElementById("dashboard-visualizations-row");
        if (!container || state.currentView !== "dashboard") return;

        // 1. Daily Progress (Today)
        const checklist = getTodayChecklist();
        const totalToday = checklist.length;
        const completedToday = checklist.filter(t => t.checked).length;
        const pctToday = totalToday > 0 ? Math.round((completedToday / totalToday) * 100) : 0;

        const pctText = document.getElementById("viz-daily-pct");
        const fractionText = document.getElementById("viz-daily-fraction");
        const ring = document.getElementById("viz-radial-ring");

        if (pctText) pctText.textContent = `${pctToday}%`;
        if (fractionText) fractionText.textContent = `${completedToday}/${totalToday}`;
        if (ring) {
            const offset = 251.2 - (251.2 * pctToday) / 100;
            ring.style.strokeDashoffset = offset;
        }

        // 2. Weekly Bar Chart (Mon - Sun)
        const chartContainer = document.getElementById("viz-weekly-chart");
        if (chartContainer) {
            chartContainer.innerHTML = "";
            const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            const datesForWeek = getDatesForWeek();

            // Find maximum completions in any day of the week to scale the bars (min height scale is 5)
            let maxCompletions = 5;
            daysOfWeek.forEach(day => {
                const dateStr = datesForWeek[day];
                const dayTasks = state.checklistCheckedByDate ? (state.checklistCheckedByDate[dateStr] || {}) : {};
                const completions = Object.values(dayTasks).filter(v => v === true).length;
                if (completions > maxCompletions) maxCompletions = completions;
            });

            daysOfWeek.forEach(day => {
                const dateStr = datesForWeek[day];
                const dayTasks = state.checklistCheckedByDate ? (state.checklistCheckedByDate[dateStr] || {}) : {};
                const completions = Object.values(dayTasks).filter(v => v === true).length;
                const barPct = Math.round((completions / maxCompletions) * 100);

                const barWrap = document.createElement("div");
                barWrap.className = "chart-bar-wrap";

                // Highlight today's column header
                const todayStr = new Date().toDateString();
                const isToday = dateStr === todayStr;

                barWrap.innerHTML = `
                    <div class="chart-bar-fill" style="height: ${barPct}%;">
                        <div class="chart-bar-tooltip">${completions} task${completions === 1 ? '' : 's'}</div>
                    </div>
                    <span class="chart-bar-label" style="${isToday ? 'color: var(--accent-color); font-weight: 700;' : ''}">${day}</span>
                `;
                chartContainer.appendChild(barWrap);
            });
        }

        // 3. Monthly and Lifetime Stats
        const monthlyCountEl = document.getElementById("viz-monthly-count");
        const lifetimeCountEl = document.getElementById("viz-lifetime-count");
        const dailyAvgEl = document.getElementById("viz-daily-avg");

        const monthlyCompletions = getMonthChecklistStats();
        const lifetimeCompletions = getLifetimeChecklistStats();

        // Calculate average completions per day the user completed at least 1 task
        let uniqueDaysWithCompletions = 0;
        if (state.checklistCheckedByDate) {
            Object.values(state.checklistCheckedByDate).forEach(dayTasks => {
                const completions = Object.values(dayTasks).filter(v => v === true).length;
                if (completions > 0) uniqueDaysWithCompletions++;
            });
        }
        const dailyAvg = uniqueDaysWithCompletions > 0 ? (lifetimeCompletions / uniqueDaysWithCompletions).toFixed(1) : "0.0";

        if (monthlyCountEl) monthlyCountEl.textContent = monthlyCompletions;
        if (lifetimeCountEl) lifetimeCountEl.textContent = lifetimeCompletions;
        if (dailyAvgEl) dailyAvgEl.textContent = dailyAvg;

        safeCreateIcons();
    }

    // Helper functions for task metrics
    function getDatesForWeek() {
        const today = new Date();
        const currentDay = today.getDay(); // 0 is Sun, 1 is Mon, etc.
        const mondayDiff = currentDay === 0 ? -6 : 1 - currentDay; // diff to get to Monday

        const dates = {};
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        for (let i = 0; i < 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + mondayDiff + i);
            dates[days[i]] = d.toDateString();
        }
        return dates;
    }

    function getMonthChecklistStats() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        let totalCompleted = 0;

        if (state.checklistCheckedByDate) {
            Object.keys(state.checklistCheckedByDate).forEach(dateStr => {
                const d = new Date(dateStr);
                if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
                    const dayTasks = state.checklistCheckedByDate[dateStr] || {};
                    totalCompleted += Object.values(dayTasks).filter(v => v === true).length;
                }
            });
        }
        return totalCompleted;
    }

    function getLifetimeChecklistStats() {
        let totalCompleted = 0;
        if (state.checklistCheckedByDate) {
            Object.keys(state.checklistCheckedByDate).forEach(dateStr => {
                const dayTasks = state.checklistCheckedByDate[dateStr] || {};
                totalCompleted += Object.values(dayTasks).filter(v => v === true).length;
            });
        }
        return totalCompleted;
    }

    function updateDashboardStats() {
        // 1. Checklist Stats
        const checklist = getTodayChecklist();
        const totalTasks = checklist.length;
        const completedTasks = checklist.filter(t => t.checked).length;
        const checklistPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        document.getElementById("stat-checklist-percent").textContent = `${checklistPercent}%`;
        document.getElementById("stat-checklist-progress").style.width = `${checklistPercent}%`;
        document.getElementById("stat-checklist-summary").textContent = `${completedTasks} of ${totalTasks} tasks completed`;

        // 2. Study Hours Stats
        let totalTarget = 0;
        let totalLogged = 0;
        Object.values(state.goals).forEach(goal => {
            if (goal.category !== "break") {
                totalTarget += goal.target;
                totalLogged += goal.current;
            }
        });

        const studyPercent = totalTarget > 0 ? Math.min(Math.round((totalLogged / totalTarget) * 100), 100) : 0;
        document.getElementById("stat-study-hours").textContent = `${totalLogged}h / ${totalTarget}h`;
        document.getElementById("stat-study-progress").style.width = `${studyPercent}%`;
    }

    // Daily Checklist Widget
    function renderDailyChecklist() {
        const container = document.getElementById("checklist-items-container");
        container.innerHTML = "";

        const checklist = getTodayChecklist();

        if (checklist.length === 0) {
            container.innerHTML = `<p class="text-muted" style="font-size: 0.85rem; text-align: center; padding: 20px 0;">No tasks for today. Add one below!</p>`;
            return;
        }

        checklist.forEach(task => {
            const item = document.createElement("div");
            item.className = `checklist-item ${task.checked ? "checked" : ""}`;

            let deleteBtnHtml = '';
            if (task.isFromSchedule) {
                deleteBtnHtml = `
                <span class="schedule-link-icon" style="color: var(--text-muted); font-size: 0.75rem; display: flex; align-items: center;" title="Timed Schedule Block">
                    <i data-lucide="clock" style="width: 14px; height: 14px;"></i>
                </span>
            `;
            } else {
                deleteBtnHtml = `
                <button class="delete-task-btn" title="Delete custom task">
                    <i data-lucide="trash-2"></i>
                </button>
            `;
            }

            item.innerHTML = `
            <div class="checkbox-circle">
                <i data-lucide="check"></i>
            </div>
            <span class="checklist-text">${task.text}</span>
            ${deleteBtnHtml}
        `;

            // Click to toggle
            item.addEventListener("click", (e) => {
                if (e.target.closest(".delete-task-btn")) return;
                toggleChecklistItem(task.id, !task.checked);
                item.classList.toggle("checked");
            });

            // Click to delete
            if (!task.isFromSchedule) {
                item.querySelector(".delete-task-btn").addEventListener("click", () => {
                    deleteCustomTask(task.id);
                });
            }

            container.appendChild(item);
        });
        safeCreateIcons();
    }

    function initChecklistAdder() {
        const input = document.getElementById("new-task-input");
        const addBtn = document.getElementById("add-task-btn");
        const resetBtn = document.getElementById("reset-checklist");

        function addTask() {
            const text = input.value.trim();
            if (text) {
                addCustomTask(text);
                input.value = "";
            }
        }

        addBtn.addEventListener("click", addTask);
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") addTask();
        });

        resetBtn.addEventListener("click", () => {
            resetTodayChecklist();
        });
    }

    // Habit Tracking Widget
    function renderHabits() {
        Object.keys(state.habits).forEach(key => {
            const button = document.getElementById(`habit-${key}`);
            const streakText = document.getElementById(`streak-${key}`);
            const habit = state.habits[key];

            // Apply active states
            if (habit.checked) {
                button.classList.add("done");
            } else {
                button.classList.remove("done");
            }

            streakText.textContent = `${habit.streak} day${habit.streak === 1 ? "" : "s"}`;
        });
    }

    function initHabitTracker() {
        Object.keys(state.habits).forEach(key => {
            const button = document.getElementById(`habit-${key}`);

            button.addEventListener("click", () => {
                const habit = state.habits[key];
                habit.checked = !habit.checked;

                if (habit.checked) {
                    habit.streak += 1;
                    button.classList.add("done");
                    markActiveToday();
                } else {
                    habit.streak = Math.max(0, habit.streak - 1);
                    button.classList.remove("done");
                }

                state.lastHabitDate = new Date().toDateString();
                renderHabits();
                renderAchievements();
                saveState();
            });
        });
    }

    // ==========================================================================
    // Pomodoro Focus Timer Widget
    // ==========================================================================

    let timerInterval = null;
    let timerTimeLeft = 1500; // default 25m
    let timerTotalTime = 1500;
    let timerMode = "pomodoro"; // pomodoro, short, long
    let timerRunning = false;

    function initPomodoroTimer() {
        const clock = document.getElementById("timer-clock");
        const toggleBtn = document.getElementById("timer-toggle-btn");
        const resetBtn = document.getElementById("timer-reset-btn");
        const toggleIcon = document.getElementById("timer-toggle-icon");
        const ringFill = document.getElementById("timer-progress-ring");

        // Mode Buttons switching
        document.querySelectorAll(".timer-mode-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".timer-mode-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const seconds = parseInt(btn.getAttribute("data-time"));
                timerMode = btn.getAttribute("data-mode");

                pauseTimer();
                timerTimeLeft = seconds;
                timerTotalTime = seconds;
                updateTimerDisplay();
            });
        });

        toggleBtn.addEventListener("click", () => {
            if (timerRunning) {
                pauseTimer();
            } else {
                startTimer();
            }
        });

        resetBtn.addEventListener("click", () => {
            pauseTimer();
            timerTimeLeft = timerTotalTime;
            updateTimerDisplay();
        });

        function startTimer() {
            timerRunning = true;
            toggleIcon.setAttribute("data-lucide", "pause");
            toggleBtn.title = "Pause Session";
            document.getElementById("stat-timer-state").textContent = `Focus Timer: Studying`;
            safeCreateIcons();

            timerInterval = setInterval(() => {
                timerTimeLeft--;
                updateTimerDisplay();

                if (timerTimeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerRunning = false;

                    // Ring complete bell
                    const bell = document.getElementById("timer-bell");
                    if (bell) {
                        bell.play().catch(err => console.log("Sound play prevented", err));
                    }

                    alert(`Timer Finished! Mode: ${timerMode.toUpperCase()}`);

                    // Log study session automatically
                    if (timerMode === "pomodoro") {
                        state.pomodorosCompleted = (state.pomodorosCompleted || 0) + 1;
                        logSubjectHour("python", 1); // default addition
                    }

                    resetBtn.click();
                }
            }, 1000);
        }

        function pauseTimer() {
            timerRunning = false;
            clearInterval(timerInterval);
            toggleIcon.setAttribute("data-lucide", "play");
            toggleBtn.title = "Start Session";
            document.getElementById("stat-timer-state").textContent = `Focus Timer: Paused`;
            safeCreateIcons();
        }

        function updateTimerDisplay() {
            const mins = Math.floor(timerTimeLeft / 60);
            const secs = timerTimeLeft % 60;
            const timeStr = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

            clock.textContent = timeStr;
            document.getElementById("stat-timer-display").textContent = timeStr;

            // Progress Fill
            const offset = 283 * (1 - timerTimeLeft / timerTotalTime);
            ringFill.style.strokeDashoffset = offset;

            // Miniature progress fill on stats card
            const barPercent = Math.round((timerTimeLeft / timerTotalTime) * 100);
            document.getElementById("stat-timer-progress").style.width = `${barPercent}%`;
        }
    }

    // ==========================================================================
    // Weekly Planner view logic
    // ==========================================================================

    const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    function renderWeeklySchedule() {
        // 1. Highlight current day column header
        const daysLookup = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const currentDayName = daysLookup[new Date().getDay()];

        const dayIndexes = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
        const todayIndex = dayIndexes[currentDayName];

        const headers = document.querySelectorAll("#planner-table th");
        headers.forEach((th, idx) => {
            th.classList.remove("today-header");
            if (todayIndex !== undefined && idx === todayIndex) {
                th.classList.add("today-header");
            }
        });

        const activeRowIndex = getActiveRowIndex();

        // 2. Render table body
        const tbody = document.getElementById("planner-table-body");
        tbody.innerHTML = "";

        state.schedule.forEach((row, rowIndex) => {
            const tr = document.createElement("tr");

            // Time Column
            const tdTime = document.createElement("td");
            tdTime.textContent = row.time;
            tr.appendChild(tdTime);

            // Day Columns
            DAYS.forEach(day => {
                const tdCell = document.createElement("td");
                tdCell.className = "timetable-cell";
                tdCell.dataset.rowIndex = rowIndex;
                tdCell.dataset.day = day;

                // Highlight today's column
                if (day === currentDayName) {
                    tdCell.classList.add("today-col");
                    // Highlight active time block
                    if (rowIndex === activeRowIndex) {
                        tdCell.classList.add("active-now-cell");
                    }
                }

                const slot = row[day] || { title: "", category: "break" };

                const card = document.createElement("div");
                card.className = `cell-content-card cell-${slot.category}`;
                card.innerHTML = `
                <div class="cell-title">${slot.title}</div>
            `;

                tdCell.appendChild(card);

                // Set cell click listener to open the edit modal
                tdCell.addEventListener("click", () => openEventEditModal(rowIndex, day, slot));

                tr.appendChild(tdCell);
            });

            tbody.appendChild(tr);
        });
    }

    let activeEditCell = null;

    function openEventEditModal(rowIndex, day, slot) {
        activeEditCell = { rowIndex, day };

        // Format full day name
        const dayNames = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };

        document.getElementById("modal-event-details").textContent = `${dayNames[day]} at ${state.schedule[rowIndex].time}`;
        document.getElementById("event-title").value = slot.title;

        // Reset categories selection
        const container = document.getElementById("modal-category-select");
        container.querySelectorAll(".category-option").forEach(opt => {
            opt.classList.remove("active");
            if (opt.getAttribute("data-category") === slot.category) {
                opt.classList.add("active");
            }
        });

        document.getElementById("edit-event-modal").classList.add("active");
    }

    function initEventEditModal() {
        const modal = document.getElementById("edit-event-modal");
        const closeBtn = document.getElementById("close-event-modal");
        const cancelBtn = document.getElementById("cancel-event-save");
        const saveBtn = document.getElementById("save-event-btn");
        const titleInput = document.getElementById("event-title");

        // Category Select triggers
        const categories = document.getElementById("modal-category-select");
        categories.querySelectorAll(".category-option").forEach(opt => {
            opt.addEventListener("click", () => {
                categories.querySelectorAll(".category-option").forEach(b => b.classList.remove("active"));
                opt.classList.add("active");
            });
        });

        function closeModal() {
            modal.classList.remove("active");
            activeEditCell = null;
        }

        closeBtn.addEventListener("click", closeModal);
        cancelBtn.addEventListener("click", closeModal);

        saveBtn.addEventListener("click", () => {
            if (!activeEditCell) return;
            const { rowIndex, day } = activeEditCell;

            const title = titleInput.value.trim() || "Free Time";
            const selectedOpt = categories.querySelector(".category-option.active");
            const category = selectedOpt ? selectedOpt.getAttribute("data-category") : "break";

            // Update state
            state.schedule[rowIndex][day] = { title, category };

            saveState();
            renderWeeklySchedule();
            closeModal();
        });

        // Reset timetable trigger
        document.getElementById("reset-schedule-btn").addEventListener("click", () => {
            if (confirm("Are you sure you want to reset the timetable back to default? All custom additions will be cleared.")) {
                state.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
                saveState();
                renderWeeklySchedule();
            }
        });
    }

    // ==========================================================================
    // Subject Goals Progress view
    // ==========================================================================

    function renderGoals() {
        const container = document.getElementById("goals-container");
        container.innerHTML = "";

        Object.values(state.goals).forEach(goal => {
            const card = document.createElement("div");
            card.className = `goal-card card-${goal.category}`;

            const percent = goal.target > 0 ? Math.min(Math.round((goal.current / goal.target) * 100), 100) : 0;

            card.innerHTML = `
            <div class="goal-image-banner" style="background-image: url('images/goal_${goal.category}.png')"></div>
            <div class="goal-card-content">
                <div class="goal-card-header">
                    <div class="goal-title-area">
                        <span class="goal-subject">${goal.title}</span>
                        <span class="goal-subtitle">Subject Track</span>
                    </div>
                    <span class="goal-badge bg-${goal.color}">${percent}%</span>
                </div>
                <div class="goal-progress-section">
                    <div class="goal-progress-numbers">
                        <span>${goal.current} hrs completed</span>
                        <span>Target: ${goal.target} hrs</span>
                    </div>
                    <div class="goal-progress-bar">
                        <div class="goal-progress-fill bg-${goal.color}" style="width: ${percent}%"></div>
                    </div>
                </div>
                <div class="goal-actions">
                    <span class="goal-log-label">Log hours spent today:</span>
                    <div class="log-hours-controls">
                        <button class="log-btn decrement" title="Remove 1 hour"><i data-lucide="minus"></i></button>
                        <button class="log-btn increment" title="Add 1 hour"><i data-lucide="plus"></i></button>
                    </div>
                </div>
            </div>
        `;

            // Click actions
            card.querySelector(".decrement").addEventListener("click", () => {
                logSubjectHour(goal.id, -1);
            });

            card.querySelector(".increment").addEventListener("click", () => {
                logSubjectHour(goal.id, 1);
            });

            container.appendChild(card);
        });
        safeCreateIcons();
    }

    function logSubjectHour(subjectId, offset) {
        const goal = state.goals[subjectId];
        if (goal) {
            goal.current = Math.max(0, goal.current + offset);
            if (offset > 0) {
                markActiveToday();
                // Add to weekly activity hours
                const daysLookup = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                const dayName = daysLookup[new Date().getDay()];
                if (!state.weeklyActivityHours) {
                    state.weeklyActivityHours = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
                }
                state.weeklyActivityHours[dayName] = Math.max(0, (state.weeklyActivityHours[dayName] || 0) + offset);
            }
            saveState();
            syncStateToServer();
            if (state.currentView === "goals") {
                renderGoals();
            } else if (state.currentView === "dashboard") {
                updateDashboardStats();
                renderAchievements();
            }
        }
    }

    // ==========================================================================
    // Notion Pages Documents View
    // ==========================================================================

    function renderSidebarDocuments() {
        const list = document.getElementById("documents-list");
        if (!list) return;
        list.innerHTML = "";

        const searchInput = document.getElementById("doc-search-input");
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        const filteredDocs = state.documents.filter(doc => {
            if (!query) return true;
            const titleMatch = (doc.title || "").toLowerCase().includes(query);
            const contentMatch = (doc.content || "").toLowerCase().includes(query);
            return titleMatch || contentMatch;
        });

        if (filteredDocs.length === 0) {
            const li = document.createElement("li");
            li.style.padding = "8px 12px";
            li.style.color = "var(--text-muted)";
            li.style.fontSize = "0.8rem";
            li.style.fontStyle = "italic";
            li.textContent = "No pages found";
            list.appendChild(li);
            return;
        }

        filteredDocs.forEach(doc => {
            const li = document.createElement("li");
            li.className = `menu-item ${state.activeDocumentId === doc.id ? "active" : ""}`;
            li.dataset.docId = doc.id;
            li.innerHTML = `
            <span>${doc.emoji || "📝"}</span>
            <span>${doc.title || "Untitled"}</span>
        `;

            li.addEventListener("click", () => {
                switchView("document", doc.id);
            });

            list.appendChild(li);
        });
    }

    function parseMarkdown(text) {
        if (!text) return '<p class="text-muted" style="font-style: italic;">Empty note page. Type something in Edit mode!</p>';
        
        let html = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Bold, Italic, Code
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/`(.*?)`/g, '<code>$1</code>');

        // Checklists
        html = html.replace(/^- \[x\] (.*$)/gim, '<div class="preview-todo-item checked"><span class="preview-checkbox">✓</span> $1</div>');
        html = html.replace(/^- \[ \] (.*$)/gim, '<div class="preview-todo-item"><span class="preview-checkbox"></span> $1</div>');

        // Bullet Lists
        html = html.replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>');
        html = html.replace(/<\/ul>\s*<ul>/g, '');

        // Links [text](url)
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

        // Paragraphs
        const blocks = html.split(/\n\n+/);
        const formattedBlocks = blocks.map(block => {
            const trimmed = block.trim();
            if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<div class="preview-todo')) {
                return block;
            }
            return `<p>${block.replace(/\n/g, '<br>')}</p>`;
        });

        return formattedBlocks.join('\n');
    }

    function initDocumentModeToggle() {
        const editBtn = document.getElementById("doc-edit-mode-btn");
        const previewBtn = document.getElementById("doc-preview-mode-btn");
        const textarea = document.getElementById("doc-textarea");
        const previewArea = document.getElementById("doc-preview-area");

        if (!editBtn || !previewBtn || !textarea || !previewArea) return;

        editBtn.addEventListener("click", () => {
            editBtn.classList.add("active");
            previewBtn.classList.remove("active");
            textarea.style.display = "block";
            previewArea.style.display = "none";
        });

        previewBtn.addEventListener("click", () => {
            previewBtn.classList.add("active");
            editBtn.classList.remove("active");
            textarea.style.display = "none";
            previewArea.style.display = "block";

            if (state.activeDocumentId) {
                const doc = state.documents.find(d => d.id === state.activeDocumentId);
                if (doc) {
                    previewArea.innerHTML = parseMarkdown(doc.content || "");
                }
            }
        });
    }

    function loadDocumentEditor(docId) {
        const doc = state.documents.find(d => d.id === docId);
        if (!doc) return;

        const emojiBtn = document.getElementById("doc-emoji-btn");
        const titleInput = document.getElementById("doc-title-input");
        const textarea = document.getElementById("doc-textarea");
        const previewArea = document.getElementById("doc-preview-area");
        const editBtn = document.getElementById("doc-edit-mode-btn");
        const previewBtn = document.getElementById("doc-preview-mode-btn");

        if (editBtn && previewBtn && textarea && previewArea) {
            editBtn.classList.add("active");
            previewBtn.classList.remove("active");
            textarea.style.display = "block";
            previewArea.style.display = "none";
        }

        emojiBtn.textContent = doc.emoji || "📝";
        titleInput.value = doc.title || "";
        textarea.value = doc.content || "";

        const mainTitle = document.getElementById("page-title");
        mainTitle.textContent = doc.title || "Untitled";
        mainTitle.setAttribute("contenteditable", "true");

        titleInput.oninput = () => {
            doc.title = titleInput.value.trim() || "Untitled Note";
            mainTitle.textContent = doc.title;
            renderSidebarDocuments();
            saveState();
        };

        mainTitle.oninput = () => {
            doc.title = mainTitle.textContent.trim() || "Untitled Note";
            titleInput.value = doc.title;
            renderSidebarDocuments();
            saveState();
        };

        textarea.oninput = () => {
            doc.content = textarea.value;
            saveState();
        };

        emojiBtn.onclick = (e) => {
            e.stopPropagation();
            const mainPicker = document.getElementById("emoji-picker");
            mainPicker.classList.toggle("active");

            const originalOptions = mainPicker.querySelectorAll(".emoji-option");
            originalOptions.forEach(opt => {
                const clone = opt.cloneNode(true);
                opt.parentNode.replaceChild(clone, opt);

                clone.onclick = () => {
                    const selected = clone.textContent;
                    doc.emoji = selected;
                    emojiBtn.textContent = selected;
                    document.getElementById("page-emoji-btn").textContent = selected;
                    renderSidebarDocuments();
                    saveState();
                    mainPicker.classList.remove("active");
                };
            });
        };
    }

    function createNewDocument() {
        const newId = "doc_" + Date.now();
        const newDoc = {
            id: newId,
            title: "Untitled Page",
            emoji: "📝",
            content: ""
        };

        state.documents.push(newDoc);
        saveState();
        renderSidebarDocuments();
        switchView("document", newId);
    }

    function initDocumentControls() {
        const deleteBtn = document.getElementById("delete-doc-btn");

        deleteBtn.addEventListener("click", () => {
            if (!state.activeDocumentId) return;

            if (confirm("Are you sure you want to delete this page permanently?")) {
                state.documents = state.documents.filter(d => d.id !== state.activeDocumentId);
                state.activeDocumentId = null;
                saveState();
                renderSidebarDocuments();
                switchView("dashboard");
            }
        });
    }

    // ==========================================================================
    // Settings, Theme and Data Managers
    // ==========================================================================

    function initSettings() {
        // Font selection
        document.querySelectorAll(".font-option").forEach(opt => {
            opt.addEventListener("click", () => {
                document.querySelectorAll(".font-option").forEach(b => b.classList.remove("active"));
                opt.classList.add("active");

                const fontName = opt.getAttribute("data-font");
                applyFont(fontName);
            });
        });

        // Accent selection
        document.querySelectorAll(".accent-dot").forEach(opt => {
            opt.addEventListener("click", () => {
                document.querySelectorAll(".accent-dot").forEach(b => b.classList.remove("active"));
                opt.classList.add("active");

                const accent = opt.getAttribute("data-accent");
                applyAccentColor(accent);
            });
        });

        // Backup & Factory Reset Actions
        document.getElementById("export-data-btn").addEventListener("click", () => {
            const fileContent = JSON.stringify(state, null, 2);
            const blob = new Blob([fileContent], { type: "application/json" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = `notion_workspace_backup_${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        const fileInput = document.getElementById("import-data-file");
        const importTrigger = document.getElementById("import-data-trigger");

        importTrigger.addEventListener("click", () => {
            fileInput.click();
        });

        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    // Simple validations
                    if (imported.schedule && imported.checklist && imported.goals) {
                        state = { ...state, ...imported };
                        saveState();
                        alert("Workspace data imported successfully!");
                        window.location.reload();
                    } else {
                        alert("Invalid JSON format. Check backup compatibility.");
                    }
                } catch (err) {
                    alert("Error reading JSON backup. File is corrupted.");
                }
            };
            reader.readAsText(file);
        });

        document.getElementById("clear-all-data-btn").addEventListener("click", () => {
            if (confirm("WARNING: This will wipe all changes, logged hours, streaks and notes. Restore factory default state?")) {
                localStorage.removeItem(STORAGE_KEY);
                alert("Workspace data reset to default.");
                window.location.reload();
            }
        });

        const recreateBtn = document.getElementById("recreate-guides-btn");
        if (recreateBtn) {
            recreateBtn.addEventListener("click", () => {
                if (confirm("Restore default Notion workspace help guides? This will append the 'Getting Started Guide' and 'Study Resources & Links' if they are missing or reset them to default.")) {
                    DEFAULT_DOCUMENTS.forEach(defaultDoc => {
                        const existingIdx = state.documents.findIndex(d => d.id === defaultDoc.id);
                        if (existingIdx !== -1) {
                            state.documents[existingIdx] = JSON.parse(JSON.stringify(defaultDoc));
                        } else {
                            state.documents.push(JSON.parse(JSON.stringify(defaultDoc)));
                        }
                    });
                    saveState();
                    syncStateToServer();
                    renderSidebarDocuments();
                    alert("Default Notion help guides successfully restored!");
                }
            });
        }
    }

    function applyFont(fontName) {
        document.body.classList.remove("font-sans", "font-serif", "font-mono");
        document.body.classList.add(fontName);
        state.font = fontName;
        saveState();
    }

    function applyAccentColor(accent) {
        state.accent = accent;
        const colors = {
            blue: { primary: "#3b82f6", rgb: "59, 130, 246", hover: "#2563eb" },
            purple: { primary: "#8b5cf6", rgb: "139, 92, 246", hover: "#7c3aed" },
            green: { primary: "#10b981", rgb: "16, 185, 129", hover: "#059669" },
            orange: { primary: "#f97316", rgb: "249, 115, 22", hover: "#ea580c" }
        };

        const token = colors[accent] || colors.blue;
        document.documentElement.style.setProperty("--accent-color", token.primary);
        document.documentElement.style.setProperty("--accent-color-hover", token.hover);
        document.documentElement.style.setProperty("--accent-rgb", token.rgb);

        saveState();
    }

    let pollInterval = null;

    function startServerSyncPolling() {
        if (pollInterval) clearInterval(pollInterval);

        // Poll cloud every 30 seconds for updates from other devices
        pollInterval = setInterval(() => {
            if (!isCloudEnabled()) return;

            loadFromCloud(imported => {
                if (!imported) return;
                if (imported.lastUpdatedTime && state.lastUpdatedTime && imported.lastUpdatedTime > state.lastUpdatedTime) {
                    console.log("Cloud real-time sync: Newer state detected. Merging...");
                    const oldCustomCovers = state.customCovers || {};
                    state = { ...state, ...imported, customCovers: oldCustomCovers };
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

                    updateCloudSyncStatus('synced');

                    if (state.currentView === "dashboard") {
                        renderDashboard();
                    } else if (state.currentView === "schedule") {
                        renderWeeklySchedule();
                    } else if (state.currentView === "goals") {
                        renderGoals();
                    } else if (state.currentView === "document" && state.activeDocumentId) {
                        loadDocumentEditor(state.activeDocumentId);
                        renderSidebarDocuments();
                    }
                }
            });
        }, 30000); // poll every 30s
    }

    function initWorkspaceApp() {
        // First load from localStorage for instant render
        loadState();

        // Auto-setup cloud on first launch (creates JSONBin if not configured)
        // Then load from cloud if newer data exists
        autoSetupCloud(() => {
            loadFromCloud(cloudData => {
                if (cloudData && cloudData.lastUpdatedTime && cloudData.lastUpdatedTime > (state.lastUpdatedTime || 0)) {
                    console.log("Cloud state is newer. Merging from cloud...");
                    const covers = state.customCovers || {};
                    state = { ...state, ...cloudData, customCovers: covers };
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                    validateHabitsStreak();
                }
                checkWeeklyReset(true);
                completeInit();
            });
        });

        function completeInit() {
            initNavigation();
            initEmojiPickers();
            initCoverUpload();

            initChecklistAdder();
            initHabitTracker();
            initPomodoroTimer();
            initDocumentModeToggle();
            initStatCardClickListeners();

            initEventEditModal();
            initDocumentControls();
            initSettings();
            initCloudSyncSettings();

            // Bind doc search box input
            const searchInput = document.getElementById("doc-search-input");
            if (searchInput) {
                searchInput.addEventListener("input", () => {
                    renderSidebarDocuments();
                });
            }

            renderSidebarDocuments();
            initRouting();

            startRealtimeSyncTimer();
            startServerSyncPolling();

            // Update cloud status badge on startup
            setTimeout(() => {
                if (isCloudEnabled()) {
                    updateCloudSyncStatus('synced');
                } else {
                    updateCloudSyncStatus('offline');
                }
            }, 500);

            window.addEventListener('storage', (e) => {
                if (e.key === STORAGE_KEY) {
                    loadState();

                    if (state.currentView === "dashboard") {
                        renderDashboard();
                    } else if (state.currentView === "schedule") {
                        renderWeeklySchedule();
                    } else if (state.currentView === "goals") {
                        renderGoals();
                    } else if (state.currentView === "document" && state.activeDocumentId) {
                        loadDocumentEditor(state.activeDocumentId);
                        renderSidebarDocuments();
                    }
                }
            });

            setInterval(() => {
                if (state.currentView === "schedule") {
                    renderWeeklySchedule();
                }
            }, 10000);
        }
    }

    function initCloudSyncSettings() {
        const connectBtn = document.getElementById('cloud-connect-btn');
        const disconnectBtn = document.getElementById('cloud-disconnect-btn');
        const apiKeyInput = document.getElementById('cloud-api-key-input');
        const binIdInput = document.getElementById('cloud-bin-id-input');
        const createBinBtn = document.getElementById('cloud-create-bin-btn');
        const cloudSyncNowBtn = document.getElementById('cloud-sync-now-btn');

        if (!connectBtn) return;

        // Populate saved values
        const cfg = getCloudConfig();
        if (apiKeyInput && cfg.apiKey) apiKeyInput.value = cfg.apiKey;
        if (binIdInput && cfg.binId) binIdInput.value = cfg.binId;
        updateCloudSyncStatus(isCloudEnabled() ? 'synced' : 'offline');

        // Create new bin button
        if (createBinBtn) {
            createBinBtn.addEventListener('click', () => {
                const key = apiKeyInput ? apiKeyInput.value.trim() : '';
                if (!key) { alert('Please enter your JSONBin API key first.'); return; }
                createBinBtn.textContent = 'Creating...';
                createBinBtn.disabled = true;
                createCloudBin(key, (err, binId) => {
                    createBinBtn.textContent = '✨ Create New Bin';
                    createBinBtn.disabled = false;
                    if (err) { alert('Error: ' + err); return; }
                    if (binIdInput) binIdInput.value = binId;
                    alert(`✅ Bin created! ID: ${binId}\nNow click "Connect & Sync" to activate.`);
                });
            });
        }

        // Connect button
        connectBtn.addEventListener('click', () => {
            const key = apiKeyInput ? apiKeyInput.value.trim() : '';
            const bin = binIdInput ? binIdInput.value.trim() : '';
            if (!key || !bin) { alert('Please enter both your API Key and Bin ID.'); return; }
            setCloudConfig(key, bin);
            updateCloudSyncStatus('syncing');
            syncToCloud();
            setTimeout(() => updateCloudSyncStatus('synced'), 3000);
            alert('☁️ Cloud sync connected! Your data will now sync across all devices.');
        });

        // Disconnect button
        if (disconnectBtn) {
            disconnectBtn.addEventListener('click', () => {
                if (!confirm('Disconnect cloud sync? Your local data will remain.')) return;
                localStorage.removeItem(CLOUD_KEY);
                if (apiKeyInput) apiKeyInput.value = '';
                if (binIdInput) binIdInput.value = '';
                updateCloudSyncStatus('offline');
            });
        }

        // Manual sync now
        if (cloudSyncNowBtn) {
            cloudSyncNowBtn.addEventListener('click', () => {
                if (!isCloudEnabled()) { alert('Cloud sync not configured. Please connect first.'); return; }
                updateCloudSyncStatus('syncing');
                syncToCloud();
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initWorkspaceApp);
    } else {
        initWorkspaceApp();
    }

    // ==========================================================================
    // Streak Protection & Notification Helper Functions
    // ==========================================================================

    function syncStateToServer() {
        // No-op: server sync replaced by cloud sync (JSONBin)
        // Cloud sync is handled by scheduledCloudSync() called from saveState()
    }

    function startRealtimeSyncTimer() {
        updateLiveClock();
        setInterval(() => {
            updateLiveClock();
            checkMidnightRollover();
        }, 1000);
    }

    function updateLiveClock() {
        const el = document.getElementById("live-datetime-text");
        if (!el) return;

        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        el.textContent = now.toLocaleDateString('en-US', options);
    }

    function checkMidnightRollover() {
        const todayStr = new Date().toDateString();
        if (!state.lastSyncedDate) {
            state.lastSyncedDate = todayStr;
            saveState();
            return;
        }

        if (state.lastSyncedDate !== todayStr) {
            console.log("Midnight Rollover Detected: resetting daily checklist & habit status...");
            state.lastSyncedDate = todayStr;

            checkWeeklyReset(false);
            validateHabitsStreak();
            saveState();

            if (state.currentView === "dashboard") {
                renderDashboard();
            } else if (state.currentView === "schedule") {
                renderWeeklySchedule();
            } else if (state.currentView === "goals") {
                renderGoals();
            }
        }
    }
    // Socket.io Real-time Updates (Past, Present, Future)
const socket = io();

socket.on('workUpdate', (data) => {
    const now = new Date().getTime();
    
    if (data.tasks) {
        data.tasks = data.tasks.map(task => {
            const taskTime = new Date(task.dueDate).getTime();
            task.status = taskTime < now ? 'past' : 
                         taskTime === now ? 'present' : 'future';
            return task;
        });
    }
    
    console.log('Real-time update received:', data);
    // Re-render current view
    if (state.currentView === "dashboard") {
        renderDashboard();
    } else if (state.currentView === "schedule") {
        renderWeeklySchedule();
    } else if (state.currentView === "goals") {
        renderGoals();
    }
});

socket.on('initialState', (state) => {
    console.log('Initial state loaded via Socket.io');
});

// ==========================================================================
// Auto-Logger System & Visualizations Rendering
// ==========================================================================

function onTaskStateChanged() {
    if (state.currentView === "dashboard") {
        updateDashboardStats();
        renderDailyChecklist();
        renderTaskVisualizations();
        renderAutoLoggerVisualizations();
        renderTaskDetailPanel();
        renderAchievements();
    }
}

function detectCategory(text) {
    text = text.toLowerCase();
    if (text.includes('python') || text.includes('ai') || text.includes('ml'))
        return 'python';
    if (text.includes('dsa') || text.includes('array') || text.includes('tree')
        || text.includes('stack') || text.includes('queue') || text.includes('graph'))
        return 'dsa';
    if (text.includes('web') || text.includes('html') || text.includes('react')
        || text.includes('node') || text.includes('js'))
        return 'webdev';
    if (text.includes('app dev') || text.includes('app'))
        return 'appdev';
    if (text.includes('photoshop') || text.includes('premiere')
        || text.includes('canva') || text.includes('design')
        || text.includes('after effects'))
        return 'design';
    if (text.includes('leetcode') || text.includes('leet'))
        return 'leet';
    if (text.includes('revision') || text.includes('review'))
        return 'revision';
    return 'other';
}

let taskDetailSearchQuery = "";

function getAllTasks() {
    const tasksList = [];
    const datesSet = new Set();
    
    // Add today and yesterday
    const today = new Date();
    datesSet.add(today.toDateString());
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    datesSet.add(yesterday.toDateString());
    
    // Add any dates from checklistCheckedByDate
    if (state.checklistCheckedByDate) {
        Object.keys(state.checklistCheckedByDate).forEach(dStr => {
            datesSet.add(dStr);
        });
    }
    // Add any dates from customChecklistByDate
    if (state.customChecklistByDate) {
        Object.keys(state.customChecklistByDate).forEach(dStr => {
            datesSet.add(dStr);
        });
    }
    
    // Add any dates from jagt_tasks
    const jagtTasks = JSON.parse(localStorage.getItem('jagt_tasks') || '[]');
    jagtTasks.forEach(jt => {
        if (jt.date) {
            const parts = jt.date.split('-');
            if (parts.length === 3) {
                const d = new Date(parts[0], parts[1] - 1, parts[2]);
                datesSet.add(d.toDateString());
            }
        }
    });
    
    datesSet.forEach(dateStr => {
        const dateObj = new Date(dateStr);
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = dayNames[dateObj.getDay()];
        
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const dayVal = String(dateObj.getDate()).padStart(2, '0');
        const dateISO_full = `${year}-${month}-${dayVal}`;
        
        const dayChecked = state.checklistCheckedByDate && state.checklistCheckedByDate[dateStr] ? state.checklistCheckedByDate[dateStr] : {};
        const dayCustom = state.customChecklistByDate && state.customChecklistByDate[dateStr] ? state.customChecklistByDate[dateStr] : [];
        const dayJagt = jagtTasks.filter(jt => jt.date === dateISO_full);
        
        const matchedJagtIndexes = new Set();
        
        // 1. Scheduled Tasks
        state.schedule.forEach((row, idx) => {
            const slot = row[dayName] || { title: "Free Time", category: "break" };
            const isTaskCategory = ["python", "dsa", "web", "app", "design"].includes(slot.category);
            
            if (isTaskCategory) {
                const taskId = `slot_${idx}`;
                const isChecked = dayChecked[taskId] || false;
                const taskName = `${row.time} - ${slot.title}`;
                
                let completedAt = null;
                const jagtIndex = dayJagt.findIndex((jt, jIdx) => !matchedJagtIndexes.has(jIdx) && jt.text === taskName);
                if (jagtIndex !== -1) {
                    matchedJagtIndexes.add(jagtIndex);
                    const jt = dayJagt[jagtIndex];
                    const [cHour, cMin] = jt.time.split(':').map(Number);
                    completedAt = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), cHour, cMin, 0, 0);
                } else if (isChecked) {
                    completedAt = new Date(dateObj);
                }
                
                const scheduledDate = new Date(dateObj);
                const mins = timeToMinutes(row.time);
                scheduledDate.setHours(Math.floor(mins / 60), mins % 60, 0, 0);
                
                let status = "pending";
                if (completedAt) {
                    status = "done";
                } else {
                    const todayStr = new Date().toDateString();
                    if (dateStr === todayStr) {
                        status = "ongoing";
                    }
                }
                
                tasksList.push({
                    id: `${dateISO_full}_sched_${idx}`,
                    name: taskName,
                    subject: slot.category === "web" ? "webdev" : slot.category === "app" ? "appdev" : slot.category,
                    scheduledDate: scheduledDate,
                    completedAt: completedAt,
                    status: status
                });
            }
        });
        
        // 2. Custom Tasks
        dayCustom.forEach(task => {
            const isChecked = dayChecked[task.id] || false;
            const taskName = task.text;
            
            let completedAt = null;
            const jagtIndex = dayJagt.findIndex((jt, jIdx) => !matchedJagtIndexes.has(jIdx) && jt.text === taskName);
            if (jagtIndex !== -1) {
                matchedJagtIndexes.add(jagtIndex);
                const jt = dayJagt[jagtIndex];
                const [cHour, cMin] = jt.time.split(':').map(Number);
                completedAt = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), cHour, cMin, 0, 0);
            } else if (isChecked) {
                completedAt = new Date(dateObj);
            }
            
            const scheduledDate = new Date(dateObj);
            scheduledDate.setHours(0, 0, 0, 0);
            
            let status = "pending";
            if (completedAt) {
                status = "done";
            } else {
                const todayStr = new Date().toDateString();
                if (dateStr === todayStr) {
                    status = "ongoing";
                }
            }
            
            tasksList.push({
                id: task.id,
                name: taskName,
                subject: detectCategory(taskName),
                scheduledDate: scheduledDate,
                completedAt: completedAt,
                status: status
            });
        });
        
        // 3. Unmatched completed tasks in jagt_tasks
        dayJagt.forEach((jt, jIdx) => {
            if (!matchedJagtIndexes.has(jIdx)) {
                const [cHour, cMin] = jt.time.split(':').map(Number);
                const completedAt = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), cHour, cMin, 0, 0);
                
                const scheduledDate = new Date(dateObj);
                scheduledDate.setHours(0, 0, 0, 0);
                
                tasksList.push({
                    id: `${dateISO_full}_jagt_${jIdx}`,
                    name: jt.text,
                    subject: jt.cat,
                    scheduledDate: scheduledDate,
                    completedAt: completedAt,
                    status: "done"
                });
            }
        });
    });
    
    return tasksList;
}

function getTasksForPeriod(period) {
    const allTasks = getAllTasks();
    const completedTasks = [];
    const incompleteTasks = [];
    
    const now = new Date();
    const todayStr = now.toDateString();
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    const currentDay = now.getDay();
    const mondayDiff = currentDay === 0 ? -6 : 1 - currentDay;
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() + mondayDiff);
    weekStart.setHours(0, 0, 0, 0);
    
    const weekDates = Object.values(getDatesForWeek());
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    allTasks.forEach(task => {
        const completedDateStr = task.completedAt ? new Date(task.completedAt).toDateString() : null;
        const completedTime = task.completedAt ? new Date(task.completedAt).getTime() : null;
        const scheduledTime = new Date(task.scheduledDate).getTime();
        const scheduledDateStr = new Date(task.scheduledDate).toDateString();
        
        if (period === "yesterday") {
            if (completedDateStr === yesterdayStr) {
                completedTasks.push(task);
            } else if (!task.completedAt && scheduledDateStr === yesterdayStr) {
                incompleteTasks.push(task);
            }
        } else if (period === "today") {
            if (completedDateStr === todayStr) {
                completedTasks.push(task);
            } else if (!task.completedAt && scheduledDateStr === todayStr) {
                incompleteTasks.push(task);
            }
        } else if (period === "week") {
            if (completedTime && completedTime >= weekStart.getTime() && completedTime <= now.getTime()) {
                completedTasks.push(task);
            } else if (!task.completedAt && weekDates.includes(scheduledDateStr)) {
                if (scheduledDateStr !== todayStr) {
                    incompleteTasks.push(task);
                }
            }
        } else if (period === "month") {
            if (completedTime && completedTime >= new Date(currentYear, currentMonth, 1).getTime() && completedTime <= now.getTime()) {
                completedTasks.push(task);
            } else if (!task.completedAt && new Date(task.scheduledDate).getMonth() === currentMonth && new Date(task.scheduledDate).getFullYear() === currentYear) {
                if (scheduledDateStr !== todayStr) {
                    incompleteTasks.push(task);
                }
            }
        } else if (period === "lifetime") {
            if (task.completedAt !== null) {
                completedTasks.push(task);
            } else {
                incompleteTasks.push(task);
            }
        }
    });
    
    return { completedTasks, incompleteTasks };
}

function setActivePeriod(period) {
    if (state.activePeriod === period) {
        state.activePeriod = null;
    } else {
        state.activePeriod = period;
        taskDetailSearchQuery = "";
    }
    
    saveState();
    renderTaskDetailPanel();
    updateCardHighlights();
    
    if (state.currentView === "dashboard") {
        renderAutoLoggerVisualizations();
    }
}

function updateCardHighlights() {
    const periods = ["yesterday", "today", "week", "month", "lifetime"];
    periods.forEach(p => {
        const card = document.getElementById(`card-${p}`);
        if (card) {
            if (state.activePeriod === p) {
                card.classList.add("highlight");
            } else {
                card.classList.remove("highlight");
            }
        }
    });
}

function formatTaskDate(date) {
    if (!date) return "";
    const d = new Date(date);
    const parts = d.toDateString().split(" ");
    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${parts[1]} ${parts[2]} @ ${timeStr}`;
}

function getStatusLineText(task) {
    const now = new Date();
    const todayStr = now.toDateString();
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (task.completedAt) {
        const compDate = new Date(task.completedAt);
        const compStr = compDate.toDateString();
        const timeStr = compDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        
        if (compStr === todayStr) {
            return `Completed today at ${timeStr}`;
        } else if (compStr === yesterdayStr) {
            return `Completed yesterday at ${timeStr}`;
        } else {
            const parts = compDate.toDateString().split(" ");
            return `Completed on ${parts[1]} ${parts[2]} at ${timeStr}`;
        }
    } else {
        const schedDate = new Date(task.scheduledDate);
        const schedStr = schedDate.toDateString();
        const timeStr = schedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        
        const nowZero = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const schedZero = new Date(schedDate.getFullYear(), schedDate.getMonth(), schedDate.getDate());
        
        if (schedStr === todayStr) {
            return `Pending — still due today`;
        } else if (schedStr === yesterdayStr) {
            return `You did not complete this task yesterday`;
        } else if (schedZero.getTime() < nowZero.getTime()) {
            const parts = schedDate.toDateString().split(" ");
            return `You did not complete this task on ${parts[1]} ${parts[2]}`;
        } else {
            const parts = schedDate.toDateString().split(" ");
            return `Pending — due on ${parts[1]} ${parts[2]} at ${timeStr}`;
        }
    }
}

function renderTaskDetailPanel() {
    const panel = document.getElementById("task-detail-panel");
    if (!panel) return;
    
    if (!state.activePeriod) {
        panel.style.display = "none";
        panel.classList.remove("active");
        return;
    }
    
    panel.style.display = "flex";
    panel.classList.add("active");
    
    const period = state.activePeriod;
    const { completedTasks, incompleteTasks } = getTasksForPeriod(period);
    
    const titles = {
        yesterday: "Yesterday's Tasks",
        today: "Today's Tasks",
        week: "This Week's Tasks",
        month: "This Month's Tasks",
        lifetime: "All-Time Tasks"
    };
    
    const pendingLabels = {
        yesterday: "Incomplete",
        today: "Ongoing",
        week: "Incomplete",
        month: "Incomplete",
        lifetime: "Incomplete"
    };
    
    const titleText = titles[period] || "Tasks";
    const pendingLabel = pendingLabels[period] || "Pending";
    
    let filteredCompleted = completedTasks;
    let filteredIncomplete = incompleteTasks;
    
    if (period === "lifetime" && taskDetailSearchQuery.trim() !== "") {
        const query = taskDetailSearchQuery.toLowerCase().trim();
        filteredCompleted = completedTasks.filter(t => t.name.toLowerCase().includes(query));
        filteredIncomplete = incompleteTasks.filter(t => t.name.toLowerCase().includes(query));
    }
    
    panel.innerHTML = `
        <div class="panel-header">
            <div class="panel-title-area">
                <h3 class="panel-title">${titleText}</h3>
                <div class="panel-badges">
                    <span class="panel-badge badge-done">${filteredCompleted.length} Completed</span>
                    <span class="panel-badge badge-pending">${filteredIncomplete.length} ${pendingLabel}</span>
                </div>
            </div>
            <button class="panel-close-btn" id="panel-close-trigger" title="Close Panel">
                <i data-lucide="x"></i>
            </button>
        </div>
        
        ${period === 'lifetime' ? `
        <div class="panel-search-container">
            <i data-lucide="search" class="search-icon"></i>
            <input type="text" id="panel-search-input" placeholder="Search tasks by name..." spellcheck="false" value="${taskDetailSearchQuery}">
        </div>
        ` : ''}
        
        <div class="panel-lists-container ${period === 'lifetime' ? 'scrollable-lists' : ''}">
            <div class="panel-section" id="section-completed">
                <div class="panel-section-header" id="header-completed">
                    <div class="section-label">
                        <i data-lucide="check-circle" class="text-green"></i>
                        <span>Done</span>
                    </div>
                    <i data-lucide="chevron-down" class="section-toggle-icon"></i>
                </div>
                <div class="panel-section-content" id="content-completed"></div>
            </div>
            
            <div class="panel-section" id="section-incomplete">
                <div class="panel-section-header" id="header-incomplete">
                    <div class="section-label">
                        <i data-lucide="${period === 'today' ? 'play' : 'clock'}" class="${period === 'today' ? 'text-blue' : 'text-orange'}"></i>
                        <span>${pendingLabel}</span>
                    </div>
                    <i data-lucide="chevron-down" class="section-toggle-icon"></i>
                </div>
                <div class="panel-section-content" id="content-incomplete"></div>
            </div>
        </div>
    `;
    
    renderListRows(filteredCompleted, "completed");
    renderListRows(filteredIncomplete, "incomplete");
    
    document.getElementById("panel-close-trigger").addEventListener("click", () => {
        setActivePeriod(null);
    });
    
    if (period === "lifetime") {
        const searchInput = document.getElementById("panel-search-input");
        searchInput.addEventListener("input", (e) => {
            taskDetailSearchQuery = e.target.value;
            const query = taskDetailSearchQuery.toLowerCase().trim();
            const searchCompleted = completedTasks.filter(t => t.name.toLowerCase().includes(query));
            const searchIncomplete = incompleteTasks.filter(t => t.name.toLowerCase().includes(query));
            
            panel.querySelector(".badge-done").textContent = `${searchCompleted.length} Completed`;
            panel.querySelector(".badge-pending").textContent = `${searchIncomplete.length} ${pendingLabel}`;
            
            renderListRows(searchCompleted, "completed");
            renderListRows(searchIncomplete, "incomplete");
        });
    }
    
    document.getElementById("header-completed").addEventListener("click", () => {
        document.getElementById("section-completed").classList.toggle("collapsed");
    });
    
    document.getElementById("header-incomplete").addEventListener("click", () => {
        document.getElementById("section-incomplete").classList.toggle("collapsed");
    });
    
    safeCreateIcons();
}

function renderListRows(tasks, sectionId) {
    const container = document.getElementById(`content-${sectionId}`);
    if (!container) return;
    
    container.innerHTML = "";
    
    if (tasks.length === 0) {
        container.innerHTML = `<p class="text-muted" style="font-size: 0.78rem; font-style: italic; text-align: center; padding: 10px 0;">No tasks ${sectionId === 'completed' ? 'completed' : 'pending'} for this period</p>`;
        return;
    }
    
    const catBadges = {
        python: "badge-python",
        dsa: "badge-dsa",
        webdev: "badge-webdev",
        appdev: "badge-appdev",
        design: "badge-design",
        leet: "badge-leet",
        revision: "badge-revision",
        other: "badge-other"
    };
    
    const catLabels = {
        python: "Python + AI",
        dsa: "DSA",
        webdev: "Web Dev",
        appdev: "App Dev",
        design: "Design",
        leet: "LeetCode",
        revision: "Revision",
        other: "Other"
    };
    
    tasks.forEach(task => {
        const row = document.createElement("div");
        row.className = "task-row";
        
        let iconHtml = '';
        if (sectionId === "completed") {
            iconHtml = `<i data-lucide="check" class="text-green"></i>`;
        } else {
            if (task.status === "ongoing") {
                iconHtml = `<span class="pulsing-dot"></span>`;
            } else {
                iconHtml = `<i data-lucide="clock" class="text-orange"></i>`;
            }
        }
        
        const displayTime = formatTaskDate(sectionId === "completed" ? task.completedAt : task.scheduledDate);
        const statusLine = getStatusLineText(task);
        
        row.innerHTML = `
            <div class="task-row-left">
                <div class="task-row-icon-wrap">
                    ${iconHtml}
                </div>
                <div class="task-row-text-group" style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                    <span class="task-row-name" title="${task.name}">${task.name}</span>
                    <span class="task-row-status-line" style="font-size: 0.72rem; color: var(--text-muted); font-weight: 400;">${statusLine}</span>
                </div>
            </div>
            <div class="task-row-right">
                <span class="logger-cat-badge ${catBadges[task.subject] || 'badge-other'}">${catLabels[task.subject] || task.subject}</span>
                <span class="task-row-time">${displayTime}</span>
            </div>
        `;
        
        container.appendChild(row);
    });
    
    safeCreateIcons();
}

function initStatCardClickListeners() {
    const periods = ["yesterday", "today", "week", "month", "lifetime"];
    periods.forEach(p => {
        const card = document.getElementById(`card-${p}`);
        if (card) {
            card.addEventListener("click", () => {
                setActivePeriod(p);
            });
        }
    });
}

function autoLogToAnalytics(taskText) {
    let tasks = JSON.parse(localStorage.getItem('jagt_tasks') || '[]');
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 5);

    const cat = detectCategory(taskText);
    const newEntry = {
        text: taskText,
        cat: cat,
        date: date,
        time: time,
        auto: true
    };

    const alreadyLogged = tasks.some(t =>
        t.text === taskText && t.date === date
    );

    if (!alreadyLogged) {
        tasks.push(newEntry);
        localStorage.setItem('jagt_tasks', JSON.stringify(tasks));
        console.log(`Auto-logged to Analytics: ${taskText}`);
    }
}

function removeLogFromAnalytics(taskText) {
    let tasks = JSON.parse(localStorage.getItem('jagt_tasks') || '[]');
    const today = new Date().toISOString().slice(0, 10);
    tasks = tasks.filter(t =>
        !(t.text === taskText && t.date === today)
    );
    localStorage.setItem('jagt_tasks', JSON.stringify(tasks));
    console.log(`Removed from Analytics log: ${taskText}`);
}

function renderAutoLoggerVisualizations() {
    const container = document.getElementById("dashboard-auto-logger-row");
    if (!container || state.currentView !== "dashboard") return;

    // 1. Calculate counts using getTasksForPeriod to ensure 100% alignment
    const yesterdayCount = getTasksForPeriod("yesterday").completedTasks.length;
    const todayCount = getTasksForPeriod("today").completedTasks.length;
    const weekCount = getTasksForPeriod("week").completedTasks.length;
    const monthCount = getTasksForPeriod("month").completedTasks.length;
    const totalCount = getTasksForPeriod("lifetime").completedTasks.length;

    const yesterdayEl = document.getElementById("log-yesterday-cnt");
    const todayEl = document.getElementById("log-today-cnt");
    const weekEl = document.getElementById("log-week-cnt");
    const monthEl = document.getElementById("log-month-cnt");
    const totalEl = document.getElementById("log-total-cnt");

    if (yesterdayEl) yesterdayEl.textContent = yesterdayCount;
    if (todayEl) todayEl.textContent = todayCount;
    if (weekEl) weekEl.textContent = weekCount;
    if (monthEl) monthEl.textContent = monthCount;
    if (totalEl) totalEl.textContent = totalCount;

    // Filter tasks based on activePeriod for Subject Performance and Ordered Task Log (Step 7 Sync)
    const activePeriod = state.activePeriod || "lifetime";
    const completedForPeriod = getTasksForPeriod(activePeriod).completedTasks;
    const filteredTasks = completedForPeriod.map(t => ({
        text: t.name,
        cat: t.subject,
        date: t.completedAt ? new Date(t.completedAt).toISOString().slice(0, 10) : new Date(t.scheduledDate).toISOString().slice(0, 10),
        time: t.completedAt ? new Date(t.completedAt).toTimeString().slice(0, 5) : ""
    }));

    let perfTitleText = "Subject Performance";
    let logTitleText = "Ordered Task Log (Recent)";

    if (state.activePeriod) {
        if (state.activePeriod === "yesterday") {
            perfTitleText = "Subject Performance (Yesterday)";
            logTitleText = "Ordered Task Log (Yesterday)";
        } else if (state.activePeriod === "today") {
            perfTitleText = "Subject Performance (Today)";
            logTitleText = "Ordered Task Log (Today)";
        } else if (state.activePeriod === "week") {
            perfTitleText = "Subject Performance (This Week)";
            logTitleText = "Ordered Task Log (This Week)";
        } else if (state.activePeriod === "month") {
            perfTitleText = "Subject Performance (This Month)";
            logTitleText = "Ordered Task Log (This Month)";
        } else if (state.activePeriod === "lifetime") {
            perfTitleText = "Subject Performance (Lifetime)";
            logTitleText = "Ordered Task Log (Lifetime)";
        }
    }

    const perfTitleEl = document.getElementById("logger-perf-title");
    const logTitleEl = document.getElementById("logger-log-title");
    if (perfTitleEl) perfTitleEl.textContent = perfTitleText;
    if (logTitleEl) logTitleEl.textContent = logTitleText;

    // 2. Render Subject Performance Progress Bars
    const barsContainer = document.getElementById("logger-bars-container");
    if (barsContainer) {
        barsContainer.innerHTML = "";
        const catCounts = {
            python: 0,
            dsa: 0,
            webdev: 0,
            appdev: 0,
            design: 0,
            leet: 0,
            revision: 0,
            other: 0
        };

        filteredTasks.forEach(t => {
            if (catCounts[t.cat] !== undefined) {
                catCounts[t.cat]++;
            } else {
                catCounts.other++;
            }
        });

        const catNames = {
            python: "Python + AI/ML",
            dsa: "DSA",
            webdev: "Web Dev",
            appdev: "App Dev",
            design: "Design / Edit",
            leet: "LeetCode",
            revision: "Revision",
            other: "Other"
        };

        const catIcons = {
            python: "terminal",
            dsa: "shield",
            webdev: "code",
            appdev: "smartphone",
            design: "image",
            leet: "zap",
            revision: "rotate-ccw",
            other: "help-circle"
        };

        let maxCount = 5;
        Object.values(catCounts).forEach(c => {
            if (c > maxCount) maxCount = c;
        });

        Object.keys(catCounts).forEach(cat => {
            const count = catCounts[cat];
            const pct = Math.round((count / maxCount) * 100);

            const barItem = document.createElement("div");
            barItem.className = "logger-bar-item";
            barItem.innerHTML = `
                <div class="logger-bar-meta">
                    <span class="logger-bar-name">
                        <i data-lucide="${catIcons[cat]}" style="width:12px; height:12px; opacity:0.8;"></i>
                        ${catNames[cat]}
                    </span>
                    <span class="logger-bar-cnt">${count} logged</span>
                </div>
                <div class="logger-bar-outer">
                    <div class="logger-bar-inner bg-bar-${cat}" style="width: ${pct}%;"></div>
                </div>
            `;
            barsContainer.appendChild(barItem);
        });
    }

    // 3. Render Ordered Log List (Recent 6 entries)
    const historyContainer = document.getElementById("logger-history-container");
    if (historyContainer) {
        historyContainer.innerHTML = "";

        const recentTasks = [...filteredTasks].reverse().slice(0, 6);

        if (recentTasks.length === 0) {
            historyContainer.innerHTML = `<p class="text-muted" style="font-size: 0.8rem; text-align: center; padding: 30px 0;">No tasks auto-logged yet. Tick checklist items to log them!</p>`;
            return;
        }

        const catBadges = {
            python: "badge-python",
            dsa: "badge-dsa",
            webdev: "badge-webdev",
            appdev: "badge-appdev",
            design: "badge-design",
            leet: "badge-leet",
            revision: "badge-revision",
            other: "badge-other"
        };

        const catLabels = {
            python: "Python + AI",
            dsa: "DSA",
            webdev: "Web Dev",
            appdev: "App Dev",
            design: "Design",
            leet: "LeetCode",
            revision: "Revision",
            other: "Other"
        };

        recentTasks.forEach(t => {
            const item = document.createElement("div");
            item.className = "logger-history-item";

            const dateParts = new Date(t.date).toDateString().split(" ");
            const displayDate = `${dateParts[1]} ${dateParts[2]}`;

            item.innerHTML = `
                <div class="logger-hist-left">
                    <span class="logger-hist-text" title="${t.text}">${t.text}</span>
                    <span class="logger-hist-time-tag">${displayDate} @ ${t.time}</span>
                </div>
                <div class="logger-hist-right">
                    <span class="logger-cat-badge ${catBadges[t.cat] || 'badge-other'}">${catLabels[t.cat] || t.cat}</span>
                    <span class="logger-auto-tag">Auto</span>
                </div>
            `;
            historyContainer.appendChild(item);
        });
    }

    safeCreateIcons();
}

// Global listeners and polling for jagt_tasks
window.addEventListener('storage', function(e) {
    if (e.key === 'jagt_tasks') {
        onTaskStateChanged();
    }
});

setInterval(function() {
    if (state.currentView === "dashboard") {
        renderAutoLoggerVisualizations();
    }
}, 30000);
