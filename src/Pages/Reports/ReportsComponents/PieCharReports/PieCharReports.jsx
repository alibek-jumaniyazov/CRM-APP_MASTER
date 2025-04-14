import React, { useEffect, useRef, useState } from 'react';

const PieCharReports = ({ data, colors, labels, ringWidth }) => {
    const canvasRef = useRef(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [gap, setGap] = useState(0); // Начальное значение gap — 0

    // Функция для анимации gap
    const animateGap = (targetGap) => {
        const duration = 300; // Длительность анимации (300 миллисекунд)
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


        const drawSegment = (ctx, centerX, centerY, radius, innerRadius, startAngle, endAngle, color, isHovered) => {
            ctx.beginPath();
            const adjustedRadius = isHovered ? radius + 5 : radius;
            ctx.arc(centerX, centerY, adjustedRadius, startAngle + gap, endAngle - gap);
            ctx.arc(centerX, centerY, innerRadius, endAngle - gap, startAngle + gap, true);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.lineJoin = 'round';
            ctx.fill();
        };


        ctx.clearRect(0, 0, canvas.width, canvas.height);


        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const startAngle = currentAngle;
            const endAngle = currentAngle + sliceAngle;
            const isHoveredSegment = index === hoverIndex;


            drawSegment(ctx, centerX, centerY, radius, radius - ringWidth, startAngle, endAngle, colors[index], isHoveredSegment);


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
    }, [data, colors, ringWidth, hoverIndex, gap]);

    const handleMouseMove = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = 104;
        const centerY = 104;
        const radius = 104;

        let angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        if (angle < 0) angle += 2 * Math.PI;

        const total = data.reduce((acc, value) => acc + value, 0);
        let currentAngle = 0;
        let hoverIndex = null;

        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const startAngle = currentAngle;
            const endAngle = currentAngle + sliceAngle;

            if (angle >= startAngle && angle < endAngle) {
                hoverIndex = index;
            }
            currentAngle += sliceAngle;
        });

        setHoverIndex(hoverIndex);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };


    const handleBoxHoverEnter = () => {
        animateGap(0.02 * Math.PI);
    };

    const handleBoxHoverLeave = () => {
        animateGap(0);
    };

    return (
        <div className='CharDonut' style={{ textAlign: 'center' }}>
            <canvas
                ref={canvasRef}
                width="208"
                height="208"
                style={{ backgroundColor: '#FFFFFF', display: 'block', borderRadius: '50%', marginTop: '20px' }}
                onMouseEnter={handleBoxHoverEnter}
                onMouseLeave={handleBoxHoverLeave}
            />
            <div className='CharDonutLables'>
                {labels.map((label, index) => (
                    <div className='CharDonutLables_Content' key={index}>
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

export default PieCharReports;
