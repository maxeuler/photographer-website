import React from 'react';
import styled from 'styled-components';
import { Inner } from './Landing';

const Grid = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 300px);
	grid-template-columns: repeat(4, 1fr);
	max-width: 1200px;
	margin: 10rem auto;
	background: ${props => props.theme.primary};
	grid-column: 2;
	grid-row: 1;
	@media (max-width: 900px) {
		grid-template-columns: 50% 50%;
		grid-template-rows: repeat(6, 400px);
	}
	@media (max-width: 700px) {
		grid-template-columns: 100%;
		grid-template-rows: repeat(6, 400px);
		grid-gap: 20px;
		background: none;
		.text {
			display: none;
		}
	}

	.text {
		color: #fff;
		padding: 2rem;
		font-size: 1.5rem;
		font-weight: 300;
		h3 {
			font-size: 2.5rem;
			font-weight: 300;
		}
	}
	.i11 {
		background-image: url('./static/grid/1_1.jpg');
		background-size: cover;
	}
	.i13 {
		background-image: url('./static/grid/1_3.jpg');
		background-size: cover;
	}
	.i22 {
		background-image: url('./static/grid/2_2.jpg');
		background-size: cover;
	}
	.i24 {
		background-image: url('./static/grid/2_4.jpg');
		background-size: cover;
	}
	.i31 {
		background-image: url('./static/grid/3_1.jpg');
		background-size: cover;
	}
	.i33 {
		background-image: url('./static/grid/3_2.jpg');
		background-size: cover;
	}
`;

const ImageGrid = props => (
	<Inner>
		<Grid>
			<div className="i11" />
			<div className="1_2 text">
				<h3>Title 1 2</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
					modi id tenetur quam asperiores quasi unde iste, atque temporibus
					magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
				</p>
			</div>
			<div className="i13" />
			<div className="1_4 text">
				<h3>Title 1 4</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
					modi id tenetur quam asperiores quasi unde iste, atque temporibus
					magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
				</p>
			</div>
			<div className="i22 row2" />
			<div className="2_1 text row2">
				<h3>Title 2 1</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
					modi id tenetur quam asperiores quasi unde iste, atque temporibus
					magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
				</p>
			</div>
			<div className="i24 row2" />
			<div className="2_3 text row2">
				<h3>Title 2 3</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
					modi id tenetur quam asperiores quasi unde iste, atque temporibus
					magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
				</p>
			</div>
			<div className="i31" />
			<div className="3_2 text">
				<h3>Title 3 2</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
					modi id tenetur quam asperiores quasi unde iste, atque temporibus
					magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
				</p>
			</div>
			<div className="i33" />
			<div className="3_4 text">
				<h3>Title 3 4</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
					modi id tenetur quam asperiores quasi unde iste, atque temporibus
					magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
				</p>
			</div>
		</Grid>
	</Inner>
);

export default ImageGrid;
