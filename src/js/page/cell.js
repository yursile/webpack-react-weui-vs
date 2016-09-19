import React from 'react';
import WeUI from 'react-weui';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;

export default class CellPage extends React.Component{
	render(){
		return(
			<section>
				<CellsTitle>cells test</CellsTitle>	
				<Cells access>
					<Cell>
						<CellHeader>
							<span>header</span>
							
						</CellHeader>	

						<CellBody>
				
                            <p className="desc">body</p>
						</CellBody>

						<CellFooter>asdg</CellFooter>
					</Cell>
				</Cells>
			</section>
		)
	}
}