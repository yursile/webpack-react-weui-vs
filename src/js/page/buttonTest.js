import React from 'react';
import WeUI from 'react-weui';
import Page from "../tools/page.js";
import "../../css/page/buttonTest.less"

const {
 	Button,
 	Grids
} = WeUI;




export default class Test extends React.Component {
  	render(){
  		return(
  			<Page className="button" title="Button" spacing>
          <Button>按钮</Button>
          <Button disabled>按钮</Button>

          <Button type="warn">按钮</Button>
          <Button type="warn" disabled>按钮</Button>

          <Button type="default">按钮</Button>
          <Button type="default" disabled>按钮</Button>

       		<div className="sohu"></div>
          <div className="border"></div>
        </Page>
  		)
  	}
};


