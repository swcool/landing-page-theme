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
import NavgationBar from "../components/NavgationBar";

export default class App extends PureComponent {
  state = { showModal: false, whichDay: "day_1" };

  sechdule = {
    day_1: [
      {
        id: _.uniqueId(),
        start: "8:30",
        end: "9:30",
        rest: "報到"
      },
      {
        id: _.uniqueId(),
        start: "9:30",
        end: "9:40",
        rest: "開場"
      },
      {
        id: _.uniqueId(),
        start: "9:40",
        end: "10:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Beyond a player: CarPlay and MFI Hearing Aids",
            presenter: "zonble",
            description: "Nowadays the music experience for iOS devices is not merely limited on speakers and headsets, but already expanded to  modern car systems, hearing aids and more.\r\n\r\nThis brings challenges to music services like KKBOX, since some audio APIs behave in unexpectedly ways and some of them are not actually well documented, while playing audio on these new output devices.\r\n\r\nThe talks covers how we encountered and solved the challenges, although they might not be good solutions.",
            tags:[],
            room:"101"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "11:00",
        end: "11:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Backporting UICollectionViewCompositionalLayout",
            presenter: "kishikawa katsumi",
            description: "A new UICollectionViewCompositionalLayout class has been added to UIKit to make it incredibly easier to create custom complex collection view layout. In iOS 12 and earlier, we need subclassing of UICollectionViewLayout to do that. We have to override lots of methods correctly, and it is error-prone.\r\n\r\nHowever, we can not use new useful APIs immediately. We have to wait until iOS 13 to reach users sufficiently. Otherwise, we must maintain two different code bases.\r\n\r\nIf we can create a library that emulates the behavior of UIKit's new API, we can start using the new code base without waiting for the spread of iOS 13.\r\n\r\nI made it; https://github.com/kishikawakatsumi/IBPCollectionViewCompositionalLayout\r\nit seems works well.\r\n\r\nIn this talk, I will share the knowledge gained from the experience of creating this library and the right way to customize the collection view layout.",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "How to make BDD possible in Flutter",
            presenter: "Jersey Su",
            description:
              "2018 年底 Flutter 1.0 正式登場, 尤其是 Widget Test 更是令人期待. 然而在眾多的測試中, 是否有一個方法可以將 BDD 的方法整合於 Flutter 呢? Dart 的套件, flutter_gherkin 讓這件事從不可能成為可能. 講者想透過這次分享, 說明如何將 BDD 的方法整合進 Flutter 的測試, 讓 Flutter 開發者也能享受其中的樂趣",
              tags:[],
              room:"102"
          },
          {
            id: _.uniqueId(),
            topic: "關於Smart KeyPath",
            presenter: "Chiaote Ni",
            description:
              "簡介什麼是Swift的Smart KeyPath，他能做到什麼事，有哪些可使用的類別\r\n以及介紹我們能如何利用Smart KeyPath來優化我們的Code\r\n",
              tags:[],
              room:"103"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "午餐"
      },
      {
        id: _.uniqueId(),
        start: "13:00",
        end: "13:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "漫談 iOS 架構：MVC / MVVM / VIPER 與 Redux",
            presenter: "Nelson",
            description: "過去這幾年大家逐漸重視 iOS 的架構設計，從最基本的 MVC 到開始普及的 MVP / MVVM，到分工細膩的 VIPER，每個 pattern 都有擁護者；近期也有為了解決畫面轉換的 Router / Coordinator 以及為了解決資料一致性的 Redux。\r\n\r\n我們來聊聊這幾種 pattern 及其演化過程。",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "多人專案開發你可能會碰到的那些事",
            presenter: "Lynn",
            description:
              "分享一些多人專案中可能會遇到的情況，介紹一些應對的方法或工具。\r\n",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "13:55",
        end: "14:35",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Integrate your app to modern world",
            presenter: "Daiki Matsudate",
            description: "Exciting SwiftUI has coming to us. SwiftUI has declarative syntax and realtime update so we can develop our apps more faster.You might thought changing better the iOS world. \r\nHowever, of course you know, SwiftUI can be introduced from iOS 13, so we must cut off until iOS12 and it takes 1 - 2 years.So we don’t have to do nothing this 2 years, right? Absolutely not. We should invest time to prepare for migration.\r\n\r\nThe data flow of SwiftUI is based in Single source of truth and composition with small components.\r\n\r\nIn this talk, I’d like to talk about how to divide your huge view controller into small components,  and how to migrate to SwiftUI well.",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "AR 互動遊戲開發經驗分享",
            presenter: "JackyChen",
            description:
              "2018 年 WWDC，樂高的擴增實境遊戲是否讓您驚嘆不已？您是否已蠢蠢欲動，想嘗試動手卻又不得其門而入，其實，光只有 ARKit 是不夠的，這場分享將會告訴你，開發有趣的AR互動遊戲，還需要具備哪些知識",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "14:50",
        end: "15:30",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Continuous integration for iOS: CI as a service",
            presenter: "Akos Birmacher",
            description: "In the beginning of my talk, I will walk you through the differences between local and cloud-based CI solutions for iOS development. We will talk about the setbacks of cloud-based solutions and how Bitrise has managed to overcome these difficulties.\r\nIn the second half, we will be talking about hands-on examples and best practices in automating your CI/CD pipeline with Bitrise.\r\n",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "Declarative UI on iOS (without SwiftUI)",
            presenter: "ShihTing Huang (Neo)",
            description:
              "SwiftUI儼然已經成為Swift開發上的顯學，雖然SwiftUI非常酷眩，但在使用SwfitUI之前，我們有個更大的問題是，因為ABI stability的關係，短時間內(3~5年)，你是無法使用SwfitUI來改寫你既有的UI code的。加上要使用SwiftUI來改寫你的UI component，你可能需要打掉UI重練，對於code base非常巨大或是剛接手一個新專案的人來說，都是非常困難的。基於上面的狀況，我們希望能提供一個更務實的方法：從declarative UI了解起，一步一步改造舊有的code，幫最後全SwiftUI化鋪上平坦的最後一哩路！這個talk會包含：Declarative UI pattern介紹、用Swift實作declarative UI pattern(不用SwiftUI或其它UI library)、還有一個簡單的既有專案的改寫過程。\r\n",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "15:45",
        end: "16:25",
        talks: [
          {
            id: _.uniqueId(),
            topic: "探索 Swift 自動微分實作",
            presenter: "John Lin",
            description: "Swift for Tensorflow 希望能將 Swift 打造為一個為 Deep Learning 量身定作的語言。自動微分就是其中一項新功能。自動微分能自動將任何的函數微分，大幅增增進生產力和減少 Bug。 讓我們一起來探索 Swift 是如何實作這個神奇的功能。",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "初代 SwiftUI 就用來寫 Watch App 吧！",
            presenter: "Ethan Huang",
            description:
              "許多人對 SwiftUI 抱持高度興趣，想找機會來使用與學習。但是實際玩過以後會發現它的成熟度還不足以取代 UIKit，作為開發 iOS app 的主要 UI 框架。開發者普遍的共識是，在 iOS 13 使用 SwiftUI 的風險很大，用在 side project 或小型專案還可以，但不適用於商業上的應用。\r\n\r\n難道 SwiftUI 就無用武之地嗎？2019 年第一版它只能當玩具嗎？其實 Apple 規劃出一個很不錯的路線，讓 SwiftUI 可以用在商業應用上，只是很容易被開發者忽略——watchOS 6 才是 SwiftUI 在今年發揮作用的平台。\r\n\r\nwatchOS 6 在開發方面有幾個特色：\r\n1. 因為 Swift ABI 穩定，app 體積小，安裝到實機開發節省非常多時間\r\n2. 可以使用 SwiftUI，不再受限 WKInterface \r\n3. 可以獨立打包上架，不一定要有 iOS app\r\n4. WKExtendedRuntimeSession 大幅增加了應用情境\r\n\r\n過去 watch app 很少人開發，很大的原因就是上述幾點困難尚未被克服。既然開發者大多都沒有寫過甚或移除了原有的 watch app，watchOS 6 + SwiftUI 或許就是很好的重新來一次的機會，也可以想出許多 side project 的題目。\r\n",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "16:30",
        end: "17:30",
        rest: "After Party"
      }
    ],
    day_2: [
      {
        id: _.uniqueId(),
        start: "9:00",
        end: "10:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "網路難，難於上青天 - 用部件化的方式簡化網路程式設計",
            presenter: "王巍",
            description: "無論是 API 調用獲取 JSON，還是從網路下載圖片數據，都是 app 開發中最常見任務。URLSession 和 Codable 為我們提供了壹套簡單易用的進行網路程式設計接口，但如果不注意程式架構，相關的網路部分的代碼很容易腐爛。特別在當程式邏輯變得複雜時，想要保持修正和變更依然能夠敏捷進行，並確保高效的測試覆蓋，並不是那麽容易的事情。\r\n\r\n這個 Session 將討論使用一種部件化的方式，來將網路程式的構建和處理拆分為可以理解，易於測試的小塊。通過這種方式，我們可以有信心地為 app 設計出可擴展，無 bug 的網路部分。\r\n",
            tags:[],
            room:""
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "10:20",
        end: "11:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Making your own tools using SwiftSyntax",
            presenter: "Yusuke Kita",
            description: "Do you want to make your own tools like formatter? SourceKit was the only option for us, but SwiftSyntax is now available via SPM. It parses Swift source code and gives us syntax tree that can be used for the analysis by Swift API.\r\nIn this talk, we’ll cover overview of SwifSyntax and go over how and where to start to make productivity tools for your projects with some examples.\r\n",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "大型專案生存守則 - 10x加速開發技巧",
            presenter: "CJ Lin",
            description:
              "在大型專案中血與淚的經驗，改幾行 Code，Incremental Build 也要數十分鐘，只能去喝杯咖啡？\r\n除了加速 Build Time 之外的另一個思路：不要 Build & Run.\r\n分享有哪些技巧能更快看到程式碼改動結果，會遇到的問題與解法。\r\n",
              tags:[],
              room:"102"
          },
          {
            id: _.uniqueId(),
            topic: "從MVC到MVVM，再到MVVMC的開發經驗分享",
            presenter: "黃惠勤",
            description:
              "本次主題會介紹MVC的開發，並提及MVVM架構的設計及其解決的問題，最後會再切入MVVMC，進一步了解它想解決哪一些問題。基於產品的維護性、可讀性、可測試性等來分析架構的理念及重要性，再來就是一些實戰經驗分享。",
              tags:[],
              room:"103"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "11:20",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "APP 送審自動化",
            presenter: "PC Lin 林培鈞",
            description: "為了達到最短時間內發佈 1000 個 App 的目標，建立以 DevOps 為概念的自動化發佈服務，解決從 Compile Source Code 到 App Store 上架整個流程各個需要克服的難題。 \r\n\r\n",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "The Reborn of the Our Product.",
            presenter: "Mars",
            description:
              "There is bunch of legacy code in most of the products which we are trying to improve the flexibility and reliability. However,\r\n\r\n* How could we hanld with bugs or features and refactor the legacy code at the same time?\r\n* How could we take the advantage of the moden language Swift and inject into Objective-C code?\r\n* How could we turn the Massive-View-Controller chaos into Clean Architecture?\r\n\r\nTherefore, for those developers who want to be in a higher level or try to refactor their legacy code of the product.\r\nI will share my real-life experience and answer those questions.",
              tags:[],
              room:"102"
          },
          {
            id: _.uniqueId(),
            topic: "二次元直播 - 虛擬主播與 ReplayKit 的邂逅",
            presenter: "Han Chang",
            description:
              "覺得三次元不夠萌？別擔心，17也有虛擬人物的二次元直播！本議程會介紹真人直播與虛擬主播的推流架構，以及實作上的甘苦談。讓我們一起進入二次元的世界。",
              tags:[],
              room:"103"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "午餐"
      },
      {
        id: _.uniqueId(),
        start: "13:30",
        end: "14:10",
        talks: [
          {
            id: _.uniqueId(),
            topic: "我搞不懂浮點數：CS 101",
            presenter: "yllan",
            description: "俗話說「程式語言三大誤解：我懂浮點數、我懂unicode、我懂時間運算」。想必大家寫程式也多少聽過一些浮點數的奇怪行為，但有多少人真的敢說了解浮點數？全球大學最高程式競技殿堂ACM ICPC曾發生過一件趣事：日本隊在決賽送出的解答幾乎要通過了，卻在某筆測資超過執行時間。評審們都是電腦科學界的頂尖頭腦，看程式碼卻也看不出所以然，原因竟是「這個」。\r\n",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "在想色色的事情對吧？About color in iOS",
            presenter: "Jeff Lin",
            description:
              "顏色是每個行動開發工程師一定會碰到的一環，但很多看似理所當然的名詞究竟代表什麼？這次將介紹顏色在Apple開發相關的知識和觀念，包含了：\r\n* Color space、顏色混和(Blending)、可讀性。\r\n* WWDC 2019中Apple提出對顏色的改進：Dark mode, Base and Elevated和Materials。\r\n* 最後將分享在iOS App project上如何對顏色進行管理，讓維護專案更有效率。",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "14:25",
        end: "15:05",
        talks: [
          {
            id: _.uniqueId(),
            topic: "一起來看 app 裸奔吧～",
            presenter: "TinXie-易致",
            description: "在 iOS 系統架構下，你的 app 真的無堅不摧？ 讓我們一起來看 app 裸奔吧～\r\n",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "為邊緣開發獻上新知 - tvOS",
            presenter: "徐嘉駿 Toby Hsu",
            description:
              "聊聊今年 Apple 在 tvOS 上做了什麼改變，SwiftUI x tvOS 又尬出了什麼新滋味？\r\n分享作為一位專職 tvOS 開發者感到的空虛寂寞覺得冷。",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "下午茶"
      },
      {
        id: _.uniqueId(),
        start: "15:25",
        end: "16:05",
        talks: [
          {
            id: _.uniqueId(),
            topic: "使用 BUCK 改善編譯速度",
            presenter: "Qing-Cheng Li",
            description: "簡單介紹如何導入並使用 BUCK 改善 iOS 專案編譯速度的經驗。",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "您的APP安全嗎?",
            presenter: "羊小咩",
            description:
              "* 行動App持續蓬勃發展，但企業對於App資安重視程度，必須要再加強，尤其功能優先的導向之下，很容易忽略安全防護的重要。\r\n* 近年，許多App可能都存在不同程度的安全防護問題，從2017年9月起，臺灣金管會也已經開始要求銀行業者/電子支付業者，需委託專業機構對現行所有App進行全面安全檢測；當然跟政府相關App雖然法規規範已紛紛列為必要驗收必要項目。\r\n* App開發人員，開發時想要提升App本身的安全性，重點在於要了解侵入過程，才能知道怎麼因應，並瞭解App需做到的安全防護面向。",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "",
        end: "",
        rest: "休息"
      },
      {
        id: _.uniqueId(),
        start: "16:20",
        end: "17:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "簡易版 Combine 框架 DIY：FRP 原理探討",
            presenter: "Li-Heng Hsu",
            description: "Combine 框架正式將蘋果的開發社群帶到 Functional Reactive Programming 的設計典範之上。然而，之前沒有接觸過 FRP 框架（如 RxSwift、ReactiveCocoa 等）的 OOP 開發者可能會對 Combine 的運作原理摸不清頭緒。\r\n\r\n事實上，FRP 本身主要是由兩種設計模式結合而成的設計典範：建造者模式（Builder pattern），以及函數式程式設計中的 Mappable（Functor）模式。要了解這些概念，最快的方法就是自己從零開始建構一個 FRP 框架出來。\r\n\r\n### 建造者模式\r\n\r\n_建造者（Builder）_本身通常是一個簡單的 struct。它除了可以用來建造 URL（`URLComponents`）與取代複雜的建構式/工廠方法之外，還可以用來對一般的方法呼叫做包裝。\r\n\r\nCombine 的 `Publisher`，就是這樣的東西。而它的 `sink(_:)`、`subscribe(_:)` 等方法，就相當於建造者的 `build()` 方法。只不過它的作用是開始一個非同步工作，並傳回一個取消工作用的 `Cancellable`。\r\n\r\n### Mappable 模式\r\n\r\n建造者最大的功能是在於它可以輕易地改變建造對象的屬性。比如說當我們呼叫 `URLSession.dataTask(for:completion:)` 之後，我們就沒辦法再更改 `completion` 閉包的內容了。但若整個方法呼叫是被包在一個建造者裡的話，我們就可以用 `map(_:)` 方法預先更改 `completion` 的行為。\r\n\r\n在 Combine 中，這些方法對應到的是 Operator，一些做轉換、過濾、時間控制、錯誤處理等等的中間人 `Publisher`。\r\n\r\n### 應用\r\n\r\n最後，我們會將 `AsyncTask` 應用到 `URLSession`、KVO、Target-Action 與 `NotificationCenter` 等處。如果時間允許的話，更可以試試模仿實作 `Published` property wrapper 型別。",
            tags:[],
            room:"101"
          },
          {
            id: _.uniqueId(),
            topic: "怦然心動的編譯時間優化魔法",
            presenter: "丁沛堯",
            description:
              "生命應該浪費在美好的事物上，而不是等著 compiler 的進度條緩慢的增加，一邊祈禱一切按照你心中的藍圖進行。這個 talk 會介紹我如何讓一個古老的專案從編譯一次要5分鐘，優化到只需要2分鐘的故事。",
              tags:[],
              room:"102"
          },
          {
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "17:00",
        end: "17:10",
        rest: "閉幕"
      }
    ],
  };

  workshop = {
    day_1:[
      {
        id: _.uniqueId(),
        start: "13:00",
        end: "14:35",
        talks: [
          {
            id: _.uniqueId(),
            topic: "利用TDD來發大財吧～",
            presenter: "DinDin , Steve Sun",
            description: "不知道什麼是測試嗎？\r\n沒寫過任何UnitTest嗎？\r\n沒聽過TDD嗎？\r\n你來對地方了。我們會一步步帶你認識了解\r\n透過實作一個樂透發財APP\r\n從最基礎型的MVC架構，搭配DI技巧\r\n用TDD心法來做代碼的整理與優化\r\n並且逐步完善我們想要實作的功能\r\n目標對象：\r\n對測試沒概念的人\r\n對TDD沒概念的人\r\n(此主題適合給junior朋友\r\n",
            tags:[],
            room:"103",
            isWorkshop:true
          }
        ]
      }
    ]
  ,
  day_2:[
      {
        id: _.uniqueId(),
        start: "13:30",
        end: "15:05",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Web API Mocking",
            presenter: "Fengyi",
            description: "後端API沒完成，前端該如何同步開發？\r\n帶你一起透過依賴注入，讓外部API調用從代碼中解耦, \r\n編寫易於測試與Debug的代碼。",
            tags:[],
            room:"103",
            isWorkshop:true
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "13:30",
        end: "16:30",
        talks: [
          {
            id: _.uniqueId(),
            topic: "第一次 SwiftUI App 親密接觸",
            presenter: "彼得潘",
            description: "如果有一萬個小時的程式練習，我就能開發比 IG 還棒的 App。一萬個小時的練習有可能嗎? 可以 ! 就從 Workshop 的 3 個小時，開始第一次的 SwiftUI App 親密接觸。\r\n\r\nApple 最新推出的 SwiftUI 幫助我們以更直覺精簡的程式製作 App，活動將搭配滿滿的實作練習，介紹 SwiftUI 的各種技術。比方畫面的製作，頁面的切換，data binding，動畫和轉場效果，結合 iOS 13 的 dark mode，SF Symbols，SPM 等，帶著大家一步步創作一個完整的 App。\r\n",
            tags:[],
            room:"201",
            isWorkshop:true
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "15:25",
        end: "17:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "擴增實境人物控制實作",
            presenter: "Han Chang",
            description: "您將會學到\r\n1. imageAnchor 設定\r\n2. 座標設定、轉角設定、比例縮放\r\n3. 材質設定\r\n4. 人物動作處理\r\n5. 搖桿控制\r\n\r\n環境需求\r\n1. 設備版本 iOS12 以上，並內建 A9 以上晶片，如 iphone6S 以上機種\r\n2. 平板體驗更佳\r\n3. 請安裝 Xcode 11\r\n",
            tags:[],
            room:"103",
            isWorkshop:true
          }
        ]
      }
    ]
  }

  speakers = [
    {
      id: _.uniqueId(),
      imgURL:
        "https://pbs.twimg.com/profile_images/277613359/113d17e2e1f_400x400.jpg",
      alt: "",
      name: "王巍",
      position: "",
      intro:
        "王巍現在是專註於 iOS 的職業開發者。他擁有對於 Swift，Objective-C 以及網路程式設計方面的深厚知識及多年實作經驗。他將這些技術運用於創建 app 和通用框架等解決方案，其中很多都被用戶喜愛，並被開發者社區廣泛使用來構建其他軟體。\r\n\r\n作為兩個可愛孩子的父親，王巍同時也熱愛旅遊，閱讀以及攝影。他總是樂於嘗試新鮮事物，並且持續地從這些新鮮事物中進行學習。\r\n\r\n現在，王巍是壹名在 LINE 工作的高級軟件工程師。",
        topic:"網路難，難於上青天 - 用部件化的方式簡化網路程式設計"
    },
    {
      id: _.uniqueId(),
      imgURL:
        "https://avatars0.githubusercontent.com/u/53011?s=400&v=4",
      alt: "",
      name: "zonble",
      position: "",
      intro:
        "A Taipei-based developer working at KKBOX. Started developing in Objective-C language for macOS since 2005 and became an iOS developer since 2008 when iPhone SDK was out. Contributed to products including Yahoo! KeyKey Input Method, Boshiamy Input Method for macOS, KKBOX for macOS/iOS/tvOS, Uta Pass for iOS and so on. Wrote a free online e-book in Chinese about iOS development in 2015.\r\nHis latest work is KKBOX Kids, a new audio app with latest Flutter technology parenting contents from KKBOX.",  
      topic:"Beyond a player: CarPlay and MFI Hearing Aids"
    },
    {
      id: _.uniqueId(),
      imgURL:
        require("../images/kishikawakatsumi.png"),
      alt: "",
      name: "kishikawa katsumi",
      position: "",
      intro:
        "Since early-2008 I've been working as a native iOS/Mac application developer.\r\nDeveloped several major iOS applications and maintained some popular open source libraries. Prefer developing small tools for developers.",  
      topic:"Backporting UICollectionViewCompositionalLayout"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/Nelson.jpeg"),
      alt: "",
      name: "Nelson",
      position: "",
      intro:
        "心血來潮就會寫部落格的 iOS 工程師，希望有天可以靠嘴寫程式。",  
      topic:"漫談 iOS 架構：MVC / MVVM / VIPER 與 Redux"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/DaikiMatsudate.jpeg"),
      alt: "",
      name: "Daiki Matsudate",
      position: "",
      intro:
        "Daiki has developing iOS app for 8 years in Tokyo, and is Google Developers Expert for Firebase. He has organizing try! Swift Tokyo and some meetups around Tokyo. When he’s not coding, he likes to play piano and go to Onsen♨️",  
      topic:"Integrate your app to modern world"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/akos-birmacher-bitrise.jpg"),
      alt: "",
      name: "Akos Birmacher",
      position: "",
      intro:
        "I’ve been an App Automation Engineer at Bitrise for 1,5 years. I’ve specialized in Xcode build tools and Code signing automation. Before joining Bitrise, I’d worked as an iOS Developer.",  
      topic:"Continuous integration for iOS: CI as a service"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/JohnLin.jpeg"),
      alt: "",
      name: "John Lin",
      position: "",
      intro:
        "Organizer of Swift Taipei. Full-stack developer.  iOS developer. Language Nerd. FP lover.",  
      topic:"探索 Swift 自動微分實作"
    },
    {
      id: _.uniqueId(),
      imgURL:"https://pbs.twimg.com/profile_images/1079705464353435648/ZASvuGO1_400x400.jpg",
      alt: "",
      name: "Yusuke Kita",
      position: "",
      intro:
        "I’m a Software Engineer at Mercari. I've been working on Mercari US app in frontend and backend team. I'm passionate about learning new technology. When not coding, you can find me cycling.",  
      topic:"Making your own tools using SwiftSyntax"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "PC Lin 林培鈞",
      position: "",
      intro:
        "iOS 七年開發經驗，在台灣電商服務五年，喜歡解決疑難雜症與開發自動化工具",  
      topic:"APP 送審自動化"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/yllan.png"),
      alt: "",
      name: "yllan",
      position: "",
      intro:
        "上班寫nodejs，下班後的身份是台灣城市單車聯盟理事、Cocoaheads Taipei發起人、業餘macOS/iOS開發者。 上一個生涯目標是推廣熱愛的蘋果，已達成。接下來的生涯目標是推廣熱愛的單車多元文化，用單車來改變城市。 曾主辦「沈默的騎行」呼籲重視交通安全，以及「台北裸騎」。",  
      topic:"我搞不懂浮點數：CS 101"
    },
    {
      id: _.uniqueId(),
      imgURL:"https://avatars2.githubusercontent.com/u/17181670?s=400&v=4",
      alt: "",
      name: "TinXie-易致",
      position: "",
      intro:
        "https://github.com/s2339956/Resume\r\n\r\nswift 線上讀書會 - 分享 iOS 逆向工程- Reveal基礎入門\r\nIT-Home2019資安大會 - 在iOS 系統架構下，你的app 真的無堅不摧？讓我們一起來看app 裸奔吧\r\n逢甲大學黑客社 - 概述iOS逆向攻擊\r\n2019亞太資訊安全論壇 - 雙平台下被刻板印象所忽略的手機app漏洞",  
      topic:"一起來看 app 裸奔吧～"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/Qing-Cheng-Li.jpeg"),
      alt: "",
      name: "Qing-Cheng Li",
      position: "",
      intro:
        "qcl, coding & leanring. \r\n\r\nTaiwanese, iOS developer @ Booking.com in Amsterdam, Netherlands. Former Sr. Mobile App Engineer @ Yahoo! Taiwan.   ",  
      topic:"使用 BUCK 改善編譯速度"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/Li-Heng-Hsu.png"),
      alt: "",
      name: "Li-Heng Hsu",
      position: "",
      intro:
        "獨立 App 開發者、影片創作者。擁有已上架作品 [Storyboards by narrativesaw]。AppCoda.com.tw 合作作者。[《電影冷知識：跨越銀幕之外，我們都想探索的電影製造祕密》]作者。個人網站 [https://www.lihenghsu.com]。",  
      topic:"簡易版 Combine 框架 DIY：FRP 原理探討"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "Jersey Su",
      position: "",
      intro:
        "我是哲西，目前任職於 Verizon Media, QE. 一個孩子的爸爸, 熱愛軟體測試技術, 出沒於 Test Corner 社群. 熟悉 Selenium, Cucumber 及 Appium.",  
      topic:"How to make BDD possible in Flutter"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "Lynn",
      position: "",
      intro:
        "最近看專案的代碼都抱著看鄉土劇的心態，別有一番樂趣。\r\n在跨國電子商務公司寫了六年的 iOS App；剛進公司時台灣團隊有十人以上，成員分散在三地，Code Review 會議可以開上兩天；後來 iOS6 過渡到 iOS7，設計風格從擬真轉向扁平化，藉著改版，大家一起協力重構代碼，App 上架以後，團隊也依然規律地進行代碼維護和重構；期間同事們來來去去，迎新送舊，累積很多和不同開發者、測試和 PM 協同開發的經驗；而今年初，公司決定改採用 React Native 重構 App，因為時間緊迫，有更多之前沒有合作過的異地團隊加入專案，期間經歷不少的磨合，都是滿有趣的經驗。",  
      topic:"多人專案開發你可能會碰到的那些事"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/JackyChen.jpg"),
      alt: "",
      name: "JackyChen",
      position: "",
      intro:
        "對AR有極度熱忱的白日夢工程師，幻想有一天能創造自己的異世界冒險，為此不斷的修煉自己的開發技能",  
      topic:"AR 互動遊戲開發經驗分享"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/ShihTingHuang.png"),
      alt: "",
      name: "ShihTing Huang (Neo)",
      position: "",
      intro:
        "用一口破日文在東京掙扎求生的iOS工程師，待過電子書、醫療、旅遊、串流產業，熱衷研究架構、語法、與各種能夠能夠讓人類有時間偷懶的技術。為了讓更多人有時間看電影而不是debug，偶而會寫寫Blog文章。目前在東京也有經營一個技術社群，歡迎來東京時一起來討論技術！",  
      topic:"Declarative UI on iOS (without SwiftUI)"
    },
    {
      id: _.uniqueId(),
      imgURL:"https://pbs.twimg.com/profile_images/1134379227145310209/3Nu6c7zn_400x400.jpg",
      alt: "",
      name: "Ethan Huang",
      position: "",
      intro:
        "@ethanhuang13",  
      topic:"初代 SwiftUI 就用來寫 Watch App 吧！"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/CJLin.jpg"),
      alt: "",
      name: "CJ Lin",
      position: "",
      intro:
        "LINE TW iOS NERD.\r\n新創&企業經驗兼具，技術債的創造者與還債人.\r\n正在 Scrum 的道路上 Trial and Error.",  
      topic:"大型專案生存守則 - 10x加速開發技巧"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/Mars.png"),
      alt: "",
      name: "Mars",
      position: "",
      intro:
        "A front-end team leader at LINE TV and an iOS developer with 10 years experience. 現職偶爾刷存在感的丈夫、陪毛尼玩的爸爸、剩餘時間拿來寫程式的工程師",  
      topic:"The Reborn of the Our Product."
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "Jeff Lin",
      position: "",
      intro:
        "Verizon Media資深App工程師，目前負責台灣電商App開發",  
      topic:"在想色色的事情對吧？About color in iOS"
    },
    {
      id: _.uniqueId(),
      imgURL:"https://pbs.twimg.com/profile_images/1003327371619864576/tVVbiT6w_400x400.jpg",
      alt: "",
      name: "徐嘉駿 Toby Hsu",
      position: "",
      intro:
        "## 邊緣的代表\r\n畢業於政治大學數位內容碩士學位學程，興趣為人機互動介面與使用者經驗研究，自稱為非典型工程師。目前為 CATCHPLAY 的 tvOS / iOS 工程師。",  
      topic:"為邊緣開發獻上新知 - tvOS"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "Chiaote Ni",
      position: "",
      intro:
        "Aaron Ni\r\n\r\niOS@Taipei 的固定講者之一\r\nhttps://github.com/ChiaoteNi?tab=repositories\r\n兩年iOS開發經驗\r\n專長ＵＩ繪製，興趣在Layer與CoreText，對於畫面熱衷於捲起袖子造輪子。\r\n\r\n其他部分曾經會一點點游泳跟潛水，喜歡旅遊，如果有做什麼旅遊相關的App請務必介紹給我：）",  
      topic:"關於Smart KeyPath"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "黃惠勤",
      position: "",
      intro:
        "大家好，我叫黃惠勤，來自馬來西亞，大部分台灣朋友叫我NG。從事iOS工作已長達5年，目前在台灣KKBOX iOS部門任職工程師一職。",  
      topic:"從MVC到MVVM，再到MVVMC的開發經驗分享"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/HanChang.jpg"),
      alt: "",
      name: "Han Chang",
      position: "",
      intro:
        "大家好，我是 17 Media iOS Manager－Han。\n在 17 Media iOS 團隊中負責 Streaming 相關工作，包含：維護與優化推拉流模組，解決直播斷線、延遲或卡頓問題，以及開發與 Streaming 相關的有趣新功能，例如：視訊連麥、螢幕直播、直播中的動畫特效⋯等。\n興趣是與同事一同去日本滑雪，歡迎大家一起加入滑雪的行列！ ",  
      topic:"二次元直播 - 虛擬主播與 ReplayKit 的邂逅"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/default_portrait.png"),
      alt: "",
      name: "Fengyi",
      position: "",
      intro:
        "LINE Fukuoka iOS Developer\r\n參與 LINE 本體開發. 希望能透過分享跟大家交流.\r\n",  
      topic:"Web API Mocking"
    },
    {
      id: _.uniqueId(),
      imgURL:require("../images/peterpan.jpeg"),
      alt: "",
      name: "彼得潘",
      position: "",
      intro:
        "著作: 彼得潘的 Swift 程式設計入門，App 程式設計入門－iPhone, iPad\r\niOS App 開發講師: 彼得潘的 iOS App程式設計入門，文組生的 iOS App程式設計入門\r\nBlog: 彼得潘的 App Neverland\r\nFB粉絲團: 愛瘋一切為蘋果的彼得潘\r\nApp 作品: Wealthy, LOCOMO運動記錄, 戴佩妮回家路上等二十幾款App \r\n學校講師: 台大共同教育中心，政治大學，中央大學，海洋大學，臺北大學\r\n家教: 專屬於你的 iOS APP 開發導師\r\n企業內訓:  Yahoo，聯陽半導體，世界先進，信義房屋",  
      topic:"第一次 SwiftUI App 親密接觸"
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
    },
    {
      id: _.uniqueId(),
      name: "Crystal",
      imgURL: "https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/56356650_2739201946094887_8845493078916595712_n.jpg?_nc_cat=105&_nc_oc=AQnnz9BQu89yKGXyJ9-m4oDs7S6WqgK_xrU4F2GtwAyfImxy3cHDUqmGRuC1Ic6vhB8&_nc_ht=scontent.ftpe7-4.fna&oh=df78f4571e0f3eed449053310b88c8e5&oe=5E13BC50",
      position: "iOS Developer",
      SNS: "https://www.facebook.com/liu.crystal.9"
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
      degree:"黃金贊助",
      sponorList: [
        {
          id: _.uniqueId(),
          imgURL: require("../images/logo_KKCO.png"),
          link: "https://www.kkco.com.tw",
          alt: "KlickKlack"
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
    document.getElementById("navbar").hidden = true;
  };

  onClickTopic = talk => {
    this.modalContentDataSchedule = talk;
    this.setState({ showModal: "schedule" });
    document.getElementById("navbar").hidden = true;
  };

  onCloseRequest = () => {
    this.setState({ showModal: false });
    document.getElementById("navbar").hidden = false;
  };

  renderTableRow = () =>
    _.map(
      this.sechdule[this.state.whichDay],
      ({ id, start, end, rest, isWorkshop, talks }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest={rest || null}
          talks={talks}
          isWorkshop = {null}
          onClickTopic={talk => {
            this.onClickTopic(talk);
          }}
        />
      )
    );

    renderTable = () => (
      <ul className="sechdule_table">
                  <li className="sechdule_row">           
                    <div className="sechdule_time_block"></div>
                    <div className="sechdule_room_container">
                      <div className="sechdule_block"><div className="room_lable sechdule_room_lable room_101">101</div></div>
                      <div className="sechdule_block"><div className="room_lable sechdule_room_lable room_102">102</div></div>
                      <div className="sechdule_block"><div className="room_lable sechdule_room_lable room_103">103</div></div>
                    </div>
                    </li>
                    {this.renderTableRow()}
                </ul>
    ) 
  renderWorkShopRow = (day) => _.map (
    this.workshop[day],
      ({ id, start, end, rest, isWorkshop, talks }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest={rest || null}
          talks={talks}
          isWorkshop = {true}
          onClickTopic={talk => {
            this.onClickTopic(talk);
          }}
        />
      )
  );

  renderWorkShop = () => (
    <ul className="sechdule_table">
      <li className="sechdule_row"><div className="workshop_day">9/21 day 1</div></li>
      {this.renderWorkShopRow("day_1")}
      <li className="sechdule_row "><div className="workshop_day">9/22 day 2</div></li>
      {this.renderWorkShopRow("day_2")}      
    </ul>
    
    //{renderWorkShopRow("day_2")}
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
          <NavgationBar/>
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
          <div className="app__section main_section" id="speakers-section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_ball.png")}/>
            <div className="main_section_container">
              <div className="app__title"><span className="app__title_eng">Speakers</span><span>講者</span></div>
              <div className="app__speaker-container">
                {this.renderSpeakers()}
              </div>
            </div>
          </div>
          <div className="app__section main_section" id="schedule-section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_diamond.png")}/>
            <div className="main_section_container">
             <div className="app__title"><span className="app__title_eng">Schedule</span><span>議程</span></div>
             <div className="app__sechdule-tab">
              <button
                className={
                  whichDay === "day_1" ? "app__sechdule-tab__btn app__sechdule-tab__btn--selected" : "app__sechdule-tab__btn"
                }
                onClick={() => {
                  this.setState({ whichDay: "day_1" });
                }}
                type="button"
              >
                9/21 Day 1
              </button>
              <button
                className={
                  whichDay === "day_2" ? "app__sechdule-tab__btn app__sechdule-tab__btn--selected" : "app__sechdule-tab__btn"
                }
                onClick={() => {
                  this.setState({ whichDay: "day_2" });
                }}
                type="button"
              >
                9/22 Day 2
              </button>
              <button
                className={
                  whichDay === "workshop" ? "app__sechdule-tab__btn app__sechdule-tab__btn--selected" : "app__sechdule-tab__btn"
                }
                onClick={() => {
                  this.setState({ whichDay: "workshop" });
                }}
                type="button"
              >
                workshop
              </button>
              </div>
              <div className="sechdule_container">
              {(whichDay === "workshop")? this.renderWorkShop() : this.renderTable()}
              </div>
            </div>
          </div>
          <div className="app__section main_section" id="venue-section">
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
          <div className="app__section sub_section" id="about-section">
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
          <div className="app__section sub_section" id="sponsors-section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">Sponsors</span><span>贊助</span></div>
            {this.renderSponsors()}
            </div>
          </div>
          <div className="app__section sub_section" id="coorganizers-section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">Co-organizers</span><span>合作夥伴</span></div>
            {this.renderCoOrganisers()}
            </div>
          </div>
          <div className="app__section sub_section" id="staffs-section">
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
