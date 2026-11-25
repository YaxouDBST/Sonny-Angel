/**
 * ============================================================================
 * SonnyDex — Application 100 % locale (LocalStorage)
 * Aucune base de données ni compte requis.
 * ============================================================================
 */

const STORAGE_KEY = "sonnydex-collection-v1";
const LEGACY_STORAGE_KEYS = ["sonnydex-guest-v2"];

/**
 * ============================================================================
 * Catalogue officiel Sonny Angel (JSON)
 * 4 séries authentiques · 56 figurines (12 régulières + 2 secrets par série)
 * ============================================================================
 */
export const OFFICIAL_CATALOG = [
  {
    id: "animal",
    name: "Animal Series",
    shortName: "Animal",
    emoji: "🐰",
    accent: "#F7EFE6",
    figures: [
      { id: "animal-v1-rabbit", nameFr: "Lapin", nameEn: "Rabbit", emoji: "🐰", isSecret: false, isRobby: false },
      { id: "animal-v1-elephant", nameFr: "Éléphant", nameEn: "Elephant", emoji: "🐘", isSecret: false, isRobby: false },
      { id: "animal-v1-monkey", nameFr: "Singe", nameEn: "Monkey", emoji: "🐵", isSecret: false, isRobby: false },
      { id: "animal-v1-tiger", nameFr: "Tigre", nameEn: "Tiger", emoji: "🐯", isSecret: false, isRobby: false },
      { id: "animal-v1-koala", nameFr: "Koala", nameEn: "Koala", emoji: "🐨", isSecret: false, isRobby: false },
      { id: "animal-v1-panda", nameFr: "Panda", nameEn: "Panda", emoji: "🐼", isSecret: false, isRobby: false },
      { id: "animal-v1-lion", nameFr: "Lion", nameEn: "Lion", emoji: "🦁", isSecret: false, isRobby: false },
      { id: "animal-v1-frog", nameFr: "Grenouille", nameEn: "Frog", emoji: "🐸", isSecret: false, isRobby: false },
      { id: "animal-v1-rooster", nameFr: "Coq", nameEn: "Rooster", emoji: "🐓", isSecret: false, isRobby: false },
      { id: "animal-v1-dalmatian", nameFr: "Dalmatien", nameEn: "Dalmatian", emoji: "🐶", isSecret: false, isRobby: false },
      { id: "animal-v1-giraffe", nameFr: "Girafe", nameEn: "Giraffe", emoji: "🦒", isSecret: false, isRobby: false },
      { id: "animal-v1-bear", nameFr: "Ours", nameEn: "Bear", emoji: "🐻", isSecret: false, isRobby: false },
      { id: "animal-v1-secret-unicorn", nameFr: "Licorne", nameEn: "Unicorn", emoji: "🦄", isSecret: true, isRobby: false },
      { id: "animal-v1-secret-robby", nameFr: "Robby Angel", nameEn: "Robby Angel", emoji: "👼", isSecret: true, isRobby: true },
    ],
  },
  {
    id: "fruit",
    name: "Fruit Series",
    shortName: "Fruit",
    emoji: "🍓",
    accent: "#FFF0F3",
    figures: [
      { id: "fruit-strawberry", nameFr: "Fraise", nameEn: "Strawberry", emoji: "🍓", isSecret: false, isRobby: false },
      { id: "fruit-watermelon", nameFr: "Pastèque", nameEn: "Watermelon", emoji: "🍉", isSecret: false, isRobby: false },
      { id: "fruit-melon", nameFr: "Melon", nameEn: "Melon", emoji: "🍈", isSecret: false, isRobby: false },
      { id: "fruit-pineapple", nameFr: "Ananas", nameEn: "Pineapple", emoji: "🍍", isSecret: false, isRobby: false },
      { id: "fruit-apple", nameFr: "Pomme", nameEn: "Apple", emoji: "🍎", isSecret: false, isRobby: false },
      { id: "fruit-peach", nameFr: "Pêche", nameEn: "Peach", emoji: "🍑", isSecret: false, isRobby: false },
      { id: "fruit-grape", nameFr: "Raisin", nameEn: "Grape", emoji: "🍇", isSecret: false, isRobby: false },
      { id: "fruit-banana", nameFr: "Banane", nameEn: "Banana", emoji: "🍌", isSecret: false, isRobby: false },
      { id: "fruit-lemon", nameFr: "Citron", nameEn: "Lemon", emoji: "🍋", isSecret: false, isRobby: false },
      { id: "fruit-orange", nameFr: "Orange", nameEn: "Orange", emoji: "🍊", isSecret: false, isRobby: false },
      { id: "fruit-pear", nameFr: "Poire", nameEn: "Pear", emoji: "🍐", isSecret: false, isRobby: false },
      { id: "fruit-dragon-fruit", nameFr: "Fruit du Dragon", nameEn: "Dragon Fruit", emoji: "🐉", isSecret: false, isRobby: false },
      { id: "fruit-secret-sprout", nameFr: "Pousse", nameEn: "Sprout", emoji: "🌱", isSecret: true, isRobby: false },
      { id: "fruit-secret-robby", nameFr: "Robby Angel", nameEn: "Robby Angel", emoji: "👼", isSecret: true, isRobby: true },
    ],
  },
  {
    id: "marine",
    name: "Marine Series",
    shortName: "Marine",
    emoji: "🐬",
    accent: "#EDF7FA",
    figures: [
      { id: "marine-dolphin", nameFr: "Dauphin", nameEn: "Dolphin", emoji: "🐬", isSecret: false, isRobby: false },
      { id: "marine-whale", nameFr: "Baleine", nameEn: "Whale", emoji: "🐳", isSecret: false, isRobby: false },
      { id: "marine-shark", nameFr: "Requin", nameEn: "Shark", emoji: "🦈", isSecret: false, isRobby: false },
      { id: "marine-penguin", nameFr: "Pingouin", nameEn: "Penguin", emoji: "🐧", isSecret: false, isRobby: false },
      { id: "marine-seal", nameFr: "Phoque", nameEn: "Seal", emoji: "🦭", isSecret: false, isRobby: false },
      { id: "marine-clownfish", nameFr: "Poisson-clown", nameEn: "Clownfish", emoji: "🐠", isSecret: false, isRobby: false },
      { id: "marine-starfish", nameFr: "Étoile de mer", nameEn: "Starfish", emoji: "⭐", isSecret: false, isRobby: false },
      { id: "marine-seahorse", nameFr: "Hippocampe", nameEn: "Seahorse", emoji: "🐚", isSecret: false, isRobby: false },
      { id: "marine-octopus", nameFr: "Pieuvre", nameEn: "Octopus", emoji: "🐙", isSecret: false, isRobby: false },
      { id: "marine-jellyfish", nameFr: "Méduse", nameEn: "Jellyfish", emoji: "🪼", isSecret: false, isRobby: false },
      { id: "marine-manta-ray", nameFr: "Raie manta", nameEn: "Manta Ray", emoji: "🐟", isSecret: false, isRobby: false },
      { id: "marine-turtle", nameFr: "Tortue", nameEn: "Turtle", emoji: "🐢", isSecret: false, isRobby: false },
      { id: "marine-secret-mermaid", nameFr: "Sirène", nameEn: "Mermaid", emoji: "🧜‍♀️", isSecret: true, isRobby: false },
      { id: "marine-secret-robby", nameFr: "Robby Angel", nameEn: "Robby Angel", emoji: "👼", isSecret: true, isRobby: true },
    ],
  },
  {
    id: "looking-back-hippers",
    name: "Looking Back Hippers",
    shortName: "Hippers",
    emoji: "🍑",
    accent: "#FFF2EB",
    figures: [
      { id: "hippers-lb-rabbit", nameFr: "Lapin", nameEn: "Rabbit", emoji: "🐰", isSecret: false, isRobby: false },
      { id: "hippers-lb-cat", nameFr: "Chat", nameEn: "Cat", emoji: "🐱", isSecret: false, isRobby: false },
      { id: "hippers-lb-elephant", nameFr: "Éléphant", nameEn: "Elephant", emoji: "🐘", isSecret: false, isRobby: false },
      { id: "hippers-lb-mouse", nameFr: "Souris", nameEn: "Mouse", emoji: "🐭", isSecret: false, isRobby: false },
      { id: "hippers-lb-koala", nameFr: "Koala", nameEn: "Koala", emoji: "🐨", isSecret: false, isRobby: false },
      { id: "hippers-lb-sheep", nameFr: "Mouton", nameEn: "Sheep", emoji: "🐑", isSecret: false, isRobby: false },
      { id: "hippers-lb-fawn", nameFr: "Faon", nameEn: "Fawn", emoji: "🦌", isSecret: false, isRobby: false },
      { id: "hippers-lb-panda", nameFr: "Panda", nameEn: "Panda", emoji: "🐼", isSecret: false, isRobby: false },
      { id: "hippers-lb-pig", nameFr: "Cochon", nameEn: "Pig", emoji: "🐷", isSecret: false, isRobby: false },
      { id: "hippers-lb-dog", nameFr: "Chien", nameEn: "Dog", emoji: "🐶", isSecret: false, isRobby: false },
      { id: "hippers-lb-lion", nameFr: "Lion", nameEn: "Lion", emoji: "🦁", isSecret: false, isRobby: false },
      { id: "hippers-lb-squirrel", nameFr: "Écureuil", nameEn: "Squirrel", emoji: "🐿️", isSecret: false, isRobby: false },
      { id: "hippers-lb-secret-unicorn", nameFr: "Licorne", nameEn: "Unicorn", emoji: "🦄", isSecret: true, isRobby: false },
      { id: "hippers-lb-secret-robby", nameFr: "Robby Angel Hipper", nameEn: "Robby Angel Hipper", emoji: "👼", isSecret: true, isRobby: true },
    ],
  },
];

