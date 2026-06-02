interface VineLozaProps {
  side: 'left' | 'right';
  vkLink: string;
  grapeImage: string;
}

const VineLoza = ({ side, vkLink, grapeImage }: VineLozaProps) => {
  const isLeft = side === 'left';
  const W = 100;
  const cx = isLeft ? 72 : 28;

  // Главный стебель — одна непрерывная кривая на всю высоту
  const stem = isLeft
    ? `M${cx} 0 C${cx - 22} 180, ${cx + 22} 360, ${cx} 540
       C${cx - 22} 720, ${cx + 22} 900, ${cx} 1080
       C${cx - 22} 1260, ${cx + 22} 1440, ${cx} 1620
       C${cx - 22} 1800, ${cx + 22} 1980, ${cx} 2160
       C${cx - 22} 2340, ${cx + 22} 2520, ${cx} 2700
       C${cx - 22} 2880, ${cx + 22} 3060, ${cx} 3240
       C${cx - 22} 3420, ${cx + 22} 3600, ${cx} 3780
       C${cx - 22} 3960, ${cx + 22} 4140, ${cx} 4320
       C${cx - 22} 4500, ${cx + 22} 4680, ${cx} 4860`
    : `M${cx} 0 C${cx + 22} 180, ${cx - 22} 360, ${cx} 540
       C${cx + 22} 720, ${cx - 22} 900, ${cx} 1080
       C${cx + 22} 1260, ${cx - 22} 1440, ${cx} 1620
       C${cx + 22} 1800, ${cx - 22} 1980, ${cx} 2160
       C${cx + 22} 2340, ${cx - 22} 2520, ${cx} 2700
       C${cx + 22} 2880, ${cx - 22} 3060, ${cx} 3240
       C${cx + 22} 3420, ${cx - 22} 3600, ${cx} 3780
       C${cx + 22} 3960, ${cx - 22} 4140, ${cx} 4320
       C${cx + 22} 4500, ${cx - 22} 4680, ${cx} 4860`;

  // Позиции листьев и гроздьев вдоль стебля
  const leafPositions = [
    160, 430, 700, 970, 1240, 1510, 1780, 2050,
    2320, 2590, 2860, 3130, 3400, 3670, 3940, 4210, 4480,
  ];
  const grapePositions = [
    290, 560, 830, 1100, 1370, 1640, 1910, 2180,
    2450, 2720, 2990, 3260, 3530, 3800, 4070, 4340,
  ];

  // Лист настоящий виноградный — 5-лопастной
  const renderLeaf = (y: number, idx: number) => {
    const flip = isLeft ? (idx % 2 === 0 ? -1 : 1) : (idx % 2 === 0 ? 1 : -1);
    const ox = cx + flip * 8;
    const lx = isLeft ? (idx % 2 === 0 ? ox - 58 : ox + 10) : (idx % 2 === 0 ? ox + 10 : ox - 58);
    const ly = y - 32;
    const scale = 0.78 + (idx % 3) * 0.1;
    const rotate = flip * (12 + (idx % 4) * 6);
    const green = idx % 3 === 0 ? '#5d8a4e' : idx % 3 === 1 ? '#6b9e5a' : '#7aae68';
    const greenDark = idx % 3 === 0 ? '#4a7040' : idx % 3 === 1 ? '#568050' : '#62904e';

    return (
      <g key={`leaf-${y}`} transform={`translate(${lx}, ${ly}) rotate(${rotate}) scale(${scale})`} opacity="0.82">
        {/* Черешок */}
        <path d={`M28 56 Q28 44 28 36`} stroke={greenDark} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* Центральная лопасть */}
        <path d="M28 36 C22 28 10 20 8 10 C6 2 14-4 20 2 C24 6 26 14 28 20 C30 14 32 6 36 2 C42-4 50 2 48 10 C46 20 34 28 28 36Z"
          fill={green} stroke={greenDark} strokeWidth="0.8"/>
        {/* Левая верхняя лопасть */}
        <path d="M20 14 C12 8 2 8 0 16 C-2 24 6 30 16 26 C18 22 20 18 20 14Z"
          fill={green} stroke={greenDark} strokeWidth="0.8"/>
        {/* Правая верхняя лопасть */}
        <path d="M36 14 C44 8 54 8 56 16 C58 24 50 30 40 26 C38 22 36 18 36 14Z"
          fill={green} stroke={greenDark} strokeWidth="0.8"/>
        {/* Левая нижняя лопасть */}
        <path d="M18 26 C8 24 0 30 2 38 C4 44 14 46 22 40 C22 36 20 30 18 26Z"
          fill={green} stroke={greenDark} strokeWidth="0.8"/>
        {/* Правая нижняя лопасть */}
        <path d="M38 26 C48 24 56 30 54 38 C52 44 42 46 34 40 C34 36 36 30 38 26Z"
          fill={green} stroke={greenDark} strokeWidth="0.8"/>
        {/* Прожилки */}
        <path d="M28 36 L28 4" stroke={greenDark} strokeWidth="0.9" opacity="0.6"/>
        <path d="M28 20 L10 10" stroke={greenDark} strokeWidth="0.7" opacity="0.5"/>
        <path d="M28 20 L46 10" stroke={greenDark} strokeWidth="0.7" opacity="0.5"/>
        <path d="M28 28 L6 22" stroke={greenDark} strokeWidth="0.7" opacity="0.5"/>
        <path d="M28 28 L50 22" stroke={greenDark} strokeWidth="0.7" opacity="0.5"/>
        <path d="M22 32 L4 34" stroke={greenDark} strokeWidth="0.6" opacity="0.4"/>
        <path d="M34 32 L52 34" stroke={greenDark} strokeWidth="0.6" opacity="0.4"/>
      </g>
    );
  };

  // Гроздь — конус из ягод
  const renderGrape = (y: number, idx: number) => {
    const flip = isLeft ? (idx % 2 === 0 ? 1 : -1) : (idx % 2 === 0 ? -1 : 1);
    const ox = cx + flip * 6;
    const gx = isLeft ? (idx % 2 === 0 ? ox + 4 : ox - 46) : (idx % 2 === 0 ? ox - 46 : ox + 4);
    const gy = y - 10;
    const berry1 = '#7b4fa0';
    const berry2 = '#6a3d8f';
    const berry3 = '#5c3080';
    const highlight = '#a87dc8';

    return (
      <g key={`grape-${y}`} transform={`translate(${gx}, ${gy})`} opacity="0.8">
        {/* Плодоножка */}
        <path d="M20 0 Q18 6 16 12 M20 0 Q22 6 24 12"
          stroke="#6b8f5e" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        {/* Листочек у основания */}
        <path d="M20 2 C16-2 10 0 12 6 C14 10 20 8 20 2Z" fill="#7a9e6a" opacity="0.7"/>
        <path d="M20 2 C24-2 30 0 28 6 C26 10 20 8 20 2Z" fill="#6b8f5e" opacity="0.6"/>
        {/* Ряд 1 — 2 ягоды */}
        <circle cx="14" cy="15" r="7" fill={berry1}/>
        <circle cx="26" cy="15" r="7" fill={berry2}/>
        <circle cx="12" cy="14" r="2.5" fill={highlight} opacity="0.35"/>
        <circle cx="24" cy="14" r="2.5" fill={highlight} opacity="0.35"/>
        {/* Ряд 2 — 3 ягоды */}
        <circle cx="8" cy="27" r="7" fill={berry2}/>
        <circle cx="20" cy="27" r="7.5" fill={berry1}/>
        <circle cx="32" cy="27" r="7" fill={berry3}/>
        <circle cx="6" cy="26" r="2.5" fill={highlight} opacity="0.3"/>
        <circle cx="18" cy="26" r="2.5" fill={highlight} opacity="0.35"/>
        <circle cx="30" cy="26" r="2.5" fill={highlight} opacity="0.3"/>
        {/* Ряд 3 — 4 ягоды */}
        <circle cx="4" cy="39" r="6.5" fill={berry1}/>
        <circle cx="15" cy="40" r="7" fill={berry2}/>
        <circle cx="26" cy="40" r="7" fill={berry1}/>
        <circle cx="36" cy="39" r="6.5" fill={berry3}/>
        <circle cx="3" cy="38" r="2" fill={highlight} opacity="0.3"/>
        <circle cx="14" cy="38" r="2" fill={highlight} opacity="0.3"/>
        <circle cx="25" cy="38" r="2" fill={highlight} opacity="0.3"/>
        {/* Ряд 4 — 3 ягоды */}
        <circle cx="9" cy="51" r="6.5" fill={berry3}/>
        <circle cx="20" cy="52" r="7" fill={berry1}/>
        <circle cx="31" cy="51" r="6.5" fill={berry2}/>
        <circle cx="8" cy="50" r="2" fill={highlight} opacity="0.28"/>
        <circle cx="19" cy="50" r="2" fill={highlight} opacity="0.3"/>
        {/* Ряд 5 — 2 ягоды */}
        <circle cx="14" cy="63" r="6.5" fill={berry2}/>
        <circle cx="26" cy="63" r="6.5" fill={berry1}/>
        <circle cx="13" cy="61" r="2" fill={highlight} opacity="0.28"/>
        {/* Ряд 6 — 1 ягода */}
        <circle cx="20" cy="74" r="6" fill={berry3}/>
        <circle cx="19" cy="72" r="1.8" fill={highlight} opacity="0.25"/>
      </g>
    );
  };

  // Усик
  const renderTendril = (y: number, idx: number) => {
    const flip = isLeft ? (idx % 2 === 0 ? -1 : 1) : (idx % 2 === 0 ? 1 : -1);
    const tx = cx + flip * 14;
    const ex = tx + flip * 28;
    return (
      <path key={`tendril-${y}`}
        d={`M${tx} ${y} C${tx + flip * 18} ${y - 10}, ${ex + flip * 10} ${y + 8}, ${ex} ${y + 4} C${ex - flip * 8} ${y}, ${ex - flip * 14} ${y + 16}, ${ex - flip * 6} ${y + 20}`}
        stroke="#8aaa7a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
    );
  };

  const tendrils = leafPositions.filter((_, i) => i % 2 === 0);

  return (
    <div
      className="hidden md:block absolute top-0 w-28 pointer-events-none"
      style={{ height: '100%', zIndex: 1, [isLeft ? 'left' : 'right']: 0 }}
    >
      <svg
        width={W}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: `${W}px`, height: '100%', [isLeft ? 'marginLeft' : 'marginRight']: 0 }}
        preserveAspectRatio="xMidYMin meet"
        viewBox={`0 0 ${W} 4900`}
      >
        {/* Стебель */}
        <path d={stem} stroke="#6b8f5e" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9"/>
        <path d={stem} stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" strokeDasharray="6 10"/>

        {/* Листья */}
        {leafPositions.map((y, i) => renderLeaf(y, i))}

        {/* Гроздья */}
        {grapePositions.map((y, i) => renderGrape(y, i))}

        {/* Усики */}
        {tendrils.map((y, i) => renderTendril(y, i))}
      </svg>

      {/* Кнопка-виноград только на правой лозе */}
      {!isLeft && (
        <a
          href={vkLink}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center absolute bottom-4 left-1/2 -translate-x-1/2 transition-transform hover:scale-110"
          title="Сообщество ВКонтакте"
          style={{ zIndex: 10 }}
        >
          <img src={grapeImage} alt="Виноград — ВКонтакте" className="w-12 h-12 object-contain drop-shadow-lg" />
        </a>
      )}
    </div>
  );
};

export default VineLoza;
