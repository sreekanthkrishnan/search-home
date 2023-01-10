import React from "react";
import styled from "styled-components";
import Header from "../../includes/general/Header";
import Spotlight from "../landing-page/Spotlight";

function LandingPage() {
	return (
		<Container>
			<Header />
			<Spotlight />
		</Container>
	);
}

export default LandingPage;
const Container = styled.div``;