// Index rapides pour retrouver une série ou une figurine en O(1)
const SERIES_BY_ID = new Map(OFFICIAL_CATALOG.map((series) => [series.id, series]));
const FIGURES_BY_ID = new Map();
for (const series of OFFICIAL_CATALOG) {
  for (const figure of series.figures) {
    FIGURES_BY_ID.set(figure.id, { ...figure, seriesId: series.id, seriesName: series.name, accent: series.accent });
  }
}
const ALL_FIGURES = [...FIGURES_BY_ID.values()];

const QUICK_FILTERS = [
  { id: "all", label: "Tous" },
  { id: "owned", label: "Acquis ✓" },
  { id: "wishlist", label: "À acheter ♡" },
  { id: "missing", label: "Manquants" },
  { id: "secrets", label: "✦ Secrets" },
];

/**
 * ============================================================================
 * Références DOM & État applicatif
 * ============================================================================
 */
const el = {
  statOwned: document.querySelector("#stat-owned"),
  statTotal: document.querySelector("#stat-total"),
  statPercent: document.querySelector("#stat-percent"),
  statValue: document.querySelector("#stat-value"),
  statWishlist: document.querySelector("#stat-wishlist"),
  statWishlistCard: document.querySelector("#stat-wishlist-card"),
  statDuplicates: document.querySelector("#stat-duplicates"),
  seriesBreakdown: document.querySelector("#series-breakdown"),

  tabCollection: document.querySelector("#tab-collection"),
  tabWishlist: document.querySelector("#tab-wishlist"),
  wishlistBadge: document.querySelector("#wishlist-badge"),

  collectionView: document.querySelector("#collection-view"),
  wishlistView: document.querySelector("#wishlist-view"),
  seriesTabs: document.querySelector("#series-tabs"),
  filterPills: document.querySelector("#filter-pills"),
  activeSeriesSubtitle: document.querySelector("#active-series-subtitle"),
  activeSeriesTitle: document.querySelector("#active-series-title"),
  seriesProgressLabel: document.querySelector("#series-progress-label"),
  seriesProgressBar: document.querySelector("#series-progress-bar"),
  figureGrid: document.querySelector("#figure-grid"),
  emptyFilterState: document.querySelector("#empty-filter-state"),

  wishlistGrid: document.querySelector("#wishlist-grid"),
  wishlistEmpty: document.querySelector("#wishlist-empty"),
  wishlistBackBtn: document.querySelector("#wishlist-back-btn"),

  scanFab: document.querySelector("#scan-fab"),
  cameraInput: document.querySelector("#camera-input"),
  snapDialog: document.querySelector("#snap-dialog"),
  snapVideo: document.querySelector("#snap-video"),
  snapFlash: document.querySelector("#snap-flash"),
  snapClose: document.querySelector("#snap-close"),
  snapFlip: document.querySelector("#snap-flip"),
  snapShutter: document.querySelector("#snap-shutter"),
  snapGalleryBtn: document.querySelector("#snap-gallery-btn"),
  snapFallback: document.querySelector("#snap-fallback"),
  snapFallbackBtn: document.querySelector("#snap-fallback-btn"),

  photoDialog: document.querySelector("#photo-dialog"),
  photoDialogTitle: document.querySelector("#photo-dialog-title"),
  previewImage: document.querySelector("#preview-image"),
  previewPlaceholder: document.querySelector("#preview-placeholder"),
  photoOpenSnap: document.querySelector("#photo-open-snap"),
  photoFile: document.querySelector("#photo-file"),
  photoRemoveImg: document.querySelector("#photo-remove-img"),
  collectionForm: document.querySelector("#collection-form"),
  photoSearch: document.querySelector("#photo-search"),
  photoSeries: document.querySelector("#photo-series"),
  photoFigure: document.querySelector("#photo-figure"),
  photoDate: document.querySelector("#photo-date"),
  photoPrice: document.querySelector("#photo-price"),
  photoLocation: document.querySelector("#photo-location"),
  photoDuplicates: document.querySelector("#photo-duplicates"),
  dupDec: document.querySelector("#dup-dec"),
  dupInc: document.querySelector("#dup-inc"),
  photoNote: document.querySelector("#photo-note"),
  photoMessage: document.querySelector("#photo-message"),
  saveButton: document.querySelector("#save-button"),
  deleteEntryBtn: document.querySelector("#delete-entry-btn"),

  toast: document.querySelector("#toast"),
};

