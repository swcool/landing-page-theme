import React, { PureComponent } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import _ from 'lodash';

import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
import TableRow from '../components/TableRow';


import './styles.css';

export default class App extends PureComponent {
  state = { showModal: false, whichDay: 'day_1' };

  modalContentData = {
    imgURL: require('../images/protrait_test.jpeg'),
    alt: '',
    name: 'Welly',
    position: 'React Developer',
    intro:
      'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
  };

  sechdule = {
    day_1: [
      {
        id: _.uniqueId(),
        start: '9:00',
        end: '10:00',
        rest: 'Sign in day 1'
      },
      {
        id: _.uniqueId(),
        start: '10:00',
        end: '11:00',
        talks: [
          { id: _.uniqueId(), topic: 'Topic day 1', name: 'Name day 1' },
          { id: _.uniqueId(), topic: 'Topic day 1', name: 'Name day 1' }
        ]
      },
      {
        id: _.uniqueId(),
        start: '11:00',
        end: '12:00',
        talks: [
          { id: _.uniqueId(), topic: 'Topic day 1', name: 'Name day 1' },
          { id: _.uniqueId(), topic: 'Topic day 1', name: 'Name day 1' }
        ]
      }
    ],
    day_2: [
      {
        id: _.uniqueId(),
        start: '9:00',
        end: '10:00',
        rest: 'Sign in day 2'
      },
      {
        id: _.uniqueId(),
        start: '10:00',
        end: '11:00',
        talks: [
          { id: _.uniqueId(), topic: 'Topic day 2', name: 'Name day 2' },
          { id: _.uniqueId(), topic: 'Topic day 2', name: 'Name day 2' }
        ]
      },
      {
        id: _.uniqueId(),
        start: '11:00',
        end: '12:00',
        talks: [
          { id: _.uniqueId(), topic: 'Topic day 2', name: 'Name day 2' },
          { id: _.uniqueId(), topic: 'Topic day 2', name: 'Name day 2' }
        ]
      }
    ]
  };

  speakers = [
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    }
  ];

  staff = [
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/protrait_test.jpeg'),
      alt: '',
      name: 'Welly',
      position: 'React Developer',
      intro:
        'This is intro This is intro This is intro This is intro This is intro This is intro This is intro.'
    }
  ];

  sponors = [];

  coOrganisers = [
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_cocoaheads_taipei.png'),
      link: 'https://www.facebook.com/groups/cocoaheads.taipei/',
      alt: 'Cocoaheads Taipei'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_iOS_taipei.png'),
      link: 'https://www.facebook.com/groups/ios.taipei/',
      alt: 'iOS Taipei'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_swift_taipei.png'),
      link: 'https://www.meetup.com/Swift-Taipei-User-Group/',
      alt: 'Swift Taipei'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_swift_girls.png'),
      link: 'https://www.facebook.com/groups/1260405513988915/',
      alt: 'Swift Girls'
    }
  ]

  onClickSpeaker = () => {
    this.setState({ showModal: true });
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
        />
      )
    );

  renderSpeakers = () => _.map(
    this.speakers,
    ({ id, imgURL, alt, name, position }) => (
      <div key={id} className="app__speaker" onClick={this.onClickSpeaker}>
        <img className="app__speaker-img" src={imgURL} alt={alt} />
        <p className="app__speaker-name">
          <strong>{name}</strong>
        </p>
        <p className="app__speaker-position">{position}</p>
      </div>
    )
  );

  renderStaff = () => _.map(
    this.staff,
    ({ id, imgURL, alt, name, position }) => (
      <div key={id} className="app__speaker" onClick={this.onClickSpeaker}>
        <img className="app__speaker-img" src={imgURL} alt={alt} />
        <p className="app__speaker-name">
          <strong>{name}</strong>
        </p>
        <p className="app__speaker-position">{position}</p>
      </div>
    )
  );

  renderSponsors = () => _.map(this.sponors, ({ id, imgURL, link, alt }) => (
    <div key={id} className="app__sponsor">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="app__sponsor-logo" src={imgURL} alt={alt} />
      </a>
    </div>
  ));

  renderCoOrganisers = () => _.map(this.coOrganisers, ({ id, imgURL, link, alt }) => (
    <div key={id} className="app__sponsor">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="app__sponsor-logo" src={imgURL} alt={alt} />
      </a>
    </div>
  ));

  render() {
    const { whichDay } = this.state;
    const mailChimpURL = "https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&amp;id=b804a3d8e0" ;

    return (
      <div className="app">
        <div className="app__container">
          <img
            className="app__iplayground-logo"
            src={require('../images/logo_iplayground.png')}
            alt="iPlayground"
          />
          <div className="app__section">
            <h1 className="app__title">10/20 - 10/21 @ 台大管理學院</h1>
            <p>
              iPlayground 是在台北舉辦的 Apple 軟體開發相關的研討會，名字來自於
              Xcode 內建的開發工具 Playground，我們希望開發者、設計師、QA、PM
              都可以在這邊交換想法，分享所學我們歡迎有興趣的朋友一同加入
              iPlayground 並且認識更多同好。
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
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
            <iframe
              title="location"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=%E5%8F%B0%E5%A4%A7%E7%AE%A1%E7%90%86%E5%AD%B8%E9%99%A2&key=AIzaSyBIrI6CGIsBb7W9s5hvIXoZrsWG1J0ek1k"
              allowFullScreen
            />
          </div>
          {/* disable for now
          <div className="app__section">
            <h1 className="app__title">Schedule</h1>
            <div className="app__sechdule-tab">
              <button
                className={
                  whichDay === 'day_1' ? 'app__sechdule-tab__btn--selected' : ''
                }
                onClick={() => {
                  this.setState({ whichDay: 'day_1' });
                }}
                type="button"
              >
                Day 1
              </button>
              <button
                className={
                  whichDay === 'day_2' ? 'app__sechdule-tab__btn--selected' : ''
                }
                onClick={() => {
                  this.setState({ whichDay: 'day_2' });
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
            <h1 className="app__title">Speakers</h1>
            {this.renderSpeakers()}
          </div>
          <div className="app__section">
            <h1 className="app__title">Staff</h1>
            {this.renderStaff()}
          </div>
          <div className="app__section">
            <h1 className="app__title">Sponsors</h1>
            {this.renderSponsors()}
          </div>
         */}
          <div className="app__section">
            <h1 className="app__title">Co-organisers</h1>
            {this.renderCoOrganisers()}
          </div>
        </div>
        <Modal
          visible={this.state.showModal}
          onCloseRequest={this.onCloseRequest}
        >
          <ModalContent
            {...this.modalContentData}
            onClickCloseBtn={this.onCloseRequest}
          />
        </Modal>
      </div>
    );
  }
}
