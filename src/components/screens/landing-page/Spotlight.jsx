import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import bg from "../../../assets/images/spotlight/img5.jpg";

function Spotlight() {
	const [sliderData, setSliderData] = useState([
		{
			id: 1,
			img: require("../../../assets/images/spotlight/img1.jpg"),
			name: "",
			describe: "",
		},
		{
			id: 2,
			img: require("../../../assets/images/spotlight/img2.jpg"),
			name: "",
			describe: "",
		},
		{
			id: 3,
			img: require("../../../assets/images/spotlight/img3.jpg"),
			name: "",
			describe: "",
		},
		{
			id: 4,
			img: require("../../../assets/images/spotlight/img4.jpg"),
			name: "",
			describe: "",
		},
	]);

	return (
		<Container>
			<OverLay></OverLay>
			<ContentSection></ContentSection>
		</Container>
	);
}

export default Spotlight;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: url(${bg}) no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
`;
const OverLay = styled.div`
	width: 100%;
	height: 100%;
	background-color: #00000052;
	position: absolute;
	top: 0;
	left: 0;
`;
const SliderContainer = styled.div``;
const SliderContent = styled.div`
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		display: block;
	}
`;

const ContentSection = styled.div``;
