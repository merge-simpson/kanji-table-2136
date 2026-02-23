const DESKTOP_ROWS = 7;
const DESKTOP_COLUMNS = 10;
const PAGE_SIZE = DESKTOP_ROWS * DESKTOP_COLUMNS;
const TARGET_KANJI_COUNT = 2136;
const JOYO_KANJI_SORTED_JSON_PATH = "./joyo-kanji.sorted.json";
const MEMORIZED_KANJI_STORAGE_KEY = "memorized-kanji-list-v1";


const JP_WORD_EXAMPLES = {
  一: ["一つ", "一日"],
  二: ["二つ", "二日"],
  三: ["三つ", "三日"],
  四: ["四つ", "四日"],
  五: ["五つ", "五月"],
  六: ["六つ", "六月"],
  七: ["七つ", "七日"],
  八: ["八つ", "八日"],
  九: ["九つ", "九日"],
  十: ["十", "十日"],
  百: ["百", "百円"],
  千: ["千", "千円"],
  万: ["一万", "万円"],
  上: ["上", "上手"],
  下: ["下", "地下"],
  中: ["中", "中国"],
  大: ["大きい", "大学"],
  小: ["小さい", "小学校"],
  山: ["山", "富士山"],
  川: ["川", "河川"],
  天: ["天気", "天国"],
  地: ["地下", "地図"],
  日: ["日本", "休日"],
  月: ["月曜日", "今月"],
  火: ["火山", "花火"],
  水: ["水曜日", "飲み水"],
  木: ["木曜日", "大木"],
  金: ["金曜日", "料金"],
  土: ["土曜日", "土地"],
  人: ["日本人", "人気"],
  口: ["口", "出口"],
  目: ["目", "目的"],
  耳: ["耳", "耳鼻科"],
  手: ["手", "上手"],
  足: ["足", "満足"],
  力: ["力", "体力"],
  心: ["心", "中心"],
  女: ["女性", "女子"],
  男: ["男性", "男子"],
  子: ["子ども", "王子"],
  学: ["学生", "学校"],
  校: ["高校", "母校"],
  生: ["先生", "人生"],
  先: ["先生", "先週"],
  年: ["今年", "来年"],
  時: ["時間", "時計"],
  分: ["分かる", "十分"],
  本: ["本", "日本"],
  文: ["文章", "文学"],
  字: ["文字", "漢字"],
  語: ["日本語", "英語"],
  国: ["国", "外国"],
  民: ["国民", "市民"],
  王: ["王", "王国"],
  正: ["正しい", "正月"],
  直: ["直す", "正直"],
  食: ["食べる", "食事"],
  飲: ["飲み物", "飲む"],
  見: ["見る", "意見"],
  聞: ["聞く", "新聞"],
  読: ["読む", "読書"],
  書: ["書く", "辞書"],
  行: ["行く", "旅行"],
  来: ["来る", "未来"],
  帰: ["帰る", "帰国"],
  言: ["言う", "言葉"],
  話: ["話す", "電話"],
  買: ["買う", "買い物"],
  売: ["売る", "売店"],
  開: ["開く", "開始"],
  閉: ["閉める", "閉店"],
  休: ["休む", "休日"],
  立: ["立つ", "国立"],
  座: ["座る", "座席"],
  会: ["会社", "会う"],
  社: ["会社", "神社"],
  道: ["道", "道路"],
  電: ["電車", "電話"],
  車: ["自転車", "車道"],
  気: ["気", "元気"],
  麦: ["むぎ", "麦茶"],
  雨: ["雨", "梅雨"],
  雪: ["雪", "大雪"],
  風: ["風", "台風"],
  草: ["草", "草原"],
  竹: ["竹", "竹林"],
  犬: ["犬", "子犬"],
  猫: ["猫", "子猫"],
  魚: ["魚", "金魚"],
  鳥: ["鳥", "小鳥"],
  馬: ["馬", "競馬"],
  牛: ["牛", "牛乳"],
  米: ["米", "白米"],
  茶: ["お茶", "紅茶"],
  肉: ["肉", "牛肉"],
  海: ["海", "海外"],
  空: ["空", "空港"],
  門: ["門", "専門"],
  店: ["店", "書店"],
  友: ["友だち", "友人"],
  家: ["家", "家族"],
  父: ["父", "父母"],
  母: ["母", "母国"],
  兄: ["兄", "兄弟"],
  弟: ["弟", "兄弟"],
  姉: ["姉", "姉妹"],
  妹: ["妹", "姉妹"],
  外: ["外", "外国"],
  内: ["内", "案内"],
  前: ["前", "名前"],
  後: ["後", "最後"],
  左: ["左", "左右"],
  右: ["右", "左右"],
  東: ["東", "東京"],
  西: ["西", "関西"],
  南: ["南", "南口"],
  北: ["北", "北海道"],
  春: ["春", "青春"],
  夏: ["夏", "真夏"],
  秋: ["秋", "秋分"],
  冬: ["冬", "冬休み"],
  朝: ["朝", "今朝"],
  昼: ["昼", "昼食"],
  夜: ["夜", "今夜"],
  明: ["明るい", "説明"],
  暗: ["暗い", "暗記"],
  新: ["新しい", "新聞"],
  古: ["古い", "中古"],
  高: ["高い", "高校"],
  低: ["低い", "最低"],
  長: ["長い", "校長"],
  短: ["短い", "短所"],
  強: ["強い", "勉強"],
  弱: ["弱い", "弱点"],
  多: ["多い", "多分"],
  少: ["少ない", "多少"],
  白: ["白", "面白い"],
  黒: ["黒", "黒板"],
  赤: ["赤", "赤字"],
  青: ["青", "青年"],
  黄: ["黄色", "黄金"],
  色: ["色", "景色"],
  円: ["円", "百円"],
  線: ["線", "直線"],
  点: ["点", "満点"],
  体: ["体", "体力"],
  病: ["病気", "看病"],
  薬: ["薬", "薬局"],
  安: ["安い", "安心"],
  楽: ["楽しい", "音楽"],
  歌: ["歌", "歌手"],
  画: ["映画", "計画"],
  工: ["工場", "工学"],
  作: ["作る", "作品"],
  花: ["花", "花見"]
};

