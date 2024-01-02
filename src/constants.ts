import { ToolItemProps } from "./components/tool-item";
import conversation from "@/public/conversation.svg";
import dashboard from "@/public/dashboard.svg";
import photo from "@/public/photo.svg";
import video from "@/public/video.svg";
import audio from "@/public/audio.svg";
import code from "@/public/code.svg";
export const MAX_FREE_COUNTS = 5;
export const THEME_MODES = [
    {
        label: "Light",
        value: "light"
      },
      {
        label: "Dark",
        value: "dark"
      },
];
export const TOOLS: ToolItemProps[] = [
    {
      title: "Conversation",
      icon: conversation,
      url: "/conversation",
      color: "bg-blue-500",
      slug: "conversation"
    },
    {
      title: "Photo generation",
      icon: photo,
      url: "/photo",
      color: "bg-violet-500",
      slug: "photo"
    },
    {
      title: "Video generation",
      icon: video,
      url: "/video",
      color: "bg-amber-500",
      slug: "video"
    },
    {
      title: "Audio generation",
      icon: audio,
      url: "/audio",
      color: "bg-orange-500",
      slug: "audio"
    },
    {
      title: "Code generation",
      icon: code,
      url: "/code",
      color: "bg-green-500",
      slug: "code"
    },
  ];
  export const NAVIGATIONS = [
    {
      title: "Dashboard",
      icon: dashboard,
      url: "/dashboard",
      slug: "dashboard"
    },
    ...TOOLS,
  ];