const state = {
  view: "collection", // 'collection' | 'wishlist'
  activeSeries: OFFICIAL_CATALOG[0].id, // 'all' ou series.id
  activeFilter: "all", // 'all' | 'owned' | 'wishlist' | 'missing' | 'secrets'
  collection: new Map(), // catalog_id -> entry
  pendingFile: null,
  removeExistingPhoto: false,
  previewObjectUrl: null,
  modalDuplicates: 0,
  snapStream: null,
  snapFacingMode: "environment",
  snapTargetFigureId: "",
};

let toastTimer = null;

/**
 * ============================================================================
 * Utilitaires de formatage & notifications
 * ============================================================================
 */
function formatPrice(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "0,00 €";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(num);
}

function formatDate(isoDate) {
  if (!isoDate) return "";
  const parsed = new Date(`${isoDate.slice(0, 10)}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

function displayName(figure) {
  return figure.nameFr === figure.nameEn
    ? figure.nameFr
    : `${figure.nameFr} (${figure.nameEn})`;
}

function normalizeText(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.remove("opacity-0", "translate-y-2");
  el.toast.classList.add("opacity-100", "translate-y-0");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.toast.classList.add("opacity-0", "translate-y-2");
    el.toast.classList.remove("opacity-100", "translate-y-0");
  }, 2800);
}

/**
 * ============================================================================
 * Persistance LocalStorage (100 % autonome dans le navigateur)
 * ============================================================================
 */
function loadCollection() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    // Migration douce si l'utilisateur avait déjà enregistré des données sous l'ancienne clé
    if (!raw) {
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        const legacyRaw = localStorage.getItem(legacyKey);
        if (legacyRaw) {
          raw = legacyRaw;
          localStorage.setItem(STORAGE_KEY, legacyRaw);
          break;
        }
      }
    }
    if (!raw) return new Map();

    const list = JSON.parse(raw);
    const map = new Map();
    for (const item of list) {
      if (FIGURES_BY_ID.has(item.catalog_id)) {
        map.set(item.catalog_id, {
          catalog_id: item.catalog_id,
          status: item.status === "wishlist" ? "wishlist" : "owned",
          duplicates: Math.max(0, Number(item.duplicates) || 0),
          acquired_at: item.acquired_at || "",
          price:
            item.price !== null && item.price !== undefined && item.price !== ""
              ? Number(item.price)
              : null,
          location: item.location || "",
          note: item.note || "",
          photoUrl: item.photoUrl || "",
        });
      }
    }
    return map;
  } catch {
    return new Map();
  }
}

function persistCollection() {
  const serialized = [...state.collection.values()].map((entry) => ({
    catalog_id: entry.catalog_id,
    status: entry.status,
    duplicates: entry.duplicates || 0,
    acquired_at: entry.acquired_at || "",
    price: entry.price ?? null,
    location: entry.location || "",
    note: entry.note || "",
    photoUrl: entry.photoUrl || "",
  }));

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
  } catch (err) {
    if (err?.name === "QuotaExceededError") {
      throw new Error(
        "L'espace de stockage local du navigateur est plein. Retire quelques anciennes photos pour libérer de la place."
      );
    }
    throw err;
  }
}

/**
 * ============================================================================
 * Compression photo côté client (WebP / JPEG max 800 px)
 * ============================================================================
 */
async function compressImage(file) {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const maxDimension = 800;
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const encode = (mimeType, quality) =>
    new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("Échec de compression de la photo."))),
        mimeType,
        quality
      );
    });

  let blob = await encode("image/webp", 0.78);
  if (blob.type !== "image/webp") {
    blob = await encode("image/jpeg", 0.8);
  }
  return blob;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Impossible de lire l'image compressée."));
    reader.readAsDataURL(blob);
  });
}

/**
 * ============================================================================
 * Statistiques & Rendu du Tableau de bord
 * ============================================================================
 */
function computeStats() {
  let ownedCount = 0;
  let wishlistCount = 0;
  let duplicatesCount = 0;
  let totalValue = 0;

  for (const entry of state.collection.values()) {
    if (entry.status === "owned") {
      ownedCount += 1;
      duplicatesCount += entry.duplicates || 0;
      if (entry.price !== null && Number.isFinite(entry.price)) {
        totalValue += entry.price;
      }
    } else if (entry.status === "wishlist") {
      wishlistCount += 1;
    }
  }

  return {
    ownedCount,
    totalCount: ALL_FIGURES.length,
    percent: Math.round((ownedCount / ALL_FIGURES.length) * 100),
    wishlistCount,
    duplicatesCount,
    totalValue,
  };
}

function renderDashboard() {
  const stats = computeStats();
  el.statOwned.textContent = String(stats.ownedCount);
  el.statTotal.textContent = String(stats.totalCount);
  el.statPercent.textContent = `${stats.percent} % complété`;
  el.statValue.textContent = formatPrice(stats.totalValue);
  el.statWishlist.textContent = String(stats.wishlistCount);
  el.statDuplicates.textContent = String(stats.duplicatesCount);
  el.wishlistBadge.textContent = String(stats.wishlistCount);

  el.seriesBreakdown.replaceChildren(
    ...OFFICIAL_CATALOG.map((series) => {
      const ownedInSeries = series.figures.filter(
        (fig) => state.collection.get(fig.id)?.status === "owned"
      ).length;
      const pct = Math.round((ownedInSeries / series.figures.length) * 100);
      const isSelected = state.view === "collection" && state.activeSeries === series.id;

      const card = document.createElement("button");
      card.type = "button";
      card.className = `rounded-xl border p-2.5 text-left transition ${
        isSelected
          ? "border-pastel-dark bg-white shadow-sm"
          : "border-white/80 bg-white/75 hover:bg-white"
      }`;
      card.innerHTML = `
        <div class="flex items-center justify-between gap-1">
          <span class="truncate text-[11px] font-extrabold text-ink">${series.emoji} ${series.shortName}</span>
          <span class="shrink-0 text-[11px] font-extrabold text-pastel-dark">${pct}%</span>
        </div>
        <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F1E7E1]">
          <div class="h-full rounded-full bg-pastel-dark transition-all duration-300" style="width:${pct}%"></div>
        </div>
        <p class="mt-1 text-[10px] font-semibold text-muted">${ownedInSeries}/${series.figures.length} acquis</p>
      `;
      card.addEventListener("click", () => {
        state.view = "collection";
        state.activeSeries = series.id;
        render();
      });
      return card;
    })
  );
}

/**
 * ============================================================================
 * Rendu des onglets, filtres et cartes
 * ============================================================================
 */
function renderNavigation() {
  const isCollection = state.view === "collection";
  el.tabCollection.className = `flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
    isCollection ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"
  }`;
  el.tabWishlist.className = `flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
    !isCollection ? "bg-white text-pastel-dark shadow-sm" : "text-muted hover:text-ink"
  }`;

  el.collectionView.classList.toggle("hidden", !isCollection);
  el.wishlistView.classList.toggle("hidden", isCollection);
}

function renderSeriesTabs() {
  const tabs = [
    { id: "all", label: "Toutes (56)", emoji: "✨" },
    ...OFFICIAL_CATALOG.map((s) => ({ id: s.id, label: s.name, emoji: s.emoji })),
  ];

  el.seriesTabs.replaceChildren(
    ...tabs.map((tab) => {
      const selected = state.activeSeries === tab.id;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.role = "tab";
      btn.setAttribute("aria-selected", String(selected));
      btn.className = `shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold transition ${
        selected
          ? "border-pastel-dark bg-pastel-pale text-pastel-dark shadow-sm"
          : "border-line bg-white text-muted hover:bg-paper hover:text-ink"
      }`;
      btn.innerHTML = `<span aria-hidden="true">${tab.emoji}</span><span>${tab.label}</span>`;
      btn.addEventListener("click", () => {
        state.activeSeries = tab.id;
        renderCollectionView();
        renderDashboard();
      });
      return btn;
    })
  );
}

function renderFilterPills() {
  el.filterPills.replaceChildren(
    ...QUICK_FILTERS.map((filter) => {
      const active = state.activeFilter === filter.id;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition ${
        active
          ? "bg-ink text-white"
          : "border border-line bg-white/80 text-muted hover:bg-paper hover:text-ink"
      }`;
      btn.textContent = filter.label;
      btn.addEventListener("click", () => {
        state.activeFilter = filter.id;
        renderCollectionView();
      });
      return btn;
    })
  );
}

function matchesFilter(figure, entry) {
  const status = entry?.status || "missing";
  switch (state.activeFilter) {
    case "owned":
      return status === "owned";
    case "wishlist":
      return status === "wishlist";
    case "missing":
      return status === "missing";
    case "secrets":
      return figure.isSecret;
    default:
      return true;
  }
}

function createFigureCard(figure, { showSeriesLabel = false } = {}) {
  const entry = state.collection.get(figure.id);
  const status = entry?.status || "missing";
  const card = document.createElement("article");

  // 1) ACQUIS (Carte Polaroid)
  if (status === "owned") {
    card.className = "polaroid-card flex flex-col justify-between rounded-2xl p-2.5 pb-3";

    const photoBox = document.createElement("div");
    photoBox.className =
      "relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl border border-[#F3EAE3]";
    photoBox.style.backgroundColor = figure.accent;

    if (entry.photoUrl) {
      const img = document.createElement("img");
      img.src = entry.photoUrl;
      img.alt = `Photo de ${displayName(figure)}`;
      img.loading = "lazy";
      img.className = "h-full w-full object-cover";
      photoBox.append(img);
    } else {
      photoBox.innerHTML = `
        <div class="flex h-full w-full flex-col items-center justify-center gap-1 text-center">
          <span class="text-5xl drop-shadow-sm">${figure.emoji}</span>
          <span class="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold text-muted">📷 Ajouter photo</span>
        </div>
      `;
    }

    photoBox.addEventListener("click", () => openEditModal(figure.id));

    const ownedBadge = document.createElement("span");
    ownedBadge.className =
      "absolute left-2 top-2 rounded-full border border-emerald-200 bg-emerald-50/95 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700 shadow-sm";
    ownedBadge.textContent = "Acquis ✓";
    photoBox.append(ownedBadge);

    if (figure.isSecret) {
      const secretBadge = document.createElement("span");
      secretBadge.className =
        "absolute right-2 top-2 rounded-full border border-amber-200 bg-amber-50/95 px-2 py-0.5 text-[10px] font-extrabold text-amber-700 shadow-sm";
      secretBadge.textContent = figure.isRobby ? "✦ Robby" : "✦ Secret";
      photoBox.append(secretBadge);
    }

    if ((entry.duplicates || 0) > 0) {
      const dupBadge = document.createElement("span");
      dupBadge.className =
        "absolute bottom-2 right-2 rounded-full bg-ink/85 px-2 py-0.5 text-[10px] font-extrabold text-white backdrop-blur-sm";
      dupBadge.textContent = `+${entry.duplicates} doublon${entry.duplicates > 1 ? "s" : ""}`;
      photoBox.append(dupBadge);
    }

    const caption = document.createElement("div");
    caption.className = "mt-2.5 flex flex-1 flex-col justify-between px-0.5";

    const topMeta = document.createElement("div");
    topMeta.innerHTML = `
      ${
        showSeriesLabel
          ? `<p class="truncate text-[10px] font-extrabold uppercase tracking-wider text-pastel-dark">${figure.seriesName}</p>`
          : ""
      }
      <div class="flex items-start justify-between gap-1">
        <div>
          <h3 class="font-display text-sm font-bold leading-tight text-ink">${figure.nameFr}</h3>
          ${
            figure.nameFr !== figure.nameEn
              ? `<p class="text-[11px] font-semibold text-muted">${figure.nameEn}</p>`
              : ""
          }
        </div>
        <button type="button" class="edit-btn rounded-lg px-1.5 py-0.5 text-xs font-bold text-muted hover:bg-paper hover:text-ink" title="Modifier" aria-label="Modifier ${figure.nameFr}">✎</button>
      </div>
      <div class="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[10px] font-semibold text-muted">
        ${entry.acquired_at ? `<span>📅 ${formatDate(entry.acquired_at)}</span>` : ""}
        ${entry.price !== null ? `<span class="text-ink font-bold">💶 ${formatPrice(entry.price)}</span>` : ""}
      </div>
      ${
        entry.location
          ? `<p class="mt-0.5 truncate text-[10px] font-semibold text-muted">📍 ${escapeHtml(entry.location)}</p>`
          : ""
      }
      ${
        entry.note
          ? `<p class="mt-1 line-clamp-2 text-[10px] italic text-muted">“${escapeHtml(entry.note)}”</p>`
          : ""
      }
    `;

    topMeta.querySelector(".edit-btn").addEventListener("click", () => openEditModal(figure.id));

    const actions = document.createElement("div");
    actions.className = "mt-2.5 flex items-center justify-between gap-1 border-t border-line/70 pt-2";

    const dupLabel = document.createElement("span");
    dupLabel.className = "text-[10px] font-bold text-muted";
    dupLabel.textContent =
      entry.duplicates > 0 ? `Doublons : ${entry.duplicates}` : "Doublon ?";

    const dupControls = document.createElement("div");
    dupControls.className = "flex items-center gap-1";

    if (entry.duplicates > 0) {
      const decBtn = document.createElement("button");
      decBtn.type = "button";
      decBtn.className =
        "rounded-lg border border-line bg-paper px-2 py-1 text-[11px] font-extrabold text-ink hover:bg-pastel-pale";
      decBtn.textContent = "−1";
      decBtn.setAttribute("aria-label", `Retirer un doublon de ${figure.nameFr}`);
      decBtn.addEventListener("click", () => adjustDuplicates(figure.id, -1));
      dupControls.append(decBtn);
    }

    const incBtn = document.createElement("button");
    incBtn.type = "button";
    incBtn.className =
      "rounded-lg border border-[#F3D5DD] bg-pastel-pale px-2 py-1 text-[11px] font-extrabold text-pastel-dark transition hover:bg-pastel hover:text-white";
    incBtn.textContent = "+1";
    incBtn.title = "Ajouter un doublon pour échange";
    incBtn.setAttribute("aria-label", `Ajouter un doublon de ${figure.nameFr}`);
    incBtn.addEventListener("click", () => adjustDuplicates(figure.id, 1));
    dupControls.append(incBtn);

    actions.append(dupLabel, dupControls);
    caption.append(topMeta, actions);
    card.append(photoBox, caption);
    return card;
  }

  // 2) WISHLIST (À acheter ♡)
  if (status === "wishlist") {
    card.className =
      "flex flex-col justify-between rounded-2xl border border-[#FFD4DF] bg-[#FFF8FA] p-2.5 pb-3 shadow-sm transition hover:-translate-y-0.5";

    card.innerHTML = `
      <div>
        <div class="relative flex aspect-square w-full items-center justify-center rounded-xl border border-[#FFE5EC]" style="background-color: ${figure.accent}">
          <span class="text-5xl drop-shadow-sm">${figure.emoji}</span>
          <span class="absolute left-2 top-2 rounded-full border border-[#FFC4D2] bg-white/95 px-2 py-0.5 text-[10px] font-extrabold text-pastel-dark">Wishlist ♡</span>
          ${
            figure.isSecret
              ? `<span class="absolute right-2 top-2 rounded-full border border-amber-200 bg-amber-50/95 px-2 py-0.5 text-[10px] font-extrabold text-amber-700">${figure.isRobby ? "✦ Robby" : "✦ Secret"}</span>`
              : ""
          }
        </div>
        <div class="mt-2.5 px-0.5">
          ${
            showSeriesLabel
              ? `<p class="truncate text-[10px] font-extrabold uppercase tracking-wider text-pastel-dark">${figure.seriesName}</p>`
              : ""
          }
          <h3 class="font-display text-sm font-bold leading-tight text-ink">${figure.nameFr}</h3>
          ${
            figure.nameFr !== figure.nameEn
              ? `<p class="text-[11px] font-semibold text-muted">${figure.nameEn}</p>`
              : ""
          }
        </div>
      </div>
      <div class="mt-2.5 flex flex-col gap-1.5">
        <button type="button" class="acquire-btn w-full rounded-xl bg-pastel-dark px-2.5 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#c75872]">
          📸 J'ai trouvé !
        </button>
        <button type="button" class="unwish-btn w-full rounded-xl border border-[#F5DCE2] bg-white px-2.5 py-1.5 text-[11px] font-bold text-muted transition hover:text-rose-600">
          Retirer de la liste
        </button>
      </div>
    `;

    card.querySelector(".acquire-btn").addEventListener("click", () => openAcquireModal(figure.id));
    card.querySelector(".unwish-btn").addEventListener("click", () => removeWishlist(figure.id));
    return card;
  }

  // 3) NON POSSÉDÉ (Silhouette / Grisé)
  card.className =
    "flex flex-col justify-between rounded-2xl border border-line bg-[#FAF5F0]/80 p-2.5 pb-3 transition hover:bg-white";

  card.innerHTML = `
    <div>
      <div class="relative flex aspect-square w-full items-center justify-center rounded-xl bg-[#EFE9E3]/80">
        <span class="text-5xl opacity-40 grayscale contrast-75 select-none">${figure.emoji}</span>
        <span class="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold text-muted">Manquant</span>
        ${
          figure.isSecret
            ? `<span class="absolute right-2 top-2 rounded-full border border-amber-200/70 bg-amber-50/90 px-2 py-0.5 text-[10px] font-extrabold text-amber-700">${figure.isRobby ? "✦ Robby" : "✦ Secret"}</span>`
            : ""
        }
      </div>
      <div class="mt-2.5 px-0.5">
        ${
          showSeriesLabel
            ? `<p class="truncate text-[10px] font-extrabold uppercase tracking-wider text-muted">${figure.seriesName}</p>`
            : ""
        }
        <h3 class="font-display text-sm font-bold leading-tight text-ink/80">${figure.nameFr}</h3>
        ${
          figure.nameFr !== figure.nameEn
            ? `<p class="text-[11px] font-semibold text-muted/80">${figure.nameEn}</p>`
            : ""
        }
      </div>
    </div>
    <div class="mt-2.5 grid grid-cols-2 gap-1.5">
      <button type="button" class="wish-btn rounded-xl border border-[#F5D6DF] bg-white px-2 py-1.5 text-[11px] font-extrabold text-pastel-dark transition hover:bg-pastel-pale">
        ♡ Wishlist
      </button>
      <button type="button" class="scan-btn rounded-xl border border-line bg-white px-2 py-1.5 text-[11px] font-extrabold text-ink transition hover:bg-paper">
        📸 Scanner
      </button>
    </div>
  `;

  card.querySelector(".wish-btn").addEventListener("click", () => addToWishlist(figure.id));
  card.querySelector(".scan-btn").addEventListener("click", () => openAcquireModal(figure.id));
  return card;
}