const AUTO_JP_EXAMPLES = {
  "一": ["一つ", "一向に"],
  "七": ["七つ", "七夕"],
  "万": ["万一", "万事"],
  "三": ["三つ", "三角"],
  "上": ["上り", "上がり"],
  "下": ["下り", "下る"],
  "丘": ["丘", "丘陵"],
  "中": ["世の中", "中継ぎ"],
  "乄": ["乄切り", "乄粕"],
  "乗": ["乗る", "乗せる"],
  "九": ["九つ", "九"],
  "亀": ["亀", "亀裂"],
  "二": ["二つ", "二人"],
  "五": ["五つ", "五分"],
  "京": ["上京", "帰京"],
  "人": ["一人", "万人"],
  "仕": ["仕上げ", "仕入れ"],
  "企": ["企業", "企画"],
  "休": ["休み", "休む"],
  "会": ["出会う", "会合"],
  "伶": ["伶人", "伶俐"],
  "伺": ["伺う", "伺い"],
  "伽": ["お伽", "伽藍"],
  "低": ["低い", "低下"],
  "佐": ["補佐", "中佐"],
  "体": ["一体", "主体"],
  "作": ["作る", "不作"],
  "佩": ["佩く", "佩びる"],
  "侏": ["侏儒"],
  "俎": ["俎板", "俎上"],
  "俑": ["俑を作る", "兵馬俑"],
  "信": ["不信", "信仰"],
  "俤": ["俤"],
  "俺": ["俺", "俺ら"],
  "倍": ["倍増", "倍率"],
  "倣": ["倣う", "模倣"],
  "倶": ["倶楽部", "倶す"],
  "倹": ["倹約", "倹しい"],
  "偉": ["偉大", "偉い"],
  "偵": ["偵察", "探偵"],
  "偸": ["偸む", "偸安"],
  "傴": ["傴僂"],
  "僊": ["僊人", "神僊"],
  "儲": ["儲け", "儲かる"],
  "兄": ["兄弟", "兄"],
  "充": ["充実", "補充"],
  "先": ["先に", "勤め先"],
  "八": ["八", "八つ"],
  "六": ["六", "六つ"],
  "共": ["共に", "共働き"],
  "内": ["以内", "内側"],
  "円": ["一円", "円安"],
  "冒": ["冒険", "冒頭"],
  "冗": ["冗談", "冗舌"],
  "冬": ["冬季", "冬"],
  "冰": ["冰"],
  "分": ["分ける", "五分"],
  "前": ["前向き", "前売り"],
  "剔": ["剔る", "剔出"],
  "剗": ["剗竜"],
  "剪": ["剪む", "剪る"],
  "剽": ["剽げる", "剽げ者"],
  "劓": ["劓"],
  "力": ["力強い", "体力"],
  "助": ["助ける", "助手"],
  "勒": ["弥勒", "勒する"],
  "勾": ["勾配", "勾玉"],
  "北": ["北東", "北極"],
  "区": ["区分", "区別"],
  "十": ["何十", "十分"],
  "千": ["何千", "千"],
  "卍": ["まじ卍", "卍固め"],
  "卐": ["右卐"],
  "南": ["南北", "南東"],
  "卦": ["八卦", "卦兆"],
  "友": ["友人", "友好"],
  "収": ["収まる", "収める"],
  "叡": ["叡聞に", "比叡山"],
  "口": ["悪口", "入り口"],
  "古": ["古い", "中古"],
  "台": ["台所", "台風"],
  "右": ["右側", "右手"],
  "号": ["信号", "番号"],
  "吊": ["吊る", "吊るす"],
  "名": ["名高い", "呼び名"],
  "吝": ["吝い", "吝か"],
  "吠": ["吠える", "吠る"],
  "吶": ["吶々", "吶吶"],
  "呆": ["呆け", "痴呆"],
  "呉": ["呉服", "呉れる"],
  "呟": ["呟く", "呟き"],
  "呵": ["呵り", "呵る"],
  "哄": ["哄然", "哄笑"],
  "哇": ["布哇"],
  "哭": ["哭く", "哀哭"],
  "唆": ["示唆", "唆す"],
  "唯": ["唯一", "唯"],
  "善": ["善意", "慈善"],
  "喪": ["喪失", "喪主"],
  "嗩": ["嗩吶"],
  "噤": ["噤む", "口を噤む"],
  "噺": ["お伽噺", "噺家"],
  "嚼": ["咀嚼", "嚼む"],
  "四": ["四つ", "四季"],
  "国": ["我が国", "入国"],
  "國": ["國章", "御國"],
  "土": ["国土", "土台"],
  "地": ["空き地", "余地"],
  "坊": ["坊さん", "赤ん坊"],
  "垢": ["歯垢", "無垢"],
  "埋": ["埋める", "埋め立て"],
  "埴": ["埴輪", "埴土"],
  "堊": ["白堊"],
  "堝": ["坩堝"],
  "堰": ["堰", "堰く"],
  "墅": ["別墅"],
  "壁": ["壁", "壁画"],
  "売": ["売る", "前売り"],
  "夏": ["夏休み", "初夏"],
  "外": ["外す", "外れ"],
  "夙": ["夙に", "夙夜"],
  "多": ["多分", "多大"],
  "夜": ["夜明け", "今夜"],
  "大": ["大いに", "大きい"],
  "天": ["天下", "天井"],
  "奎": ["奎宿", "奎"],
  "奕": ["博奕", "奕々"],
  "奨": ["奨励", "奨学金"],
  "女": ["女の子", "処女"],
  "妁": ["媒妁", "媒妁人"],
  "妹": ["姉妹", "妹"],
  "姉": ["姉妹", "姉"],
  "姐": ["姐や", "姐さん"],
  "姓": ["同姓", "百姓"],
  "姦": ["姦通", "強姦"],
  "嫉": ["嫉妬", "嫉く"],
  "嫌": ["嫌い", "嫌う"],
  "嬋": ["嬋妍", "嬋娟"],
  "子": ["女の子", "男の子"],
  "字": ["数字", "文字"],
  "孝": ["孝行", "親孝行"],
  "学": ["中学", "入学"],
  "孰": ["孰か", "孰れ"],
  "孳": ["孳尾む"],
  "安": ["安売り", "不安"],
  "宜": ["便宜", "適宜"],
  "実": ["実に", "実は"],
  "宮": ["二宮", "子宮"],
  "家": ["我が家", "一家"],
  "寅": ["寅", "寅の刻"],
  "寛": ["寛大", "寛ぐ"],
  "寮": ["寮", "寮生"],
  "射": ["反射", "注射"],
  "將": ["將校", "玉將"],
  "小": ["小さい", "小遣い"],
  "少": ["少し", "少ない"],
  "尚": ["尚", "尚更"],
  "尭": ["尭々", "尭尭"],
  "局": ["当局", "支局"],
  "屬": ["卑屬", "ヨモギ屬"],
  "屯": ["駐屯", "屯う"],
  "山": ["山林", "山脈"],
  "岫": ["岫"],
  "峽": ["峽"],
  "崖": ["崖", "断崖"],
  "崩": ["崩れる", "崩壊"],
  "嶺": ["高嶺", "分水嶺"],
  "嶽": ["富嶽", "山嶽"],
  "巍": ["巍然"],
  "川": ["小川", "河川"],
  "巣": ["巣", "卵巣"],
  "工": ["人工", "加工"],
  "左": ["左側", "左右"],
  "希": ["希望", "希少"],
  "帥": ["元帥", "総帥"],
  "帰": ["帰り", "日帰り"],
  "常": ["常に", "常用"],
  "幡": ["八幡", "八幡宮"],
  "年": ["お年玉", "年寄り"],
  "床": ["床の間", "起床"],
  "店": ["商店", "売店"],
  "庠": ["庠序", "庠"],
  "座": ["即座", "座席"],
  "庶": ["庶民", "庶務"],
  "廉": ["廉価", "廉売"],
  "廟": ["ご廟", "古廟"],
  "弈": ["博弈"],
  "弛": ["弛む", "弛み"],
  "弟": ["兄弟", "弟子"],
  "弱": ["弱い", "弱み"],
  "強": ["強い", "強さ"],
  "彝": ["彝語"],
  "彭": ["彭湃"],
  "彰": ["表彰", "顕彰"],
  "後": ["後ろ", "後回し"],
  "徜": ["徜徉"],
  "心": ["心得る", "中心"],
  "必": ["必ず", "必修"],
  "忘": ["忘年会", "忘れ物"],
  "快": ["快い", "不快"],
  "怪": ["怪しい", "怪しむ"],
  "恃": ["恃み", "恃む"],
  "恩": ["恩返し", "恩恵"],
  "恬": ["恬惔", "恬淡"],
  "悒": ["悒々", "悒悒"],
  "惑": ["惑わす", "困惑"],
  "惔": ["恬惔"],
  "惧": ["危惧", "惧れる"],
  "慢": ["慢性", "我慢"],
  "慥": ["慥か", "慥かに"],
  "憎": ["憎しみ", "憎悪"],
  "憤": ["憤慨", "憤り"],
  "憺": ["惨憺", "意匠惨憺"],
  "懊": ["懊悩", "懊悩煩悶"],
  "懣": ["忿懣", "憤懣"],
  "懶": ["懶い", "懶げ"],
  "戌": ["戌の刻", "戌の日"],
  "戟": ["刺戟", "剣戟"],
  "戲": ["戲ける", "戲け者"],
  "扈": ["扈従", "跋扈"],
  "手": ["取っ手", "手伝い"],
  "扛": ["扛秤"],
  "扞": ["扞格"],
  "扱": ["扱う", "取り扱い"],
  "把": ["把握", "把"],
  "拆": ["真拆", "真拆葛"],
  "拉": ["拉麺", "拉ぐ"],
  "拙": ["拙速", "巧拙"],
  "拜": ["拜見"],
  "挂": ["挂冠", "挂甲"],
  "挘": ["挘る"],
  "捗": ["捗る", "進捗"],
  "掃": ["掃除", "清掃"],
  "掖": ["欠掖", "掖"],
  "掩": ["掩い", "掩う"],
  "掬": ["掬う", "掬い"],
  "搔": ["搔き", "搔く"],
  "摩": ["摩擦", "摩る"],
  "摹": ["摹本"],
  "撒": ["撒く", "ばら撒く"],
  "撥": ["撥ねる", "撥ね"],
  "撻": ["ご鞭撻", "鞭撻"],
  "擡": ["擡げる", "擡頭"],
  "擤": ["擤む", "擤鼻"],
  "擺": ["擺つ"],
  "攣": ["攣る", "引攣り"],
  "改": ["改める", "改善"],
  "敏": ["敏感", "機敏"],
  "敢": ["勇敢", "敢行"],
  "敵": ["匹敵", "敵対"],
  "數": ["員數", "數度"],
  "文": ["作文", "文体"],
  "斡": ["斡旋", "斡旋員"],
  "新": ["新た", "新しい"],
  "斷": ["斷つ", "言語道斷"],
  "无": ["无れ", "无"],
  "日": ["日ごろ", "日の丸"],
  "昆": ["昆虫", "昆布"],
  "明": ["夜明け", "明かり"],
  "星": ["星座", "火星"],
  "春": ["売春", "青春"],
  "是": ["是正", "是非"],
  "昼": ["昼休み", "昼過ぎ"],
  "時": ["一時", "同時"],
  "普": ["普及", "普段"],
  "暇": ["休暇", "余暇"],
  "暗": ["真っ暗", "薄暗い"],
  "曖": ["曖昧", "曖昧さ"],
  "曙": ["曙", "曙光"],
  "書": ["書き方", "図書"],
  "替": ["両替", "代替"],
  "月": ["今月", "先月"],
  "朕": ["朕"],
  "朝": ["今朝", "早朝"],
  "木": ["並木", "木曜"],
  "末": ["始末", "年末"],
  "本": ["本の", "古本"],
  "朮": ["朮"],
  "来": ["来る", "出来る"],
  "杪": ["杪冬", "杪春"],
  "東": ["北東", "南東"],
  "柒": ["柒"],
  "査": ["巡査", "捜査"],
  "柾": ["柾目", "柾の葛"],
  "校": ["学校", "校則"],
  "栽": ["栽培", "盆栽"],
  "桐": ["桐", "桐材"],
  "桶": ["桶", "ため桶"],
  "梏": ["手梏", "桎梏"],
  "梢": ["末梢", "梢子"],
  "梵": ["梵僧", "梵刹"],
  "棋": ["将棋", "棋士"],
  "植": ["田植え", "植木"],
  "椶": ["椶櫚"],
  "楲": ["楲殿"],
  "極": ["北極", "南極"],
  "楽": ["楽しい", "楽しみ"],
  "榛": ["榛の実", "榛の木"],
  "榱": ["榱"],
  "榴": ["柘榴", "榴弾"],
  "槇": ["槇柏", "槇皮"],
  "標": ["標本", "標準"],
  "橅": ["橅の木", "橅材"],
  "橘": ["橘", "柑橘類"],
  "橛": ["乾屎橛"],
  "檄": ["檄文", "檄"],
  "檗": ["黄檗", "黄檗宗"],
  "櫃": ["お櫃", "唐櫃"],
  "櫓": ["櫓投げ", "見せ櫓"],
  "欒": ["団欒", "朱欒"],
  "款": ["借款", "定款"],
  "歌": ["歌う", "和歌"],
  "歔": ["歔欷き", "欷歔"],
  "正": ["正しい", "不正"],
  "歪": ["歪む", "歪み"],
  "殼": ["貝殼"],
  "母": ["母さん", "叔母"],
  "毒": ["中毒", "有毒"],
  "民": ["人民", "住民"],
  "気": ["乗り気", "気持ち"],
  "氤": ["氤氳"],
  "水": ["水増し", "飲み水"],
  "氷": ["氷山", "氷"],
  "池": ["電池", "乾電池"],
  "沌": ["混沌", "渾沌"],
  "沢": ["沢山", "贅沢"],
  "泡": ["泡", "気泡"],
  "浙": ["浙江省", "浙江財閥"],
  "浜": ["浜辺", "砂浜"],
  "海": ["海上", "海外"],
  "涅": ["涅槃", "涅色"],
  "涛": ["怒涛", "松涛"],
  "涮": ["涮羊肉"],
  "渙": ["渙散", "渙然"],
  "温": ["温かい", "温まる"],
  "測": ["測る", "推測"],
  "湘": ["湘南電車"],
  "湫": ["湫"],
  "湾": ["湾", "台湾"],
  "溪": ["溪谷", "溪間"],
  "溽": ["溽暑"],
  "滓": ["残滓", "削り滓"],
  "漏": ["漏らす", "雨漏り"],
  "漸": ["漸く", "漸と"],
  "潑": ["潑剌", "潑溂"],
  "潤": ["潤い", "潤う"],
  "潺": ["潺々", "潺湲"],
  "澹": ["恬澹", "惨澹"],
  "濟": ["濟む"],
  "瀞": ["瀞み", "瀞む"],
  "火": ["噴火", "放火"],
  "炉": ["炉心", "高炉"],
  "炯": ["炯々", "炯炯"],
  "点": ["原点", "地点"],
  "烈": ["強烈", "熱烈"],
  "烱": ["烱々", "烱烱"],
  "焚": ["焚く", "お火焚"],
  "焰": ["火焰太鼓"],
  "煆": ["煆焼"],
  "煖": ["煖房", "煖気"],
  "煙": ["喫煙", "煙突"],
  "熅": ["熅れ", "草熅れ"],
  "熕": ["砲熕"],
  "熾": ["熾す", "熾る"],
  "燔": ["燔祭"],
  "燗": ["熱燗", "燗番"],
  "燭": ["蝋燭", "南燭"],
  "父": ["伯父", "叔父"],
  "爼": ["爼"],
  "爿": ["爿偏"],
  "牒": ["来牒", "移牒"],
  "牛": ["牛乳", "牛肉"],
  "牾": ["抵牾く", "牴牾く"],
  "犬": ["犬", "愛犬"],
  "狐": ["狐", "狐の窓"],
  "狼": ["狼", "人狼"],
  "猥": ["猥ら", "猥り"],
  "猫": ["猫", "子猫"],
  "王": ["女王", "王国"],
  "玳": ["玳瑁"],
  "琴": ["琴", "たて琴"],
  "瑚": ["珊瑚", "珊瑚樹"],
  "瑰": ["瑰麗"],
  "瑳": ["切瑳", "切瑳琢磨"],
  "璃": ["瑠璃", "浄瑠璃"],
  "璆": ["璆鏘"],
  "瓫": ["埴瓫"],
  "瓮": ["埴瓮", "瓮"],
  "生": ["生る", "生かす"],
  "男": ["男の子", "男前"],
  "画": ["企画", "区画"],
  "畿": ["近畿", "畿内"],
  "疫": ["免疫", "検疫"],
  "疾": ["疾患", "疾病"],
  "病": ["病人", "病室"],
  "痔": ["痔", "いぼ痔"],
  "痺": ["麻痺", "痺れる"],
  "瘦": ["瘦せる"],
  "癒": ["癒着", "治癒"],
  "癢": ["伎癢", "技癢"],
  "癸": ["癸丑", "癸亥"],
  "登": ["登る", "登場"],
  "白": ["白い", "真っ白"],
  "百": ["何百", "百姓"],
  "皎": ["皎々", "皎然"],
  "皺": ["皺", "畳み皺"],
  "益": ["利益", "損益"],
  "監": ["監督", "監禁"],
  "目": ["効き目", "目当て"],
  "直": ["直ちに", "見直す"],
  "眉": ["眉", "眉毛"],
  "県": ["県庁", "県立"],
  "真": ["真っ先", "真っ暗"],
  "睡": ["睡眠", "昏睡"],
  "瞰": ["下瞰", "俯瞰"],
  "瞳": ["瞳", "瞳孔"],
  "矜": ["矜恃", "矜持"],
  "短": ["短大", "短期"],
  "矯": ["矯正", "矯める"],
  "碩": ["碩儒", "碩学"],
  "磨": ["歯磨き", "磨き"],
  "礁": ["暗礁", "岩礁"],
  "礪": ["礪茶"],
  "社": ["会社", "入社"],
  "祀": ["祀る", "合祀"],
  "祐": ["天祐", "富祐"],
  "祓": ["祓い", "祓う"],
  "祿": ["俸祿", "俸祿米"],
  "福": ["幸福", "祝福"],
  "秋": ["秋", "秋風"],
  "科": ["内科", "外科"],
  "秤": ["秤", "ばね秤"],
  "秧": ["挿秧", "秧鶏"],
  "稍": ["稍", "稍重"],
  "穏": ["穏やか", "平穏"],
  "穢": ["穢い", "穢す"],
  "空": ["空き", "空き地"],
  "立": ["立つ", "旅立つ"],
  "章": ["文章", "章"],
  "競": ["競争", "競技"],
  "竹": ["竹", "爆竹"],
  "笆": ["笆"],
  "笟": ["笟"],
  "笯": ["笯"],
  "筅": ["茶筅", "茶筅髪"],
  "筈": ["筈", "その筈"],
  "筮": ["卜筮", "占筮"],
  "箇": ["箇所", "箇月"],
  "箚": ["箚青", "駐箚"],
  "箝": ["箝げる", "箝口"],
  "箭": ["大箭", "弓箭"],
  "篆": ["篆刻", "大篆"],
  "簫": ["簫の笛", "排簫"],
  "簾": ["暖簾", "巻き簾"],
  "米": ["新米", "日米"],
  "糒": ["糒"],
  "糕": ["金楚糕", "糕"],
  "系": ["体系", "家系"],
  "糾": ["紛糾", "糾合"],
  "純": ["単純", "純粋"],
  "紺": ["紺屋", "紺"],
  "結": ["結び", "結ぶ"],
  "絣": ["白絣", "矢絣"],
  "給": ["供給", "時給"],
  "絹": ["絹糸", "絹"],
  "綏": ["綏撫"],
  "綢": ["綢密", "綢繆"],
  "綸": ["経綸", "綸子"],
  "緋": ["緋い", "緋の菜"],
  "線": ["光線", "曲線"],
  "緡": ["緡縄", "緡"],
  "練": ["未練", "練習"],
  "縊": ["縊く", "縊る"],
  "縣": ["縣"],
  "纈": ["纐纈", "蝋纈染め"],
  "纛": ["大纛", "牙纛"],
  "罅": ["罅", "罅ぜる"],
  "罫": ["罫引き", "罫描き"],
  "置": ["位置", "処置"],
  "羗": ["羗"],
  "羚": ["羚羊", "牛羚羊"],
  "翩": ["翩々", "翩翩"],
  "耒": ["耒偏", "耒耜"],
  "耕": ["農耕", "耕す"],
  "耳": ["耳", "耳障り"],
  "聞": ["聞かす", "聞き手"],
  "聽": ["傾聽"],
  "肉": ["焼き肉", "牛肉"],
  "肓": ["膏肓"],
  "肩": ["肩書", "肩代わり"],
  "胥": ["華胥"],
  "胸": ["胸", "度胸"],
  "腹": ["腹", "お腹"],
  "膵": ["膵がん", "膵島"],
  "臈": ["上臈", "中臈"],
  "致": ["致す", "一致"],
  "與": ["與太者"],
  "舊": ["舊字", "舊字體"],
  "舳": ["舳先", "舳艫"],
  "艙": ["船艙", "艙口"],
  "良": ["良い", "仲良く"],
  "色": ["景色", "染色"],
  "花": ["火花", "花嫁"],
  "苗": ["苗", "苗木"],
  "茯": ["茯苓", "土茯苓"],
  "茶": ["お茶", "茶の間"],
  "草": ["草原", "草木"],
  "荘": ["別荘", "山荘"],
  "莧": ["滑莧", "針莧"],
  "莪": ["菁莪", "著莪"],
  "莽": ["榛莽", "草莽"],
  "菀": ["紫菀", "姫女菀"],
  "菓": ["菓子", "お菓子"],
  "菩": ["菩薩", "菩提"],
  "葎": ["枯葎", "葎草"],
  "葷": ["五葷", "葷酒"],
  "葺": ["葺き", "葺く"],
  "蒐": ["蒐荷", "蒐輯"],
  "蕊": ["花蕊", "雄蕊"],
  "薬": ["火薬", "薬品"],
  "蘇": ["蘇る", "蘇り"],
  "蘚": ["光蘚", "水蘚"],
  "蘭": ["仏蘭西", "阿蘭陀"],
  "虬": ["虬竜", "虬"],
  "虯": ["虯"],
  "蚕": ["蚕糸", "養蚕"],
  "蚫": ["蚫"],
  "蛁": ["蛁蟟"],
  "蛄": ["蜊蛄", "蝦蛄"],
  "蛔": ["蛔虫"],
  "蛭": ["山蛭", "沼蛭"],
  "蜀": ["玉蜀黍", "望蜀"],
  "蜓": ["蜻蜓", "銀蜻蜓"],
  "蜩": ["茅蜩", "鳴蜩"],
  "蜿": ["蜿々", "蜿蜒"],
  "蝕": ["蝕む", "う蝕"],
  "蝥": ["斑蝥"],
  "蝨": ["蝨潰し", "壁蝨"],
  "螺": ["螺旋", "吹螺"],
  "螽": ["螽斯", "姫螽蟖"],
  "蟐": ["蟐螂"],
  "蟹": ["蟹", "渡り蟹"],
  "蠏": ["蠏座", "蠏玉"],
  "蠢": ["蠢く", "蠢かす"],
  "行": ["行う", "行き"],
  "衡": ["均衡", "不均衡"],
  "衷": ["折衷", "衷心"],
  "袍": ["旗袍", "素袍"],
  "裟": ["大袈裟", "袈裟"],
  "裲": ["裲襠"],
  "褞": ["褞袍"],
  "西": ["北西", "南西"],
  "覆": ["覆う", "覆面"],
  "見": ["見る", "見える"],
  "覯": ["希覯", "稀覯"],
  "覲": ["参覲", "参覲交代"],
  "言": ["言う", "言い方"],
  "託": ["託す", "信託"],
  "訪": ["訪ねる", "訪問"],
  "設": ["建設", "施設"],
  "詩": ["詩人", "詩歌"],
  "話": ["話す", "世話"],
  "誂": ["誂え", "誂える"],
  "誕": ["生誕", "誕生"],
  "語": ["語る", "物語る"],
  "誨": ["教誨", "訓誨"],
  "読": ["読み", "読む"],
  "諧": ["俳諧", "誹諧"],
  "諺": ["諺", "俗諺"],
  "謐": ["静謐"],
  "謦": ["謦咳"],
  "謹": ["謹慎", "謹む"],
  "譏": ["譏り", "譏る"],
  "讎": ["仇讎", "復讎"],
  "豈": ["豈"],
  "象": ["印象", "対象"],
  "貝": ["貝殻", "貝"],
  "負": ["負う", "負け"],
  "貰": ["貰う", "貰い"],
  "貳": ["貳"],
  "買": ["買う", "買い手"],
  "賜": ["賜杯", "恩賜"],
  "贅": ["贅沢", "贅する"],
  "贈": ["贈る", "贈り物"],
  "赤": ["赤い", "真っ赤"],
  "赭": ["赭い", "赭ら顔"],
  "走": ["走る", "師走"],
  "趯": ["趯"],
  "足": ["足踏み", "不足"],
  "跂": ["跂及"],
  "跫": ["跫然", "跫音"],
  "踪": ["失踪", "踪跡"],
  "蹼": ["蹼"],
  "躾": ["躾る", "躾"],
  "車": ["下車", "乗車"],
  "輦": ["輦車", "鳳輦"],
  "轌": ["轌"],
  "轢": ["轢く", "轢る"],
  "辞": ["辞任", "辞典"],
  "辷": ["辷り", "辷る"],
  "逆": ["反逆", "逆効果"],
  "速": ["速さ", "速やか"],
  "進": ["進む", "促進"],
  "遅": ["遅い", "遅れ"],
  "道": ["使い道", "中道"],
  "還": ["返還", "還元"],
  "邇": ["邇邇芸命"],
  "酔": ["麻酔", "酔う"],
  "酪": ["酪農", "乳酪"],
  "醬": ["醬油", "低塩醬油"],
  "金": ["お金", "引き金"],
  "鈑": ["甲鈑", "鈑金"],
  "鈔": ["鈔本", "倭名鈔"],
  "鉦": ["鉦鼓", "陣鉦"],
  "鋤": ["鋤く", "鋤焼き"],
  "鋺": ["鋺"],
  "錠": ["手錠", "錠剤"],
  "錣": ["錣"],
  "鍵": ["鍵", "鍵盤"],
  "鏝": ["焼き鏝", "泥鏝"],
  "鐙": ["鐙瓦", "鐙釣"],
  "鑛": ["鑛"],
  "長": ["長い", "長さ"],
  "門": ["入門", "名門"],
  "閉": ["閉じる", "閉会"],
  "開": ["公開", "再開"],
  "間": ["床の間", "茶の間"],
  "閥": ["派閥", "財閥"],
  "閦": ["阿閦", "阿閦仏"],
  "閩": ["閩語", "閩南語"],
  "閹": ["病閹", "閹人"],
  "閼": ["閼伽"],
  "闥": ["紫闥", "乾闥婆"],
  "阡": ["阡"],
  "降": ["降りる", "下降"],
  "限": ["限り", "限る"],
  "陣": ["先陣", "出陣"],
  "陶": ["陶器", "陶酔"],
  "雋": ["雋"],
  "雨": ["大雨", "小雨"],
  "雪": ["雪解け", "吹雪"],
  "雷": ["雷", "地雷"],
  "電": ["停電", "発電"],
  "震": ["地震", "震度"],
  "霊": ["幽霊", "慰霊"],
  "霰": ["春霰", "氷霰"],
  "靆": ["靄靆", "靉靆"],
  "靉": ["靉靆"],
  "青": ["青年", "青春"],
  "靜": ["寂靜"],
  "鞅": ["三鞅", "鞅々"],
  "鞘": ["鞘取り", "鞘当て"],
  "韭": ["辣韭", "韭"],
  "頃": ["この頃", "先頃"],
  "順": ["不順", "手順"],
  "頬": ["頬っぺた", "頬"],
  "顕": ["顕微鏡", "顕在"],
  "願": ["願い", "出願"],
  "顫": ["胴顫い", "顫える"],
  "風": ["風向き", "台風"],
  "颪": ["山颪", "嶺颪"],
  "食": ["食べ物", "主食"],
  "飩": ["饂飩", "橘飩"],
  "飲": ["飲み水", "飲み物"],
  "飼": ["飼育", "飼う"],
  "餒": ["凍餒"],
  "館": ["旅館", "公民館"],
  "餻": ["豆腐餻"],
  "餾": ["蒸餾"],
  "饑": ["饑い", "饑え"],
  "馬": ["競馬", "馬"],
  "駸": ["駸々", "駸駸"],
  "騎": ["騎士", "騎手"],
  "騷": ["騷ぐ"],
  "驊": ["驊騮"],
  "驍": ["驍将"],
  "高": ["高い", "高さ"],
  "髱": ["鴎髱", "髱"],
  "髴": ["髣髴", "水天髣髴"],
  "鬚": ["巻き鬚", "蛇の鬚"],
  "魃": ["干魃", "旱魃"],
  "魚": ["金魚", "魚"],
  "魬": ["魬"],
  "魯": ["魯人", "魯国"],
  "鮫": ["鮫", "姥鮫"],
  "鮮": ["鮮やか", "新鮮"],
  "鯁": ["鯁"],
  "鯔": ["鯔背", "鯔"],
  "鰓": ["鰓張り", "海鰓"],
  "鰖": ["鰖"],
  "鰩": ["鰩"],
  "鱒": ["鱒の介", "国鱒"],
  "鱨": ["鱨"],
  "鱫": ["鱫鱜"],
  "鳥": ["小鳥", "白鳥"],
  "鴒": ["鶺鴒", "白鶺鴒"],
  "鴻": ["鴻図", "鴻基"],
  "鵡": ["洋鵡", "鸚鵡"],
  "鵤": ["鵤"],
  "鵷": ["鵷鶵"],
  "鵺": ["鵺的", "鵺鳥"],
  "鶍": ["鶍の嘴", "鶍"],
  "鷉": ["鸊鷉"],
  "鷲": ["鷲", "鷲掴み"],
  "鸞": ["青鸞", "鸞輿"],
  "麦": ["小麦", "小麦粉"],
  "黄": ["黄色", "黄金"],
  "黒": ["黒い", "黒人"],
  "黛": ["翠黛", "青黛"],
  "齬": ["齟齬", "言行齟齬"],
  "龕": ["壁龕", "起龕"],
};

