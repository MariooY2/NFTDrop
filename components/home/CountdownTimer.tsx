"use client";
import { useState, useEffect } from "react";

type CountdownProps = {
  targetDate: string;
};

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const mintDate = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = mintDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-300">Public Mint Begins In:</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-3xl font-bold text-purple-400">
            {countdown.days}
          </div>
          <div className="text-gray-400 text-sm">Days</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-3xl font-bold text-purple-400">
            {countdown.hours}
          </div>
          <div className="text-gray-400 text-sm">Hours</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-3xl font-bold text-purple-400">
            {countdown.minutes}
          </div>
          <div className="text-gray-400 text-sm">Minutes</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-3xl font-bold text-purple-400">
            {countdown.seconds}
          </div>
          <div className="text-gray-400 text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}
