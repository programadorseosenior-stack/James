import React from 'react';
import CircularProgress from './CircularProgress';

interface Metric {
  label: string;
  value: string;
  status: 'normal' | 'warning' | 'critical';
}

interface StatusPanelProps {
  title: string;
  icon: React.ReactNode;
  metrics: Metric[];
}

const StatusPanel: React.FC<StatusPanelProps> = ({ title, icon, metrics }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-green-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500/20 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 border-yellow-500/30';
      default: return 'bg-green-500/20 border-green-500/30';
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="text-cyan-400 mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold font-orbitron">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">{metric.label}</span>
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBg(metric.status)}`}>
              <span className={getStatusColor(metric.status)}>{metric.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPanel;