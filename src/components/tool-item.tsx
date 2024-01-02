export interface ToolItemProps {
    icon: string;
    title: string;
    url: string;
    color?: string;
    slug: "code" | "audio" | "video" | "photo" | "conversation";
  }