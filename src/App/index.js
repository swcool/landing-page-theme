import React from 'react';
import './styles.css';

export default () => (
  <div className="app">
    <div className="app__container">
      <h1 className="app__title--center app__main-title">iPlayground</h1>
      <hr />
      <h2 className="app__title--center">10/20 - 10/21 @ 台大管理學院</h2>
      <p>
        iPlayground 是在台北舉辦的 Apple 軟體開發相關的研討會，名字來自於 Xcode
        內建的開發工具 Playground，我們希望開發者、設計師、QA、PM
        都可以在這邊交換想法，分享所學我們歡迎有興趣的朋友一同加入 iPlayground
        並且認識更多同好。
      </p>
      <a
        className="app__submit"
        href="https://cfp.iplayground.io/events/iplayground_2018"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>2018 議程募集中</strong>
      </a>
      <h3 className="app__title--center">協辦單位</h3>
    </div>
  </div>
);
