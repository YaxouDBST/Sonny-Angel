import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Remplace ces deux valeurs par l'URL et la clé anon de ton projet Supabase.
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const STORAGE_BUCKET = "sonny-photos";
const DEMO_KEY = "sonnydex-demo-v1";
const DEMO_MODE_KEY = "sonnydex-demo-active";
const supabase = SUPABASE_URL.includes("YOUR_PROJECT") || SUPABASE_ANON_KEY.includes("YOUR_")
  ? null
  : createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Catalogue embarqué pour que l'interface reste utilisable sans requête réseau.
function createSeries(id, name, emoji, color, figureEmojis) {
  return {
    id, name, emoji, color,
    figures: figureEmojis.map((figureEmoji, index) => {
      const secret = index === 5;
      return {
        id: secret ? `${id}-secret` : `${id}-${String(index + 1).padStart(2, "0")}`,
        name: secret ? "Secret" : `Figure ${String(index + 1).padStart(2, "0")}`,
        emoji: figureEmoji,
        ...(secret ? { secret: true } : {}),
      };
    }),
  };
}

const catalog = [
  createSeries("snack", "Snack Series", "🍿", "#fff2e8", ["🍿", "🍟", "🍪", "🥨", "🍩", "🍦"]),
  { id: "fruit", name: "Fruit Series", emoji: "🍓", color: "#fff0ee", figures: [
    { id: "fruit-apple", name: "Apple", emoji: "🍎" }, { id: "fruit-banana", name: "Banana", emoji: "🍌" },
    { id: "fruit-cherry", name: "Cherry", emoji: "🍒" }, { id: "fruit-grape", name: "Grape", emoji: "🍇" },
    { id: "fruit-strawberry", name: "Strawberry", emoji: "🍓" }, { id: "fruit-secret", name: "Secret", emoji: "🍑", secret: true },
  ] },
  { id: "animal", name: "Animal Series 1", emoji: "🐻", color: "#f6f2e9", figures: [
    { id: "animal-bear", name: "Bear", emoji: "🐻" }, { id: "animal-dog", name: "Dog", emoji: "🐶" },
    { id: "animal-cat", name: "Cat", emoji: "🐱" }, { id: "animal-rabbit", name: "Rabbit", emoji: "🐰" },
    { id: "animal-elephant", name: "Elephant", emoji: "🐘" }, { id: "animal-secret", name: "Secret", emoji: "🦄", secret: true },
  ] },
  createSeries("sweet", "Sweet Series", "🍰", "#fff0f4", ["🍰", "🍮", "🍫", "🍬", "🧁", "🍭"]),
  createSeries("animal-3", "Animal Series 3", "🦁", "#f5f0e7", ["🦁", "🦒", "🦛", "🦌", "🦓", "🐨"]),
  createSeries("animal-2", "Animal Series 2", "🐼", "#f1f3eb", ["🐼", "🐑", "🐵", "🐯", "🦆", "🦊"]),
  { id: "marine", name: "Marine Series", emoji: "🐬", color: "#eff7f7", figures: [
    { id: "marine-dolphin", name: "Dolphin", emoji: "🐬" }, { id: "marine-seahorse", name: "Seahorse", emoji: "🐴" },
    { id: "marine-whale", name: "Whale", emoji: "🐳" }, { id: "marine-clownfish", name: "Clownfish", emoji: "🐠" },
    { id: "marine-shell", name: "Shell", emoji: "🐚" }, { id: "marine-secret", name: "Secret", emoji: "🪼", secret: true },
  ] },
  createSeries("animal-4", "Animal Series 4", "🐧", "#edf5f3", ["🐧", "🦘", "🦭", "🦩", "🐿️", "🦚"]),
  createSeries("flower", "Flower Series", "🌸", "#fff0f3", ["🌹", "🌷", "🌻", "🌼", "🌸", "💐"]),
  createSeries("vegetable", "Vegetable Series", "🥕", "#f2f5e9", ["🥕", "🍅", "🌽", "🥦", "🥬", "🥔"]),
];

