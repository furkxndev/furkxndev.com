"use client";

import { useEffect, useState } from "react";

const roles = [
  "mobil uygulamalar",
  "REST API'lar",
  "yapay zekâ servisleri",
  "2D oyunlar",
];

const TYPE_SPEED = 65;
const DELETE_SPEED = 32;
const HOLD = 1600;

/**
 * Daktilo etkisiyle dönen uzmanlık listesi.
 *
 * Kutunun genişliği her zaman EN UZUN ifadeye göre ayrılır: tüm seçenekler aynı
 * ızgara hücresine görünmez olarak yerleştirilir, animasyonlu metin de onların
 * üstünde durur. Böylece yazı silinip yeniden yazılırken kutu daralıp genişlemez;
 * çevresindeki metin yeniden satırlara bölünmez ve sayfa boyu sabit kalır.
 */
export default function RoleTicker() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const finishedTyping = !deleting && text === current;
    const finishedDeleting = deleting && text === "";
    const delay = finishedTyping ? HOLD : deleting ? DELETE_SPEED : TYPE_SPEED;

    // Durum geçişleri zamanlayıcının içinde: effect gövdesinde senkron setState yok.
    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
        return;
      }
      if (finishedDeleting) {
        setDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
        return;
      }
      setText((value) =>
        deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className="inline-grid align-bottom">
      {/* Görünmez ölçü katmanı — kutunun genişliğini en uzun ifade belirler. */}
      {roles.map((role) => (
        <span
          key={role}
          aria-hidden
          className="invisible col-start-1 row-start-1 whitespace-pre pr-[3px]"
        >
          {role}
        </span>
      ))}

      <span className="col-start-1 row-start-1 whitespace-pre">
        <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text font-medium text-transparent">
          {text}
        </span>
        <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-accent-2 animate-blink" />
      </span>
    </span>
  );
}
