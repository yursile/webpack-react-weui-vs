"use strict";

import React from 'react';
import WeUI from 'react-weui';
import ReactDom from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'weui';
import '../css/index.less';
import '../css/base/reset.css';
import { Router, Route, IndexRoute ,browserHistory,hashHistory} from 'react-router';
const {
 Button,ButtonArea,Icon ,
  Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} = WeUI;

import Home from "./page/home.js"
import ButtonTest from "./page/buttonTest.js"
import CellTest from "./page/cell.js"
import DialogTest from "./page/dialogTest.js"
import panelTest from "./page/panelTest.js"
import TabBarTest from "./page/tabbarTest.js"
import SearchBarTest from "./page/searchTest.js"

class App extends React.Component {
  
    /**
     * ReactCSSTransitionGroup
     * 控制两个组件页面切换效果
     * 所有的组件都必须有key字段，所以使用了React.cloneElement
     * 这些组件通过children的形式传入，对应Route component={App}下的孩子
     */
    render(){
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}
            >
                {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
};

class MyRoute extends React.Component {
    /**
     * 配好路由
     * 默认页面是indexRoute，home页面
     * 在home导航页面里通过指定的path可以跳到对应的component
     */
    render(){

        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                  <IndexRoute component={Home} />
                  <Route path="button" component={ButtonTest}/>
                  <Route path="cell" component={CellTest}/>
                  <Route path="dialog" component={DialogTest}/>
                  <Route path="panel" component={panelTest}/>
                  <Route path="tab" component={TabBarTest}/>
                  <Route path="searchbar" component={SearchBarTest}/>
                </Route>
            </Router>
        )
    }
};


ReactDom.render(<MyRoute />, document.querySelector("#app"));