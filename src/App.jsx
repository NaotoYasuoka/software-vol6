import React from 'react';
import ReactDOM from 'react-dom';
import {Splitter, SplitterSide, SplitterContent, Page, Button} from 'react-onsenui';

import Page1 from "Page1.jsx";
import Page2 from "Page2.jsx";
import Page3 from "Page3.jsx";
import Page4 from "Page4.jsx";
import './style.css';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectMenu: 1,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  show() {
    this.setState({
      isOpen: true,
      selectMenu: this.state.selectMenu
    });
  }

  hide() {
    this.setState({
      isOpen: false,
      selectMenu: this.state.selectMenu
    });
  }

  onClickMenu(num) {
    // isOpenをfalseにしてメニューを閉じる。メニュー１を選択状態にする
    this.setState({ isOpen: false, selectMenu: num });
  }

  render() {
    var PageContent;
    var menuItemClass_1 = "item";
    var menuItemClass_2 = "item";
    var menuItemClass_3 = "item";
    var menuItemClass_4 = "item";
    if(this.state.selectMenu == 1) {
      menuItemClass_1 = "item-selected";
      PageContent = <Page1 show={this.show} />;
    }
    else if(this.state.selectMenu == 2) {
      menuItemClass_2 = "item-selected";
      PageContent = <Page2 show={this.show} />;
    }
    else if(this.state.selectMenu == 3) {
      menuItemClass_3 = "item-selected";
      PageContent = <Page3 show={this.show} />;
    }
    else if(this.state.selectMenu == 4) {
      menuItemClass_4 = "item-selected";
      PageContent = <Page4 show={this.show} />;
    }

    return (
      <Splitter>
        <SplitterSide
          side='left'
          collapse={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          swipeable={true}>
          <Page>
            <ul className="menu">
              <li className={menuItemClass_1} onClick={() => this.onClickMenu(1)}>メニュー１</li>
              <li className={menuItemClass_2} onClick={() => this.onClickMenu(2)}>メニュー２</li>
              <li className={menuItemClass_3} onClick={() => this.onClickMenu(3)}>メニュー３</li>
              <li className={menuItemClass_4} onClick={() => this.onClickMenu(4)}>メニュー４</li>
            </ul>
          </Page>
        </SplitterSide>
        <SplitterContent>
          {PageContent}
        </SplitterContent>
      </Splitter>
    );
  }
}
