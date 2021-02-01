import { el, mount } from 'redom';
import Language from './Language';
import Utilities from "./Utilities";

export default class Interface {

  constructor() {
    this.elements = {};
  }


  buildStyle() {
    return el('style',
      '#cconsent-bar, #cconsent-bar * { box-sizing:border-box }',
      '#cconsent-bar { background-color:' + window.CookieConsent.config.theme.barColor + '; color:' + window.CookieConsent.config.theme.barTextColor + '; padding:15px; text-align:right; font-family:sans-serif; font-size:14px; line-height:18px; position:fixed; bottom:0; left:0; width:100%; z-index:9998; transform: translateY(0); transition: transform .6s ease-in-out; transition-delay: .3s;}',
      '#cconsent-bar.ccb--hidden {transform: translateY(100%); display:block;}',
      '#cconsent-bar .cc-text {font-weight: 700; font-size: 15px; line-height: 22px; }',
      '#cconsent-bar .ccb__wrapper { display:flex; flex-wrap:wrap; justify-content:space-between; max-width:1800px; margin:0 auto;}',
      '#cconsent-bar .ccb__left { align-self:center; text-align:left; margin: 15px 0;}',
      '#cconsent-bar .ccb__left a { margin-left: 5px;}',
      '#cconsent-bar .ccb__right { align-self:center; white-space: nowrap;}',
      '#cconsent-bar .ccb__right > div {display:inline-block; color:#FFF;}',
      '#cconsent-bar a { text-decoration:underline; color:' + window.CookieConsent.config.theme.barTextColor + '; }',
      '#cconsent-bar button { margin-left: 16px; line-height:normal; font-weight: 600; font-size:13px; border:none; padding:9.5px 16px; border-radius: 4px; }',
      '#cconsent-bar button.consent-reject { color:' + window.CookieConsent.config.theme.barSecondaryButtonTextColor + '; background-color:' + window.CookieConsent.config.theme.barSecondaryButtonColor + ';}',
      '#cconsent-bar button.consent-give { color:' + window.CookieConsent.config.theme.barMainButtonTextColor + '; background-color:' + window.CookieConsent.config.theme.barMainButtonColor + ';}',
      '#cconsent-bar a.ccb__edit { color: #FFF; font-size: 12px; text-decoration: underline; }',
      '#cconsent-bar a:hover, #cconsent-bar button:hover { cursor:pointer; }',
      '#cconsent-modal { display:none; font-size:14px; line-height:18px; color:#666; width: 100vw; height: 100vh; position:fixed; left:0; top:0; right:0; bottom:0; font-family:sans-serif; font-size:14px; background-color:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center;}',
      '@media (max-width: 600px) { #cconsent-modal { height: 100% } }',
      '#cconsent-modal h2, #cconsent-modal h3 {color:#333}',
      '#cconsent-modal.ccm--visible {display:flex}',
      '#cconsent-modal .ccm__content { max-width:600px; max-height:600px; padding: 24px; overflow-Y:auto; background-color:#FFFFFF; }',
      '@media (max-width: 600px) { #cconsent-modal .ccm__content { max-width:100vw; height:100%; max-height:initial; }}',
      '#cconsent-modal .ccm__content > .ccm__content__heading { background-color:#FFFFFF; position:relative;}',
      '#cconsent-modal .ccm__content > .ccm__content__heading h2 { font-size:18px; line-height: 27px; font-weight:600; color:#00002E; margin:0 }',
      '#cconsent-modal .ccm__content > .ccm__content__heading p { margin-top: 8px; font-size:12px; line-height: 22px; font-weight:400; color:#00002E; margin:0 }',
      '#cconsent-modal .ccm__content > .ccm__content__heading .ccm__cheading__close {font-weight:600; color:#7C899C; cursor:pointer; font-size:26px; position: absolute; right: 0; top: 0;}',
      '#cconsent-modal h2, #cconsent-modal h3 {margin-top:0}',
      '#cconsent-modal .ccm__content > .ccm__content__body { background-color:#FFF;}',
      '#cconsent-modal .ccm__content .ccm__tabs { margin: 24px 0;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup {margin:0 0 10px; background: rgba(0,0,90,0.02);}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head::before { position:absolute; left:35px; font-size:1.4em; font-weight: 600; color:#E56385; content:"×"; display:inline-block; margin-right: 20px; content: none}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.checked-5jhk .ccm__tab-head::before {font-size:1em; content:"✔"; color:#28A834; content: none}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__tab-head__icon-wedge { transition: transform .3s ease-out; transform-origin: 16px 6px 0; position:absolute;right:25px; top:50%; transform:rotate(0deg); transform:translateY(-50%)}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__tab-head__icon-wedge > svg { pointer-events: none; }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch-component {display:inline-block; align-items:center;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch-component > div {font-weight:600;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch-group {width:40px; height:20px; margin:0 10px; position:relative;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch {position: absolute; top:0; right:0; display: inline-block; width: 40px; height: 20px;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch input {display:none;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch .ccm__switch__slider  {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #A6B1BF; border-radius:10px; -webkit-transition: .4s; transition: .4s;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch .ccm__switch__slider:before  {position: absolute; content: ""; height: 12px; width: 12px; left: 4px; bottom: 4px; background-color: white; border-radius:50%; -webkit-transition: .4s; transition: .4s;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch input:checked + .ccm__switch__slider  {background-color: #4900FF;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch input:focus + .ccm__switch__slider  {box-shadow: 0 0 1px #28A834;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch input:disabled + .ccm__switch__slider  {background-color: #E2E8F0;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__switch input:checked + .ccm__switch__slider:before  {-webkit-transform: translateX(20px); -ms-transform: translateX(20px); transform: translateX(20px);}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-head .ccm__tab-head__icon-wedge {transform:rotate(-180deg)}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head {color: #4C5566; padding:16px; margin:0; display: flex;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content {padding: 20px; margin:0; background: #FFF; border: 1px solid rgba(0,0,90, 0.05); border-top: none}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head { transition: background-color .5s ease-out }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head:hover { background-color:#F9F9F9 }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head {font-weight:400; cursor:pointer; position:relative; font-size: 13px; line-height: 22px;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-content {display:none;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-head { background-color:#F9F9F9 }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-content {display:flex; flex-direction: column; }',
      '@media (max-width: 600px) { #cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-content {flex-direction:column} }',
      '@media (max-width: 600px) { #cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left { margin-bottom:20px; } }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch-component {display:flex; margin-right:35px; align-items:center;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch-component > div {font-weight:600;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch-group {width:40px; height:20px; margin:0 10px; position:relative;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch {position: absolute; top:0; right:0; display: inline-block; width: 40px; height: 20px;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input {display:none;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch .ccm__switch__slider  {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; border-radius:10px; -webkit-transition: .4s; transition: .4s;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch .ccm__switch__slider:before  {position: absolute; content: ""; height: 12px; width: 12px; left: 4px; bottom: 4px; background-color: white; border-radius:50%; -webkit-transition: .4s; transition: .4s;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input:checked + .ccm__switch__slider  {background-color: #28A834;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input:focus + .ccm__switch__slider  {box-shadow: 0 0 1px #28A834;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input:checked + .ccm__switch__slider:before  {-webkit-transform: translateX(20px); -ms-transform: translateX(20px); transform: translateX(20px);}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content h3 {font-size:18px; margin-bottom:10px; line-height:1;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content p {color:#00002E; margin-bottom:0; margin-top: 0; font-size: 12px; line-height: 22px;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list:not(:empty) { margin-top:0px; }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list .ccm__list__title {color:#333; font-weight:600;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list ul { color: #00002E; font-size: 12px; line-height: 22px; margin:15px 0; padding-left:30px; list-style: none}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list li { position: relative; margin: 4px 0 0;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list li:before { content: "X"; position: absolute; left: -20px; background: #E2E8F0; color: #FFF;width: 12px; height: 12px; line-height: 12px; text-align: center; top: 3px; padding: 2px; box-sizing: content-box; border-radius: 4px; }',
      '#cconsent-modal .ccm__footer { padding-top:24px; background-color:#FFFFFF; text-align:left; border-top: 1px solid #E2E8F0;}',
      '#cconsent-modal .ccm__footer button.consent-reject { float: right; background-color:' + window.CookieConsent.config.theme.modalSecondaryButtonColor + '; color:' + window.CookieConsent.config.theme.modalSecondaryButtonTextColor + '; }',
      '#cconsent-modal .ccm__footer button.consent-give { float: right }',
      '#cconsent-modal .ccm__footer button { margin-left: 10px; line-height:normal; font-size:14px; transition: background-color .5s ease-out; background-color:' + window.CookieConsent.config.theme.modalMainButtonColor + '; color:' + window.CookieConsent.config.theme.modalMainButtonTextColor + '; border:none; padding: 12.5px 24px; border-radius: 4px; cursor:pointer; line-height: 15px; font-size: 15px; font-weight: 400 }',
      '#cconsent-modal #ccm__footer__consent-modal-submit{ background: none; color: #4900FF; }',
      '#cconsent-modal .ccm__footer button:hover { background-color:' + Utilities.lightenDarkenColor(window.CookieConsent.config.theme.modalMainButtonColor, -20) + '; }',
      '#cconsent-modal .ccm__footer button#ccm__footer__consent-modal-submit {  margin-right:10px; }'
      );
  }

  buildBar() {
    return el('div#cconsent-bar.ccb--hidden',
        el(`div.ccb__wrapper`,
          el('div.ccb__left',
            el('div.cc-text', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barMainText'),
              (window.CookieConsent.config.barMainTextMoreLink) ? el('a', { href: window.CookieConsent.config.barMainTextMoreLink, target: '_blank', rel: 'noopener noreferrer' }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barLearnMore')) : null
            )
          ),
          el('div.ccb__right',
            el('div.ccb__button',
              el('a.ccb__edit', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barLinkSetting')),
              el('button.consent-reject', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnRejectAll')),
              el('button.consent-give', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnAcceptAll'))
            )
          )
        ),
      );
  }

  buildModal() {

    // Cookie names list middleware
    var listCookies = function(category) {
      var list = [];

      for(let service in window.CookieConsent.config.services) {
        (window.CookieConsent.config.services[service].category === category) && list.push(window.CookieConsent.config.services[service]);
      }

      if(list.length) {

        var listItems = [];

        for(let item in list) {
          listItems.push(el('li', Language.getTranslation(list[item], window.CookieConsent.config.language.current, 'name')));
        }

        return [
          el('ul', listItems)
        ];
      }
    }

    function modalTabGroups() {

      let contentItems = [];

      let i = 0;
      for (let key in window.CookieConsent.config.categories) {

        contentItems.push(
          el('dl.ccm__tabgroup' + '.' + key + ((window.CookieConsent.config.categories[key].checked) ? '.checked-5jhk' : ''), {'data-category':key},
            el('dt.ccm__tab-head',
              el('div.ccm__switch-component',
                el('div.ccm__switch-group',
                  el('label.ccm__switch',
                    el('input.category-onoff', {type:'checkbox', 'data-category': key, 'checked': window.CookieConsent.config.categories[key].checked, disabled: window.CookieConsent.config.categories[key].needed}),
                    el('span.ccm__switch__slider')
                  )
                ),
              ),
              Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name'),
              el('a.ccm__tab-head__icon-wedge',
                el(document.createElementNS("http://www.w3.org/2000/svg", "svg"), { version: "1.2", preserveAspectRatio: "none", viewBox: "0 0 24 24", class: "icon-wedge-svg", "data-id": "e9b3c566e8c14cfea38af128759b91a3", style: "opacity: 1; mix-blend-mode: normal; fill: rgb(51, 51, 51); width: 32px; height: 32px;"},
                  el(document.createElementNS("http://www.w3.org/2000/svg", "path"), { 'xmlns:default': "http://www.w3.org/2000/svg", class: "icon-wedge-angle-down", d: "M17.2,9.84c0-0.09-0.04-0.18-0.1-0.24l-0.52-0.52c-0.13-0.13-0.33-0.14-0.47-0.01c0,0-0.01,0.01-0.01,0.01  l-4.1,4.1l-4.09-4.1C7.78,8.94,7.57,8.94,7.44,9.06c0,0-0.01,0.01-0.01,0.01L6.91,9.6c-0.13,0.13-0.14,0.33-0.01,0.47  c0,0,0.01,0.01,0.01,0.01l4.85,4.85c0.13,0.13,0.33,0.14,0.47,0.01c0,0,0.01-0.01,0.01-0.01l4.85-4.85c0.06-0.06,0.1-0.15,0.1-0.24  l0,0H17.2z", style: "fill: rgb(51, 51, 51);" })
                )
              ),
            ),
            el('dd.ccm__tab-content',
              el('p', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'description')),
              el('div.ccm__list',
                listCookies(key)
              )
            )
          )
        );
        i++;
      }

      return contentItems;
    }

    return el('div#cconsent-modal',
      el('div.ccm__content',
        el('div.ccm__content__heading',
          el('h2', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainTitle')),
          el('p',
            Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainText'),
            (window.CookieConsent.config.modalMainTextMoreLink) ? el('a', { href: window.CookieConsent.config.modalMainTextMoreLink, target: '_blank', rel: 'noopener noreferrer' }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'learnMore')) : null
          ),
          el('div.ccm__cheading__close', '×')
        ),
        el('div.ccm__content__body',
          el('div.ccm__tabs',
            modalTabGroups()
          )
        ),
        el('div.ccm__footer',
          el('button#ccm__footer__consent-modal-submit', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnSave')),
          el('button.consent-give', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnAcceptAll')),
          el('button.consent-reject', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnRejectAll')),
        )
      )
    );
  }

  modalRedrawIcons() {
    var tabGroups = this.elements['modal'].querySelectorAll('.ccm__tabgroup');

    for(let tabGroup of tabGroups) {
      if(window.CookieConsent.config.categories[tabGroup.dataset.category].checked) {
        if( ! tabGroup.classList.contains('checked-5jhk')) {
          tabGroup.classList.add('checked-5jhk');
          var checkbox = tabGroup.querySelector('input.category-onoff')
          if (checkbox) checkbox.checked = true;
        };
      } else {
        if(tabGroup.classList.contains('checked-5jhk')) tabGroup.classList.remove('checked-5jhk');
        var checkbox = tabGroup.querySelector('input.category-onoff')
        if (checkbox) checkbox.checked = false;
      }
    }
  }

  render(name, elem, callback) {
    if (typeof callback === 'undefined') callback = function(){};
    if (typeof this.elements[name] !== 'undefined') {
      this.elements[name].parentNode.replaceChild(elem, this.elements[name]);
      this.elements[name] = elem;
      callback(elem);
      return elem;
    } else {
      var insertedElem = mount(document.body, elem);
      if (insertedElem) {
        this.elements[name] = insertedElem;
      }
      callback(insertedElem);
      return insertedElem;
    }
  }

  buildInterface(callback) {

    if (typeof callback === 'undefined') callback = function(){};
    var that = this;

    Utilities.ready(function() {

      that.render('style', that.buildStyle());

      that.render('bar', that.buildBar(), (bar) => {

        // Show the bar after a while
        if ( ! window.CookieConsent.config.cookieExists) {
          setTimeout(() => {
            bar.classList.remove('ccb--hidden');
          }, window.CookieConsent.config.barTimeout);
        }
      });

      that.render('modal', that.buildModal());

      callback();
    });
  }

  addEventListeners(elements) {

    // If you click Accept all cookies
    var buttonConsentGive = document.querySelectorAll('.consent-give');

    for(let button of buttonConsentGive) {
      button.addEventListener('click', () => {

        // We set config to full consent
        for(let key in window.CookieConsent.config.categories) {
          window.CookieConsent.config.categories[key].wanted =
          window.CookieConsent.config.categories[key].checked = true;
        }

        this.writeBufferToDOM();

        this.buildCookie((cookie) => {
          this.setCookie(cookie);
        });

        this.elements['bar'].classList.add('ccb--hidden');
        this.elements['modal'].classList.remove('ccm--visible');

        this.modalRedrawIcons();

      });
    }

    // If you click Reject all cookies
    var buttonConsentReject = document.querySelectorAll('.consent-reject');

    for(let button of buttonConsentReject) {
      button.addEventListener('click', () => {

        // We set config to reject consent
        for(let key in window.CookieConsent.config.categories) {
          if (window.CookieConsent.config.categories[key].needed == false){
            window.CookieConsent.config.categories[key].wanted =
            window.CookieConsent.config.categories[key].checked = false;
          }
        }

        this.writeBufferToDOM();

        this.buildCookie((cookie) => {
          this.setCookie(cookie);
        });

        this.elements['bar'].classList.add('ccb--hidden');
        this.elements['modal'].classList.remove('ccm--visible');

        this.modalRedrawIcons();
      });
    }

    // If you click Cookie settings and open modal
    Array.prototype.forEach.call(document.getElementsByClassName('ccb__edit'), (edit) => {
      edit.addEventListener('click', () => {
        this.elements['modal'].classList.add('ccm--visible');
      });
    });

    // If you click trough the tabs on Cookie settings
    // If you click on/off switch
    this.elements['modal'].querySelector('.ccm__tabs').addEventListener('click', (event) => {

      // If you click trough the tabs on Cookie settings
      if (event.target.classList.contains('ccm__tab-head') || event.target.classList.contains('ccm__tab-head__icon-wedge')) {

        function getDlParent(eventTarget) {
          var parent = eventTarget.parentNode;
          if(parent.nodeName !== 'DL') {
            return getDlParent(parent);
          } else {
            return parent;
          }
        }

        var parentDl = getDlParent(event.target);

        if(parentDl.classList.contains('ccm__tabgroup--open')) {
          parentDl.classList.remove('ccm__tabgroup--open');
        } else {
          parentDl.classList.add('ccm__tabgroup--open');
        }
      }

      // If you click on/off switch
      if (event.target.classList.contains('category-onoff')) {
        window.CookieConsent.config.categories[event.target.dataset.category].wanted =
        window.CookieConsent.config.categories[event.target.dataset.category].checked = (event.target.checked === true) ? true : false;

        var dt = document.querySelector('.ccm__tabgroup.' + event.target.dataset.category);
        if(event.target.checked === false && dt.classList.contains('checked-5jhk')) {
          dt.classList.remove('checked-5jhk');
        } else {
          dt.classList.add('checked-5jhk');
        }
      }
    });



    // If you click close on open modal
    this.elements['modal'].querySelector('.ccm__cheading__close').addEventListener('click', (event) => {
      this.elements['modal'].classList.remove('ccm--visible');
    });

    // If you click submit on cookie settings
    document.getElementById('ccm__footer__consent-modal-submit').addEventListener('click', () => {

      let switchElements = this.elements['modal'].querySelectorAll('.ccm__switch input');

      Array.prototype.forEach.call(switchElements, (switchElement) => {
        window.CookieConsent.config.categories[switchElement.dataset.category].wanted = switchElement.checked;
      });

      this.buildCookie((cookie) => {
        this.setCookie(cookie, () => {
          this.elements['modal'].classList.remove('ccm--visible');
          this.elements['bar'].classList.add('ccb--hidden');
        });
      });

      this.writeBufferToDOM();

    });
  }

  writeBufferToDOM() {

    for(let action of window.CookieConsent.buffer.appendChild) {
      if (window.CookieConsent.config.categories[action.category].wanted === true) {
        Node.prototype.appendChild.apply(action.this, action.arguments);
      }
    }

    for(let action of window.CookieConsent.buffer.insertBefore) {
      if (window.CookieConsent.config.categories[action.category].wanted === true) {
        action.arguments[1] = (action.arguments[0].parentNode === null) ? action.this.lastChild : action.arguments[1];
        Node.prototype.insertBefore.apply(action.this, action.arguments);
      }
    }
  }

  buildCookie(callback) {
    let cookie = {
      version: window.CookieConsent.config.cookieVersion,
      categories: {},
      services: []
    };

    for(let key in window.CookieConsent.config.categories) {
      cookie.categories[key] = {
        wanted: window.CookieConsent.config.categories[key].wanted,
      };
    }

    cookie.services = Utilities.listGlobalServices();

    if (callback) callback(cookie);
    return cookie;
  }

  setCookie(cookie, callback) {
    const expires_in = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

    document.cookie = `cconsent=${JSON.stringify(cookie)}; expires=${expires_in}; path=/;`;
    if (callback) callback();
  }
}
