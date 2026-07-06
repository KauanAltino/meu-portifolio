import type { IconType } from 'react-icons'
import {
  FaAws,
  FaCloud,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaLinux,
  FaNetworkWired,
  FaNodeJs,
  FaPython,
  FaServer,
  FaTable,
  FaToolbox,
  FaReact,
  FaBolt,
  FaBrain,
  FaCodeBranch,
  FaCubes,
  FaLayerGroup,
  FaRobot,
  FaTerminal,
  FaWandMagicSparkles,
} from 'react-icons/fa6'

const iconMap: Record<string, IconType> = {
  FaAws,
  FaCloud,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaLinux,
  FaNetworkWired,
  FaNodeJs,
  FaPython,
  FaServer,
  FaTable,
  FaToolbox,
  FaReact,
  FaBolt,
  FaBrain,
  FaCodeBranch,
  FaCubes,
  FaLayerGroup,
  FaRobot,
  FaTerminal,
  FaWandMagicSparkles,
}

type SkillIconProps = {
  icon: string
}

export default function SkillIcon({ icon }: SkillIconProps) {
  const Icon = iconMap[icon] ?? FaChartLine
  return <Icon aria-hidden="true" />
}
