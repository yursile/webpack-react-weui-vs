import React from 'react';
import WeUI from 'react-weui';

const {
 	Button,
 	Grids
} = WeUI;
import Page from "../tools/page.js"

import IconButton from '../../img/icon_nav_button.png';
import IconCell from '../../img/icon_nav_cell.png';
import IconToast from '../../img/icon_nav_toast.png';
import IconDialog from '../../img/icon_nav_dialog.png';
import IconProgress from '../../img/icon_nav_progress.png';
import IconMsg from '../../img/icon_nav_msg.png';
import IconArticle from '../../img/icon_nav_article.png';
import IconActionSheet from '../../img/icon_nav_actionSheet.png';
import IconIcons from '../../img/icon_nav_icons.png';
import IconPanel from '../../img/icon_nav_panel.png';
import IconTab from '../../img/icon_nav_tab.png';
import IconSearchBar from '../../img/icon_nav_search_bar.png';


export default class Home extends React.Component {
  	 state = {
        components: [{
            icon: <img src={IconButton}/>,
            label: 'Buton',
            href: '#/button',
        }, {
            icon: <img src={IconCell}/>,
            label: 'Cell',
            href: '#/cell'
        }, {
            icon: <img src={IconToast}/>,
            label: 'Toast',
            href: '#/toast'
        }, {
            icon: <img src={IconDialog}/>,
            label: 'Dialog',
            href: '#/dialog'
        }, {
            icon: <img src={IconProgress}/>,
            label: 'Progress',
            href: '#/progress'
        }, {
            icon: <img src={IconMsg}/>,
            label: 'Msg',
            href: '#/msg'
        }, {
            icon: <img src={IconArticle}/>,
            label: 'Article',
            href: '#/article'
        }, {
            icon: <img src={IconActionSheet}/>,
            label: 'ActionSheet',
            href: '#/actionsheet'
        }, {
            icon: <img src={IconIcons}/>,
            label: 'Icons',
            href: '#/icons'
        }, {
            icon: <img src={IconPanel}/>,
            label: 'Panel',
            href: '#/panel'
        }, {
            icon: <img src={IconTab}/>,
            label: 'Tab',
            href: '#/tab'
        }, {
            icon: <img src={IconSearchBar}/>,
            label: 'SearchBar',
            href: '#/searchbar'
        }]
    };
  	render(){
  		return(
		    <Page className="home" title="WeUI" subTitle="为微信Web服务量身设计">
                <Grids data={this.state.components}/>
            </Page>
  		)
  	}
};


