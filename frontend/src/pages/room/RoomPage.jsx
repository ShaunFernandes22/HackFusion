import React, {useEffect, useRef, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();
    const videoContainerRef = useRef(null);

   
    const userId = Date.now().toString();
    const userName = "sachin"
    const myMeeting = useCallback (async (element) => {
        const appId = 1568361024;
        const serverSecret = '2591024f1ebf436b3aa07a8d86a2e518';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, userId, userName);
        const zg = ZegoUIKitPrebuilt.create(kitToken);
        zg.joinRoom({
            container: element, 
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        });
    }, [roomId] );

    useEffect(() => {
        if (videoContainerRef.current) {
            myMeeting(videoContainerRef.current); 
        }
    }, [myMeeting]);   

   return (
    <div className = "top-0" style={{ width: '100%', height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div ref={videoContainerRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  )
}

export default RoomPage