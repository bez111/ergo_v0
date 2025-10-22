import { getRobotsContent } from '@/lib/seo-config'

interface SmartRobotsProps {
  pathname: string
  customRobots?: string
}

export function SmartRobots({ pathname, customRobots }: SmartRobotsProps) {
  const robotsContent = customRobots || getRobotsContent(pathname)
  
  return (
    <meta name="robots" content={robotsContent} />
  )
} 