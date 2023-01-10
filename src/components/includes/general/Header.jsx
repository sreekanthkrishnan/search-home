import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
	return (
		<Container>
			<Cover className="wrapper">
				<LeftSection>
					<LogoCover>
						<Logo to="/">
							<img
								src={require("../../../assets/images/logo.png")}
								alt="Website logo"
							/>
						</Logo>
					</LogoCover>
					<MenuContainer>
						<Menu to="/">Home</Menu>
						<Menu to="/">Designations</Menu>
						<Menu to="/">Promo</Menu>
						<Menu to="/">Blog</Menu>
						<Menu to="/">Contact</Menu>
					</MenuContainer>
				</LeftSection>

				<RightSection>
					<Icon>
						Sree <i class="fa-solid fa-chevron-down"></i>
					</Icon>
					<Avatar>
						<img
							src={require("../../../assets/images/spotlight/user.jpg")}
							alt="User image"
						/>
					</Avatar>
					<Icon>
						<i class="fa-regular fa-bell"></i>
					</Icon>
					<Icon>
						<i class="fa-solid fa-magnifying-glass"></i>
					</Icon>
				</RightSection>
			</Cover>
		</Container>
	);
}

export default Header;
const Container = styled.div`
	position: fixed;
	top: 50px;
	left: 0;
	width: 100%;
	z-index: 999999;
`;
const Cover = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const LeftSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const RightSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const LogoCover = styled.h1`
	margin-right: 15%;
`;
const Logo = styled(Link)`
	width: 50px;
	display: block;
	img {
		width: 100%;
		display: block;
	}
`;
const MenuContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const Menu = styled(NavLink)`
	color: #fff;
	display: block;
	margin-right: 50px;
	font-size: 15px;
	:last-child {
		margin-right: 0;
	}
`;
const Icon = styled.span`
	color: #fff;
	display: block;
	margin-left: 25px;
	cursor: pointer;
	transition: all 0.2s;
	i {
		color: #fff;
		font-size: 20px;
	}
	&:hover {
		opacity: 0.8;
	}
	:first-child {
		i {
			color: #fff;
			font-size: 15px;
		}
	}
`;
const Avatar = styled.span`
	display: block;
	width: 50px;
	border-radius: 50%;
	overflow: hidden;
	height: 50px;
	cursor: pointer;
	margin-left: 25px;
	transition: all 0.2s;
	&:hover {
		opacity: 0.8;
	}
	img {
		width: 100%;
		display: block;
		object-fit: cover;
	}
`;
