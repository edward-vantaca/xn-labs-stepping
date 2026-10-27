import { useMemo, useState, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faBars,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faFilter,
  faForwardStep,
  faGear,
  faPaperclip,
  faPlus,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faCircleCheck, faFileExcel, faSquareCheck, faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { ACTION_ITEMS, type ActionItem } from "./actionItemsData";
import RowActionsMenu, { type RowAction } from "./RowActionsMenu";
import ChangeStepModal, { type StepChanges } from "./ChangeStepModal";
import { useOpenEditModal } from "../EditModalContext";

type FilterKey = "xn" | "type" | "step" | "assigned" | "followUp" | "dueDate" | "details";

const COLUMNS: { key: FilterKey; label: string; width: string; date?: boolean }[] = [
  { key: "xn", label: "XN", width: "10%" },
  { key: "type", label: "Type", width: "13%" },
  { key: "step", label: "Step", width: "15%" },
  { key: "assigned", label: "Assigned", width: "11%" },
  { key: "followUp", label: "Follow Up", width: "11.5%", date: true },
  { key: "dueDate", label: "Due Date", width: "11.5%", date: true },
  { key: "details", label: "Details", width: "auto" },
];

const PAGE_SIZES = [10, 20, 50];

function cellValue(item: ActionItem, key: FilterKey) {
  return key === "details" ? `${item.association} ${item.owner} ${item.address}` : item[key];
}

function ToolbarButton({ icon, children, onClick }: { icon: typeof faPlus; children: ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[30px] cursor-pointer items-center gap-[6px] rounded-[6px] border border-[#9cc1e6] bg-white px-[10px] text-[13px] text-[#1b6ac9] hover:bg-[#f2f7fd]"
    >
      <FontAwesomeIcon icon={icon} className="text-[12px]" />
      {children}
    </button>
  );
}

function IconSquareButton({ icon, label, onClick }: { icon: typeof faPlus; label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-[28px] cursor-pointer items-center justify-center rounded-[6px] border border-[#9cc1e6] bg-white text-[13px] text-[#1b6ac9] hover:bg-[#f2f7fd]"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

function SidebarField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[2px] text-[13px] leading-[19px] [&_p]:text-[13px] [&_p]:leading-[19px]">
      <p className="font-medium text-[#214c75]">{label}</p>
      <div className="text-[#2b3a4a]">{children}</div>
    </div>
  );
}

function ActionCenter({ item }: { item: ActionItem }) {
  return (
    <div className="relative flex h-full w-[262px] shrink-0 flex-col bg-white" data-name="Action Center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 border-x border-solid border-[#dbdee0]" />
      <div className="border-b border-[#dbdee0] p-[16px]">
        <p className="text-[15px] font-semibold text-[#214c75]">Action Center</p>
      </div>
      <div className="flex gap-[16px] border-b border-[#dbdee0] px-[16px] py-[10px] text-[15px] text-[#1b6ac9]">
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <div className="flex flex-1 flex-col gap-[18px] overflow-y-auto px-[16px] py-[18px]">
        <SidebarField label="Current Item - My Items">
          <p>
            <span className="text-[#1b6ac9]">XN: {item.xn}</span> - {item.type}
          </p>
          <p>{item.step}</p>
        </SidebarField>
        <SidebarField label="Association">
          <p className="text-[#1b6ac9]">{item.association}</p>
        </SidebarField>
        <SidebarField label="Owner">
          <p className="text-[#1b6ac9]">{item.owner}</p>
        </SidebarField>
        <SidebarField label="Description">
          <p>{item.description}</p>
        </SidebarField>
        <SidebarField label="Latest Message">
          <p>{item.latestMessage}</p>
        </SidebarField>
      </div>
      <div className="border-t border-[#dbdee0] px-[16px] py-[8px] text-center text-[11px] text-[#5b6b7b]">
        <p>© 2026 - Vantaca, LLC</p>
        <p className="flex justify-center gap-[16px] text-[#1b6ac9] underline">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </p>
      </div>
    </div>
  );
}

function FilterInput({ value, onChange, date }: { value: string; onChange: (v: string) => void; date?: boolean }) {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="relative min-w-0 flex-1">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={date ? "MM/DD/YYYY" : undefined}
          className="h-[30px] w-full rounded-[6px] border border-[#cfd6dc] bg-white px-[8px] text-[13px] text-[#2b3a4a] outline-none placeholder:text-transparent focus:border-[#1b6ac9] focus:placeholder:text-[#a7b1bb]"
        />
        {date && <FontAwesomeIcon icon={faCalendar} className="pointer-events-none absolute right-[8px] top-[8px] text-[13px] text-[#5b6b7b]" />}
      </div>
      <FontAwesomeIcon icon={faFilter} className={`text-[13px] ${value ? "text-[#1b6ac9]" : "text-[#2b3a4a]"}`} />
    </div>
  );
}

function PagerButton({ icon, label, disabled, onClick }: { icon: typeof faPlus; label: string; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-[30px] w-[34px] cursor-pointer items-center justify-center rounded-[3px] border border-[#9cc1e6] bg-white text-[13px] text-[#1b6ac9] hover:bg-[#f2f7fd] disabled:cursor-default disabled:border-[#d5e3f1] disabled:text-[#a9c4e3] disabled:hover:bg-white"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

type ActionItemsPageProps = {
  sidebarNav: ReactNode;
  collapseControl: ReactNode;
};

export default function ActionItemsPage({ sidebarNav, collapseControl }: ActionItemsPageProps) {
  const [includeClosed, setIncludeClosed] = useState(false);
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    xn: "", type: "", step: "", assigned: "", followUp: "", dueDate: "", details: "",
  });
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [items, setItems] = useState(ACTION_ITEMS);
  const [currentXn, setCurrentXn] = useState(ACTION_ITEMS[0].xn);
  const [stepItemXn, setStepItemXn] = useState<string | null>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const openEditModal = useOpenEditModal();

  const visible = useMemo(
    () =>
      items.filter(
        (item) =>
          (includeClosed || !item.closed) &&
          COLUMNS.every(({ key }) => cellValue(item, key).toLowerCase().includes(filters[key].trim().toLowerCase())),
      ),
    [items, includeClosed, filters],
  );

  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
  const page = Math.min(pageIndex, pageCount - 1);
  const rows = visible.slice(page * pageSize, page * pageSize + pageSize);
  const current = items.find((item) => item.xn === currentXn) ?? items[0];
  const stepItem = items.find((item) => item.xn === stepItemXn);
  const allOnPageChecked = rows.length > 0 && rows.every((r) => checked.has(r.xn));

  const toggle = (set: Set<string>, xn: string) => {
    const next = new Set(set);
    if (next.has(xn)) next.delete(xn);
    else next.add(xn);
    return next;
  };

  const handleRowAction = (item: ActionItem, action: RowAction) => {
    setCurrentXn(item.xn);
    if (action === "edit") openEditModal();
    else if (action === "step") setStepItemXn(item.xn);
    else if (action === "select") setChecked((set) => toggle(set, item.xn));
    else if (action === "copy") navigator.clipboard?.writeText(item.xn).catch(() => {});
  };

  const applyStepChange = (xn: string, changes: StepChanges, select: boolean) => {
    setItems((list) => list.map((item) => (item.xn === xn ? { ...item, ...changes, closed: changes.step === "Closed" } : item)));
    if (select) setChecked((set) => new Set(set).add(xn));
    setStepItemXn(null);
  };

  const setFilter = (key: FilterKey, value: string) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setPageIndex(0);
  };

  return (
    <>
      <div className="relative z-[2] flex h-full shrink-0 items-start" data-name="Sidebar Panel">
        {sidebarNav}
        <ActionCenter item={current} />
        {collapseControl}
      </div>

      <div className="relative z-[1] flex h-full min-w-0 flex-1 flex-col gap-[14px] overflow-hidden bg-slate-50 p-[22px] font-['Inter',sans-serif]" data-name="Stage">
        <div className="pl-[3px]">
          <h1 className="text-[20px] font-semibold text-[#214c75]">
            All Action Items - <span className="text-[#1b6ac9]">(ICS1) Cedar Ridge</span>
          </h1>
          <div className="mt-[10px] text-[13px] leading-[19px]">
            <p className="font-medium text-[#214c75]">Manager</p>
            <p className="text-[#2b3a4a]">Vantaca Support</p>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col rounded-[5px] border border-[#dbdee0] bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.04)]">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-[10px] border-b border-[#e6eaed] px-[16px] py-[14px]">
            <ToolbarButton icon={faPlus}>New Action Item</ToolbarButton>
            <label className="flex cursor-pointer items-center gap-[6px] text-[14px] text-[#2b3a4a]">
              <input
                type="checkbox"
                checked={includeClosed}
                onChange={(e) => {
                  setIncludeClosed(e.target.checked);
                  setPageIndex(0);
                }}
                className="size-[13px]"
              />
              Include Closed
            </label>
            <div className="flex h-[30px] w-[190px] items-center justify-between rounded-[6px] border border-[#cfd6dc] px-[8px] text-[13px] text-[#2b3a4a]">
              Last 90 Days
              <FontAwesomeIcon icon={faCalendar} className="text-[#5b6b7b]" />
            </div>
            <ToolbarButton icon={faCircleCheck}>Save Custom List</ToolbarButton>
            <ToolbarButton icon={faFileExcel}>Export to Excel</ToolbarButton>
            <ToolbarButton icon={faSquareCheck}>Bulk Step{checked.size > 0 ? ` (${checked.size})` : ""}</ToolbarButton>
            <div className="ml-auto flex gap-[6px]">
              <IconSquareButton icon={faWindowMaximize} label="Toggle layout" />
              <IconSquareButton icon={faGear} label="Grid settings" />
            </div>
          </div>

          <p className="border-b border-[#e6eaed] px-[16px] py-[16px] text-[13px] text-[#2b3a4a]">
            Drag a column header and drop it here to group by that column
          </p>

          {/* Grid */}
          <div className="min-h-0 flex-1 overflow-auto">
            <table className="w-full min-w-[1000px] table-fixed border-collapse text-[13px] text-[#1f3a5a]">
              <colgroup>
                <col style={{ width: 36 }} />
                <col style={{ width: 52 }} />
                {COLUMNS.map((c) => (
                  <col key={c.key} style={{ width: c.width }} />
                ))}
                <col style={{ width: 70 }} />
              </colgroup>
              <thead className="sticky top-0 z-[1] bg-white">
                <tr className="h-[44px] border-b border-[#e6eaed] text-left">
                  <th className="pl-[14px] font-medium text-[#5b6b7b]">...</th>
                  <th className="px-[12px]">
                    <input
                      type="checkbox"
                      aria-label="Select all on this page"
                      checked={allOnPageChecked}
                      onChange={() =>
                        setChecked((set) => {
                          const next = new Set(set);
                          rows.forEach((r) => (allOnPageChecked ? next.delete(r.xn) : next.add(r.xn)));
                          return next;
                        })
                      }
                      className="size-[13px]"
                    />
                  </th>
                  {COLUMNS.map((c) => (
                    <th key={c.key} className="px-[10px] text-[14px] font-semibold text-[#214c75]">
                      <div className="flex items-center justify-between gap-[6px]">
                        <span className="truncate">{c.label}</span>
                        <FontAwesomeIcon icon={faBars} className="text-[12px] text-[#9aa6b2]" />
                      </div>
                    </th>
                  ))}
                  <th />
                </tr>
                <tr className="h-[52px] border-b border-[#e6eaed]">
                  <th />
                  <th />
                  {COLUMNS.map((c) => (
                    <th key={c.key} className="px-[10px] font-normal">
                      <FilterInput value={filters[c.key]} onChange={(v) => setFilter(c.key, v)} date={c.date} />
                    </th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={COLUMNS.length + 3} className="py-[40px] text-center text-[#5b6b7b]">
                      No action items match these filters.
                    </td>
                  </tr>
                )}
                {rows.map((item, i) => {
                  const isCurrent = item.xn === current.xn;
                  const isExpanded = expanded.has(item.xn);
                  const bg = isCurrent ? "bg-[#e3f9ef]" : i % 2 ? "bg-[#f3f7fb]" : "bg-white";
                  return [
                    <tr
                      key={item.xn}
                      onClick={() => setCurrentXn(item.xn)}
                      className={`h-[80px] cursor-pointer border-b border-[#e6eaed] ${bg} ${isCurrent ? "" : "hover:bg-[#eaf2fb]"}`}
                    >
                      <td className="pl-[16px]">
                        <button
                          type="button"
                          aria-label={isExpanded ? "Collapse row" : "Expand row"}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpanded((set) => toggle(set, item.xn));
                          }}
                          className="cursor-pointer px-[4px] text-[#1f3a5a]"
                        >
                          <FontAwesomeIcon icon={isExpanded ? faCaretDown : faCaretRight} />
                        </button>
                      </td>
                      <td className="px-[12px]" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          aria-label={`Select XN ${item.xn}`}
                          checked={checked.has(item.xn)}
                          onChange={() => setChecked((set) => toggle(set, item.xn))}
                          className="size-[13px]"
                        />
                      </td>
                      <td className="px-[14px]">{item.xn}</td>
                      <td className="truncate px-[14px]">{item.type}</td>
                      <td className="truncate px-[14px]">{item.step}</td>
                      <td className="truncate px-[14px]">{item.assigned}</td>
                      <td className="px-[14px]">{item.followUp}</td>
                      <td className="px-[14px]">{item.dueDate}</td>
                      <td className="px-[14px] leading-[21px]">
                        <p>{item.association}</p>
                        <p>{item.owner}</p>
                        <p>{item.address}</p>
                      </td>
                      <td className="pr-[16px] text-center">
                        <RowActionsMenu label={`Actions for XN ${item.xn}`} onAction={(action) => handleRowAction(item, action)} />
                      </td>
                    </tr>,
                    isExpanded && (
                      <tr key={`${item.xn}-detail`} className="border-b border-[#e6eaed] bg-[#fafcfe]">
                        <td />
                        <td colSpan={COLUMNS.length + 2} className="px-[14px] py-[12px] text-[13px] leading-[20px] text-[#2b3a4a]">
                          <p>
                            <span className="font-medium text-[#214c75]">Description: </span>
                            {item.description}
                          </p>
                          <p>
                            <span className="font-medium text-[#214c75]">Latest Message: </span>
                            {item.latestMessage}
                          </p>
                        </td>
                      </tr>
                    ),
                  ];
                })}
              </tbody>
            </table>
          </div>

          {/* Pager */}
          <div className="flex flex-wrap items-center gap-[8px] border-t border-[#e6eaed] px-[10px] py-[8px] text-[13px] text-[#2b3a4a]">
            <PagerButton icon={faBackwardStep} label="First page" disabled={page === 0} onClick={() => setPageIndex(0)} />
            <PagerButton icon={faCaretLeft} label="Previous page" disabled={page === 0} onClick={() => setPageIndex(page - 1)} />
            <span className="ml-[24px]">Page</span>
            <input
              aria-label="Page number"
              value={page + 1}
              onChange={(e) => {
                const n = Number(e.target.value);
                if (n >= 1 && n <= pageCount) setPageIndex(n - 1);
              }}
              className="h-[30px] w-[38px] rounded-[2px] border border-[#cfd6dc] px-[8px]"
            />
            <span className="mr-[24px]">of {pageCount}</span>
            <PagerButton icon={faCaretRight} label="Next page" disabled={page >= pageCount - 1} onClick={() => setPageIndex(page + 1)} />
            <PagerButton icon={faForwardStep} label="Last page" disabled={page >= pageCount - 1} onClick={() => setPageIndex(pageCount - 1)} />
            <select
              aria-label="Items per page"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0);
              }}
              className="ml-[32px] h-[30px] w-[66px] cursor-pointer rounded-[2px] border border-[#cfd6dc] bg-white px-[8px]"
            >
              {PAGE_SIZES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span>items per page</span>
            <span className="ml-auto mr-[24px]">
              {visible.length === 0 ? "0 items" : `${page * pageSize + 1} - ${page * pageSize + rows.length} of ${visible.length} items`}
            </span>
            <IconSquareButton icon={faRotateRight} label="Refresh" />
          </div>
        </div>
      </div>
      {stepItem && (
        <ChangeStepModal
          key={stepItem.xn}
          item={stepItem}
          onClose={() => setStepItemXn(null)}
          onUpdate={(changes, select) => applyStepChange(stepItem.xn, changes, select)}
        />
      )}
    </>
  );
}
