import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import _ from "lodash";

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
        end: "10:00",
        rest: "Sign in day 1"
      },
      {
        id: _.uniqueId(),
        start: "10:00",
        end: "11:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Topic day 1",
            presenter: "Name day 1",
            description: "Here is day 1 topic description."
          },
          {
            id: _.uniqueId(),
            topic: "Topic day 1",
            presenter: "Name day 1",
            description: "Here is day 1 topic description."
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "11:00",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Topic day 1",
            presenter: "Name day 1",
            description: "Here is day 1 topic description."
          },
          {
            id: _.uniqueId(),
            topic: "Topic day 1",
            presenter: "Name day 1",
            description: "Here is day 1 topic description."
          }
        ]
      }
    ],
    day_2: [
      {
        id: _.uniqueId(),
        start: "9:00",
        end: "10:00",
        rest: "Sign in day 2"
      },
      {
        id: _.uniqueId(),
        start: "10:00",
        end: "11:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Topic day 2",
            presenter: "Name day 2",
            description: "Here is day 2 topic description."
          },
          {
            id: _.uniqueId(),
            topic: "Topic day 2",
            presenter: "Name day 2",
            description: "Here is day 2 topic description."
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "11:00",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Topic day 2",
            presenter: "Name day 2",
            description: "Here is day 2 topic description."
          },
          {
            id: _.uniqueId(),
            topic: "Topic day 2",
            presenter: "Name day 2",
            description: "Here is day 2 topic description."
          }
        ]
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
      position: "iOS Manager at KKBOX",
      intro:
        "zonble，從 2005 年開始寫 Objective-C，從 2008 年 iPhone SDK 釋出的第一天開始就開始投入 iOS 開發，長期在 KKBOX 任職以及參與台北 Cocoa-heads 活動，在網路上發佈電子書《KKBOX iOS 開發基本教材》。才華與美貌兼具，智慧與善良並重，人間大愛的體現，心智年齡從來沒有超過十四歲的中二工程師。"
    },
    {
      id: _.uniqueId(),
      name: "藍永倫",
      imgURL:
        "https://pbs.twimg.com/profile_images/614453401192038400/pvulZ6Qb_400x400.png",
      position: "Cocoaheads Taipei發起人",
      intro:
        " 現任職於博智雲端科技用python寫web app，下班後的身份是台灣城市單車聯盟理事、Cocoaheads Taipei發起人、業餘macOS/iOS開發者。 上一個生涯目標是推廣熱愛的蘋果，已達成。接下來的生涯目標是推廣熱愛的單車多元文化，用單車來改變城市。 曾主辦「沈默的騎行」呼籲重視交通安全，以及「台北裸騎」。 "
    },
    {
      id: _.uniqueId(),
      name: "John Lin",
      imgURL: "https://avatars3.githubusercontent.com/u/529248?s=460&v=4",
      position: "Swift Taipei Organizer",
      intro:
        "Organizer of Swift Taipei. Full-stack developer.  iOS developer. Language Nerd. FP lover."
    },
    {
      id: _.uniqueId(),
      name: "張景隆",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "N/A",
      intro:
        "CWMoney 開發者, i統一發票 開發者, 台大 HackNTU - iOS 課程講師, 東海大學 教學卓越計畫 講師, 教育部開放式課程-程式開發講師, 東山高中 CS50 講師, MOPCON 2014 講者, CodeData 作者, iOS Dev Club 講者 & 核心成員, 參加蘋果官方主辦 2013年 Tech Talk, 麥克自由聚(Apple, Mac, iOS 相關) 講者"
    },
    {
      id: _.uniqueId(),
      name: "Jersey Su",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "SQA @ honestbee",
      intro: "我是哲西, 熱愛軟體測試. 出沒於 Test Corner 社群."
    },
    {
      id: _.uniqueId(),
      name: "Enid Tian",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "N/A",
      intro:
        "She joined AppWorks as an intern in 2011 and stayed on as Analyst after graduation. Enid received her B.A. in Finance from National Taiwan University, with “minors” in AIESEC and Ballroom Dancing Club."
    },
    {
      id: _.uniqueId(),
      name: "鄭雅方",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "Founder @ APP Girls",
      intro: "APP Girls 創辦人."
    },
    {
      id: _.uniqueId(),
      name: "David Lin",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "替代役 online",
      intro:
        "自由工作者，目前替代役 online 中。對程式架構、自動化有濃厚興趣，喜歡爬山、攝影、宅在家追劇。"
    },
    {
      id: _.uniqueId(),
      name: "Tina Chang",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "N/A",
      intro:
        "Swift 語言趨近穩定的現在，大多數公司開發新專案沒意外都會選擇 Swift，但對於歷史悠久的龐大專案，其程式碼沒有這麼容易通通轉成 Swift，混用，就是個不得已但必需的方案，而我任職的公司就屬於後者，希望能透過分享和大家交流經驗 :)"
    },
    {
      id: _.uniqueId(),
      name: "徐嘉駿 Toby Hsu",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "N/A",
      intro:
        "原本我是個 iOS 開發者，但過去這一年多半的時間都在開發 tvOS，我想我可以分享的是我原本以為 iOS 可以跟 tvOS 和平相處，沒想到他們意外地在某些小地方鬧彆扭的愛情故事。"
    },
    {
      id: _.uniqueId(),
      name: "AKI YU",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "iOS @ Taipei 傳教士",
      intro: "iOS @ Taipei 傳教士"
    },
    {
      id: _.uniqueId(),
      name: "Vivian Liu",
      imgURL: require("../images/protrait_test.jpeg"),
      position: "SQA @ KKBOX",
      intro:
        "Hi 我是 Vivian ，目前任職於 KKBOX，是 KKBOX Application 的 Software Quality Assurance。主要負責的領域是 KKBOX iOS Application Automation，採用的測試框架為 XCUITest。一路以來收穫了不少能讓 XCUITest 穩定度及速度提升的技巧，並且成功讓我們的 Flaky rate 降到現在的 1.37%。誠心希望這場分享能夠讓大家有所收穫。"
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
      alt: "Esun Bank"
    }
  ];

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
    this.modalContentDataSpeakers = _.find(this.speakers, { id: id });
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
    _.map(this.sponors, ({ id, imgURL, link, alt }) => (
      <div key={id} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__sponsor-logo" src={imgURL} alt={alt} />
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
      <div className="app">
        <div className="app__container">
          <img
            className="app__iplayground-logo"
            src={require("../images/logo_iplayground.png")}
            alt="iPlayground"
          />
          <div className="app__section">
            <h1 className="app__title">10/20 - 10/21 @ 台大管理學院</h1>
            <a
              className="app__submit"
              href="https://iplayground.kktix.cc/events/iplayground2018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>立刻購票</strong>
            </a>
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
              href="https://cfp.iplayground.io/events/iplayground_2018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>2018 議程募集中</strong>
            </a>
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
              src="https://www.google.com/maps/embed/v1/place?q=%E5%8F%B0%E5%A4%A7%E7%AE%A1%E7%90%86%E5%AD%B8%E9%99%A2&key=AIzaSyBIrI6CGIsBb7W9s5hvIXoZrsWG1J0ek1k"
              allowFullScreen
            />
            <h2 className="app__title">活動緣起</h2>
            <p>
              自從蘋果發表 iPhone 以來，iOS
              開發就是業界重要的題⽬。國外有無數的地區型開發者研討會，甚⾄有跨國巡迴式的專⾨組織。但是以往在台灣地區舉辦的開發者研討會中，iOS
              只是其中一個配⾓。
            </p>
            <p>
              2017.9，台灣有一群⼯程師去東京參加 iOSDC（<a
                href="https://iosdc.jp/2017/"
                target="_blank"
              >
                https://iosdc.jp/2017/
              </a>），看到⽇本當地開發社群的蓬勃活力，兼具深度、廣度的諸多講題及趣味的舉辦⽅式，其中有許多台灣社群可以學習之處。
            </p>
            <p>
              我們意識到開發社群有強烈的需求，決定在台北辦⼀場 iOS
              開發專⾨的研討會。
            </p>
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
                  <th>Room A</th>
                  <th>Room B</th>
                </tr>
                {this.renderTableRow()}
              </tbody>
            </table>
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
