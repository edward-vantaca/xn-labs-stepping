import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Ban,
  Bold,
  Check,
  Code,
  FlaskConical,
  Image,
  IndentIncrease,
  Italic,
  Link,
  List,
  ListOrdered,
  PaintBucket,
  PanelTop,
  Puzzle,
  Underline,
  X,
  type LucideIcon,
} from "lucide-react";
import { WORKFLOW_STEPS, stepNumber, type ActionItem } from "./actionItemsData";
import XnLabsModal from "./XnLabsModal";

export type StepChanges = Pick<ActionItem, "step" | "followUp" | "dueDate" | "latestMessage">;

type ChangeStepModalProps = {
  item: ActionItem;
  onClose: () => void;
  onUpdate: (changes: StepChanges, select: boolean) => void;
};

// The grid stores dates as MM/DD/YYYY; <input type="date"> speaks YYYY-MM-DD.
const toInputDate = (d: string) => (d ? `${d.slice(6)}-${d.slice(0, 2)}-${d.slice(3, 5)}` : "");
const fromInputDate = (d: string) => (d ? `${d.slice(5, 7)}/${d.slice(8)}/${d.slice(0, 4)}` : "");

const FORMAT_BUTTONS: { icon: LucideIcon; label: string; command: string }[] = [
  { icon: Bold, label: "Bold", command: "bold" },
  { icon: Italic, label: "Italic", command: "italic" },
  { icon: Underline, label: "Underline", command: "underline" },
  { icon: AlignLeft, label: "Align left", command: "justifyLeft" },
  { icon: AlignCenter, label: "Align center", command: "justifyCenter" },
  { icon: AlignRight, label: "Align right", command: "justifyRight" },
  { icon: List, label: "Bulleted list", command: "insertUnorderedList" },
  { icon: ListOrdered, label: "Numbered list", command: "insertOrderedList" },
  { icon: IndentIncrease, label: "Indent", command: "indent" },
];

const fieldClass =
  "h-[34px] rounded-[6px] border border-[#dfe3e7] bg-[#f7f9fb] px-[10px] text-[13px] text-[#1f3a5a] outline-none focus:border-[#1b6ac9] focus:bg-white";

