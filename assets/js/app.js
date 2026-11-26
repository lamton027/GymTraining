"use strict";

const DAYS = [
  {k:"t2",tab:"T2",full:"Thứ 2 · Ngực",c:"--red",oc:"#fff",note:"Khởi động 5 phút (chạy bộ nhẹ, xoay vai) và 1–2 hiệp nhẹ trước khi vào hiệp nặng. Nghỉ 60–90 giây giữa các hiệp.",ex:[
    ["Bench press thanh đòn","4","8–10","Hạ thanh chạm nhẹ ngực, không nảy. Bả vai ép sát ghế."],
    ["Incline dumbbell press","3","10","Ghế nghiêng 30–45°, đẩy thẳng lên, không khóa khuỷu."],
    ["Chest press máy","3","10–12","Giữ nhịp chậm khi hạ xuống (2–3 giây)."],
    ["Dumbbell fly","3","12","Khuỷu hơi gập, cảm nhận ngực giãn ra."],
    ["Cable crossover","3","12–15","Siết ngực 1 giây ở cuối động tác."],
    ["Hít đất","2","Tới mệt","Hiệp cuối để vét sức."]]},
  {k:"t3",tab:"T3",full:"Thứ 3 · Vai",c:"--blue",oc:"#fff",note:"Vai dễ chấn thương: khởi động kỹ, chọn mức tạ kiểm soát được, không vung người.",ex:[
    ["Overhead press (tạ đòn hoặc tạ đơn)","4","8–10","Siết bụng, không ưỡn lưng quá mức."],
    ["Lateral raise (nâng tạ ngang)","4","12–15","Nâng tới ngang vai, khuỷu dẫn trước cổ tay."],
    ["Arnold press","3","10–12","Xoay cổ tay mượt khi đẩy lên."],
    ["Reverse fly (vai sau)","4","12–15","Cúi người, ngực hướng xuống, mở tay ngang."],
    ["Face pull","3","15","Kéo về phía mặt, khuỷu cao, tốt cho tư thế vai."],
    ["Shrug (nhún vai)","3","12","Nhún thẳng lên, không xoay vai."]]},
  {k:"t4",tab:"T4",full:"Thứ 4 · Lưng",c:"--yellow",oc:"#16202e",note:"Đây là buổi nặng nhất với cột sống. Giữ lưng thẳng, nếu đau lưng dưới hãy giảm tạ hoặc thay deadlift bằng hyperextension.",ex:[
    ["Deadlift","4","5–6","Thanh sát ống chân, lưng trung tính, đẩy sàn bằng chân."],
    ["Lat pulldown (kéo xà rộng)","4","10","Kéo về xương đòn, ép bả vai xuống."],
    ["Barbell row","4","8–10","Thân người ~45°, kéo về phía bụng."],
    ["Seated cable row","3","10–12","Siết bả vai ở cuối động tác 1 giây."],
    ["Dumbbell row một tay","3","10","Mỗi bên, không xoay thân."],
    ["Straight-arm pulldown","3","12","Tay gần thẳng, cảm nhận cơ xô."]]},
  {k:"t5",tab:"T5",full:"Thứ 5 · Tay + Bụng",c:"--green",oc:"#fff",note:"Tay trước và tay sau xen kẽ nhau để nghỉ nhanh hơn. Bụng tập cuối buổi.",ex:[
    ["Barbell curl","3","10","Khuỷu cố định sát thân."],
    ["Skull crusher","3","10","Hạ về trán, khuỷu hướng lên trần."],
    ["Hammer curl","3","12","Cầm tạ như cầm búa, tập cả cẳng tay."],
    ["Triceps pushdown (dây cáp)","3","12","Duỗi thẳng tay, khuỷu không dạt ra."],
    ["Overhead triceps extension","3","12","Khuỷu hướng lên, giãn hết đầu dài tay sau."],
    ["Hanging knee raise","3","12–15","Cuộn xương chậu, đừng đung đưa."],
    ["Cable crunch","3","15","Gập từ bụng, không kéo bằng tay."],
    ["Plank","3","45–60 giây","Người thẳng một đường, siết mông và bụng."],
    ["Russian twist","3","20","Mỗi bên tính 1 lần."]]},
  {k:"t6",tab:"T6",full:"Thứ 6 · Chân",c:"--grey",oc:"#fff",note:"Buổi mệt nhất tuần, nên ăn đủ carb trước buổi tập. Khởi động hông và mắt cá kỹ.",ex:[
    ["Squat","4","8–10","Gối theo hướng mũi chân, hạ tối thiểu song song sàn."],
    ["Romanian deadlift","3","10","Đẩy hông ra sau, cảm nhận đùi sau căng."],
    ["Leg press","3","12","Không khóa gối khi đẩy hết."],
    ["Walking lunge","3","12 mỗi chân","Bước dài vừa phải, thân người thẳng."],
    ["Leg curl","3","12","Siết đùi sau, hạ chậm."],
    ["Leg extension","3","12–15","Dừng 1 giây ở đỉnh."],
    ["Calf raise (nhón bắp chuột)","4","15","Xuống sâu, lên cao hết cỡ."]]}
];

