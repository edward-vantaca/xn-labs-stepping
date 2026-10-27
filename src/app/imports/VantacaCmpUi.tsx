import svgPaths from "./svg-ulogil72rv";
import { useOpenEditModal } from "../EditModalContext";
import { useNavigation, type Page } from "../NavigationContext";
import ActionItemsPage from "../pages/ActionItemsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBuildingColumns, faChevronDown, faChevronLeft, faLaptop, faMagnifyingGlass, faPhone, faRightFromBracket, faRotateRight, faTableCellsLarge, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import imgBranding from "../../assets/6eff58147100862424a24b46bcc09326c5ebbae8.png";
import { Home, Phone, Mail, Settings, User, MessageSquare, Bell, Menu, ChevronLeft, Edit3 } from "lucide-react";

function Frame310() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[6px] items-center justify-end leading-[normal] not-italic overflow-clip px-0 py-[8px] relative text-[#084d78] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">
      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">Beta</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">|</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">Welcome Admin</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">|</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">LOG OUT</p>
      <p className="relative shrink-0"><FontAwesomeIcon icon={faRightFromBracket} /></p>
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="w-full h-[80px] px-6 flex flex-row justify-between items-center relative shrink-0 z-[2]" data-name="HEADER BAR">
      <div className=" h-[48.246px] relative w-[125px]" data-name="Branding">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBranding} />
      </div>
           
      <Frame310 />
    </div>
  );
}

const NAV_ITEMS: { label: string; page?: Page }[] = [
  { label: "Home", page: "dashboard" },
  { label: "Action Items", page: "actionItems" },
  { label: "Homeowners" },
  { label: "Associations" },
  { label: "Accounting" },
  { label: "Settings" },
  { label: "Mailroom" },
  { label: "Reports" },
  { label: "System" },
  { label: "Management" },
  { label: "Help" },
];

function NavItems() {
  const { navigate } = useNavigation();
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[28px] items-start leading-[normal] ml-[336px] mt-[15px] not-italic relative text-[#0a5c8f] text-[13px] text-nowrap tracking-[0.39px] whitespace-pre" data-name="Nav Items">
      {NAV_ITEMS.map(({ label, page }) =>
        page ? (
          <button key={label} type="button" className="relative shrink-0 cursor-pointer bg-transparent p-0 hover:underline" onClick={() => navigate(page)}>
            {label}
          </button>
        ) : (
          <p key={label} className="relative shrink-0">{label}</p>
        ),
      )}
    </div>
  );
}