function katakanaToHiragana(text) {
  return text.replace(/[\u30a1-\u30f6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60)
  );
}

function normalizeJapaneseReading(readingText) {
  if (!readingText) {
    return "";
  }

  const first = readingText.split("/")[0].trim();
  if (!first) {
    return "";
  }

  const hasKana = /[\u3041-\u3096\u30a1-\u30f6]/.test(first);
  if (!hasKana) {
    return "";
  }

  return katakanaToHiragana(first);
}

function normalizeExampleWord(item, example) {
  if (example !== item.k) {
    return example;
  }

  const kunReading = item.jpM;
  if (kunReading) {
    return kunReading;
  }

  const normalizedOnReading = normalizeJapaneseReading(item.jpO);
  if (normalizedOnReading) {
    return normalizedOnReading;
  }

  return example;
}

function buildExampleText(item) {
  const examples = JP_WORD_EXAMPLES[item.k];
  if (examples && examples.length > 0) {
    return examples.slice(0, 2).map((example) => normalizeExampleWord(item, example)).join(" / ");
  }

  const autoExamples = AUTO_JP_EXAMPLES[item.k];
  if (autoExamples && autoExamples.length > 0) {
    return autoExamples.slice(0, 2).map((example) => normalizeExampleWord(item, example)).join(" / ");
  }

  const kunReading = item.jpM;
  if (kunReading) {
    return `${kunReading} / ${item.k}`;
  }

  const normalizedOnReading = normalizeJapaneseReading(item.jpO);
  if (normalizedOnReading) {
    return `${normalizedOnReading} / ${item.k}`;
  }

  return item.k;
}