function renderCollectionView() {
  renderSeriesTabs();
  renderFilterPills();

  const isAllSeries = state.activeSeries === "all";
  const series = isAllSeries ? null : SERIES_BY_ID.get(state.activeSeries);
  const sourceFigures = isAllSeries
    ? ALL_FIGURES
    : series.figures.map((fig) => FIGURES_BY_ID.get(fig.id));

  const ownedInScope = sourceFigures.filter(
    (fig) => state.collection.get(fig.id)?.status === "owned"
  ).length;

  el.activeSeriesSubtitle.textContent = isAllSeries
    ? "CATALOGUE COMPLET"
    : `SÉRIE OFFICIELLE · ${series.figures.length} FIGURINES`;
  el.activeSeriesTitle.textContent = isAllSeries ? "Toutes les séries" : series.name;
  el.seriesProgressLabel.textContent = `${ownedInScope} / ${sourceFigures.length}`;
  el.seriesProgressBar.style.width = `${Math.round((ownedInScope / sourceFigures.length) * 100)}%`;

  const visibleFigures = sourceFigures.filter((fig) =>
    matchesFilter(fig, state.collection.get(fig.id))
  );

  el.figureGrid.replaceChildren(
    ...visibleFigures.map((fig) => createFigureCard(fig, { showSeriesLabel: isAllSeries }))
  );
  el.emptyFilterState.classList.toggle("hidden", visibleFigures.length > 0);
}

