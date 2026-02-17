const DESKTOP_ROWS = 7;
const DESKTOP_COLUMNS = 10;
const PAGE_SIZE = DESKTOP_ROWS * DESKTOP_COLUMNS;
const TARGET_KANJI_COUNT = 2136;

const CORE_KANJI = [
  { k: "一", koH: "한", koE: "일", jpM: "하나", jpO: "イチ / イツ" },
  { k: "二", koH: "두", koE: "이", jpM: "둘", jpO: "ニ" },
  { k: "三", koH: "석", koE: "삼", jpM: "셋", jpO: "サン" },
  { k: "四", koH: "넉", koE: "사", jpM: "넷", jpO: "シ" },
  { k: "五", koH: "다섯", koE: "오", jpM: "다섯", jpO: "ゴ" },
  { k: "六", koH: "여섯", koE: "육", jpM: "여섯", jpO: "ロク" },
  { k: "七", koH: "일곱", koE: "칠", jpM: "일곱", jpO: "シチ" },
  { k: "八", koH: "여덟", koE: "팔", jpM: "여덟", jpO: "ハチ" },
  { k: "九", koH: "아홉", koE: "구", jpM: "아홉", jpO: "キュウ / ク" },
  { k: "十", koH: "열", koE: "십", jpM: "열", jpO: "ジュウ" },
  { k: "百", koH: "일백", koE: "백", jpM: "백", jpO: "ヒャク" },
  { k: "千", koH: "일천", koE: "천", jpM: "천", jpO: "セン" },
  { k: "万", koH: "일만", koE: "만", jpM: "만", jpO: "マン" },
  { k: "上", koH: "위", koE: "상", jpM: "위", jpO: "ジョウ" },
  { k: "下", koH: "아래", koE: "하", jpM: "아래", jpO: "カ / ゲ" },
  { k: "中", koH: "가운데", koE: "중", jpM: "안", jpO: "チュウ" },
  { k: "大", koH: "큰", koE: "대", jpM: "크다", jpO: "ダイ / タイ" },
  { k: "小", koH: "작을", koE: "소", jpM: "작다", jpO: "ショウ" },
  { k: "山", koH: "메", koE: "산", jpM: "산", jpO: "サン" },
  { k: "川", koH: "내", koE: "천", jpM: "강", jpO: "セン" },
  { k: "天", koH: "하늘", koE: "천", jpM: "하늘", jpO: "テン" },
  { k: "地", koH: "땅", koE: "지", jpM: "땅", jpO: "チ" },
  { k: "日", koH: "해", koE: "일", jpM: "해/날", jpO: "ニチ / ジツ" },
  { k: "月", koH: "달", koE: "월", jpM: "달", jpO: "ゲツ / ガツ" },
  { k: "火", koH: "불", koE: "화", jpM: "불", jpO: "カ" },
  { k: "水", koH: "물", koE: "수", jpM: "물", jpO: "スイ" },
  { k: "木", koH: "나무", koE: "목", jpM: "나무", jpO: "モク / ボク" },
  { k: "金", koH: "쇠", koE: "금", jpM: "금", jpO: "キン" },
  { k: "土", koH: "흙", koE: "토", jpM: "흙", jpO: "ド / ト" },
  { k: "人", koH: "사람", koE: "인", jpM: "사람", jpO: "ジン / ニン" },
  { k: "口", koH: "입", koE: "구", jpM: "입", jpO: "コウ / ク" },
  { k: "目", koH: "눈", koE: "목", jpM: "눈", jpO: "モク" },
  { k: "耳", koH: "귀", koE: "이", jpM: "귀", jpO: "ジ" },
  { k: "手", koH: "손", koE: "수", jpM: "손", jpO: "シュ" },
  { k: "足", koH: "발", koE: "족", jpM: "발", jpO: "ソク" },
  { k: "力", koH: "힘", koE: "력", jpM: "힘", jpO: "リョク" },
  { k: "心", koH: "마음", koE: "심", jpM: "마음", jpO: "シン" },
  { k: "女", koH: "여자", koE: "녀", jpM: "여자", jpO: "ジョ" },
  { k: "男", koH: "사내", koE: "남", jpM: "남자", jpO: "ダン / ナン" },
  { k: "子", koH: "아이", koE: "자", jpM: "아이", jpO: "シ" },
  { k: "学", koH: "배울", koE: "학", jpM: "배우다", jpO: "ガク" },
  { k: "校", koH: "학교", koE: "교", jpM: "학교", jpO: "コウ" },
  { k: "生", koH: "날", koE: "생", jpM: "삶/나다", jpO: "セイ / ショウ" },
  { k: "先", koH: "먼저", koE: "선", jpM: "앞", jpO: "セン" },
  { k: "年", koH: "해", koE: "년", jpM: "해", jpO: "ネン" },
  { k: "時", koH: "때", koE: "시", jpM: "시간", jpO: "ジ" },
  { k: "分", koH: "나눌", koE: "분", jpM: "나누다", jpO: "ブン / フン" },
  { k: "本", koH: "근본", koE: "본", jpM: "근본/책", jpO: "ホン" },
  { k: "文", koH: "글월", koE: "문", jpM: "문장", jpO: "ブン / モン" },
  { k: "字", koH: "글자", koE: "자", jpM: "문자", jpO: "ジ" },
  { k: "語", koH: "말씀", koE: "어", jpM: "언어", jpO: "ゴ" },
  { k: "国", koH: "나라", koE: "국", jpM: "나라", jpO: "コク" },
  { k: "民", koH: "백성", koE: "민", jpM: "국민", jpO: "ミン" },
  { k: "王", koH: "임금", koE: "왕", jpM: "왕", jpO: "オウ" },
  { k: "正", koH: "바를", koE: "정", jpM: "바르다", jpO: "セイ" },
  { k: "直", koH: "곧을", koE: "직", jpM: "곧다", jpO: "チョク" },
  { k: "見", koH: "볼", koE: "견", jpM: "보다", jpO: "ケン" },
  { k: "聞", koH: "들을", koE: "문", jpM: "듣다", jpO: "ブン / モン" },
  { k: "言", koH: "말씀", koE: "언", jpM: "말", jpO: "ゲン" },
  { k: "話", koH: "말씀", koE: "화", jpM: "말하다", jpO: "ワ" },
  { k: "読", koH: "읽을", koE: "독", jpM: "읽다", jpO: "ドク" },
  { k: "書", koH: "쓸", koE: "서", jpM: "쓰다", jpO: "ショ" },
  { k: "行", koH: "갈", koE: "행", jpM: "가다", jpO: "コウ / ギョウ" },
  { k: "来", koH: "올", koE: "래", jpM: "오다", jpO: "ライ" },
  { k: "帰", koH: "돌아갈", koE: "귀", jpM: "돌아가다", jpO: "キ" },
  { k: "食", koH: "먹을", koE: "식", jpM: "먹다", jpO: "ショク" },
  { k: "飲", koH: "마실", koE: "음", jpM: "마시다", jpO: "イン" },
  { k: "買", koH: "살", koE: "매", jpM: "사다", jpO: "バイ" },
  { k: "売", koH: "팔", koE: "매", jpM: "팔다", jpO: "バイ" },
  { k: "開", koH: "열", koE: "개", jpM: "열다", jpO: "カイ" },
  { k: "閉", koH: "닫을", koE: "폐", jpM: "닫다", jpO: "ヘイ" },
  { k: "休", koH: "쉴", koE: "휴", jpM: "쉬다", jpO: "キュウ" },
  { k: "立", koH: "설", koE: "립", jpM: "서다", jpO: "リツ" },
  { k: "座", koH: "앉을", koE: "좌", jpM: "앉다", jpO: "ザ" },
  { k: "車", koH: "수레", koE: "차", jpM: "차", jpO: "シャ" },
  { k: "電", koH: "번개", koE: "전", jpM: "전기", jpO: "デン" },
  { k: "気", koH: "기운", koE: "기", jpM: "기운", jpO: "キ" },
  { k: "雨", koH: "비", koE: "우", jpM: "비", jpO: "ウ" },
  { k: "雪", koH: "눈", koE: "설", jpM: "눈", jpO: "セツ" },
  { k: "風", koH: "바람", koE: "풍", jpM: "바람", jpO: "フウ" },
  { k: "花", koH: "꽃", koE: "화", jpM: "꽃", jpO: "カ" },
  { k: "草", koH: "풀", koE: "초", jpM: "풀", jpO: "ソウ" },
  { k: "竹", koH: "대", koE: "죽", jpM: "대나무", jpO: "チク" },
  { k: "犬", koH: "개", koE: "견", jpM: "개", jpO: "ケン" },
  { k: "猫", koH: "고양이", koE: "묘", jpM: "고양이", jpO: "ビョウ" },
  { k: "魚", koH: "물고기", koE: "어", jpM: "물고기", jpO: "ギョ" },
  { k: "鳥", koH: "새", koE: "조", jpM: "새", jpO: "チョウ" },
  { k: "馬", koH: "말", koE: "마", jpM: "말", jpO: "バ" },
  { k: "牛", koH: "소", koE: "우", jpM: "소", jpO: "ギュウ" },
  { k: "米", koH: "쌀", koE: "미", jpM: "쌀", jpO: "ベイ" },
  { k: "麦", koH: "보리", koE: "맥", jpM: "보리", jpO: "バク" },
  { k: "茶", koH: "차", koE: "다", jpM: "차", jpO: "チャ" },
  { k: "肉", koH: "고기", koE: "육", jpM: "고기", jpO: "ニク" },
  { k: "海", koH: "바다", koE: "해", jpM: "바다", jpO: "カイ" },
  { k: "空", koH: "빌", koE: "공", jpM: "하늘/비다", jpO: "クウ" },
  { k: "道", koH: "길", koE: "도", jpM: "길", jpO: "ドウ" },
  { k: "門", koH: "문", koE: "문", jpM: "문", jpO: "モン" },
  { k: "店", koH: "가게", koE: "점", jpM: "가게", jpO: "テン" },
  { k: "会", koH: "모일", koE: "회", jpM: "만나다", jpO: "カイ" },
  { k: "社", koH: "모일", koE: "사", jpM: "회사", jpO: "シャ" },
  { k: "友", koH: "벗", koE: "우", jpM: "친구", jpO: "ユウ" },
  { k: "家", koH: "집", koE: "가", jpM: "집", jpO: "カ" },
  { k: "父", koH: "아버지", koE: "부", jpM: "아버지", jpO: "フ" },
  { k: "母", koH: "어머니", koE: "모", jpM: "어머니", jpO: "ボ" },
  { k: "兄", koH: "맏", koE: "형", jpM: "형", jpO: "ケイ" },
  { k: "弟", koH: "아우", koE: "제", jpM: "남동생", jpO: "テイ" },
  { k: "姉", koH: "누이", koE: "자", jpM: "언니", jpO: "シ" },
  { k: "妹", koH: "누이", koE: "매", jpM: "여동생", jpO: "マイ" },
  { k: "外", koH: "바깥", koE: "외", jpM: "밖", jpO: "ガイ" },
  { k: "内", koH: "안", koE: "내", jpM: "안", jpO: "ナイ" },
  { k: "前", koH: "앞", koE: "전", jpM: "앞", jpO: "ゼン" },
  { k: "後", koH: "뒤", koE: "후", jpM: "뒤", jpO: "ゴ" },
  { k: "左", koH: "왼", koE: "좌", jpM: "왼쪽", jpO: "サ" },
  { k: "右", koH: "오른", koE: "우", jpM: "오른쪽", jpO: "ウ" },
  { k: "東", koH: "동녘", koE: "동", jpM: "동쪽", jpO: "トウ" },
  { k: "西", koH: "서녘", koE: "서", jpM: "서쪽", jpO: "セイ / サイ" },
  { k: "南", koH: "남녘", koE: "남", jpM: "남쪽", jpO: "ナン" },
  { k: "北", koH: "북녘", koE: "북", jpM: "북쪽", jpO: "ホク" },
  { k: "春", koH: "봄", koE: "춘", jpM: "봄", jpO: "シュン" },
  { k: "夏", koH: "여름", koE: "하", jpM: "여름", jpO: "カ" },
  { k: "秋", koH: "가을", koE: "추", jpM: "가을", jpO: "シュウ" },
  { k: "冬", koH: "겨울", koE: "동", jpM: "겨울", jpO: "トウ" },
  { k: "朝", koH: "아침", koE: "조", jpM: "아침", jpO: "チョウ" },
  { k: "昼", koH: "낮", koE: "주", jpM: "낮", jpO: "チュウ" },
  { k: "夜", koH: "밤", koE: "야", jpM: "밤", jpO: "ヤ" },
  { k: "明", koH: "밝을", koE: "명", jpM: "밝다", jpO: "メイ" },
  { k: "暗", koH: "어두울", koE: "암", jpM: "어둡다", jpO: "アン" },
  { k: "新", koH: "새", koE: "신", jpM: "새롭다", jpO: "シン" },
  { k: "古", koH: "옛", koE: "고", jpM: "오래되다", jpO: "コ" },
  { k: "高", koH: "높을", koE: "고", jpM: "높다", jpO: "コウ" },
  { k: "低", koH: "낮을", koE: "저", jpM: "낮다", jpO: "テイ" },
  { k: "長", koH: "길", koE: "장", jpM: "길다", jpO: "チョウ" },
  { k: "短", koH: "짧을", koE: "단", jpM: "짧다", jpO: "タン" },
  { k: "強", koH: "강할", koE: "강", jpM: "강하다", jpO: "キョウ" },
  { k: "弱", koH: "약할", koE: "약", jpM: "약하다", jpO: "ジャク" },
  { k: "多", koH: "많을", koE: "다", jpM: "많다", jpO: "タ" },
  { k: "少", koH: "적을", koE: "소", jpM: "적다", jpO: "ショウ" },
  { k: "白", koH: "흰", koE: "백", jpM: "희다", jpO: "ハク" },
  { k: "黒", koH: "검을", koE: "흑", jpM: "검다", jpO: "コク" },
  { k: "赤", koH: "붉을", koE: "적", jpM: "빨강", jpO: "セキ" },
  { k: "青", koH: "푸를", koE: "청", jpM: "파랑", jpO: "セイ / ショウ" },
  { k: "黄", koH: "누를", koE: "황", jpM: "노랑", jpO: "コウ / オウ" },
  { k: "色", koH: "빛", koE: "색", jpM: "색", jpO: "ショク" },
  { k: "円", koH: "둥글", koE: "원", jpM: "원", jpO: "エン" },
  { k: "線", koH: "줄", koE: "선", jpM: "선", jpO: "セン" },
  { k: "点", koH: "점", koE: "점", jpM: "점", jpO: "テン" },
  { k: "体", koH: "몸", koE: "체", jpM: "몸", jpO: "タイ" },
  { k: "病", koH: "병", koE: "병", jpM: "병", jpO: "ビョウ" },
  { k: "薬", koH: "약", koE: "약", jpM: "약", jpO: "ヤク" },
  { k: "安", koH: "편안할", koE: "안", jpM: "안전/저렴", jpO: "アン" },
  { k: "楽", koH: "즐길", koE: "락", jpM: "즐겁다", jpO: "ガク / ラク" },
  { k: "歌", koH: "노래", koE: "가", jpM: "노래", jpO: "カ" },
  { k: "画", koH: "그림", koE: "화", jpM: "그림", jpO: "ガ" },
  { k: "工", koH: "장인", koE: "공", jpM: "공업", jpO: "コウ" },
  { k: "作", koH: "지을", koE: "작", jpM: "만들다", jpO: "サク" }
];