const elements = {
  tabs: document.querySelector("#series-tabs"), grid: document.querySelector("#figure-grid"), title: document.querySelector("#active-series-title"),
  kicker: document.querySelector("#active-series-kicker"), progressLabel: document.querySelector("#series-progress-label"), progressBar: document.querySelector("#series-progress-bar"),
  totalOwned: document.querySelector("#total-owned"), totalCount: document.querySelector("#total-count"), seriesCount: document.querySelector("#series-count"),
  authDialog: document.querySelector("#auth-dialog"), authForm: document.querySelector("#auth-form"), authMessage: document.querySelector("#auth-message"),
  authOpen: document.querySelector("#auth-open"), demoButton: document.querySelector("#demo-button"), signoutButton: document.querySelector("#signout-button"),
  syncIndicator: document.querySelector("#sync-indicator"), syncLabel: document.querySelector("#sync-label"), photoDialog: document.querySelector("#photo-dialog"),
  cameraInput: document.querySelector("#camera-input"), photoFile: document.querySelector("#photo-file"), previewImage: document.querySelector("#preview-image"),
  previewPlaceholder: document.querySelector(".preview-placeholder"), photoSeries: document.querySelector("#photo-series"), photoFigure: document.querySelector("#photo-figure"),
  collectionForm: document.querySelector("#collection-form"), photoDate: document.querySelector("#photo-date"), photoNote: document.querySelector("#photo-note"),
  photoMessage: document.querySelector("#photo-message"), saveButton: document.querySelector("#save-button"), toast: document.querySelector("#toast"),
};

// La collection active peut venir de Supabase ou du stockage local de démonstration.
const state = { activeSeries: catalog[0].id, collection: new Map(), user: null, demo: false, pendingFile: null, previewUrl: null };
let toastTimer;

function getSeries(seriesId) { return catalog.find((series) => series.id === seriesId) ?? catalog[0]; }
function getFigure(figureId) { return catalog.flatMap((series) => series.figures).find((figure) => figure.id === figureId); }
function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${value.slice(0, 10)}T12:00:00`));
}
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2800);
}
function setSyncLabel() {
  const online = Boolean(state.user && !state.demo);
  elements.syncIndicator.classList.toggle("is-online", online);
  elements.syncLabel.textContent = state.demo ? "Mode démo" : online ? "Synchronisé" : "Mode local";
  elements.authOpen.textContent = state.user && !state.demo ? state.user.email?.[0]?.toUpperCase() ?? "♡" : "♡";
  elements.authOpen.setAttribute("aria-label", state.user && !state.demo ? `Connecté : ${state.user.email}` : "Ouvrir la connexion");
  elements.signoutButton.classList.toggle("hidden", !state.user || state.demo);
  elements.demoButton.classList.toggle("hidden", Boolean(state.user && !state.demo));
}

// Met à jour les onglets, les compteurs et les cartes de la série sélectionnée.
function render() {
  const active = getSeries(state.activeSeries);
  const ownedInSeries = active.figures.filter((figure) => state.collection.has(figure.id)).length;
  const ownedTotal = state.collection.size;
  elements.tabs.replaceChildren(...catalog.map((series) => {
    const button = document.createElement("button");
    button.className = "series-tab";
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", String(series.id === state.activeSeries));
    button.innerHTML = `<span class="tab-emoji" aria-hidden="true">${series.emoji}</span>${series.name}`;
    button.addEventListener("click", () => { state.activeSeries = series.id; render(); });
    return button;
  }));
  elements.title.textContent = active.name;
  elements.kicker.textContent = `SÉRIE ${String(catalog.indexOf(active) + 1).padStart(2, "0")}`;
  elements.progressLabel.textContent = `${ownedInSeries} / ${active.figures.length}`;
  elements.progressBar.style.width = `${ownedInSeries / active.figures.length * 100}%`;
  elements.totalOwned.textContent = String(ownedTotal);
  elements.totalCount.textContent = String(catalog.reduce((sum, series) => sum + series.figures.length, 0) - ownedTotal);
  elements.seriesCount.textContent = `${String(catalog.length).padStart(2, "0")} SÉRIES`;
  elements.grid.replaceChildren(...active.figures.map((figure, index) => renderFigure(figure, active, index)));
}

function renderFigure(figure, series, index) {
  const entry = state.collection.get(figure.id);
  const card = document.createElement("article");
  card.className = `figure-card ${entry ? "is-owned" : "is-missing"}`;
  card.style.animationDelay = `${index * 45}ms`;
  const art = document.createElement("div");
  art.className = "figure-art";
  art.style.setProperty("--art-bg", series.color);
  art.innerHTML = `<span class="figure-art-emoji" aria-hidden="true">${figure.emoji}</span>${figure.secret ? '<span class="secret-badge">✦ SECRET</span>' : ""}`;
  if (entry?.photoUrl) {
    const image = document.createElement("img");
    image.className = "figure-art-photo";
    image.src = entry.photoUrl;
    image.alt = `Photo de ${figure.name}`;
    image.loading = "lazy";
    art.append(image);
  }
  if (entry) {
    const badge = document.createElement("span");
    badge.className = "owned-badge";
    badge.textContent = "Acquis ✓";
    art.append(badge);
  }
  const info = document.createElement("div");
  info.className = "figure-info";
  const nameRow = document.createElement("div");
  nameRow.className = "figure-name-row";
  nameRow.innerHTML = `<h4 class="figure-name">${figure.name}</h4><span class="figure-type">${figure.secret ? "Secret" : "Figurine"}</span>`;
  info.append(nameRow);
  if (entry) {
    const date = document.createElement("p");
    date.className = "figure-date";
    date.textContent = `Acquis le ${formatDate(entry.acquired_at)}`;
    info.append(date);
    if (entry.note) {
      const note = document.createElement("p");
      note.className = "figure-note";
      note.textContent = `“${entry.note}”`;
      info.append(note);
    }
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-entry";
    remove.title = `Retirer ${figure.name} de la collection`;
    remove.setAttribute("aria-label", remove.title);
    remove.textContent = "×";
    remove.addEventListener("click", () => removeFigure(figure.id));
    nameRow.append(remove);
  } else {
    const add = document.createElement("button");
    add.type = "button";
    add.className = "add-figure-button";
    add.innerHTML = '<span aria-hidden="true">＋</span> Ajouter';
    add.addEventListener("click", () => beginAdd(figure.id));
    info.append(add);
  }
  card.append(art, info);
  return card;
}

function setupPhotoSelectors(seriesId = state.activeSeries, figureId = "") {
  elements.photoSeries.replaceChildren(...catalog.map((series) => new Option(series.name, series.id)));
  elements.photoSeries.value = seriesId;
  updateFigureOptions(figureId);
}
function updateFigureOptions(figureId = "") {
  const series = getSeries(elements.photoSeries.value);
  elements.photoFigure.replaceChildren(...series.figures.map((figure) => new Option(`${figure.secret ? "✦ " : ""}${figure.name}`, figure.id)));
  if (figureId && series.figures.some((figure) => figure.id === figureId)) elements.photoFigure.value = figureId;
}
function beginAdd(figureId = "") {
  if (!state.demo && !state.user) {
    elements.authDialog.showModal();
    elements.authMessage.textContent = "Connecte-toi ou choisis le mode démo pour ajouter un Sonny.";
    return;
  }
  setupPhotoSelectors(figureId ? catalog.find((series) => series.figures.some((figure) => figure.id === figureId)).id : state.activeSeries, figureId);
  elements.photoDate.value = new Date().toISOString().slice(0, 10);
  elements.photoNote.value = "";
  elements.photoFile.value = "";
  elements.photoMessage.textContent = "";
  state.pendingFile = null;
  setPreview("");
  elements.photoDialog.showModal();
  if (!figureId) elements.cameraInput.click();
}
function setPreview(url) {
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  state.previewUrl = url || null;
  elements.previewImage.classList.toggle("hidden", !url);
  elements.previewPlaceholder.classList.toggle("hidden", Boolean(url));
  if (url) elements.previewImage.src = url;
  else elements.previewImage.removeAttribute("src");
}
function acceptPhoto(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    elements.photoMessage.textContent = "Choisis un fichier image.";
    return;
  }
  state.pendingFile = file;
  elements.photoMessage.textContent = "";
  setPreview(URL.createObjectURL(file));
}

// Réduit les photos à 800 px maximum avant toute sauvegarde ou mise en ligne.
async function compressImage(file) {
  const image = await createImageBitmap(file);
  const scale = Math.min(1, 800 / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  image.close();
  const toBlob = (type) => new Promise((resolve, reject) => canvas.toBlob((result) => result ? resolve(result) : reject(new Error("La compression de la photo a échoué.")), type, 0.82));
  let blob = await toBlob("image/webp");
  if (blob.type !== "image/webp") blob = await toBlob("image/jpeg");
  return { blob, extension: blob.type === "image/webp" ? "webp" : "jpg", contentType: blob.type };
}

async function saveFigure(event) {
  event.preventDefault();
  if (!state.pendingFile) {
    elements.photoMessage.textContent = "Ajoute une photo pour continuer.";
    return;
  }
  if (!state.demo && !state.user) {
    elements.photoMessage.textContent = "Connecte-toi ou passe en mode démo pour enregistrer.";
    return;
  }
  const figureId = elements.photoFigure.value;
  if (state.collection.has(figureId)) {
    elements.photoMessage.textContent = "Cette figurine est déjà dans ta collection.";
    return;
  }
  elements.saveButton.disabled = true;
  elements.saveButton.textContent = "Préparation de la photo…";
  elements.photoMessage.textContent = "";
  let uploadedPath = "";
  try {
    const { blob, extension, contentType } = await compressImage(state.pendingFile);
    const acquiredAt = elements.photoDate.value || new Date().toISOString().slice(0, 10);
    const note = elements.photoNote.value.trim();
    let entry;
    if (state.demo) {
      const photoUrl = await blobToDataUrl(blob);
      entry = { catalog_id: figureId, acquired_at: acquiredAt, note, photoUrl };
      state.collection.set(figureId, entry);
      localStorage.setItem(DEMO_KEY, JSON.stringify([...state.collection.values()]));
    } else {
      const filePath = `${state.user.id}/${crypto.randomUUID()}.${extension}`;
      elements.saveButton.textContent = "Enregistrement…";
      const { error: uploadError } = await supabase.storage.from(STORAGE_BUCKET).upload(filePath, blob, { contentType, upsert: false });
      if (uploadError) throw uploadError;
      uploadedPath = filePath;
      const { data, error } = await supabase.from("user_collection").insert({ catalog_id: figureId, acquired_at: acquiredAt, note, photo_path: filePath }).select("id,catalog_id,acquired_at,note,photo_path").single();
      if (error) throw error;
      entry = { ...data, photoUrl: await signedPhotoUrl(filePath) };
      state.collection.set(figureId, entry);
    }
    elements.photoDialog.close();
    render();
    showToast(`${getFigure(figureId).name} ajouté à ta collection !`);
  } catch (error) {
    if (uploadedPath) await supabase.storage.from(STORAGE_BUCKET).remove([uploadedPath]);
    elements.photoMessage.textContent = error.message || "Impossible d'enregistrer cette photo.";
  } finally {
    elements.saveButton.disabled = false;
    elements.saveButton.innerHTML = 'Ajouter à ma collection <span aria-hidden="true">↗</span>';
  }
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Impossible de lire la photo compressée."));
    reader.readAsDataURL(blob);
  });
}
async function signedPhotoUrl(path) {
  const { data, error } = await supabase.storage.from(STORAGE_BUCKET).createSignedUrl(path, 60 * 60);
  if (error) throw error;
  return data.signedUrl;
}

async function removeFigure(figureId) {
  const entry = state.collection.get(figureId);
  if (!entry || !window.confirm(`Retirer ${getFigure(figureId).name} de ta collection ?`)) return;
  try {
    if (state.demo) {
      state.collection.delete(figureId);
      localStorage.setItem(DEMO_KEY, JSON.stringify([...state.collection.values()]));
    } else {
      const { error } = await supabase.from("user_collection").delete().eq("id", entry.id);
      if (error) throw error;
      if (entry.photo_path) await supabase.storage.from(STORAGE_BUCKET).remove([entry.photo_path]);
      state.collection.delete(figureId);
    }
    render();
    showToast("Figurine retirée de la collection.");
  } catch (error) {
    showToast(error.message || "Impossible de retirer cette figurine.");
  }
}

function loadDemoCollection() {
  try {
    const saved = JSON.parse(localStorage.getItem(DEMO_KEY) || "[]");
    return new Map(saved.filter((entry) => getFigure(entry.catalog_id)).map((entry) => [entry.catalog_id, entry]));
  } catch {
    localStorage.removeItem(DEMO_KEY);
    return new Map();
  }
}
// Les photos résident dans un bucket privé; les URL temporaires sont régénérées à la lecture.
async function loadUserCollection() {
  const { data, error } = await supabase.from("user_collection").select("id,catalog_id,acquired_at,note,photo_path").eq("user_id", state.user.id);
  if (error) throw error;
  const entries = await Promise.all((data || []).map(async (entry) => ({ ...entry, photoUrl: entry.photo_path ? await signedPhotoUrl(entry.photo_path) : "" })));
  state.collection = new Map(entries.map((entry) => [entry.catalog_id, entry]));
}

async function authenticate(event, action) {
  event.preventDefault();
  if (!supabase) {
    elements.authMessage.textContent = "Renseigne ton URL et ta clé anon Supabase dans app.js, ou utilise le mode démo.";
    return;
  }
  const email = document.querySelector("#auth-email").value.trim();
  const password = document.querySelector("#auth-password").value;
  elements.authMessage.textContent = "";
  const button = elements.authForm.querySelector(`[data-auth-action="${action}"]`);
  button.disabled = true;
  try {
    const response = action === "signup"
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });
    if (response.error) throw response.error;
    if (action === "signup" && !response.data.session) {
      elements.authMessage.textContent = "Vérifie tes e-mails pour confirmer ton compte.";
      return;
    }
    if (response.data.session) await applySession(response.data.session);
    elements.authDialog.close();
  } catch (error) {
    elements.authMessage.textContent = error.message || "Connexion impossible.";
  } finally {
    button.disabled = false;
  }
}

async function applySession(session) {
  state.user = session?.user ?? null;
  state.demo = false;
  if (state.user) {
    localStorage.setItem(DEMO_MODE_KEY, "false");
    try {
      await loadUserCollection();
      render();
      setSyncLabel();
    } catch (error) {
      showToast(error.message || "Impossible de charger la collection.");
    }
  } else {
    state.demo = localStorage.getItem(DEMO_MODE_KEY) === "true";
    state.collection = state.demo ? loadDemoCollection() : new Map();
    render();
    setSyncLabel();
  }
}

function initialize() {
  render();
  if (!supabase && localStorage.getItem(DEMO_MODE_KEY) === "true") {
    state.demo = true;
    state.collection = loadDemoCollection();
    render();
  }
  setupPhotoSelectors();
  setSyncLabel();
  document.querySelector("#scan-button").addEventListener("click", () => beginAdd());
  elements.authOpen.addEventListener("click", () => {
    elements.authMessage.textContent = "";
    elements.authDialog.showModal();
  });
  elements.authForm.addEventListener("submit", (event) => authenticate(event, "login"));
  document.querySelector("#signup-button").addEventListener("click", (event) => authenticate(event, "signup"));
  elements.demoButton.addEventListener("click", () => {
    state.user = null;
    state.demo = true;
    localStorage.setItem(DEMO_MODE_KEY, "true");
    state.collection = loadDemoCollection();
    setSyncLabel();
    render();
    elements.authDialog.close();
    showToast("Bienvenue dans SonnyDex, mode démo activé.");
  });
  elements.signoutButton.addEventListener("click", async () => {
    if (supabase) await supabase.auth.signOut();
    state.user = null;
    state.demo = false;
    state.collection = new Map();
    render();
    setSyncLabel();
    elements.authDialog.close();
  });
  elements.photoSeries.addEventListener("change", () => updateFigureOptions());
  elements.photoFile.addEventListener("change", () => acceptPhoto(elements.photoFile.files?.[0]));
  elements.cameraInput.addEventListener("change", () => {
    const file = elements.cameraInput.files?.[0];
    if (file) acceptPhoto(file);
    elements.cameraInput.value = "";
  });
  elements.collectionForm.addEventListener("submit", saveFigure);
  for (const dialog of [elements.authDialog, elements.photoDialog]) {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
  elements.photoDialog.addEventListener("close", () => setPreview(""));
  if (supabase) {
    supabase.auth.getSession().then(({ data }) => applySession(data.session));
    supabase.auth.onAuthStateChange((_event, session) => {
      queueMicrotask(() => { void applySession(session); });
    });
  }
}

initialize();