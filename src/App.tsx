import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, Wifi, Zap, Brain } from 'lucide-react';
import StatusPanel from './components/StatusPanel';
import SystemMetric from './components/SystemMetric';
import HolographicElement from './components/HolographicElement';

function App() {
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [networkStatus, setNetworkStatus] = useState('Connected');
  const [aiStatus, setAiStatus] = useState('Active');

  // Simulate real-time metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
      setMemoryUsage(Math.floor(Math.random() * 100));
      setNetworkStatus(Math.random() > 0.1 ? 'Connected' : 'Disconnected');
      setAiStatus(Math.random() > 0.05 ? 'Active' : 'Processing');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background holographic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <HolographicElement size="large" position="top-left" />
        <HolographicElement size="medium" position="top-right" />
        <HolographicElement size="small" position="bottom-center" />
      </div>

      {/* Main content */}
      <div className="relative z-10 p-8">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            JAMES
          </h1>
          <p className="text-xl text-gray-300 font-light">
            AI Voice Assistant Control Panel
          </p>
        </header>

        {/* Status panels grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatusPanel
            title="System Performance"
            icon={<Activity className="w-6 h-6" />}
            metrics={[
              { label: 'CPU Usage', value: `${cpuUsage}%`, status: cpuUsage > 80 ? 'critical' : cpuUsage > 60 ? 'warning' : 'normal' },
              { label: 'Memory', value: `${memoryUsage}%`, status: memoryUsage > 85 ? 'critical' : memoryUsage > 70 ? 'warning' : 'normal' },
              { label: 'Temperature', value: '42°C', status: 'normal' }
            ]}
          />

          <StatusPanel
            title="Network Status"
            icon={<Wifi className="w-6 h-6" />}
            metrics={[
              { label: 'Connection', value: networkStatus, status: networkStatus === 'Connected' ? 'normal' : 'critical' },
              { label: 'Latency', value: '12ms', status: 'normal' },
              { label: 'Bandwidth', value: '1.2 Gbps', status: 'normal' }
            ]}
          />

          <StatusPanel
            title="AI Processing"
            icon={<Brain className="w-6 h-6" />}
            metrics={[
              { label: 'Status', value: aiStatus, status: aiStatus === 'Active' ? 'normal' : 'warning' },
              { label: 'Response Time', value: '0.8s', status: 'normal' },
              { label: 'Accuracy', value: '98.7%', status: 'normal' }
            ]}
          />

          <StatusPanel
            title="Voice Engine"
            icon={<Zap className="w-6 h-6" />}
            metrics={[
              { label: 'Voice Quality', value: 'HD', status: 'normal' },
              { label: 'Synthesis', value: 'Real-time', status: 'normal' },
              { label: 'Language', value: 'PT-BR', status: 'normal' }
            ]}
          />
        </div>

        {/* Central holographic display */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-64 h-64 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <Brain className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                <p className="text-lg font-orbitron font-semibold">JAMES</p>
                <p className="text-sm text-gray-400">Voice Assistant</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom system metrics */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-gray-700 p-4 z-20">
        <div className="flex justify-center space-x-8">
          <SystemMetric
            icon={<Cpu className="w-4 h-4" />}
            label="CPU"
            value={`${cpuUsage}%`}
            status={cpuUsage > 80 ? 'critical' : cpuUsage > 60 ? 'warning' : 'normal'}
          />
          <SystemMetric
            icon={<HardDrive className="w-4 h-4" />}
            label="Memory"
            value={`${memoryUsage}%`}
            status={memoryUsage > 85 ? 'critical' : memoryUsage > 70 ? 'warning' : 'normal'}
          />
          <SystemMetric
            icon={<Wifi className="w-4 h-4" />}
            label="Network"
            value={networkStatus}
            status={networkStatus === 'Connected' ? 'normal' : 'critical'}
          />
          <SystemMetric
            icon={<Brain className="w-4 h-4" />}
            label="AI"
            value={aiStatus}
            status={aiStatus === 'Active' ? 'normal' : 'warning'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;