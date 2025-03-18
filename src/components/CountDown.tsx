"use client"
import { useEffect, useState } from "react";

const CountDown = ({ releaseDate }: { releaseDate: string }) => {
    const [timeLeft, setTimeLeft] = useState<{ hours: number, minutes: number, seconds: number } | null>(null);
    useEffect(() => {
        const updateTimer = () => {
            const diff = new Date(releaseDate).getTime() - new Date().getTime();
            if (diff <= 0) {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                window.location.reload();
                return;
            }
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setTimeLeft({ hours, minutes, seconds });
            requestAnimationFrame(updateTimer);
        };

        updateTimer();
    }, [releaseDate]);
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="5" fill="none" />
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#3b82f6"
                        strokeWidth="5"
                        fill="none"
                        strokeDasharray="282.74"
                        strokeDashoffset={timeLeft ? (282.74 * (timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds) / (24 * 3600)) : 282.74}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="50" textAnchor="middle" dy="6" fontSize="12" fill="#111827" fontWeight="bold">
                        {timeLeft ? `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : "Loading..."}
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default CountDown;