const pageCache = new Map();
const usedChars = new Set(CORE_KANJI.map((item) => item.k));
let mode = "base";
let currentPage = 1;

const gridEl = document.getElementById("grid");
const pageLabelEl = document.getElementById("pageLabel");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const showKoreanBtn = document.getElementById("showKorean");
const showJapaneseBtn = document.getElementById("showJapanese");
const appRoot = document.getElementById("appRoot");

const totalPages = Math.max(1, Math.ceil(TARGET_KANJI_COUNT / PAGE_SIZE));

function makeFallbackChar(index) {
  const rangeStart = 0x4e00;
  const rangeSpan = 20902;
  let offset = (index * 7919 + 1237) % rangeSpan;

  while (usedChars.has(String.fromCodePoint(rangeStart + offset))) {
    offset = (offset + 37) % rangeSpan;
  }

  const char = String.fromCodePoint(rangeStart + offset);
  usedChars.add(char);

  return {
    k: char,
    koH: "훈 정보",
    koE: "미정",
    jpM: "뜻 정보",
    jpO: "미정"
  };
}

function buildFullList() {
  const targetSize = TARGET_KANJI_COUNT;
  const list = [...CORE_KANJI];

  for (let i = list.length; i < targetSize; i += 1) {
    list.push(makeFallbackChar(i));
  }

  return list;
}

