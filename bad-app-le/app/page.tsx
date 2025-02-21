<>

//import Image from "next/image"; 
//import styles from "./page.module.css";

//To run this code, use:
npm run dev

Production stuff is
npm start
</>
export default function Home() {
  return (
	<div>
		<div style={{ 
		  display: "flex", 
		  flexDirection: "column", 
		  alignItems: "center", 
		  justifyContent: "center", 
		  height: "100vh"
		}}>
		  <h1>
			Sample Hero Name Here
		  </h1>
		  <h2>
			Player Name
		  </h2>
		  <br/>
		  <p>
			<center>
			Player Class or something I FORGOT, SOMEONE PUT THE GUIDELINE IN THE COMMENTS HERE AAAA
			<br/>
			(also remember, the page is in app\page.tsx)
			</center>
		  </p>
		</div>
	</div>
  );
}