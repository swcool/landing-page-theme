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
import staffsListJson from "../App/JsonData/staffs.json"
import activityPicturesJson from "../App/JsonData/activityPictures.json"

import './i18n'; // 在这里导入 i18n.js
import { Trans } from 'react-i18next';

export default class App extends PureComponent {
  state = { showModal: false, whichDay: "day_1" , programs: [], sponsors:null, speakers:null};

  componentDidMount = async () => {
    //const data = await 
    await fetch('https://raw.githubusercontent.com/iplayground/SessionData/2020/v1/program.json')
    .then(response => response.json())
    .then(data => {
      //console.log(data.program)
      this.setState({programs: data.program})
    });

    await fetch('https://raw.githubusercontent.com/iplayground/SessionData/2020/v1/sponsors.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({sponsors: data})
    });

    await fetch('https://raw.githubusercontent.com/iplayground/SessionData/2020/v1/speakers.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({speakers: data})
    });
  }

  onClickSpeaker = id => {
    const speakersList = this.state.speakers ? this.state.speakers.speakers : null
    this.modalContentDataSpeakers = _.find(speakersList, { id });
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
      this.schedule[this.state.whichDay],
      ({ id, start, end, rest, isWorkshop, talks }) => {

        var row = (<TableRow
          key={id}
          start={start}
          end={end}
          rest={rest || null}
          talks={talks}
          isWorkshop = {null}
          programs = {this.state.programs}
          onClickTopic={talk => {
            this.onClickTopic(talk);
          }}
        />)
        return row
      } 
    );

    
    renderTable = () => (
      <ul className="schedule_table">
                  <li className="schedule_row">           
                    <div className="schedule_time_block"></div>
                    <div className="schedule_room_container">
                      <div className="schedule_block"><div className="room_lable schedule_room_lable room_101">101</div></div>
                      <div className="schedule_block"><div className="room_lable schedule_room_lable room_102">102</div></div>
                      <div className="schedule_block"><div className="room_lable schedule_room_lable room_103">103</div></div>
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
          programs = {this.state.programs}
          onClickTopic={talk => {
            this.onClickTopic(talk);
          }}
        />
      )
  );

  renderWorkShop = () => (
    <ul className="schedule_table">
      <li className="schedule_row"><div className="workshop_day">9/21 day 1</div></li>
      {this.renderWorkShopRow("day_1")}
      <li className="schedule_row "><div className="workshop_day">9/22 day 2</div></li>
      {this.renderWorkShopRow("day_2")}      
    </ul>    
  );

  programObject = (id) => {
    var program = this.state.programs.find(function(element) {
      return element.id === id;
    })
    console.log(program)
    if (program != null) {
    return program.title; }
  }

  renderSpeakers = () => {
    const speakersList = this.state.speakers ? this.state.speakers.speakers : null
    return _.map(speakersList, ({ id, imgURL, alt, name, position }) => (
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
  }

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


    renderStaff = () => {
      const staffsList = staffsListJson ? staffsListJson.staff : null

      return _.map(staffsList, ({ id, imgURL, alt, name, position, SNS }) => (
      
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
    }


    renderSponsors = () => {
      const sponsorsList = this.state.sponsors ? this.state.sponsors.sponsors : null
      
      return _.map(sponsorsList, ({title,items}) => (
        <div key= {_.uniqueId()} className={title == "黃金級" ? "app__sponsor-gold-container" : "staff_team_container"}>
        <div className="section_sub_title">{title}</div>
         {
           items.map( ({picture,link,name}) => 
           <div key={_.uniqueId()} className="app__sponsor">
           <a href={link} target="_blank" rel="noopener noreferrer">
             <img className={title == "黃金級" ? "app__sponsor-gold" : "app__sponsor-logo"} src={picture} alt={name}/>
           </a>
          </div>
          )
        }
        </div>
      ));
    }
    

  renderCoOrganisers = () => {
    const partners = this.state.sponsors ? this.state.sponsors.partner : null

    return _.map(partners, ({ icon, link, name }) => (
      <div key={_.uniqueId()} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__CoOrganisers-logo" src={icon} alt={name} />
        </a>
      </div>
    ));
  }

  renderPictures = () => {
    const activityPicturesList = activityPicturesJson ? activityPicturesJson.activityPictures : null
      return _.map(activityPicturesList, ({ id, imgURL, name, SNS }) => (
        <a key={id} href={SNS} target="_blank">
          <div className="app__speaker">
            <img className="app__speaker-square-img" src={require(`./images/${imgURL}`)}/>
            <p className="app__speaker-name">
              <strong>{name}</strong>
            </p>
            {/* <p className="app__speaker-position">{position}</p> */}
          </div>
        </a>
      ));
  }

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
              src="./logo_image.png"
              alt="iPlayground"
            />
            <br/>
            <p className="logo-info" style={{fontSize:"5vmin"}}>
            <i className="fas fa-map-marker-alt"></i>
                  {<Trans>location.name</Trans>}
              <br/>
              {<Trans>date</Trans>}
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
                <ActionButton title={<Trans>underAboutUs.button.sponsor</Trans>} link="https://bit.ly/iplayground-2020-sponsors" />
                {/* <ActionButton title={<Trans>underAboutUs.button.becomeASpeaker</Trans>} link="https://cfp.iplayground.io/events/iplayground_2020" />  */}
             </div>
             <div className="section_action_container" style={{marginTop:"1em"}}>
               <a href="https://twitter.com/theiPlayground" target="_blank"><i className="fab fa-twitter social_icon twitter_icon"></i></a>
               <a href="https://t.me/iPlayground" target="_blank"><i className="fab fa-telegram social_icon telegram_icon"></i></a>
               <a href="https://t.me/iPlaygroundAnnouncement" target="_blank"><i className="fas fa-bullhorn social_icon telegram_icon" style={{fontSize:"24pt"}}></i></a>
               <a href="https://www.facebook.com/theiPlayground/" target="_blank"><i className="fab fa-facebook social_icon facebook_icon"></i></a>
             </div>
             {/* <div className="section_action_container">
               <a href="https://apps.apple.com/tw/app/iplayground-19/id1367423535?mt=8" style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/zh-tw/badge-lrg.svg?releaseDate=2018-10-03&kind=iossoftware&bubble=ios_apps) no-repeat",width:"135px",height:"40px",verticalAlign: "middle"}}></a>
               <a href='https://play.google.com/store/apps/details?id=net.zonble.iplayground19&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Google Play立即下載' src='https://play.google.com/intl/en_us/badges/images/generic/zh-tw_badge_web_generic.png' style={{height:"60px",verticalAlign: "middle"}}/></a>
             </div> */}
             </div>

          {/* Speakers講者 */}
          <div className="app__section main_section" id="speakers-section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_ball.png")}/>
            <div className="main_section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>speakers.title</Trans>}</span><span>{<Trans>speakers.title2</Trans>}</span></div>
              <div className="app__speaker-container">
                {this.renderSpeakers()}
              </div>
            </div>
          </div>

          {/* Schedule議程 */}
          {/* <div className="app__section main_section" id="schedule-section">
            <img className="main_section_logo" src={require("../images/iplayground_logo_diamond.png")}/>
            <div className="main_section_container">
             <div className="app__title"><span className="app__title_eng">Schedule</span><span>議程</span></div>
             <div className="app__schedule-tab">
              <button
                className={
                  whichDay === "day_1" ? "app__schedule-tab__btn app__schedule-tab__btn--selected" : "app__schedule-tab__btn"
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
                  whichDay === "day_2" ? "app__schedule-tab__btn app__schedule-tab__btn--selected" : "app__schedule-tab__btn"
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
                  whichDay === "workshop" ? "app__schedule-tab__btn app__schedule-tab__btn--selected" : "app__schedule-tab__btn"
                }
                onClick={() => {
                  this.setState({ whichDay: "workshop" });
                }}
                type="button"
              >
                workshop
              </button>
              </div>
              <div className="schedule_container">
              {(whichDay === "workshop")? this.renderWorkShop() : this.renderTable()}
              </div>
            </div>
          </div> */}

          {/* Venue 場地 */}
          <div className="app__section sub_section" id="venue-section">
          <img className="main_section_logo" src={require("../images/iplayground_logo_stairs.png")}/>
          <div className="section_container">
          <div className="app__title"><span className="app__title_eng">{<Trans>venue.title</Trans>}</span><span>{<Trans>venue.title2</Trans>}</span></div>
          <p>
            <i className="fas fa-map-marker-alt"></i>
                  {<Trans>location.name</Trans>}
              <br/><br/>
              {<Trans>location</Trans>}
          </p>

            <iframe
              title={<Trans>location</Trans>}
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.862925961839!2d121.51648511507155!3d25.038725483970115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a975c13ae63d%3A0x99f529730969be7f!2z5by15qau55m85Z-66YeR5pyD!5e0!3m2!1szh-TW!2stw!4v1598889656465!5m2!1szh-TW!2stw"
              allowFullScreen
            />
            <p>
              {<Trans>venue.tafficTitle</Trans>}  
              <br/><br/>
              {<Trans>venue.busTitle</Trans>}
              <br/>
              {<Trans>venue.busContent.firstSentence</Trans>}
              <br/>
              {<Trans>venue.busContent.secondSentence</Trans>}
              <br/><br/>
              {<Trans>venue.MRTTitle</Trans>}
              <br/>
              {<Trans>venue.MRTContent.firstSentence</Trans>}
              <br/>
              {<Trans>venue.MRTContent.secondSentence</Trans>}
              <br/><br/>
              {<Trans>venue.parkingTitle</Trans>}
              <br/>
              {<Trans>venue.parkingContent.firstSentence</Trans>}
              <br/>
              {<Trans>venue.parkingContent.secondSentence</Trans>}
            </p>
            </div>
          </div>

          {/* About關於我們 */}
          <div className="app__section sub_section" id="about-section">
          <div className="section_container">
          <div className="app__title"><span className="app__title_eng">{<Trans>aboutUs.title</Trans>}</span><span>{<Trans>aboutUs.title2</Trans>}</span></div>
            <p>
              {<Trans>aboutUs.content.firstSentence.one</Trans>}<a href="https://iosdc.jp/2017/" target="_blank">iOSDC</a> {<Trans>aboutUs.content.firstSentence.second</Trans>}
            </p>
            <p>
              {<Trans>aboutUs.content.secondSentence</Trans>}
            </p>
            <p>
              {<Trans>aboutUs.content.thirdSentence</Trans>}
            </p>
            {/* 活動照片 */}
            {/* <div className="app__title"><span className="app__title_eng">Photos</span><span>活動照片</span></div> */}
            {this.renderPictures()}
            </div>
          </div>

          {/* Sponsorships贊助商 */}
          <div className="app__section sub_section" id="sponsors-section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_smaller_eng" >{<Trans>sponsorships.title</Trans>}</span><span>{<Trans>sponsorships.title2</Trans>}</span></div>
            {this.renderSponsors()}
            </div>
          </div>

          {/* Co-organizers合作夥伴 */}
          <div className="app__section sub_section" id="coorganizers-section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">{<Trans>CoOrganizers.title</Trans>}</span><span>{<Trans>CoOrganizers.title2</Trans>}</span></div>
            {this.renderCoOrganisers()}
            </div>
          </div>

          {/* Staffs工作人員 */}
          <div className="app__section sub_section" id="staffs-section">
          <div className="section_container">
            <div className="app__title"><span className="app__title_eng">{<Trans>staff.title</Trans>}</span><span>{<Trans>staff.title2</Trans>}</span></div>
            {this.renderStaff()}
            </div>
            
            <p style={{textAlign:"center"}}>
              {<Trans>allRightsReserved</Trans>}  
            </p>

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
              speakers = {this.speakers}
            />
          )}
        </Modal>
      </div>
    );
  }
}