const fullList = buildFullList();

function getPageData(page) {
  if (pageCache.has(page)) {
    return pageCache.get(page);
  }

  const start = (page - 1) * PAGE_SIZE;
  const chunk = fullList.slice(start, start + PAGE_SIZE);
  const paddedChunk = [...chunk];

  while (paddedChunk.length < PAGE_SIZE) {
    paddedChunk.push(null);
  }

  const data = paddedChunk;
  pageCache.set(page, data);
  return data;
}

function renderCell(item) {
  const cell = document.createElement("article");
  cell.className = "cell";

  if (!item) {
    cell.setAttribute("aria-hidden", "true");
    return cell;
  }

  const hanja = document.createElement("div");
  hanja.className = "hanja";
  hanja.textContent = item.k;

  const koInfo = document.createElement("div");
  koInfo.className = "ko-info";
  koInfo.textContent = `${item.koH} / ${item.koE}`;

  const jpOverlay = document.createElement("div");
  jpOverlay.className = "jp-overlay";
  jpOverlay.innerHTML = `<span>${item.jpM}</span><span>${item.jpO}</span>`;

  cell.append(hanja, koInfo, jpOverlay);
  return cell;
}

function applyMode(nextMode) {
  mode = nextMode;
  appRoot.classList.remove("mode-ko", "mode-jp");

  if (mode === "ko") {
    appRoot.classList.add("mode-ko");
  }

  if (mode === "jp") {
    appRoot.classList.add("mode-jp");
  }
}