const MEALS = [
  ["06:30","Bữa sáng","3 trứng (luộc hoặc ốp la), 60 g yến mạch hoặc 2 lát bánh mì nguyên cám, 1 quả chuối."],
  ["09:30","Bữa phụ","1 hũ sữa chua không đường hoặc 1 ly sữa tươi không đường, một nắm hạt (hạnh nhân, óc chó)."],
  ["12:00","Bữa trưa","1 chén cơm (gạo lứt hoặc gạo trắng), 150–200 g ức gà, thịt bò nạc hoặc cá, rau luộc hoặc xào ít dầu."],
  ["16:00","Trước tập (1–1,5 giờ)","1 củ khoai lang vừa hoặc 1 quả chuối kèm 1 muỗng bơ đậu phộng. Uống đủ nước."],
  ["18:30","Sau tập","Whey 1 muỗng hoặc 3–4 trứng luộc / 150 g ức gà, kèm 1 chén cơm để nạp lại glycogen."],
  ["20:00","Bữa tối","1 chén cơm nhỏ, 150 g cá hoặc thịt nạc, canh rau, thêm rau xanh."],
  ["22:00","Trước ngủ (nếu đói)","Sữa chua Hy Lạp, phô mai tươi hoặc 1 ly sữa không đường."]
];

const RULES = [
  "Đạm: khoảng 1,6–2,2 g mỗi kg cân nặng mỗi ngày, chia đều các bữa.",
  "Uống 2,5–3 lít nước mỗi ngày, thêm nếu ra nhiều mồ hôi.",
  "Ngủ 7–9 giờ. Cơ phát triển lúc nghỉ chứ không phải lúc tập.",
  "Hạn chế nước ngọt, đồ chiên rán và rượu bia, nhất là khi muốn giảm mỡ.",
  "Tăng tạ từ từ: khi làm đủ số hiệp ở mức rep cao nhất, tuần sau tăng 2–5% mức tạ.",
  "Thứ 7, chủ nhật nghỉ hoặc đi bộ nhẹ, vẫn giữ đủ lượng đạm."
];

const STORAGE_KEY = "gym-plan-v1";
const tabs = document.getElementById("tabs");
const view = document.getElementById("view");
const today = document.getElementById("today");
const themeButton = document.getElementById("theme");

let currentTab = "t2";
let state = loadState();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The app remains usable when storage is unavailable.
  }
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function weekStart(date) {
  const result = new Date(date);
  result.setHours(12, 0, 0, 0);
  const day = result.getDay();
  result.setDate(result.getDate() + (day === 0 ? -6 : 1 - day));
  return result;
}

function dayDate(key) {
  const index = Number.parseInt(key.slice(1), 10) - 2;
  const date = weekStart(new Date());
  date.setDate(date.getDate() + index);
  return date;
}

function shortDate(date) {
  return new Intl.DateTimeFormat("vi-VN", {day: "2-digit", month: "2-digit"}).format(date);
}

