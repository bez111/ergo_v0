"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Play, 
  Code, 
  Settings, 
  Palette, 
  Type, 
  Zap,
  Copy,
  RotateCcw,
  Eye,
  EyeOff,
  ChevronRight,
  Shield,
  Users,
  Target
} from "lucide-react"

// Live Code Editor (simplified version)
const LiveCodeEditor: React.FC<{
  code: string
  onChange: (code: string) => void
  language: string
}> = ({ code, onChange, language }) => {
  return (
    <div className="bg-black border border-neutral-700 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-neutral-800 border-b border-neutral-700">
        <span className="text-sm text-gray-400 font-mono">{language}</span>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
            <Copy className="w-3 h-3" />
          </Button>
          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
            <RotateCcw className="w-3 h-3" />
          </Button>
        </div>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-4 bg-black text-gray-300 font-mono text-sm resize-none focus:outline-none border-none"
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  )
}

// Live Preview Area
const LivePreview: React.FC<{
  code: string
  error?: string
}> = ({ code, error }) => {
  const [isVisible, setIsVisible] = React.useState(true)

  // Здесь была бы логика рендеринга компонента из кода
  // Для демо показываем статичный пример
  const renderPreview = () => {
    try {
      if (code.includes('Button')) {
        return (
          <Button className="bg-orange-500 hover:bg-orange-600 text-black">
            <Zap className="w-4 h-4 mr-2" />
            Live Preview
          </Button>
        )
      }
      
      if (code.includes('Card')) {
        return (
          <Card className="bg-neutral-900/50 border-neutral-700 w-64">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-400" />
                Live Card
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">This is a live preview!</p>
            </CardContent>
          </Card>
        )
      }

      return (
        <div className="text-gray-400 text-center py-8">
          Edit the code to see live preview
        </div>
      )
    } catch (err) {
      return (
        <div className="text-red-400 text-center py-8">
          Error rendering component
        </div>
      )
    }
  }

  return (
    <div className="bg-neutral-900/30 border border-neutral-700 rounded-lg p-6 min-h-64 relative">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">Live Preview</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white"
        >
          {isVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </Button>
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-center"
          >
            {error ? (
              <div className="text-red-400 text-sm">{error}</div>
            ) : (
              renderPreview()
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Property Controls
const PropertyControls: React.FC<{
  component: string
  onPropertyChange: (prop: string, value: any) => void
}> = ({ component, onPropertyChange }) => {
  const [properties, setProperties] = React.useState({
    variant: 'default',
    size: 'default',
    color: 'primary',
    disabled: false,
    loading: false
  })

  const updateProperty = (prop: string, value: any) => {
    setProperties(prev => ({ ...prev, [prop]: value }))
    onPropertyChange(prop, value)
  }

  const getPropertiesForComponent = () => {
    switch (component) {
      case 'Button':
        return [
          { name: 'variant', type: 'select', options: ['default', 'outline', 'ghost', 'destructive'] },
          { name: 'size', type: 'select', options: ['sm', 'default', 'lg', 'icon'] },
          { name: 'disabled', type: 'boolean' },
          { name: 'loading', type: 'boolean' }
        ]
      case 'Card':
        return [
          { name: 'hoverable', type: 'boolean' },
          { name: 'bordered', type: 'boolean' }
        ]
      default:
        return []
    }
  }

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
        <Settings className="w-4 h-4 text-orange-400" />
        Properties
      </h4>
      
      {getPropertiesForComponent().map((prop) => (
        <div key={prop.name} className="space-y-2">
          <label className="text-sm text-gray-300 capitalize">{prop.name}</label>
          
          {prop.type === 'select' && (
            <select 
              value={properties[prop.name as keyof typeof properties] as string}
              onChange={(e) => updateProperty(prop.name, e.target.value)}
              className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded text-white text-sm"
            >
              {prop.options?.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          )}
          
          {prop.type === 'boolean' && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={properties[prop.name as keyof typeof properties] as boolean}
                onChange={(e) => updateProperty(prop.name, e.target.checked)}
                className="w-4 h-4 text-orange-500 bg-neutral-800 border-neutral-600 rounded focus:ring-orange-500"
              />
              <span className="text-sm text-gray-400">Enable {prop.name}</span>
            </label>
          )}
        </div>
      ))}
    </div>
  )
}

// Main Playground Component
export const LivePlayground: React.FC<{
  initialComponent?: string
  initialCode?: string
}> = ({ 
  initialComponent = 'Button',
  initialCode = `<Button className="bg-orange-500 hover:bg-orange-600 text-black">
  <Zap className="w-4 h-4 mr-2" />
  Click me
</Button>`
}) => {
  const [activeComponent, setActiveComponent] = React.useState(initialComponent)
  const [code, setCode] = React.useState(initialCode)
  const [error, setError] = React.useState<string>()

  const components = [
    { name: 'Button', icon: Target },
    { name: 'Card', icon: Type },
    { name: 'Badge', icon: Palette },
    { name: 'Grid', icon: Users }
  ]

  const handleCodeChange = (newCode: string) => {
    setCode(newCode)
    setError(undefined)
    
    // Простая валидация
    if (newCode.trim() === '') {
      setError('Code cannot be empty')
    }
  }

  const handlePropertyChange = (prop: string, value: any) => {
    // Обновляем код на основе изменения свойств
    console.log(`Property ${prop} changed to:`, value)
  }

  const resetCode = () => {
    setCode(initialCode)
    setError(undefined)
  }

  return (
    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="border-b border-neutral-700 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Play className="w-5 h-5 text-orange-400" />
            Live Playground
          </h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-orange-500/30 text-orange-400">
              Interactive
            </Badge>
            <Button size="sm" variant="ghost" onClick={resetCode}>
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Component Selector */}
      <div className="border-b border-neutral-700 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Type className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium text-white">Component</span>
        </div>
        <div className="flex gap-2">
          {components.map((comp) => (
            <Button
              key={comp.name}
              size="sm"
              variant={activeComponent === comp.name ? "default" : "outline"}
              onClick={() => setActiveComponent(comp.name)}
              className={activeComponent === comp.name ? 
                "bg-orange-500 text-black" : 
                "border-neutral-600 text-gray-300 hover:bg-neutral-800"
              }
            >
              <comp.icon className="w-3 h-3 mr-1" />
              {comp.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Code Editor */}
        <div className="lg:col-span-2 p-4">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">Code Editor</span>
            </div>
            <LiveCodeEditor
              code={code}
              onChange={handleCodeChange}
              language="jsx"
            />
          </div>
          
          {/* Preview */}
          <LivePreview code={code} error={error} />
        </div>

        {/* Controls */}
        <div className="border-l border-neutral-700 p-4 bg-neutral-900/30">
          <PropertyControls
            component={activeComponent}
            onPropertyChange={handlePropertyChange}
          />
          
          {/* Code Templates */}
          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              Templates
            </h4>
            
            <div className="space-y-2">
              {[
                { name: 'Primary Button', code: '<Button className="bg-orange-500">Primary</Button>' },
                { name: 'Feature Card', code: '<Card><CardHeader><CardTitle>Feature</CardTitle></CardHeader></Card>' },
                { name: 'Status Badge', code: '<Badge className="bg-status-success-500">Success</Badge>' }
              ].map((template) => (
                <Button
                  key={template.name}
                  size="sm"
                  variant="ghost"
                  onClick={() => setCode(template.code)}
                  className="w-full justify-start text-left text-gray-300 hover:text-white hover:bg-neutral-800"
                >
                  <ChevronRight className="w-3 h-3 mr-2" />
                  {template.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-700 p-4 bg-neutral-900/50">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>React 19</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by Ergo UI Kit</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LivePlayground 