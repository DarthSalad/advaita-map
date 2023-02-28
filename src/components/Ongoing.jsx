import React from "react";
import { List } from "antd";

const Ongoing = (props) => {
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

	if (props.loading || !props.tech || !props.cult) {
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
    
	return(
        <div>
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Tech Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.tech}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Cultural Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.cult}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Art Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.art}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Photography Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.photo}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Theatre Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.fats}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Sports Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.sports}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Literary Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.lit}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
            <h1 style={{color: "blue", fontSize: "1.5rem"}}>Fooding Events</h1>
            <List
                itemLayout="horizontal"
                dataSource={props.food}
                renderItem={(item, index) => {
                    if (item.startDate.toDate() < new Date() && item.endDate.toDate() > new Date()) {
                    return(
                        <List.Item ley={index} style={{padding: "0px"}}>
                            <List.Item.Meta
                                title={item.name}
                                description={"Venue: " + item.venue + "; Timing:  " + convertTimestampToDate(item.startDate) + " - " + convertTimestampToDate(item.endDate)}
                            />
                        </List.Item>
                    )}
                }}
            />
        </div>
    );
};

export default Ongoing;
