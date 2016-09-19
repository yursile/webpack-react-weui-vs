import React from 'react';
import WeUI from 'react-weui';
import Page from '../tools/page';

const {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} = WeUI;

import IconButton from '../../img/icon_nav_button.png';
import IconMsg from '../../img/icon_nav_msg.png';
import IconArticle from '../../img/icon_nav_article.png';
import IconCell from '../../img/icon_nav_cell.png';

export default class TabBarDemo extends React.Component {
    state={
        tab:0
    };

    static items = [
        {
            index:0,
            icon:IconButton,
            label:"微信" 
        },
        {
            index:1,
            icon:IconMsg,
            label:"通讯录" 
        },
        {
            index:2,
            icon:IconArticle,
            label:"发现" 
        },
        {
            index:3,
            icon:IconCell,
            label:"我" 
        }
       
    ];

    renderItem(){
        return TabBarDemo.items.map((v,k)=>{
            return (
                <TabBarItem icon={<img src={v.icon}/>} key={`tab_item_${k}`} label={v.label} active={this.state.tab == k} onClick={e=>this.setState({tab:k})} /> 
            );
        });
    }

    render() {
       let tabItems = this.renderItem();
        return (
            <Tab>
                <TabBody>
                    <Article style={{display: this.state.tab == 0 ? null : 'none'}}>
                        <h1>选项页1</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>
                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 1 ? null : 'none'}}>
                        <h1>通讯录</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>2.1 节标题</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 2 ? null : 'none'}}>
                        <h1>发现</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 3 ? null : 'none'}}>
                        <h1>我</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                        </section>
                    </Article>
                </TabBody>

                <TabBar>
                   {tabItems}
                </TabBar>
            </Tab>
        );
    }
};