function MainNav() {
  return (
    <div className="w-full grid grid-rows-[max-content] place-items-start relative shrink-0 z-[1]" data-name="MAIN NAV">
      <div className="[grid-area:1_/_1] bg-white h-[45px] ml-0 mt-0 w-full" />
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-0 relative w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(219, 222, 224, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1">
            <line id="Line 1" opacity="0.6" stroke="var(--stroke-0, #DBDEE0)" x2="1400" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[46px] relative w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(219, 222, 224, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1">
            <line id="Line 1" opacity="0.6" stroke="var(--stroke-0, #DBDEE0)" x2="1400" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <NavItems />
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex flex-col gap-px isolate items-start leading-[0] relative shrink-0 w-full">
      <HeaderBar />
      <MainNav />
    </div>
  );
}

function RailIcon({ icon, active }: { icon: IconDefinition; active: boolean }) {
  return (
    <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap ${active ? "text-[16px] text-white" : "text-[#3a9cd8] text-[17.624px]"}`}>
      <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={icon} /></p>
    </div>
  );
}

function Nav() {
  const { page } = useNavigation();
  const activeIndex = page === "actionItems" ? 0 : 1;
  return (
    <div className="content-stretch flex flex-col gap-[45px] items-center relative shrink-0 w-[24px]" data-name="NAV">
      <div className="absolute left-[-4px] size-[32px]" style={{ top: activeIndex === 0 ? -7 : 56 }} data-name="Active Item Calls">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p38d36b00} fill="var(--fill-0, #0E9BF1)" id="Active Item Calls" />
        </svg>
      </div>
      {[faBolt, faPhone, faBuildingColumns, faWandMagicSparkles].map((icon, i) => (
        <RailIcon key={i} icon={icon} active={i === activeIndex} />
      ))}
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0 w-[24px]" data-name="NAV">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#3a9cd8] text-[17.624px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faLaptop} /></p>
      </div>
      <div className="absolute left-[-4px] size-[32px] top-[44px]" data-name="Active Item Calls">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p38d36b00} fill="var(--fill-0, #0E9BF1)" id="Active Item Calls" />
        </svg>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faTableCellsLarge} /></p>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#3a9cd8] text-[17.624px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faMoon} /></p>
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-center justify-between px-[5px] py-[23px] relative shrink-0 w-[52px]" data-name="Sidebar Nav">
      <Nav />
      <Nav1 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#214c75] text-[15px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Call Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow h-[35px] min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[35px] items-center px-[12px] py-0 w-full" />
      </div>
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[35px] items-center justify-center relative rounded-[4px] shrink-0 w-[32px]">
      <div aria-hidden="true" className="absolute border border-[#3171c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#3171c7] text-[17px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame252 />
      <Frame251 />
    </div>
  );
}

function CmpCallCenterInput() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="CMP Call Center Input">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-[238px]">
        <p className="leading-[normal]">Ticket #</p>
      </div>
      <Frame253 />
    </div>
  );
}

function Frame255() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow h-[35px] min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[35px] items-center px-[12px] py-0 w-full" />
      </div>
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[35px] items-center justify-center relative rounded-[4px] shrink-0 w-[32px]">
      <div aria-hidden="true" className="absolute border border-[#3171c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#3171c7] text-[17px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
      </div>
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame255 />
      <Frame256 />
    </div>
  );
}

function CmpCallCenterInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="CMP Call Center Input">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-[238px]">
        <p className="leading-[normal]">Assoc</p>
      </div>
      <Frame257 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow h-[35px] min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[35px] items-center px-[12px] py-0 w-full" />
      </div>
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[35px] items-center justify-center relative rounded-[4px] shrink-0 w-[32px]">
      <div aria-hidden="true" className="absolute border border-[#3171c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#3171c7] text-[17px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
      </div>
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame258 />
      <Frame259 />
    </div>
  );
}

function CmpCallCenterInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="CMP Call Center Input">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-[238px]">
        <p className="leading-[normal]">Owner</p>
      </div>
      <Frame260 />
    </div>
  );
}

function Frame261() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow h-[35px] min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[35px] items-center leading-[0] not-italic px-[12px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#084d78] text-[13px]">
            <p className="leading-[normal]">0</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#3171c7] text-[12px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faChevronDown} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame261 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-full">
        <p className="leading-[normal]">Property</p>
      </div>
      <Frame262 />
    </div>
  );
}

function CmpCallCenterInput3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="CMP Call Center Input">
      <Frame254 />
    </div>
  );
}

function Frame263() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow h-[35px] min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[35px] items-center leading-[0] not-italic px-[12px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#084d78] text-[13px]">
            <p className="leading-[normal]">(Choose a Type)</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#3171c7] text-[12px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faChevronDown} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame263 />
    </div>
  );
}

function Frame265() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-full">
        <p className="leading-[normal]">Items</p>
      </div>
      <Frame264 />
    </div>
  );
}

function CmpCallCenterInput4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="CMP Call Center Input">
      <Frame265 />
    </div>
  );
}

function Frame266() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow h-[35px] min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[35px] items-center leading-[0] not-italic px-[12px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#084d78] text-[13px]">
            <p className="leading-[normal]">&nbsp;</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#3171c7] text-[12px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faChevronDown} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame266 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-full">
        <p className="leading-[normal]">Step</p>
      </div>
      <Frame267 />
    </div>
  );
}

function CmpCallCenterInput5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="CMP Call Center Input">
      <Frame268 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="basis-0 bg-[#f9fbfc] grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaecee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[12px] py-[9px] relative size-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#084d78] text-[13px]">
            <p className="leading-[normal]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame270() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[113px] items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#084d78] text-[12px] w-full">
        <p className="leading-[normal]">Notes</p>
      </div>
      <Frame269 />
    </div>
  );
}

function CmpCallCenterInput6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="CMP Call Center Input">
      <Frame270 />
    </div>
  );
}

function CallCenterFields() {
  return (
    <div className="relative shrink-0 w-full" data-name="Call Center Fields">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative w-full">
          <CmpCallCenterInput />
          <CmpCallCenterInput1 />
          <CmpCallCenterInput2 />
          <CmpCallCenterInput3 />
          <CmpCallCenterInput4 />
          <CmpCallCenterInput5 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222 1">
                <line id="Line 16" stroke="var(--stroke-0, #EDEEF0)" x2="222" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <CmpCallCenterInput6 />
        </div>
      </div>
    </div>
  );
}

function CallCenter() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0 w-[254px]" data-name="Call Center">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame311 />
      <CallCenterFields />
    </div>
  );
}

function CollapseNavCtrl() {
  return (
    <div className="absolute contents right-[-11px] top-[12px]" data-name="COLLAPSE NAV CTRL">
      <div className="absolute right-[-11px] size-[22px] top-[12px]">
        <div className="absolute inset-[-24%_-28%_-32%_-28%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(235, 239, 241, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
            <g filter="url(#filter0_d_1_1102)" id="Ellipse 7">
              <circle cx="17.16" cy="16.28" fill="var(--fill-0, white)" r="11" />
              <circle cx="17.16" cy="16.28" r="10.6207" stroke="var(--stroke-0, #EBEFF1)" strokeWidth="0.758621" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34.32" id="filter0_d_1_1102" width="34.32" x="-2.38419e-07" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1.76" result="effect1_dropShadow_1_1102" />
                <feOffset dy="0.88" />
                <feGaussianBlur stdDeviation="2.2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.235294 0 0 0 0 0.309804 0 0 0 0.03 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1102" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1102" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col justify-center leading-[0] not-italic right-[-0.1px] text-[#3171c7] text-[11.379px] text-center text-nowrap top-[22.5px] translate-x-[50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faChevronLeft} /></p>
      </div>
    </div>
  );
}

function SidebarPanel() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0 z-[2]" data-name="Sidebar Panel">
      <SidebarNav />
      <CallCenter />
      <CollapseNavCtrl />
    </div>
  );
}

function Button() {
  const openEditModal = useOpenEditModal();
  return (
    <button type="button" onClick={openEditModal} className="box-border content-stretch flex gap-[10px] h-[30px] items-center justify-center px-[14px] py-0 relative rounded-[4px] shrink-0 cursor-pointer bg-transparent hover:bg-[#3171c7]/5" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3171c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Edit3 className="relative shrink-0 text-[#3171c7]" size={14} />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3171c7] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Edit</p>
      </div>
    </button>
  );
}

function Frame316() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-[3px] pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[26px] justify-center leading-[0] not-italic relative shrink-0 text-[#214c75] text-[20px] w-[912px]">
            <p className="leading-[normal]">Dashboard</p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[28px] ml-0 mt-0 relative rounded-[5px] w-[30px]">
        <div aria-hidden="true" className="absolute border border-[#ebeff1] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center ml-[15.5px] mt-[13.5px] relative translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "8.25", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="flex flex-col justify-center leading-[0] not-italic relative text-[#1a7fbd] text-[13px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faRotateRight} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetHeaderContent() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-between ml-[27px] mt-[14px] relative rounded-[5px] w-[702px]" data-name="Widget Header Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#084b75] text-[15px] text-nowrap tracking-[0.15px] whitespace-pre">Unread Messages</p>
      <Group2 />
    </div>
  );
}

function Widget() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Widget">
      <div className="[grid-area:1_/_1] bg-white h-[403px] ml-0 mt-0 relative rounded-[5px] w-[752px]">
        <div aria-hidden="true" className="absolute border border-[#dfe3e5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.04)]" />
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[54px] relative w-[752px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 752 1">
            <line id="Line 3" stroke="var(--stroke-0, #DFE3E5)" x2="752" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[174px] relative w-[752px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 752 1">
            <line id="Line 3" stroke="var(--stroke-0, #DFE3E5)" x2="752" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[275px] relative w-[752px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 752 1">
            <line id="Line 3" stroke="var(--stroke-0, #DFE3E5)" x2="752" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <WidgetHeaderContent />
    </div>
  );
}

function FromRow() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[7px] items-center ml-0 mt-0 relative w-[487.379px]" data-name="From Row">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic opacity-80 relative shrink-0 text-[#214c75] text-[13px] text-nowrap whitespace-pre">XN189533</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "10", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[10px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(221, 229, 234, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                <line id="Line 31" stroke="var(--stroke-0, #DDE5EA)" x2="10" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#084b75] text-[13px] text-nowrap whitespace-pre">{`Awesome Association Management  <mergetagsbeta@outlook.com>`}</p>
    </div>
  );
}

function DateActions() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[11px] items-center justify-end leading-[normal] ml-[615.94px] mt-px not-italic relative text-right w-[86.347px]" data-name="Date / Actions">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#084b75] text-[12px] w-[65px]">11/19/24</p>
      <p className="opacity-60 relative shrink-0 text-[#1a7fbd] text-[11px] text-nowrap whitespace-pre"><FontAwesomeIcon icon={faChevronDown} /></p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <FromRow />
      <DateActions />
    </div>
  );
}

function Message() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[7px] items-start ml-[26.892px] mt-[72px] relative" data-name="Message">
      <Group3 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#084b75] text-[13px] w-[min-content]">Amenity Reservation / Enter Reservation</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[#67808f] text-[13px] w-[671.585px]">Dog Court Amenity Category: Tennis Courts Amenity Start Time: 08:00 AM Amenity End Time: 10:00 AM Amenity Event Date: 11/28/2024 Amenity Reminder Date: Here is more detail:</p>
    </div>
  );
}

function FromRow1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[7px] items-center ml-0 mt-0 relative w-[487.379px]" data-name="From Row">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic opacity-80 relative shrink-0 text-[#084b75] text-[13px] text-nowrap whitespace-pre">XN189533</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "10", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[10px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(221, 229, 234, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                <line id="Line 31" stroke="var(--stroke-0, #DDE5EA)" x2="10" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#084b75] text-[13px] text-nowrap whitespace-pre">{`Awesome Association Management  <mergetagsbeta@outlook.com>`}</p>
    </div>
  );
}

function DateActions1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[11px] items-center justify-end leading-[normal] ml-[615.94px] mt-px not-italic relative text-right w-[86.347px]" data-name="Date / Actions">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#084b75] text-[12px] w-[65px]">11/18/24</p>
      <p className="opacity-60 relative shrink-0 text-[#1a7fbd] text-[11px] text-nowrap whitespace-pre"><FontAwesomeIcon icon={faChevronDown} /></p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <FromRow1 />
      <DateActions1 />
    </div>
  );
}

function Message1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[7px] items-start ml-[26.892px] mt-[297px] relative" data-name="Message">
      <Group4 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#084b75] text-[13px] w-[min-content]">Amenity Reservation / Enter Reservation</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[#67808f] text-[13px] w-[671.585px]">Clubhouse Amenity Category: Clubhouse Amenity Start Time: 012:00 PM Amenity End Time: 4:00 PM Amenity Event Date: 11/29/2024 Amenity Reminder Date: Here is more detail:</p>
    </div>
  );
}

function FromRow2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[7px] items-center ml-0 mt-0 relative w-[487.379px]" data-name="From Row">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic opacity-80 relative shrink-0 text-[#084b75] text-[13px] text-nowrap whitespace-pre">XN189533</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "10", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[10px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(221, 229, 234, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                <line id="Line 31" stroke="var(--stroke-0, #DDE5EA)" x2="10" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#084b75] text-[13px] text-nowrap whitespace-pre">{`Awesome Association Management  <mergetagsbeta@outlook.com>`}</p>
    </div>
  );
}

function DateActions2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[11px] items-center justify-end leading-[normal] ml-[615.94px] mt-px not-italic relative text-right w-[86.347px]" data-name="Date / Actions">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#084b75] text-[12px] w-[65px]">11/18/24</p>
      <p className="opacity-60 relative shrink-0 text-[#1a7fbd] text-[11px] text-nowrap whitespace-pre"><FontAwesomeIcon icon={faChevronDown} /></p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <FromRow2 />
      <DateActions2 />
    </div>
  );
}

function Message2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[7px] items-start ml-[26.892px] mt-[190px] relative" data-name="Message">
      <Group5 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#084b75] text-[13px] w-[min-content]">Amenity Reservation / Enter Reservation</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[#67808f] text-[13px] w-[671.585px]">Invoice.pdf</p>
    </div>
  );
}

function UnreadMessages() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="UNREAD MESSAGES">
      <Widget />
      <Message />
      <Message1 />
      <Message2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[28px] ml-0 mt-0 relative rounded-[5px] w-[30px]">
        <div aria-hidden="true" className="absolute border border-[#ebeff1] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center ml-[15.5px] mt-[13.5px] relative translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "8.25", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="flex flex-col justify-center leading-[0] not-italic relative text-[#1a7fbd] text-[13px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faRotateRight} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetHeaderContent1() {
  return (
    <div className="bg-white relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full z-[2]" data-name="Widget Header Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[18px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#084b75] text-[15px] text-nowrap tracking-[0.15px] whitespace-pre">Updates</p>
          <Group6 />
        </div>
      </div>
    </div>
  );
}

function Frame323() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[25px] items-start not-italic p-[19px] relative size-full text-[#214c75] text-[13px]">
          <p className="leading-[21px] relative shrink-0 w-full">Join us at Vantaca Vision 2025! We are thrilled to welcome Vantaca users and industry experts to San Antonio, Texas this year for another unforgettable event. Visit our website for more information.</p>
          <p className="leading-[21px] relative shrink-0 w-full">
            <span>{`The Corporate Transparency Act (CTA), effective as of January 1, 2024, impacts most associations, including homeowners associations (HOAs) and condominium associations. `}</span>
            <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.vantaca.com/corporate-transparency-act-resource-center?utm_campaign=2024-Webinars&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9FJ7dyeLm5MRKJbcV0IlTYoH6CrgWLXYko5X3aLtfNTZNXgfeQFV0mWShv9flcHWui7URh">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[21px]">
                Explore additional resources
              </span>
            </a>
            <span>{` and rewatch our `}</span>
            <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://support.vantaca.com/hc/en-us/articles/29122359697947-How-Homeowner-Associations-Can-Comply-with-the-Corporate-Transparency-Act-CTA">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[21px]">
                CTA Virtual Event
              </span>
            </a>
            <span>{` to support you in complying with the CTA requirements`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame320() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-bl-[5px] rounded-br-[5px] shrink-0 w-full z-[1]">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame323 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[5px] rounded-br-[5px]" />
    </div>
  );
}

function Frame322() {
  return (
    <div className="basis-0 grow h-[403px] min-h-px min-w-px relative rounded-[5px] shrink-0">
      <div className="content-stretch flex flex-col h-[403px] isolate items-start overflow-clip relative rounded-[inherit] w-full">
        <WidgetHeaderContent1 />
        <Frame320 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dbdee0] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <UnreadMessages />
      <Frame322 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[28px] ml-0 mt-0 relative rounded-[5px] w-[30px]">
        <div aria-hidden="true" className="absolute border border-[#ebeff1] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.49262043833732605)+(var(--transform-inner-height)*0.8702442646026611)))] items-center justify-center ml-[15.5px] mt-[13.5px] relative translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.49262043833732605)+(var(--transform-inner-width)*0.8702442646026611)))]" style={{ "--transform-inner-width": "8.25", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[330.487deg]">
          <div className="flex flex-col justify-center leading-[0] not-italic relative text-[#1a7fbd] text-[13px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre"><FontAwesomeIcon icon={faRotateRight} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetHeaderContent2() {
  return (
    <div className="bg-white relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Widget Header Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[28px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#084b75] text-[15px] text-nowrap tracking-[0.15px] whitespace-pre">My Open Items</p>
          <Group7 />
        </div>
      </div>
    </div>
  );
}

function Frame319() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[14px] pr-0 py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">&nbsp;</p>
          <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
        </div>
      </div>
    </div>
  );
}

function RowText() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">&nbsp;</p>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText />
        </div>
      </div>
    </div>
  );
}

function RowText1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">&nbsp;</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText1 />
        </div>
      </div>
    </div>
  );
}

function RowText6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">&nbsp;</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="bg-white relative rounded-bl-[5px] shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-bl-[5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText6 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[44px]" data-name="Column">
      <Frame319 />
      <Row />
      <Row1 />
      <Row />
      <Row1 />
      <Row />
      <Row1 />
      <Row6 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[14px] pr-0 py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">Open Items</p>
          <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
        </div>
      </div>
    </div>
  );
}

function RowText7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">1099 Export Data - Finalize 1099s in Nelco</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText7 />
        </div>
      </div>
    </div>
  );
}

function RowText8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">{`1099 Export Data - Review & Print Report`}</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText8 />
        </div>
      </div>
    </div>
  );
}

function RowText9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">1099 Export Data - Review 1099 Data</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText9 />
        </div>
      </div>
    </div>
  );
}

function RowText10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">1099 Export Data - Send to Nelco Failed</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText10 />
        </div>
      </div>
    </div>
  );
}

function RowText11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">3rd Party Document Received - Document Received</p>
    </div>
  );
}

function Row11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText11 />
        </div>
      </div>
    </div>
  );
}

function RowText12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">ACH Draft Payment Received - Failed Payment</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText12 />
        </div>
      </div>
    </div>
  );
}

function RowText13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">Amenity Request - Review</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText13 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Frame325 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
      <Row13 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[14px] pr-0 py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]"># of Items</p>
          <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
        </div>
      </div>
    </div>
  );
}

function RowText14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">14</p>
    </div>
  );
}

function Row14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText14 />
        </div>
      </div>
    </div>
  );
}

function RowText15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">12</p>
    </div>
  );
}

function Row15() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText15 />
        </div>
      </div>
    </div>
  );
}

function RowText16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">22</p>
    </div>
  );
}

function Row16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText16 />
        </div>
      </div>
    </div>
  );
}

function RowText17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">56</p>
    </div>
  );
}

function Row17() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText17 />
        </div>
      </div>
    </div>
  );
}

function RowText18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">97</p>
    </div>
  );
}

function Row18() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText18 />
        </div>
      </div>
    </div>
  );
}

function RowText19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Row Text">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">20</p>
    </div>
  );
}

function Row19() {
  return (
    <div className="bg-[#f6fafe] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[13px] relative w-full">
          <RowText19 />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[91px]" data-name="Column">
      <Frame326 />
      <Row14 />
      <Row15 />
      <Row16 />
      <Row17 />
      <Row18 />
      <Row19 />
      <Row14 />
    </div>
  );
}

function Frame327() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[14px] pr-0 py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#214c75] text-[13px]">&nbsp;</p>
          <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
        </div>
      </div>
    </div>
  );
}

function SelectButton() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#3171c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center px-[11px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3171c7] text-[12px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Select</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row21() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[42px] items-center justify-center px-[14px] py-0 relative w-full">
          <SelectButton />
        </div>
      </div>
    </div>
  );
}

function SelectButton1() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Select Button">
      <div aria-hidden="true" className="absolute border border-[#3171c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center px-[11px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3171c7] text-[12px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Select</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row22() {
  return (
    <div className="bg-[#f6fafe] h-[42px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#dbdee0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[42px] items-center justify-center px-[14px] py-0 relative w-full">
          <SelectButton1 />
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[135px]" data-name="Column">
      <Frame327 />
      <Row21 />
      <Row22 />
      <Row21 />
      <Row22 />
      <Row21 />
      <Row22 />
      <Row21 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-bl-[5px] rounded-br-[5px] shrink-0 w-full">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Frame321() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-[752px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[752px]">
        <WidgetHeaderContent2 />
        <Frame328 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dbdee0] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Stage() {
  return (
    <div className="basis-0 bg-slate-50 grow h-full min-h-px min-w-px relative shrink-0 z-[1]" data-name="Stage">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[22px] relative size-full">
          <Frame316 />
          <Frame324 />
          <Frame321 />
        </div>
      </div>
    </div>
  );
}

function Frame314() {
  const { page } = useNavigation();
  return (
    <div className="content-stretch flex h-[871px] isolate items-center relative shrink-0 w-full">
      {page === "actionItems" ? (
        <ActionItemsPage sidebarNav={<SidebarNav />} collapseControl={<CollapseNavCtrl />} />
      ) : (
        <>
          <SidebarPanel />
          <Stage />
        </>
      )}
    </div>
  );
}

export default function VantacaCmpUi() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Vantaca CMP UI">
      <Frame312 />
      <Frame314 />
    </div>
  );
}