function renderWishlistView() {
  const wishFigures = ALL_FIGURES.filter(
    (fig) => state.collection.get(fig.id)?.status === "wishlist"
  );

  el.wishlistGrid.replaceChildren(
    ...wishFigures.map((fig) => createFigureCard(fig, { showSeriesLabel: true }))
  );
  el.wishlistEmpty.classList.toggle("hidden", wishFigures.length > 0);
}

function render() {
  renderDashboard();
  renderNavigation();
  if (state.view === "collection") {
    renderCollectionView();
  } else {
    renderWishlistView();
  }
}

/**
 * ============================================================================
 * Actions Wishlist, Doublons & Suppression
 * ============================================================================
 */
function addToWishlist(figureId) {
  const figure = FIGURES_BY_ID.get(figureId);
  if (!figure) return;

  try {
    state.collection.set(figureId, {
      catalog_id: figureId,
      status: "wishlist",
      duplicates: 0,
      acquired_at: "",
      price: null,
      location: "",
      note: "",
      photoUrl: "",
    });
    persistCollection();
    render();
    showToast(`${figure.nameFr} ajouté à ta liste d'achats ♡`);
  } catch (error) {
    showToast(error.message || "Impossible d'ajouter à la wishlist.");
  }
}

function removeWishlist(figureId) {
  if (!state.collection.has(figureId)) return;
  try {
    state.collection.delete(figureId);
    persistCollection();
    render();
    showToast("Retiré de ta liste d'achats.");
  } catch (error) {
    showToast(error.message || "Erreur lors de la suppression.");
  }
}

function adjustDuplicates(figureId, delta) {
  const entry = state.collection.get(figureId);
  if (!entry || entry.status !== "owned") return;
  const nextDuplicates = Math.max(0, (entry.duplicates || 0) + delta);
  if (nextDuplicates === entry.duplicates) return;

  try {
    entry.duplicates = nextDuplicates;
    persistCollection();
    render();
    showToast(
      delta > 0
        ? `Doublon enregistré (${nextDuplicates} pour échange) !`
        : `Doublon mis à jour (${nextDuplicates}).`
    );
  } catch (error) {
    showToast(error.message || "Impossible de mettre à jour les doublons.");
  }
}

function deleteOwnedEntry(figureId) {
  const figure = FIGURES_BY_ID.get(figureId);
  if (!state.collection.has(figureId) || !window.confirm(`Retirer ${figure.nameFr} de ta collection ?`)) {
    return;
  }

  try {
    state.collection.delete(figureId);
    persistCollection();
    el.photoDialog.close();
    render();
    showToast(`${figure.nameFr} retiré de la collection.`);
  } catch (error) {
    el.photoMessage.textContent = error.message || "Impossible de retirer cette figurine.";
  }
}

/**
 * ============================================================================
 * Modale d'ajout / édition Polaroid & Recherche rapide
 * ============================================================================
 */
function populateSeriesSelect(selectedSeriesId) {
  el.photoSeries.replaceChildren(
    ...OFFICIAL_CATALOG.map((series) => new Option(`${series.emoji} ${series.name}`, series.id))
  );
  el.photoSeries.value = SERIES_BY_ID.has(selectedSeriesId)
    ? selectedSeriesId
    : OFFICIAL_CATALOG[0].id;
}

