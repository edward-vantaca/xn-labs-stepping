import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Check, Copy, FilePen, MessageSquare, SquarePen, Webhook, type LucideIcon } from "lucide-react";

export type RowAction = "msg" | "step" | "note" | "edit" | "select" | "copy";

const ACTIONS: { key: RowAction; label: string; icon: LucideIcon }[] = [
  { key: "msg", label: "Msg", icon: MessageSquare },
  { key: "step", label: "Step", icon: Webhook },
  { key: "note", label: "Note", icon: FilePen },
  { key: "edit", label: "Edit", icon: SquarePen },
  { key: "select", label: "Select", icon: Check },
  { key: "copy", label: "Copy", icon: Copy },
];

const MENU_WIDTH = 148;

type RowActionsMenuProps = {
  label: string;
  onAction: (action: RowAction) => void;
};

export default function RowActionsMenu({ label, onAction }: RowActionsMenuProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  // Fixed coordinates so the grid's scroll container can't clip the menu.
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (!position) return;
    const close = () => setPosition(null);
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [position]);

  const toggle = () => {
    if (position) return setPosition(null);
    const rect = buttonRef.current!.getBoundingClientRect();
    const menuHeight = ACTIONS.length * 34 + 12;
    const below = rect.bottom + 4;
    setPosition({
      top: below + menuHeight > window.innerHeight ? rect.top - 4 - menuHeight : below,
      left: rect.right - MENU_WIDTH + 12,
    });
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={!!position}
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        className={`inline-flex size-[24px] cursor-pointer items-center justify-center rounded-[6px] border text-[12px] ${
          position ? "border-[#1b6ac9] bg-[#e8f1fc] text-[#1b6ac9]" : "border-[#9cc1e6] bg-white text-[#1b6ac9] hover:bg-[#f2f7fd]"
        }`}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {position && (
        <div
          ref={menuRef}
          role="menu"
          onClick={(e) => e.stopPropagation()}
          style={{ top: position.top, left: position.left, width: MENU_WIDTH }}
          className="fixed z-[800] rounded-[8px] border border-[#dbdee0] bg-white py-[6px] text-left shadow-[0px_6px_20px_0px_rgba(0,0,0,0.12)] animate-in fade-in zoom-in-95 duration-100"
        >
          {ACTIONS.map(({ key, label: text, icon: Icon }) => (
            <button
              key={key}
              type="button"
              role="menuitem"
              onClick={() => {
                setPosition(null);
                onAction(key);
              }}
              className="flex h-[34px] w-full cursor-pointer items-center gap-[10px] px-[16px] text-[14px] text-[#1f3a5a] hover:bg-[#f2f7fd]"
            >
              <Icon size={18} strokeWidth={1.75} className="shrink-0 text-[#1b6ac9]" />
              {text}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
