import React from 'react';
import _ from 'lodash';

import './styles.css';

export default () => {
  const sponors = [
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_cocoaheads_taipei.jpg'),
      link: 'http://cocoaheads.tw/',
      alt: 'Cocoaheads Taipei'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_iOS_taipei.jpg'),
      link: 'https://ios.taipei/',
      alt: 'iOS Taipei'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_swift_girls.jpg'),
      link: 'http://cocoaheads.tw/',
      alt: 'Swift Girls'
    },
    {
      id: _.uniqueId(),
      imgURL: require('../images/logo_swift_taipei.jpg'),
      link: 'http://cocoaheads.tw/',
      alt: 'Swift Taipei'
    }
  ];

  return (
    <div className="app">
      <div className="app__container">
        <img
          className="app__iplayground-logo"
          src={require('../images/logo_iplayground.png')}
          alt="iPlayground"
        />
        <div className="app__section">
          <h1 className="app__title--center">10/20 - 10/21 @ 台大管理學院</h1>
          <p>
            iPlayground 是在台北舉辦的 Apple 軟體開發相關的研討會，名字來自於
            Xcode 內建的開發工具 Playground，我們希望開發者、設計師、QA、PM
            都可以在這邊交換想法，分享所學我們歡迎有興趣的朋友一同加入
            iPlayground 並且認識更多同好。
          </p>
          <a
            className="app__submit"
            href="https://cfp.iplayground.io/events/iplayground_2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>2018 議程募集中</strong>
          </a>
        </div>
        <div className="app__section">
          <h1 className="app__title--center">協辦單位</h1>
          {_.map(sponors, ({ id, imgURL, link, alt }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <img className="app__sponsor-logo" src={imgURL} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