function populateFigureSelect({ seriesId = el.photoSeries.value, figureId = "", searchQuery = "" } = {}) {
  const query = normalizeText(searchQuery);
  let candidates;

  if (query) {
    candidates = ALL_FIGURES.filter((fig) => {
      const haystack = normalizeText(`${fig.nameFr} ${fig.nameEn} ${fig.seriesName}`);
      return haystack.includes(query);
    });
  } else {
    const series = SERIES_BY_ID.get(seriesId) || OFFICIAL_CATALOG[0];
    candidates = series.figures.map((fig) => FIGURES_BY_ID.get(fig.id));
  }

  if (candidates.length === 0) {
    const emptyOpt = new Option("Aucun Sonny trouvé…", "");
    emptyOpt.disabled = true;
    el.photoFigure.replaceChildren(emptyOpt);
    return;
  }

  el.photoFigure.replaceChildren(
    ...candidates.map((fig) => {
      const prefix = fig.isSecret ? "✦ " : "";
      const suffix = query ? ` — ${fig.seriesName}` : "";
      return new Option(`${prefix}${displayName(fig)}${suffix}`, fig.id);
    })
  );

  if (figureId && candidates.some((fig) => fig.id === figureId)) {
    el.photoFigure.value = figureId;
  } else {
    el.photoFigure.selectedIndex = 0;
    const first = FIGURES_BY_ID.get(el.photoFigure.value);
    if (first && query) {
      el.photoSeries.value = first.seriesId;
    }
  }
}

function setModalPreview(url) {
  if (state.previewObjectUrl) {
    URL.revokeObjectURL(state.previewObjectUrl);
    state.previewObjectUrl = null;
  }
  const hasImage = Boolean(url);
  el.previewImage.classList.toggle("hidden", !hasImage);
  el.previewPlaceholder.classList.toggle("hidden", hasImage);
  el.photoRemoveImg.classList.toggle("hidden", !hasImage);
  if (hasImage) {
    el.previewImage.src = url;
  } else {
    el.previewImage.removeAttribute("src");
  }
}

function acceptPhotoFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    el.photoMessage.textContent = "Merci de choisir un fichier image (JPG, PNG ou WebP).";
    return;
  }
  state.pendingFile = file;
  state.removeExistingPhoto = false;
  el.photoMessage.textContent = "";
  const objectUrl = URL.createObjectURL(file);
  setModalPreview(objectUrl);
  state.previewObjectUrl = objectUrl;
}

function openAcquireModal(figureId = "", preloadedFile = null) {
  const figure = figureId ? FIGURES_BY_ID.get(figureId) : null;
  const existing = figureId ? state.collection.get(figureId) : null;
  const isEditingOwned = existing?.status === "owned";

  const targetSeriesId = figure
    ? figure.seriesId
    : state.activeSeries === "all"
      ? OFFICIAL_CATALOG[0].id
      : state.activeSeries;

  el.photoDialogTitle.textContent = isEditingOwned ? "Modifier mon Sonny" : "Ajouter un Sonny";
  el.photoSearch.value = "";
  populateSeriesSelect(targetSeriesId);
  populateFigureSelect({ seriesId: targetSeriesId, figureId });

  el.photoDate.value = existing?.acquired_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  el.photoPrice.value =
    existing?.price !== null && existing?.price !== undefined ? String(existing.price) : "";
  el.photoLocation.value = existing?.location || "";
  el.photoNote.value = existing?.note || "";
  state.modalDuplicates = existing?.duplicates || 0;
  el.photoDuplicates.textContent = String(state.modalDuplicates);
  el.photoFile.value = "";
  el.photoMessage.textContent = "";

  state.pendingFile = null;
  state.removeExistingPhoto = false;

  if (preloadedFile) {
    acceptPhotoFile(preloadedFile);
  } else if (existing?.photoUrl) {
    setModalPreview(existing.photoUrl);
  } else {
    setModalPreview("");
  }

  el.deleteEntryBtn.classList.toggle("hidden", !isEditingOwned);
  el.deleteEntryBtn.onclick = () => deleteOwnedEntry(el.photoFigure.value);
  el.photoDialog.showModal();
}

function openEditModal(figureId) {
  openAcquireModal(figureId, null);
}

async function handleSaveFigure(event) {
  event.preventDefault();
  const figureId = el.photoFigure.value;
  const figure = FIGURES_BY_ID.get(figureId);
  if (!figure) {
    el.photoMessage.textContent = "Sélectionne un personnage Sonny Angel.";
    return;
  }

  const existing = state.collection.get(figureId);
  const acquiredAt = el.photoDate.value || new Date().toISOString().slice(0, 10);
  const rawPrice = el.photoPrice.value.trim();
  const price = rawPrice === "" ? null : Math.max(0, Number(rawPrice));
  if (rawPrice !== "" && !Number.isFinite(price)) {
    el.photoMessage.textContent = "Le prix saisi est invalide.";
    return;
  }
  const location = el.photoLocation.value.trim();
  const note = el.photoNote.value.trim();
  const duplicates = state.modalDuplicates;

  el.saveButton.disabled = true;
  el.saveButton.textContent = state.pendingFile ? "Compression photo…" : "Enregistrement…";
  el.photoMessage.textContent = "";

  try {
    let photoUrl = state.removeExistingPhoto ? "" : existing?.photoUrl || "";
    if (state.pendingFile) {
      const blob = await compressImage(state.pendingFile);
      photoUrl = await blobToDataUrl(blob);
    }

    state.collection.set(figureId, {
      catalog_id: figureId,
      status: "owned",
      duplicates,
      acquired_at: acquiredAt,
      price,
      location,
      note,
      photoUrl,
    });
    persistCollection();

    el.photoDialog.close();
    render();
    showToast(`${figure.nameFr} enregistré dans ta collection ✓`);
  } catch (error) {
    el.photoMessage.textContent = error.message || "Impossible d'enregistrer ce Sonny Angel.";
  } finally {
    el.saveButton.disabled = false;
    el.saveButton.textContent = "Enregistrer comme Acquis ✓";
  }
}

/**
 * ============================================================================
 * Caméra plein écran type Snap (avec repli automatique sur appareil natif)
 * ============================================================================
 */
function stopSnapStream() {
  if (state.snapStream) {
    for (const track of state.snapStream.getTracks()) {
      track.stop();
    }
    state.snapStream = null;
  }
  el.snapVideo.srcObject = null;
}

