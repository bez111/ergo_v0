import {
  Cpu,
  Database,
  Server,
  MemoryStick,
  HardDrive,
  Wifi,
  Terminal,
  AlertTriangle,
  Info,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function RequirementsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          System Requirements
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Hardware and software recommendations for efficient Ergo node operation.
        </p>
      </div>

      {/* Minimum Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400"><AlertTriangle className="w-6 h-6" /> Minimum Requirements</h2>
        <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><Cpu className="inline w-5 h-5 mr-2 text-orange-400" />2-core CPU (Intel Core i3 / AMD Ryzen 3)</li>
            <li><MemoryStick className="inline w-5 h-5 mr-2 text-orange-400" />4 GB RAM</li>
            <li><HardDrive className="inline w-5 h-5 mr-2 text-orange-400" />50 GB free space (SSD strongly recommended)</li>
            <li><Wifi className="inline w-5 h-5 mr-2 text-orange-400" />10 Mbps stable internet</li>
            <li><Server className="inline w-5 h-5 mr-2 text-orange-400" />Linux (Ubuntu 20.04+), Windows 10/11, macOS (latest)</li>
            <li><Terminal className="inline w-5 h-5 mr-2 text-orange-400" />OpenJDK 11+</li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Performance may be limited, especially during high network load.</span>
          </div>
        </div>
      </section>

      {/* Recommended Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Database className="w-6 h-6" /> Recommended Requirements</h2>
        <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><Cpu className="inline w-5 h-5 mr-2 text-green-400" />4-core CPU or higher (Intel Core i5/i7/i9, AMD Ryzen 5/7/9)</li>
            <li><MemoryStick className="inline w-5 h-5 mr-2 text-green-400" />8 GB+ RAM</li>
            <li><HardDrive className="inline w-5 h-5 mr-2 text-green-400" />100 GB NVMe SSD or high-performance SATA SSD</li>
            <li><Wifi className="inline w-5 h-5 mr-2 text-green-400" />100 Mbps high-speed internet</li>
            <li><Server className="inline w-5 h-5 mr-2 text-green-400" />Linux (preferred), Windows Server</li>
            <li><Terminal className="inline w-5 h-5 mr-2 text-green-400" />OpenJDK 11 or 17</li>
          </ul>
          <div className="mt-4 text-sm text-green-300 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Optimal performance, fast sync, and stable operation even under high load.</span>
          </div>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><Info className="w-6 h-6" /> Performance Optimization Tips</h2>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Use an SSD:</b> Most important for node performance.</li>
            <li><b>Allocate enough RAM:</b> More RAM = more cache, less disk access.</li>
            <li><b>Stable Internet:</b> Node constantly exchanges data with peers.</li>
            <li><b>Open Ports:</b> Ensure P2P (9030) and RPC API (9053) ports are open if needed.</li>
          </ul>
        </div>
      </section>
    </>
  )
} 