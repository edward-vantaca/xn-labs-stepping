import { useEffect, useState, type ReactNode } from "react";
import { Bell, ChevronDown, ChevronUp, FileText, Mail, User, Workflow, X } from "lucide-react";
import { WORKFLOW_STEPS, stepNumber, type ActionItem } from "./actionItemsData";
import ConfigurationPanel from "../imports/ConfigurationPanel";

type StepDetail = {
  summary: string;
  notification: string;
  roles: string[];
  letters: string[];
  automatedActions: string[];
  charges: string[];
};

const USER_PREFERENCE =
  "User Preference - Sends a notification based on how each recipient has chosen to receive communications (email, paper, etc.).";

const STEP_DETAILS: Record<string, Partial<StepDetail>> = {
  "Legal Charge Request": {
    summary:
      "The charge request is escalated to the association's legal counsel for review. The owner is notified that a legal charge may be applied, and a Legal Charge Notice letter is generated for the record.",
    roles: ["Legal Counsel", "Homeowner"],
    letters: ["Legal Charge Notice"],
    charges: ["Legal Review Fee - $75.00"],
  },
  "Needs Information": {
    summary:
      "The item is paused until the homeowner supplies the missing details. A request for information is sent, and the item's follow up date is set seven days out.",
    letters: ["Information Request"],
    automatedActions: ["Set follow up date +7 days"],
  },
  "Bank Return": {
    summary:
      "The returned payment is reversed on the owner's ledger and a returned-payment fee is assessed. The homeowner is notified of the return and the new balance.",
    letters: ["Returned Payment Notice"],
    charges: ["Returned Payment Fee - $25.00"],
  },
  Denial: {
    summary:
      "The request is marked as denied. The homeowner receives a denial letter explaining the decision, and the item is closed after the appeal window ends.",
    letters: ["Denial Letter"],
    automatedActions: ["Close item after 30 days"],
  },
  Closed: {
    summary: "The item is closed. No further notifications are sent and no holds, blocks, or charges remain active.",
    roles: [],
    letters: [],
  },
};

function detailFor(step: string): StepDetail {
  return {
    summary: `The item advances to ${step}. The assigned role is notified of the change and the step's letters are generated for the record. No holds, blocks, or closures apply at this step.`,
    notification: USER_PREFERENCE,
    roles: ["Homeowner"],
    letters: [`${step} Notice`],
    automatedActions: [],
    charges: [],
    ...STEP_DETAILS[step],
  };
}

