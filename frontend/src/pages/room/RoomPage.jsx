import React, { useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import Charts from "../../components/Charts";

const RoomPage = () => {
  const { roomId } = useParams();
  const videoContainerRef = useRef(null);
  const roomUrlInputRef = useRef(null);

  const userId = Date.now().toString();
  const userName = "Sachin Tendulkar";

  const myMeeting = useCallback(
    async (element) => {
      const appId = Number(import.meta.env.VITE_APPID);
      const serverSecret = import.meta.env.VITE_SECRET_SERVER;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomId,
        userId,
        userName
      );
      const zg = ZegoUIKitPrebuilt.create(kitToken);
      zg.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    },
    [roomId, userId, userName]
  );

  useEffect(() => {
    if (videoContainerRef.current) {
      myMeeting(videoContainerRef.current);
    }
  }, []);

  const copyRoomUrl = () => {
    const roomUrl = roomUrlInputRef.current.value;
    navigator.clipboard.writeText(roomUrl);
    alert("Room URL copied!");
  };

  return (
    <>
      <div
        className="top-0"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            ref={videoContainerRef}
            style={{ width: "100%", height: "70vh", marginBottom: "1rem" }}
          />
          <div className="flex justify-center">
            <input
              ref={roomUrlInputRef}
              className="border border-gray-300 rounded px-4 py-2 mr-2"
              type="text"
              readOnly
              value={`http://localhost:5173/room/${roomId}`}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={copyRoomUrl}
            >
              Copy Room URL
            </button>
          </div>
        </div>
      </div>
      <Charts />
    </>
  );
};

export default RoomPage;
