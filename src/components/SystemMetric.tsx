import React from 'react';

interface SystemMetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: 'normal' | 'warning' | 'critical';
}

const SystemMetric: React.FC<SystemMetricProps> = ({ icon, label, value, status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-400 border-red-400/50';
      case 'warning': return 'text-yellow-400 border-yellow-400/50';
      default: return 'text-green-400 border-green-400/50';
    }
  };

  return (
    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border bg-gray-900/50 ${getStatusColor(status)}`}>
      {icon}
      <span className="text-xs font-medium">{label}</span>
      <span className="text-xs font-mono">{value}</span>
    </div>
  );
};

export default SystemMetric;