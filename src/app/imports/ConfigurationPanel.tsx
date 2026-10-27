import clsx from "clsx";
import svgPaths from "./svg-w05zob45qh";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRotateLeft, faCircleExclamation, faCircleStop } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { X } from 'lucide-react';
import Div from './Div';

type StepCardProps = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function StepCard({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<StepCardProps>) {
  return (
    <div className={clsx("absolute shadow-[0px_1.807px_3.614px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-lg transition-shadow", additionalClassNames)} onClick={onClick}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[13.554px] items-start justify-center relative">{children}</div>
      </div>
    </div>
  );
}
type Frame398HelperProps = {
  additionalClassNames?: string;
};

function Frame398Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame398HelperProps>) {
  return (
    <div className={clsx("h-[112.947px] w-[177.1px]", additionalClassNames)}>
      <div className="absolute inset-[0_-0.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178.907 112.947">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.036px] items-center pl-[4.518px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function StepIndicator({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+0.9px)] top-[-16.26px] w-[33.432px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[6.325px] items-center relative w-full">
          <div className="relative shrink-0 size-[33.432px]" data-name="Step ID">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text, children }: React.PropsWithChildren<Text4Props>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col gap-[9.036px] items-center justify-center p-[7.229px] relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[57.545px] top-[calc(50%+0.31px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-45">
            <div className="relative size-[40.69px]">
              <div className="absolute inset-[14.64%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7724 28.7724">
                  {children}
                </svg>
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faCircleStop} className="text-white text-[14.56px] relative z-10" />
      </div>
    </div>
  );
}
type Frame398DecisionTypeProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Frame398DecisionType({ text, text1, additionalClassNames = "" }: Frame398DecisionTypeProps) {
  return (
    <div className={clsx("absolute bg-white rounded-[4px] shadow-[0px_1.807px_3.614px_0px_rgba(0,0,0,0.1)] top-[129.21px] w-[57.829px]", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic px-[2.711px] py-[1.807px] relative text-center w-full whitespace-nowrap">
          <p className="font-['Geist:SemiBold',sans-serif] relative shrink-0 text-[#2f4164] text-[10.84px]">{text}</p>
          <p className="font-['Geist:Medium',sans-serif] relative shrink-0 text-[#0074e0] text-[9.94px]">{text1}</p>
        </div>
      </div>
    </div>
  );
}
type Frame398LoopbackProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Frame398Loopback({ text, text1, additionalClassNames = "" }: Frame398LoopbackProps) {
  return (
    <div className={clsx("absolute bg-white rounded-[6px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8.132px] items-center not-italic px-[11.746px] py-[8.132px] relative whitespace-nowrap">
          <FontAwesomeIcon icon={faRotateLeft} className="text-[#0074e0] text-[15.36px]" />
          <ol className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#2f4164] text-[12.65px]" start={2}>
            <li className="ms-[18.975px] whitespace-pre-wrap">
              <span className="leading-[normal]">{text1}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
type Frame398StepIdText1Props = {
  text: string;
};

function Frame398StepIdText1({ text, children }: React.PropsWithChildren<Frame398StepIdText1Props>) {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+0.9px)] size-[33.432px] top-[-16.26px]">
      <Text4 text={text}>{children}</Text4>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[9.036px] items-center justify-center px-[11.746px] py-[8.132px] relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.35px)] size-[32.727px] top-[calc(50%-0.35px)]">
          <div className="absolute inset-[3.6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.3698 30.3698">
              <path d={svgPaths.p17d8e6a0} fill="var(--fill-0, #1B55E7)" id="Polygon 2" />
            </svg>
          </div>
        </div>
        <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.94px] text-center text-white whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type Frame398StepIdTextProps = {
  text: string;
};

function Frame398StepIdText({ text }: Frame398StepIdTextProps) {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+0.9px)] size-[33.432px] top-[-16.26px]">
      <Text3 text={text} />
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex items-center justify-center px-[2.711px] py-[1.807px] rounded-[4px] shadow-[0px_1.807px_3.614px_0px_rgba(0,0,0,0.1)]", additionalClassNames)}>
      <p className="font-['Geist:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2f4164] text-[10.84px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <Wrapper>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f4164] text-[10.84px] text-ellipsis whitespace-nowrap">{text}</p>
      <div className="relative shrink-0 w-[13.554px]" data-name="Validation Error with Tip">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[9.939px] items-center relative w-full">
            <FontAwesomeIcon icon={faCircleExclamation} className="text-[#ff9f10] text-[13.55px]" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-0.9px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.847 0.903573">
          <line id="Line 19" stroke="var(--stroke-0, #E1EBF1)" strokeWidth="0.903573" x2="188.847" y1="0.451786" y2="0.451786" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <Wrapper>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f4164] text-[10.84px] text-ellipsis whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <h2 className="block flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px not-italic overflow-hidden relative text-[#2f4164] text-[12.65px] text-ellipsis text-left whitespace-nowrap">
          {text}
     </h2>
  );
}

