import React, { useEffect, useState } from "react";
import { List } from "antd";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";

const Social = () => {
	const [social, setSocial] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSocials = async () => {
			try {
				const q = query(
					collection(db, "social"),
					orderBy("startDate", "asc")
				);
				onSnapshot(q, (snapshot) => {
					setSocial(snapshot.docs.map((doc) => doc.data()));
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchSocials() && setLoading(false);
	}, [social, loading]);

    const convertTimestampToDate = (timestamp) => {
        const date = timestamp.toDate();
        return date.toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: true 
          });
          
    }

    if (loading || !social) {
		return (
			<h1
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "3rem",
				}}
			>
				Loading...
			</h1>
		);
	}

	return (
		<div>
			<h1 style={{ color: "blue", fontSize: "1.5rem" }}>
				Social Events
			</h1>
			<List
				itemLayout="horizontal"
				dataSource={social}
				renderItem={(item, index) => (
					<List.Item ley={index} style={{ padding: "0px" }}>
						<List.Item.Meta
							title={item.name}
							description={
								"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Social;
