import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";
import { Navbar } from "./navbar";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Card />
		</>
	);
}
