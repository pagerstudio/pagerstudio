'use client';

import { useState, useRef, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  animate,
  PanInfo,
} from 'framer-motion';

interface WhyCard {
  title: React.ReactNode;
  body: React.ReactNode;
  icon: React.ReactNode;
}

function IconHealthcare() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function IconUnlock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}

const CARDS: WhyCard[] = [
  {
    title: <>Healthcare<br />only</>,
    body: <>We don&apos;t work with anyone<br />outside healthcare. Never have.</>,
    icon: <IconHealthcare />,
  },
  {
    title: <>Your competitor<br />Can&apos;t hire us</>,
    body: <>One practice per specialty<br />per city. That&apos;s the rule.</>,
    icon: <IconShield />,
  },
  {
    title: <>Get in before<br />your competitor does</>,
    body: <>Most doctors find out<br />AI is ignoring them too late.</>,
    icon: <IconClock />,
  },
  {
    title: <>We don&apos;t do<br />lock-ins</>,
    body: <>Cancel anytime. We keep<br />clients by producing results.</>,
    icon: <IconUnlock />,
  },
  {
    title: <>Priced for<br />what it returns</>,
    body: <>Two extra patients a month.<br />Fee covered.</>,
    icon: <IconTrendingUp />,
  },
];

const VISIBLE_BEHIND   = 3;
const SWIPE_THRESHOLD  = 80;
const VELOCITY_THRESHOLD = 400;

const CARD_HEIGHT = 380;
const STACK_Y_STEP = 16;
const STACK_SCALE_STEP = 0.05;

function DraggableCard({
  card,
  stackIndex,
  total,
  onSwiped,
  prefersReducedMotion,
  cardNumber,
}: {
  card: WhyCard;
  stackIndex: number;
  total: number;
  onSwiped: () => void;
  prefersReducedMotion: boolean;
  cardNumber: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const riseY = useMotionValue(stackIndex * STACK_Y_STEP);
  const riseScale = useMotionValue(1 - stackIndex * STACK_SCALE_STEP);
  const isSwiping = useRef(false);
  const prevStackIndex = useRef(stackIndex);
  const isFront = stackIndex === 0;
  const isHidden = stackIndex >= VISIBLE_BEHIND;

  const rotate = useTransform(x, [-300, 300], prefersReducedMotion ? [0, 0] : [-12, 12]);

  const targetScale  = 1 - stackIndex * STACK_SCALE_STEP;
  const targetYOffset = stackIndex * STACK_Y_STEP;

  useEffect(() => {
    if (isFront && prevStackIndex.current !== 0) {
      if (prefersReducedMotion) {
        riseY.set(0);
        riseScale.set(1);
      } else {
        animate(riseY, 0, { type: 'spring', stiffness: 350, damping: 30 });
        animate(riseScale, 1, { type: 'spring', stiffness: 350, damping: 30 });
      }
    } else if (!isFront) {
      riseY.set(targetYOffset);
      riseScale.set(targetScale);
    }
    prevStackIndex.current = stackIndex;
  }, [isFront, stackIndex, targetYOffset, targetScale, prefersReducedMotion]);

  async function flyOut(vx: number, vy: number) {
    if (isSwiping.current) return;
    isSwiping.current = true;

    if (prefersReducedMotion) {
      onSwiped();
      x.set(0);
      y.set(0);
      isSwiping.current = false;
      return;
    }

    const useX = Math.abs(vx) >= Math.abs(vy);
    const tx = useX ? Math.sign(vx) * 900 : (vx / Math.abs(vy || 1)) * 600;
    const ty = !useX ? Math.sign(vy) * 900 : (vy / Math.abs(vx || 1)) * 600;

    await Promise.all([
      animate(x, tx, { duration: 0.3, ease: [0.4, 0, 0.2, 1] }),
      animate(y, ty, { duration: 0.3, ease: [0.4, 0, 0.2, 1] }),
    ]);

    onSwiped();

    x.set(0);
    y.set(0);
    isSwiping.current = false;
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const { offset, velocity } = info;
    const dist  = Math.hypot(offset.x, offset.y);
    const speed = Math.hypot(velocity.x, velocity.y);

    if (dist > SWIPE_THRESHOLD || speed > VELOCITY_THRESHOLD) {
      const vx = speed > VELOCITY_THRESHOLD ? velocity.x : offset.x;
      const vy = speed > VELOCITY_THRESHOLD ? velocity.y : offset.y;
      flyOut(vx, vy);
    } else {
      if (prefersReducedMotion) {
        x.set(0);
        y.set(0);
      } else {
        animate(x, 0, { type: 'spring', stiffness: 500, damping: 35 });
        animate(y, 0, { type: 'spring', stiffness: 500, damping: 35 });
      }
    }
  }

  return (
    <motion.div
      className="absolute inset-x-0"
      style={{
        touchAction: 'none',
        x: isFront ? x : 0,
        y: isFront ? riseY : targetYOffset,
        rotate: isFront ? rotate : 0,
        scale: isFront ? riseScale : targetScale,
        zIndex: total - stackIndex,
        opacity: isHidden ? 0 : 1,
        height: CARD_HEIGHT,
        top: 0,
        cursor: isFront ? 'grab' : 'default',
        transformOrigin: 'top center',
        transition: isFront ? undefined : 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s ease',
        willChange: isFront ? 'transform' : 'auto',
      }}
      drag={isFront}
      dragElastic={0.15}
      dragMomentum={false}
      onDragEnd={isFront ? handleDragEnd : undefined}
      whileDrag={{ cursor: 'grabbing' }}
    >
      <div
        className="w-full h-full rounded-[28px] bg-white border border-ps-line flex flex-col select-none overflow-hidden relative"
        style={{
          boxShadow:
            stackIndex === 0
              ? '0 25px 60px -12px rgba(10,10,10,0.18), 0 8px 20px -6px rgba(10,10,10,0.08)'
              : `0 ${Math.max(2, 8 - stackIndex * 2)}px ${Math.max(4, 24 - stackIndex * 6)}px rgba(10,10,10,${Math.max(0.02, 0.08 - stackIndex * 0.02)})`,
        }}
      >
        <div className="flex flex-col flex-1 p-8 sm:p-10 relative">
          {/* Icon — absolute top right */}
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-ps-ink">
              {card.icon}
            </div>
          </div>

          {/* Centered content */}
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h3 className="text-display-lg text-ps-ink text-center mb-1">
              {card.title}
            </h3>
            <p className="text-body-sm text-ps-muted text-center">
              {card.body}
            </p>
          </div>

          {/* Card number — absolute bottom left */}
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10">
            <span className="text-caption-sm text-ps-faint">
              0{cardNumber} / 0{total}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SwipeCardStack() {
  const [order, setOrder] = useState<number[]>(CARDS.map((_, i) => i));
  const prefersReducedMotion = useReducedMotion();

  function handleSwiped() {
    setOrder((prev) => {
      const next = [...prev];
      const front = next.shift()!;
      next.push(front);
      return next;
    });
  }

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div
        className="relative w-full max-w-[520px] mx-auto"
        style={{ height: CARD_HEIGHT + (VISIBLE_BEHIND - 1) * STACK_Y_STEP }}
        aria-label="Swipeable card stack"
      >
        {order.map((cardIdx, stackIndex) => (
          <DraggableCard
            key={cardIdx}
            card={CARDS[cardIdx]}
            stackIndex={stackIndex}
            total={CARDS.length}
            onSwiped={handleSwiped}
            prefersReducedMotion={prefersReducedMotion ?? false}
            cardNumber={cardIdx + 1}
          />
        ))}
      </div>

      <div className="flex items-center gap-2" role="tablist" aria-label="Card position">
        {CARDS.map((_, i) => {
          const isActive = order[0] === i;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={isActive}
              aria-label={`Card ${i + 1}`}
              onClick={() => {
                setOrder((prev) => {
                  const idx = prev.indexOf(i);
                  if (idx === 0) return prev;
                  return [...prev.slice(idx), ...prev.slice(0, idx)];
                });
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width:      isActive ? 24 : 8,
                height:     8,
                background: isActive ? 'var(--color-ps-ink)' : 'var(--color-ps-line)',
              }}
            />
          );
        })}
      </div>

      <p className="text-caption-sm text-ps-faint tracking-wide select-none" aria-hidden="true">
        drag in any direction to browse
      </p>
    </div>
  );
}