function Row({ label, children, alignTop }: { label: ReactNode; children: ReactNode; alignTop?: boolean }) {
  return (
    <div className={`grid grid-cols-[minmax(120px,250px)_1fr] gap-x-[12px] ${alignTop ? "items-start" : "items-center"}`}>
      <div className="text-right text-[14px] font-medium leading-[20px] text-[#2f4164]">{label}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function ToolbarIcon({ icon: Icon, label, onClick }: { icon: LucideIcon; label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      // Keep the editor's selection when clicking a format button.
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className="flex size-[26px] cursor-pointer items-center justify-center rounded-[4px] text-[#2f4164] hover:bg-white"
    >
      <Icon size={15} strokeWidth={2} />
    </button>
  );
}

function FooterButton({
  children,
  icon: Icon,
  variant,
  onClick,
}: {
  children: ReactNode;
  icon?: LucideIcon;
  variant: "primary" | "secondary";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[30px] cursor-pointer items-center gap-[6px] rounded-[6px] border px-[14px] text-[13px] ${
        variant === "primary"
          ? "border-[#0b63c5] bg-[#0b63c5] text-white hover:bg-[#0a57ad]"
          : "border-[#9cc1e6] bg-white text-[#1b6ac9] hover:bg-[#f2f7fd]"
      }`}
    >
      {Icon && <Icon size={15} strokeWidth={2.25} />}
      {children}
    </button>
  );
}

export default function ChangeStepModal({ item, onClose, onUpdate }: ChangeStepModalProps) {
  const currentNumber = stepNumber(item.step);
  const [nextStep, setNextStep] = useState(WORKFLOW_STEPS[Math.min(currentNumber, WORKFLOW_STEPS.length - 1)]);
  const [followUp, setFollowUp] = useState(toInputDate(item.followUp));
  const [dueDate, setDueDate] = useState(toInputDate(item.dueDate));
  const [otherEmail, setOtherEmail] = useState("");
  const [noNotifications, setNoNotifications] = useState(false);
  const [subject, setSubject] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const [showXnLabs, setShowXnLabs] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // The XN Labs modal sits on top of this one and handles its own Escape.
      if (e.key === "Escape" && !showXnLabs) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, showXnLabs]);

  const format = (command: string, value?: string) => {
    noteRef.current?.focus();
    document.execCommand(command, false, value);
  };

  const addFiles = (list: FileList | null) => {
    if (list) setFiles((prev) => [...prev, ...Array.from(list)]);
  };

  const submit = (select: boolean) => {
    const note = noteRef.current?.innerText.trim();
    onUpdate(
      {
        step: nextStep,
        followUp: fromInputDate(followUp),
        dueDate: fromInputDate(dueDate),
        latestMessage: note || subject || `This item has been moved to ${nextStep}.`,
      },
      select,
    );
  };

  return (
    <div className="fixed inset-0 z-[850] flex items-center justify-center bg-black/40 p-[16px] animate-in fade-in duration-150">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="change-step-title"
        className="flex max-h-full w-full max-w-[1056px] flex-col rounded-[6px] bg-white font-['Inter',sans-serif] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.25)]"
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          addFiles(e.dataTransfer.files);
        }}
      >
        <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-[#e6eaed] px-[20px]">
          <h2 id="change-step-title" className="text-[15px] font-semibold text-[#1b4f8a]">
            Change Step
          </h2>
          <button type="button" aria-label="Close" onClick={onClose} className="cursor-pointer rounded-[6px] p-[4px] text-[#5b6b7b] hover:bg-[#eef2f6]">
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-[12px] overflow-y-auto py-[18px] pl-[8px] pr-[30px]">
          <Row label="Current Step">
            <p className="text-[14px] text-[#2b3a4a]">
              {currentNumber} - {item.step}
            </p>
          </Row>
          <Row label="Next Step">
            <select
              value={nextStep}
              onChange={(e) => setNextStep(e.target.value)}
              className="h-[30px] w-[250px] cursor-pointer rounded-[6px] border border-[#cfd6dc] bg-white px-[8px] text-[13px] text-[#1b4f8a] outline-none focus:border-[#1b6ac9]"
            >
              {WORKFLOW_STEPS.map((step, i) =>
                step === item.step ? null : (
                  <option key={step} value={step}>
                    {i + 1} - {step}
                  </option>
                ),
              )}
            </select>
          </Row>
          <Row label="Follow Up Date">
            <input type="date" value={followUp} onChange={(e) => setFollowUp(e.target.value)} className={`${fieldClass} h-[30px] w-[161px] bg-white`} />
          </Row>
          <Row label="Due Date">
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={`${fieldClass} h-[30px] w-[161px] bg-white`} />
          </Row>
          <Row label="Other Email">
            <input type="email" value={otherEmail} onChange={(e) => setOtherEmail(e.target.value)} className={`${fieldClass} w-full`} />
          </Row>
          <Row label="No Notifications">
            <input
              type="checkbox"
              aria-label="No Notifications"
              checked={noNotifications}
              onChange={(e) => setNoNotifications(e.target.checked)}
              className="size-[15px] cursor-pointer"
            />
          </Row>
          <Row label="Message Subject">
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className={`${fieldClass} w-full`} />
          </Row>
          <Row label="Note">
            <div className="rounded-[6px] border border-[#dfe3e7] bg-[#f7f9fb]">
              <div className="flex flex-wrap items-center gap-[2px] rounded-t-[6px] bg-[#eef4fb] px-[6px] py-[6px]">
                {FORMAT_BUTTONS.map(({ icon, label, command }) => (
                  <ToolbarIcon key={command} icon={icon} label={label} onClick={() => format(command)} />
                ))}
                <ToolbarIcon
                  icon={Link}
                  label="Insert link"
                  onClick={() => {
                    const url = window.prompt("Link URL");
                    if (url) format("createLink", url);
                  }}
                />
                <ToolbarIcon icon={Code} label="View HTML" />
                <select aria-label="Font" className="mx-[4px] h-[30px] w-[160px] rounded-[6px] border border-[#cfd6dc] bg-white px-[8px] text-[13px] text-[#2f4164]">
                  <option>(inherited font)</option>
                  <option>Inter</option>
                  <option>Georgia</option>
                  <option>Courier New</option>
                </select>
                <select aria-label="Size" className="mx-[4px] h-[30px] w-[160px] rounded-[6px] border border-[#cfd6dc] bg-white px-[8px] text-[13px] text-[#2f4164]">
                  <option>(inherited size)</option>
                  <option>Small</option>
                  <option>Normal</option>
                  <option>Large</option>
                </select>
                <ToolbarIcon icon={Image} label="Insert image" />
                <ToolbarIcon icon={Puzzle} label="Insert merge tag" />
                <ToolbarIcon icon={PaintBucket} label="Background color" />
                <ToolbarIcon icon={PanelTop} label="Insert template" />
              </div>
              <div
                ref={noteRef}
                contentEditable
                role="textbox"
                aria-multiline="true"
                aria-label="Note"
                className="m-[4px] min-h-[160px] rounded-[4px] border border-[#dfe3e7] bg-white p-[10px] text-[13px] leading-[20px] text-[#2b3a4a] outline-none focus:border-[#1b6ac9] [&_ol]:list-decimal [&_ol]:pl-[24px] [&_ul]:list-disc [&_ul]:pl-[24px]"
              />
            </div>
          </Row>
          <Row
            alignTop
            label={
              <span className="block pt-[26px]">
                Attachments
                <br />
                (25 MB Upload Limit)
              </span>
            }
          >
            <div className={`rounded-[6px] border border-dashed p-[12px] ${isDragging ? "border-[#1b6ac9] bg-[#f2f7fd]" : "border-[#cfd6dc]"}`}>
              <div className="flex flex-wrap items-center gap-[8px] rounded-[6px] border border-[#dfe3e7] bg-[#f7f9fb] p-[8px]">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="h-[30px] cursor-pointer rounded-[6px] border border-[#9cc1e6] bg-white px-[10px] text-[13px] text-[#2f4164] hover:bg-[#f2f7fd]"
                >
                  Select files...
                </button>
                {files.map((file, i) => (
                  <span key={`${file.name}-${i}`} className="flex items-center gap-[4px] rounded-[4px] bg-white px-[8px] py-[3px] text-[12px] text-[#2b3a4a] shadow-[0_0_0_1px_#dfe3e7]">
                    {file.name}
                    <button
                      type="button"
                      aria-label={`Remove ${file.name}`}
                      onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                      className="cursor-pointer text-[#5b6b7b] hover:text-[#d4183d]"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
                <input ref={fileInputRef} type="file" multiple hidden onChange={(e) => addFiles(e.target.files)} />
              </div>
              <p className="mt-[10px] text-[12px] italic text-[#2b3a4a]">or drag and drop files anywhere on this form</p>
            </div>
          </Row>
          <Row label="Existing Attachments">
            <div className={`${fieldClass} w-full`} />
          </Row>
          <Row label="Documents">
            <div className={`${fieldClass} w-full`} />
          </Row>
          <Row label="Reports">
            <div className={`${fieldClass} w-full`} />
          </Row>
        </div>

        <div className="mx-[16px] flex shrink-0 flex-wrap justify-end gap-[8px] border-t border-[#e6eaed] px-[16px] py-[16px]">
          <FooterButton variant="secondary" icon={FlaskConical} onClick={() => setShowXnLabs(true)}>
            XN Labs
          </FooterButton>
          <FooterButton variant="primary" icon={Check} onClick={() => submit(true)}>
            Update and Select
          </FooterButton>
          <FooterButton variant="primary" icon={Check} onClick={() => submit(false)}>
            Update
          </FooterButton>
          <FooterButton variant="secondary" icon={Ban} onClick={onClose}>
            Cancel
          </FooterButton>
        </div>
      </div>
      {showXnLabs && (
        <XnLabsModal
          item={item}
          initialStep={nextStep}
          onClose={() => setShowXnLabs(false)}
          onSetNextStep={(step) => {
            setNextStep(step);
            setShowXnLabs(false);
          }}
        />
      )}
    </div>
  );
}
