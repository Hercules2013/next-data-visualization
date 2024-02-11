import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

const LineChart: React.FC<{ data: any[] }> = ({ data }) => {
  const chartContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainer.current && data && data.length > 0) {
      const chart = new Chart({
        container: chartContainer.current,
        autoFit: true,
        height: 500
      });

      chart
        .interval()
        .data(data)
        .encode('x', '月份')
        .encode('y', '月均降雨量')
        .encode('color', 'name')
        .transform({ type: 'dodgeX' })
        .interaction('elementHighlight', { background: true });

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <div ref={chartContainer}></div>;
};

export default LineChart;