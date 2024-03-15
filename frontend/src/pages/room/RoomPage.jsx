import React, {useRef} from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();

    const userId = "sa123"
    const userName = "sachin"
    const myMeeting = async (element) => {
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
    }   
   return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage