/** Klasör pencerelerindeki 4 kolonlu ikon ızgarası. */
export function FolderGrid({ children }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">{children}</div>
    </div>
  );
}

/**
 * Izgaradaki tek ikon. Çift tıklayınca `onOpen` çalışır.
 * boxed: ikonu sabit 96px kutuya oturtur, ikon yoksa "?" gösterir, alt satırda `subtitle` yazar.
 */
export function FolderTile({ icon, title, subtitle, boxed = false, onOpen }) {
  return (
    <button
      className="flex flex-col items-center gap-2 p-4 rounded hover:bg-blue-50 transition-colors"
      onDoubleClick={onOpen}
    >
      {boxed ? (
        <>
          <div className="flex items-center justify-center w-24 h-24">
            {icon ? (
              <img src={icon} alt={title} className="w-16 h-16 object-contain rounded-xl" />
            ) : (
              <span className="text-green-600 font-bold text-2xl">?</span>
            )}
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-800 leading-tight block">{title}</span>
            <span className="text-xs text-gray-500">{subtitle}</span>
          </div>
        </>
      ) : (
        <>
          <div>
            <img src={icon} className="w-16 h-16 object-contain" />
          </div>
          <span className="text-sm text-gray-800 text-center leading-tight">{title}</span>
        </>
      )}
    </button>
  );
}
