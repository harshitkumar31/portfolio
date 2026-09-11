export default function Track(track: {
  ranking: number;
  songUrl: string;
  title: string;
  artist: string;
}) {
  return (
    <div className="flex flex-row items-baseline border-b border-black/[0.06] py-3.5 dark:border-white/[0.08] max-w-3xl w-full">
      <p className="text-[13px] font-mono font-medium text-[#86868b] w-6">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3 min-w-0 flex-1">
        <a
          className="font-medium text-[15px] text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] truncate transition-colors"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="text-[13px] text-[#6e6e73] dark:text-[#86868b] truncate">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