function fullDate(date) {
  return new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function ensureCurrentWeek() {
  const currentWeek = localDateKey(weekStart(new Date()));
  let changed = false;

  if (state.weekKey && state.weekKey !== currentWeek) {
    DAYS.forEach(day => delete state[day.k]);
    changed = true;
  }

  if (state.weekKey !== currentWeek) {
    state.weekKey = currentWeek;
    changed = true;
  }

  if (changed) saveState();
}

function renderToday() {
  const now = new Date();
  const weekDay = now.getDay();
  let message = fullDate(now);

  if (weekDay >= 1 && weekDay <= 5) {
    message += ` · Hôm nay tập ${DAYS[weekDay - 1].full.split(" · ")[1]}`;
  } else {
    message += " · Hôm nay nghỉ hoặc vận động nhẹ";
  }

  today.textContent = `${message} · Lịch tự reset mỗi Thứ 2`;
}

function renderTabs() {
  tabs.innerHTML = "";

  DAYS.forEach(day => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "plate";
    button.role = "tab";
    button.style.setProperty("--c", `var(${day.c})`);
    button.style.setProperty("--oc", day.oc);
    button.setAttribute("aria-selected", currentTab === day.k);
    button.setAttribute("aria-label", day.full);
    button.innerHTML = `<span>${day.tab}</span><small>${shortDate(dayDate(day.k))}</small>`;
    button.addEventListener("click", () => {
      currentTab = day.k;
      renderApp();
    });
    tabs.appendChild(button);
  });

  const foodButton = document.createElement("button");
  foodButton.type = "button";
  foodButton.className = "plate food";
  foodButton.role = "tab";
  foodButton.textContent = "Ăn uống";
  foodButton.setAttribute("aria-selected", currentTab === "food");
  foodButton.addEventListener("click", () => {
    currentTab = "food";
    renderApp();
  });
  tabs.appendChild(foodButton);
}