function splitKoreanInfoVariants(text) {
  return String(text || "")
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

function buildKoreanInfoText(item) {
  const meanings = splitKoreanInfoVariants(item.koH);
  const readings = splitKoreanInfoVariants(item.koE);

  if (meanings.length === readings.length && meanings.length > 0) {
    return meanings.map((meaning, index) => `${meaning} ${readings[index]}`).join(" / ");
  }

  console.warn("koH/koE variant count mismatch. falling back to raw format.", {
    kanji: item.k,
    koH: item.koH,
    koE: item.koE,
    koHCount: meanings.length,
    koECount: readings.length
  });
  return `${item.koH} / ${item.koE}`;
}

let JOYO_KANJI = [];

const pageCache = new Map();
let mode = "base";
let currentPage = 1;
let totalPages = 1;
let fullList = [];

const gridEl = document.getElementById("grid");
const pageLabelEl = document.getElementById("pageLabel");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const selectionShapeToggleBtn = document.getElementById("selectionShapeToggle");
const toggleModeButtons = Array.from(document.querySelectorAll("[data-toggle-mode]"));
const holdModeButtons = Array.from(document.querySelectorAll("[data-hold-mode]"));
const appRoot = document.getElementById("appRoot");
let pinnedMode = "base";
let activeHoldMode = null;
const memorizedKanji = loadMemorizedKanji();
const tempSelectedCells = new Set();
let suppressNextGridClick = false;
let isRectSelectionMode = false;
const DRAG_SELECTION_START_DISTANCE = 4;
const dragSelectionState = {
  isDragging: false,
  pointerId: null,
  hasDragged: false,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0
};
const selectionActionPopover = createSelectionActionPopover();
const selectionActionCountEl = selectionActionPopover.querySelector("[data-selection-count]");
const selectionActionMemorizeBtn = selectionActionPopover.querySelector("[data-selection-action='memorize']");
const selectionActionUnmemorizeBtn = selectionActionPopover.querySelector(
  "[data-selection-action='unmemorize']"
);
const selectionActionCloseBtn = selectionActionPopover.querySelector("[data-selection-action='close']");
const selectionMarqueeEl = createSelectionMarquee();

function createSelectionActionPopover() {
  const popover = document.createElement("aside");
  popover.className = "selection-action-popover";
  popover.hidden = true;
  popover.setAttribute("aria-live", "polite");
  popover.innerHTML = `
    <div class="selection-action-popover__count" data-selection-count>0개 선택</div>
    <div class="selection-action-popover__buttons">
      <button type="button" data-selection-action="memorize">암기 체크</button>
      <button type="button" data-selection-action="unmemorize">암기 체크 해제</button>
      <button type="button" data-selection-action="close">닫기</button>
    </div>
  `;
  document.body.append(popover);
  return popover;
}

function createSelectionMarquee() {
  const marquee = document.createElement("div");
  marquee.className = "selection-marquee";
  marquee.hidden = true;
  document.body.append(marquee);
  return marquee;
}

function loadMemorizedKanji() {
  try {
    const raw = localStorage.getItem(MEMORIZED_KANJI_STORAGE_KEY);
    if (!raw) {
      return new Set();
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set();
    }

    return new Set(parsed.filter((value) => typeof value === "string" && value.length > 0));
  } catch (error) {
    console.warn("Could not load memorized kanji state from localStorage.", error);
    return new Set();
  }
}

function saveMemorizedKanji() {
  try {
    localStorage.setItem(MEMORIZED_KANJI_STORAGE_KEY, JSON.stringify([...memorizedKanji]));
  } catch (error) {
    console.warn("Could not save memorized kanji state to localStorage.", error);
  }
}

function setCellMemorizedState(cell, isMemorized) {
  cell.classList.toggle("is-memorized", isMemorized);
  cell.classList.toggle("is-unmemorized", !isMemorized);
  cell.setAttribute("aria-pressed", isMemorized ? "true" : "false");
}

function toggleMemorizedKanji(cell) {
  const kanji = cell?.dataset?.kanji;
  if (!kanji) {
    return;
  }

  if (memorizedKanji.has(kanji)) {
    memorizedKanji.delete(kanji);
    setCellMemorizedState(cell, false);
  } else {
    memorizedKanji.add(kanji);
    setCellMemorizedState(cell, true);
  }

  saveMemorizedKanji();
}

function setMemorizedKanjiForCells(cells, shouldMemorize) {
  let changed = false;

  cells.forEach((cell) => {
    const kanji = cell?.dataset?.kanji;
    if (!kanji) {
      return;
    }

    if (shouldMemorize) {
      if (!memorizedKanji.has(kanji)) {
        memorizedKanji.add(kanji);
        changed = true;
      }
      setCellMemorizedState(cell, true);
      return;
    }

    if (memorizedKanji.has(kanji)) {
      memorizedKanji.delete(kanji);
      changed = true;
    }
    setCellMemorizedState(cell, false);
  });

  if (changed) {
    saveMemorizedKanji();
  }
}

function clearTempSelection() {
  tempSelectedCells.forEach((cell) => {
    cell.classList.remove("is-temp-selected");
  });
  tempSelectedCells.clear();
  hideSelectionActionPopover();
  hideSelectionMarquee();
}

function addTempSelectedCell(cell) {
  if (!cell || tempSelectedCells.has(cell)) {
    return;
  }

  tempSelectedCells.add(cell);
  cell.classList.add("is-temp-selected");
}

function hideSelectionActionPopover() {
  selectionActionPopover.hidden = true;
}

function hideSelectionMarquee() {
  selectionMarqueeEl.hidden = true;
}

function positionSelectionActionPopover() {
  if (tempSelectedCells.size === 0 || selectionActionPopover.hidden) {
    return;
  }

  const selectedRects = [...tempSelectedCells].map((cell) => cell.getBoundingClientRect());
  const bounds = selectedRects.reduce(
    (acc, rect) => ({
      left: Math.min(acc.left, rect.left),
      top: Math.min(acc.top, rect.top),
      right: Math.max(acc.right, rect.right),
      bottom: Math.max(acc.bottom, rect.bottom)
    }),
    { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity }
  );

  const gap = 10;
  const viewportPadding = 8;
  const popoverRect = selectionActionPopover.getBoundingClientRect();
  let left = bounds.right + gap;
  let top = bounds.top;

  if (left + popoverRect.width > window.innerWidth - viewportPadding) {
    left = Math.max(viewportPadding, bounds.left - gap - popoverRect.width);
  }

  if (top + popoverRect.height > window.innerHeight - viewportPadding) {
    top = Math.max(viewportPadding, window.innerHeight - viewportPadding - popoverRect.height);
  }

  top = Math.max(viewportPadding, top);
  selectionActionPopover.style.left = `${Math.round(left)}px`;
  selectionActionPopover.style.top = `${Math.round(top)}px`;
}

function showSelectionActionPopover() {
  if (tempSelectedCells.size === 0) {
    hideSelectionActionPopover();
    return;
  }

  selectionActionCountEl.textContent = `${tempSelectedCells.size}개 선택`;
  selectionActionPopover.hidden = false;
  positionSelectionActionPopover();
}

function updateSelectionMarquee() {
  if (!isRectSelectionMode || !dragSelectionState.isDragging || !dragSelectionState.hasDragged) {
    hideSelectionMarquee();
    return;
  }

  const left = Math.min(dragSelectionState.startX, dragSelectionState.currentX);
  const top = Math.min(dragSelectionState.startY, dragSelectionState.currentY);
  const width = Math.abs(dragSelectionState.currentX - dragSelectionState.startX);
  const height = Math.abs(dragSelectionState.currentY - dragSelectionState.startY);

  selectionMarqueeEl.hidden = false;
  selectionMarqueeEl.style.left = `${Math.round(left)}px`;
  selectionMarqueeEl.style.top = `${Math.round(top)}px`;
  selectionMarqueeEl.style.width = `${Math.max(1, Math.round(width))}px`;
  selectionMarqueeEl.style.height = `${Math.max(1, Math.round(height))}px`;
}

function setTempSelection(cells) {
  const nextCells = new Set(cells);

  tempSelectedCells.forEach((cell) => {
    if (!nextCells.has(cell)) {
      cell.classList.remove("is-temp-selected");
      tempSelectedCells.delete(cell);
    }
  });

  nextCells.forEach((cell) => {
    addTempSelectedCell(cell);
  });
}

function getCellsInsideDragRect() {
  const left = Math.min(dragSelectionState.startX, dragSelectionState.currentX);
  const right = Math.max(dragSelectionState.startX, dragSelectionState.currentX);
  const top = Math.min(dragSelectionState.startY, dragSelectionState.currentY);
  const bottom = Math.max(dragSelectionState.startY, dragSelectionState.currentY);

  const allCells = gridEl.querySelectorAll(".cell[data-kanji]");
  const selectedCells = [];

  allCells.forEach((cell) => {
    const rect = cell.getBoundingClientRect();
    const intersects =
      rect.left <= right && rect.right >= left && rect.top <= bottom && rect.bottom >= top;

    if (intersects) {
      selectedCells.push(cell);
    }
  });

  return selectedCells;
}

function updateSelectionShapeToggleUI() {
  if (!selectionShapeToggleBtn) {
    return;
  }

  selectionShapeToggleBtn.classList.toggle("is-active", isRectSelectionMode);
  selectionShapeToggleBtn.setAttribute("aria-pressed", isRectSelectionMode ? "true" : "false");
  selectionShapeToggleBtn.dataset.shapeMode = isRectSelectionMode ? "rect" : "path";
  selectionShapeToggleBtn.title = isRectSelectionMode
    ? "현재 RECT: 사각 영역 기준으로 선택"
    : "현재 PATH: 드래그 경로를 따라 선택";
}

function endDragSelection(pointerId, options = {}) {
  const { commitSinglePressToggle = false } = options;

  if (!dragSelectionState.isDragging) {
    return;
  }

  if (pointerId != null && dragSelectionState.pointerId !== pointerId) {
    return;
  }

  hideSelectionMarquee();

  if (!dragSelectionState.hasDragged) {
    if (commitSinglePressToggle && tempSelectedCells.size === 1) {
      const [singleCell] = tempSelectedCells;
      clearTempSelection();
      toggleMemorizedKanji(singleCell);
      suppressNextGridClick = true;
    } else {
      clearTempSelection();
    }
  } else if (tempSelectedCells.size > 0) {
    showSelectionActionPopover();
    suppressNextGridClick = true;
  } else {
    clearTempSelection();
  }

  dragSelectionState.isDragging = false;
  dragSelectionState.pointerId = null;
  dragSelectionState.hasDragged = false;
  dragSelectionState.startX = 0;
  dragSelectionState.startY = 0;
  dragSelectionState.currentX = 0;
  dragSelectionState.currentY = 0;
}

function normalizeLoadedJoyoItem(item) {
  return {
    k: item.k,
    koH: item.koH || "뜻",
    koE: item.koE || "음",
    jpM: item.jpM || normalizeJapaneseReading(item.jpO) || "くんよみなし",
    jpO: item.jpO || "オンよみなし"
  };
}

function updatePagination() {
  pageCache.clear();
  totalPages = Math.max(1, Math.ceil(fullList.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
}

async function initializeKanjiList() {
  try {
    const response = await fetch(JOYO_KANJI_SORTED_JSON_PATH);
    if (!response.ok) {
      throw new Error(`failed to fetch sorted joyo kanji: ${response.status}`);
    }

    const joyoKanjiRaw = await response.json();
    if (!Array.isArray(joyoKanjiRaw)) {
      throw new Error("sorted joyo kanji payload is invalid");
    }

    const seen = new Set();
    const joyoKanji = joyoKanjiRaw.filter((item) => {
      if (!item || typeof item.k !== "string" || item.k.length === 0 || seen.has(item.k)) {
        return false;
      }
      seen.add(item.k);
      return true;
    });
    if (joyoKanji.length < TARGET_KANJI_COUNT) {
      throw new Error(`sorted joyo kanji payload too short: ${joyoKanji.length}`);
    }
    if (joyoKanji.length > TARGET_KANJI_COUNT) {
      console.warn(
        `sorted joyo kanji payload length mismatch: ${joyoKanji.length}. using first ${TARGET_KANJI_COUNT}`
      );
    }
    const normalizedJoyoKanji = joyoKanji
      .slice(0, TARGET_KANJI_COUNT)
      .map(normalizeLoadedJoyoItem);

    JOYO_KANJI = normalizedJoyoKanji;
    fullList = JOYO_KANJI;
  } catch (error) {
    console.error("Could not load sorted Joyo Kanji list.", error);
    JOYO_KANJI = [];
    fullList = JOYO_KANJI;
  }

  updatePagination();
}

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

  cell.dataset.kanji = item.k;
  cell.setAttribute("role", "button");
  cell.tabIndex = 0;
  setCellMemorizedState(cell, memorizedKanji.has(item.k));

  const hanja = document.createElement("div");
  hanja.className = "hanja";
  hanja.textContent = item.k;

  const koInfo = document.createElement("div");
  koInfo.className = "ko-info";
  koInfo.textContent = buildKoreanInfoText(item);

  const jpOverlay = document.createElement("div");
  jpOverlay.className = "jp-overlay";
  jpOverlay.innerHTML = `<span>${item.jpM}</span><span>${item.jpO}</span>`;

  const jpExample = document.createElement("div");
  jpExample.className = "jp-example";
  jpExample.textContent = buildExampleText(item);

  cell.append(hanja, koInfo, jpOverlay, jpExample);
  return cell;
}

function applyMode(nextMode) {
  mode = nextMode;
  appRoot.classList.remove("mode-ko", "mode-jp", "mode-c");

  if (mode === "ko") {
    appRoot.classList.add("mode-ko");
  }

  if (mode === "jp") {
    appRoot.classList.add("mode-jp");
  }

  if (mode === "c") {
    appRoot.classList.add("mode-c");
  }

  toggleModeButtons.forEach((button) => {
    const isActive = button.dataset.toggleMode === mode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function renderPage(page) {
  const safePage = Math.min(totalPages, Math.max(1, page));
  currentPage = safePage;
  clearTempSelection();

  const data = getPageData(safePage);
  gridEl.replaceChildren(...data.map(renderCell));

  pageLabelEl.textContent = `${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => renderPage(currentPage - 1));
nextBtn.addEventListener("click", () => renderPage(currentPage + 1));

gridEl.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) {
    return;
  }

  const cell = event.target.closest(".cell[data-kanji]");
  if (!cell) {
    return;
  }

  clearTempSelection();
  dragSelectionState.isDragging = true;
  dragSelectionState.pointerId = event.pointerId;
  dragSelectionState.hasDragged = false;
  dragSelectionState.startX = event.clientX;
  dragSelectionState.startY = event.clientY;
  dragSelectionState.currentX = event.clientX;
  dragSelectionState.currentY = event.clientY;
  addTempSelectedCell(cell);

  if (typeof gridEl.setPointerCapture === "function") {
    gridEl.setPointerCapture(event.pointerId);
  }

  event.preventDefault();
});

gridEl.addEventListener("pointermove", (event) => {
  if (!dragSelectionState.isDragging || dragSelectionState.pointerId !== event.pointerId) {
    return;
  }

  if ((event.buttons & 1) !== 1) {
    return;
  }

  dragSelectionState.currentX = event.clientX;
  dragSelectionState.currentY = event.clientY;

  if (!dragSelectionState.hasDragged) {
    const dx = dragSelectionState.currentX - dragSelectionState.startX;
    const dy = dragSelectionState.currentY - dragSelectionState.startY;
    const distance = Math.hypot(dx, dy);
    if (distance >= DRAG_SELECTION_START_DISTANCE) {
      dragSelectionState.hasDragged = true;
    }
  }

  if (!dragSelectionState.hasDragged) {
    return;
  }

  if (isRectSelectionMode) {
    setTempSelection(getCellsInsideDragRect());
    updateSelectionMarquee();
    return;
  }

  const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
  const cell = hoveredElement?.closest?.(".cell[data-kanji]");
  if (!cell || !gridEl.contains(cell)) {
    return;
  }

  addTempSelectedCell(cell);
});

gridEl.addEventListener("pointerup", (event) => {
  endDragSelection(event.pointerId, { commitSinglePressToggle: true });
});

gridEl.addEventListener("pointercancel", (event) => {
  endDragSelection(event.pointerId);
});

gridEl.addEventListener("lostpointercapture", (event) => {
  endDragSelection(event.pointerId);
});

gridEl.addEventListener("click", (event) => {
  if (suppressNextGridClick) {
    suppressNextGridClick = false;
    event.preventDefault();
    return;
  }

  const cell = event.target.closest(".cell[data-kanji]");
  if (!cell) {
    return;
  }

  clearTempSelection();
  toggleMemorizedKanji(cell);
});

gridEl.addEventListener("keydown", (event) => {
  if (event.key !== " " && event.key !== "Enter") {
    return;
  }

  const cell = event.target.closest(".cell[data-kanji]");
  if (!cell) {
    return;
  }

  event.preventDefault();
  clearTempSelection();
  toggleMemorizedKanji(cell);
});

selectionActionMemorizeBtn.addEventListener("click", () => {
  setMemorizedKanjiForCells(tempSelectedCells, true);
  clearTempSelection();
});

selectionActionUnmemorizeBtn.addEventListener("click", () => {
  setMemorizedKanjiForCells(tempSelectedCells, false);
  clearTempSelection();
});

selectionActionCloseBtn.addEventListener("click", () => {
  clearTempSelection();
});

document.addEventListener("pointerdown", (event) => {
  if (tempSelectedCells.size === 0) {
    return;
  }

  if (selectionActionPopover.contains(event.target)) {
    return;
  }

  if (gridEl.contains(event.target)) {
    return;
  }

  clearTempSelection();
});

window.addEventListener("resize", () => {
  positionSelectionActionPopover();
  updateSelectionMarquee();
});

window.addEventListener("scroll", () => {
  positionSelectionActionPopover();
  updateSelectionMarquee();
});

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

  if (event.key === "Escape" && tempSelectedCells.size > 0) {
    clearTempSelection();
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

function bindHoldMode(button, holdModeName) {
  const activate = () => {
    activeHoldMode = holdModeName;
    applyMode(holdModeName);
  };
  const deactivate = () => {
    activeHoldMode = null;
    applyMode(pinnedMode);
  };

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

toggleModeButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    if (activeHoldMode) {
      return;
    }

    const targetMode = button.dataset.toggleMode;
    pinnedMode = pinnedMode === targetMode ? "base" : targetMode;
    applyMode(pinnedMode);
  });
});

holdModeButtons.forEach((button) => {
  bindHoldMode(button, button.dataset.holdMode);
});

if (selectionShapeToggleBtn) {
  selectionShapeToggleBtn.addEventListener("click", () => {
    isRectSelectionMode = !isRectSelectionMode;
    updateSelectionShapeToggleUI();
    clearTempSelection();
  });
  updateSelectionShapeToggleUI();
}

initializeKanjiList().then(() => {
  renderPage(1);
  applyMode(pinnedMode);
});
