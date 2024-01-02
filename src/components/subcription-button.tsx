"use client"

import { toast } from "react-toastify"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"
import { Sparkles } from "lucide-react"
interface ISubcriptionButton {
    isPro?: boolean
}

const SubscriptionButton: React.FC<ISubcriptionButton> = ({isPro}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubcribe = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get("/api/stripe");
        //   location.href = data.url;
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong. Please try again.");
        } finally {
          setLoading(false);
        }
      }
  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubcribe}
        className="text-white w-full font-semibold hover:text-white border-none gradient-btn"
      >
        <span className="mr-2">{isPro ? "Manage Subscription" : "Upgrade to Pro"}</span>
        {
          !isPro &&
          <Sparkles />
        }
      </Button>
    </div>
  )
}

export default SubscriptionButton