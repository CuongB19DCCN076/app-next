"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useProStore } from "@/store/pro-store";
import SubscriptionButton from "../subcription-button";

interface UpgradeProModalProps {
  isProPlan?: boolean;
}

const UpgradeProModal: React.FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseProModal } = useProStore();

  return (
    <Dialog open={isOpen}>
      <DialogContent
        onClose={handleCloseProModal}
        showOverlay>
        <SubscriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  )
}

export default UpgradeProModal;