type ConfigurationPanelProps = {
  onClose?: () => void;
  // When provided, step cards report their title instead of opening the built-in flyout.
  onSelectStep?: (title: string) => void;
  // Hosts that supply their own header can hide the panel's title bar.
  showHeader?: boolean;
};

export default function ConfigurationPanel({ onClose, onSelectStep, showHeader = true }: ConfigurationPanelProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardTitles: Record<string, string> = {
    "1": "1. Application Received",
    "2": "2. ARC Review",
    "3": "3. Approved",
    "4": "4. Void",
    "5": "5. Additional Info Needed",
    "6": "6. Approved with Conditions",
    "7": "7. Approved with Conditions",
    "8": "8. Denial",
    "9": "9. Board Approval"
  };

  const selectCard = (id: string) => (onSelectStep ? onSelectStep(cardTitles[id]) : setSelectedCard(id));

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] size-full" data-name="Configuration Panel">
      <div className="content-stretch flex flex-[1_0_0] isolate items-center justify-center min-h-px min-w-px relative w-full">
        <div className="bg-[#f7f7f7] flex-[1_0_0] h-full min-h-px min-w-px relative z-[1]" style={{
          backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '10px 10px'
        }}>
          <div className="content-stretch flex flex-col gap-[66px] isolate items-start pb-[80px] relative size-full">
            {showHeader && (
              <div className="bg-white h-[50px] relative shrink-0 w-full z-[4]">
                <div aria-hidden="true" className="absolute border-[#e1ebf1] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
                    <p className="font-['Geist:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2f4164] text-[15px] whitespace-nowrap">Workflow Diagram</p>
                    <div className="flex gap-[8px] items-center shrink-0">
                      <button className="cursor-pointer relative rounded-[6px] shrink-0" data-name="Button">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[6px] items-center justify-center leading-[normal] not-italic px-[14px] py-[6px] relative text-[#0074e0] text-[13px] text-center whitespace-nowrap">
                            <FontAwesomeIcon icon={faGear} />
                            <p className="font-['Geist:Regular',sans-serif] relative shrink-0">View Settings</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#99c7f3] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      </button>
                      {onClose && (
                        <button type="button" aria-label="Close" className="cursor-pointer flex items-center justify-center rounded-[6px] size-[30px] text-[#2f4164] hover:bg-[#eef2f6]" onClick={onClose}>
                          <X size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="content-stretch flex flex-col items-center justify-center pt-[24px] relative shrink-0 w-full z-[3]">
              <div className="content-stretch flex flex-col gap-[9.036px] items-start px-[63.25px] relative shrink-0">
                <div className="h-[716.533px] relative shrink-0 w-[1464.692px]" data-name="Diagram">
                  <div className="absolute h-[137.343px] left-[516.84px] top-[448.17px] w-[306.311px]">
                    <div className="absolute inset-[0_-0.29%] pointer-events-none">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308.118 137.343">
                        <path d={svgPaths.p23439c00} id="Vector 10" stroke="var(--stroke-0, #82E2AC)" strokeDasharray="5.42 3.61" strokeWidth="1.80715" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[128.307px] left-[730.99px] top-[448.17px] w-[92.164px]">
                    <div className="absolute inset-[0_-0.98%] pointer-events-none">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.9716 128.307">
                        <path d={svgPaths.p2ce30580} id="Vector 8" stroke="var(--stroke-0, #82E2AC)" strokeWidth="1.80715" />
                      </svg>
                    </div>
                  </div>
                  <Frame398Helper additionalClassNames="absolute left-[1000.26px] top-[101.2px] pointer-events-none">
                    <path d={svgPaths.p270aa1c0} id="Vector 3" stroke="var(--stroke-0, #82E2AC)" strokeWidth="1.80715" />
                  </Frame398Helper>
                  <div className="absolute h-[112.947px] left-[585.52px] top-[289.14px] w-[414.74px]">
                    <div className="absolute inset-[0_-0.22%] pointer-events-none">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416.547 112.947">
                        <path d={svgPaths.p21019580} id="Vector 11" stroke="var(--stroke-0, #82E2AC)" strokeDasharray="5.42 3.61" strokeWidth="1.80715" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[112.947px] left-[346.07px] top-[289.14px] w-[654.187px]">
                    <div className="absolute inset-[0_-0.14%] pointer-events-none">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 655.994 112.947">
                        <path d={svgPaths.p3fce0880} id="Vector 12" stroke="var(--stroke-0, #82E2AC)" strokeDasharray="5.42 3.61" strokeWidth="1.80715" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[112.947px] left-[110.24px] top-[289.14px] w-[890.019px]">
                    <div className="absolute inset-[0_-0.1%] pointer-events-none">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 891.826 112.947">
                        <path d={svgPaths.p22422480} id="Vector 13" stroke="var(--stroke-0, #82E2AC)" strokeDasharray="5.42 3.61" strokeWidth="1.80715" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute flex h-[112.947px] items-center justify-center left-[1177.36px] top-[101.2px] w-[177.1px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <Frame398Helper additionalClassNames="relative">
                        <path d={svgPaths.p270aa1c0} id="Vector 4" stroke="var(--stroke-0, #FB8E8E)" strokeWidth="1.80715" />
                      </Frame398Helper>
                    </div>
                  </div>
                  <div className="absolute contents left-[823.15px] top-[289.14px]">
                    <div className="absolute h-[112.947px] left-[823.15px] top-[289.14px] w-[177.1px]">
                      <div className="absolute inset-[0_-0.51%] pointer-events-none">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 125">
                          <path d={svgPaths.pe1c4fd0} id="Vector 3" stroke="var(--stroke-0, #82E2AC)" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute flex h-[112.947px] items-center justify-center left-[1000.26px] top-[289.14px] w-[84.936px]">
                      <div className="-scale-y-100 flex-none rotate-180 pointer-events-none">
                        <div className="h-[112.947px] relative w-[84.936px]">
                          <div className="absolute inset-[0_-1.06%] pointer-events-none">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 125">
                              <path d={svgPaths.p242ac660} id="Vector 12" stroke="var(--stroke-0, #FB8E8E)" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute contents left-[823.15px] top-[436.43px]">
                    <div className="absolute flex h-[149.09px] items-center justify-center left-[823.15px] top-[436.43px] w-[247.579px]">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="h-[149.09px] relative w-[247.579px]">
                          <div className="absolute inset-[0_-0.36%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 165">
                              <path d={svgPaths.p13baa000} id="Vector 12" stroke="var(--stroke-0, #FB8E8E)" strokeDasharray="6 4" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute contents left-[1000.26px] top-[289.14px]">
                    <div className="absolute flex h-[112.947px] items-center justify-center left-[1000.26px] top-[289.14px] w-[270.168px]">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="h-[112.947px] relative w-[270.168px]">
                          <div className="absolute inset-[0_-0.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301 125">
                              <path d={svgPaths.p111e8fa0} id="Vector 12" stroke="var(--stroke-0, #FB8E8E)" strokeDasharray="6 4" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <StepCard additionalClassNames="left-[1068.02px] top-[28.01px]" onClick={() => selectCard("1")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="1. Application Received" />
                        <div className="relative rounded-[6px] shrink-0 size-[21.686px]" data-name="AI Indicator">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex font-['Font_Awesome_6_Pro:Solid',sans-serif] gap-[0.904px] items-center justify-center leading-[normal] not-italic p-[4.518px] relative size-full text-[#0074e0] whitespace-nowrap">
                              <p className="relative shrink-0 text-[9.94px]">+</p>
                              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[14.46px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Helper />
                      <Text1 text="Notifications: Email" />
                    </div>
                    <StepIndicator>
                      <Text3 text="?" />
                    </StepIndicator>
                  </StepCard>
                  <StepCard additionalClassNames="left-[890.92px] top-[213.24px]" onClick={() => selectCard("2")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="2. ARC Review" />
                      </div>
                      <Helper />
                      <Helper1 text="Notifications: Email" text1="" />
                    </div>
                    <Frame398StepIdText text="?" />
                  </StepCard>
                  <StepCard additionalClassNames="left-[475.28px] top-[393.96px]" onClick={() => selectCard("3")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="3. Approved" />
                        <div className="relative rounded-[6px] shrink-0 size-[21.686px]" data-name="AI Indicator">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex font-['Font_Awesome_6_Pro:Solid',sans-serif] gap-[0.904px] items-center justify-center leading-[normal] not-italic p-[4.518px] relative size-full text-[#0074e0] whitespace-nowrap">
                              <p className="relative shrink-0 text-[9.94px]">+</p>
                              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[14.46px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Helper />
                      <Text1 text="Notifications: Email" />
                    </div>
                    <Frame398StepIdText1 text="">
                      <path d={svgPaths.p3aae2580} fill="var(--fill-0, #FE7070)" id="Polygon 2" />
                    </Frame398StepIdText1>
                  </StepCard>
                  <StepCard additionalClassNames="left-[1160.19px] top-[393.96px]" onClick={() => selectCard("4")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="4. Void" />
                      </div>
                      <Helper />
                      <Text1 text="Notifications: User Preference" />
                    </div>
                    <Frame398StepIdText1 text="">
                      <path d={svgPaths.p3aae2580} fill="var(--fill-0, #FE7070)" id="Polygon 2" />
                    </Frame398StepIdText1>
                  </StepCard>
                  <StepCard additionalClassNames="left-[237.64px] top-[393.96px]" onClick={() => selectCard("5")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="5. Additional Info Needed" />
                      </div>
                      <Helper />
                      <Text1 text="Notifications: User Preference" />
                    </div>
                  </StepCard>
                  <StepCard additionalClassNames="left-[405.7px] top-[570.15px]" onClick={() => selectCard("6")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="6. Approved with Conditions" />
                      </div>
                      <Helper />
                      <Helper1 text="Notifications: User Preference" text1="" />
                    </div>
                    <Frame398StepIdText1 text="">
                      <path d={svgPaths.p3aae2580} fill="var(--fill-0, #FE7070)" id="Polygon 2" />
                    </Frame398StepIdText1>
                  </StepCard>
                  <StepCard additionalClassNames="left-0 top-[393.96px]" onClick={() => selectCard("7")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="7. Approved with Conditions" />
                      </div>
                      <Helper />
                      <Text1 text="Notifications: User Preference" />
                    </div>
                    <Frame398StepIdText1 text="">
                      <path d={svgPaths.p3aae2580} fill="var(--fill-0, #FE7070)" id="Polygon 2" />
                    </Frame398StepIdText1>
                  </StepCard>
                  <StepCard additionalClassNames="left-[1245.12px] top-[213.24px]" onClick={() => selectCard("8")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="8. Denial" />
                      </div>
                      <Helper />
                      <Helper1 text="Notifications: User Preference" text1="" />
                    </div>
                    <StepIndicator>
                      <Text4 text="">
                        <path d={svgPaths.p3aae2580} fill="var(--fill-0, #FE7070)" id="Polygon 2" />
                      </Text4>
                    </StepIndicator>
                  </StepCard>
                  <Text2 text="No" additionalClassNames="left-[1035.49px] top-[322.58px]" />
                  <Text2 text="Yes" additionalClassNames="left-[942.43px] top-[322.58px]" />
                  <Frame398Loopback text="" text1="8. Denial" additionalClassNames="left-[1028.27px] top-[393.96px]" />
                  <Frame398Loopback text="" text1="3. Approved" additionalClassNames="left-[667.74px] top-[569.25px]" />
                  <Frame398Loopback text="" text1="2. ARC Review" additionalClassNames="left-[1001.16px] top-[569.25px]" />
                  <div className="absolute contents left-[823.15px] top-[446.36px]">
                    <div className="absolute flex h-[139.15px] items-center justify-center left-[823.15px] top-[446.36px] w-[93.068px]">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="h-[139.15px] relative w-[93.068px]">
                          <div className="absolute inset-[0_-0.97%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 154">
                              <path d={svgPaths.p17b5e4c0} id="Vector 12" stroke="var(--stroke-0, #FB8E8E)" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text2 text="No" additionalClassNames="left-[860.2px] top-[506px]" />
                  <Frame398Loopback text="" text1="8. Denial" additionalClassNames="left-[859.3px] top-[569.25px]" />
                  <StepCard additionalClassNames="left-[712.92px] top-[393.96px]" onClick={() => selectCard("9")}>
                    <div className="bg-white content-stretch flex flex-col gap-[9.036px] items-start px-[15.361px] py-[18.071px] relative rounded-[8px] shrink-0 w-[219.568px]">
                      <div aria-hidden="true" className="absolute border-[#bed1dd] border-[0.904px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex h-[15.361px] items-center justify-start relative shrink-0 w-full">
                        <Text text="9. Board Approval" />
                      </div>
                      <Helper />
                      <Text1 text="Notifications: User Preference" />
                    </div>
                    <Frame398StepIdText text="?" />
                  </StepCard>
                  <Frame398DecisionType text="Yes" text1="Show more" additionalClassNames="left-[1087.9px]" />
                  <Frame398DecisionType text="No" text1="Show more" additionalClassNames="left-[1208.08px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flyout Panel */}
      {selectedCard && (
        <div className="fixed top-0 right-0 h-screen w-[480px] z-[1000] animate-in slide-in-from-right duration-300">
          <div className="h-full" onClick={(e) => {
            // Close only on X button click (the one with data-close-button attribute)
            if ((e.target as HTMLElement).closest('[data-close-button="true"]')) {
              setSelectedCard(null);
            }
          }}>
            <Div cardTitle={cardTitles[selectedCard] || selectedCard} />
          </div>
        </div>
      )}
    </div>
  );
}