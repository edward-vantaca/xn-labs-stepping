import clsx from "clsx";
import svgPaths from "./svg-6xyimocntf";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { X } from 'lucide-react';

type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Button({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function Wrapper4({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames} onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function Wrapper1({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper4 additionalClassNames={clsx("h-[20px] relative", additionalClassNames)} onClick={onClick}>{children}</Wrapper4>;
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("h-[38px] relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8f8f8] h-[36px] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function FileText({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="FileText">{children}</g>
    </Wrapper>
  );
}

function XVector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  onClick?: () => void;
};

function ButtonText({ text, onClick }: ButtonTextProps) {
  return (
    <Wrapper1 additionalClassNames="shrink-0 w-[31.969px] cursor-pointer" onClick={onClick}>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[16.5px] not-italic text-[#0074e0] text-[14px] text-center top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type SpanText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanText1({ text, additionalClassNames = "" }: SpanText1Props) {
  return (
    <Wrapper1 additionalClassNames="shrink-0">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type SpanTextProps = {
  text: string;
};

function SpanText({ text }: SpanTextProps) {
  return (
    <Wrapper1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

function Svg() {
  return (
    <Wrapper>
      <g id="svg">
        <path d={svgPaths.p777f870} fill="var(--fill-0, #FB2C36)" id="Vector" />
      </g>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}

type DivProps = {
  cardTitle: string;
};

export default function Div({ cardTitle }: DivProps) {
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(true);
  const [isAutomatedActionsExpanded, setIsAutomatedActionsExpanded] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState({ number: 10, name: "Denial" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'letter' | 'email'>('email');
  const [showTabs, setShowTabs] = useState(true);
  const [selectedDocument, setSelectedDocument] = useState({ 
    name: 'Denial Letter.pdf', 
    size: '245 KB', 
    pages: 2 
  });

  const openDocumentViewer = (name: string, size: string, pages: number) => {
    setSelectedDocument({ name, size, pages });
    setModalType('letter');
    setShowTabs(false);
    setIsModalOpen(true);
  };

  const getDocumentContent = () => {
    switch (selectedDocument.name) {
      case 'ARC Guidelines.pdf':
        return {
          title: 'Architectural Review Committee Guidelines',
          subtitle: 'Community Design Standards & Requirements',
          date: 'Revised January 2026',
          content: (
            <>
              <div className="text-center mb-8">
                <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-[#101828] mb-2">
                  ARC Design Guidelines
                </h1>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6a7282]">
                  Homeowners Association • Architectural Review Committee
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#f0f9ff] border-l-4 border-[#0074e0] p-4">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                    Section 1: Introduction
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                    These guidelines have been established to maintain the architectural integrity and aesthetic 
                    harmony of our community. All exterior modifications require ARC approval before commencement.
                  </p>
                </div>

                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-3">
                    Section 2: Approved Color Palette
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px] mb-2">
                    All exterior paint colors must be selected from the approved palette:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">Warm neutrals: Beige, cream, tan</li>
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">Cool neutrals: Gray, slate, taupe</li>
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">Earth tones: Sage, olive, terracotta (accent only)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-3">
                    Section 3: Fencing Standards
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                    Maximum fence height: 6 feet (72 inches) from ground level. Materials must be wood, vinyl, 
                    or composite in approved colors. Chain-link fencing is not permitted in front yards.
                  </p>
                </div>

                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-3">
                    Section 4: Landscaping Requirements
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                    Front yards must maintain 60% living ground cover. Drought-tolerant native plants are 
                    encouraged. Tree removal requires separate approval for specimens over 6 inches in diameter.
                  </p>
                </div>

                <div className="bg-[#fef3c7] border-l-4 border-[#f59e0b] p-4">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                    Important Note:
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                    Failure to obtain ARC approval prior to making exterior modifications may result in fines 
                    and required restoration to original condition at homeowner expense.
                  </p>
                </div>
              </div>
            </>
          )
        };
      case 'Original Application.pdf':
        return {
          title: 'ARC Application Form',
          subtitle: 'Architectural Review Committee',
          date: 'Submitted February 15, 2026',
          content: (
            <>
              <div className="text-center mb-8">
                <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-[#101828] mb-2">
                  Architectural Review Application
                </h1>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6a7282]">
                  Homeowners Association • ARC Application Form
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-3">
                    Applicant Information:
                  </p>
                  <div className="space-y-2">
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Name:</span> [Homeowner Name]
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Property Address:</span> [Property Address]
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Phone:</span> (555) 123-4567
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Email:</span> homeowner@email.com
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-3">
                    Project Description:
                  </p>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] p-4 rounded">
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                      I am requesting approval to repaint the exterior of my home and install a new fence in the 
                      backyard. The paint color selected is a light blue-gray (not from approved palette), and 
                      the proposed fence will be 7 feet tall to provide additional privacy from neighboring properties.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-3">
                    Project Details:
                  </p>
                  <ul className="space-y-2">
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Type of Work:</span> Exterior Paint & Fence Installation
                    </li>
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Estimated Start Date:</span> March 15, 2026
                    </li>
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Estimated Completion:</span> April 30, 2026
                    </li>
                    <li className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      <span className="font-semibold">Contractor:</span> ABC Painting & Fencing Services
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#e5e7eb] pt-6">
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                    <span className="font-semibold">Applicant Signature:</span> [Signature]
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] mt-2">
                    <span className="font-semibold">Date:</span> February 15, 2026
                  </p>
                </div>
              </div>
            </>
          )
        };
      default: // Denial Letter.pdf
        return {
          title: 'Denial Letter',
          subtitle: 'Official ARC Decision',
          date: 'March 3, 2026',
          content: (
            <>
              <div className="text-center mb-8">
                <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-[#101828] mb-2">
                  Homeowners Association
                </h1>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6a7282]">
                  123 Community Drive • City, ST 12345 • (555) 123-4567
                </p>
              </div>

              <div className="text-right mb-8">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                  March 3, 2026
                </p>
              </div>

              <div className="mb-8">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                  [Homeowner Name]<br />
                  [Property Address]<br />
                  City, ST 12345
                </p>
              </div>

              <div className="mb-6">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828]">
                  RE: Architectural Review Committee Application – DENIED
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                  Dear [Homeowner Name],
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                  This letter serves as official notification that your Architectural Review Committee (ARC) 
                  application submitted on February 15, 2026, for modifications to your property located at 
                  [Property Address] has been <span className="font-semibold">denied</span>.
                </p>
                <div className="bg-[#fee] border-l-4 border-[#dc2626] p-4 my-4">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                    Reason for Denial:
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                    The proposed modifications do not comply with the community's architectural guidelines 
                    as outlined in Section 4.2 of the CC&Rs. Specifically, the exterior paint color selection 
                    falls outside the approved color palette, and the fence height exceeds the maximum 
                    allowable limit of 6 feet as specified in the ARC Design Standards.
                  </p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                  You have the right to appeal this decision within 30 days of receipt of this letter. 
                  To initiate an appeal, please submit a written request to the ARC Committee along with 
                  any additional supporting documentation.
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] leading-[22px]">
                  If you have any questions, please contact the ARC Committee at arc@hoaexample.com or 
                  call (555) 123-4567.
                </p>
                <div className="mt-8">
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                    Sincerely,
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mt-6">
                    Architectural Review Committee<br />
                    Homeowners Association
                  </p>
                </div>
              </div>
            </>
          )
        };
    }
  };

  const getStepSummary = () => {
    switch (selectedStep.number) {
      case 10:
        return "When stepped to Denial, the Homeowner will receive notification based on their communication preferences to review the denial. The application will be marked as denied and the homeowner can review attached documents explaining the decision.";
      case 20:
        return "When stepped to Broadcast, this will create several Broadcast Email Message action items that will send to all selected owners.";
      default:
        return "When stepped to ARC Review, the Homeowner will receive notification based on their communication preferences to review the ARC decision. The application status will be updated and relevant documents will be attached.";
    }
  };

  const getAutomatedActions = () => {
    switch (selectedStep.number) {
      case 2: // ARC Review
        return [
          {
            title: "Auto-advances to Next Step",
            description: "The workflow will automatically progress to the next configured step once this action is complete"
          }
        ];
      case 10: // Denial
        return [
          {
            title: "Update Application Status",
            description: "Application status will automatically change to \"Denied\" in the system"
          },
          {
            title: "Send Notification to Property Management System",
            description: "Property management system will be notified of the denial status via API integration"
          }
        ];
      case 20: // Broadcast
        return [
          {
            title: "Create Multiple Child Action Items",
            description: "Creates multiple child action items: Broadcast Email Message (one per selected homeowner)"
          },
          {
            title: "Assign Each Child Action",
            description: "Assigns each child action to the respective homeowner for tracking purposes"
          },
          {
            title: "Update Parent Action Status",
            description: "Updates parent action status to 'Broadcast Sent' once all child actions are created"
          }
        ];
      default:
        return [];
    }
  };

  const getNotificationDescription = () => {
    switch (selectedStep.number) {
      case 20: // Broadcast
        return "Individual notifications will be sent to each homeowner based on their communication preferences.";
      default:
        return "Notification will be sent based on homeowner's communication preferences";
    }
  };

  const showMultipleRecipientsAlert = () => {
    return selectedStep.number === 20; // Only show for Broadcast
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start pl-px relative size-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
            <Wrapper3 additionalClassNames="w-[132.688px]">
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[16px] top-0 tracking-[-0.4492px] whitespace-nowrap">{cardTitle}</p>
            </Wrapper3>
            <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="button" data-close-button="true">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="X">
                  <XVector>
                    <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </XVector>
                  <XVector>
                    <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </XVector>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start pb-px pl-[24px] pt-[24px] relative size-full">
          <div className="h-[38px] relative shrink-0 w-[93.891px]" data-name="button">
            <div aria-hidden="true" className="absolute border-[#0074e0] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[47.5px] not-italic text-[#101828] text-[14px] text-center top-0 tracking-[-0.1504px] whitespace-nowrap">Simulate Step</p>
            </div>
          </div>
          <Wrapper2 additionalClassNames="w-[105.141px]">
            <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53.5px] not-italic text-[#4a5565] text-[14px] text-center top-px tracking-[-0.1504px] whitespace-nowrap">Configure Rules</p>
          </Wrapper2>
          <Wrapper2 additionalClassNames="w-[68.156px]">
            <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[34.5px] not-italic text-[#4a5565] text-[14px] text-center top-px tracking-[-0.1504px] whitespace-nowrap">Templates</p>
          </Wrapper2>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-y-auto" data-name="Container">
        <div className="rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] pb-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
              <Text text="Simulate Next Step" />
              <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border border-[#dddfe5] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div 
                  className="flex flex-row items-center size-full cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="content-stretch flex items-center justify-between px-[9px] py-[11px] relative w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] tracking-[-0.1504px] whitespace-nowrap pl-[3px]">
                      {selectedStep.number}. {selectedStep.name}
                    </p>
                    <Wrapper5>
                      <g id="ChevronDown">
                        <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </Wrapper5>
                  </div>
                </div>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#dddfe5] rounded-[6px] shadow-lg z-10">
                    <div 
                      className={`flex items-center px-[9px] py-[11px] cursor-pointer ${
                        selectedStep.number === 2 
                          ? 'bg-[#e6f4ff]' 
                          : 'hover:bg-[#f7f7f7]'
                      }`}
                      onClick={() => {
                        setSelectedStep({ number: 2, name: "ARC Review" });
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className="w-[20px] shrink-0 flex items-center justify-center">
                        {selectedStep.number === 2 && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0074E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] tracking-[-0.1504px] whitespace-nowrap pl-[3px] ${
                        selectedStep.number === 2 ? 'text-[#0074e0]' : 'text-[#101828]'
                      }`}>
                        2. ARC Review
                      </p>
                    </div>
                    <div 
                      className={`flex items-center px-[9px] py-[11px] cursor-pointer ${
                        selectedStep.number === 10 
                          ? 'bg-[#e6f4ff]' 
                          : 'hover:bg-[#f7f7f7]'
                      }`}
                      onClick={() => {
                        setSelectedStep({ number: 10, name: "Denial" });
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className="w-[20px] shrink-0 flex items-center justify-center">
                        {selectedStep.number === 10 && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0074E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] tracking-[-0.1504px] whitespace-nowrap pl-[3px] ${
                        selectedStep.number === 10 ? 'text-[#0074e0]' : 'text-[#101828]'
                      }`}>
                        10. Denial
                      </p>
                    </div>
                    <div 
                      className={`flex items-center px-[9px] py-[11px] cursor-pointer ${
                        selectedStep.number === 20 
                          ? 'bg-[#e6f4ff]' 
                          : 'hover:bg-[#f7f7f7]'
                      }`}
                      onClick={() => {
                        setSelectedStep({ number: 20, name: "Broadcast" });
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className="w-[20px] shrink-0 flex items-center justify-center">
                        {selectedStep.number === 20 && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0074E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] tracking-[-0.1504px] whitespace-nowrap pl-[3px] ${
                        selectedStep.number === 20 ? 'text-[#0074e0]' : 'text-[#101828]'
                      }`}>
                        20. Broadcast
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] tracking-[-0.3125px] whitespace-nowrap">Step Summary</p>
              <div className="bg-[#f7f7f7] relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col items-start px-[16px] py-[14px] relative w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] w-full">{getStepSummary()}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
              <div
                className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full cursor-pointer"
                data-name="button"
                onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[15px] tracking-[-0.3125px] whitespace-nowrap">Notifications Summary</p>
                <Wrapper5>
                  {isNotificationsExpanded ? (
                    <g id="ChevronUp">
                      <path d="M15 12.5L10 7.5L5 12.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  ) : (
                    <g id="ChevronDown">
                      <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  )}
                </Wrapper5>
              </div>
              {isNotificationsExpanded && (
                <div className="relative rounded-[10px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="content-stretch flex flex-col gap-[15px] items-start px-[21px] py-[17px] relative w-full">
                    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
                      <Wrapper3 additionalClassNames="bg-[#eff6ff] rounded-[4px] w-[103.656px]">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#0074e0] text-[14px] top-[4px] tracking-[-0.1504px] whitespace-nowrap">Homeowner</p>
                      </Wrapper3>
                      <Wrapper>
                        <g id="Bell">
                          <path d={svgPaths.p1ce3c700} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1a06de00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </Wrapper>
                      <Wrapper1 additionalClassNames="shrink-0 w-[104.563px]">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">User Preference</p>
                      </Wrapper1>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="p">
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px] tracking-[-0.1504px]">{getNotificationDescription()}</p>
                    </div>
                    {showMultipleRecipientsAlert() && (
                      <div className="bg-[#fef7e6] border border-[#f4d799] rounded-[8px] p-[16px] relative shrink-0 w-full" data-name="MultipleRecipientsAlert">
                        <div className="flex flex-col gap-[8px]">
                          <div className="flex gap-[8px] items-center">
                            <FontAwesomeIcon icon={faUsers} className="text-[#b8860b] shrink-0" style={{ fontSize: '16px' }} />
                            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-[#b8860b] text-[14px] tracking-[-0.1504px]">Multiple Recipients</p>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#8b7355] text-[14px] tracking-[-0.1504px]">This broadcast will create individual action items for each selected homeowner. Each will receive their own notification based on their preferences.</p>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
                      <Text text="Preview Communication:" />
                      <div className="content-stretch flex gap-[10px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
                        <Button
                          onClick={() => {
                            setSelectedDocument({ name: 'Denial Letter.pdf', size: '245 KB', pages: 2 });
                            setModalType('letter');
                            setShowTabs(true);
                            setIsModalOpen(true);
                          }}
                        >
                          <div className="content-stretch flex gap-[8px] items-center justify-center px-[81px] py-[11px] relative w-full">
                            <FileText>
                              <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </FileText>
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">Letter</p>
                          </div>
                        </Button>
                        <Button
                          onClick={() => {
                            setModalType('email');
                            setShowTabs(true);
                            setIsModalOpen(true);
                          }}
                        >
                          <div className="content-stretch flex gap-[8px] items-center justify-center px-[83px] py-[11px] relative w-full">
                            <Wrapper>
                              <g id="Mail">
                                <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </g>
                            </Wrapper>
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">Email</p>
                          </div>
                        </Button>
                      </div>
                    </div>
                    {!showMultipleRecipientsAlert() && (
                      <div className="content-stretch flex flex-col gap-[12px] h-[156px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                        <FileText>
                          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </FileText>
                        <Wrapper1 additionalClassNames="shrink-0 w-[146.609px]">
                          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Attached Documents:</p>
                        </Wrapper1>
                      </div>
                      <div className="content-stretch flex flex-col gap-[8px] h-[124px] items-start relative shrink-0 w-full" data-name="Container">
                        <Container>
                          <div className="h-[20px] relative shrink-0 flex items-center gap-[8px]">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
                              <Svg />
                              <div className="flex items-center gap-[4px]">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#101828] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Denial Letter.pdf</p>
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#6a7282] text-[12px] tracking-[-0.1504px] whitespace-nowrap">(245 KB)</p>
                              </div>
                            </div>
                          </div>
                          <ButtonText text="View" onClick={() => openDocumentViewer('Denial Letter.pdf', '245 KB', 2)} />
                        </Container>
                        <Container>
                          <div className="h-[20px] relative shrink-0 flex items-center gap-[8px]">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
                              <Svg />
                              <div className="flex items-center gap-[4px]">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#101828] text-[14px] tracking-[-0.1504px] whitespace-nowrap">ARC Guidelines.pdf</p>
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#6a7282] text-[12px] tracking-[-0.1504px] whitespace-nowrap">(1.2 MB)</p>
                              </div>
                            </div>
                          </div>
                          <ButtonText text="View" onClick={() => openDocumentViewer('ARC Guidelines.pdf', '1.2 MB', 15)} />
                        </Container>
                        <Container>
                          <div className="h-[20px] relative shrink-0 flex items-center gap-[8px]">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
                              <Svg />
                              <div className="flex items-center gap-[4px]">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#101828] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Original Application.pdf</p>
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#6a7282] text-[12px] tracking-[-0.1504px] whitespace-nowrap">(890 KB)</p>
                              </div>
                            </div>
                          </div>
                          <ButtonText text="View" onClick={() => openDocumentViewer('Original Application.pdf', '890 KB', 5)} />
                        </Container>
                      </div>
                    </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
              <div
                className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full cursor-pointer"
                data-name="button"
                onClick={() => setIsAutomatedActionsExpanded(!isAutomatedActionsExpanded)}
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[15px] tracking-[-0.3125px] whitespace-nowrap">Automated Actions</p>
                <Wrapper5>
                  {isAutomatedActionsExpanded ? (
                    <g id="ChevronUp">
                      <path d="M15 12.5L10 7.5L5 12.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  ) : (
                    <g id="ChevronDown">
                      <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  )}
                </Wrapper5>
              </div>
              {isAutomatedActionsExpanded && (
                <div className="relative rounded-[10px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="content-stretch flex flex-col gap-[15px] items-start px-[21px] py-[17px] relative w-full">
                    {getAutomatedActions().map((action, index) => (
                      <div key={index} className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                            <FontAwesomeIcon icon={faBolt} className="text-[#4A5565]" style={{ fontSize: '16px' }} />
                          </div>
                          <Wrapper1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{action.title}</p>
                          </Wrapper1>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full pl-[24px]" data-name="p">
                          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px] tracking-[-0.1504px]">{action.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[71px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end pr-[24px] pt-px relative size-full">
            <div className="bg-white relative rounded-[8px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[18px] py-[9px] relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">Close Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Letter and Email Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[2000]" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl w-[772px] max-h-[90vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] shrink-0">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#101828] text-[18px] leading-[28px] tracking-[-0.015em]">
                {modalType === 'letter' && selectedDocument.name !== 'Denial Letter.pdf' 
                  ? selectedDocument.name 
                  : modalType === 'letter' 
                    ? 'Letter Preview - Homeowner' 
                    : 'Email Preview - Homeowner'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-6 h-6 flex items-center justify-center text-[#6a7282] hover:text-[#101828] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Tab Navigation */}
            {showTabs && (
              <div className="flex gap-6 px-6 pt-4 border-b border-[#e5e7eb] shrink-0">
                <button
                  onClick={() => setModalType('email')}
                  className={`pb-3 px-1 border-b-2 transition-colors ${
                    modalType === 'email'
                      ? 'border-[#0074e0] text-[#0074e0]'
                      : 'border-transparent text-[#6a7282] hover:text-[#101828]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.66668 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 4V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66668C1.93334 13.3333 1.33334 12.7333 1.33334 12V4C1.33334 3.26666 1.93334 2.66666 2.66668 2.66666Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6667 4L8.00001 8.66667L1.33334 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px]">Email</span>
                  </div>
                </button>
                <button
                  onClick={() => setModalType('letter')}
                  className={`pb-3 px-1 border-b-2 transition-colors ${
                    modalType === 'letter'
                      ? 'border-[#0074e0] text-[#0074e0]'
                      : 'border-transparent text-[#6a7282] hover:text-[#101828]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M9.33334 1.33334H4.00001C3.64638 1.33334 3.30724 1.47381 3.05719 1.72386C2.80715 1.9739 2.66668 2.31305 2.66668 2.66668V13.3333C2.66668 13.687 2.80715 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4.00001 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33334 1.33334Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.33334 1.33334V5.33334H13.3333" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px]">Letter</span>
                  </div>
                </button>
              </div>
            )}

            {/* Modal Content */}
            <div className={`overflow-y-auto flex-1 ${modalType === 'letter' ? 'bg-[#f3f4f6]' : 'bg-white'}`}>
              {modalType === 'letter' ? (
                <>
                  {/* PDF Viewer for Letter - Multiple Document Pages */}
                  <div className="p-6 space-y-6">
                    {/* Denial Letter Document */}
                    <div className="relative group bg-white shadow-lg rounded-sm overflow-hidden border border-[#d1d5dc]">
                      {/* Previous Page Button */}
                      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-[#d1d5dc] rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M12 15L7 10L12 5" stroke="#364153" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      {/* Next Page Button */}
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-[#d1d5dc] rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M8 5L13 10L8 15" stroke="#364153" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* PDF Page 1 */}
                      <div className="bg-white p-12 min-h-[1100px]">
                        <div className="max-w-[650px] mx-auto space-y-6">
                          {getDocumentContent().content}
                        </div>
                      </div>

                      {/* Page Indicator */}
                      <div className="bg-[#f9fafb] px-4 py-2 text-center border-t border-[#e5e7eb]">
                        <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[12px]">
                          {selectedDocument.name} - Page 1 of {selectedDocument.pages}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6">
                  {/* Email Header */}
                  <div className="mb-6 pb-4 border-b border-[#e5e7eb]">
                    <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[13px] leading-[20px] mb-2">
                      To: homeowner@example.com
                    </p>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#101828] text-[14px] leading-[20px]">
                      Subject: ARC Application Denied - [Property Address]
                    </p>
                  </div>

                  {/* Email Content */}
                  <div className="space-y-4">
                    <p className="font-['Inter:Regular',sans-serif] text-[#364153] text-[14px] leading-[22px]">
                      Dear [Homeowner Name],
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[#364153] text-[14px] leading-[22px]">
                      After careful review, your ARC application for [Property Address] has been denied.
                    </p>
                    <div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#101828] text-[14px] leading-[22px]">
                        Reason for Denial:
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[#364153] text-[14px] leading-[22px]">
                        [Denial reason details]
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] text-[#364153] text-[14px] leading-[22px]">
                      Please see the attached documents for more information.
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[#364153] text-[14px] leading-[22px]">
                      You may resubmit your application after addressing the concerns outlined above.
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[#364153] text-[14px] leading-[22px]">
                      Best regards,
                      <br />
                      ARC Committee
                    </p>
                  </div>

                  {/* Attached Documents Section - Only in Email Tab */}
                  <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#101828] text-[14px] leading-[20px] mb-3">
                      Attached Documents (3)
                    </h4>
                    <div className="space-y-2">
                      {/* Document 1 */}
                      <div className="bg-[#f8f8f8] h-[36px] rounded-[6px] flex items-center justify-between px-[13px]">
                        <div className="flex items-center gap-[8px]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.33334 1.33334H4.00001C3.64638 1.33334 3.30724 1.47381 3.05719 1.72386C2.80715 1.9739 2.66668 2.31305 2.66668 2.66668V13.3333C2.66668 13.687 2.80715 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4.00001 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33334 1.33334Z" stroke="#FB2C36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.33334 1.33334V5.33334H13.3333" stroke="#FB2C36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="flex items-center gap-[4px]">
                            <p className="font-['Inter:Regular',sans-serif] text-[#101828] text-[14px] leading-[20px] whitespace-nowrap">
                              Denial Letter.pdf
                            </p>
                            <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[12px] leading-[20px] whitespace-nowrap">
                              (245 KB)
                            </p>
                          </div>
                        </div>
                        <button 
                          className="font-['Inter:Medium',sans-serif] font-medium text-[#0074e0] text-[13px] leading-[20px] hover:text-[#005bb5]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openDocumentViewer('Denial Letter.pdf', '245 KB', 2);
                          }}
                        >
                          View
                        </button>
                      </div>

                      {/* Document 2 */}
                      <div className="bg-[#f8f8f8] h-[36px] rounded-[6px] flex items-center justify-between px-[13px]">
                        <div className="flex items-center gap-[8px]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.33334 1.33334H4.00001C3.64638 1.33334 3.30724 1.47381 3.05719 1.72386C2.80715 1.9739 2.66668 2.31305 2.66668 2.66668V13.3333C2.66668 13.687 2.80715 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4.00001 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33334 1.33334Z" stroke="#FB2C36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.33334 1.33334V5.33334H13.3333" stroke="#FB2C36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="flex items-center gap-[4px]">
                            <p className="font-['Inter:Regular',sans-serif] text-[#101828] text-[14px] leading-[20px] whitespace-nowrap">
                              ARC Guidelines.pdf
                            </p>
                            <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[12px] leading-[20px] whitespace-nowrap">
                              (1.2 MB)
                            </p>
                          </div>
                        </div>
                        <button 
                          className="font-['Inter:Medium',sans-serif] font-medium text-[#0074e0] text-[13px] leading-[20px] hover:text-[#005bb5]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openDocumentViewer('ARC Guidelines.pdf', '1.2 MB', 15);
                          }}
                        >
                          View
                        </button>
                      </div>

                      {/* Document 3 */}
                      <div className="bg-[#f8f8f8] h-[36px] rounded-[6px] flex items-center justify-between px-[13px]">
                        <div className="flex items-center gap-[8px]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.33334 1.33334H4.00001C3.64638 1.33334 3.30724 1.47381 3.05719 1.72386C2.80715 1.9739 2.66668 2.31305 2.66668 2.66668V13.3333C2.66668 13.687 2.80715 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4.00001 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33334 1.33334Z" stroke="#FB2C36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.33334 1.33334V5.33334H13.3333" stroke="#FB2C36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="flex items-center gap-[4px]">
                            <p className="font-['Inter:Regular',sans-serif] text-[#101828] text-[14px] leading-[20px] whitespace-nowrap">
                              Original Application.pdf
                            </p>
                            <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[12px] leading-[20px] whitespace-nowrap">
                              (890 KB)
                            </p>
                          </div>
                        </div>
                        <button 
                          className="font-['Inter:Medium',sans-serif] font-medium text-[#0074e0] text-[13px] leading-[20px] hover:text-[#005bb5]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openDocumentViewer('Original Application.pdf', '890 KB', 5);
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e5e7eb] shrink-0">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-white border border-[#d1d5dc] rounded-lg font-['Inter:Medium',sans-serif] font-medium text-[#364153] text-[14px] leading-[20px] hover:bg-[#f9fafb] transition-colors"
              >
                Send Test to Me
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#0074e0] border border-[#0074e0] rounded-lg font-['Inter:Medium',sans-serif] font-medium text-white text-[14px] leading-[20px] hover:bg-[#005bb5] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}