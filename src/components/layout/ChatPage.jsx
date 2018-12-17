import React from 'react';
import DrawerLeft from "./sidebar/Drawer";
import Header from "./Header";
import mockData from '../../mock-data'
import {withStyles} from '@material-ui/core/styles';
import Chat from "../messages/Chat";

const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        overflowY: 'hidden',
    }
});

const ChatPage = ({classes}) => (
    <div className={classes.container}>
        <DrawerLeft chats={mockData.chats}/>
        <div className={classes.contentWrapper}>
            <Header/>
            <Chat messages={mockData.messages}/>
        </div>
    </div>
);

export default withStyles(styles)(ChatPage);
