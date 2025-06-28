import { IconType } from "react-icons";
import {
  HiOutlineRocketLaunch,
  HiCog6Tooth,
  HiCloudArrowUp,
  HiPhoneArrowUpRight,
  HiShieldCheck,
  HiArrowPathRoundedSquare,
  HiDocumentCheck,
  HiLifebuoy,
  HiCodeBracketSquare,
  HiPresentationChartLine,
  HiHandRaised,
  HiServerStack,
  HiBuildingLibrary,
  HiAcademicCap,
  HiDevicePhoneMobile,
} from "react-icons/hi2";
import { BsFillHospitalFill, BsFillBriefcaseFill } from "react-icons/bs";
import { FaHandsHelping, FaChurch } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { LuBrainCog } from "react-icons/lu";

export const iconLibrary: Record<string, IconType> = {
  // Services
  rocket: HiOutlineRocketLaunch,
  it: HiCog6Tooth,
  cloud: HiCloudArrowUp,
  phone: HiPhoneArrowUpRight,
  security: HiShieldCheck,
  backup: HiArrowPathRoundedSquare,
  compliance: HiDocumentCheck,
  help: HiLifebuoy,
  code: HiCodeBracketSquare,
  ehr: HiPresentationChartLine,
  nonprofit: HiHandRaised,
  infra: HiServerStack,
  device: HiDevicePhoneMobile,

  // Industries
  healthcare: BsFillHospitalFill,
  nonprofitSector: FaHandsHelping,
  behavioral: LuBrainCog,
  smb: BsFillBriefcaseFill,
  education: HiAcademicCap,
  faith: FaChurch,
  community: HiHandRaised,

  // Social Media
  facebook: FaFacebookF,
  x: FaXTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};