function parseVideoUrl(raw) {
  let url;
  try {
    url = new URL(String(raw || "").trim());
  } catch {
    return null;
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") return null;

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  let id = "";

  if (host === "youtu.be") {
    id = url.pathname.split("/").filter(Boolean)[0] || "";
  } else if (["youtube.com", "m.youtube.com", "music.youtube.com"].includes(host)) {
    if (url.pathname === "/watch") id = url.searchParams.get("v") || "";
    else if (/^\/(shorts|embed)\//.test(url.pathname)) id = url.pathname.split("/")[2] || "";
  }

  if (id && /^[A-Za-z0-9_-]{6,20}$/.test(id)) {
    return {type: "iframe", src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`, name: "YouTube"};
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    let vimeoId = "";
    url.pathname.split("/").filter(Boolean).forEach(part => {
      if (/^\d+$/.test(part)) vimeoId = part;
    });
    if (vimeoId) return {type: "iframe", src: `https://player.vimeo.com/video/${vimeoId}`, name: "Vimeo"};
  }

  if (/\.(mp4|webm|ogg)$/i.test(url.pathname)) {
    return {type: "video", src: url.href, name: "video"};
  }

  return null;
}

function showVideo(mount, raw, status) {
  const info = parseVideoUrl(raw);
  mount.innerHTML = "";

  if (!info) {
    status.textContent = "Link chưa được hỗ trợ. Hãy dùng link video YouTube, Vimeo, MP4, WebM hoặc OGG.";
    status.classList.add("error");
    return false;
  }

  let player;
  if (info.type === "iframe") {
    player = document.createElement("iframe");
    player.src = info.src;
    player.title = `Video hướng dẫn bài tập trên ${info.name}`;
    player.loading = "lazy";
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.setAttribute("allowfullscreen", "");
  } else {
    player = document.createElement("video");
    player.src = info.src;
    player.controls = true;
    player.preload = "metadata";
    player.setAttribute("playsinline", "");
  }

  mount.appendChild(player);
  status.textContent = "Đã nhúng video. Link này được lưu trên trình duyệt của bạn.";
  status.classList.remove("error");
  return true;
}

function bindVideoControls() {
  view.querySelectorAll(".video-box").forEach(box => {
    const key = box.dataset.key;
    const panel = box.querySelector(".video-panel");
    const toggle = box.querySelector(".video-toggle");
    const input = box.querySelector(".video-url");
    const saveButton = box.querySelector(".video-save");
    const removeButton = box.querySelector(".video-remove");
    const status = box.querySelector(".video-status");
    const mount = box.querySelector(".video-player");
    let saved = state.videos?.[key] || "";

    input.value = saved;
    removeButton.hidden = !saved;

    toggle.addEventListener("click", () => {
      const opening = panel.hidden;
      panel.hidden = !opening;
      toggle.setAttribute("aria-expanded", opening);
      toggle.textContent = opening ? "Đóng video" : (saved ? "Mở video" : "Thêm video");
      if (opening && saved && !mount.firstChild) showVideo(mount, saved, status);
      if (opening) input.focus();
    });

    saveButton.addEventListener("click", () => {
      const value = input.value.trim();
      if (!showVideo(mount, value, status)) return;
      state.videos ||= {};
      state.videos[key] = value;
      saved = value;
      saveState();
      removeButton.hidden = false;
      toggle.textContent = "Đóng video";
    });

    removeButton.addEventListener("click", () => {
      if (state.videos) delete state.videos[key];
      saved = "";
      input.value = "";
      mount.innerHTML = "";
      removeButton.hidden = true;
      saveState();
      status.textContent = "Đã xóa video khỏi bài tập này.";
      status.classList.remove("error");
      toggle.textContent = "Đóng video";
      input.focus();
    });
  });
}

function renderDay(day) {
  const done = state[day.k] || {};
  const total = day.ex.length;
  const completed = day.ex.reduce((count, _, index) => count + (done[index] ? 1 : 0), 0);
  const actualDate = dayDate(day.k);

  let html = `<div class="day-head"><div><h2>${escapeHtml(day.full)}</h2><time class="day-date" datetime="${localDateKey(actualDate)}">${escapeHtml(fullDate(actualDate))}</time></div><span class="prog" id="prog">${completed}/${total} xong</span></div>`;
  html += `<p class="note">${escapeHtml(day.note)}</p>`;

  day.ex.forEach((exercise, index) => {
    const videoKey = `${day.k}-${index}`;
    const hasVideo = Boolean(state.videos?.[videoKey]);
    const searchQuery = encodeURIComponent(`${exercise[0].replace(/\s*\(.*\)/, "")} hướng dẫn kỹ thuật đúng`);

    html += `<div class="ex${done[index] ? " done" : ""}">
      <input type="checkbox" data-i="${index}" aria-label="Đánh dấu hoàn thành: ${escapeHtml(exercise[0])}"${done[index] ? " checked" : ""}>
      <span class="nm">${escapeHtml(exercise[0])}</span>
      <span class="sr">${escapeHtml(exercise[1])} × ${escapeHtml(exercise[2])}<span>hiệp × lần</span></span>
      <span class="tip">${escapeHtml(exercise[3])}</span>
      <div class="vid video-box" data-key="${videoKey}">
        <div class="video-links">
          <button class="video-toggle" type="button" aria-expanded="false">${hasVideo ? "Mở video" : "Thêm video"}</button>
          <a href="https://www.youtube.com/results?search_query=${searchQuery}" target="_blank" rel="noopener noreferrer">Tìm video trên YouTube</a>
        </div>
        <div class="video-panel" hidden>
          <label>Link video hướng dẫn</label>
          <input class="video-url" type="url" inputmode="url" placeholder="https://www.youtube.com/watch?v=...">
          <div class="video-actions">
            <button class="video-save" type="button">Nhúng video</button>
            <button class="video-remove" type="button">Xóa video</button>
          </div>
          <p class="video-status">Hỗ trợ YouTube, YouTube Shorts, Vimeo và link trực tiếp MP4/WebM/OGG.</p>
          <div class="video-player"></div>
        </div>
      </div>
    </div>`;
  });

  html += '<button class="reset" type="button" id="reset-day">Làm lại buổi này</button>';
  html += '<h2 class="sec">Gợi ý ăn trong ngày tập</h2><p class="note">Xem tab Ăn uống để có thực đơn đầy đủ và tính lượng calo theo cân nặng của bạn.</p>';
  view.innerHTML = html;

  document.documentElement.style.setProperty("--acc", `var(${day.c})`);
  document.documentElement.style.setProperty("--on-acc", day.oc);

  view.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      state[day.k] ||= {};
      state[day.k][checkbox.dataset.i] = checkbox.checked;
      saveState();
      checkbox.closest(".ex").classList.toggle("done", checkbox.checked);
      const count = day.ex.reduce((sum, _, index) => sum + (state[day.k][index] ? 1 : 0), 0);
      document.getElementById("prog").textContent = `${count}/${total} xong`;
    });
  });

  bindVideoControls();
  document.getElementById("reset-day").addEventListener("click", () => {
    state[day.k] = {};
    saveState();
    renderDay(day);
  });
}

