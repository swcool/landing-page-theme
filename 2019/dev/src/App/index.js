import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import _ from "lodash";
import { SocialIcon } from "react-social-icons";

import ActionFooter from "../components/ActionFooter";
import SpeakerFeature from "../components/SpeakerFeature";
import Modal from "../components/Modal";
import ModalContentSpeakers from "../components/ModalContentSpeakers";
import ModalContentSchedule from "../components/ModalContentSchedule";
import TableRow from "../components/TableRow";
import ActionButton from "../components/ActionButton";

import "./styles.css";

export default class App extends PureComponent {
  state = { showModal: false, whichDay: "day_1" };

  sechdule = {
    day_1: [
      {
        id: _.uniqueId(),
        start: "9:00",
        end: "9:30",
        rest: "報到 (地點: 正大會議廳)"
      },
      {
        id: _.uniqueId(),
        start: "9:30",
        end: "9:50",
        rest: "開場 (地點: 正大會議廳)"
      },
      {
        id: _.uniqueId(),
        start: "9:50",
        end: "10:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "那些年被蘋果 ban 掉的 API",
            presenter: "zonble",
            description: "介紹 iOS 的 API 歷史"
          },
          {}
        ]
      },
      {
        id: _.uniqueId(),
        start: "10:50",
        end: "11:20",
        talks: [
          {
            id: _.uniqueId(),
            topic: "掀起 Swift 的小裙子",
            presenter: "Pofat",
            description: "讓我們一起開始看透 Swift 的內在"
          },
          {
            id: _.uniqueId(),
            topic: "Siri Shortcut 的 OTT 應用",
            presenter: "Mars",
            description:
              "介紹 SiriKit / 介紹 Siri Shortcut / 如何應用到 OTT app / 開發經驗分享"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "11:30",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Scripting in Swift",
            presenter: "Marcus Wu",
            description:
              "在Apple 大力推廣Swift 的時代，Swift 不只能用於iOS App 之上，更可以幫助工程師撰寫CLI 工具來加速工作流程。本議程將會分享如何透過Swift 撰寫Linux 可執行檔，並透過Homebrew 發布讓世界各地的人方便安裝使用。"
          },
          {
            id: _.uniqueId(),
            topic: "Dirty Code 凋零的程式碼",
            presenter: "Jason",
            description:
              "聽過Jungle Pattern嗎？覺得 WTF/min 不夠高嗎？寫code 寫的心平氣和渾身舒暢？那你一定要來聽聽Dirty Code 凋零的程式碼。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "12:00",
        end: "13:00",
        rest: "午餐 (地點: B101)"
      },
      {
        id: _.uniqueId(),
        start: "13:00",
        end: "13:30",
        talks: [
          {
            id: _.uniqueId(),
            topic: "從 0 到 1 的距離，我與 tvOS 的邂逅",
            presenter: "徐嘉駿 Toby Hsu",
            description:
              "分享 Apple TV App 的開發與使用者體驗設計的愛恨情仇。 究竟，iOS 與 tvOS 差在哪裡，Mobile 跟 TV 上又有什麼不一樣呢？ 讓我們繼續看下去⋯⋯🤔"
          },
          {
            id: _.uniqueId(),
            topic: "Swift 與 ObjC：當我們同在一起其痛苦無比",
            presenter: "Tina Chang",
            description:
              "專案混用 Swift 與 Objective-C 時遇到的雷與對應解決方法"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "13:35",
        end: "14:05",
        talks: [
          {
            id: _.uniqueId(),
            topic: "IoT Debugging",
            presenter: "Su PingChen",
            description:
              "使用 OSLog 在 iOS framework 開發以及除錯。在 iOS 該如何開發 IoT 服務，以及該如何除錯。當問題提升到跨平台層級時，該如何釐清。"
          },
          {
            id: _.uniqueId(),
            topic: "iOS 逆向工程、越獄 Tweak 開發與雜談",
            presenter: "Gary niL",
            description:
              "iOS 越獄（Jailbreak）是獲取 iOS 設備的 Root 權限的一個技術。 通過一些越獄工具可以完成越獄前不可能進行的動作，例如安裝 App Store 以外未經過簽名的 Apps、修改 SpringBoard 安裝主題、運行 Tweak 或 Shell 程式。對於開發者來說，越獄後的設備就能夠 hook 進 iOS 系統中所有的 class，來更改或控制一些 iDevice 的內建功能。而越獄社群中也有類似 App Store 的生態，開發者們透過 theos 開發工具開發 tweak 並上架到 Cydia Store 中提供給使用者安裝使用，這些 Tweak 都依賴一個叫 Cydia Substrate 的動態連結函式庫，它的主要功能是提供方法 hook 某個 App，修改程式碼或替換其中的 method 實作。 在本次的主題中，將會簡單介紹如何開發一個簡易的 iOS Tweak，並將這個 Tweak 部署到 iOS 設備上: 工具，環境介紹 / Hello World 一個簡單的 Tweak / Tweak 部署 / Tweak 可以做什麼？"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "14:10",
        end: "14:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Test Code、Test UI、Test EveryThing !!!",
            presenter: "AKI YU",
            description:
              "如果你有如下的疑問，那麼可能在這個議程裡，你將可以更進一步獲得了解這些問題的本質: 與PM或是非技術人員溝通需求有困難？ / 什麼是行為趨動開發(BDD)、什麼是實例化需求(SBE)? / 書上寫的單元測試，看起來都很簡單，但實務上又下不了手 / 什麼是測試趨動開發(TDD) / Coverage 100% 是不是代表程式品質很好？ / 談測試的品質 / 誰來寫 UI Test ? / 工程師 --- iOS UI Testing Bundle / QA --- Appium、calabash / 有沒有不會寫程式 又不懂 XCode 的人用的UI測試程式？ / 用Mac APP做一個測試機器人吧"
          },
          {
            id: _.uniqueId(),
            topic: "從RESTful API到GraphQL",
            presenter: "丁沛堯",
            description:
              "什麼是GraphQL？ 為什麼要用GraphQL？ ~~因為Facebook的大大們在用啊~~ RESTful不好嗎？ ~~對，RESTful不好~~。 在這個talk中會跟大家介紹GraphQL、如何在iOS系統應用GraphQL，然後聊聊我在產品中實際採用GraphQL後的辛酸血淚史，以及GraphQL的優缺點。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "14:45",
        end: "15:15",
        talks: [
          {
            id: _.uniqueId(),
            topic: "WWDC18 Core ML 相關 Sessions 濃縮呈現",
            presenter: "Marvin Lin",
            description:
              "將 WWDC18 中，把 Core ML 設為主題的 sessions 重點濃縮成一個 talk。這些 Sessions 主要有下列幾點，輸出 ML 模組的 Create ML， Core ML 中新加入的功能 (WWDC18 這花了兩個 sessions 的時間)，自然語言的 framework，Vision framework 中的目標追綜，Core ML 中的機器視覺功能。"
          },
          {
            id: _.uniqueId(),
            topic: "Life of A Cell",
            presenter: "John Lin",
            description: "講解 CollectionView 的生命週期"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "15:20",
        end: "15:50",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Swift 也能訓練 Machine Learning 模型？Create ML 實戰",
            presenter: "張景隆",
            description:
              "Introducing Create ML / Define your GOAL / Data pre-processing / Find the best model (Training & Evaluating) / Make it real on the iPhone"
          },
          {
            id: _.uniqueId(),
            topic: "Refactor:從MVC到Redux",
            presenter: "Jeff Lin",
            description:
              "MVC是大家在App開發所熟知的Design Pattern。近年廣受Web使用的Redux架構一樣也可以應用在iOS App開發上。我們將用一個簡單的範例，把原先的MVC轉換成Redux，並探討什麼元件可以獨立起來。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "16:00",
        end: "17:00",
        rest: "Lightning Talk (地點: 正大會議廳)"
      }
    ],
    day_2: [
      {
        id: _.uniqueId(),
        start: "9:00",
        end: "9:20",
        rest: "開場 (地點: 正大會議廳)"
      },
      {
        id: _.uniqueId(),
        start: "9:20",
        end: "10:10",
        talks: [
          {
            id: _.uniqueId(),
            topic: "struct Drift : Bicycle, Swift",
            presenter: "藍永倫",
            description: "利用Swift和腳踏車，自幹一套類似Zwift的遊戲。"
          },
          {}
        ]
      },
      {
        id: _.uniqueId(),
        start: "10:20",
        end: "10:50",
        talks: [
          {
            id: _.uniqueId(),
            topic: "給 iOS 初心者的求職策略",
            presenter: "Enid Tian",
            description:
              "近年隨著 Apple 推出親切友善的 Swift 語言，吸引不少程式新手或轉職者投入 iOS 開發領域，但新手如何才能達到業界標準、找到心目中理想的工作呢？本場分享將以 AppWorks School 與業界合作的經驗，分享新手該建立起哪些核心觀念、技能，才能成為廣受業界青睞的工程師。"
          },
          {
            id: _.uniqueId(),
            topic: "Core Animation vs. SpriteKit",
            presenter: "Luke Wu 伍智瑋",
            description:
              "在 iOS 裡提到動畫效果，Core Animaton 是最常用被使用的。但 Apple 其實在 2D 動畫還有出了一套叫做 SpriteKit 的 Framework。這次就一些複雜動畫場景，就 Core Animation 與 SpriteKit 的實作與效能，做一些比較與分析。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "10:55",
        end: "11:25",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Design Patterns in XCUITest",
            presenter: "Vivian Liu",
            description:
              "如何使用 Design Pattern 來改善 XCUITest 的可維護性與擴充性。以及在測試涵蓋率增加後，如何減少測試時間並保持測試穩定性。如果你只能選一場 Talk 聽，這絕對不會是你想錯過的那場，我們將不保留的公開箇中秘訣。"
          },
          {
            id: _.uniqueId(),
            topic: "APP Girls創辦人教你如何跨越程式高牆-開發經驗與自學經驗分享",
            presenter: "鄭雅方",
            description:
              "分享APP Girls創辦, 開發經驗, 職涯經驗以及自學經驗等等，歸納出任何自學的重要元素與方法，並鼓勵女生也可以寫程式，靠自己的力量做自己想要做的事情！"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "11:30",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "英國iOS Developer開發經驗",
            presenter: "Allen Wang",
            description: "英國工程師的薪水，稅制，福利；用的技術，團隊。"
          },
          {
            id: _.uniqueId(),
            topic: "如何使用 Dependency Injection 提高 iOS App 的可測試性",
            presenter: "Elvis Lin",
            description:
              "在大型專案的開發中，很容易把程式碼變得複雜、臃腫、難以維護。在本演講中，會說明什麼是可測試性，以及當你套用 MVVM 之後，你應該要如何使用 dependency injection 讓程式的可測試性更好。最後會用手動注入、Swinject 與 Cleanse 說明實務上要如何撰寫。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "13:00",
        end: "17:00",
        rest: "Party (地點: 後台咖啡)"
      }
    ]
  };

  speakers = [
    {
      id: _.uniqueId(),
      imgURL:
        "https://pbs.twimg.com/profile_images/277613359/113d17e2e1f_400x400.jpg",
      alt: "",
      name: "onevcat",
      position: "",
      intro:
        "onevcat is a senior software development engineer at LINE, work on LINE SDK and well-known open source library - Kingfisher."
    },
    {
      id: _.uniqueId(),
      imgURL:
        "https://avatars0.githubusercontent.com/u/53011?s=400&v=4",
      alt: "",
      name: "Zonble",
      position: "",
      intro:
        "Zonble is a senior iOS engineer at KKBOX, often participate in technical community, created a public git book “KKBOX iOS/MacOS X 基本開發教材”. Sharing the development experience on flutter recently."
    }
  ];

  staff = [
    {
      id: _.uniqueId(),
      name: "Hokila",
      imgURL: "https://pbs.twimg.com/profile_images/889516896004882432/c3sdNWS9_400x400.jpg",
      position: "Father/ Trello Lover",
      SNS: "https://twitter.com/hokilaJ"
    },
    {
      id: _.uniqueId(),
      name: "Dada",
      imgURL: "https://pbs.twimg.com/profile_images/899649908466110464/0mMbdnp1_400x400.jpg",
      position: "iOS Developer @ KKBOX",
      SNS: "https://twitter.com/nalydadad"
    },
    {
      id: _.uniqueId(),
      name: "Superbil",
      imgURL: require("../images/superbil.png"),
      position: "Software Freelancer",
      SNS: "https://twitter.com/superbil"
    },
    {
      id: _.uniqueId(),
      name: "大軍",
      imgURL: "https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/65925674_2804262319590234_8548913230506885120_o.jpg?_nc_cat=107&_nc_oc=AQn8BtfdoRdPHG0GlOvYwrK3burw1MMuqh3D5q6UnqQm3t6iZP1kTIUwfV3-jvt0UwM&_nc_ht=scontent.ftpe7-4.fna&oh=36c4bfe364a77298951a5dcd5cb4f24b&oe=5DE8E668",
      position: "程式、平面、動態設計都很有興趣，喜歡交朋友歡迎認識。",
      SNS: "https://www.facebook.com/profile.php?id=100000194796912"
    },
    {
      id: _.uniqueId(),
      name: "13 一三",
      imgURL: "https://pbs.twimg.com/profile_images/1134379227145310209/3Nu6c7zn_400x400.jpg",
      position: "I write cool apps for living.",
      SNS: "https://twitter.com/ethanhuang13"
    },
    {
      id: _.uniqueId(),
      name: "陳涵宇",
      imgURL: require("../images/hanyu_avatar.png"),
      position: "我後面有一隻毛毛蟲。",
      SNS: "https://www.facebook.com/hanyu.chen.518"
    },
    {
      id: _.uniqueId(),
      name: "Hao Lee",
      imgURL: "https://pbs.twimg.com/profile_images/1127086336790237184/PCmBt7MO_400x400.jpg",
      position: "macOS Developer",
      SNS: "https://twitter.com/twhaolee"
    },
    {
      id: _.uniqueId(),
      name: "Luke Wu",
      imgURL: "https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.0-9/46772801_2477584358948814_2304539628373278720_o.jpg?_nc_cat=108&_nc_oc=AQlWdzKLIrFXPY_McU47Ns9uxU4ya3RlSZ4SHcf4WHcd5BKKB17ZUn0YW9doxLt_rGE&_nc_ht=scontent.ftpe7-3.fna&oh=1fc3c8d5fd5b1369ed9ac6ec0f3c2847&oe=5DD6AA3B",
      position: "iOS Instructor at AppWorks School",
      SNS: "https://www.facebook.com/mvp0627"
    },
    {
      id: _.uniqueId(),
      name: "Will Chen",
      imgURL: "https://pbs.twimg.com/profile_images/3713259981/4ab5b44b5cc6817e117866d8ac4c2c57_400x400.jpeg",
      position: "iOS Developer",
      SNS: "https://twitter.com/willchen00"
    },
    {
      id: _.uniqueId(),
      name: "Toby Hsu",
      imgURL: "https://pbs.twimg.com/profile_images/1003327371619864576/tVVbiT6w_400x400.jpg",
      position: "tvOS Dev @ CATCHPLAY",
      SNS: "https://twitter.com/HsuToby"
    },
    {
      id: _.uniqueId(),
      name: "BigRoot",
      imgURL: require("../images/BigRoot.jpeg"),
      position: "KKBOX iOS Developer",
      SNS: "https://twitter.com/BigRootHsu"
    },
    {
      id: _.uniqueId(),
      name: "Chung",
      imgURL: "https://pbs.twimg.com/profile_images/1137491029274218496/5iK8PhHm_400x400.png",
      position: "iOS Evangelist / Consultant / Trainer /Developer",
      SNS: "https://twitter.com/ChungPlusDev"
    },
    {
      id: _.uniqueId(),
      name: "Tank",
      imgURL: "https://pbs.twimg.com/profile_images/725576374518312961/xnxZ-04v_400x400.jpg",
      position: "iOS Developer at KKday",
      SNS: "https://twitter.com/tank1005"
    },
    {
      id: _.uniqueId(),
      name: "鄭雅方",
      imgURL: require("../images/fan.png"),
      position: "APP Girls 創辦人",
      SNS: "https://www.facebook.com/groups/1260405513988915/"
    },
    {
      id: _.uniqueId(),
      name: "Steve Sun",
      imgURL: "https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/c0.0.958.958a/49947006_10161406364485525_1277997798444236800_n.jpg?_nc_cat=111&_nc_oc=AQmM0r4jf8YeK5BfMbJUyDmJ1k06oxvCwUnqOSG9Xl-9ode19JMVFCNeBXpsGNg5OL4&_nc_ht=scontent.ftpe7-2.fna&oh=1cf19488ae7e5f32032a18ed8716703b&oe=5DE872DC",
      position: "iOS Developer @ Hootsuite",
      SNS: "https://fb.me/steve.sun.125"
    },
    {
      id: _.uniqueId(),
      name: "MarkFly",
      imgURL: require("../images/MarkFly.png"),
      position: "iOS developer learning Android",
      SNS: "https://www.facebook.com/mark33699"
    },
    {
      id: _.uniqueId(),
      name: "JimmyLiao",
      imgURL: "https://pbs.twimg.com/profile_images/467224301154742272/1G8N0p-H_400x400.jpeg",
      position: "Jimmyliao",
      SNS: "https://twitter.com/jimmyliao"
    },
    {
      id: _.uniqueId(),
      name: "Dan",
      imgURL: require("../images/Dan_Avatar.jpg"),
      position: "iOS Developer @Readmoo, Monster Hunter, Pokémon Master.",
      SNS: "https://twitter.com/phy1988"
    },
    {
      id: _.uniqueId(),
      name: "Mike",
      imgURL: require("../images/Chou_Mike.jpeg"),
      position: "Rookie iOS Developer",
      SNS: "https://www.facebook.com/mikechouo"
    },
    {
      id: _.uniqueId(),
      name: "Bob Chang",
      imgURL: "https://pbs.twimg.com/profile_images/794403929849085952/YITUEy7x_400x400.jpg",
      position: "iOS dev chicken",
      SNS: "https://twitter.com/bob910078"
    },
    {
      id: _.uniqueId(),
      name: "Joe Chen",
      imgURL: require("../images/joe_chen.jpg"),
      position: "我程式不會動，我不知道為什麼；我程式會動，我不知道為什麼",
      SNS: "https://twitter.com/joe_trash_talk"
    },
    {
      id: _.uniqueId(),
      name: "Kennedy",
      imgURL: require("../images/default_portrait.png"),
      position: "iOS Developer ",
      SNS: "#"
    },
    {
      id: _.uniqueId(),
      name: "Johnny Sung",
      imgURL: "https://scontent.ftpe7-4.fna.fbcdn.net/v/t31.0-1/1167538_698358250174703_2085038037_o.jpg?_nc_cat=101&_nc_oc=AQnf6Q7ODj0uYCCQ7wMr8WolyN5ti8NWYdKI60V9816chUGzekMD3HtVYVzpUp-sHDI&_nc_ht=scontent.ftpe7-4.fna&oh=a9bb04261127065a2aabbea214b0c1a0&oe=5DA6867A",
      position: "iOS / Android Developer",
      SNS: "https://fb.me/j796160836"
    },
    {
      id: _.uniqueId(),
      name: "OOBE",
      imgURL: "https://pbs.twimg.com/profile_images/1152077514484797440/EeKrsTXU_400x400.png",
      position: "Producer",
      SNS: "https://twitter.com/OOBE"
    },
    {
      id: _.uniqueId(),
      name: "Yoda",
      imgURL: require("../images/Yoda.jpg"),
      position: "Jedi / Designer / Developer",
      SNS: "https://www.facebook.com/YongSaingWang"
    },
    {
      id: _.uniqueId(),
      name: "Gerry",
      imgURL: "https://pbs.twimg.com/profile_images/1135207851876442113/l0_DV0k2_400x400.png",
      position: "佛心軟體工程師",
      SNS: "https://twitter.com/gerry73740659"
    },
    {
      id: _.uniqueId(),
      name: "TaiHsin",
      imgURL: "https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/61659205_2647287845285510_1119561316797775872_n.jpg?_nc_cat=106&_nc_eui2=AeFZx0GiOwtYtNlxMq7WCUGIzUegN3bEGPFSEjItGVxI4U0IE-61W75mfgKHeDowFZzlwqG-d1hHrtVrkDb3rcp5ThxEgEEF3Kxa0oya_jb3PQ&_nc_oc=AQks4biU2W6ncurAJA-fzS0ThZuJKCmfqFtjfQKG2AcdazwSScJHm_JxqYaI3J9M0WI&_nc_pt=1&_nc_ht=scontent.ftpe7-1.fna&oh=352b182b2c8002c8486fdb8ed09a43e1&oe=5DD8FE79",
      position: "iOS Developer @ KKBOX",
      SNS: "https://www.facebook.com/peter.lee.752487"
    },
    {
      id: _.uniqueId(),
      name: "Pofat",
      imgURL: require("../images/pofat_avatar.jpg"),
      position: "本鵝用翅膀寫 code",
      SNS: "https://twitter.com/PofatTseng"
    },
    {
      id: _.uniqueId(),
      name: "Cindy",
      imgURL: require("../images/Cindy_Avatar.jpeg"),
      position: "iOS Developer @H2Sync",
      SNS: "https://www.facebook.com/hsin.chen.10"
    },
    {
      id: _.uniqueId(),
      name: "Jeffrey Wang",
      imgURL: require("../images/jeffery_wang.jpg"),
      position: "Tech Lover / PM",
      SNS: "https://www.facebook.com/jeffrey.wang.505"
    },
    {
      id: _.uniqueId(),
      name: "Allen Lai",
      imgURL: "https://pbs.twimg.com/profile_images/1057560139979403264/eTMrQlwF_400x400.jpg",
      position: "iOS Developer",
      SNS: "https://twitter.com/AllenEzailLai"
    },
    {
      id: _.uniqueId(),
      name: "啊嘶",
      imgURL: "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.0-9/13427884_1244017895610241_2033440176129311505_n.jpg?_nc_cat=100&_nc_oc=AQmuXxXkMsURvTUifjSXUob7ueKI21PxTWFYVVpEQ384hXsMuq9fWphMcK6BPSbKss0&_nc_ht=scontent.ftpe8-2.fna&oh=aa58a31cfe2cc79484c19e80eedca80a&oe=5DDB4A91",
      position: "程式碼行數減少，體重卻默默上升",
      SNS: "https://www.facebook.com/profile.php?id=100000061272837"
    },
    {
      id: _.uniqueId(),
      name: "Mack Liu",
      imgURL: "https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-1/11954677_964907706864318_6301963875485180400_n.jpg?_nc_cat=110&_nc_oc=AQm1YylyPPuP4vbPR3WpCSmcR7-76ABGn49DhVnhr8bVJLOwYQWoik_pnwU9Hztk63Q&_nc_ht=scontent.ftpe8-4.fna&oh=ad8f5c6c80d1855271c9edb1f12ba896&oe=5DC80771",
      position: "iOS / .NET Developer ",
      SNS: "https://www.facebook.com/bazhe1106"
    },
    {
      id: _.uniqueId(),
      name: "Lim Yang",
      imgURL: "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.0-9/38405109_2257559720937929_6064429500521775104_o.jpg?_nc_cat=101&_nc_oc=AQmGev9eTQc-Ml5KpknIUkcGVGBOzBP1LSll8DRsfvs5SAT8rp10zjlXswuEQvztcSk&_nc_ht=scontent.ftpe8-2.fna&oh=e0af80971ae4fca5b5caab963cd505e1&oe=5DCBF420",
      position: "system engineer at Thinking Software",
      SNS: "https://www.facebook.com/arawn.yang"
    },
    {
      id: _.uniqueId(),
      name: "Alice",
      imgURL: "https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.0-1/25994495_1601902809900464_3240008977488848034_n.jpg?_nc_cat=106&_nc_oc=AQkGUigNseJw8N4y_F-P4_wWrSX1prjlF4scEVj86uUWT594Qilr6qnNrYb5EnHMDNk&_nc_ht=scontent.ftpe8-3.fna&oh=5a2a7ec1a558845c63b98243d5b7862c&oe=5DD41D1D",
      position: "iOS developer @H2sync",
      SNS: "https://www.facebook.com/profile.php?id=100002422822162"
    },
    {
      id: _.uniqueId(),
      name: "Annie Li",
      imgURL: "https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-1/15727063_10206383523146622_2368898774699621805_n.jpg?_nc_cat=102&_nc_oc=AQko1zFif55xQSmTWlZEHhiJLrHhp0mDFAEPFsY5kUqKsu2YTTynkCx3q2xi4kMp7AI&_nc_ht=scontent.ftpe8-4.fna&oh=6f2fc6071e9556575381364908e84943&oe=5DECAEED",
      position: "iOS Developer @ KKBOX",
      SNS: "https://www.facebook.com/profile.php?id=1824210769"
    },
    {
      id: _.uniqueId(),
      name: "Roger",
      imgURL: "https://pbs.twimg.com/profile_images/1060466084791250946/XzYmqvLI_400x400.jpg",
      position: "iOS Developer",
      SNS: "https://twitter.com/roger_fanfan"
    }
  ];
  
  sponors = [
    {
      id: _.uniqueId(),
      degree:"鑽石贊助",
      sponorList: [
        {
          id: _.uniqueId(),
          imgURL: require("../images/logo_17_Media.png"),
          link: "https://m17.asia/",
          alt: "17 Media"
        }
      ]
    },
    {
      id: _.uniqueId(),
      degree:"白銀贊助",
      sponorList: [
        {
          id: _.uniqueId(),
          imgURL: require("../images/logo_cake_resume.png"),
          link: "https://www.cakeresume.com/zh-TW",
          alt: "CakeResume"
        },
        {
          id: _.uniqueId(),
          imgURL: require("../images/logo_grindr.png"),
          link: "https://www.grindr.com/",
          alt: "Grindr"
        },
        {
          id: _.uniqueId(),
          imgURL: require("../images/logo_ichef.jpeg"),
          link: "https://www.ichefpos.com/zh-tw",
          alt: "iChef"
        }
      ]
    },
    {
      id: _.uniqueId(),
      degree:"青銅贊助",
      sponorList: [
        {
          id: _.uniqueId(),
          imgURL: require("../images/logo_coss_system.png"),
          link: "http://www.coss.com.tw/about.html",
          alt: "COSS SYSTEM INC 震江系統"
        }
      ]
    }
  ];

  partyEvents = [
    {
      id: _.uniqueId(),
        start: "13:00",
        end: "13:40",
        rest: "用餐時間"
    },
    {
      id: _.uniqueId(),
        start: "13:40",
        end: "14:40",
        rest: "PANEL 1"
    },
    {
      id: _.uniqueId(),
        start: "14:40",
        end: "15:00",
        rest: "中場休息"
    },
    {
      id: _.uniqueId(),
        start: "15:00",
        end: "16:00",
        rest: "PANEL 2"
    },
    {
      id: _.uniqueId(),
        start: "16:00",
        end: "17:00",
        rest: "自由時間"
    },
  ]

  coOrganisers = [
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_twdc.png"),
      link: "https://aatp.com.tw/",
      alt: "TWDC"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_cocoaheads_taipei.png"),
      link: "https://www.facebook.com/groups/cocoaheads.taipei/",
      alt: "Cocoaheads Taipei"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_iOS_taipei.png"),
      link: "https://www.facebook.com/groups/ios.taipei/",
      alt: "iOS Taipei"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_swift_taipei.png"),
      link: "https://www.meetup.com/Swift-Taipei-User-Group/",
      alt: "Swift Taipei"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_swift_girls.png"),
      link: "https://www.facebook.com/groups/1260405513988915/",
      alt: "Swift Girls"
    }
  ];

  onClickSpeaker = id => {
    this.modalContentDataSpeakers = _.find(this.speakers, { id });
    this.setState({ showModal: "speakers" });
  };

  onClickTopic = talk => {
    this.modalContentDataSchedule = talk;
    this.setState({ showModal: "schedule" });
  };

  onCloseRequest = () => {
    this.setState({ showModal: false });
  };

  renderTableRow = () =>
    _.map(
      this.sechdule[this.state.whichDay],
      ({ id, start, end, rest, talks }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest={rest || null}
          talks={talks}
          onClickTopic={talk => {
            this.onClickTopic(talk);
          }}
        />
      )
    );

  renderSpeakers = () =>
    _.map(this.speakers, ({ id, imgURL, alt, name, position }) => (
      <div key={id} className="app__speaker">
        <img
          className="app__speaker-img"
          onClick={() => this.onClickSpeaker(id)}
          src={imgURL}
          alt={alt}
        />
        <p className="app__speaker-name">
          <strong>{name}</strong>
        </p>
        <p className="app__speaker-position">{position}</p>
      </div>
    ));

  renderPartyEventRow = () =>
    _.map(
      this.partyEvents,
      ({ id, start, end, rest }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest = {rest || null}
        />
      )
    );

  renderStaff = () =>
  _.map(this.staff, ({ id, imgURL, alt, name, position, SNS }) => (
    
      <a key={id} href={SNS} target="_blank">
        <div className="app__speaker">
          <img className="app__speaker-img" src={imgURL} alt={alt} />
          <p className="app__speaker-name">
            <strong>{name}</strong>
          </p>
          <p className="app__speaker-position">{position}</p>
        </div>
      </a>
    
  ));

  renderSponsors = () =>
    _.map(this.sponors, ({ id, degree, sponorList }) => (
      <div key= {id} className= "staff_team_container">
       <div className="section_sub_title">{degree}</div>
       {
         sponorList.map( ({id,imgURL,link,alt}) => 
          <div key={id} className="app__sponsor">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="app__sponsor-logo" src={imgURL} alt={alt} />
          </a>
         </div>
        )
      }
      </div>
    ));

  renderCoOrganisers = () =>
    _.map(this.coOrganisers, ({ id, imgURL, link, alt }) => (
      <div key={id} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__sponsor-logo" src={imgURL} alt={alt} />
        </a>
      </div>
    ));

  render() {
    const { whichDay, showModal } = this.state;
    const mailChimpURL =
      "https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&amp;id=b804a3d8e0";

    return (
      <div className="app-fullscreen">
        <div className="logo-container-fullscreen">
          <div className="logo-container">
            <img
              className="logo"
              src={require("../images/logo_iplayground.png")}
              alt="iPlayground"
            />
            <p className="logo-info">
            <i className="fas fa-map-marker-alt"></i>
                  台大博雅館
              <br/>
              9/21-9/22
            </p>
          </div>
          <div className = "logo-container-fullscreen-mask-container">
          <div className = "logo-container-fullscreen-mask"></div>
          <div className = "logo-container-fullscreen-mask-2-container">
          <div className = "logo-container-fullscreen-mask-2-top"></div>
          <div className = "logo-container-fullscreen-mask-2-bottom"></div>
          </div>

          </div>
        </div>
        <div className="app__container">
          <div className="empty_section">
            <div className="section_action_container">
              <ActionButton title="我要購票" link="https://iplayground.kktix.cc/events/iplayground2019" />             
             </div>
             </div>
          <div className="app__section main_section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_ball.png")}/>
            <div className="main_section_container">
              <div className="app__title"><span className="app__title_eng">Speakers</span><span>講者</span></div>
              <div className="app__speaker-container">
                {this.renderSpeakers()}
              </div>
            </div>
          </div>
          <div className="app__section main_section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_diamond.png")}/>
            <div className="main_section_container">
             <div className="app__title"><span className="app__title_eng">Schedule</span><span>議程</span></div>
             <span className="section_tag" >議程審稿中</span>
             <div className="section_sub_title">時程</div>
             <div className="section_sub_container">
             <p>
                2019.06.10 ・ 開放投稿
              </p>
              <p>
                2019.08.10 ・ 投稿截止
              </p>
              <p>
                2019 8月 ・ 公佈結果
              </p>
              <p>
                2019.09.21－2019.09.22 ・ 議程時間
              </p>
             </div>
            </div>
          </div>
          <div className="app__section main_section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_stairs.png")}/>
            <div className="main_section_container">
            <div className="app__title"><span className="app__title_eng">Venue</span><span>場地</span></div>
            <div className="section_sub_title">國立臺灣大學博雅教學館</div>
            <div className="section_sub_container">
              <p>106台北市大安區羅斯福路四段1號</p>
              </div>
            <iframe
              title="location"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.472391335001!2d121.53459524249845!3d25.018035389196143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a989d9909417%3A0x13a8ef0043681664!2z5ZyL56uL6Ie654Gj5aSn5a245Y2a6ZuF5pWZ5a246aSo!5e0!3m2!1szh-TW!2stw!4v1563616292331!5m2!1szh-TW!2stw"
              allowFullScreen
            />
            </div>
          </div>
          <div className="app__section">
          <div className="section_container">
            <div className="app__title"><a>About</a><span>關於我們</span></div>
            <p>
              2017年9月，一群到東京參加 <a href="https://iosdc.jp/2017/" target="_blank">iOSDC</a> 的工程師們，在看到國外蓬勃活躍的程式力，熱血自此被點燃，決心舉辦一場兼具廣深度又有趣的 iOS 研討會。
            </p>
            <p>
              2018年10月，有實戰技巧、初心者攻略、hard core 議題以及各式八卦政治學的 iPlaygrouond 華麗登場。
            </p>
            <p>
              2019年，iPlayground 誠摯召喚各位鍵盤好手一起來燃燒熱血，讓議程更多元、更有料！
            </p>
            </div>
          </div>
          <div className="app__section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">Sponsors</span><span>贊助</span></div>
            {this.renderSponsors()}
            </div>
          </div>
          <div className="app__section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">Co-organizers</span><span>合作夥伴</span></div>
            {this.renderCoOrganisers()}
            </div>
          </div>
          <div className="app__section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">Staffs</span><span>工作人員</span></div>
            {this.renderStaff()}
            </div>
          </div>
        </div>
        <Modal visible={showModal} onCloseRequest={this.onCloseRequest}>
          {showModal === "speakers" ? (
            <ModalContentSpeakers
              {...this.modalContentDataSpeakers}
              onClickCloseBtn={this.onCloseRequest}
            />
          ) : (
            <ModalContentSchedule
              {...this.modalContentDataSchedule}
              onClickCloseBtn={this.onCloseRequest}
            />
          )}
        </Modal>
      </div>
    );
  }
}
