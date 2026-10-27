export type ActionItem = {
  xn: string;
  type: string;
  step: string;
  assigned: string;
  followUp: string;
  dueDate: string;
  association: string;
  owner: string;
  address: string;
  description: string;
  latestMessage: string;
  closed: boolean;
};

const FIRST_ROWS: Omit<ActionItem, "assigned" | "followUp" | "dueDate" | "association" | "closed">[] = [
  { xn: "394606", type: "Add Charge Request", step: "Add Charge", owner: "Sirius Black", address: "411 Government Cir", description: "TEST seed - default-step-by-name probe", latestMessage: "This item has been moved to Add Charge." },
  { xn: "405526", type: "Bank Return", step: "Bank Return", owner: "David Chen", address: "200 Cedar Court Unit 1", description: "Returned payment - insufficient funds", latestMessage: "Bank return received from lockbox." },
  { xn: "397445", type: "Closing Task", step: "Needs Attention", owner: "Han Solo", address: "100 Forest Avenue Unit 1", description: "Resale certificate requested", latestMessage: "This item has been moved to Needs Attention." },
  { xn: "397441", type: "Closing Task", step: "Needs Attention", owner: "Han Solo", address: "100 Forest Avenue Unit 1", description: "Estoppel letter requested", latestMessage: "This item has been moved to Needs Attention." },
  { xn: "397440", type: "Closing Task", step: "Needs Attention", owner: "Han Solo", address: "100 Forest Avenue Unit 1", description: "Payoff statement requested", latestMessage: "This item has been moved to Needs Attention." },
  { xn: "397439", type: "Closing Task", step: "Needs Attention", owner: "Han Solo", address: "100 Forest Avenue Unit 1", description: "Transfer fee review", latestMessage: "This item has been moved to Needs Attention." },
];

const TYPES: [string, string[]][] = [
  ["Architectural Request", ["Application Received", "ARC Review", "Approved", "Denial"]],
  ["Violation", ["Courtesy Notice", "Second Notice", "Hearing Scheduled"]],
  ["Collections", ["Delinquency Letter", "Intent to Lien", "Payment Plan"]],
  ["Add Charge Request", ["Add Charge", "Needs Information"]],
  ["Closing Task", ["Needs Attention", "Completed"]],
  ["Work Order", ["Vendor Assigned", "Scheduled", "Awaiting Invoice"]],
];

const OWNERS: [string, string][] = [
  ["Leia Organa", "12 Alderaan Way"],
  ["Felix Leiter", "88 Langley Dr"],
  ["Sirius Black", "411 Government Cir"],
  ["David Chen", "200 Cedar Court Unit 1"],
  ["Hermione Granger", "4 Privet Ln"],
  ["Han Solo", "100 Forest Avenue Unit 1"],
  ["Ellen Ripley", "426 Nostromo Ct"],
];

const ASSIGNEES = ["", "", "Vantaca Support", "", "Jamie Ortiz", ""];

function date(offsetDays: number) {
  const d = new Date(2026, 9, 27 + offsetDays);
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`;
}

function buildItems(): ActionItem[] {
  const items: ActionItem[] = FIRST_ROWS.map((row) => ({
    ...row,
    assigned: "",
    followUp: "",
    dueDate: "",
    association: "Cedar Ridge",
    closed: false,
  }));

  // Deterministic filler so the grid pages the same way on every load.
  for (let i = 0; items.length < 67; i++) {
    const [type, steps] = TYPES[i % TYPES.length];
    const step = steps[i % steps.length];
    const [owner, address] = OWNERS[(i * 3) % OWNERS.length];
    items.push({
      xn: String(397438 - i * 7),
      type,
      step,
      assigned: ASSIGNEES[i % ASSIGNEES.length],
      followUp: i % 4 === 0 ? date(i % 9) : "",
      dueDate: i % 5 === 0 ? date(7 + (i % 14)) : "",
      association: "Cedar Ridge",
      owner,
      address,
      description: `${type} for ${address}`,
      latestMessage: `This item has been moved to ${step}.`,
      closed: false,
    });
  }

  // A handful of closed items that only show with "Include Closed".
  for (let i = 0; i < 8; i++) {
    const [owner, address] = OWNERS[i % OWNERS.length];
    items.push({
      xn: String(381200 - i * 11),
      type: TYPES[i % TYPES.length][0],
      step: "Closed",
      assigned: "Vantaca Support",
      followUp: "",
      dueDate: "",
      association: "Cedar Ridge",
      owner,
      address,
      description: "Resolved",
      latestMessage: "This item has been closed.",
      closed: true,
    });
  }
  return items;
}

export const ACTION_ITEMS = buildItems();

// Shared workflow used by the Change Step dialog; each item's current step is
// matched by name, and anything unrecognized is treated as step 1.
export const WORKFLOW_STEPS = [
  "Add Charge",
  "Legal Charge Request",
  "Needs Information",
  "Needs Attention",
  "Bank Return",
  "ARC Review",
  "Approved",
  "Denial",
  "Completed",
  "Closed",
];

export const stepNumber = (step: string) => Math.max(0, WORKFLOW_STEPS.indexOf(step)) + 1;
