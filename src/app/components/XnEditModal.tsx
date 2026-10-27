import { useEffect } from "react";
import ConfigurationPanel from "../imports/ConfigurationPanel";

type XnEditModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function XnEditModal({ open, onClose }: XnEditModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    // No transforms on this tree: the panel's step flyout is `position: fixed`
    // and must stay anchored to the viewport, not to the modal.
    <div
      className="fixed inset-0 z-[900] flex items-center justify-center bg-black/40 p-[24px] animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="XN Edit"
        className="relative h-full w-full overflow-auto rounded-[6px] bg-white shadow-[0px_10px_40px_0px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <ConfigurationPanel onClose={onClose} />
      </div>
    </div>
  );
}
