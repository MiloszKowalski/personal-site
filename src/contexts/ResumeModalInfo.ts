import { ReactComponent as BackendIcon } from 'views/Resume/svg/BackendIcon.svg';
import { ReactComponent as DesignIcon } from 'views/Resume/svg/DesignIcon.svg';
import { ReactComponent as FollowUPLogoDark } from 'views/Resume/svg/FollowUPLogoDark.svg';
import { ReactComponent as FrontendIcon } from 'views/Resume/svg/FrontendIcon.svg';

import AdobeXdIcon from 'views/Resume/svg/AdobeXdIcon.svg';
import AfterEffectsIcon from 'views/Resume/svg/AfterEffectsIcon.svg';
import ASPNetIcon from 'views/Resume/svg/ASPNetIcon.svg';
import AutofacIcon from 'views/Resume/svg/AutofacIcon.svg';
import AxiosIcon from 'views/Resume/svg/AxiosIcon.svg';
import CSharpIcon from 'views/Resume/svg/CSharpIcon.svg';
import IllustratorIcon from 'views/Resume/svg/IllustratorIcon.svg';
import JavaScriptIcon from 'views/Resume/svg/JavaScriptIcon.svg';
import JestIcon from 'views/Resume/svg/JestIcon.svg';
import NetIcon from 'views/Resume/svg/NetIcon.svg';
import PhotoshopIcon from 'views/Resume/svg/PhotoshopIcon.svg';
import PremiereProIcon from 'views/Resume/svg/PremiereProIcon.svg';
import ReactIcon from 'views/Resume/svg/ReactIcon.svg';
import VueIcon from 'views/Resume/svg/VueIcon.svg';
import XUnitIcon from 'views/Resume/svg/XUnitIcon.svg';

export interface Modal {
  title: string,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  position?: string,
  items?: ResumeModalItem[],
  description: string
}

export interface ResumeModalItem {
  title: string,
  iconPath: string,
  description: string
}

export const experienceInfo: Modal[] = [
  {
    title: "FollowUP",
    icon: FollowUPLogoDark,
    position: "Junior Full Stack Developer",
    description: "resume.modal-description.experience.FollowUP"
  }
]

export const techStackInfo: Modal[] = [
  {
    title: "FRONTEND",
    icon: FrontendIcon,
    description: '',
    items: [
      {
        title: "JavaScript",
        iconPath: JavaScriptIcon,
        description: "resume.modal-description.frontend.JavaScript"
      },
      {
        title: "React.js",
        iconPath: ReactIcon,
        description: "resume.modal-description.frontend.Reactjs"
      },
      {
        title: "Vue.js",
        iconPath: VueIcon,
        description: "resume.modal-description.frontend.Vuejs"
      },
      {
        title: "axios",
        iconPath: AxiosIcon,
        description: "resume.modal-description.frontend.axios"
      },
      {
        title: "Jest",
        iconPath: JestIcon,
        description: "resume.modal-description.frontend.Jest"
      }
    ]
  },
  {
    title: "BACKEND",
    icon: BackendIcon,
    description: '',
    items: [
      {
        title: "C#",
        iconPath: CSharpIcon,
        description: "resume.modal-description.backend.CSharp"
      },
      {
        title: "ASP.NET Core",
        iconPath: ASPNetIcon,
        description: "resume.modal-description.backend.ASPNET Core"
      },
      {
        title: ".NET",
        iconPath: NetIcon,
        description: "resume.modal-description.backend.NET"
      },
      {
        title: "Dependency Injection",
        iconPath: AutofacIcon,
        description: "resume.modal-description.backend.DependencyInjection"
      },
      {
        title: "xUnit.net",
        iconPath: XUnitIcon,
        description: "resume.modal-description.backend.xUnitnet"
      }
    ]
  },
  {
    title: "DESIGN",
    icon: DesignIcon,
    description: '',
    items: [
      {
        title: "Photoshop",
        iconPath: PhotoshopIcon,
        description: "resume.modal-description.design.Photoshop"
      },
      {
        title: "Illustrator",
        iconPath: IllustratorIcon,
        description: "resume.modal-description.design.Illustrator"
      },
      {
        title: "Premiere Pro",
        iconPath: PremiereProIcon,
        description: "resume.modal-description.design.Premiere Pro"
      },
      {
        title: "After Effects",
        iconPath: AfterEffectsIcon,
        description: "resume.modal-description.design.AfterEffects"
      },
      {
        title: "Figma / Adobe Xd",
        iconPath: AdobeXdIcon,
        description: "resume.modal-description.design.figmaadobexd"
      }
    ]
  }
]
