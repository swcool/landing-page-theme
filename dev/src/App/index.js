import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import _ from "lodash";
import { SocialIcon } from "react-social-icons";

import Modal from "../components/Modal";
import ModalContentSpeakers from "../components/ModalContentSpeakers";
import ModalContentSchedule from "../components/ModalContentSchedule";
import TableRow from "../components/TableRow";

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
        "https://pbs.twimg.com/profile_images/2904865970/141f9a79f4c6fafd0c645e8609e3d295_400x400.jpeg",
      alt: "",
      name: "Zonble",
      position: "",
      intro:
        "zonble，從 2005 年開始寫 Objective-C，從 2008 年 iPhone SDK 釋出的第一天開始就開始投入 iOS 開發，長期在 KKBOX 任職以及參與台北 Cocoa-heads 活動，在網路上發佈電子書《KKBOX iOS 開發基本教材》。才華與美貌兼具，智慧與善良並重，人間大愛的體現，心智年齡從來沒有超過十四歲的中二工程師。"
    },
    {
      id: _.uniqueId(),
      name: "藍永倫",
      imgURL:
        "https://pbs.twimg.com/profile_images/614453401192038400/pvulZ6Qb_400x400.png",
      position: "",
      intro:
        "現任職於博智雲端科技用python寫web app，下班後的身份是台灣城市單車聯盟理事、Cocoaheads Taipei發起人、業餘macOS/iOS開發者。 上一個生涯目標是推廣熱愛的蘋果，已達成。接下來的生涯目標是推廣熱愛的單車多元文化，用單車來改變城市。 曾主辦「沈默的騎行」呼籲重視交通安全，以及「台北裸騎」。"
    },
    {
      id: _.uniqueId(),
      name: "John Lin",
      imgURL: "https://avatars3.githubusercontent.com/u/529248?s=460&v=4",
      position: "",
      intro:
        "Organizer of Swift Taipei. Full-stack developer.  iOS developer. Language Nerd. FP lover."
    },
    {
      id: _.uniqueId(),
      name: "張景隆",
      imgURL: require("../images/chang.jpg"),
      position: "",
      intro:
        "CWMoney 開發者 i統一發票 開發者 台大 HackNTU - iOS 課程講師 東海大學 教學卓越計畫 講師 教育部開放式課程-程式開發講師 東山高中 CS50 講師 MOPCON 2014 講者 CodeData 作者 iOS Dev Club 講者 & 核心成員 參加蘋果官方主辦 2013年 Tech Talk 麥克自由聚(Apple, Mac, iOS 相關) 講者"
    },
    {
      id: _.uniqueId(),
      name: "Allen Wang",
      imgURL: require("../images/allen.jpg"),
      position: "",
      intro:
        "4年經驗的mobile app工程師，經歷過公司IPO，10來個人的前端技術團隊和Team Leader經驗。目前在英國新創擔任iOS developer。"
    },
    {
      id: _.uniqueId(),
      name: "Enid Tian",
      imgURL: require("../images/enid.jpg"),
      position: "",
      intro:
        "Enid is the Head of AppWorks School, where she helps young people acquire the necessary programming skills as well as computational thinking mindset to start a career in Internet Companies. She joined AppWorks as an intern in 2011 and stayed on as Analyst after graduation. Enid received her B.A. in Finance from National Taiwan University, with “minors” in AIESEC and Ballroom Dancing Club."
    },
    {
      id: _.uniqueId(),
      name: "鄭雅方",
      imgURL: require("../images/fan.png"),
      position: "",
      intro: "APP Girls 創辦人."
    },
    {
      id: _.uniqueId(),
      name: "Tina Chang",
      imgURL: require("../images/tina.jpg"),
      position: "",
      intro:
        "Swift 語言趨近穩定的現在，大多數公司開發新專案沒意外都會選擇 Swift，但對於歷史悠久的龐大專案，其程式碼沒有這麼容易通通轉成 Swift，混用，就是個不得已但必需的方案，而我任職的公司就屬於後者，希望能透過分享和大家交流經驗 :)"
    },
    {
      id: _.uniqueId(),
      name: "徐嘉駿 Toby Hsu",
      imgURL: require("../images/Toby.jpg"),
      position: "",
      intro:
        "畢業於政治大學數位內容碩士學位學程，興趣為人機互動介面與使用者經驗研究，自稱為非典型工程師。目前為 CATCHPLAY 的 tvOS / iOS 工程師。"
    },
    {
      id: _.uniqueId(),
      name: "AKI YU",
      imgURL: require("../images/aki.jpg"),
      position: "",
      intro: "iOS @ Taipei 傳教士"
    },
    {
      id: _.uniqueId(),
      name: "Vivian Liu",
      imgURL: require("../images/vivian.jpg"),
      position: "",
      intro:
        "Hi 我是 Vivian ，目前任職於 KKBOX，是 KKBOX Application 的 Software Quality Assurance。主要負責的領域是 KKBOX iOS Application Automation，採用的測試框架為 XCUITest。一路以來收穫了不少能讓 XCUITest 穩定度及速度提升的技巧，並且成功讓我們的 Flaky rate 降到現在的 1.37%。誠心希望這場分享能夠讓大家有所收穫。"
    },
    {
      id: _.uniqueId(),
      name: "Luke Wu 伍智瑋",
      imgURL: require("../images/luke.jpg"),
      position: "",
      intro:
        "半路出家的 iOS developer，最近也玩一點 Flutter。目前在 AppWorks School 擔任 iOS Instructor."
    },
    {
      id: _.uniqueId(),
      name: "Jason",
      imgURL: require("../images/jason.jpeg"),
      position: "",
      intro:
        "程式愛好者，windows 開發一年多，iOS 開發三年。希望可以跟大家交流。"
    },
    {
      id: _.uniqueId(),
      name: "Gary niL",
      imgURL: require("../images/gary.jpeg"),
      position: "",
      intro: "garynil.tw"
    },
    {
      id: _.uniqueId(),
      name: "Su PingChen",
      imgURL: require("../images/pingchen.jpg"),
      position: "",
      intro: "LINE Fukuoka iOS Engineer"
    },
    {
      id: _.uniqueId(),
      name: "Marcus Wu",
      imgURL: require("../images/marcus.jpg"),
      position: "",
      intro:
        "Golface 資深iOS 工程師，擁有iOS 四年開發經歷，擅長使用Objective-C 與Swift 進行開發，致力於提升軟體品質。熱愛挑戰、學習新知。貢獻、開發數個開源專案。"
    },
    {
      id: _.uniqueId(),
      name: "Jeff Lin",
      imgURL: require("../images/jeff.jpg"),
      position: "",
      intro: "Oath資深iOS App工程師"
    },
    {
      id: _.uniqueId(),
      name: "Mars",
      imgURL: require("../images/mars.jpg"),
      position: "",
      intro: "我是 CHOCO TV 的前端開發經理 Mars，有六年的 iOS app 開發經驗"
    },
    {
      id: _.uniqueId(),
      name: "Elvis Lin",
      imgURL: require("../images/elvis.jpg"),
      position: "",
      intro:
        "行動應用軟體工程師，目前從事 Android, iOS 與 React Native 的開發。目標是將Unit Testing, CI 與 CD 推廣到工程團隊日常的開發中。"
    },
    {
      id: _.uniqueId(),
      name: "丁沛堯",
      imgURL: require("../images/ting.jpg"),
      position: "",
      intro:
        "丁沛堯, iCHEF Senior Developer, 愛貓, 最近的興趣是做戴牙套也可以吃的料理"
    },
    {
      id: _.uniqueId(),
      name: "Pofat",
      imgURL: require("../images/pofat.jpg"),
      position: "",
      intro:
        "邊緣系肥宅，喜好從頭到尾都自己動手重造輪子，無論是產品開發或程式設計。其它技能是拉花與社會觀察，曾經認真運動過。"
    },
    {
      id: _.uniqueId(),
      name: "Marvin Lin",
      imgURL: require("../images/marvin.jpg"),
      position: "",
      intro: "iOS 工程師，從 Swift 開始學，但現在專案使用的是 Obj-C"
    }
  ];

  staff = [
    {
      id: _.uniqueId(),
      name: "Hokila",
      imgURL:
        "https://pbs.twimg.com/profile_images/889516896004882432/c3sdNWS9_400x400.jpg",
      position: "iOS Evangelist / Trello Lover/ Father",
      SNS: "https://www.facebook.com/profile.php?id=100002142768087"
    },
    {
      id: _.uniqueId(),
      name: "Hanyu Chen",
      imgURL: require("../images/tGm55idg.png"),
      position: "iOS Developer",
      SNS: "https://www.facebook.com/hanyu.chen.518"
    },
    {
      id: _.uniqueId(),
      name: "John Lin",
      imgURL: "https://avatars3.githubusercontent.com/u/529248?s=460&v=4",
      position: "Swift Taipei Organizer",
      SNS: "https://twitter.com/johnlinvc"
    },
    {
      id: _.uniqueId(),
      name: "ethanhuang13",
      imgURL:
        "https://s.gravatar.com/avatar/61a2325aa2033a3d43c8edfb43718562?s=200",
      position: "iOS Dev @ CATCHPLAY",
      SNS: "https://twitter.com/ethanhuang13"
    },
    {
      id: _.uniqueId(),
      name: "Hao Lee",
      imgURL:
        "https://s.gravatar.com/avatar/482ac461ed40d8e43a19f8897069f018?s=200",
      position: "Software Engineer at DYLAN-TEK CO., LTD.",
      SNS: "https://twitter.com/twhaolee"
    },
    {
      id: _.uniqueId(),
      name: "Welly",
      imgURL: require("../images/meme.png"),
      position: "F2E at KKStream",
      SNS: "https://github.com/WellyShen"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/10636419_10203880244832112_3086301521967770082_o.jpg"),
      name: "Joe Chen",
      position: "Software Engineer",
      SNS: "#"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/Hanpo_Avatar.jpg"),
      name: "Hanpo",
      position: "UI Design Engineer at KeyXentic",
      SNS: "https://www.facebook.com/hanpo.tw"
    },
    {
      id: _.uniqueId(),
      imgURL: "https://avatars1.githubusercontent.com/u/59567?s=460&v=4",
      name: "Superbil",
      position: "Software Freelance",
      SNS: "https://twitter.com/superbil"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/14362711_1443783055638586_3924866533217962148_o.jpg"),
      name: "Dada",
      position: "iOS Developer at KKBOX",
      SNS: "https://twitter.com/nalydadad"
    }
  ];

  sponors = [
    {
        id: _.uniqueId(),
        imgURL: require("../images/logo_esun.png"),
        link: "https://www.esunbank.com.tw/",
        alt: "Esun Bank",
        degree: "黃金贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_dcard.png"),
      link: "https://www.dcard.tw/",
      alt: "Dcard",
      degree: "黃金贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_pic-collage.png"),
      link: "https://cardinalblue.com/",
      alt: "Cardinal Blue",
      degree: "白銀贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_ichef.jpeg"),
      link: "https://www.ichefpos.com/zh-tw",
      alt: "iChef",
      degree: "白銀贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_catchplay.png"),
      link: "https://www.catchplay.com/tw",
      alt: "Catch Play",
      degree: "青銅贊助"
    },
    {
        id: _.uniqueId(),
        imgURL: require("../images/logo_keyxentic.png"),
        link: "https://www.keyxentic.com/",
        alt: "KeyXentic",
        degree: "青銅贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_5xruby.tw.png"),
      link: "https://5xruby.tw/",
      alt: "5xRuby",
      degree: "設備贊助"
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
    _.map(this.sponors, ({ id, imgURL, link, alt, degree }) => (
      <div key={id} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__sponsor-logo" src={imgURL} alt={alt} />
          <div className="app__sponsor-degree">{degree}</div>
        </a>
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
              📍 台大博雅館
              <br/>
              9/21-9/22
            </p>
          </div>
        </div>
        <div className="app__container">
          <div className="app__section">
            <h2 className="app__title">關於 iPlayground</h2>
            <p>
              2017年9月，一群到東京參加 <a href="https://iosdc.jp/2017/" target="_blank">iOSDC</a> 的工程師們，在看到國外蓬勃活躍的程式力，熱血自此被點燃，決心舉辦一場廣深度兼具又有趣的的 iOS 研討會。
            </p>
            <p>
              2018年10月，有實戰技巧、初心者攻略、hard core 議題以及各式八卦政治學的 iPlaygrouond 華麗登場。
            </p>
            <p>
              2019年，iPlayground 誠摯召喚各位鍵盤好手一起來燃燒熱血，讓議程更多元、更有料！
            </p>
            <a
              className="app__submit"
              href="https://iplayground.kktix.cc/events/iplayground2018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>立刻購票</strong>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SocialIcon
                url="https://twitter.com/theiPlayground"
                style={{ margin: 10 }}
              />
              <SocialIcon
                url="https://www.facebook.com/theiPlayground/"
                style={{ margin: 10 }}
              />
              <SocialIcon
                url="https://mastodon.technology/@iplayground"
                style={{ margin: 10 }}
              />
            </div>
            <p>
              iPlayground 是在台北舉辦的 Apple 軟體開發相關的研討會，名字來自於
              Xcode 內建的開發工具 Playground，我們希望開發者、設計師、QA、PM
              都可以在這邊交換想法，分享所學我們歡迎有興趣的朋友一同加入
              iPlayground 並且認識更多同好。
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <strong> 訂閱最新通知 </strong>
              <MailchimpSubscribe url={mailChimpURL} />
            </div>
            <a
              className="app__submit"
              href="https://cfp.iplayground.io/events/iplayground_2018_lightning_talk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>2018 lightning talk募集中</strong>
            </a>

            <iframe
              title="location"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=%E8%87%BA%E7%81%A3%E5%A4%A7%E5%AD%B8+NTU+Global+MBA&key=AIzaSyBIrI6CGIsBb7W9s5hvIXoZrsWG1J0ek1k"
              allowFullScreen
            />
          </div>
          <div className="app__section">
            <h1 className="app__title">Schedule</h1>
            <div className="app__sechdule-tab">
              <button
                className={
                  whichDay === "day_1" ? "app__sechdule-tab__btn--selected" : ""
                }
                onClick={() => {
                  this.setState({ whichDay: "day_1" });
                }}
                type="button"
              >
                Day 1
              </button>
              <button
                className={
                  whichDay === "day_2" ? "app__sechdule-tab__btn--selected" : ""
                }
                onClick={() => {
                  this.setState({ whichDay: "day_2" });
                }}
                type="button"
              >
                Day 2
              </button>
            </div>
            <table className="app__table">
              <tbody>
                <tr className="app__table-header">
                  <th />
                  <th>正大會議廳</th>
                  <th>B101</th>
                </tr>
                {this.renderTableRow()}
              </tbody>
            </table>
          </div>
          <div className="app__section">
            <h1 className="app__title">Official Party</h1>
            <p>將於活動第二天 <b>10/21（日）13:00 ～ 17:00</b> 於 <b>後台咖啡（台北市大安區羅斯福路四段1號台大綜合體育館)</b> 舉行，屆時將舉辦兩場 <b>Panel Discussion</b>，邀請業界有名的資深主管與談。</p>
            <p><b>PANEL 1 議題: "內部管理"、"開發流程"、"職涯建議"</b>，講者如下(以下依照名字排序):</p>
            <ul>
              <li>Oath Sr. Manager: Anistar</li>
              <li>玉山銀行 Mobile Application Team Lead: 賴俊安</li>
              <li>17 Media Sr. Director: Racing Wang</li>
              <li>iCHEF CTO: Spencer</li>
            </ul>
            <p><b>PANEL 2 議題: "產品設計"、"產業生態"、"職涯建議"</b>，講者如下(以下依照名字排序):</p>
            <ul>
              <li>iOS@Taipei 創辦人: Aki</li>
              <li>Cardinal Blue: YY</li>
              <li>KKBOX Sr. Manager: Zonble </li>
            </ul>


            <table className="app__table">
              <tbody>
                <tr className="app__table-header">
                  <th>time</th>
                  <th>event</th>
                </tr>
                {this.renderPartyEventRow()}
              </tbody>
            </table>

            <a
              className="app__submit"
              href="https://iplayground.kktix.cc/events/iplayground2018-officialparty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>立即報名</strong>
            </a>
          </div>
          <div className="app__section">
            <h1 className="app__title">Sponsors</h1>
            {this.renderSponsors()}
          </div>
          <div className="app__section">
            <h1 className="app__title">Speakers</h1>
            {this.renderSpeakers()}
          </div>
          <div className="app__section">
            <h1 className="app__title">Staff</h1>
            {this.renderStaff()}
          </div>
          <div className="app__section">
            <h1 className="app__title">Co-organizers</h1>
            {this.renderCoOrganisers()}
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