async function startSnapStream() {
  stopSnapStream();
  el.snapFallback.classList.add("hidden");
  el.snapFallback.classList.remove("flex");
  el.snapShutter.disabled = false;

  if (!navigator.mediaDevices?.getUserMedia) {
    el.snapFallback.classList.remove("hidden");
    el.snapFallback.classList.add("flex");
    el.snapShutter.disabled = true;
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: state.snapFacingMode },
        width: { ideal: 1280 },
        height: { ideal: 1280 },
      },
      audio: false,
    });
    state.snapStream = stream;
    el.snapVideo.srcObject = stream;
    el.snapVideo.style.transform = state.snapFacingMode === "user" ? "scaleX(-1)" : "";
  } catch {
    el.snapFallback.classList.remove("hidden");
    el.snapFallback.classList.add("flex");
    el.snapShutter.disabled = true;
  }
}

async function openSnapCamera(figureId = "") {
  state.snapTargetFigureId = figureId;
  if (el.photoDialog.open) el.photoDialog.close();
  el.snapDialog.showModal();
  await startSnapStream();
}

function closeSnapCamera() {
  stopSnapStream();
  if (el.snapDialog.open) el.snapDialog.close();
}

function captureSnapPhoto() {
  if (!state.snapStream || !el.snapVideo.videoWidth) return;

  el.snapFlash.classList.remove("opacity-0");
  el.snapFlash.classList.add("opacity-100");

  const vw = el.snapVideo.videoWidth;
  const vh = el.snapVideo.videoHeight;
  const maxDim = 800;
  const scale = Math.min(1, maxDim / Math.max(vw, vh));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(vw * scale));
  canvas.height = Math.max(1, Math.round(vh * scale));

  const ctx = canvas.getContext("2d");
  if (state.snapFacingMode === "user") {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(el.snapVideo, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(
    (blob) => {
      setTimeout(() => {
        el.snapFlash.classList.remove("opacity-100");
        el.snapFlash.classList.add("opacity-0");
        closeSnapCamera();
        if (blob) {
          const snappedFile = new File([blob], `sonny-snap-${Date.now()}.jpg`, {
            type: blob.type || "image/jpeg",
          });
          openAcquireModal(state.snapTargetFigureId, snappedFile);
          state.snapTargetFigureId = "";
        }
      }, 130);
    },
    "image/jpeg",
    0.88
  );
}

/**
 * ============================================================================
 * Initialisation & Écouteurs d'événements
 * ============================================================================
 */
function initialize() {
  state.collection = loadCollection();
  render();

  el.tabCollection.addEventListener("click", () => {
    state.view = "collection";
    render();
  });
  el.tabWishlist.addEventListener("click", () => {
    state.view = "wishlist";
    render();
  });
  el.statWishlistCard.addEventListener("click", () => {
    state.view = "wishlist";
    render();
  });
  el.wishlistBackBtn.addEventListener("click", () => {
    state.view = "collection";
    render();
  });

  // Bouton central type Snap -> ouvre la caméra en direct plein écran
  el.scanFab.addEventListener("click", () => {
    void openSnapCamera("");
  });
  el.photoOpenSnap.addEventListener("click", () => {
    void openSnapCamera(el.photoFigure.value);
  });
  el.snapClose.addEventListener("click", closeSnapCamera);
  el.snapDialog.addEventListener("close", stopSnapStream);
  el.snapFlip.addEventListener("click", () => {
    state.snapFacingMode = state.snapFacingMode === "environment" ? "user" : "environment";
    void startSnapStream();
  });
  el.snapShutter.addEventListener("click", captureSnapPhoto);
  el.snapGalleryBtn.addEventListener("click", () => el.cameraInput.click());
  el.snapFallbackBtn.addEventListener("click", () => el.cameraInput.click());

  el.cameraInput.addEventListener("change", () => {
    const file = el.cameraInput.files?.[0];
    el.cameraInput.value = "";
    if (file) {
      closeSnapCamera();
      openAcquireModal(state.snapTargetFigureId, file);
      state.snapTargetFigureId = "";
    }
  });

  // Modale photo & recherche rapide
  el.photoFile.addEventListener("change", () => acceptPhotoFile(el.photoFile.files?.[0]));
  el.photoRemoveImg.addEventListener("click", () => {
    state.pendingFile = null;
    state.removeExistingPhoto = true;
    el.photoFile.value = "";
    setModalPreview("");
  });
  el.photoSeries.addEventListener("change", () => {
    el.photoSearch.value = "";
    populateFigureSelect({ seriesId: el.photoSeries.value });
  });
  el.photoSearch.addEventListener("input", () => {
    populateFigureSelect({ searchQuery: el.photoSearch.value });
  });
  el.photoFigure.addEventListener("change", () => {
    const selected = FIGURES_BY_ID.get(el.photoFigure.value);
    if (selected) {
      el.photoSeries.value = selected.seriesId;
      const existing = state.collection.get(selected.id);
      const isOwned = existing?.status === "owned";
      el.deleteEntryBtn.classList.toggle("hidden", !isOwned);
      if (isOwned) {
        el.photoDate.value = existing.acquired_at?.slice(0, 10) || el.photoDate.value;
        el.photoPrice.value = existing.price !== null ? String(existing.price) : "";
        el.photoLocation.value = existing.location || "";
        el.photoNote.value = existing.note || "";
        state.modalDuplicates = existing.duplicates || 0;
        el.photoDuplicates.textContent = String(state.modalDuplicates);
      }
    }
  });

  el.dupDec.addEventListener("click", () => {
    state.modalDuplicates = Math.max(0, state.modalDuplicates - 1);
    el.photoDuplicates.textContent = String(state.modalDuplicates);
  });
  el.dupInc.addEventListener("click", () => {
    state.modalDuplicates += 1;
    el.photoDuplicates.textContent = String(state.modalDuplicates);
  });

  el.collectionForm.addEventListener("submit", handleSaveFigure);
  el.photoDialog.addEventListener("close", () => setModalPreview(""));

  for (const closeBtn of document.querySelectorAll("[data-close-dialog]")) {
    closeBtn.addEventListener("click", () => {
      document.getElementById(closeBtn.dataset.closeDialog)?.close();
    });
  }
  el.photoDialog.addEventListener("click", (event) => {
    if (event.target === el.photoDialog) el.photoDialog.close();
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

initialize();
