import React, {useEffect, useRef, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();
    const videoContainerRef = useRef(null);

   
    const userId = Date.now().toString();
    const userName = "Sachin Tendulkar"
    const myMeeting = useCallback (async (element) => {
        const appId = Number(import.meta.env.VITE_APPID);
        const serverSecret = import.meta.env.VITE_SECRET_SERVER;
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