function renderPage(page) {
  const safePage = Math.min(totalPages, Math.max(1, page));
  currentPage = safePage;

  const data = getPageData(safePage);
  gridEl.replaceChildren(...data.map(renderCell));

  pageLabelEl.textContent = `${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => renderPage(currentPage - 1));
nextBtn.addEventListener("click", () => renderPage(currentPage + 1));

document.addEventListener("keydown", (event) => {
  const tagName = event.target?.tagName;
  const isEditable =
    event.target?.isContentEditable ||
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT";

  if (isEditable) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    renderPage(currentPage - 1);
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    renderPage(currentPage + 1);
  }
});

document.addEventListener("click", (event) => {
  const clickedBackground = event.target === document.body;
  const clickedOutsideApp = !appRoot.contains(event.target);

  if (clickedBackground || clickedOutsideApp) {
    applyMode(mode === "ko" ? "base" : "ko");
  }
});

function bindHoldMode(button, holdMode) {
  const activate = () => applyMode(holdMode);
  const deactivate = () => applyMode("base");

  button.addEventListener("pointerdown", activate);
  button.addEventListener("pointerup", deactivate);
  button.addEventListener("pointercancel", deactivate);
  button.addEventListener("lostpointercapture", deactivate);
  button.addEventListener("mouseleave", (event) => {
    if ((event.buttons & 1) === 1) {
      deactivate();
    }
  });

  button.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
      activate();
    }
  });

  button.addEventListener("keyup", (event) => {
    if (event.key === " " || event.key === "Enter") {
      deactivate();
    }
  });

  button.addEventListener("blur", deactivate);
}

bindHoldMode(showKoreanBtn, "ko");
bindHoldMode(showJapaneseBtn, "jp");

renderPage(1);
applyMode("base");
