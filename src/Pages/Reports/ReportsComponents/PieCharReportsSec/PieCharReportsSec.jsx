import { Icon } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '../../../../Assets/icons/icons';

const PieCharReportsSec = ({ data, colors, labels, ringWidth }) => {
    const canvasRef = useRef(null);
    const [gap, setGap] = useState(0);
    const [isCanvasHovered, setIsCanvasHovered] = useState(false); // Состояние ховера над canvas

    const animateGap = (targetGap) => {
        const duration = 300;
        const startTime = performance.now();
        const initialGap = gap;

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentGap = initialGap + (targetGap - initialGap) * progress;
            setGap(currentGap);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const total = data.reduce((acc, value) => acc + value, 0);
        let currentAngle = 0;
        const centerX = 104;
        const centerY = 104;
        const radius = 104;

        const drawSegment = (ctx, centerX, centerY, radius, innerRadius, startAngle, endAngle, color) => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle + gap, endAngle - gap);
            ctx.arc(centerX, centerY, innerRadius, endAngle - gap, startAngle + gap, true);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.lineJoin = 'round';
            ctx.fill();
        };

        // Очистка канваса перед отрисовкой
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const startAngle = currentAngle;
            const endAngle = currentAngle + sliceAngle;

            // Отрисовка сегментов
            drawSegment(ctx, centerX, centerY, radius, radius - ringWidth, startAngle, endAngle, colors[index]);

            // Отрисовка значений внутри сегментов
            const midAngle = (startAngle + endAngle) / 2;
            const textX = centerX + (radius - ringWidth / 2) * Math.cos(midAngle);
            const textY = centerY + (radius - ringWidth / 2) * Math.sin(midAngle);
            ctx.fillStyle = '#fff';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${value}`, textX, textY);

            currentAngle += sliceAngle;
        });
    }, [data, colors, ringWidth, gap]);

    const handleMouseEnterCanvas = () => {
        setIsCanvasHovered(true);  // Устанавливаем состояние при наведении на canvas
        animateGap(0.02 * Math.PI); // Анимация gap при наведении
    };

    const handleMouseLeaveCanvas = () => {
        setIsCanvasHovered(false); // Убираем состояние при уходе с canvas
        animateGap(0); // Сбрасываем анимацию gap
    };

    return (
        <div className='CharDonut' style={{ textAlign: 'center', position: 'relative' }}>
            <canvas
                ref={canvasRef}
                width="208"
                height="208"
                style={{ backgroundColor: '#FFFFFF', display: 'block', borderRadius: '50%', marginTop: '20px' }}
                onMouseEnter={handleMouseEnterCanvas}
                onMouseLeave={handleMouseLeaveCanvas}
            />
            {isCanvasHovered && (
                <div className='HoverChar'>
                    <div className="HoverChareft">
                        <div className="HoverChareftImg">
                            <Icons.StarsWhiteIcon />
                        </div>
                        <div className="HoverChareftTexts">
                            <h2>16 438</h2>
                            <p>All points</p>
                        </div>
                    </div>
                    <div className="HoverCharRight"></div>
                </div>
            )}
            <div className='CharDonutLables BlyaChartTextBox'>
                {labels.map((label, index) => (
                    <div className='CharDonutLables_Content BlyaChartText' key={index}>
                        <div
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: colors[index],
                                borderRadius: '3px'
                            }}
                        ></div>
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieCharReportsSec;