function renderFood() {
  let html = '<div class="day-head" style="border-color:var(--ink)"><h2>Chế độ ăn uống</h2></div>';
  html += '<p class="note">Nhập cân nặng và mục tiêu để có con số tham khảo mỗi ngày. Đây là ước tính chung, nên điều chỉnh sau 2–3 tuần theo cân nặng thực tế.</p>';
  html += `<div class="calc"><div class="row">
    <div><label for="weight">Cân nặng (kg)</label><input id="weight" type="number" min="35" max="200" value="65" inputmode="decimal"></div>
    <div><label for="goal">Mục tiêu</label><select id="goal"><option value="38">Tăng cơ</option><option value="33" selected>Giữ cân, tăng sức mạnh</option><option value="28">Giảm mỡ</option></select></div>
  </div><div class="macros"><div><b id="calories">0</b><span>kcal</span></div><div><b id="protein">0</b><span>đạm (g)</span></div><div><b id="carbs">0</b><span>tinh bột (g)</span></div><div><b id="fat">0</b><span>béo (g)</span></div></div></div>`;
  html += '<h2 class="sec">Thực đơn mẫu một ngày</h2>';
  MEALS.forEach(meal => {
    html += `<div class="meal"><time>${meal[0]}</time><div><h3>${escapeHtml(meal[1])}</h3><p>${escapeHtml(meal[2])}</p></div></div>`;
  });
  html += '<p class="note">Ngày nghỉ: giữ nguyên các bữa chính, bỏ bữa trước tập và sau tập.</p>';
  html += '<h2 class="sec">Nguyên tắc cần nhớ</h2><ul class="rules">';
  RULES.forEach(rule => { html += `<li>${escapeHtml(rule)}</li>`; });
  html += "</ul>";
  view.innerHTML = html;

  document.documentElement.style.setProperty("--acc", "var(--ink)");
  document.documentElement.style.setProperty("--on-acc", "var(--bg)");

  const weight = document.getElementById("weight");
  const goal = document.getElementById("goal");
  let savedWeight = "";
  try {
    savedWeight = localStorage.getItem(`${STORAGE_KEY}-w`) || "";
  } catch {
    // Keep the default value when storage is unavailable.
  }
  if (savedWeight) weight.value = savedWeight;

  function calculateMacros() {
    const kilograms = Number.parseFloat(weight.value) || 0;
    const calories = Math.round(kilograms * Number.parseFloat(goal.value));
    const protein = Math.round(kilograms * 2);
    const fat = Math.round(kilograms * .9);
    const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));

    document.getElementById("calories").textContent = calories;
    document.getElementById("protein").textContent = protein;
    document.getElementById("carbs").textContent = carbs;
    document.getElementById("fat").textContent = fat;
    try {
      localStorage.setItem(`${STORAGE_KEY}-w`, weight.value);
    } catch {
      // Calculation still works when storage is unavailable.
    }
  }

  weight.addEventListener("input", calculateMacros);
  goal.addEventListener("change", calculateMacros);
  calculateMacros();
}

function renderApp() {
  renderTabs();
  if (currentTab === "food") {
    renderFood();
    return;
  }
  renderDay(DAYS.find(day => day.k === currentTab));
}

ensureCurrentWeek();

const currentWeekDay = new Date().getDay();
if (currentWeekDay >= 1 && currentWeekDay <= 5) currentTab = DAYS[currentWeekDay - 1].k;

renderToday();
renderApp();

let openDateKey = localDateKey(new Date());
function refreshDateIfNeeded() {
  const now = new Date();
  const nextKey = localDateKey(now);
  if (nextKey === openDateKey) return;

  openDateKey = nextKey;
  ensureCurrentWeek();
  const weekDay = now.getDay();
  if (weekDay >= 1 && weekDay <= 5) currentTab = DAYS[weekDay - 1].k;
  renderToday();
  renderApp();
}

window.setInterval(refreshDateIfNeeded, 60_000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) refreshDateIfNeeded();
});

themeButton.addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
});
