import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AmbientSoundWidget: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    // Check if AudioContext is supported
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) {
      setIsSupported(false);
    }

    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const toggleSound = async () => {
    try {
      if (!isPlaying) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = audioCtxRef.current || new AudioContextClass();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          await ctx.resume();
        }

        // Generate 4 seconds of warm low-frequency noise loop for acoustic room tone
        const bufferSize = ctx.sampleRate * 4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 1.8;
        }

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        // Lowpass filter for warm café murmur
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 450;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.0);

        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        source.start(0);
        noiseSourceRef.current = source;
        gainNodeRef.current = gainNode;

        setIsPlaying(true);
      } else {
        if (gainNodeRef.current && audioCtxRef.current) {
          gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.4);
          setTimeout(() => {
            if (noiseSourceRef.current) {
              try {
                noiseSourceRef.current.stop();
                noiseSourceRef.current.disconnect();
              } catch {
                // already stopped
              }
            }
            setIsPlaying(false);
          }, 400);
        } else {
          setIsPlaying(false);
        }
      }
    } catch {
      setIsPlaying(false);
    }
  };

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden sm:block">
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium tracking-wide shadow-sm transition-colors backdrop-blur-md ${
          isPlaying
            ? 'bg-[#211714] text-[#F4EFEA] border-[#C76743]'
            : 'bg-[#FDFBF7]/95 hover:bg-white text-[#4A362D] border-[#DDD4C6]'
        }`}
        title={isPlaying ? 'Pause Dorćol café ambient tone' : 'Play Dorćol café ambient room tone'}
        aria-pressed={isPlaying}
      >
        {isPlaying ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C76743] animate-pulse" />
            <Volume2 className="w-3.5 h-3.5 text-[#C76743]" />
            <span>{t('ambient.active')}</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
            <span className="flex items-center gap-1 text-xs">
              <Sparkles className="w-3 h-3 text-[#C76743]" />
              {t('ambient.inactive')}
            </span>
          </>
        )}
      </button>
    </div>
  );
};