function Section({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div className="border-t border-[#e6eaed]">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex h-[46px] w-full cursor-pointer items-center justify-between px-[24px] text-[14px] font-medium text-[#2f4164]"
      >
        {title}
        {open ? <ChevronUp size={18} className="text-[#2f4164]" /> : <ChevronDown size={18} className="text-[#8a96a3]" />}
      </button>
      {open && <div className="px-[24px] pb-[16px]">{children}</div>}
    </div>
  );
}

function SubHeading({ icon: Icon, children }: { icon: typeof Bell; children: ReactNode }) {
  return (
    <p className="flex items-center gap-[8px] text-[14px] font-medium text-[#1f2a37]">
      <Icon size={15} strokeWidth={1.75} />
      {children}
    </p>
  );
}

type XnLabsModalProps = {
  item: ActionItem;
  initialStep: string;
  onClose: () => void;
  onSetNextStep: (step: string) => void;
};

export default function XnLabsModal({ item, initialStep, onClose, onSetNextStep }: XnLabsModalProps) {
  const [step, setStep] = useState(initialStep);
  const [open, setOpen] = useState({ notifications: true, actions: false, charges: false });
  const [previewing, setPreviewing] = useState<"Letter" | "Email" | null>(null);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const detail = detailFor(step);
  const index = WORKFLOW_STEPS.indexOf(step);
  const timeline = WORKFLOW_STEPS.slice(index, index + 4);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const toggle = (key: keyof typeof open) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  const simulate = (next: string) => {
    setStep(next);
    setPreviewing(null);
  };

  // Diagram cards are titled "2. ARC Review"; only steps in the workflow list can be simulated.
  const simulateFromDiagram = (title: string) => {
    const name = title.replace(/^\d+\.\s*/, "");
    if (WORKFLOW_STEPS.includes(name) && name !== item.step) simulate(name);
  };

  return (
    <div className="fixed inset-0 z-[870] flex items-center justify-center bg-black/30 p-[16px] animate-in fade-in duration-150" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="XN Labs"
        onClick={(e) => e.stopPropagation()}
        className={`flex w-full flex-col overflow-hidden rounded-[8px] bg-white font-['Inter',sans-serif] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.25)] ${
          showWorkflow ? "h-full max-w-[1800px]" : "max-h-full max-w-[640px]"
        }`}
      >
        <div className="flex shrink-0 items-start justify-between border-b border-[#e6eaed] px-[24px] py-[14px]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.4px] text-[#1b6ac9]">{item.type}</p>
            <h2 className="text-[17px] font-semibold text-[#1f2a37]">
              {stepNumber(item.step)}. {item.step}
            </h2>
          </div>
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              aria-pressed={showWorkflow}
              onClick={() => setShowWorkflow((v) => !v)}
              className={`flex h-[32px] cursor-pointer items-center gap-[6px] rounded-[6px] border px-[12px] text-[13px] ${
                showWorkflow ? "border-[#1b6ac9] bg-[#eaf3fd] text-[#1b6ac9]" : "border-[#9cc1e6] bg-white text-[#1b6ac9] hover:bg-[#f2f7fd]"
              }`}
            >
              <Workflow size={15} />
              {showWorkflow ? "Hide Workflow" : "View Workflow"}
            </button>
            <button type="button" aria-label="Close" onClick={onClose} className="cursor-pointer rounded-[6px] p-[4px] text-[#5b6b7b] hover:bg-[#eef2f6]">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          {showWorkflow && (
            <div
              // Start centered on the diagram, which is wider than most screens.
              ref={(el) => {
                if (el && !el.dataset.centered) {
                  el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
                  el.dataset.centered = "true";
                }
              }}
              className="min-w-0 flex-1 overflow-auto border-r border-[#e6eaed]"
            >
              <div className="h-full w-max min-w-full">
                <ConfigurationPanel onSelectStep={simulateFromDiagram} showHeader={false} />
              </div>
            </div>
          )}
          <div className={`flex min-h-0 flex-col ${showWorkflow ? "w-[440px] shrink-0" : "w-full"}`}>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <div className="flex flex-col gap-[16px] px-[24px] py-[18px]">
                <div className="flex flex-col gap-[8px]">
                  <label htmlFor="simulate-step" className="text-[14px] font-medium text-[#1f2a37]">
                    Simulate Next Step
                  </label>
                  <div className="relative">
                    <select
                      id="simulate-step"
                      value={step}
                      onChange={(e) => simulate(e.target.value)}
                      className="h-[40px] w-full cursor-pointer appearance-none rounded-[6px] border border-[#cfd6dc] bg-white px-[12px] text-[14px] text-[#1f2a37] outline-none focus:border-[#1b6ac9]"
                    >
                      {WORKFLOW_STEPS.map((s, i) =>
                        s === item.step ? null : (
                          <option key={s} value={s}>
                            {i + 1}: {s}
                          </option>
                        ),
                      )}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-[12px] top-[11px] text-[#5b6b7b]" />
                  </div>
                </div>

                <ol className="flex flex-col">
                  {timeline.map((s, i) => (
                    <li key={s} className="relative flex items-center gap-[14px] pb-[8px] text-[13px] last:pb-0">
                      {i < timeline.length - 1 && <span aria-hidden="true" className="absolute left-[4px] top-[14px] h-[calc(100%-8px)] w-px bg-[#c9d3dd]" />}
                      <span
                        aria-hidden="true"
                        className={`relative size-[9px] shrink-0 rounded-full ${i === 0 ? "border-[1.5px] border-[#1b6ac9] bg-white" : "bg-[#1b6ac9]"}`}
                      />
                      {i === 0 ? (
                        <span className="font-medium text-[#1f2a37]">{s}</span>
                      ) : (
                        <button type="button" onClick={() => simulate(s)} className="cursor-pointer text-[#1b6ac9] hover:underline">
                          {s}
                        </button>
                      )}
                    </li>
                  ))}
                </ol>

                <div className="flex flex-col gap-[8px]">
                  <p className="text-[15px] font-semibold text-[#1f2a37]">Step Summary</p>
                  <p className="rounded-[6px] bg-[#f0f1f3] px-[14px] py-[12px] text-[13px] leading-[20px] text-[#3c4a59]">{detail.summary}</p>
                </div>
              </div>

              <Section title="Notifications Summary" open={open.notifications} onToggle={() => toggle("notifications")}>
                <div className="flex flex-col gap-[12px] rounded-[6px] border border-[#cfe0f2] p-[14px]">
                  <SubHeading icon={Bell}>Notifications:</SubHeading>
                  <p className="-mt-[4px] text-[13px] leading-[20px] text-[#3c4a59]">{detail.notification}</p>

                  <SubHeading icon={User}>Roles:</SubHeading>
                  {detail.roles.length === 0 ? (
                    <p className="text-[13px] text-[#5b6b7b]">No roles are notified at this step.</p>
                  ) : (
                    <div className="flex flex-wrap gap-[8px]">
                      {detail.roles.map((role) => (
                        <span key={role} className="rounded-[4px] bg-[#eaf3fd] px-[10px] py-[5px] text-[13px] text-[#1b6ac9]">
                          {role}
                        </span>
                      ))}
                    </div>
                  )}

                  <SubHeading icon={Mail}>Preview Communication:</SubHeading>
                  <div className="grid grid-cols-2 gap-[10px]">
                    {(["Letter", "Email"] as const).map((kind) => (
                      <button
                        key={kind}
                        type="button"
                        aria-pressed={previewing === kind}
                        onClick={() => setPreviewing(previewing === kind ? null : kind)}
                        className={`h-[36px] cursor-pointer rounded-[6px] border text-[13px] ${
                          previewing === kind ? "border-[#1b6ac9] bg-[#eaf3fd] text-[#1b6ac9]" : "border-[#cfd6dc] bg-white text-[#3c4a59] hover:bg-[#f7f9fb]"
                        }`}
                      >
                        {kind}
                      </button>
                    ))}
                  </div>
                  {previewing && (
                    <div className="rounded-[6px] border border-[#e6eaed] bg-[#fafbfc] p-[12px] text-[13px] leading-[20px] text-[#3c4a59]">
                      <p className="font-medium text-[#1f2a37]">
                        {previewing === "Email" ? `Subject: Update on XN ${item.xn}` : `${detail.letters[0] ?? "Letter"} - ${item.association}`}
                      </p>
                      <p className="mt-[6px]">Dear {item.owner},</p>
                      <p>
                        Your {item.type.toLowerCase()} for {item.address} has moved to <span className="font-medium">{step}</span>. {detail.summary.split(". ")[0]}.
                      </p>
                    </div>
                  )}

                  <SubHeading icon={FileText}>Letters:</SubHeading>
                  {detail.letters.length === 0 ? (
                    <p className="text-[13px] text-[#5b6b7b]">No letters are generated at this step.</p>
                  ) : (
                    detail.letters.map((letter) => (
                      <p key={letter} className="rounded-[4px] bg-[#f0f1f3] px-[8px] py-[6px] text-[13px] text-[#3c4a59]">
                        {letter}
                      </p>
                    ))
                  )}
                </div>
              </Section>

              <Section title="Automated Actions Summary" open={open.actions} onToggle={() => toggle("actions")}>
                {detail.automatedActions.length === 0 ? (
                  <p className="text-[13px] text-[#5b6b7b]">No automated actions run at this step.</p>
                ) : (
                  <ul className="list-disc pl-[18px] text-[13px] leading-[22px] text-[#3c4a59]">
                    {detail.automatedActions.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                )}
              </Section>

              <Section title="Charges" open={open.charges} onToggle={() => toggle("charges")}>
                {detail.charges.length === 0 ? (
                  <p className="text-[13px] text-[#5b6b7b]">No charges are applied at this step.</p>
                ) : (
                  <ul className="list-disc pl-[18px] text-[13px] leading-[22px] text-[#3c4a59]">
                    {detail.charges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                )}
              </Section>
            </div>

            <div className="flex shrink-0 justify-end gap-[10px] border-t border-[#e6eaed] px-[24px] py-[14px]">
              <button
                type="button"
                onClick={onClose}
                className="h-[34px] cursor-pointer rounded-[6px] border border-[#cfd6dc] bg-white px-[18px] text-[13px] text-[#3c4a59] hover:bg-[#f7f9fb]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onSetNextStep(step)}
                className="h-[34px] cursor-pointer rounded-[6px] bg-[#0b63c5] px-[18px] text-[13px] font-medium text-white hover:bg-[#0a57ad]"
              >
                Set as Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
